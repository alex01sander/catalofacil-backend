"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
const prisma = new client_1.PrismaClient();
const router = (0, express_1.Router)();
const slugParamSchema = zod_1.z.object({ slug: zod_1.z.string().min(1, 'Slug obrigatório') });
// Consulta pública de produtos por domínio
router.get('/:slug', async (req, res) => {
    const parse = slugParamSchema.safeParse(req.params);
    if (!parse.success) {
        return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
    }
    const { slug } = req.params;
    const domain = await prisma.domain.findUnique({ where: { slug }, include: { products: true } });
    if (!domain)
        return res.status(404).json({ error: 'Domínio não encontrado' });
    res.json({ domain: domain.slug, products: domain.products });
});
exports.default = router;
