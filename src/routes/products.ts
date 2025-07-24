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

// Configuração do multer para upload
const upload = multer({ 
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limite
  },
  fileFilter: (req, file, cb) => {
    // Verificar se é uma imagem
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Apenas arquivos de imagem são permitidos'));
    }
  }
});

// Validar configuração do Supabase
if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_KEY) {
  console.error('⚠️ AVISO: Variáveis SUPABASE_URL ou SUPABASE_SERVICE_KEY não configuradas');
}

// Criar produto com upload de imagem
router.post('/', authenticateJWT, upload.single('image'), async (req, res) => {
  if (!req.user) return res.status(401).json({ error: 'Usuário não autenticado' });

  try {
    let imageUrl = null;
    
    console.log('=== DEBUG UPLOAD IMAGEM ===');
    console.log('Arquivo recebido via multer:', !!req.file);
    console.log('Campo image no body:', !!req.body.image);
    console.log('Campo images no body:', req.body.images);
    console.log('Tipo do campo images:', typeof req.body.images);
    
    // Se não há arquivo no multer mas há URL no body, usar essa URL
    if (!req.file && req.body.image) {
      console.log('Usando imagem do body (já enviada):', req.body.image);
      imageUrl = req.body.image;
    } else if (!req.file && req.body.images && Array.isArray(req.body.images) && req.body.images.length > 0) {
      console.log('Usando primeira imagem do array images:', req.body.images[0]);
      imageUrl = req.body.images[0];
    }
    
    if (req.file) {
      console.log('Detalhes do arquivo:', {
        originalname: req.file.originalname,
        mimetype: req.file.mimetype,
        size: req.file.size
      });
      
      // Verificar configuração Supabase
      if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_KEY) {
        console.error('ERRO: Variáveis Supabase não configuradas');
        return res.status(500).json({ 
          error: 'Configuração de upload não encontrada',
          details: {
            hasUrl: !!process.env.SUPABASE_URL,
            hasKey: !!process.env.SUPABASE_SERVICE_KEY
          }
        });
      }
      
      // Upload para Supabase
      const fileExt = req.file.originalname.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}.${fileExt}`;
      
      console.log('Fazendo upload do arquivo:', fileName);
      console.log('Bucket: products');
      
      const { data, error } = await supabase.storage
        .from('products')
        .upload(fileName, req.file.buffer, {
          contentType: req.file.mimetype,
          upsert: false
        });
        
      if (error) {
        console.error('Erro no upload Supabase:', error);
        return res.status(500).json({ 
          error: 'Erro ao fazer upload da imagem', 
          details: error.message,
          supabaseInfo: {
            bucket: 'products',
            fileName: fileName,
            fileSize: req.file.size
          }
        });
      }
      
      console.log('Upload bem-sucedido:', data);
      
      // Gerar URL pública
      const { data: urlData } = supabase.storage
        .from('products')
        .getPublicUrl(fileName);
        
      imageUrl = urlData.publicUrl;
      console.log('URL da imagem gerada:', imageUrl);
      
      // Verificar se a URL está válida
      if (!imageUrl || !imageUrl.startsWith('http')) {
        console.error('URL inválida gerada:', imageUrl);
        return res.status(500).json({ 
          error: 'URL de imagem inválida',
          details: { generatedUrl: imageUrl }
        });
      }
    } else {
      console.log('Nenhum arquivo de imagem enviado');
    }

    console.log('Dados recebidos para criação:', req.body);
    console.log('ImageUrl final:', imageUrl);
    
    // Mapear categoria corretamente
    let categoryId = null;
    if (req.body.category_id) categoryId = req.body.category_id;
    else if (req.body.category) categoryId = req.body.category;
    else if (req.body.categoryId) categoryId = req.body.categoryId;
    
    console.log('Categoria mapeada:', {
      original_category: req.body.category,
      original_category_id: req.body.category_id,
      original_categoryId: req.body.categoryId,
      mapped_categoryId: categoryId
    });
    
    const product = await prisma.products.create({
      data: {
        name: req.body.name,
        price: parseFloat(req.body.price) || 0,
        stock: parseInt(req.body.stock) || 0,
        is_active: req.body.isActive !== undefined ? req.body.isActive : true,
        user_id: req.user.id,
        category_id: categoryId,
        description: req.body.description || null,
        image: imageUrl,
        images: imageUrl ? [imageUrl] : [],
        store_id: req.body.store_id || null,
        created_at: new Date(),
        updated_at: new Date()
      },
      include: {
        categories: {
          select: {
            id: true,
            name: true,
            color: true
          }
        }
      }
    });
    
    console.log('Produto criado com sucesso:');
    console.log('- ID:', product.id);
    console.log('- Nome:', product.name);
    console.log('- Preço:', product.price);
    console.log('- Categoria ID:', product.category_id);
    console.log('- Imagem URL:', product.image);
    console.log('- Images Array:', product.images);
    console.log('- Store ID:', product.store_id);
    
    res.status(201).json(product);
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    res.status(500).json({ error: 'Erro interno do servidor', details: error });
  }
});

// Listar produtos do usuário
router.get('/', authenticateJWT, async (req, res) => {
  if (!req.user) return res.status(401).json({ error: 'Usuário não autenticado' });
  
  try {
    const products = await prisma.products.findMany({
      where: { 
        user_id: req.user.id 
      },
      include: {
        categories: {
          select: {
            id: true,
            name: true,
            color: true
          }
        }
      },
      orderBy: {
        created_at: 'desc'
      }
    });
    res.json(products);
  } catch (error) {
    console.error('Erro ao listar produtos:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Buscar produto por ID
router.get('/:id', authenticateJWT, async (req, res) => {
  if (!req.user) return res.status(401).json({ error: 'Usuário não autenticado' });
  
  const parse = idParamSchema.safeParse(req.params);
  if (!parse.success) {
    return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
  }
  
  try {
    const product = await prisma.products.findUnique({
      where: { id: req.params.id },
      include: {
        categories: {
          select: {
            id: true,
            name: true,
            color: true
          }
        }
      }
    });
    
    if (!product) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    
    // Verificar se o produto pertence ao usuário
    if (product.user_id !== req.user.id) {
      return res.status(403).json({ error: 'Produto não pertence ao usuário' });
    }
    
    res.json(product);
  } catch (error) {
    console.error('Erro ao buscar produto:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Atualizar produto
router.put('/:id', authenticateJWT, async (req, res) => {
  if (!req.user) return res.status(401).json({ error: 'Usuário não autenticado' });
  
  const parse = idParamSchema.safeParse(req.params);
  if (!parse.success) {
    return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
  }
  
  try {
    // Verifica se o produto pertence ao usuário
    const existingProduct = await prisma.products.findUnique({
      where: { id: req.params.id },
      select: { user_id: true }
    });
    
    if (!existingProduct) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    
    if (existingProduct.user_id !== req.user.id) {
      return res.status(403).json({ error: 'Produto não pertence ao usuário' });
    }
    
    // Prepara os dados para atualização com mapeamento correto
    const updateData: any = {
      updated_at: new Date()
    };
    
    // Mapear todos os campos possíveis do frontend
    if (req.body.name !== undefined) updateData.name = req.body.name;
    if (req.body.price !== undefined) updateData.price = parseFloat(req.body.price);
    if (req.body.stock !== undefined) updateData.stock = parseInt(req.body.stock);
    if (req.body.description !== undefined) updateData.description = req.body.description;
    
    // Categoria pode vir como 'category', 'category_id' ou 'categoryId'
    if (req.body.category !== undefined) updateData.category_id = req.body.category || null;
    if (req.body.category_id !== undefined) updateData.category_id = req.body.category_id || null;
    if (req.body.categoryId !== undefined) updateData.category_id = req.body.categoryId || null;
    
    // Status ativo pode vir como 'isActive' ou 'is_active'
    if (req.body.isActive !== undefined) updateData.is_active = req.body.isActive;
    if (req.body.is_active !== undefined) updateData.is_active = req.body.is_active;
    
    // Imagens
    if (req.body.image !== undefined) updateData.image = req.body.image;
    if (req.body.images !== undefined) updateData.images = req.body.images;
    
    console.log('Dados recebidos para atualização:', req.body);
    console.log('Dados que serão atualizados:', updateData);
    
    const product = await prisma.products.update({
      where: { id: req.params.id },
      data: updateData,
      include: {
        categories: {
          select: {
            id: true,
            name: true,
            color: true
          }
        }
      }
    });
    
    console.log('Produto atualizado:', product);
    res.json(product);
  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
    res.status(500).json({ error: 'Erro interno do servidor', details: error });
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

// Rota para testar upload de imagem isoladamente
router.post('/test-upload', authenticateJWT, upload.single('image'), async (req, res) => {
  if (!req.user) return res.status(401).json({ error: 'Usuário não autenticado' });

  try {
    if (!req.file) {
      return res.status(400).json({ error: 'Nenhuma imagem enviada' });
    }

    console.log('=== TESTE DE UPLOAD ===');
    console.log('Arquivo recebido:', {
      originalname: req.file.originalname,
      mimetype: req.file.mimetype,
      size: req.file.size
    });

    // Verificar configuração Supabase
    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_KEY) {
      return res.status(500).json({ 
        error: 'Configuração Supabase não encontrada',
        details: {
          hasUrl: !!process.env.SUPABASE_URL,
          hasKey: !!process.env.SUPABASE_SERVICE_KEY
        }
      });
    }

    const fileExt = req.file.originalname.split('.').pop();
    const fileName = `test-${Date.now()}-${Math.random().toString(36).substring(2, 8)}.${fileExt}`;
    
    console.log('Fazendo upload:', fileName);
    
    const { data, error } = await supabase.storage
      .from('products')
      .upload(fileName, req.file.buffer, {
        contentType: req.file.mimetype,
        upsert: false
      });
      
    if (error) {
      console.error('Erro no upload:', error);
      return res.status(500).json({ 
        error: 'Erro ao fazer upload', 
        details: error,
        supabaseConfig: {
          url: process.env.SUPABASE_URL?.substring(0, 20) + '...',
          hasKey: !!process.env.SUPABASE_SERVICE_KEY
        }
      });
    }
    
    // Gerar URL pública
    const { data: urlData } = supabase.storage
      .from('products')
      .getPublicUrl(fileName);
      
    console.log('Upload bem-sucedido:', {
      path: data.path,
      publicUrl: urlData.publicUrl
    });
      
    res.json({
      success: true,
      fileName: fileName,
      path: data.path,
      publicUrl: urlData.publicUrl,
      uploadData: data
    });
  } catch (error: any) {
    console.error('Erro no teste de upload:', error);
    res.status(500).json({ 
      error: 'Erro interno no teste de upload', 
      details: error.message 
    });
  }
});

export default router;
