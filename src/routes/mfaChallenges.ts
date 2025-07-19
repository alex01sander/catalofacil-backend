import { Router } from 'express';
import prisma from '../lib/prisma';
const router = Router();
// Listar todos os mfa_challenges
router.get('/', async (req, res) => {
  const items = await prisma.mfa_challenges.findMany();
  res.json(items);
});

// Buscar mfa_challenge por ID
router.get('/:id', async (req, res) => {
  const item = await prisma.mfa_challenges.findUnique({ where: { id: req.params.id } });
  if (!item) return res.status(404).json({ error: 'Registro não encontrado' });
  res.json(item);
});

// Criar mfa_challenge
router.post('/', async (req, res) => {
  try {
    const novo = await prisma.mfa_challenges.create({ data: req.body });
    res.status(201).json(novo);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao criar registro', details: e });
  }
});

// Atualizar mfa_challenge
router.put('/:id', async (req, res) => {
  try {
    const atualizado = await prisma.mfa_challenges.update({
      where: { id: req.params.id },
      data: req.body,
    });
    res.json(atualizado);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao atualizar registro', details: e });
  }
});

// Deletar mfa_challenge
router.delete('/:id', async (req, res) => {
  try {
    await prisma.mfa_challenges.delete({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (e) {
    res.status(400).json({ error: 'Erro ao deletar registro', details: e });
  }
});

export default router; 