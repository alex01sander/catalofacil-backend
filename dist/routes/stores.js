"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const auth_1 = __importDefault(require("../middleware/auth"));
const zod_1 = require("zod");
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
const idParamSchema = zod_1.z.object({ id: zod_1.z.string().min(1, 'ID obrigatório') });
// Listar todas as lojas
router.get('/', auth_1.default, async (req, res) => {
    const lojas = await prisma.stores.findMany({ include: { categories: true, customers: true, orders: true, products: true, sales: true } });
    res.json(lojas);
});
// Buscar loja por ID
router.get('/:id', auth_1.default, async (req, res) => {
    const parse = idParamSchema.safeParse(req.params);
    if (!parse.success) {
        return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
    }
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
router.put('/:id', auth_1.default, async (req, res) => {
    const parse = idParamSchema.safeParse(req.params);
    if (!parse.success) {
        return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
    }
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
router.delete('/:id', auth_1.default, async (req, res) => {
    const parse = idParamSchema.safeParse(req.params);
    if (!parse.success) {
        return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
    }
    try {
        await prisma.stores.delete({ where: { id: req.params.id } });
        res.status(204).send();
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao deletar loja', details: e });
    }
});
exports.default = router;
