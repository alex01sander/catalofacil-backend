"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_1 = __importDefault(require("../lib/prisma"));
const auth_1 = __importDefault(require("../middleware/auth"));
const router = (0, express_1.Router)();
// Listar todos os domínios
router.get('/', auth_1.default, async (req, res) => {
    const dominios = await prisma_1.default.domain_owners.findMany({ include: { users: true } });
    res.json(dominios);
});
// Buscar domínio por ID
router.get('/:id', async (req, res) => {
    const dominio = await prisma_1.default.domain_owners.findUnique({
        where: { id: req.params.id },
        include: { users: true }
    });
    if (!dominio)
        return res.status(404).json({ error: 'Domínio não encontrado' });
    res.json(dominio);
});
// Criar domínio
router.post('/', async (req, res) => {
    try {
        const novo = await prisma_1.default.domain_owners.create({ data: req.body });
        res.status(201).json(novo);
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao criar domínio', details: e });
    }
});
// Atualizar domínio
router.put('/:id', async (req, res) => {
    try {
        const atualizado = await prisma_1.default.domain_owners.update({
            where: { id: req.params.id },
            data: req.body,
        });
        res.json(atualizado);
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao atualizar domínio', details: e });
    }
});
// Deletar domínio
router.delete('/:id', async (req, res) => {
    try {
        await prisma_1.default.domain_owners.delete({ where: { id: req.params.id } });
        res.status(204).send();
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao deletar domínio', details: e });
    }
});
exports.default = router;
