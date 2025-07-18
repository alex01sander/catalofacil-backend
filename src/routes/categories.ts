import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { categoriesCreateInputSchema, categoriesUpdateInputSchema } from '../zod';
import authenticateJWT from '../middleware/auth';
import { z } from 'zod';

const router = Router();
const prisma = new PrismaClient();

const idParamSchema = z.object({ id: z.string().min(1, 'ID obrigatório') });

// Listar todas as categorias
router.get('/', authenticateJWT, async (req, res) => {
  const categorias = await prisma.categories.findMany({ include: { products: true, stores: true, users: true } });
  res.json(categorias);
});

// Buscar categoria por ID
router.get('/:id', authenticateJWT, async (req, res) => {
  const parse = idParamSchema.safeParse(req.params);
  if (!parse.success) {
    return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
  }
  const categoria = await prisma.categories.findUnique({
    where: { id: req.params.id },
    include: { products: true, stores: true, users: true }
  });
  if (!categoria) return res.status(404).json({ error: 'Categoria não encontrada' });
  res.json(categoria);
});

// Criar categoria
router.post('/', async (req, res) => {
  const parse = categoriesCreateInputSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({ error: 'Dados inválidos', details: parse.error.issues });
  }
  try {
    const nova = await prisma.categories.create({ data: parse.data });
    res.status(201).json(nova);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao criar categoria', details: e });
  }
});

// Atualizar categoria
router.put('/:id', authenticateJWT, async (req, res) => {
  const parse = idParamSchema.safeParse(req.params);
  if (!parse.success) {
    return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
  }
  const parse = categoriesUpdateInputSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({ error: 'Dados inválidos', details: parse.error.issues });
  }
  try {
    const atualizada = await prisma.categories.update({
      where: { id: req.params.id },
      data: parse.data,
    });
    res.json(atualizada);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao atualizar categoria', details: e });
  }
});

// Deletar categoria
router.delete('/:id', authenticateJWT, async (req, res) => {
  const parse = idParamSchema.safeParse(req.params);
  if (!parse.success) {
    return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
  }
  try {
    await prisma.categories.delete({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (e) {
    res.status(400).json({ error: 'Erro ao deletar categoria', details: e });
  }
});

export default router; 