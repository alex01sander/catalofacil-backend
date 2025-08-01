"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_1 = __importDefault(require("../lib/prisma"));
const router = (0, express_1.Router)();
// Listar todos os schema_migrations
router.get('/', async (req, res) => {
    const items = await prisma_1.default.schema_migrations.findMany();
    res.json(items);
});
// Buscar schema_migration por version
router.get('/:version', async (req, res) => {
    const item = await prisma_1.default.schema_migrations.findUnique({ where: { version: req.params.version } });
    if (!item)
        return res.status(404).json({ error: 'Registro não encontrado' });
    res.json(item);
});
// Criar schema_migration
router.post('/', async (req, res) => {
    try {
        const novo = await prisma_1.default.schema_migrations.create({ data: req.body });
        res.status(201).json(novo);
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao criar registro', details: e });
    }
});
// Atualizar schema_migration
router.put('/:version', async (req, res) => {
    try {
        const atualizado = await prisma_1.default.schema_migrations.update({
            where: { version: req.params.version },
            data: req.body,
        });
        res.json(atualizado);
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao atualizar registro', details: e });
    }
});
// Deletar schema_migration
router.delete('/:version', async (req, res) => {
    try {
        await prisma_1.default.schema_migrations.delete({ where: { version: req.params.version } });
        res.status(204).send();
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao deletar registro', details: e });
    }
});
exports.default = router;
