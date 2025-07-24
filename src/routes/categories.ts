import { Router } from 'express';
import prisma from '../lib/prisma';
import { categoriesCreateInputSchema, categoriesUpdateInputSchema } from '../zod';
import authenticateJWT from '../middleware/auth';
import { z } from 'zod';

const router = Router();
const idParamSchema = z.object({ id: z.string().min(1, 'ID obrigatório') });

// Listar categorias do usuário
router.get('/', authenticateJWT, async (req, res) => {
  if (!req.user) return res.status(401).json({ error: 'Usuário não autenticado' });
  
  try {
    const categorias = await prisma.categories.findMany({ 
      where: { user_id: req.user.id },
      include: { products: true, stores: true, users: true },
      orderBy: { name: 'asc' }
    });
    res.json(categorias);
  } catch (error) {
    console.error('Erro ao listar categorias:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Buscar categoria por ID (do usuário)
router.get('/:id', authenticateJWT, async (req, res) => {
  if (!req.user) return res.status(401).json({ error: 'Usuário não autenticado' });
  
  const parse = idParamSchema.safeParse(req.params);
  if (!parse.success) {
    return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
  }
  
  try {
    const categoria = await prisma.categories.findFirst({
      where: { 
        id: req.params.id,
        user_id: req.user.id 
      },
      include: { products: true, stores: true, users: true }
    });
    
    if (!categoria) return res.status(404).json({ error: 'Categoria não encontrada' });
    res.json(categoria);
  } catch (error) {
    console.error('Erro ao buscar categoria:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Criar categoria
router.post('/', authenticateJWT, async (req, res) => {
  const parse = categoriesCreateInputSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({ error: 'Dados inválidos', details: parse.error.issues });
  }
  try {
    // Adicionar o userId do usuário autenticado
    if (!req.user) {
      return res.status(401).json({ error: 'Usuário não autenticado' });
    }
    
    const data = {
      ...parse.data,
      user_id: req.user.id,
      store_id: req.body.store_id // O frontend deve enviar o store_id correto!
    };
    
    const nova = await prisma.categories.create({ data });
    res.status(201).json(nova);
  } catch (e) {
    console.error('Erro ao criar categoria:', e);
    res.status(400).json({ error: 'Erro ao criar categoria', details: e });
  }
});

// Atualizar categoria (apenas do usuário)
router.put('/:id', authenticateJWT, async (req, res) => {
  if (!req.user) return res.status(401).json({ error: 'Usuário não autenticado' });
  
  const parseParams = idParamSchema.safeParse(req.params);
  if (!parseParams.success) {
    return res.status(400).json({ error: 'Parâmetro inválido', details: parseParams.error.issues });
  }
  const parseBody = categoriesUpdateInputSchema.safeParse(req.body);
  if (!parseBody.success) {
    return res.status(400).json({ error: 'Dados inválidos', details: parseBody.error.issues });
  }
  
  try {
    // Verificar se a categoria pertence ao usuário
    const categoriaExistente = await prisma.categories.findFirst({
      where: { id: req.params.id, user_id: req.user.id }
    });
    
    if (!categoriaExistente) {
      return res.status(404).json({ error: 'Categoria não encontrada' });
    }
    
    const atualizada = await prisma.categories.update({
      where: { id: req.params.id },
      data: parseBody.data,
    });
    res.json(atualizada);
  } catch (e) {
    console.error('Erro ao atualizar categoria:', e);
    res.status(500).json({ error: 'Erro ao atualizar categoria', details: e });
  }
});

// Deletar categoria (apenas do usuário)
router.delete('/:id', authenticateJWT, async (req, res) => {
  if (!req.user) return res.status(401).json({ error: 'Usuário não autenticado' });
  
  const parse = idParamSchema.safeParse(req.params);
  if (!parse.success) {
    return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
  }
  
  try {
    // Verificar se a categoria pertence ao usuário
    const categoriaExistente = await prisma.categories.findFirst({
      where: { id: req.params.id, user_id: req.user.id }
    });
    
    if (!categoriaExistente) {
      return res.status(404).json({ error: 'Categoria não encontrada' });
    }
    
    await prisma.categories.delete({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (e) {
    console.error('Erro ao deletar categoria:', e);
    res.status(500).json({ error: 'Erro ao deletar categoria', details: e });
  }
});

export default router; 