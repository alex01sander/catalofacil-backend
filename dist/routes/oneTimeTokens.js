"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_1 = __importDefault(require("../lib/prisma"));
const router = (0, express_1.Router)();
// Listar todos os one time tokens
router.get('/', async (req, res) => {
    const tokens = await prisma_1.default.one_time_tokens.findMany({ include: { users: true } });
    res.json(tokens);
});
// Buscar one time token por ID
router.get('/:id', async (req, res) => {
    const token = await prisma_1.default.one_time_tokens.findUnique({
        where: { id: req.params.id },
        include: { users: true }
    });
    if (!token)
        return res.status(404).json({ error: 'Token não encontrado' });
    res.json(token);
});
// Criar one time token
router.post('/', async (req, res) => {
    try {
        const novo = await prisma_1.default.one_time_tokens.create({ data: req.body });
        res.status(201).json(novo);
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao criar token', details: e });
    }
});
// Atualizar one time token
router.put('/:id', async (req, res) => {
    try {
        const atualizado = await prisma_1.default.one_time_tokens.update({
            where: { id: req.params.id },
            data: req.body,
        });
        res.json(atualizado);
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao atualizar token', details: e });
    }
});
// Deletar one time token
router.delete('/:id', async (req, res) => {
    try {
        await prisma_1.default.one_time_tokens.delete({ where: { id: req.params.id } });
        res.status(204).send();
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao deletar token', details: e });
    }
});
exports.default = router;
