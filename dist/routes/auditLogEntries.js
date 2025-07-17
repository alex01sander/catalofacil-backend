"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
// Listar todos os logs de auditoria
router.get('/', async (req, res) => {
    const logs = await prisma.audit_log_entries.findMany();
    res.json(logs);
});
// Buscar log de auditoria por ID
router.get('/:id', async (req, res) => {
    const log = await prisma.audit_log_entries.findUnique({ where: { id: req.params.id } });
    if (!log)
        return res.status(404).json({ error: 'Log não encontrado' });
    res.json(log);
});
// Criar log de auditoria
router.post('/', async (req, res) => {
    try {
        const novo = await prisma.audit_log_entries.create({ data: req.body });
        res.status(201).json(novo);
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao criar log', details: e });
    }
});
// Atualizar log de auditoria
router.put('/:id', async (req, res) => {
    try {
        const atualizado = await prisma.audit_log_entries.update({
            where: { id: req.params.id },
            data: req.body,
        });
        res.json(atualizado);
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao atualizar log', details: e });
    }
});
// Deletar log de auditoria
router.delete('/:id', async (req, res) => {
    try {
        await prisma.audit_log_entries.delete({ where: { id: req.params.id } });
        res.status(204).send();
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao deletar log', details: e });
    }
});
exports.default = router;
