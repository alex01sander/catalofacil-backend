import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Listar todos os fluxos de caixa
router.get('/', async (req, res) => {
  const fluxos = await prisma.cash_flow.findMany();
  res.json(fluxos);
});

// Buscar fluxo de caixa por ID
router.get('/:id', async (req, res) => {
  const fluxo = await prisma.cash_flow.findUnique({ where: { id: req.params.id } });
  if (!fluxo) return res.status(404).json({ error: 'Fluxo de caixa não encontrado' });
  res.json(fluxo);
});

// Criar fluxo de caixa
router.post('/', async (req, res) => {
  try {
    const novo = await prisma.cash_flow.create({ data: req.body });
    res.status(201).json(novo);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao criar fluxo de caixa', details: e });
  }
});

// Atualizar fluxo de caixa
router.put('/:id', async (req, res) => {
  try {
    const atualizado = await prisma.cash_flow.update({
      where: { id: req.params.id },
      data: req.body,
    });
    res.json(atualizado);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao atualizar fluxo de caixa', details: e });
  }
});

// Deletar fluxo de caixa
router.delete('/:id', async (req, res) => {
  try {
    await prisma.cash_flow.delete({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (e) {
    res.status(400).json({ error: 'Erro ao deletar fluxo de caixa', details: e });
  }
});

export default router; 