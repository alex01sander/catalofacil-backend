"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_1 = __importDefault(require("../lib/prisma"));
const zod_1 = require("../zod");
const auth_1 = __importDefault(require("../middleware/auth"));
const rateLimiter_1 = require("../middleware/rateLimiter");
const pagination_1 = require("../middleware/pagination");
const cache_1 = require("../lib/cache");
const zod_2 = require("zod");
const router = (0, express_1.Router)();
const idParamSchema = zod_2.z.object({ id: zod_2.z.string().min(1, 'ID obrigatório') });
// Listar vendas do usuário com cache e paginação
router.get('/', auth_1.default, rateLimiter_1.userRateLimit, pagination_1.paginationMiddleware, pagination_1.paginationHeaders, (0, cache_1.cacheMiddleware)(240, (req) => (0, cache_1.generateCacheKey)('sales', req.user.id, {
    page: req.pagination?.page,
    limit: req.pagination?.limit,
    sortBy: req.pagination?.sortBy,
    sortOrder: req.pagination?.sortOrder,
    status: req.query.status,
    dateFrom: req.query.dateFrom,
    dateTo: req.query.dateTo
})), async (req, res) => {
    if (!req.user)
        return res.status(401).json({ error: 'Usuário não autenticado' });
    try {
        // Construir filtros
        const where = { user_id: req.user.id };
        // Filtro por status
        if (req.query.status) {
            where.status = req.query.status;
        }
        // Filtro por data
        if (req.query.dateFrom || req.query.dateTo) {
            where.sale_date = {};
            if (req.query.dateFrom) {
                where.sale_date.gte = new Date(req.query.dateFrom);
            }
            if (req.query.dateTo) {
                where.sale_date.lte = new Date(req.query.dateTo);
            }
        }
        // Query com paginação
        const paginationQuery = (0, pagination_1.getPrismaQuery)(req.pagination, 'sale_date');
        // Buscar vendas e contagem total em paralelo
        const [vendas, totalCount] = await Promise.all([
            prisma_1.default.sales.findMany({
                where,
                include: {
                    stores: {
                        select: {
                            id: true,
                            name: true,
                            slug: true
                        }
                    }
                },
                ...paginationQuery
            }),
            prisma_1.default.sales.count({ where })
        ]);
        // Converter valores decimais para números
        const vendasComValoresNumericos = vendas.map(venda => ({
            ...venda,
            unit_price: Number(venda.unit_price),
            total_price: Number(venda.total_price)
        }));
        const response = (0, pagination_1.createPaginatedResponse)(vendasComValoresNumericos, totalCount, req.pagination);
        res.json(response.data || response);
    }
    catch (error) {
        console.error('Erro ao listar vendas:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
// Resumo das vendas
router.get('/summary', auth_1.default, rateLimiter_1.userRateLimit, async (req, res) => {
    if (!req.user)
        return res.status(401).json({ error: 'Usuário não autenticado' });
    try {
        const { start_date, end_date } = req.query;
        let whereClause = { user_id: req.user.id };
        if (start_date && end_date) {
            whereClause.sale_date = {
                gte: new Date(start_date),
                lte: new Date(end_date)
            };
        }
        const vendas = await prisma_1.default.sales.findMany({
            where: whereClause,
            select: {
                total_price: true,
                quantity: true,
                status: true
            }
        });
        const totalSales = vendas.length;
        const totalRevenue = vendas.reduce((sum, venda) => sum + Number(venda.total_price), 0);
        const averageTicket = totalSales > 0 ? totalRevenue / totalSales : 0;
        // Contar vendas por status
        const completedSales = vendas.filter(venda => venda.status === 'completed').length;
        const cancelledSales = vendas.filter(venda => venda.status === 'cancelled').length;
        res.json({
            totalSales,
            totalRevenue,
            averageTicket: Number(averageTicket.toFixed(2)),
            completedSales,
            cancelledSales
        });
    }
    catch (error) {
        console.error('❌ [Sales] Erro ao buscar resumo:', error);
        res.status(500).json({
            error: 'Erro ao buscar resumo das vendas',
            details: error instanceof Error ? error.message : 'Erro desconhecido'
        });
    }
});
// Produtos mais vendidos
router.get('/top-products', auth_1.default, rateLimiter_1.userRateLimit, async (req, res) => {
    if (!req.user)
        return res.status(401).json({ error: 'Usuário não autenticado' });
    try {
        const limit = parseInt(req.query.limit) || 10;
        const topProducts = await prisma_1.default.sales.groupBy({
            by: ['product_name'],
            where: { user_id: req.user.id },
            _sum: {
                quantity: true,
                total_price: true
            },
            orderBy: {
                _sum: {
                    quantity: 'desc'
                }
            },
            take: limit
        });
        const result = topProducts.map(product => ({
            product_name: product.product_name,
            total_quantity: product._sum.quantity,
            total_revenue: product._sum.total_price
        }));
        res.json(result);
    }
    catch (error) {
        console.error('❌ [Sales] Erro ao buscar produtos mais vendidos:', error);
        res.status(500).json({
            error: 'Erro ao buscar produtos mais vendidos',
            details: error instanceof Error ? error.message : 'Erro desconhecido'
        });
    }
});
// Buscar venda por ID
router.get('/:id', auth_1.default, async (req, res) => {
    const parse = idParamSchema.safeParse(req.params);
    if (!parse.success) {
        return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
    }
    // Validar formato UUID
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(req.params.id)) {
        return res.status(404).json({ error: 'Venda não encontrada' });
    }
    try {
        const venda = await prisma_1.default.sales.findUnique({
            where: { id: req.params.id },
            include: { stores: true }
        });
        if (!venda)
            return res.status(404).json({ error: 'Venda não encontrada' });
        // Converter valores decimais para números
        const vendaComValoresNumericos = {
            ...venda,
            unit_price: Number(venda.unit_price),
            total_price: Number(venda.total_price)
        };
        res.json(vendaComValoresNumericos);
    }
    catch (error) {
        console.error('Erro ao buscar venda:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
// Criar venda
router.post('/', auth_1.default, rateLimiter_1.userRateLimit, async (req, res) => {
    if (!req.user)
        return res.status(401).json({ error: 'Usuário não autenticado' });
    console.log('📝 [Sales] Payload recebido:', JSON.stringify(req.body, null, 2));
    // Extrair product_id se existir (será removido antes da validação)
    const { product_id, ...saleDataWithoutProductId } = req.body;
    const parse = zod_1.salesCreateInputSchema.safeParse(saleDataWithoutProductId);
    if (!parse.success) {
        console.error('❌ [Sales] Erro de validação:', parse.error.issues);
        return res.status(400).json({ error: 'Dados inválidos', details: parse.error.issues });
    }
    try {
        // Preparar dados para o Prisma
        const salesData = {
            ...parse.data,
            user_id: req.user.id,
            // Converter valores string para número se necessário
            unit_price: Number(parse.data.unit_price),
            total_price: Number(parse.data.total_price),
            // Garantir que sale_date seja uma Date
            sale_date: parse.data.sale_date instanceof Date ? parse.data.sale_date : new Date(parse.data.sale_date)
        };
        console.log('💾 [Sales] Dados para o Prisma:', JSON.stringify(salesData, null, 2));
        const nova = await prisma_1.default.sales.create({ data: salesData });
        // Se product_id foi fornecido, descontar do estoque
        if (product_id) {
            console.log('📦 [Sales] Descontando estoque do produto:', product_id);
            try {
                await prisma_1.default.products.update({
                    where: { id: product_id },
                    data: { stock: { decrement: parse.data.quantity } }
                });
                console.log('✅ [Sales] Estoque atualizado com sucesso');
            }
            catch (stockError) {
                console.warn('⚠️ [Sales] Erro ao atualizar estoque (venda já foi criada):', stockError);
            }
        }
        // Limpar cache do usuário após criar venda
        (0, cache_1.clearUserCache)(req.user.id);
        // Converter valores decimais para números
        const novaComValoresNumericos = {
            ...nova,
            unit_price: Number(nova.unit_price),
            total_price: Number(nova.total_price)
        };
        console.log('✅ [Sales] Venda criada com sucesso:', nova.id);
        res.status(201).json(novaComValoresNumericos);
    }
    catch (error) {
        console.error('❌ [Sales] Erro ao criar venda:', error);
        res.status(500).json({
            error: 'Erro interno do servidor',
            details: error instanceof Error ? error.message : 'Erro desconhecido'
        });
    }
});
// Atualizar venda
router.put('/:id', auth_1.default, async (req, res) => {
    const parse = idParamSchema.safeParse(req.params);
    if (!parse.success) {
        return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
    }
    // Validar formato UUID
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(req.params.id)) {
        return res.status(404).json({ error: 'Venda não encontrada' });
    }
    const parseBody = zod_1.salesUpdateInputSchema.safeParse(req.body);
    if (!parseBody.success) {
        return res.status(400).json({ error: 'Dados inválidos', details: parseBody.error.issues });
    }
    try {
        const atualizada = await prisma_1.default.sales.update({
            where: { id: req.params.id },
            data: parseBody.data,
        });
        // Converter valores decimais para números
        const atualizadaComValoresNumericos = {
            ...atualizada,
            unit_price: Number(atualizada.unit_price),
            total_price: Number(atualizada.total_price)
        };
        res.json(atualizadaComValoresNumericos);
    }
    catch (error) {
        console.error('Erro ao atualizar venda:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
// Deletar venda
router.delete('/:id', auth_1.default, async (req, res) => {
    const parse = idParamSchema.safeParse(req.params);
    if (!parse.success) {
        return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
    }
    // Validar formato UUID
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(req.params.id)) {
        return res.status(404).json({ error: 'Venda não encontrada' });
    }
    try {
        await prisma_1.default.sales.delete({ where: { id: req.params.id } });
        res.status(200).json({ message: 'Venda deletada com sucesso' });
    }
    catch (error) {
        console.error('Erro ao deletar venda:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
// Rota específica para registrar venda de produto (integração com fluxo de caixa)
router.post('/product-sale', auth_1.default, rateLimiter_1.userRateLimit, async (req, res) => {
    if (!req.user)
        return res.status(401).json({ error: 'Usuário não autenticado' });
    console.log('🛒 [ProductSale] Payload recebido:', JSON.stringify(req.body, null, 2));
    try {
        // Validar dados obrigatórios
        const { product_id, quantity, unit_price, payment_method = 'dinheiro', sale_date } = req.body;
        if (!product_id || !quantity || !unit_price) {
            return res.status(400).json({
                error: 'Dados obrigatórios faltando',
                required: ['product_id', 'quantity', 'unit_price'],
                received: { product_id, quantity, unit_price }
            });
        }
        // Buscar o produto para obter informações
        const produto = await prisma_1.default.products.findUnique({
            where: { id: product_id },
            select: {
                id: true,
                name: true,
                price: true,
                stock: true,
                user_id: true,
                store_id: true
            }
        });
        if (!produto) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }
        // Verificar se o produto pertence ao usuário
        if (produto.user_id !== req.user.id) {
            return res.status(403).json({ error: 'Produto não pertence ao usuário' });
        }
        // Verificar estoque
        if (produto.stock < quantity) {
            return res.status(400).json({
                error: 'Estoque insuficiente',
                available: produto.stock,
                requested: quantity
            });
        }
        const total_price = parseFloat(unit_price) * quantity;
        const data_venda = sale_date ? new Date(sale_date) : new Date();
        console.log('📊 [ProductSale] Dados calculados:', {
            product_name: produto.name,
            quantity,
            unit_price: parseFloat(unit_price),
            total_price,
            stock_before: produto.stock,
            stock_after: produto.stock - quantity
        });
        // Usar transação para garantir consistência
        const resultado = await prisma_1.default.$transaction(async (tx) => {
            // 1. Criar registro de venda
            const venda = await tx.sales.create({
                data: {
                    user_id: req.user.id,
                    product_name: produto.name,
                    quantity: quantity,
                    unit_price: Number(unit_price),
                    total_price: Number(total_price),
                    sale_date: data_venda,
                    status: 'completed',
                    store_id: produto.store_id
                }
            });
            console.log('✅ [ProductSale] Venda criada:', venda.id);
            // 2. Atualizar estoque do produto
            await tx.products.update({
                where: { id: product_id },
                data: { stock: { decrement: quantity } }
            });
            console.log('✅ [ProductSale] Estoque atualizado');
            // 3. Registrar entrada no fluxo de caixa
            const fluxo = await tx.cash_flow.create({
                data: {
                    user_id: req.user.id,
                    store_id: produto.store_id,
                    type: 'entrada',
                    category: 'vendas',
                    description: `Venda - ${produto.name} (${quantity}x)`,
                    amount: total_price,
                    date: data_venda,
                    payment_method: payment_method
                }
            });
            console.log('✅ [ProductSale] Fluxo de caixa registrado:', fluxo.id);
            return { venda, fluxo };
        });
        // Limpar cache do usuário
        (0, cache_1.clearUserCache)(req.user.id);
        console.log('🎉 [ProductSale] Venda completa registrada com sucesso!');
        res.status(201).json({
            success: true,
            message: 'Venda registrada com sucesso',
            venda: resultado.venda,
            fluxo: resultado.fluxo,
            produto: {
                id: produto.id,
                name: produto.name,
                novo_estoque: produto.stock - quantity
            }
        });
    }
    catch (error) {
        console.error('❌ [ProductSale] Erro ao registrar venda:', error);
        res.status(500).json({
            error: 'Erro interno do servidor',
            details: error instanceof Error ? error.message : 'Erro desconhecido'
        });
    }
});
// Criar múltiplas vendas
router.post('/bulk', auth_1.default, rateLimiter_1.userRateLimit, async (req, res) => {
    if (!req.user)
        return res.status(401).json({ error: 'Usuário não autenticado' });
    try {
        const { sales } = req.body;
        if (!Array.isArray(sales) || sales.length === 0) {
            return res.status(400).json({ error: 'Dados inválidos' });
        }
        const vendasCriadas = [];
        for (const saleData of sales) {
            const { product_name, quantity, unit_price, sale_date } = saleData;
            if (!product_name || !quantity || !unit_price) {
                return res.status(400).json({ error: 'Dados inválidos' });
            }
            const total_price = Number(unit_price) * quantity;
            const data_venda = sale_date ? new Date(sale_date) : new Date();
            const venda = await prisma_1.default.sales.create({
                data: {
                    user_id: req.user.id,
                    product_name,
                    quantity,
                    unit_price: Number(unit_price),
                    total_price,
                    sale_date: data_venda,
                    status: 'completed'
                }
            });
            vendasCriadas.push(venda);
        }
        res.status(201).json(vendasCriadas);
    }
    catch (error) {
        console.error('❌ [Sales] Erro ao criar vendas em lote:', error);
        res.status(500).json({
            error: 'Erro ao criar vendas em lote',
            details: error instanceof Error ? error.message : 'Erro desconhecido'
        });
    }
});
exports.default = router;
