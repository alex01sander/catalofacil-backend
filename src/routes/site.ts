import { Router } from 'express';
import prisma from '../lib/prisma';
import { z } from 'zod';
import authenticateJWT from '../middleware/auth';
const router = Router();

const slugParamSchema = z.object({ slug: z.string().min(1, 'Slug obrigatório') });

// Rota protegida: consulta completa (exemplo, pode ser removida se não quiser mais expor nada)
router.get('/:slug', authenticateJWT, async (req, res) => {
  const parse = slugParamSchema.safeParse(req.params);
  if (!parse.success) {
    return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
  }
  const { slug } = req.params;
  // Aqui você pode customizar o que retorna para o admin
  const loja = await prisma.stores.findUnique({ where: { slug } });
  if (!loja) return res.status(404).json({ error: 'Loja não encontrada' });
  res.json(loja);
});

// Rota pública: só dados públicos da loja
router.get('/public/:slug', async (req, res) => {
  const parse = slugParamSchema.safeParse({ slug: req.params.slug });
  if (!parse.success) {
    return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
  }
  const { slug } = req.params;
  console.log('[DEBUG] Slug recebido:', slug); // LOG
  const loja = await prisma.stores.findUnique({
    where: { slug },
    select: {
      id: true, // Garante que o campo id está presente
      name: true,
      description: true,
      logo_url: true,
      banner_url: true,
      whatsapp_number: true,
      instagram_url: true,
      theme_color: true
    }
  });
  console.log('[DEBUG] Resultado da consulta loja:', loja); // LOG
  if (!loja) return res.status(404).json({ error: 'Loja não encontrada' });
  res.json(loja);
});

// Rota pública: produtos disponíveis para compra
router.get('/public/:slug/products', async (req, res) => {
  const parse = slugParamSchema.safeParse({ slug: req.params.slug });
  if (!parse.success) {
    return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
  }
  const { slug } = req.params;
  // Busca a loja pelo slug
  const loja = await prisma.stores.findUnique({ where: { slug }, select: { id: true } });
  if (!loja) return res.status(404).json({ error: 'Loja não encontrada' });
  // Busca produtos ativos dessa loja
  const produtos = await prisma.products.findMany({
    where: {
      store_id: loja.id,
      is_active: true
    },
    select: {
      id: true,
      name: true,
      description: true,
      price: true,
      image: true,
      images: true,
      // Adicione outros campos públicos se necessário
    }
  });
  res.json(produtos);
});

// Rota pública: categorias disponíveis para compra
router.get('/public/:slug/categories', async (req, res) => {
  const parse = slugParamSchema.safeParse({ slug: req.params.slug });
  if (!parse.success) {
    return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
  }
  const { slug } = req.params;
  // Busca a loja pelo slug
  const loja = await prisma.stores.findUnique({ where: { slug }, select: { id: true } });
  if (!loja) return res.status(404).json({ error: 'Loja não encontrada' });
  // Busca categorias dessa loja
  const categorias = await prisma.categories.findMany({
    where: { store_id: loja.id },
    select: {
      id: true,
      name: true,
      color: true,
      image: true,
      // Adicione outros campos públicos se necessário
    }
  });
  res.json(categorias);
});

export default router; 