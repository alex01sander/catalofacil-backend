import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const router = Router();

// Consulta pública de produtos por domínio
router.get('/:slug', async (req, res) => {
  const { slug } = req.params;
  const domain = await prisma.domain.findUnique({ where: { slug }, include: { products: true } });
  if (!domain) return res.status(404).json({ error: 'Domínio não encontrado' });
  res.json({ domain: domain.slug, products: domain.products });
});

export default router; 