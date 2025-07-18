import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { expensesCreateInputSchema, expensesUpdateInputSchema } from '../zod';
import authenticateJWT from '../middleware/auth';
import { z } from 'zod';

const router = Router();
const prisma = new PrismaClient();

const idParamSchema = z.object({ id: z.string().min(1, 'ID obrigatório') });

// Listar todas as despesas
router.get('/', authenticateJWT, async (req, res) => {
  const despesas = await prisma.expenses.findMany();
  res.json(despesas);
});

// Buscar despesa por ID
router.get('/:id', authenticateJWT, async (req, res) => {
  const parse = idParamSchema.safeParse(req.params);
  if (!parse.success) {
    return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
  }
  const despesa = await prisma.expenses.findUnique({ where: { id: req.params.id } });
  if (!despesa) return res.status(404).json({ error: 'Despesa não encontrada' });
  res.json(despesa);
});

// Criar despesa
router.post('/', async (req, res) => {
  // Validação Zod
  const parse = expensesCreateInputSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({ error: 'Dados inválidos', details: parse.error.issues });
  }
  try {
    const nova = await prisma.expenses.create({ data: parse.data });
    res.status(201).json(nova);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao criar despesa', details: e });
  }
});

// Atualizar despesa
router.put('/:id', authenticateJWT, async (req, res) => {
  const parse = idParamSchema.safeParse(req.params);
  if (!parse.success) {
    return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
  }
  // Validação Zod para atualização
  const parseUpdate = expensesUpdateInputSchema.safeParse(req.body);
  if (!parseUpdate.success) {
    return res.status(400).json({ error: 'Dados inválidos', details: parseUpdate.error.issues });
  }
  try {
    const atualizada = await prisma.expenses.update({
      where: { id: req.params.id },
      data: parseUpdate.data,
    });
    res.json(atualizada);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao atualizar despesa', details: e });
  }
});

// Deletar despesa
router.delete('/:id', authenticateJWT, async (req, res) => {
  const parse = idParamSchema.safeParse(req.params);
  if (!parse.success) {
    return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
  }
  try {
    await prisma.expenses.delete({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (e) {
    res.status(400).json({ error: 'Erro ao deletar despesa', details: e });
  }
});

export default router; 