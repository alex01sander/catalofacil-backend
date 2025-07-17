"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const router = (0, express_1.Router)();
// Consulta pública de produtos por domínio
router.get('/:slug', async (req, res) => {
    const { slug } = req.params;
    const domain = await prisma.domain.findUnique({ where: { slug }, include: { products: true } });
    if (!domain)
        return res.status(404).json({ error: 'Domínio não encontrado' });
    res.json({ domain: domain.slug, products: domain.products });
});
exports.default = router;
