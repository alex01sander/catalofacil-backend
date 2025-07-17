// src/routes/products.ts
import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import authenticateJWT from '../middleware/auth';
import { productsCreateInputSchema, productsUpdateInputSchema } from '../zod';
const prisma = new PrismaClient();
const router = Router();

// Criar produto (privado)
router.post('/', authenticateJWT, async (req, res) => {
  const parse = productsCreateInputSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({ error: 'Dados inválidos', details: parse.error.issues });
  }
  const { title, description, price, imageUrl, domainId } = parse.data;
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
router.put('/:id', authenticateJWT, async (req, res) => {
  const parse = productsUpdateInputSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({ error: 'Dados inválidos', details: parse.error.issues });
  }
  const { id } = req.params;
  const { title, description, price, imageUrl } = parse.data;
  const product = await prisma.product.findUnique({ where: { id } });
  if (!product) return res.status(404).json({ error: 'Produto não encontrado' });
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
router.delete('/:id', authenticateJWT, async (req, res) => {
  const { id } = req.params;
  const product = await prisma.product.findUnique({ where: { id } });
  if (!product) return res.status(404).json({ error: 'Produto não encontrado' });
  const domain = await prisma.domain.findUnique({ where: { id: product.domainId } });
  if (!domain || !req.user || domain.userId !== req.user.id) {
    return res.status(403).json({ error: 'Acesso negado ao domínio' });
  }
  await prisma.product.delete({ where: { id } });
  res.json({ success: true });
});

// Listar produtos do usuário autenticado
router.get('/', authenticateJWT, async (req, res) => {
  if (!req.user) return res.status(401).json({ error: 'Não autenticado' });
  // Buscar todos os domínios do usuário
  const domains = await prisma.domain.findMany({ where: { userId: req.user.id } });
  const domainIds = domains.map((d: { id: string }) => d.id);
  // Buscar produtos desses domínios
  const products = await prisma.product.findMany({ where: { domainId: { in: domainIds } } });
  res.json(products);
});

export default router;
