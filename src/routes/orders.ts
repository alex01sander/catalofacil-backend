import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { ordersCreateInputSchema, ordersUpdateInputSchema } from '../zod';
import authenticateJWT from '../middleware/auth';
import { z } from 'zod';

const router = Router();
const prisma = new PrismaClient();

const idParamSchema = z.object({ id: z.string().min(1, 'ID obrigatório') });

// Listar todos os pedidos
router.get('/', authenticateJWT, async (req, res) => {
  const pedidos = await prisma.orders.findMany({ include: { order_items: true, customers: true, stores: true } });
  res.json(pedidos);
});

// Buscar pedido por ID
router.get('/:id', authenticateJWT, async (req, res) => {
  const parse = idParamSchema.safeParse(req.params);
  if (!parse.success) {
    return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
  }
  const pedido = await prisma.orders.findUnique({
    where: { id: req.params.id },
    include: { order_items: true, customers: true, stores: true }
  });
  if (!pedido) return res.status(404).json({ error: 'Pedido não encontrado' });
  res.json(pedido);
});

// Criar pedido
router.post('/', async (req, res) => {
  const parse = ordersCreateInputSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({ error: 'Dados inválidos', details: parse.error.issues });
  }
  try {
    const novo = await prisma.orders.create({ data: parse.data });
    res.status(201).json(novo);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao criar pedido', details: e });
  }
});

// Atualizar pedido
router.put('/:id', authenticateJWT, async (req, res) => {
  const parse = idParamSchema.safeParse(req.params);
  if (!parse.success) {
    return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
  }
  const parse = ordersUpdateInputSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({ error: 'Dados inválidos', details: parse.error.issues });
  }
  try {
    const atualizado = await prisma.orders.update({
      where: { id: req.params.id },
      data: parse.data,
    });
    res.json(atualizado);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao atualizar pedido', details: e });
  }
});

// Deletar pedido
router.delete('/:id', authenticateJWT, async (req, res) => {
  const parse = idParamSchema.safeParse(req.params);
  if (!parse.success) {
    return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
  }
  try {
    await prisma.orders.delete({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (e) {
    res.status(400).json({ error: 'Erro ao deletar pedido', details: e });
  }
});

export default router;