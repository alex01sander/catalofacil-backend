"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_1 = __importDefault(require("../lib/prisma"));
const router = (0, express_1.Router)();
// Listar todas as identities
router.get('/', async (req, res) => {
    const items = await prisma_1.default.identities.findMany();
    res.json(items);
});
// Buscar identity por ID
router.get('/:id', async (req, res) => {
    const item = await prisma_1.default.identities.findUnique({ where: { id: req.params.id } });
    if (!item)
        return res.status(404).json({ error: 'Registro não encontrado' });
    res.json(item);
});
// Criar identity
router.post('/', async (req, res) => {
    try {
        const novo = await prisma_1.default.identities.create({ data: req.body });
        res.status(201).json(novo);
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao criar registro', details: e });
    }
});
// Atualizar identity
router.put('/:id', async (req, res) => {
    try {
        const atualizado = await prisma_1.default.identities.update({
            where: { id: req.params.id },
            data: req.body,
        });
        res.json(atualizado);
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao atualizar registro', details: e });
    }
});
// Deletar identity
router.delete('/:id', async (req, res) => {
    try {
        await prisma_1.default.identities.delete({ where: { id: req.params.id } });
        res.status(204).send();
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao deletar registro', details: e });
    }
});
exports.default = router;
