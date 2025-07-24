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
// Listar categorias do usuário
router.get('/', auth_1.default, async (req, res) => {
    if (!req.user)
        return res.status(401).json({ error: 'Usuário não autenticado' });
    try {
        const categorias = await prisma_1.default.categories.findMany({
            where: { user_id: req.user.id },
            include: { products: true, stores: true, users: true },
            orderBy: { name: 'asc' }
        });
        res.json(categorias);
    }
    catch (error) {
        console.error('Erro ao listar categorias:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
// Buscar categoria por ID (do usuário)
router.get('/:id', auth_1.default, async (req, res) => {
    if (!req.user)
        return res.status(401).json({ error: 'Usuário não autenticado' });
    const parse = idParamSchema.safeParse(req.params);
    if (!parse.success) {
        return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
    }
    try {
        const categoria = await prisma_1.default.categories.findFirst({
            where: {
                id: req.params.id,
                user_id: req.user.id
            },
            include: { products: true, stores: true, users: true }
        });
        if (!categoria)
            return res.status(404).json({ error: 'Categoria não encontrada' });
        res.json(categoria);
    }
    catch (error) {
        console.error('Erro ao buscar categoria:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
// Criar categoria
router.post('/', auth_1.default, async (req, res) => {
    const parse = zod_1.categoriesCreateInputSchema.safeParse(req.body);
    if (!parse.success) {
        return res.status(400).json({ error: 'Dados inválidos', details: parse.error.issues });
    }
    try {
        // Adicionar o userId do usuário autenticado
        if (!req.user) {
            return res.status(401).json({ error: 'Usuário não autenticado' });
        }
        const data = {
            ...parse.data,
            user_id: req.user.id,
            store_id: req.body.store_id // O frontend deve enviar o store_id correto!
        };
        const nova = await prisma_1.default.categories.create({ data });
        res.status(201).json(nova);
    }
    catch (e) {
        console.error('Erro ao criar categoria:', e);
        res.status(400).json({ error: 'Erro ao criar categoria', details: e });
    }
});
// Atualizar categoria (apenas do usuário)
router.put('/:id', auth_1.default, async (req, res) => {
    if (!req.user)
        return res.status(401).json({ error: 'Usuário não autenticado' });
    const parseParams = idParamSchema.safeParse(req.params);
    if (!parseParams.success) {
        return res.status(400).json({ error: 'Parâmetro inválido', details: parseParams.error.issues });
    }
    const parseBody = zod_1.categoriesUpdateInputSchema.safeParse(req.body);
    if (!parseBody.success) {
        return res.status(400).json({ error: 'Dados inválidos', details: parseBody.error.issues });
    }
    try {
        // Verificar se a categoria pertence ao usuário
        const categoriaExistente = await prisma_1.default.categories.findFirst({
            where: { id: req.params.id, user_id: req.user.id }
        });
        if (!categoriaExistente) {
            return res.status(404).json({ error: 'Categoria não encontrada' });
        }
        const atualizada = await prisma_1.default.categories.update({
            where: { id: req.params.id },
            data: parseBody.data,
        });
        res.json(atualizada);
    }
    catch (e) {
        console.error('Erro ao atualizar categoria:', e);
        res.status(500).json({ error: 'Erro ao atualizar categoria', details: e });
    }
});
// Deletar categoria (apenas do usuário)
router.delete('/:id', auth_1.default, async (req, res) => {
    if (!req.user)
        return res.status(401).json({ error: 'Usuário não autenticado' });
    const parse = idParamSchema.safeParse(req.params);
    if (!parse.success) {
        return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
    }
    try {
        // Verificar se a categoria pertence ao usuário
        const categoriaExistente = await prisma_1.default.categories.findFirst({
            where: { id: req.params.id, user_id: req.user.id }
        });
        if (!categoriaExistente) {
            return res.status(404).json({ error: 'Categoria não encontrada' });
        }
        await prisma_1.default.categories.delete({ where: { id: req.params.id } });
        res.status(204).send();
    }
    catch (e) {
        console.error('Erro ao deletar categoria:', e);
        res.status(500).json({ error: 'Erro ao deletar categoria', details: e });
    }
});
exports.default = router;
