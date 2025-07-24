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
        const response = (0, pagination_1.createPaginatedResponse)(vendas, totalCount, req.pagination);
        res.json(response);
    }
    catch (error) {
        console.error('Erro ao listar vendas:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
// Buscar venda por ID
router.get('/:id', auth_1.default, async (req, res) => {
    const parse = idParamSchema.safeParse(req.params);
    if (!parse.success) {
        return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
    }
    try {
        const venda = await prisma_1.default.sales.findUnique({
            where: { id: req.params.id },
            include: { stores: true }
        });
        if (!venda)
            return res.status(404).json({ error: 'Venda não encontrada' });
        res.json(venda);
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
    const parse = zod_1.salesCreateInputSchema.safeParse(req.body);
    if (!parse.success) {
        return res.status(400).json({ error: 'Dados inválidos', details: parse.error.issues });
    }
    try {
        const nova = await prisma_1.default.sales.create({
            data: {
                ...parse.data,
                user_id: req.user.id
            }
        });
        // Limpar cache do usuário após criar venda
        (0, cache_1.clearUserCache)(req.user.id);
        res.status(201).json(nova);
    }
    catch (error) {
        console.error('Erro ao criar venda:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
// Atualizar venda
router.put('/:id', auth_1.default, async (req, res) => {
    const parse = idParamSchema.safeParse(req.params);
    if (!parse.success) {
        return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
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
        res.json(atualizada);
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
    try {
        await prisma_1.default.sales.delete({ where: { id: req.params.id } });
        res.status(204).send();
    }
    catch (error) {
        console.error('Erro ao deletar venda:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
exports.default = router;
