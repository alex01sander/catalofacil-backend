import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
const prisma = new PrismaClient();
const router = Router();

const slugParamSchema = z.object({ slug: z.string().min(1, 'Slug obrigatório') });

// Consulta pública de produtos por domínio
router.get('/:slug', async (req, res) => {
  const parse = slugParamSchema.safeParse(req.params);
  if (!parse.success) {
    return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
  }
  const { slug } = req.params;
  const domain = await prisma.domain.findUnique({ where: { slug }, include: { products: true } });
  if (!domain) return res.status(404).json({ error: 'Domínio não encontrado' });
  res.json({ domain: domain.slug, products: domain.products });
});

export default router; 