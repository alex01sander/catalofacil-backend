import { Router } from 'express';
import prisma from '../lib/prisma';
import { categoriesCreateInputSchema, categoriesUpdateInputSchema } from '../zod';
import authenticateJWT from '../middleware/auth';
import { userRateLimit } from '../middleware/rateLimiter';
import { cacheMiddleware, clearUserCache, generateCacheKey } from '../lib/cache';
import { z } from 'zod';

const router = Router();
const idParamSchema = z.object({ id: z.string().min(1, 'ID obrigatório') });

// Listar categorias do usuário com cache otimizado
router.get('/', 
  authenticateJWT, 
  userRateLimit,
  cacheMiddleware(600, (req) => generateCacheKey('categories', req.user.id, {
    includeProducts: req.query.includeProducts
  })),
  async (req, res) => {
    if (!req.user) return res.status(401).json({ error: 'Usuário não autenticado' });
    
    try {
      // Include otimizado - só incluir produtos se solicitado
      const includeProducts = req.query.includeProducts === 'true';
      
      const categorias = await prisma.categories.findMany({ 
        where: { user_id: req.user.id },
        include: { 
          products: includeProducts ? {
            select: {
              id: true,
              name: true,
              price: true,
              image: true
            }
          } : false,
          stores: {
            select: {
              id: true,
              name: true,
              slug: true
            }
          }
        },
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
    // Validar se o id é um UUID válido
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(req.params.id)) {
      return res.status(404).json({ error: 'Categoria não encontrada' });
    }
    
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
router.post('/', authenticateJWT, userRateLimit, async (req, res) => {
  const parse = categoriesCreateInputSchema.safeParse(req.body);
  if (!parse.success) {
    const firstError = parse.error.issues[0];
    // Check if it's a missing required field
    if (firstError.code === 'invalid_type' && firstError.path.includes('name')) {
      return res.status(400).json({ error: 'Nome da categoria é obrigatório' });
    }
    return res.status(400).json({ error: firstError.message });
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
    
    // Limpar cache do usuário após criar categoria
    clearUserCache(req.user.id);
    
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
    const firstError = parseBody.error.issues[0];
    return res.status(400).json({ error: firstError.message });
  }
  
  try {
    // Validar se o id é um UUID válido
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(req.params.id)) {
      return res.status(404).json({ error: 'Categoria não encontrada' });
    }
    
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
    // Validar se o id é um UUID válido
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(req.params.id)) {
      return res.status(404).json({ error: 'Categoria não encontrada' });
    }
    
    // Verificar se a categoria pertence ao usuário
    const categoriaExistente = await prisma.categories.findFirst({
      where: { id: req.params.id, user_id: req.user.id }
    });
    
    if (!categoriaExistente) {
      return res.status(404).json({ error: 'Categoria não encontrada' });
    }
    
    // Verificar se a categoria possui produtos
    const produtos = await prisma.products.findFirst({
      where: { category_id: req.params.id }
    });
    
    if (produtos) {
      return res.status(400).json({ error: 'Não é possível deletar categoria que possui produtos' });
    }
    
    await prisma.categories.delete({ where: { id: req.params.id } });
    res.status(200).json({ message: 'Categoria deletada com sucesso' });
  } catch (e) {
    console.error('Erro ao deletar categoria:', e);
    res.status(500).json({ error: 'Erro ao deletar categoria', details: e });
  }
});

// Listar produtos de uma categoria
router.get('/:id/products', authenticateJWT, async (req, res) => {
  if (!req.user) return res.status(401).json({ error: 'Usuário não autenticado' });
  
  const parse = idParamSchema.safeParse(req.params);
  if (!parse.success) {
    return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
  }
  
  try {
    // Validar se o id é um UUID válido
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(req.params.id)) {
      return res.status(404).json({ error: 'Categoria não encontrada' });
    }
    
    // Verificar se a categoria pertence ao usuário
    const categoriaExistente = await prisma.categories.findFirst({
      where: { id: req.params.id, user_id: req.user.id }
    });
    
    if (!categoriaExistente) {
      return res.status(404).json({ error: 'Categoria não encontrada' });
    }
    
    const produtos = await prisma.products.findMany({
      where: { 
        category_id: req.params.id,
        user_id: req.user.id
      },
      orderBy: { name: 'asc' }
    });
    
    res.json(produtos);
  } catch (error) {
    console.error('Erro ao listar produtos da categoria:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

export default router; 