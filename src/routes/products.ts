// src/routes/products.ts
import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import authenticateJWT from '../middleware/auth';
import { productsCreateInputSchema, productsUpdateInputSchema } from '../zod';

const prisma = new PrismaClient();
const router = Router();

// Criar produto
router.post('/', authenticateJWT, async (req, res) => {
  const parse = productsCreateInputSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({ error: 'Dados inválidos', details: parse.error.issues });
  }
  
  try {
    const product = await prisma.products.create({
      data: parse.data
    });
    res.status(201).json(product);
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Listar produtos
router.get('/', authenticateJWT, async (req, res) => {
  try {
    const products = await prisma.products.findMany({
      where: { is_active: true }
    });
    res.json(products);
  } catch (error) {
    console.error('Erro ao listar produtos:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Buscar produto por ID
router.get('/:id', async (req, res) => {
  try {
    const product = await prisma.products.findUnique({
      where: { id: req.params.id }
    });
    
    if (!product) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    
    res.json(product);
  } catch (error) {
    console.error('Erro ao buscar produto:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Atualizar produto
router.put('/:id', authenticateJWT, async (req, res) => {
  const parse = productsUpdateInputSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({ error: 'Dados inválidos', details: parse.error.issues });
  }
  
  try {
    const product = await prisma.products.update({
      where: { id: req.params.id },
      data: parse.data
    });
    res.json(product);
  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Deletar produto
router.delete('/:id', authenticateJWT, async (req, res) => {
  try {
    await prisma.products.delete({
      where: { id: req.params.id }
    });
    res.status(204).send();
  } catch (error) {
    console.error('Erro ao deletar produto:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

export default router;
