import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { store_settingsCreateInputSchema, store_settingsUpdateInputSchema } from '../zod';

const router = Router();
const prisma = new PrismaClient();

// Listar todas as configurações de loja ou buscar por user_id
router.get('/', async (req, res) => {
  const { user_id } = req.query;
  if (user_id) {
    // Busca única por user_id
    const settings = await prisma.store_settings.findUnique({ where: { user_id: String(user_id) } });
    return res.json(settings);
  }
  const settings = await prisma.store_settings.findMany({ include: { users: true } });
  res.json(settings);
});

// Buscar configuração de loja por ID
router.get('/:id', async (req, res) => {
  const setting = await prisma.store_settings.findUnique({
    where: { id: req.params.id },
    include: { users: true }
  });
  if (!setting) return res.status(404).json({ error: 'Configuração não encontrada' });
  res.json(setting);
});

// Criar configuração de loja
router.post('/', async (req, res) => {
  const parse = store_settingsCreateInputSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({ error: 'Dados inválidos', details: parse.error.issues });
  }
  try {
    const nova = await prisma.store_settings.create({ data: parse.data });
    res.status(201).json(nova);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao criar configuração', details: e });
  }
});

// Atualizar configuração de loja
router.put('/:id', async (req, res) => {
  const parse = store_settingsUpdateInputSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({ error: 'Dados inválidos', details: parse.error.issues });
  }
  try {
    const atualizada = await prisma.store_settings.update({
      where: { id: req.params.id },
      data: parse.data,
    });
    res.json(atualizada);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao atualizar configuração', details: e });
  }
});

// Deletar configuração de loja
router.delete('/:id', async (req, res) => {
  try {
    await prisma.store_settings.delete({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (e) {
    res.status(400).json({ error: 'Erro ao deletar configuração', details: e });
  }
});

export default router; 