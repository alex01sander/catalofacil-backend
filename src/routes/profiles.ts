import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import authenticateJWT from '../middleware/auth';
import { z } from 'zod';

const router = Router();
const prisma = new PrismaClient();

const idParamSchema = z.object({ id: z.string().min(1, 'ID obrigatório') });

// Listar todos os perfis
router.get('/', authenticateJWT, async (req, res) => {
  const perfis = await prisma.profiles.findMany({ include: { users: true } });
  res.json(perfis);
});

// Buscar perfil por ID
router.get('/:id', authenticateJWT, async (req, res) => {
  const parse = idParamSchema.safeParse(req.params);
  if (!parse.success) {
    return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
  }
  const perfil = await prisma.profiles.findUnique({
    where: { id: req.params.id },
    include: { users: true }
  });
  if (!perfil) return res.status(404).json({ error: 'Perfil não encontrado' });
  res.json(perfil);
});

// Criar perfil
router.post('/', async (req, res) => {
  try {
    const novo = await prisma.profiles.create({ data: req.body });
    res.status(201).json(novo);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao criar perfil', details: e });
  }
});

// Atualizar perfil
router.put('/:id', authenticateJWT, async (req, res) => {
  const parse = idParamSchema.safeParse(req.params);
  if (!parse.success) {
    return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
  }
  try {
    const atualizado = await prisma.profiles.update({
      where: { id: req.params.id },
      data: req.body,
    });
    res.json(atualizado);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao atualizar perfil', details: e });
  }
});

// Deletar perfil
router.delete('/:id', authenticateJWT, async (req, res) => {
  const parse = idParamSchema.safeParse(req.params);
  if (!parse.success) {
    return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
  }
  try {
    await prisma.profiles.delete({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (e) {
    res.status(400).json({ error: 'Erro ao deletar perfil', details: e });
  }
});

export default router; 