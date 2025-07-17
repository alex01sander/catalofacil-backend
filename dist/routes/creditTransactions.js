"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const zod_1 = require("../zod");
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
// Listar todas as transações de crédito
router.get('/', async (req, res) => {
    try {
        const transacoes = await prisma.credit_transactions.findMany({
            include: { credit_accounts: true }
        });
        res.json(transacoes);
    }
    catch (error) {
        console.error('Erro ao listar transações:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
// Buscar transação de crédito por ID
router.get('/:id', async (req, res) => {
    try {
        const transacao = await prisma.credit_transactions.findUnique({
            where: { id: req.params.id },
            include: { credit_accounts: true }
        });
        if (!transacao)
            return res.status(404).json({ error: 'Transação não encontrada' });
        res.json(transacao);
    }
    catch (error) {
        console.error('Erro ao buscar transação:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
// Criar transação de crédito
router.post('/', async (req, res) => {
    const parse = zod_1.credit_transactionsCreateInputSchema.safeParse(req.body);
    if (!parse.success) {
        return res.status(400).json({ error: 'Dados inválidos', details: parse.error.issues });
    }
    try {
        const user = req.user;
        if (!user || !user.id) {
            return res.status(401).json({ error: 'Usuário não autenticado' });
        }
        const nova = await prisma.credit_transactions.create({
            data: {
                ...parse.data,
                user_id: user.id,
                date: new Date(),
            },
        });
        res.status(201).json(nova);
    }
    catch (error) {
        console.error('Erro ao criar transação:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
// Atualizar transação de crédito
router.put('/:id', async (req, res) => {
    const parse = zod_1.credit_transactionsUpdateInputSchema.safeParse(req.body);
    if (!parse.success) {
        return res.status(400).json({ error: 'Dados inválidos', details: parse.error.issues });
    }
    try {
        const atualizada = await prisma.credit_transactions.update({
            where: { id: req.params.id },
            data: parse.data,
        });
        res.json(atualizada);
    }
    catch (error) {
        console.error('Erro ao atualizar transação:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
// Deletar transação de crédito
router.delete('/:id', async (req, res) => {
    try {
        await prisma.credit_transactions.delete({ where: { id: req.params.id } });
        res.status(204).send();
    }
    catch (error) {
        console.error('Erro ao deletar transação:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
exports.default = router;
