import { Router } from 'express';
import prisma from '../lib/prisma';
import { salesCreateInputSchema, salesUpdateInputSchema } from '../zod';
import authenticateJWT from '../middleware/auth';
import { userRateLimit } from '../middleware/rateLimiter';
import { paginationMiddleware, paginationHeaders, createPaginatedResponse, getPrismaQuery } from '../middleware/pagination';
import { cacheMiddleware, clearUserCache, generateCacheKey } from '../lib/cache';
import { z } from 'zod';

const router = Router();
const idParamSchema = z.object({ id: z.string().min(1, 'ID obrigatório') });

// Listar vendas do usuário com cache e paginação
router.get('/', 
  authenticateJWT, 
  userRateLimit,
  paginationMiddleware,
  paginationHeaders,
  cacheMiddleware(240, (req) => generateCacheKey('sales', req.user.id, {
    page: req.pagination?.page,
    limit: req.pagination?.limit,
    sortBy: req.pagination?.sortBy,
    sortOrder: req.pagination?.sortOrder,
    status: req.query.status,
    dateFrom: req.query.dateFrom,
    dateTo: req.query.dateTo
  })),
  async (req, res) => {
    if (!req.user) return res.status(401).json({ error: 'Usuário não autenticado' });
    
    try {
      // Construir filtros
      const where: any = { user_id: req.user.id };
      
      // Filtro por status
      if (req.query.status) {
        where.status = req.query.status as string;
      }
      
      // Filtro por data
      if (req.query.dateFrom || req.query.dateTo) {
        where.sale_date = {};
        if (req.query.dateFrom) {
          where.sale_date.gte = new Date(req.query.dateFrom as string);
        }
        if (req.query.dateTo) {
          where.sale_date.lte = new Date(req.query.dateTo as string);
        }
      }
      
      // Query com paginação
      const paginationQuery = getPrismaQuery(req.pagination!, 'sale_date');
      
      // Buscar vendas e contagem total em paralelo
      const [vendas, totalCount] = await Promise.all([
        prisma.sales.findMany({
          where,
          include: { 
            stores: {
              select: {
                id: true,
                name: true,
                slug: true
              }
            }
          },
          ...paginationQuery
        }),
        prisma.sales.count({ where })
      ]);
      
      const response = createPaginatedResponse(vendas, totalCount, req.pagination!);
      res.json(response);
    } catch (error) {
      console.error('Erro ao listar vendas:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// Buscar venda por ID
router.get('/:id', authenticateJWT, async (req, res) => {
  const parse = idParamSchema.safeParse(req.params);
  if (!parse.success) {
    return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
  }
  try {
    const venda = await prisma.sales.findUnique({
      where: { id: req.params.id },
      include: { stores: true }
    });
    if (!venda) return res.status(404).json({ error: 'Venda não encontrada' });
    res.json(venda);
  } catch (error) {
    console.error('Erro ao buscar venda:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Criar venda
router.post('/', authenticateJWT, userRateLimit, async (req, res) => {
  if (!req.user) return res.status(401).json({ error: 'Usuário não autenticado' });
  
  console.log('📝 [Sales] Payload recebido:', JSON.stringify(req.body, null, 2));
  
  // Extrair product_id se existir (será removido antes da validação)
  const { product_id, ...saleDataWithoutProductId } = req.body;
  
  const parse = salesCreateInputSchema.safeParse(saleDataWithoutProductId);
  if (!parse.success) {
    console.error('❌ [Sales] Erro de validação:', parse.error.issues);
    return res.status(400).json({ error: 'Dados inválidos', details: parse.error.issues });
  }
  
  try {
    // Preparar dados para o Prisma
    const salesData = {
      ...parse.data,
      user_id: req.user.id,
      // Converter valores string para número se necessário
      unit_price: String(parse.data.unit_price),
      total_price: String(parse.data.total_price),
      // Garantir que sale_date seja uma Date
      sale_date: parse.data.sale_date instanceof Date ? parse.data.sale_date : new Date(parse.data.sale_date)
    };
    
    console.log('💾 [Sales] Dados para o Prisma:', JSON.stringify(salesData, null, 2));
    
    const nova = await prisma.sales.create({ data: salesData });
    
    // Se product_id foi fornecido, descontar do estoque
    if (product_id) {
      console.log('📦 [Sales] Descontando estoque do produto:', product_id);
      try {
        await prisma.products.update({
          where: { id: product_id },
          data: { stock: { decrement: parse.data.quantity } }
        });
        console.log('✅ [Sales] Estoque atualizado com sucesso');
      } catch (stockError) {
        console.warn('⚠️ [Sales] Erro ao atualizar estoque (venda já foi criada):', stockError);
      }
    }
    
    // Limpar cache do usuário após criar venda
    clearUserCache(req.user.id);
    
    console.log('✅ [Sales] Venda criada com sucesso:', nova.id);
    res.status(201).json(nova);
  } catch (error) {
    console.error('❌ [Sales] Erro ao criar venda:', error);
    res.status(500).json({ 
      error: 'Erro interno do servidor', 
      details: error instanceof Error ? error.message : 'Erro desconhecido' 
    });
  }
});

// Atualizar venda
router.put('/:id', authenticateJWT, async (req, res) => {
  const parse = idParamSchema.safeParse(req.params);
  if (!parse.success) {
    return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
  }
  const parseBody = salesUpdateInputSchema.safeParse(req.body);
  if (!parseBody.success) {
    return res.status(400).json({ error: 'Dados inválidos', details: parseBody.error.issues });
  }
  
  try {
    const atualizada = await prisma.sales.update({
      where: { id: req.params.id },
      data: parseBody.data,
    });
    res.json(atualizada);
  } catch (error) {
    console.error('Erro ao atualizar venda:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Deletar venda
router.delete('/:id', authenticateJWT, async (req, res) => {
  const parse = idParamSchema.safeParse(req.params);
  if (!parse.success) {
    return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
  }
  try {
    await prisma.sales.delete({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (error) {
    console.error('Erro ao deletar venda:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

export default router; 