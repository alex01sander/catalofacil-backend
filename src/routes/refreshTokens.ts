import { Router } from 'express';
import prisma from '../lib/prisma';
const router = Router();
// Listar todos os refresh tokens
router.get('/', async (req, res) => {
  const tokens = await prisma.refresh_tokens.findMany({ include: { sessions: true } });
  res.json(tokens);
});

// Buscar refresh token por ID
router.get('/:id', async (req, res) => {
  const token = await prisma.refresh_tokens.findUnique({
    where: { id: BigInt(req.params.id) },
    include: { sessions: true }
  });
  if (!token) return res.status(404).json({ error: 'Token não encontrado' });
  res.json(token);
});

// Criar refresh token
router.post('/', async (req, res) => {
  try {
    const novo = await prisma.refresh_tokens.create({ data: req.body });
    res.status(201).json(novo);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao criar token', details: e });
  }
});

// Atualizar refresh token
router.put('/:id', async (req, res) => {
  try {
    const atualizado = await prisma.refresh_tokens.update({
      where: { id: BigInt(req.params.id) },
      data: req.body,
    });
    res.json(atualizado);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao atualizar token', details: e });
  }
});

// Deletar refresh token
router.delete('/:id', async (req, res) => {
  try {
    await prisma.refresh_tokens.delete({ where: { id: BigInt(req.params.id) } });
    res.status(204).send();
  } catch (e) {
    res.status(400).json({ error: 'Erro ao deletar token', details: e });
  }
});

export default router; 