"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_1 = __importDefault(require("../lib/prisma"));
const router = (0, express_1.Router)();
// Listar todos os itens de pedido
router.get('/', async (req, res) => {
    const itens = await prisma_1.default.order_items.findMany({ include: { orders: true, products: true } });
    res.json(itens);
});
// Buscar item por ID
router.get('/:id', async (req, res) => {
    const item = await prisma_1.default.order_items.findUnique({
        where: { id: req.params.id },
        include: { orders: true, products: true }
    });
    if (!item)
        return res.status(404).json({ error: 'Item não encontrado' });
    res.json(item);
});
// Criar item de pedido
router.post('/', async (req, res) => {
    try {
        const novo = await prisma_1.default.order_items.create({ data: req.body });
        res.status(201).json(novo);
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao criar item', details: e });
    }
});
// Atualizar item de pedido
router.put('/:id', async (req, res) => {
    try {
        const atualizado = await prisma_1.default.order_items.update({
            where: { id: req.params.id },
            data: req.body,
        });
        res.json(atualizado);
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao atualizar item', details: e });
    }
});
// Deletar item de pedido
router.delete('/:id', async (req, res) => {
    try {
        await prisma_1.default.order_items.delete({ where: { id: req.params.id } });
        res.status(204).send();
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao deletar item', details: e });
    }
});
exports.default = router;
