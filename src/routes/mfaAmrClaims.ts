import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Listar todos os mfa_amr_claims
router.get('/', async (req, res) => {
  const items = await prisma.mfa_amr_claims.findMany();
  res.json(items);
});

// Buscar mfa_amr_claims por ID
router.get('/:id', async (req, res) => {
  const item = await prisma.mfa_amr_claims.findUnique({ where: { id: req.params.id } });
  if (!item) return res.status(404).json({ error: 'Registro não encontrado' });
  res.json(item);
});

// Criar mfa_amr_claims
router.post('/', async (req, res) => {
  try {
    const novo = await prisma.mfa_amr_claims.create({ data: req.body });
    res.status(201).json(novo);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao criar registro', details: e });
  }
});

// Atualizar mfa_amr_claims
router.put('/:id', async (req, res) => {
  try {
    const atualizado = await prisma.mfa_amr_claims.update({
      where: { id: req.params.id },
      data: req.body,
    });
    res.json(atualizado);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao atualizar registro', details: e });
  }
});

// Deletar mfa_amr_claims
router.delete('/:id', async (req, res) => {
  try {
    await prisma.mfa_amr_claims.delete({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (e) {
    res.status(400).json({ error: 'Erro ao deletar registro', details: e });
  }
});

export default router; 