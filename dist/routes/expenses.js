"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const zod_1 = require("../zod");
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
// Listar todas as despesas
router.get('/', async (req, res) => {
    const despesas = await prisma.expenses.findMany();
    res.json(despesas);
});
// Buscar despesa por ID
router.get('/:id', async (req, res) => {
    const despesa = await prisma.expenses.findUnique({ where: { id: req.params.id } });
    if (!despesa)
        return res.status(404).json({ error: 'Despesa não encontrada' });
    res.json(despesa);
});
// Criar despesa
router.post('/', async (req, res) => {
    // Validação Zod
    const parse = zod_1.expensesCreateInputSchema.safeParse(req.body);
    if (!parse.success) {
        return res.status(400).json({ error: 'Dados inválidos', details: parse.error.issues });
    }
    try {
        const nova = await prisma.expenses.create({ data: parse.data });
        res.status(201).json(nova);
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao criar despesa', details: e });
    }
});
// Atualizar despesa
router.put('/:id', async (req, res) => {
    // Validação Zod para atualização
    const parse = zod_1.expensesUpdateInputSchema.safeParse(req.body);
    if (!parse.success) {
        return res.status(400).json({ error: 'Dados inválidos', details: parse.error.issues });
    }
    try {
        const atualizada = await prisma.expenses.update({
            where: { id: req.params.id },
            data: parse.data,
        });
        res.json(atualizada);
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao atualizar despesa', details: e });
    }
});
// Deletar despesa
router.delete('/:id', async (req, res) => {
    try {
        await prisma.expenses.delete({ where: { id: req.params.id } });
        res.status(204).send();
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao deletar despesa', details: e });
    }
});
exports.default = router;
