import { Router } from 'express';
import prisma from '../lib/prisma';
import authenticateJWT from '../middleware/auth';
import { z } from 'zod';

const router = Router();
const idParamSchema = z.object({ id: z.string().min(1, 'ID obrigatório') });

// Listar todas as lojas
router.get('/', authenticateJWT, async (req, res) => {
  const lojas = await prisma.stores.findMany({ include: { categories: true, customers: true, orders: true, products: true, sales: true } });
  // Garante que o campo id está presente explicitamente em cada loja
  const lojasComId = lojas.map(loja => ({
    id: loja.id,
    ...loja
  }));
  res.json(lojasComId);
});

// Buscar loja por ID
router.get('/:id', authenticateJWT, async (req, res) => {
  const parse = idParamSchema.safeParse(req.params);
  if (!parse.success) {
    return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
  }
  const loja = await prisma.stores.findUnique({
    where: { id: req.params.id },
    include: { categories: true, customers: true, orders: true, products: true, sales: true }
  });
  if (!loja) return res.status(404).json({ error: 'Loja não encontrada' });
  res.json(loja);
});

// Criar loja
router.post('/', async (req, res) => {
  try {
    const nova = await prisma.stores.create({ data: req.body });
    res.status(201).json(nova);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao criar loja', details: e });
  }
});

// Atualizar loja
router.put('/:id', authenticateJWT, async (req, res) => {
  const parse = idParamSchema.safeParse(req.params);
  if (!parse.success) {
    return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
  }
  try {
    const atualizada = await prisma.stores.update({
      where: { id: req.params.id },
      data: req.body,
    });
    res.json(atualizada);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao atualizar loja', details: e });
  }
});

// Deletar loja
router.delete('/:id', authenticateJWT, async (req, res) => {
  const parse = idParamSchema.safeParse(req.params);
  if (!parse.success) {
    return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
  }
  try {
    await prisma.stores.delete({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (e) {
    res.status(400).json({ error: 'Erro ao deletar loja', details: e });
  }
});

export default router;
