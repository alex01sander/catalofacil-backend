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
      
      // Converter valores decimais para números
      const vendasComValoresNumericos = vendas.map(venda => ({
        ...venda,
        unit_price: parseFloat(venda.unit_price.toString()),
        total_price: parseFloat(venda.total_price.toString())
      }));
      
      const response = createPaginatedResponse(vendasComValoresNumericos, totalCount, req.pagination!);
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
      unit_price: Number(parse.data.unit_price),
      total_price: Number(parse.data.total_price),
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

// Rota específica para registrar venda de produto (integração com fluxo de caixa)
router.post('/product-sale', authenticateJWT, userRateLimit, async (req, res) => {
  if (!req.user) return res.status(401).json({ error: 'Usuário não autenticado' });
  
  console.log('🛒 [ProductSale] Payload recebido:', JSON.stringify(req.body, null, 2));
  
  try {
    // Validar dados obrigatórios
    const { product_id, quantity, unit_price, payment_method = 'dinheiro', sale_date } = req.body;
    
    if (!product_id || !quantity || !unit_price) {
      return res.status(400).json({ 
        error: 'Dados obrigatórios faltando', 
        required: ['product_id', 'quantity', 'unit_price'],
        received: { product_id, quantity, unit_price }
      });
    }
    
    // Buscar o produto para obter informações
    const produto = await prisma.products.findUnique({
      where: { id: product_id },
      select: { 
        id: true, 
        name: true, 
        price: true, 
        stock: true, 
        user_id: true,
        store_id: true
      }
    });
    
    if (!produto) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    
    // Verificar se o produto pertence ao usuário
    if (produto.user_id !== req.user.id) {
      return res.status(403).json({ error: 'Produto não pertence ao usuário' });
    }
    
    // Verificar estoque
    if (produto.stock < quantity) {
      return res.status(400).json({ 
        error: 'Estoque insuficiente', 
        available: produto.stock, 
        requested: quantity 
      });
    }
    
    const total_price = parseFloat(unit_price) * quantity;
    const data_venda = sale_date ? new Date(sale_date) : new Date();
    
    console.log('📊 [ProductSale] Dados calculados:', {
      product_name: produto.name,
      quantity,
      unit_price: parseFloat(unit_price),
      total_price,
      stock_before: produto.stock,
      stock_after: produto.stock - quantity
    });
    
    // Usar transação para garantir consistência
    const resultado = await prisma.$transaction(async (tx) => {
      // 1. Criar registro de venda
      const venda = await tx.sales.create({
        data: {
          user_id: req.user!.id,
          product_name: produto.name,
          quantity: quantity,
          unit_price: Number(unit_price),
          total_price: Number(total_price),
          sale_date: data_venda,
          status: 'completed',
          store_id: produto.store_id
        }
      });
      
      console.log('✅ [ProductSale] Venda criada:', venda.id);
      
      // 2. Atualizar estoque do produto
      await tx.products.update({
        where: { id: product_id },
        data: { stock: { decrement: quantity } }
      });
      
      console.log('✅ [ProductSale] Estoque atualizado');
      
      // 3. Registrar entrada no fluxo de caixa
      const fluxo = await tx.cash_flow.create({
        data: {
          user_id: req.user!.id,
          store_id: produto.store_id,
          type: 'entrada',
          category: 'vendas',
          description: `Venda - ${produto.name} (${quantity}x)`,
          amount: total_price,
          date: data_venda,
          payment_method: payment_method
        }
      });
      
      console.log('✅ [ProductSale] Fluxo de caixa registrado:', fluxo.id);
      
      return { venda, fluxo };
    });
    
    // Limpar cache do usuário
    clearUserCache(req.user.id);
    
    console.log('🎉 [ProductSale] Venda completa registrada com sucesso!');
    
    res.status(201).json({
      success: true,
      message: 'Venda registrada com sucesso',
      venda: resultado.venda,
      fluxo: resultado.fluxo,
      produto: {
        id: produto.id,
        name: produto.name,
        novo_estoque: produto.stock - quantity
      }
    });
    
  } catch (error) {
    console.error('❌ [ProductSale] Erro ao registrar venda:', error);
    res.status(500).json({ 
      error: 'Erro interno do servidor', 
      details: error instanceof Error ? error.message : 'Erro desconhecido' 
    });
  }
});

export default router; 