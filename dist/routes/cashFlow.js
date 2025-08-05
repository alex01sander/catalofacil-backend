"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_1 = __importDefault(require("../lib/prisma"));
const auth_1 = __importDefault(require("../middleware/auth"));
const rateLimiter_1 = require("../middleware/rateLimiter");
const pagination_1 = require("../middleware/pagination");
const cache_1 = require("../lib/cache");
const router = (0, express_1.Router)();
// Listar fluxos de caixa do usuário com cache e paginação
router.get('/', auth_1.default, rateLimiter_1.userRateLimit, pagination_1.paginationMiddleware, pagination_1.paginationHeaders, (0, cache_1.cacheMiddleware)(300, (req) => (0, cache_1.generateCacheKey)('cashflow', req.user.id, {
    page: req.pagination?.page,
    limit: req.pagination?.limit,
    type: req.query.type,
    category: req.query.category,
    dateFrom: req.query.dateFrom,
    dateTo: req.query.dateTo
})), async (req, res) => {
    if (!req.user)
        return res.status(401).json({ error: 'Usuário não autenticado' });
    try {
        // Construir filtros
        const where = { user_id: req.user.id };
        // Filtro por tipo (entrada/saída)
        if (req.query.type) {
            where.type = req.query.type;
        }
        // Filtro por categoria
        if (req.query.category) {
            where.category = req.query.category;
        }
        // Filtro por data
        if (req.query.dateFrom || req.query.dateTo) {
            where.date = {};
            if (req.query.dateFrom) {
                where.date.gte = new Date(req.query.dateFrom);
            }
            if (req.query.dateTo) {
                where.date.lte = new Date(req.query.dateTo);
            }
        }
        // Query com paginação
        const paginationQuery = (0, pagination_1.getPrismaQuery)(req.pagination, 'date');
        // Buscar fluxos e contagem total em paralelo
        const [fluxos, totalCount] = await Promise.all([
            prisma_1.default.cash_flow.findMany({
                where,
                ...paginationQuery
            }),
            prisma_1.default.cash_flow.count({ where })
        ]);
        // Converter amount de string para número
        const fluxosComValorNumerico = fluxos.map(fluxo => ({
            ...fluxo,
            amount: parseFloat(fluxo.amount.toString())
        }));
        const response = (0, pagination_1.createPaginatedResponse)(fluxosComValorNumerico, totalCount, req.pagination);
        res.json({
            success: true,
            data: response.data,
            pagination: response.pagination
        });
    }
    catch (error) {
        console.error('Erro ao listar fluxo de caixa:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
// Buscar fluxo de caixa por ID
router.get('/:id', auth_1.default, async (req, res) => {
    if (!req.user)
        return res.status(401).json({ error: 'Usuário não autenticado' });
    try {
        const fluxo = await prisma_1.default.cash_flow.findFirst({
            where: {
                id: req.params.id,
                user_id: req.user.id // Garantir que pertence ao usuário
            }
        });
        if (!fluxo)
            return res.status(404).json({ error: 'Entrada não encontrada' });
        res.json({
            success: true,
            data: {
                ...fluxo,
                amount: parseFloat(fluxo.amount.toString())
            }
        });
    }
    catch (error) {
        console.error('Erro ao buscar fluxo de caixa:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
// Criar fluxo de caixa
router.post('/', auth_1.default, rateLimiter_1.userRateLimit, async (req, res) => {
    if (!req.user)
        return res.status(401).json({ error: 'Usuário não autenticado' });
    console.log('📝 [CashFlow] === INÍCIO DA REQUISIÇÃO ===');
    console.log('📝 [CashFlow] Headers:', {
        'content-type': req.headers['content-type'],
        'authorization': req.headers.authorization ? 'Bearer ***' : 'Não fornecido'
    });
    console.log('📝 [CashFlow] Payload recebido:', JSON.stringify(req.body, null, 2));
    console.log('📝 [CashFlow] User ID:', req.user.id);
    try {
        // Importar schema Zod
        const { cashFlowCreateInputSchema } = require('../zod');
        // Preparar dados para validação
        const dadosParaValidacao = {
            ...req.body,
            user_id: req.user.id // Garantir que user_id seja do usuário autenticado
        };
        console.log('📝 [CashFlow] Dados para validação:', JSON.stringify(dadosParaValidacao, null, 2));
        // Validar dados com Zod
        const parse = cashFlowCreateInputSchema.safeParse(dadosParaValidacao);
        if (!parse.success) {
            console.error('❌ [CashFlow] Erro de validação:', parse.error.issues);
            console.error('❌ [CashFlow] Erro detalhado:', JSON.stringify(parse.error, null, 2));
            return res.status(400).json({
                error: 'Dados inválidos',
                details: parse.error.issues,
                receivedData: req.body,
                validationErrors: parse.error.issues
            });
        }
        console.log('✅ [CashFlow] Dados validados:', JSON.stringify(parse.data, null, 2));
        // Verificar se os dados estão corretos antes de salvar
        console.log('📝 [CashFlow] Verificando dados antes de salvar:', {
            user_id: parse.data.user_id,
            type: parse.data.type,
            category: parse.data.category,
            description: parse.data.description,
            amount: parse.data.amount,
            date: parse.data.date,
            payment_method: parse.data.payment_method
        });
        const novo = await prisma_1.default.cash_flow.create({ data: parse.data });
        // Limpar cache do usuário após criar fluxo
        (0, cache_1.clearUserCache)(req.user.id);
        console.log('✅ [CashFlow] Fluxo criado com sucesso:', novo.id);
        console.log('📝 [CashFlow] === FIM DA REQUISIÇÃO ===');
        res.status(201).json({
            success: true,
            data: {
                ...novo,
                amount: parseFloat(novo.amount.toString())
            }
        });
    }
    catch (error) {
        console.error('❌ [CashFlow] Erro ao criar fluxo:', error);
        console.error('❌ [CashFlow] Stack trace:', error instanceof Error ? error.stack : 'Stack não disponível');
        console.error('❌ [CashFlow] === FIM COM ERRO ===');
        res.status(500).json({
            error: 'Erro interno do servidor',
            details: error instanceof Error ? error.message : 'Erro desconhecido',
            stack: process.env.NODE_ENV === 'development' && error instanceof Error ? error.stack : undefined
        });
    }
});
// Atualizar fluxo de caixa
router.put('/:id', auth_1.default, rateLimiter_1.userRateLimit, async (req, res) => {
    if (!req.user)
        return res.status(401).json({ error: 'Usuário não autenticado' });
    try {
        // Verificar se o fluxo existe
        const existingFluxo = await prisma_1.default.cash_flow.findFirst({
            where: {
                id: req.params.id
            }
        });
        if (!existingFluxo) {
            return res.status(404).json({ error: 'Entrada não encontrada' });
        }
        // Verificar se o fluxo pertence ao usuário
        if (existingFluxo.user_id !== req.user.id) {
            return res.status(403).json({ error: 'Acesso negado' });
        }
        const atualizado = await prisma_1.default.cash_flow.update({
            where: { id: req.params.id },
            data: req.body,
        });
        // Limpar cache do usuário após atualizar
        (0, cache_1.clearUserCache)(req.user.id);
        res.json({
            success: true,
            data: {
                ...atualizado,
                amount: parseFloat(atualizado.amount.toString())
            }
        });
    }
    catch (error) {
        console.error('Erro ao atualizar fluxo de caixa:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
// Deletar fluxo de caixa
router.delete('/:id', auth_1.default, rateLimiter_1.userRateLimit, async (req, res) => {
    if (!req.user)
        return res.status(401).json({ error: 'Usuário não autenticado' });
    try {
        // Verificar se o fluxo existe
        const existingFluxo = await prisma_1.default.cash_flow.findFirst({
            where: {
                id: req.params.id
            }
        });
        if (!existingFluxo) {
            return res.status(404).json({ error: 'Entrada não encontrada' });
        }
        // Verificar se o fluxo pertence ao usuário
        if (existingFluxo.user_id !== req.user.id) {
            return res.status(403).json({ error: 'Acesso negado' });
        }
        await prisma_1.default.cash_flow.delete({ where: { id: req.params.id } });
        // Limpar cache do usuário após deletar
        (0, cache_1.clearUserCache)(req.user.id);
        res.status(200).json({
            success: true,
            message: 'Entrada excluída com sucesso'
        });
    }
    catch (error) {
        console.error('Erro ao deletar fluxo de caixa:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
exports.default = router;
