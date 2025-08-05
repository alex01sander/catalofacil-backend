import { Router } from 'express';
import prisma from '../lib/prisma';
const router = Router();
// Listar todos os admins de controller
router.get('/', async (req, res) => {
  const admins = await prisma.controller_admins.findMany({ include: { users: true } });
  res.json(admins);
});

// Verificar se usuário é admin (por userId)
router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    
    // Verificar se o usuário existe e é admin
    const user = await prisma.users.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        role: true
      }
    });
    
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    
    // Verificar se é admin (role = 'admin' ou está na tabela controller_admins)
    const isAdmin = user.role === 'admin' || await prisma.controller_admins.findFirst({
      where: { user_id: user.id }
    });
    
    if (!isAdmin) {
      return res.status(403).json({ 
        error: 'Usuário não é administrador',
        isAdmin: false 
      });
    }
    
    res.json({
      isAdmin: true,
      user: {
        id: user.id,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Erro ao verificar admin:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Criar admin
router.post('/', async (req, res) => {
  try {
    const novo = await prisma.controller_admins.create({ data: req.body });
    res.status(201).json(novo);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao criar admin', details: e });
  }
});

// Atualizar admin
router.put('/:id', async (req, res) => {
  try {
    const atualizado = await prisma.controller_admins.update({
      where: { id: req.params.id },
      data: req.body,
    });
    res.json(atualizado);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao atualizar admin', details: e });
  }
});

// Deletar admin
router.delete('/:id', async (req, res) => {
  try {
    await prisma.controller_admins.delete({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (e) {
    res.status(400).json({ error: 'Erro ao deletar admin', details: e });
  }
});

export default router; 