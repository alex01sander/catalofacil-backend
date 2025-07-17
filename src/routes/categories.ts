import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Listar todas as categorias
router.get('/', async (req, res) => {
  const categorias = await prisma.categories.findMany({ include: { products: true, stores: true, users: true } });
  res.json(categorias);
});

// Buscar categoria por ID
router.get('/:id', async (req, res) => {
  const categoria = await prisma.categories.findUnique({
    where: { id: req.params.id },
    include: { products: true, stores: true, users: true }
  });
  if (!categoria) return res.status(404).json({ error: 'Categoria não encontrada' });
  res.json(categoria);
});

// Criar categoria
router.post('/', async (req, res) => {
  try {
    const nova = await prisma.categories.create({ data: req.body });
    res.status(201).json(nova);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao criar categoria', details: e });
  }
});

// Atualizar categoria
router.put('/:id', async (req, res) => {
  try {
    const atualizada = await prisma.categories.update({
      where: { id: req.params.id },
      data: req.body,
    });
    res.json(atualizada);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao atualizar categoria', details: e });
  }
});

// Deletar categoria
router.delete('/:id', async (req, res) => {
  try {
    await prisma.categories.delete({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (e) {
    res.status(400).json({ error: 'Erro ao deletar categoria', details: e });
  }
});

export default router; 