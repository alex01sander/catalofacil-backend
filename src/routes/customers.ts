import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Listar todos os clientes
router.get('/', async (req, res) => {
  const clientes = await prisma.customers.findMany({ include: { stores: true, orders: true } });
  res.json(clientes);
});

// Buscar cliente por ID
router.get('/:id', async (req, res) => {
  const cliente = await prisma.customers.findUnique({
    where: { id: req.params.id },
    include: { stores: true, orders: true }
  });
  if (!cliente) return res.status(404).json({ error: 'Cliente não encontrado' });
  res.json(cliente);
});

// Criar cliente
router.post('/', async (req, res) => {
  try {
    const novo = await prisma.customers.create({ data: req.body });
    res.status(201).json(novo);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao criar cliente', details: e });
  }
});

// Atualizar cliente
router.put('/:id', async (req, res) => {
  try {
    const atualizado = await prisma.customers.update({
      where: { id: req.params.id },
      data: req.body,
    });
    res.json(atualizado);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao atualizar cliente', details: e });
  }
});

// Deletar cliente
router.delete('/:id', async (req, res) => {
  try {
    await prisma.customers.delete({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (e) {
    res.status(400).json({ error: 'Erro ao deletar cliente', details: e });
  }
});

export default router;
