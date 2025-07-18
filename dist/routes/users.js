"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const auth_1 = __importDefault(require("../middleware/auth"));
const zod_1 = require("zod");
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
function filtrarUsuario(user) {
    if (!user)
        return user;
    const { password, resetToken, emailToken, ...seguro } = user;
    return seguro;
}
const idParamSchema = zod_1.z.object({
    id: zod_1.z.string().min(1, 'ID obrigatório')
});
// Listar todos os users
router.get('/', auth_1.default, async (req, res) => {
    const items = await prisma.users.findMany();
    res.json(items.map(filtrarUsuario));
});
// Buscar user por ID
router.get('/:id', auth_1.default, async (req, res) => {
    const parse = idParamSchema.safeParse(req.params);
    if (!parse.success) {
        return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
    }
    const item = await prisma.users.findUnique({ where: { id: req.params.id } });
    if (!item)
        return res.status(404).json({ error: 'Registro não encontrado' });
    res.json(filtrarUsuario(item));
});
// Criar user
router.post('/', auth_1.default, async (req, res) => {
    try {
        const novo = await prisma.users.create({ data: req.body });
        res.status(201).json(filtrarUsuario(novo));
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao criar registro', details: e });
    }
});
// Atualizar user
router.put('/:id', auth_1.default, async (req, res) => {
    const parse = idParamSchema.safeParse(req.params);
    if (!parse.success) {
        return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
    }
    try {
        const atualizado = await prisma.users.update({
            where: { id: req.params.id },
            data: req.body,
        });
        res.json(filtrarUsuario(atualizado));
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao atualizar registro', details: e });
    }
});
// Deletar user
router.delete('/:id', auth_1.default, async (req, res) => {
    const parse = idParamSchema.safeParse(req.params);
    if (!parse.success) {
        return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
    }
    try {
        await prisma.users.delete({ where: { id: req.params.id } });
        res.status(204).send();
    }
    catch (e) {
        res.status(400).json({ error: 'Erro ao deletar registro', details: e });
    }
});
exports.default = router;
