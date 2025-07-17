"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const zod_1 = require("../zod");
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
// Listar todas as categorias
router.get('/', async (req, res) => {
    const categorias = await prisma.categories.findMany({ include: { products: true, stores: true, users: true } });
    res.json(categorias);
});
// Buscar categoria por ID
router.get('/:id', async (req, res) => {
    const categoria = await prisma.categories.findUnique({
        where: { id: req.params.id },
        include: { products: true, stores: true, users: true }
    });
    if (!categoria)
        return res.status(404).json({ error: 'Categoria não encontrada' });
    res.json(categoria);
});
// Criar categoria
router.post('/', async (req, res) => {
    const parse = zod_1.categoriesCreateInputSchema.safeParse(req.body);
    if (!parse.success) {
        return res.status(400).json({ error: 'Dados inválidos', details: parse.error.issues });
    }
    try {
        const nova = await prisma.categories.create({ data: parse.data });
        res.status(201).json(nova);
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao criar categoria', details: e });
    }
});
// Atualizar categoria
router.put('/:id', async (req, res) => {
    const parse = zod_1.categoriesUpdateInputSchema.safeParse(req.body);
    if (!parse.success) {
        return res.status(400).json({ error: 'Dados inválidos', details: parse.error.issues });
    }
    try {
        const atualizada = await prisma.categories.update({
            where: { id: req.params.id },
            data: parse.data,
        });
        res.json(atualizada);
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao atualizar categoria', details: e });
    }
});
// Deletar categoria
router.delete('/:id', async (req, res) => {
    try {
        await prisma.categories.delete({ where: { id: req.params.id } });
        res.status(204).send();
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao deletar categoria', details: e });
    }
});
exports.default = router;
