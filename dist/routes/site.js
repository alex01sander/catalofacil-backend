"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_1 = __importDefault(require("../lib/prisma"));
const zod_1 = require("zod");
const router = (0, express_1.Router)();
const slugParamSchema = zod_1.z.object({ slug: zod_1.z.string().min(1, 'Slug obrigatório') });
// Consulta pública de produtos por domínio
router.get('/:slug', async (req, res) => {
    const parse = slugParamSchema.safeParse(req.params);
    if (!parse.success) {
        return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
    }
    const { slug } = req.params;
    const domain = await prisma_1.default.domain.findUnique({ where: { slug }, include: { products: true } });
    if (!domain)
        return res.status(404).json({ error: 'Domínio não encontrado' });
    res.json({ domain: domain.slug, products: domain.products });
});
exports.default = router;
