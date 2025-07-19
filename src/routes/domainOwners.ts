import { Router } from 'express';
import prisma from '../lib/prisma';
import authenticateJWT from '../middleware/auth';

const router = Router();
// Listar todos os domínios
router.get('/', authenticateJWT, async (req, res) => {
  const dominios = await prisma.domain_owners.findMany({ include: { users: true } });
  res.json(dominios);
});

// Buscar domínio por ID
router.get('/:id', async (req, res) => {
  const dominio = await prisma.domain_owners.findUnique({
    where: { id: req.params.id },
    include: { users: true }
  });
  if (!dominio) return res.status(404).json({ error: 'Domínio não encontrado' });
  res.json(dominio);
});

// Criar domínio
router.post('/', async (req, res) => {
  try {
    const novo = await prisma.domain_owners.create({ data: req.body });
    res.status(201).json(novo);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao criar domínio', details: e });
  }
});

// Atualizar domínio
router.put('/:id', async (req, res) => {
  try {
    const atualizado = await prisma.domain_owners.update({
      where: { id: req.params.id },
      data: req.body,
    });
    res.json(atualizado);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao atualizar domínio', details: e });
  }
});

// Deletar domínio
router.delete('/:id', async (req, res) => {
  try {
    await prisma.domain_owners.delete({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (e) {
    res.status(400).json({ error: 'Erro ao deletar domínio', details: e });
  }
});

export default router; 