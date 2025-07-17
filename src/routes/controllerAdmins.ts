import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Listar todos os admins de controller
router.get('/', async (req, res) => {
  const admins = await prisma.controller_admins.findMany({ include: { users: true } });
  res.json(admins);
});

// Buscar admin por ID
router.get('/:id', async (req, res) => {
  const admin = await prisma.controller_admins.findUnique({
    where: { id: req.params.id },
    include: { users: true }
  });
  if (!admin) return res.status(404).json({ error: 'Admin não encontrado' });
  res.json(admin);
});

// Criar admin
router.post('/', async (req, res) => {
  try {
    const novo = await prisma.controller_admins.create({ data: req.body });
    res.status(201).json(novo);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao criar admin', details: e });
  }
});

// Atualizar admin
router.put('/:id', async (req, res) => {
  try {
    const atualizado = await prisma.controller_admins.update({
      where: { id: req.params.id },
      data: req.body,
    });
    res.json(atualizado);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao atualizar admin', details: e });
  }
});

// Deletar admin
router.delete('/:id', async (req, res) => {
  try {
    await prisma.controller_admins.delete({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (e) {
    res.status(400).json({ error: 'Erro ao deletar admin', details: e });
  }
});

export default router; 