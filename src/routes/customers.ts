import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { customersCreateInputSchema, customersUpdateInputSchema } from '../zod';
import authenticateJWT from '../middleware/auth';
import { z } from 'zod';

const router = Router();
const prisma = new PrismaClient();

const idParamSchema = z.object({ id: z.string().min(1, 'ID obrigatório') });

// Listar todos os clientes
router.get('/', authenticateJWT, async (req, res) => {
  const clientes = await prisma.customers.findMany({ include: { stores: true, orders: true } });
  res.json(clientes);
});

// Buscar cliente por ID
router.get('/:id', authenticateJWT, async (req, res) => {
  const parse = idParamSchema.safeParse(req.params);
  if (!parse.success) {
    return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
  }
  const cliente = await prisma.customers.findUnique({
    where: { id: req.params.id },
    include: { stores: true, orders: true }
  });
  if (!cliente) return res.status(404).json({ error: 'Cliente não encontrado' });
  res.json(cliente);
});

// Criar cliente
router.post('/', async (req, res) => {
  const parse = customersCreateInputSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({ error: 'Dados inválidos', details: parse.error.issues });
  }
  try {
    const novo = await prisma.customers.create({ data: parse.data });
    res.status(201).json(novo);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao criar cliente', details: e });
  }
});

// Atualizar cliente
router.put('/:id', authenticateJWT, async (req, res) => {
  const parse = idParamSchema.safeParse(req.params);
  if (!parse.success) {
    return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
  }
  const parse = customersUpdateInputSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({ error: 'Dados inválidos', details: parse.error.issues });
  }
  try {
    const atualizado = await prisma.customers.update({
      where: { id: req.params.id },
      data: parse.data,
    });
    res.json(atualizado);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao atualizar cliente', details: e });
  }
});

// Deletar cliente
router.delete('/:id', authenticateJWT, async (req, res) => {
  const parse = idParamSchema.safeParse(req.params);
  if (!parse.success) {
    return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
  }
  try {
    await prisma.customers.delete({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (e) {
    res.status(400).json({ error: 'Erro ao deletar cliente', details: e });
  }
});

export default router;
