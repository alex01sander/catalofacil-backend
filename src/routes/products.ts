// src/routes/products.ts
import { Router } from 'express';
import authenticateJWT from '../middleware/auth';
import { productsCreateInputSchema, productsUpdateInputSchema } from '../zod';
import { z } from 'zod';
import prisma from '../lib/prisma';
import multer from 'multer';
import supabase from '../lib/supabase';

// Adicionar tipagem para req.file
import { Request } from 'express';
import type { Multer } from 'multer';
declare global {
  namespace Express {
    interface Request {
      file?: Multer.File;
    }
  }
}

const router = Router();

const idParamSchema = z.object({ id: z.string().min(1, 'ID obrigatório') });

const upload = multer({ storage: multer.memoryStorage() });

// Criar produto com upload de imagem
router.post('/', authenticateJWT, upload.single('image'), async (req, res) => {
  if (!req.user) return res.status(401).json({ error: 'Usuário não autenticado' });

  try {
    let imageUrl = null;
    if (req.file) {
      // Upload para Supabase
      const fileExt = req.file.originalname.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}.${fileExt}`;
      const { data, error } = await supabase.storage.from('products').upload(fileName, req.file.buffer, {
        contentType: req.file.mimetype
      });
      if (error) {
        return res.status(500).json({ error: 'Erro ao fazer upload da imagem', details: error.message });
      }
      // Monta a URL pública
      imageUrl = `${process.env.SUPABASE_URL}/storage/v1/object/public/products/${fileName}`;
    }

    const product = await prisma.products.create({
      data: {
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock,
        is_active: req.body.isActive,
        user_id: req.user.id,
        category_id: req.body.category || null,
        description: req.body.description || null,
        image: imageUrl,
        images: imageUrl ? [imageUrl] : [],
        store_id: req.body.store_id, // O frontend deve enviar o store_id correto!
        // adicione outros campos obrigatórios aqui se necessário
      }
    });
    res.status(201).json(product);
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    res.status(500).json({ error: 'Erro interno do servidor', details: error });
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
router.get('/:id', authenticateJWT, async (req, res) => {
  const parse = idParamSchema.safeParse(req.params);
  if (!parse.success) {
    return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
  }
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
  const parse = idParamSchema.safeParse(req.params);
  if (!parse.success) {
    return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
  }
  const parseBody = productsUpdateInputSchema.safeParse(req.body);
  if (!parseBody.success) {
    return res.status(400).json({ error: 'Dados inválidos', details: parseBody.error.issues });
  }
  
  try {
    const product = await prisma.products.update({
      where: { id: req.params.id },
      data: parseBody.data
    });
    res.json(product);
  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Deletar produto
router.delete('/:id', authenticateJWT, async (req, res) => {
  const parse = idParamSchema.safeParse(req.params);
  if (!parse.success) {
    return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
  }
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
