"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/products.ts
const express_1 = require("express");
const client_1 = require("@prisma/client");
const auth_1 = __importDefault(require("../middleware/auth"));
const prisma = new client_1.PrismaClient();
const router = (0, express_1.Router)();
// Criar produto (privado)
router.post('/', auth_1.default, async (req, res) => {
    const { title, description, price, imageUrl, domainId } = req.body;
    const domain = await prisma.domain.findUnique({ where: { id: domainId } });
    if (!domain || !req.user || domain.userId !== req.user.id) {
        return res.status(403).json({ error: 'Acesso negado ao domínio' });
    }
    const product = await prisma.product.create({
        data: { title, description, price, imageUrl, domainId }
    });
    res.json(product);
});
// Editar produto (privado)
router.put('/:id', auth_1.default, async (req, res) => {
    const { id } = req.params;
    const { title, description, price, imageUrl } = req.body;
    const product = await prisma.product.findUnique({ where: { id } });
    if (!product)
        return res.status(404).json({ error: 'Produto não encontrado' });
    const domain = await prisma.domain.findUnique({ where: { id: product.domainId } });
    if (!domain || !req.user || domain.userId !== req.user.id) {
        return res.status(403).json({ error: 'Acesso negado ao domínio' });
    }
    const updated = await prisma.product.update({
        where: { id },
        data: { title, description, price, imageUrl }
    });
    res.json(updated);
});
// Deletar produto (privado)
router.delete('/:id', auth_1.default, async (req, res) => {
    const { id } = req.params;
    const product = await prisma.product.findUnique({ where: { id } });
    if (!product)
        return res.status(404).json({ error: 'Produto não encontrado' });
    const domain = await prisma.domain.findUnique({ where: { id: product.domainId } });
    if (!domain || !req.user || domain.userId !== req.user.id) {
        return res.status(403).json({ error: 'Acesso negado ao domínio' });
    }
    await prisma.product.delete({ where: { id } });
    res.json({ success: true });
});
// Listar produtos do usuário autenticado
router.get('/', auth_1.default, async (req, res) => {
    if (!req.user)
        return res.status(401).json({ error: 'Não autenticado' });
    // Buscar todos os domínios do usuário
    const domains = await prisma.domain.findMany({ where: { userId: req.user.id } });
    const domainIds = domains.map((d) => d.id);
    // Buscar produtos desses domínios
    const products = await prisma.product.findMany({ where: { domainId: { in: domainIds } } });
    res.json(products);
});
exports.default = router;
