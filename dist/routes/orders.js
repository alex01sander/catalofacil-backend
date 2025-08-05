"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_1 = __importDefault(require("../lib/prisma"));
const zod_1 = require("../zod");
const auth_1 = __importDefault(require("../middleware/auth"));
const zod_2 = require("zod");
const router = (0, express_1.Router)();
const idParamSchema = zod_2.z.object({ id: zod_2.z.string().min(1, 'ID obrigatório') });
// Função auxiliar para processar pedido aceito
async function processOrderAcceptance(orderId, userId) {
    console.log(`🔄 [Orders] Processando aceitação do pedido: ${orderId}`);
    try {
        // Buscar pedido com itens
        const pedido = await prisma_1.default.orders.findUnique({
            where: { id: orderId },
            include: {
                order_items: {
                    include: {
                        products: true
                    }
                }
            }
        });
        if (!pedido) {
            throw new Error('Pedido não encontrado');
        }
        // Verificar se já existe venda para este pedido (prevenção de duplicação)
        const vendaExistente = await prisma_1.default.sales.findFirst({
            where: {
                user_id: userId,
                product_name: {
                    contains: `Pedido #${pedido.id.substring(0, 8)}`
                }
            }
        });
        if (vendaExistente) {
            console.log(`⚠️ [Orders] Pedido ${orderId} já foi processado anteriormente`);
            throw new Error('Este pedido já foi processado anteriormente');
        }
        console.log(`📦 [Orders] Processando ${pedido.order_items.length} itens do pedido`);
        // Validar estoque antes do processamento
        for (const item of pedido.order_items) {
            if (item.products.stock < item.quantity) {
                throw new Error(`Estoque insuficiente para o produto "${item.products.name}". Disponível: ${item.products.stock}, Solicitado: ${item.quantity}`);
            }
        }
        // Usar transação para garantir consistência
        await prisma_1.default.$transaction(async (tx) => {
            // 1. Criar registros de venda para cada item
            for (const item of pedido.order_items) {
                await tx.sales.create({
                    data: {
                        user_id: userId,
                        store_id: pedido.store_id,
                        product_name: item.products.name,
                        quantity: item.quantity,
                        unit_price: item.unit_price,
                        total_price: item.total_price,
                        sale_date: new Date(),
                        status: 'completed'
                    }
                });
                // 2. Atualizar estoque do produto
                await tx.products.update({
                    where: { id: item.product_id },
                    data: {
                        stock: {
                            decrement: item.quantity
                        }
                    }
                });
                console.log(`✅ [Orders] Produto ${item.products.name} - Venda criada e estoque atualizado`);
            }
            // 3. Registrar entrada no fluxo de caixa
            await tx.cash_flow.create({
                data: {
                    user_id: userId,
                    store_id: pedido.store_id,
                    type: 'entrada',
                    category: 'vendas',
                    description: `Venda - Pedido #${pedido.id.substring(0, 8)}`,
                    amount: pedido.total_amount,
                    date: new Date(),
                    payment_method: 'dinheiro' // Pode ser parametrizado futuramente
                }
            });
            console.log(`💰 [Orders] Entrada de R$ ${pedido.total_amount} registrada no fluxo de caixa`);
            // 4. Se tiver informações de crédito, criar conta de crédito
            if (pedido.customer_phone) {
                // Verificar se já existe conta de crédito para este cliente
                let contaCredito = await tx.credit_accounts.findFirst({
                    where: {
                        customer_phone: pedido.customer_phone
                    }
                });
                // Se não existir, criar nova conta
                if (!contaCredito) {
                    contaCredito = await tx.credit_accounts.create({
                        data: {
                            user_id: userId,
                            customer_name: pedido.customer_name,
                            customer_phone: pedido.customer_phone,
                            total_debt: 0,
                            status: 'active'
                        }
                    });
                }
                // Registrar transação de crédito (venda a prazo se necessário)
                // Por padrão, registramos como pagamento à vista
                await tx.credit_transactions.create({
                    data: {
                        credit_account_id: contaCredito.id,
                        user_id: userId,
                        type: 'payment',
                        amount: pedido.total_amount,
                        description: `Pagamento - Pedido #${pedido.id.substring(0, 8)}`
                    }
                });
                console.log(`📋 [Orders] Transação de crédito registrada para ${pedido.customer_name}`);
            }
        });
        console.log(`✅ [Orders] Pedido ${orderId} processado com sucesso!`);
        return true;
    }
    catch (error) {
        console.error(`❌ [Orders] Erro ao processar pedido ${orderId}:`, error);
        throw error;
    }
}
// Listar todos os pedidos (MELHORADA - apenas pedidos com itens)
router.get('/', auth_1.default, async (req, res) => {
    try {
        const pedidos = await prisma_1.default.orders.findMany({
            where: {
                order_items: {
                    some: {} // Só retorna pedidos que têm pelo menos 1 item
                }
            },
            include: {
                order_items: {
                    include: {
                        products: {
                            select: {
                                id: true,
                                name: true,
                                description: true,
                                price: true,
                                image: true
                            }
                        }
                    }
                },
                customers: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        phone: true
                    }
                },
                stores: {
                    select: {
                        id: true,
                        name: true,
                        slug: true
                    }
                }
            },
            orderBy: {
                created_at: 'desc'
            }
        });
        // Log para debug
        console.log(`📊 Retornando ${pedidos.length} pedidos para o frontend`);
        console.log(`🔍 Primeiro pedido tem ${pedidos[0] ? 'itens' : '0'} itens`);
        res.json(pedidos);
    }
    catch (error) {
        console.error('❌ Erro ao buscar pedidos:', error);
        res.status(500).json({
            error: 'Erro interno do servidor',
            details: error instanceof Error ? error.message : 'Erro desconhecido'
        });
    }
});
// Buscar pedido por ID
router.get('/:id', auth_1.default, async (req, res) => {
    const parse = idParamSchema.safeParse(req.params);
    if (!parse.success) {
        return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
    }
    // Validar formato UUID
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(req.params.id)) {
        return res.status(404).json({ error: 'Pedido não encontrado' });
    }
    try {
        const pedido = await prisma_1.default.orders.findUnique({
            where: { id: req.params.id },
            include: {
                order_items: {
                    include: {
                        products: {
                            select: {
                                id: true,
                                name: true,
                                description: true,
                                price: true,
                                image: true,
                                stock: true
                            }
                        }
                    }
                },
                customers: true,
                stores: true
            }
        });
        if (!pedido)
            return res.status(404).json({ error: 'Pedido não encontrado' });
        // Converter valores decimais para números
        const pedidoComValoresNumericos = {
            ...pedido,
            total_amount: Number(pedido.total_amount),
            order_items: pedido.order_items.map(item => ({
                ...item,
                unit_price: Number(item.unit_price),
                total_price: Number(item.total_price)
            }))
        };
        res.json(pedidoComValoresNumericos);
    }
    catch (error) {
        console.error('❌ Erro ao buscar pedido:', error);
        res.status(500).json({
            error: 'Erro interno do servidor',
            details: error instanceof Error ? error.message : 'Erro desconhecido'
        });
    }
});
// Verificar status de processamento do pedido
router.get('/:id/processing-status', auth_1.default, async (req, res) => {
    const parse = idParamSchema.safeParse(req.params);
    if (!parse.success) {
        return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
    }
    if (!req.user) {
        return res.status(401).json({ error: 'Usuário não autenticado' });
    }
    try {
        // Buscar o pedido
        const pedido = await prisma_1.default.orders.findUnique({
            where: { id: req.params.id },
            select: {
                id: true,
                status: true,
                store_owner_id: true,
                total_amount: true,
                customer_name: true,
                created_at: true,
                updated_at: true
            }
        });
        if (!pedido) {
            return res.status(404).json({ error: 'Pedido não encontrado' });
        }
        if (pedido.store_owner_id !== req.user.id) {
            return res.status(403).json({ error: 'Não autorizado a visualizar este pedido' });
        }
        // Verificar se existe venda relacionada
        const vendasRelacionadas = await prisma_1.default.sales.findMany({
            where: {
                user_id: req.user.id,
                product_name: {
                    contains: `Pedido #${pedido.id.substring(0, 8)}`
                }
            },
            select: {
                id: true,
                product_name: true,
                quantity: true,
                total_price: true,
                sale_date: true,
                status: true
            }
        });
        // Verificar se existe entrada no fluxo de caixa
        const entradaCaixa = await prisma_1.default.cash_flow.findFirst({
            where: {
                user_id: req.user.id,
                description: `Venda - Pedido #${pedido.id.substring(0, 8)}`
            },
            select: {
                id: true,
                amount: true,
                date: true,
                payment_method: true
            }
        });
        // Verificar transações de crédito relacionadas
        const transacoesCredito = await prisma_1.default.credit_transactions.findMany({
            where: {
                description: {
                    contains: `Pedido #${pedido.id.substring(0, 8)}`
                }
            },
            select: {
                id: true,
                type: true,
                amount: true,
                description: true
            }
        });
        const isProcessed = vendasRelacionadas.length > 0 || entradaCaixa !== null;
        res.json({
            order: pedido,
            processing_status: {
                is_processed: isProcessed,
                processed_at: isProcessed ? (entradaCaixa?.date || vendasRelacionadas[0]?.sale_date) : null,
                has_sales_records: vendasRelacionadas.length > 0,
                has_cash_flow_entry: entradaCaixa !== null,
                has_credit_transactions: transacoesCredito.length > 0
            },
            related_records: {
                sales: vendasRelacionadas,
                cash_flow_entry: entradaCaixa,
                credit_transactions: transacoesCredito
            }
        });
    }
    catch (error) {
        console.error('❌ [Orders] Erro ao verificar status de processamento:', error);
        res.status(500).json({
            error: 'Erro interno do servidor',
            details: error instanceof Error ? error.message : 'Erro desconhecido'
        });
    }
});
// Criar pedido + itens
router.post('/', auth_1.default, async (req, res) => {
    if (!req.user)
        return res.status(401).json({ error: 'Usuário não autenticado' });
    const { order_items, items, ...pedidoData } = req.body;
    // Aceitar tanto 'order_items' quanto 'items'
    const itemsToCreate = order_items || items;
    // Validação: pedido deve conter pelo menos um item
    if (!itemsToCreate || !Array.isArray(itemsToCreate) || itemsToCreate.length === 0) {
        return res.status(400).json({ error: 'Dados inválidos' });
    }
    // Preparar dados do pedido com campos obrigatórios
    const pedidoDataCompleto = {
        ...pedidoData,
        store_owner_id: req.user?.id, // Adicionar automaticamente se não fornecido
        total_amount: itemsToCreate.reduce((sum, item) => sum + (item.total_price || 0), 0) // Calcular automaticamente
    };
    // Validação dos dados do pedido (exceto itens)
    const parse = zod_1.ordersCreateInputSchema.safeParse(pedidoDataCompleto);
    if (!parse.success) {
        return res.status(400).json({ error: 'Dados inválidos', details: parse.error.issues });
    }
    // Verificar se todos os produtos existem
    for (const item of itemsToCreate) {
        if (item.product_id) {
            const produto = await prisma_1.default.products.findUnique({
                where: { id: item.product_id },
                select: { id: true }
            });
            if (!produto) {
                return res.status(404).json({ error: 'Produto não encontrado' });
            }
        }
    }
    try {
        console.log('📝 [Orders] Dados para criar pedido:', JSON.stringify(parse.data, null, 2));
        console.log('📦 [Orders] Itens para criar:', JSON.stringify(itemsToCreate, null, 2));
        const novo = await prisma_1.default.orders.create({
            data: {
                ...parse.data,
                order_items: {
                    create: itemsToCreate
                }
            },
            include: {
                order_items: true
            }
        });
        // Converter valores decimais para números
        const novoComValoresNumericos = {
            ...novo,
            total_amount: Number(novo.total_amount),
            order_items: novo.order_items.map(item => ({
                ...item,
                unit_price: Number(item.unit_price),
                total_price: Number(item.total_price)
            }))
        };
        res.status(201).json(novoComValoresNumericos);
    }
    catch (e) {
        console.error('❌ [Orders] Erro ao criar pedido:', e);
        res.status(400).json({ error: 'Erro ao criar pedido', details: e instanceof Error ? e.message : e });
    }
});
// Atualizar pedido
router.put('/:id', auth_1.default, async (req, res) => {
    const parseParams = idParamSchema.safeParse(req.params);
    if (!parseParams.success) {
        return res.status(400).json({ error: 'Parâmetro inválido', details: parseParams.error.issues });
    }
    const parseBody = zod_1.ordersUpdateInputSchema.safeParse(req.body);
    if (!parseBody.success) {
        return res.status(400).json({ error: 'Dados inválidos', details: parseBody.error.issues });
    }
    // Validar formato UUID
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(req.params.id)) {
        return res.status(404).json({ error: 'Pedido não encontrado' });
    }
    if (!req.user) {
        return res.status(401).json({ error: 'Usuário não autenticado' });
    }
    try {
        // Buscar status atual do pedido
        const pedidoAtual = await prisma_1.default.orders.findUnique({
            where: { id: req.params.id },
            select: { status: true, store_owner_id: true }
        });
        if (!pedidoAtual) {
            return res.status(404).json({ error: 'Pedido não encontrado' });
        }
        // Verificar se o usuário é o proprietário do pedido
        if (pedidoAtual.store_owner_id !== req.user.id) {
            return res.status(403).json({ error: 'Não autorizado a alterar este pedido' });
        }
        // Atualizar o pedido
        const atualizado = await prisma_1.default.orders.update({
            where: { id: req.params.id },
            data: parseBody.data,
        });
        // Verificar se o status mudou para aceito/confirmado
        const statusAceitos = ['accepted', 'confirmed', 'aceito', 'confirmado'];
        const statusAnterior = pedidoAtual.status?.toLowerCase() || 'pending';
        const novoStatus = atualizado.status?.toLowerCase() || 'pending';
        // Se mudou de pending para aceito, processar o pedido
        if (statusAnterior === 'pending' && statusAceitos.includes(novoStatus)) {
            console.log(`🔄 [Orders] Status mudou de '${statusAnterior}' para '${novoStatus}' - Processando aceitação`);
            try {
                await processOrderAcceptance(req.params.id, req.user.id);
                console.log(`✅ [Orders] Pedido ${req.params.id} aceito e processado com sucesso`);
            }
            catch (processError) {
                console.error(`❌ [Orders] Erro ao processar aceitação do pedido:`, processError);
                // Note: O pedido já foi atualizado, mas vamos informar sobre o erro de processamento
                return res.status(207).json({
                    ...atualizado,
                    warning: 'Pedido atualizado, mas houve erro no processamento financeiro',
                    processingError: processError instanceof Error ? processError.message : 'Erro desconhecido'
                });
            }
        }
        res.json(atualizado);
    }
    catch (e) {
        console.error('❌ [Orders] Erro ao atualizar pedido:', e);
        res.status(500).json({
            error: 'Erro ao atualizar pedido',
            details: e instanceof Error ? e.message : 'Erro desconhecido'
        });
    }
});
// Reprocessar pedido aceito manualmente (rota administrativa)
router.post('/:id/reprocess', auth_1.default, async (req, res) => {
    const parse = idParamSchema.safeParse(req.params);
    if (!parse.success) {
        return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
    }
    if (!req.user) {
        return res.status(401).json({ error: 'Usuário não autenticado' });
    }
    try {
        // Verificar se o pedido existe e pertence ao usuário
        const pedido = await prisma_1.default.orders.findUnique({
            where: { id: req.params.id },
            select: {
                id: true,
                status: true,
                store_owner_id: true,
                total_amount: true,
                customer_name: true
            }
        });
        if (!pedido) {
            return res.status(404).json({ error: 'Pedido não encontrado' });
        }
        if (pedido.store_owner_id !== req.user.id) {
            return res.status(403).json({ error: 'Não autorizado a reprocessar este pedido' });
        }
        // Verificar se o pedido está em status aceito
        const statusAceitos = ['accepted', 'confirmed', 'aceito', 'confirmado'];
        if (!statusAceitos.includes(pedido.status?.toLowerCase() || '')) {
            return res.status(400).json({
                error: 'Pedido deve estar com status aceito/confirmado para ser reprocessado',
                currentStatus: pedido.status
            });
        }
        console.log(`🔄 [Orders] Reprocessando pedido ${req.params.id} manualmente`);
        try {
            await processOrderAcceptance(req.params.id, req.user.id);
            res.json({
                success: true,
                message: `Pedido ${req.params.id} reprocessado com sucesso`,
                order: {
                    id: pedido.id,
                    customer_name: pedido.customer_name,
                    total_amount: pedido.total_amount,
                    processed_at: new Date()
                }
            });
        }
        catch (processError) {
            console.error(`❌ [Orders] Erro ao reprocessar pedido:`, processError);
            res.status(500).json({
                error: 'Erro ao reprocessar pedido',
                details: processError instanceof Error ? processError.message : 'Erro desconhecido'
            });
        }
    }
    catch (error) {
        console.error('❌ [Orders] Erro na rota de reprocessamento:', error);
        res.status(500).json({
            error: 'Erro interno do servidor',
            details: error instanceof Error ? error.message : 'Erro desconhecido'
        });
    }
});
// Adicionar item ao pedido
router.post('/:id/items', auth_1.default, async (req, res) => {
    const parse = idParamSchema.safeParse(req.params);
    if (!parse.success) {
        return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
    }
    if (!req.user) {
        return res.status(401).json({ error: 'Usuário não autenticado' });
    }
    // Validar formato UUID
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(req.params.id)) {
        return res.status(404).json({ error: 'Pedido não encontrado' });
    }
    try {
        // Verificar se o pedido existe e pertence ao usuário
        const pedido = await prisma_1.default.orders.findUnique({
            where: { id: req.params.id },
            select: { id: true, store_owner_id: true }
        });
        if (!pedido) {
            return res.status(404).json({ error: 'Pedido não encontrado' });
        }
        if (pedido.store_owner_id !== req.user.id) {
            return res.status(403).json({ error: 'Não autorizado a adicionar itens a este pedido' });
        }
        // Validar formato UUID do product_id
        const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        if (!req.body.product_id || !uuidRegex.test(req.body.product_id)) {
            return res.status(400).json({ error: 'ID do produto inválido' });
        }
        // Verificar se o produto existe
        const produto = await prisma_1.default.products.findUnique({
            where: { id: req.body.product_id },
            select: { id: true, name: true }
        });
        if (!produto) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }
        // Criar item do pedido
        const item = await prisma_1.default.order_items.create({
            data: {
                order_id: req.params.id,
                product_id: req.body.product_id,
                quantity: req.body.quantity,
                unit_price: req.body.unit_price,
                total_price: req.body.total_price
            }
        });
        // Converter valores decimais para números
        const itemComValoresNumericos = {
            ...item,
            unit_price: Number(item.unit_price),
            total_price: Number(item.total_price)
        };
        res.status(201).json(itemComValoresNumericos);
    }
    catch (error) {
        console.error('❌ [Orders] Erro ao adicionar item:', error);
        res.status(500).json({
            error: 'Erro ao adicionar item ao pedido',
            details: error instanceof Error ? error.message : 'Erro desconhecido'
        });
    }
});
// Atualizar item do pedido
router.put('/:id/items/:itemId', auth_1.default, async (req, res) => {
    const parse = idParamSchema.safeParse(req.params);
    if (!parse.success) {
        return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
    }
    if (!req.user) {
        return res.status(401).json({ error: 'Usuário não autenticado' });
    }
    // Validar formato UUID
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(req.params.id) || !uuidRegex.test(req.params.itemId)) {
        return res.status(404).json({ error: 'Item não encontrado' });
    }
    try {
        // Verificar se o item existe e pertence a um pedido do usuário
        const item = await prisma_1.default.order_items.findUnique({
            where: { id: req.params.itemId },
            include: {
                orders: {
                    select: { store_owner_id: true }
                }
            }
        });
        if (!item) {
            return res.status(404).json({ error: 'Item não encontrado' });
        }
        if (item.orders.store_owner_id !== req.user.id) {
            return res.status(403).json({ error: 'Não autorizado a atualizar este item' });
        }
        // Atualizar item
        const itemAtualizado = await prisma_1.default.order_items.update({
            where: { id: req.params.itemId },
            data: {
                quantity: req.body.quantity,
                unit_price: req.body.unit_price,
                total_price: req.body.total_price
            }
        });
        // Converter valores decimais para números
        const itemAtualizadoComValoresNumericos = {
            ...itemAtualizado,
            unit_price: Number(itemAtualizado.unit_price),
            total_price: Number(itemAtualizado.total_price)
        };
        res.json(itemAtualizadoComValoresNumericos);
    }
    catch (error) {
        console.error('❌ [Orders] Erro ao atualizar item:', error);
        res.status(500).json({
            error: 'Erro ao atualizar item do pedido',
            details: error instanceof Error ? error.message : 'Erro desconhecido'
        });
    }
});
// Deletar item do pedido
router.delete('/:id/items/:itemId', auth_1.default, async (req, res) => {
    const parse = idParamSchema.safeParse(req.params);
    if (!parse.success) {
        return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
    }
    if (!req.user) {
        return res.status(401).json({ error: 'Usuário não autenticado' });
    }
    // Validar formato UUID
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(req.params.id) || !uuidRegex.test(req.params.itemId)) {
        return res.status(404).json({ error: 'Item não encontrado' });
    }
    try {
        // Verificar se o item existe e pertence a um pedido do usuário
        const item = await prisma_1.default.order_items.findUnique({
            where: { id: req.params.itemId },
            include: {
                orders: {
                    select: { store_owner_id: true }
                }
            }
        });
        if (!item) {
            return res.status(404).json({ error: 'Item não encontrado' });
        }
        if (item.orders.store_owner_id !== req.user.id) {
            return res.status(403).json({ error: 'Não autorizado a deletar este item' });
        }
        // Deletar item
        await prisma_1.default.order_items.delete({
            where: { id: req.params.itemId }
        });
        res.json({ message: 'Item deletado com sucesso' });
    }
    catch (error) {
        console.error('❌ [Orders] Erro ao deletar item:', error);
        res.status(500).json({
            error: 'Erro ao deletar item do pedido',
            details: error instanceof Error ? error.message : 'Erro desconhecido'
        });
    }
});
// Deletar pedido
router.delete('/:id', auth_1.default, async (req, res) => {
    const parse = idParamSchema.safeParse(req.params);
    if (!parse.success) {
        return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
    }
    // Validar formato UUID
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(req.params.id)) {
        return res.status(404).json({ error: 'Pedido não encontrado' });
    }
    try {
        await prisma_1.default.orders.delete({ where: { id: req.params.id } });
        res.status(200).json({ message: 'Pedido deletado com sucesso' });
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao deletar pedido', details: e });
    }
});
exports.default = router;
