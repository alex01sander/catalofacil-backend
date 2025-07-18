import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import authenticateJWT from '../middleware/auth';

const router = Router();
const prisma = new PrismaClient();

// Listar todos os users
router.get('/', authenticateJWT, async (req, res) => {
  const items = await prisma.users.findMany();
  res.json(items);
});

// Buscar user por ID
router.get('/:id', async (req, res) => {
  const item = await prisma.users.findUnique({ where: { id: req.params.id } });
  if (!item) return res.status(404).json({ error: 'Registro não encontrado' });
  res.json(item);
});

// Criar user
router.post('/', async (req, res) => {
  try {
    const novo = await prisma.users.create({ data: req.body });
    res.status(201).json(novo);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao criar registro', details: e });
  }
});

// Atualizar user
router.put('/:id', async (req, res) => {
  try {
    const atualizado = await prisma.users.update({
      where: { id: req.params.id },
      data: req.body,
    });
    res.json(atualizado);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao atualizar registro', details: e });
  }
});

// Deletar user
router.delete('/:id', async (req, res) => {
  try {
    await prisma.users.delete({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (e) {
    res.status(400).json({ error: 'Erro ao deletar registro', details: e });
  }
});

export default router; 