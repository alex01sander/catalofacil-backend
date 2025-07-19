"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_1 = __importDefault(require("../lib/prisma"));
const router = (0, express_1.Router)();
// Listar todos os sso_domains
router.get('/', async (req, res) => {
    const items = await prisma_1.default.sso_domains.findMany();
    res.json(items);
});
// Buscar sso_domain por ID
router.get('/:id', async (req, res) => {
    const item = await prisma_1.default.sso_domains.findUnique({ where: { id: req.params.id } });
    if (!item)
        return res.status(404).json({ error: 'Registro não encontrado' });
    res.json(item);
});
// Criar sso_domain
router.post('/', async (req, res) => {
    try {
        const novo = await prisma_1.default.sso_domains.create({ data: req.body });
        res.status(201).json(novo);
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao criar registro', details: e });
    }
});
// Atualizar sso_domain
router.put('/:id', async (req, res) => {
    try {
        const atualizado = await prisma_1.default.sso_domains.update({
            where: { id: req.params.id },
            data: req.body,
        });
        res.json(atualizado);
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao atualizar registro', details: e });
    }
});
// Deletar sso_domain
router.delete('/:id', async (req, res) => {
    try {
        await prisma_1.default.sso_domains.delete({ where: { id: req.params.id } });
        res.status(204).send();
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao deletar registro', details: e });
    }
});
exports.default = router;
