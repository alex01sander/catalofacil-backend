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
// Listar contas de crédito do usuário
router.get('/', auth_1.default, rateLimiter_1.userRateLimit, pagination_1.paginationMiddleware, pagination_1.paginationHeaders, (0, cache_1.cacheMiddleware)(300, (req) => (0, cache_1.generateCacheKey)('credit-accounts', req.user.id, {
    page: req.pagination?.page,
    limit: req.pagination?.limit,
    search: req.query.search,
    status: req.query.status
})), async (req, res) => {
    if (!req.user)
        return res.status(401).json({ error: 'Usuário não autenticado' });
    try {
        // Construir filtros
        const where = { user_id: req.user.id };
        // Filtro por busca
        if (req.query.search) {
            where.OR = [
                { customer_name: { contains: req.query.search, mode: 'insensitive' } },
                { customer_phone: { contains: req.query.search, mode: 'insensitive' } }
            ];
        }
        // Filtro por status
        if (req.query.status) {
            where.status = req.query.status;
        }
        // Query com paginação
        const paginationQuery = (0, pagination_1.getPrismaQuery)(req.pagination, 'created_at');
        // Buscar contas e contagem total em paralelo
        const [contas, totalCount] = await Promise.all([
            prisma_1.default.credit_accounts.findMany({
                where,
                include: {
                    credit_transactions: {
                        orderBy: { created_at: 'desc' },
                        take: 5 // Últimas 5 transações
                    }
                },
                ...paginationQuery
            }),
            prisma_1.default.credit_accounts.count({ where })
        ]);
        // Converter total_debt de string para número
        const contasComValorNumerico = contas.map(conta => ({
            ...conta,
            total_debt: parseFloat(conta.total_debt.toString())
        }));
        const response = (0, pagination_1.createPaginatedResponse)(contasComValorNumerico, totalCount, req.pagination);
        res.json(response);
    }
    catch (error) {
        console.error('Erro ao listar contas de crédito:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
// Buscar conta de crédito por ID
router.get('/:id', auth_1.default, async (req, res) => {
    if (!req.user)
        return res.status(401).json({ error: 'Usuário não autenticado' });
    const parse = idParamSchema.safeParse(req.params);
    if (!parse.success) {
        return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
    }
    try {
        const conta = await prisma_1.default.credit_accounts.findFirst({
            where: {
                id: req.params.id,
                user_id: req.user.id
            },
            include: {
                credit_transactions: {
                    include: {
                        credit_installments: {
                            orderBy: { due_date: 'asc' }
                        }
                    },
                    orderBy: { created_at: 'desc' }
                }
            }
        });
        if (!conta) {
            return res.status(404).json({ error: 'Conta de crédito não encontrada' });
        }
        // Converter total_debt para número
        const contaComValorNumerico = {
            ...conta,
            total_debt: parseFloat(conta.total_debt.toString())
        };
        res.json(contaComValorNumerico);
    }
    catch (error) {
        console.error('Erro ao buscar conta de crédito:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
// Criar conta de crédito
router.post('/', auth_1.default, rateLimiter_1.userRateLimit, async (req, res) => {
    if (!req.user)
        return res.status(401).json({ error: 'Usuário não autenticado' });
    console.log('📝 [CreditAccounts] Payload recebido:', JSON.stringify(req.body, null, 2));
    try {
        // Validar dados com Zod
        const parse = zod_1.credit_accountsCreateInputSchema.safeParse({
            ...req.body,
            user_id: req.user.id
        });
        if (!parse.success) {
            console.error('❌ [CreditAccounts] Erro de validação:', parse.error.issues);
            return res.status(400).json({ error: 'Dados inválidos', details: parse.error.issues });
        }
        console.log('✅ [CreditAccounts] Dados validados:', parse.data);
        // Verificar se já existe cliente com este telefone
        const clienteExistente = await prisma_1.default.credit_accounts.findFirst({
            where: {
                customer_phone: parse.data.customer_phone,
                user_id: req.user.id
            }
        });
        if (clienteExistente) {
            return res.status(400).json({
                error: 'Cliente já existe',
                existingCustomer: {
                    id: clienteExistente.id,
                    name: clienteExistente.customer_name,
                    phone: clienteExistente.customer_phone
                }
            });
        }
        const novaConta = await prisma_1.default.credit_accounts.create({ data: parse.data });
        // Limpar cache do usuário
        (0, cache_1.clearUserCache)(req.user.id);
        console.log('✅ [CreditAccounts] Conta criada com sucesso:', novaConta.id);
        res.status(201).json({
            ...novaConta,
            total_debt: parseFloat(novaConta.total_debt.toString())
        });
    }
    catch (error) {
        console.error('❌ [CreditAccounts] Erro ao criar conta:', error);
        res.status(500).json({
            error: 'Erro interno do servidor',
            details: error instanceof Error ? error.message : 'Erro desconhecido'
        });
    }
});
// Atualizar conta de crédito
router.put('/:id', auth_1.default, rateLimiter_1.userRateLimit, async (req, res) => {
    if (!req.user)
        return res.status(401).json({ error: 'Usuário não autenticado' });
    const parse = idParamSchema.safeParse(req.params);
    if (!parse.success) {
        return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
    }
    const parseBody = zod_1.credit_accountsUpdateInputSchema.safeParse(req.body);
    if (!parseBody.success) {
        return res.status(400).json({ error: 'Dados inválidos', details: parseBody.error.issues });
    }
    try {
        // Verificar se a conta pertence ao usuário
        const contaExistente = await prisma_1.default.credit_accounts.findFirst({
            where: {
                id: req.params.id,
                user_id: req.user.id
            }
        });
        if (!contaExistente) {
            return res.status(404).json({ error: 'Conta de crédito não encontrada' });
        }
        const contaAtualizada = await prisma_1.default.credit_accounts.update({
            where: { id: req.params.id },
            data: parseBody.data
        });
        // Limpar cache do usuário
        (0, cache_1.clearUserCache)(req.user.id);
        res.json({
            ...contaAtualizada,
            total_debt: parseFloat(contaAtualizada.total_debt.toString())
        });
    }
    catch (error) {
        console.error('Erro ao atualizar conta de crédito:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
// Deletar conta de crédito
router.delete('/:id', auth_1.default, rateLimiter_1.userRateLimit, async (req, res) => {
    if (!req.user)
        return res.status(401).json({ error: 'Usuário não autenticado' });
    const parse = idParamSchema.safeParse(req.params);
    if (!parse.success) {
        return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
    }
    try {
        // Verificar se a conta pertence ao usuário
        const contaExistente = await prisma_1.default.credit_accounts.findFirst({
            where: {
                id: req.params.id,
                user_id: req.user.id
            }
        });
        if (!contaExistente) {
            return res.status(404).json({ error: 'Conta de crédito não encontrada' });
        }
        // Verificar se há dívidas pendentes
        if (parseFloat(contaExistente.total_debt.toString()) > 0) {
            return res.status(400).json({
                error: 'Não é possível deletar cliente com dívidas pendentes',
                total_debt: parseFloat(contaExistente.total_debt.toString())
            });
        }
        await prisma_1.default.credit_accounts.delete({ where: { id: req.params.id } });
        // Limpar cache do usuário
        (0, cache_1.clearUserCache)(req.user.id);
        res.status(204).send();
    }
    catch (error) {
        console.error('Erro ao deletar conta de crédito:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
exports.default = router;
