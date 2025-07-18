"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const zod_1 = require("../zod");
const auth_1 = __importDefault(require("../middleware/auth"));
const zod_2 = require("zod");
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
const idParamSchema = zod_2.z.object({ id: zod_2.z.string().min(1, 'ID obrigatório') });
// Listar todas as vendas
router.get('/', auth_1.default, async (req, res) => {
    try {
        const vendas = await prisma.sales.findMany({ include: { stores: true } });
        res.json(vendas);
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
        const venda = await prisma.sales.findUnique({
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
router.post('/', async (req, res) => {
    const parse = zod_1.salesCreateInputSchema.safeParse(req.body);
    if (!parse.success) {
        return res.status(400).json({ error: 'Dados inválidos', details: parse.error.issues });
    }
    try {
        const nova = await prisma.sales.create({ data: parse.data });
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
        const atualizada = await prisma.sales.update({
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
        await prisma.sales.delete({ where: { id: req.params.id } });
        res.status(204).send();
    }
    catch (error) {
        console.error('Erro ao deletar venda:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
exports.default = router;
