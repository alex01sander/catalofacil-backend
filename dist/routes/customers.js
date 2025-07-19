"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_1 = __importDefault(require("../lib/prisma"));
const zod_1 = require("../zod");
const auth_1 = __importDefault(require("../middleware/auth"));
const zod_2 = require("zod");
const router = (0, express_1.Router)();
const idParamSchema = zod_2.z.object({ id: zod_2.z.string().min(1, 'ID obrigatório') });
// Listar todos os clientes
router.get('/', auth_1.default, async (req, res) => {
    const clientes = await prisma_1.default.customers.findMany({ include: { stores: true, orders: true } });
    res.json(clientes);
});
// Buscar cliente por ID
router.get('/:id', auth_1.default, async (req, res) => {
    const parse = idParamSchema.safeParse(req.params);
    if (!parse.success) {
        return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
    }
    const cliente = await prisma_1.default.customers.findUnique({
        where: { id: req.params.id },
        include: { stores: true, orders: true }
    });
    if (!cliente)
        return res.status(404).json({ error: 'Cliente não encontrado' });
    res.json(cliente);
});
// Criar cliente
router.post('/', async (req, res) => {
    const parse = zod_1.customersCreateInputSchema.safeParse(req.body);
    if (!parse.success) {
        return res.status(400).json({ error: 'Dados inválidos', details: parse.error.issues });
    }
    try {
        const novo = await prisma_1.default.customers.create({ data: parse.data });
        res.status(201).json(novo);
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao criar cliente', details: e });
    }
});
// Atualizar cliente
router.put('/:id', auth_1.default, async (req, res) => {
    const parseParams = idParamSchema.safeParse(req.params);
    if (!parseParams.success) {
        return res.status(400).json({ error: 'Parâmetro inválido', details: parseParams.error.issues });
    }
    const parseBody = zod_1.customersUpdateInputSchema.safeParse(req.body);
    if (!parseBody.success) {
        return res.status(400).json({ error: 'Dados inválidos', details: parseBody.error.issues });
    }
    try {
        const atualizado = await prisma_1.default.customers.update({
            where: { id: req.params.id },
            data: parseBody.data,
        });
        res.json(atualizado);
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao atualizar cliente', details: e });
    }
});
// Deletar cliente
router.delete('/:id', auth_1.default, async (req, res) => {
    const parse = idParamSchema.safeParse(req.params);
    if (!parse.success) {
        return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
    }
    try {
        await prisma_1.default.customers.delete({ where: { id: req.params.id } });
        res.status(204).send();
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao deletar cliente', details: e });
    }
});
exports.default = router;
