import { Router } from 'express';
import prisma from '../lib/prisma';
import authenticateJWT from '../middleware/auth';
const router = Router();

// Criar domínio para o usuário autenticado
router.post('/', authenticateJWT, async (req, res) => {
  if (!req.user) return res.status(401).json({ error: 'Não autenticado' });
  const { slug } = req.body;
  if (!slug) return res.status(400).json({ error: 'Slug é obrigatório' });
  // Verifica se já existe domínio com esse slug
  const exists = await prisma.domain.findUnique({ where: { slug } });
  if (exists) return res.status(409).json({ error: 'Slug já está em uso' });
  // Cria domínio
  const domain = await prisma.domain.create({
    data: {
      slug,
      userId: req.user.id
    }
  });
  res.json(domain);
});

export default router; 