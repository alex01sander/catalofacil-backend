"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
// Listar todas as lojas
router.get('/', async (req, res) => {
    const lojas = await prisma.stores.findMany({ include: { categories: true, customers: true, orders: true, products: true, sales: true } });
    res.json(lojas);
});
// Buscar loja por ID
router.get('/:id', async (req, res) => {
    const loja = await prisma.stores.findUnique({
        where: { id: req.params.id },
        include: { categories: true, customers: true, orders: true, products: true, sales: true }
    });
    if (!loja)
        return res.status(404).json({ error: 'Loja não encontrada' });
    res.json(loja);
});
// Criar loja
router.post('/', async (req, res) => {
    try {
        const nova = await prisma.stores.create({ data: req.body });
        res.status(201).json(nova);
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao criar loja', details: e });
    }
});
// Atualizar loja
router.put('/:id', async (req, res) => {
    try {
        const atualizada = await prisma.stores.update({
            where: { id: req.params.id },
            data: req.body,
        });
        res.json(atualizada);
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao atualizar loja', details: e });
    }
});
// Deletar loja
router.delete('/:id', async (req, res) => {
    try {
        await prisma.stores.delete({ where: { id: req.params.id } });
        res.status(204).send();
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao deletar loja', details: e });
    }
});
exports.default = router;
