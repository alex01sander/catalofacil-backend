"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
// Listar todos os perfis
router.get('/', async (req, res) => {
    const perfis = await prisma.profiles.findMany({ include: { users: true } });
    res.json(perfis);
});
// Buscar perfil por ID
router.get('/:id', async (req, res) => {
    const perfil = await prisma.profiles.findUnique({
        where: { id: req.params.id },
        include: { users: true }
    });
    if (!perfil)
        return res.status(404).json({ error: 'Perfil não encontrado' });
    res.json(perfil);
});
// Criar perfil
router.post('/', async (req, res) => {
    try {
        const novo = await prisma.profiles.create({ data: req.body });
        res.status(201).json(novo);
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao criar perfil', details: e });
    }
});
// Atualizar perfil
router.put('/:id', async (req, res) => {
    try {
        const atualizado = await prisma.profiles.update({
            where: { id: req.params.id },
            data: req.body,
        });
        res.json(atualizado);
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao atualizar perfil', details: e });
    }
});
// Deletar perfil
router.delete('/:id', async (req, res) => {
    try {
        await prisma.profiles.delete({ where: { id: req.params.id } });
        res.status(204).send();
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao deletar perfil', details: e });
    }
});
exports.default = router;
