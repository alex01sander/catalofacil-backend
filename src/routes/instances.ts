import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Listar todas as instances
router.get('/', async (req, res) => {
  const items = await prisma.instances.findMany();
  res.json(items);
});

// Buscar instance por ID
router.get('/:id', async (req, res) => {
  const item = await prisma.instances.findUnique({ where: { id: req.params.id } });
  if (!item) return res.status(404).json({ error: 'Registro não encontrado' });
  res.json(item);
});

// Criar instance
router.post('/', async (req, res) => {
  try {
    const novo = await prisma.instances.create({ data: req.body });
    res.status(201).json(novo);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao criar registro', details: e });
  }
});

// Atualizar instance
router.put('/:id', async (req, res) => {
  try {
    const atualizado = await prisma.instances.update({
      where: { id: req.params.id },
      data: req.body,
    });
    res.json(atualizado);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao atualizar registro', details: e });
  }
});

// Deletar instance
router.delete('/:id', async (req, res) => {
  try {
    await prisma.instances.delete({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (e) {
    res.status(400).json({ error: 'Erro ao deletar registro', details: e });
  }
});

export default router; 