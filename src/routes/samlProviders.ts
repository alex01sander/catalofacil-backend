import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Listar todos os saml_providers
router.get('/', async (req, res) => {
  const items = await prisma.saml_providers.findMany();
  res.json(items);
});

// Buscar saml_provider por ID
router.get('/:id', async (req, res) => {
  const item = await prisma.saml_providers.findUnique({ where: { id: req.params.id } });
  if (!item) return res.status(404).json({ error: 'Registro não encontrado' });
  res.json(item);
});

// Criar saml_provider
router.post('/', async (req, res) => {
  try {
    const novo = await prisma.saml_providers.create({ data: req.body });
    res.status(201).json(novo);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao criar registro', details: e });
  }
});

// Atualizar saml_provider
router.put('/:id', async (req, res) => {
  try {
    const atualizado = await prisma.saml_providers.update({
      where: { id: req.params.id },
      data: req.body,
    });
    res.json(atualizado);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao atualizar registro', details: e });
  }
});

// Deletar saml_provider
router.delete('/:id', async (req, res) => {
  try {
    await prisma.saml_providers.delete({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (e) {
    res.status(400).json({ error: 'Erro ao deletar registro', details: e });
  }
});

export default router; 