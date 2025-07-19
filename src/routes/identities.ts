import { Router } from 'express';
import prisma from '../lib/prisma';
const router = Router();
// Listar todas as identities
router.get('/', async (req, res) => {
  const items = await prisma.identities.findMany();
  res.json(items);
});

// Buscar identity por ID
router.get('/:id', async (req, res) => {
  const item = await prisma.identities.findUnique({ where: { id: req.params.id } });
  if (!item) return res.status(404).json({ error: 'Registro não encontrado' });
  res.json(item);
});

// Criar identity
router.post('/', async (req, res) => {
  try {
    const novo = await prisma.identities.create({ data: req.body });
    res.status(201).json(novo);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao criar registro', details: e });
  }
});

// Atualizar identity
router.put('/:id', async (req, res) => {
  try {
    const atualizado = await prisma.identities.update({
      where: { id: req.params.id },
      data: req.body,
    });
    res.json(atualizado);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao atualizar registro', details: e });
  }
});

// Deletar identity
router.delete('/:id', async (req, res) => {
  try {
    await prisma.identities.delete({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (e) {
    res.status(400).json({ error: 'Erro ao deletar registro', details: e });
  }
});

export default router; 