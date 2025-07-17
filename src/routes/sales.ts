import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { salesCreateInputSchema, salesUpdateInputSchema } from '../zod';

const router = Router();
const prisma = new PrismaClient();

// Listar todas as vendas
router.get('/', async (req, res) => {
  try {
    const vendas = await prisma.sales.findMany({ include: { stores: true } });
    res.json(vendas);
  } catch (error) {
    console.error('Erro ao listar vendas:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Buscar venda por ID
router.get('/:id', async (req, res) => {
  try {
    const venda = await prisma.sales.findUnique({
      where: { id: req.params.id },
      include: { stores: true }
    });
    if (!venda) return res.status(404).json({ error: 'Venda não encontrada' });
    res.json(venda);
  } catch (error) {
    console.error('Erro ao buscar venda:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Criar venda
router.post('/', async (req, res) => {
  const parse = salesCreateInputSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({ error: 'Dados inválidos', details: parse.error.issues });
  }
  
  try {
    const nova = await prisma.sales.create({ data: parse.data });
    res.status(201).json(nova);
  } catch (error) {
    console.error('Erro ao criar venda:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Atualizar venda
router.put('/:id', async (req, res) => {
  const parse = salesUpdateInputSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({ error: 'Dados inválidos', details: parse.error.issues });
  }
  
  try {
    const atualizada = await prisma.sales.update({
      where: { id: req.params.id },
      data: parse.data,
    });
    res.json(atualizada);
  } catch (error) {
    console.error('Erro ao atualizar venda:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Deletar venda
router.delete('/:id', async (req, res) => {
  try {
    await prisma.sales.delete({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (error) {
    console.error('Erro ao deletar venda:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

export default router; 