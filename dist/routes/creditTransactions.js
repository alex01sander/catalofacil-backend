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
// Função para calcular datas de vencimento baseado na frequência
function calculateDueDates(firstDueDate, installmentsCount, frequency) {
    const dueDates = [];
    const startDate = new Date(firstDueDate);
    for (let i = 0; i < installmentsCount; i++) {
        const dueDate = new Date(startDate);
        switch (frequency) {
            case 'diaria':
                dueDate.setDate(startDate.getDate() + i);
                break;
            case 'semanal':
                dueDate.setDate(startDate.getDate() + (i * 7));
                break;
            case 'quinzenal':
                dueDate.setDate(startDate.getDate() + (i * 15));
                break;
            case 'mensal':
                dueDate.setMonth(startDate.getMonth() + i);
                break;
            default:
                dueDate.setDate(startDate.getDate() + i);
        }
        dueDates.push(dueDate);
    }
    return dueDates;
}
// Função para recalcular total_debt baseado nas transações
async function recalcularTotalDebt(creditAccountId, tx) {
    const prismaClient = tx || prisma_1.default;
    try {
        // Buscar todas as transações da conta
        const transacoes = await prismaClient.credit_transactions.findMany({
            where: { credit_account_id: creditAccountId },
            select: { type: true, amount: true }
        });
        // Calcular total
        let totalDebt = 0;
        for (const transacao of transacoes) {
            if (transacao.type === 'debito') {
                totalDebt += parseFloat(transacao.amount.toString());
            }
            else if (transacao.type === 'pagamento') {
                totalDebt -= parseFloat(transacao.amount.toString());
            }
        }
        // Garantir que não seja negativo
        totalDebt = Math.max(0, totalDebt);
        // Atualizar total_debt
        await prismaClient.credit_accounts.update({
            where: { id: creditAccountId },
            data: { total_debt: totalDebt }
        });
        console.log(`✅ [CreditTransactions] Total de dívida recalculado para conta ${creditAccountId}: R$ ${totalDebt.toFixed(2)}`);
        return totalDebt;
    }
    catch (error) {
        console.error('❌ [CreditTransactions] Erro ao recalcular total_debt:', error);
        throw error;
    }
}
// Função para atualizar total_debt de forma segura
async function atualizarTotalDebt(creditAccountId, tipo, valor, tx) {
    const prismaClient = tx || prisma_1.default;
    try {
        if (tipo === 'debito') {
            await prismaClient.credit_accounts.update({
                where: { id: creditAccountId },
                data: {
                    total_debt: {
                        increment: valor
                    }
                }
            });
        }
        else if (tipo === 'pagamento') {
            await prismaClient.credit_accounts.update({
                where: { id: creditAccountId },
                data: {
                    total_debt: {
                        decrement: valor
                    }
                }
            });
        }
        console.log(`✅ [CreditTransactions] Total de dívida atualizado: ${tipo} R$ ${valor.toFixed(2)}`);
    }
    catch (error) {
        console.error('❌ [CreditTransactions] Erro ao atualizar total_debt:', error);
        throw error;
    }
}
// Listar transações de crédito do usuário
router.get('/', auth_1.default, rateLimiter_1.userRateLimit, pagination_1.paginationMiddleware, pagination_1.paginationHeaders, (0, cache_1.cacheMiddleware)(300, (req) => (0, cache_1.generateCacheKey)('credit-transactions', req.user.id, {
    page: req.pagination?.page,
    limit: req.pagination?.limit,
    credit_account_id: req.query.credit_account_id,
    type: req.query.type
})), async (req, res) => {
    if (!req.user)
        return res.status(401).json({ error: 'Usuário não autenticado' });
    try {
        // Construir filtros
        const where = {};
        // Filtro por conta de crédito
        if (req.query.credit_account_id) {
            where.credit_account_id = req.query.credit_account_id;
        }
        // Filtro por tipo
        if (req.query.type) {
            where.type = req.query.type;
        }
        // Query com paginação
        const paginationQuery = (0, pagination_1.getPrismaQuery)(req.pagination, 'created_at');
        // Buscar transações e contagem total em paralelo
        const [transacoes, totalCount] = await Promise.all([
            prisma_1.default.credit_transactions.findMany({
                where,
                include: {
                    credit_accounts: {
                        select: {
                            id: true,
                            customer_name: true,
                            customer_phone: true
                        }
                    }
                },
                ...paginationQuery
            }),
            prisma_1.default.credit_transactions.count({ where })
        ]);
        // Converter amount de string para número
        const transacoesComValorNumerico = transacoes.map(transacao => ({
            ...transacao,
            amount: parseFloat(transacao.amount.toString())
        }));
        const response = (0, pagination_1.createPaginatedResponse)(transacoesComValorNumerico, totalCount, req.pagination);
        res.json(response);
    }
    catch (error) {
        console.error('Erro ao listar transações de crédito:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
// Buscar transação de crédito por ID
router.get('/:id', auth_1.default, async (req, res) => {
    if (!req.user)
        return res.status(401).json({ error: 'Usuário não autenticado' });
    const parse = idParamSchema.safeParse(req.params);
    if (!parse.success) {
        return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
    }
    try {
        const transacao = await prisma_1.default.credit_transactions.findFirst({
            where: {
                id: req.params.id,
            },
            include: {
                credit_accounts: {
                    select: {
                        id: true,
                        customer_name: true,
                        customer_phone: true
                    }
                }
            }
        });
        if (!transacao) {
            return res.status(404).json({ error: 'Transação de crédito não encontrada' });
        }
        // Converter amount para número
        const transacaoComValorNumerico = {
            ...transacao,
            amount: parseFloat(transacao.amount.toString())
        };
        res.json(transacaoComValorNumerico);
    }
    catch (error) {
        console.error('Erro ao buscar transação de crédito:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
// Criar débito com parcelamento (Compatibilidade com Frontend)
router.post('/debit-with-installments', auth_1.default, rateLimiter_1.userRateLimit, async (req, res) => {
    if (!req.user)
        return res.status(401).json({ error: 'Usuário não autenticado' });
    console.log('📝 [CreditTransactions] Payload recebido:', JSON.stringify(req.body, null, 2));
    try {
        // Processar diretamente o formato do frontend
        const { credit_account_id, type, amount, description, first_payment_date, frequency, installments, observations = '' } = req.body;
        // Validar campos obrigatórios
        if (!credit_account_id || type !== 'debt' || !amount || !description || !first_payment_date || !frequency || !installments) {
            return res.status(400).json({
                error: 'Dados inválidos',
                details: 'Campos obrigatórios: credit_account_id, type (debt), amount, description, first_payment_date, frequency, installments'
            });
        }
        // Buscar dados do cliente existente
        const clienteExistente = await prisma_1.default.credit_accounts.findFirst({
            where: { id: credit_account_id }
        });
        if (!clienteExistente) {
            return res.status(404).json({ error: 'Cliente não encontrado' });
        }
        // Converter frequência
        const frequencyMap = {
            'monthly': 'mensal',
            'weekly': 'semanal',
            'daily': 'diaria',
            'biweekly': 'quinzenal'
        };
        const frequencyConvertida = frequencyMap[frequency] || 'mensal';
        // Processar débito com parcelamento
        // (Removido o processamento de credit_installments para SQLite)
        await prisma_1.default.credit_accounts.update({
            where: { id: credit_account_id },
            data: {
                total_debt: {
                    increment: amount
                }
            }
        });
        const transacao = await prisma_1.default.credit_transactions.create({
            data: {
                credit_account_id: credit_account_id,
                user_id: req.user.id,
                type: 'debito',
                amount: amount,
                description: description || ''
            }
        });
        (0, cache_1.clearUserCache)(req.user.id);
        console.log('🎉 [CreditTransactions] Débito com parcelamento criado com sucesso!');
        res.status(201).json({
            success: true,
            message: 'Débito registrado com sucesso',
            transaction: {
                ...transacao,
                amount: parseFloat(transacao.amount.toString())
            },
            credit_account_id: credit_account_id
        });
    }
    catch (error) {
        console.error('❌ [CreditTransactions] Erro ao criar débito:', error);
        res.status(500).json({
            error: 'Erro interno do servidor',
            details: error instanceof Error ? error.message : 'Erro desconhecido'
        });
    }
});
// Função auxiliar para processar débito com parcelamento
async function processarDebitoComParcelamento(userId, data) {
    return await prisma_1.default.$transaction(async (tx) => {
        let creditAccountId;
        // 1. Criar ou buscar conta de crédito
        if (data.is_new_customer) {
            // Verificar se já existe cliente com este telefone
            const clienteExistente = await tx.credit_accounts.findFirst({
                where: {
                    customer_phone: data.customer_phone
                }
            });
            if (clienteExistente) {
                throw new Error('Cliente já existe com este telefone');
            }
            // Criar novo cliente
            const novaConta = await tx.credit_accounts.create({
                data: {
                    user_id: userId,
                    customer_name: data.customer_name,
                    customer_phone: data.customer_phone,
                    total_debt: data.total_amount
                }
            });
            creditAccountId = novaConta.id;
            console.log('✅ [CreditTransactions] Novo cliente criado:', novaConta.id);
        }
        else {
            // Usar cliente existente
            if (!data.existing_customer_id) {
                throw new Error('ID do cliente existente é obrigatório');
            }
            const clienteExistente = await tx.credit_accounts.findFirst({
                where: {
                    id: data.existing_customer_id
                }
            });
            if (!clienteExistente) {
                throw new Error('Cliente não encontrado');
            }
            creditAccountId = clienteExistente.id;
            // Atualizar dívida total usando a função segura
            await atualizarTotalDebt(creditAccountId, 'debito', data.total_amount, tx);
            console.log('✅ [CreditTransactions] Cliente existente atualizado:', creditAccountId);
        }
        // 2. Criar transação de débito
        const transacao = await tx.credit_transactions.create({
            data: {
                credit_account_id: creditAccountId,
                user_id: userId,
                type: 'debito',
                amount: data.total_amount,
                description: data.description || ''
            }
        });
        console.log('✅ [CreditTransactions] Transação criada:', transacao.id);
        // (Removido o processamento de parcelas para SQLite)
        return {
            transacao,
            creditAccountId
        };
    });
}
// Criar transação de crédito simples (Compatibilidade com Frontend)
router.post('/', auth_1.default, rateLimiter_1.userRateLimit, async (req, res) => {
    if (!req.user)
        return res.status(401).json({ error: 'Usuário não autenticado' });
    console.log('📝 [CreditTransactions] Payload recebido:', JSON.stringify(req.body, null, 2));
    try {
        // Converter tipo do frontend para formato da API
        const payloadConvertido = {
            ...req.body,
            type: req.body.type === 'payment' ? 'pagamento' : req.body.type
        };
        console.log('🔄 [CreditTransactions] Payload convertido:', JSON.stringify(payloadConvertido, null, 2));
        // Validar dados com Zod
        const parse = zod_1.credit_transactionsCreateInputSchema.safeParse(payloadConvertido);
        if (!parse.success) {
            console.error('❌ [CreditTransactions] Erro de validação:', parse.error.issues);
            return res.status(400).json({ error: 'Dados inválidos', details: parse.error.issues });
        }
        console.log('✅ [CreditTransactions] Dados validados:', parse.data);
        // Usar transação para criar transação e atualizar dívida total
        const resultado = await prisma_1.default.$transaction(async (tx) => {
            // Criar transação
            const { user_id, date, description, ...rest } = parse.data;
            const transacao = await tx.credit_transactions.create({
                data: {
                    ...rest,
                    user_id: req.user.id,
                    description: description || ''
                }
            });
            // Atualizar dívida total da conta usando a função segura
            await atualizarTotalDebt(parse.data.credit_account_id, parse.data.type, parse.data.amount, tx);
            return transacao;
        });
        // Limpar cache do usuário
        (0, cache_1.clearUserCache)(req.user.id);
        console.log('✅ [CreditTransactions] Transação criada com sucesso:', resultado.id);
        res.status(201).json({
            ...resultado,
            amount: parseFloat(resultado.amount.toString())
        });
    }
    catch (error) {
        console.error('❌ [CreditTransactions] Erro ao criar transação:', error);
        res.status(500).json({
            error: 'Erro interno do servidor',
            details: error instanceof Error ? error.message : 'Erro desconhecido'
        });
    }
});
// Atualizar transação de crédito
router.put('/:id', auth_1.default, rateLimiter_1.userRateLimit, async (req, res) => {
    if (!req.user)
        return res.status(401).json({ error: 'Usuário não autenticado' });
    const parse = idParamSchema.safeParse(req.params);
    if (!parse.success) {
        return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
    }
    const parseBody = zod_1.credit_transactionsUpdateInputSchema.safeParse(req.body);
    if (!parseBody.success) {
        return res.status(400).json({ error: 'Dados inválidos', details: parseBody.error.issues });
    }
    try {
        // Verificar se a transação existe
        const transacaoExistente = await prisma_1.default.credit_transactions.findFirst({
            where: { id: req.params.id }
        });
        if (!transacaoExistente) {
            return res.status(404).json({ error: 'Transação de crédito não encontrada' });
        }
        // Usar transação para atualizar e recalcular dívida
        const resultado = await prisma_1.default.$transaction(async (tx) => {
            // Atualizar transação
            const transacaoAtualizada = await tx.credit_transactions.update({
                where: { id: req.params.id },
                data: parseBody.data
            });
            // Recalcular total_debt da conta
            await recalcularTotalDebt(transacaoAtualizada.credit_account_id, tx);
            return transacaoAtualizada;
        });
        // Limpar cache do usuário
        (0, cache_1.clearUserCache)(req.user.id);
        res.json({
            ...resultado,
            amount: parseFloat(resultado.amount.toString())
        });
    }
    catch (error) {
        console.error('Erro ao atualizar transação de crédito:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
// Rota para recalcular total_debt de uma conta
router.post('/recalculate-debt/:creditAccountId', auth_1.default, rateLimiter_1.userRateLimit, async (req, res) => {
    if (!req.user)
        return res.status(401).json({ error: 'Usuário não autenticado' });
    const parse = zod_2.z.object({ creditAccountId: zod_2.z.string().min(1, 'ID da conta obrigatório') }).safeParse(req.params);
    if (!parse.success) {
        return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
    }
    try {
        // Verificar se a conta existe
        const conta = await prisma_1.default.credit_accounts.findFirst({
            where: { id: parse.data.creditAccountId }
        });
        if (!conta) {
            return res.status(404).json({ error: 'Conta de crédito não encontrada' });
        }
        // Recalcular total_debt
        const novoTotal = await recalcularTotalDebt(parse.data.creditAccountId);
        // Limpar cache do usuário
        (0, cache_1.clearUserCache)(req.user.id);
        res.json({
            success: true,
            credit_account_id: parse.data.creditAccountId,
            total_debt: novoTotal,
            message: 'Total de dívida recalculado com sucesso'
        });
    }
    catch (error) {
        console.error('❌ [CreditTransactions] Erro ao recalcular total_debt:', error);
        res.status(500).json({
            error: 'Erro interno do servidor',
            details: error instanceof Error ? error.message : 'Erro desconhecido'
        });
    }
});
// Deletar transação de crédito
router.delete('/:id', auth_1.default, rateLimiter_1.userRateLimit, async (req, res) => {
    if (!req.user)
        return res.status(401).json({ error: 'Usuário não autenticado' });
    const parse = idParamSchema.safeParse(req.params);
    if (!parse.success) {
        return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
    }
    try {
        // Verificar se a transação existe
        const transacaoExistente = await prisma_1.default.credit_transactions.findFirst({
            where: { id: req.params.id }
        });
        if (!transacaoExistente) {
            return res.status(404).json({ error: 'Transação de crédito não encontrada' });
        }
        await prisma_1.default.credit_transactions.delete({ where: { id: req.params.id } });
        // Limpar cache do usuário
        (0, cache_1.clearUserCache)(req.user.id);
        res.status(204).send();
    }
    catch (error) {
        console.error('Erro ao deletar transação de crédito:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
exports.default = router;
