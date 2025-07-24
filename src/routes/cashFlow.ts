import { Router } from 'express';
import prisma from '../lib/prisma';
import authenticateJWT from '../middleware/auth';
import { userRateLimit } from '../middleware/rateLimiter';
import { paginationMiddleware, paginationHeaders, createPaginatedResponse, getPrismaQuery } from '../middleware/pagination';
import { cacheMiddleware, clearUserCache, generateCacheKey } from '../lib/cache';

const router = Router();
// Listar fluxos de caixa do usuário com cache e paginação
router.get('/', 
  authenticateJWT, 
  userRateLimit,
  paginationMiddleware,
  paginationHeaders,
  cacheMiddleware(300, (req) => generateCacheKey('cashflow', req.user.id, {
    page: req.pagination?.page,
    limit: req.pagination?.limit,
    type: req.query.type,
    category: req.query.category,
    dateFrom: req.query.dateFrom,
    dateTo: req.query.dateTo
  })),
  async (req, res) => {
    if (!req.user) return res.status(401).json({ error: 'Usuário não autenticado' });
    
    try {
      // Construir filtros
      const where: any = { user_id: req.user.id };
      
      // Filtro por tipo (entrada/saída)
      if (req.query.type) {
        where.type = req.query.type as string;
      }
      
      // Filtro por categoria
      if (req.query.category) {
        where.category = req.query.category as string;
      }
      
      // Filtro por data
      if (req.query.dateFrom || req.query.dateTo) {
        where.date = {};
        if (req.query.dateFrom) {
          where.date.gte = new Date(req.query.dateFrom as string);
        }
        if (req.query.dateTo) {
          where.date.lte = new Date(req.query.dateTo as string);
        }
      }
      
      // Query com paginação
      const paginationQuery = getPrismaQuery(req.pagination!, 'date');
      
      // Buscar fluxos e contagem total em paralelo
      const [fluxos, totalCount] = await Promise.all([
        prisma.cash_flow.findMany({
          where,
          ...paginationQuery
        }),
        prisma.cash_flow.count({ where })
      ]);
      
      const response = createPaginatedResponse(fluxos, totalCount, req.pagination!);
      res.json(response);
    } catch (error) {
      console.error('Erro ao listar fluxo de caixa:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// Buscar fluxo de caixa por ID
router.get('/:id', async (req, res) => {
  const fluxo = await prisma.cash_flow.findUnique({ where: { id: req.params.id } });
  if (!fluxo) return res.status(404).json({ error: 'Fluxo de caixa não encontrado' });
  res.json(fluxo);
});

// Criar fluxo de caixa
router.post('/', async (req, res) => {
  try {
    const novo = await prisma.cash_flow.create({ data: req.body });
    res.status(201).json(novo);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao criar fluxo de caixa', details: e });
  }
});

// Atualizar fluxo de caixa
router.put('/:id', async (req, res) => {
  try {
    const atualizado = await prisma.cash_flow.update({
      where: { id: req.params.id },
      data: req.body,
    });
    res.json(atualizado);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao atualizar fluxo de caixa', details: e });
  }
});

// Deletar fluxo de caixa
router.delete('/:id', async (req, res) => {
  try {
    await prisma.cash_flow.delete({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (e) {
    res.status(400).json({ error: 'Erro ao deletar fluxo de caixa', details: e });
  }
});

export default router; 