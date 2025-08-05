"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_1 = __importDefault(require("../lib/prisma"));
const router = (0, express_1.Router)();
// Listar todos os custos de produto
router.get('/', async (req, res) => {
    const custos = await prisma_1.default.product_costs.findMany();
    res.json(custos);
});
// Buscar custo de produto por ID
router.get('/:id', async (req, res) => {
    const custo = await prisma_1.default.product_costs.findUnique({ where: { id: req.params.id } });
    if (!custo)
        return res.status(404).json({ error: 'Custo de produto não encontrado' });
    res.json(custo);
});
// Criar custo de produto
router.post('/', async (req, res) => {
    try {
        const novo = await prisma_1.default.product_costs.create({ data: req.body });
        res.status(201).json(novo);
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao criar custo de produto', details: e });
    }
});
// Atualizar custo de produto
router.put('/:id', async (req, res) => {
    try {
        const atualizado = await prisma_1.default.product_costs.update({
            where: { id: req.params.id },
            data: req.body,
        });
        res.json(atualizado);
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao atualizar custo de produto', details: e });
    }
});
// Deletar custo de produto
router.delete('/:id', async (req, res) => {
    try {
        await prisma_1.default.product_costs.delete({ where: { id: req.params.id } });
        res.status(204).send();
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao deletar custo de produto', details: e });
    }
});
exports.default = router;
