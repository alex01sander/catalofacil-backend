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
        const where = { user_id: req.user.id };
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
                    },
                    credit_installments: {
                        orderBy: { due_date: 'asc' }
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
                user_id: req.user.id
            },
            include: {
                credit_accounts: {
                    select: {
                        id: true,
                        customer_name: true,
                        customer_phone: true,
                        customer_address: true
                    }
                },
                credit_installments: {
                    orderBy: { due_date: 'asc' }
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
            where: {
                id: credit_account_id,
                user_id: req.user.id
            }
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
        const resultado = await prisma_1.default.$transaction(async (tx) => {
            // Atualizar dívida total do cliente
            await tx.credit_accounts.update({
                where: { id: credit_account_id },
                data: {
                    total_debt: {
                        increment: amount
                    }
                }
            });
            // Criar transação de débito
            const transacao = await tx.credit_transactions.create({
                data: {
                    credit_account_id: credit_account_id,
                    user_id: req.user.id,
                    type: 'debito',
                    amount: amount,
                    description: description,
                    date: new Date(first_payment_date)
                }
            });
            console.log('✅ [CreditTransactions] Transação criada:', transacao.id);
            // Calcular e criar parcelas
            const dueDates = calculateDueDates(new Date(first_payment_date), installments, frequencyConvertida);
            const valorParcela = amount / installments;
            const parcelas = await Promise.all(dueDates.map((dueDate, index) => tx.credit_installments.create({
                data: {
                    transaction_id: transacao.id,
                    installment_number: index + 1,
                    due_date: dueDate,
                    amount: valorParcela,
                    status: 'pending'
                }
            })));
            console.log('✅ [CreditTransactions] Parcelas criadas:', parcelas.length);
            return {
                transacao,
                parcelas,
                creditAccountId: credit_account_id
            };
        });
        // Limpar cache do usuário
        (0, cache_1.clearUserCache)(req.user.id);
        console.log('🎉 [CreditTransactions] Débito com parcelamento criado com sucesso!');
        res.status(201).json({
            success: true,
            message: 'Débito registrado com sucesso',
            transaction: {
                ...resultado.transacao,
                amount: parseFloat(resultado.transacao.amount.toString())
            },
            installments: resultado.parcelas.map(parcela => ({
                ...parcela,
                amount: parseFloat(parcela.amount.toString())
            })),
            credit_account_id: resultado.creditAccountId
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
                    customer_phone: data.customer_phone,
                    user_id: userId
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
                    customer_address: data.customer_address,
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
                    id: data.existing_customer_id,
                    user_id: userId
                }
            });
            if (!clienteExistente) {
                throw new Error('Cliente não encontrado');
            }
            creditAccountId = clienteExistente.id;
            // Atualizar dívida total
            await tx.credit_accounts.update({
                where: { id: creditAccountId },
                data: {
                    total_debt: {
                        increment: data.total_amount
                    }
                }
            });
            console.log('✅ [CreditTransactions] Cliente existente atualizado:', creditAccountId);
        }
        // 2. Criar transação de débito
        const transacao = await tx.credit_transactions.create({
            data: {
                credit_account_id: creditAccountId,
                user_id: userId,
                type: 'debito',
                amount: data.total_amount,
                description: data.description,
                date: data.first_due_date
            }
        });
        console.log('✅ [CreditTransactions] Transação criada:', transacao.id);
        // 3. Calcular e criar parcelas
        const dueDates = calculateDueDates(data.first_due_date, data.installments_count, data.frequency);
        const valorParcela = data.total_amount / data.installments_count;
        const parcelas = await Promise.all(dueDates.map((dueDate, index) => tx.credit_installments.create({
            data: {
                transaction_id: transacao.id,
                installment_number: index + 1,
                due_date: dueDate,
                amount: valorParcela,
                status: 'pending'
            }
        })));
        console.log('✅ [CreditTransactions] Parcelas criadas:', parcelas.length);
        return {
            transacao,
            parcelas,
            creditAccountId
        };
    });
}
// Criar transação de crédito simples
router.post('/', auth_1.default, rateLimiter_1.userRateLimit, async (req, res) => {
    if (!req.user)
        return res.status(401).json({ error: 'Usuário não autenticado' });
    console.log('📝 [CreditTransactions] Payload recebido:', JSON.stringify(req.body, null, 2));
    try {
        // Validar dados com Zod
        const parse = zod_1.credit_transactionsCreateInputSchema.safeParse({
            ...req.body,
            user_id: req.user.id
        });
        if (!parse.success) {
            console.error('❌ [CreditTransactions] Erro de validação:', parse.error.issues);
            return res.status(400).json({ error: 'Dados inválidos', details: parse.error.issues });
        }
        console.log('✅ [CreditTransactions] Dados validados:', parse.data);
        // Usar transação para atualizar dívida total
        const resultado = await prisma_1.default.$transaction(async (tx) => {
            // Criar transação
            const transacao = await tx.credit_transactions.create({ data: parse.data });
            // Atualizar dívida total da conta
            if (parse.data.type === 'debito') {
                await tx.credit_accounts.update({
                    where: { id: parse.data.credit_account_id },
                    data: {
                        total_debt: {
                            increment: parse.data.amount
                        }
                    }
                });
            }
            else if (parse.data.type === 'pagamento') {
                await tx.credit_accounts.update({
                    where: { id: parse.data.credit_account_id },
                    data: {
                        total_debt: {
                            decrement: parse.data.amount
                        }
                    }
                });
            }
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
        // Verificar se a transação pertence ao usuário
        const transacaoExistente = await prisma_1.default.credit_transactions.findFirst({
            where: {
                id: req.params.id,
                user_id: req.user.id
            }
        });
        if (!transacaoExistente) {
            return res.status(404).json({ error: 'Transação de crédito não encontrada' });
        }
        const transacaoAtualizada = await prisma_1.default.credit_transactions.update({
            where: { id: req.params.id },
            data: parseBody.data
        });
        // Limpar cache do usuário
        (0, cache_1.clearUserCache)(req.user.id);
        res.json({
            ...transacaoAtualizada,
            amount: parseFloat(transacaoAtualizada.amount.toString())
        });
    }
    catch (error) {
        console.error('Erro ao atualizar transação de crédito:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
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
        // Verificar se a transação pertence ao usuário
        const transacaoExistente = await prisma_1.default.credit_transactions.findFirst({
            where: {
                id: req.params.id,
                user_id: req.user.id
            }
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
