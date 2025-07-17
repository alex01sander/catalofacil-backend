"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const auth_1 = __importDefault(require("../middleware/auth"));
const prisma = new client_1.PrismaClient();
const router = (0, express_1.Router)();
// Criar domínio para o usuário autenticado
router.post('/', auth_1.default, async (req, res) => {
    if (!req.user)
        return res.status(401).json({ error: 'Não autenticado' });
    const { slug } = req.body;
    if (!slug)
        return res.status(400).json({ error: 'Slug é obrigatório' });
    // Verifica se já existe domínio com esse slug
    const exists = await prisma.domain.findUnique({ where: { slug } });
    if (exists)
        return res.status(409).json({ error: 'Slug já está em uso' });
    // Cria domínio
    const domain = await prisma.domain.create({
        data: {
            slug,
            userId: req.user.id
        }
    });
    res.json(domain);
});
exports.default = router;
