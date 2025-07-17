import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Listar todas as sessions
router.get('/', async (req, res) => {
  const items = await prisma.sessions.findMany();
  res.json(items);
});

// Buscar session por ID
router.get('/:id', async (req, res) => {
  const item = await prisma.sessions.findUnique({ where: { id: req.params.id } });
  if (!item) return res.status(404).json({ error: 'Registro não encontrado' });
  res.json(item);
});

// Criar session
router.post('/', async (req, res) => {
  try {
    const novo = await prisma.sessions.create({ data: req.body });
    res.status(201).json(novo);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao criar registro', details: e });
  }
});

// Atualizar session
router.put('/:id', async (req, res) => {
  try {
    const atualizado = await prisma.sessions.update({
      where: { id: req.params.id },
      data: req.body,
    });
    res.json(atualizado);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao atualizar registro', details: e });
  }
});

// Deletar session
router.delete('/:id', async (req, res) => {
  try {
    await prisma.sessions.delete({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (e) {
    res.status(400).json({ error: 'Erro ao deletar registro', details: e });
  }
});

export default router; 