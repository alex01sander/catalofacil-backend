"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
// Listar todos os sso_providers
router.get('/', async (req, res) => {
    const items = await prisma.sso_providers.findMany();
    res.json(items);
});
// Buscar sso_provider por ID
router.get('/:id', async (req, res) => {
    const item = await prisma.sso_providers.findUnique({ where: { id: req.params.id } });
    if (!item)
        return res.status(404).json({ error: 'Registro não encontrado' });
    res.json(item);
});
// Criar sso_provider
router.post('/', async (req, res) => {
    try {
        const novo = await prisma.sso_providers.create({ data: req.body });
        res.status(201).json(novo);
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao criar registro', details: e });
    }
});
// Atualizar sso_provider
router.put('/:id', async (req, res) => {
    try {
        const atualizado = await prisma.sso_providers.update({
            where: { id: req.params.id },
            data: req.body,
        });
        res.json(atualizado);
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao atualizar registro', details: e });
    }
});
// Deletar sso_provider
router.delete('/:id', async (req, res) => {
    try {
        await prisma.sso_providers.delete({ where: { id: req.params.id } });
        res.status(204).send();
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao deletar registro', details: e });
    }
});
exports.default = router;
