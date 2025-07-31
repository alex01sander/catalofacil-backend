import request from 'supertest';
import express from 'express';
import { generateTestToken } from '../utils.spec';

// Mock do Prisma
const mockPrisma = {
  cash_flow: {
    findMany: jest.fn(),
    findUnique: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
    count: jest.fn()
  }
};

jest.mock('../../src/lib/prisma', () => ({
  __esModule: true,
  default: mockPrisma
}));

// Mock dos middlewares
jest.mock('../../src/middleware/auth', () => ({
  __esModule: true,
  default: (req: any, res: any, next: any) => {
    req.user = { id: '123e4567-e89b-12d3-a456-426614174000', email: 'test@example.com' };
    next();
  }
}));

jest.mock('../../src/middleware/rateLimiter', () => ({
  userRateLimit: (req: any, res: any, next: any) => next()
}));

jest.mock('../../src/middleware/pagination', () => ({
  paginationMiddleware: (req: any, res: any, next: any) => next(),
  paginationHeaders: (req: any, res: any, next: any) => next(),
  createPaginatedResponse: jest.fn((data, total, pagination) => ({
    data,
    pagination: {
      currentPage: pagination.page,
      totalPages: Math.ceil(total / pagination.limit),
      totalItems: total,
      itemsPerPage: pagination.limit,
      hasNextPage: pagination.page < Math.ceil(total / pagination.limit),
      hasPrevPage: pagination.page > 1
    }
  }))
}));

// Mock do cache
jest.mock('../../src/lib/cache', () => ({
  __esModule: true,
  default: {
    get: jest.fn(),
    set: jest.fn(),
    del: jest.fn()
  },
  cacheMiddleware: jest.fn(() => (req: any, res: any, next: any) => next()),
  generateCacheKey: jest.fn(() => 'test-cache-key')
}));

// Importar as rotas
import cashFlowRouter from '../../src/routes/cashFlow';

const app = express();
app.use(express.json());
app.use('/cash-flow', cashFlowRouter);

describe('Cash Flow Routes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /cash-flow', () => {
    it('should return list of cash flow entries', async () => {
      const mockEntries = [
        {
          id: '1',
          type: 'entrada',
          amount: 150.00,
          description: 'Venda de produtos',
          category: 'vendas',
          date: new Date(),
          payment_method: 'dinheiro'
        }
      ];

      mockPrisma.cash_flow.findMany.mockResolvedValue(mockEntries);
      mockPrisma.cash_flow.count.mockResolvedValue(1);

      const response = await request(app)
        .get('/cash-flow')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data).toHaveLength(1);
      expect(response.body.data[0].type).toBe('entrada');
    });

    it('should handle database errors', async () => {
      mockPrisma.cash_flow.findMany.mockRejectedValue(new Error('Database error'));

      const response = await request(app)
        .get('/cash-flow')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .expect(500);

      expect(response.body.error).toBe('Erro interno do servidor');
    });
  });

  describe('GET /cash-flow/:id', () => {
    it('should return a specific cash flow entry', async () => {
      const mockEntry = {
        id: '1',
        type: 'entrada',
        amount: 150.00,
        description: 'Venda de produtos',
        category: 'vendas',
        date: new Date(),
        payment_method: 'dinheiro'
      };

      mockPrisma.cash_flow.findUnique.mockResolvedValue(mockEntry);

      const response = await request(app)
        .get('/cash-flow/1')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.type).toBe('entrada');
    });

    it('should return 404 for non-existent entry', async () => {
      mockPrisma.cash_flow.findUnique.mockResolvedValue(null);

      const response = await request(app)
        .get('/cash-flow/999')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .expect(404);

      expect(response.body.error).toBe('Entrada não encontrada');
    });
  });

  describe('POST /cash-flow', () => {
    it('should create a new income entry', async () => {
      const entryData = {
        type: 'income', // Frontend sends 'income', should be converted to 'entrada'
        amount: 150.00,
        description: 'Venda de produtos',
        category: 'vendas',
        date: '2025-01-15',
        payment_method: 'dinheiro'
      };

      const createdEntry = {
        id: '1',
        ...entryData,
        type: 'entrada', // Should be converted
        user_id: '123e4567-e89b-12d3-a456-426614174000',
        created_at: new Date()
      };

      mockPrisma.cash_flow.create.mockResolvedValue(createdEntry);

      const response = await request(app)
        .post('/cash-flow')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .send(entryData)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.data.type).toBe('entrada');
      expect(mockPrisma.cash_flow.create).toHaveBeenCalledWith({
        data: {
          ...entryData,
          type: 'entrada',
          user_id: '123e4567-e89b-12d3-a456-426614174000'
        }
      });
    });

    it('should create a new expense entry', async () => {
      const entryData = {
        type: 'expense', // Frontend sends 'expense', should be converted to 'saida'
        amount: 50.00,
        description: 'Compra de material',
        category: 'compras',
        date: '2025-01-15',
        payment_method: 'dinheiro'
      };

      const createdEntry = {
        id: '1',
        ...entryData,
        type: 'saida', // Should be converted
        user_id: '123e4567-e89b-12d3-a456-426614174000',
        created_at: new Date()
      };

      mockPrisma.cash_flow.create.mockResolvedValue(createdEntry);

      const response = await request(app)
        .post('/cash-flow')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .send(entryData)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.data.type).toBe('saida');
    });

    it('should accept string amounts and convert to number', async () => {
      const entryData = {
        type: 'income',
        amount: '150.75', // String amount
        description: 'Venda',
        category: 'vendas',
        date: '2025-01-15'
      };

      const createdEntry = {
        id: '1',
        ...entryData,
        type: 'entrada',
        amount: 150.75, // Should be converted to number
        user_id: '123e4567-e89b-12d3-a456-426614174000',
        created_at: new Date()
      };

      mockPrisma.cash_flow.create.mockResolvedValue(createdEntry);

      const response = await request(app)
        .post('/cash-flow')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .send(entryData)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(typeof response.body.data.amount).toBe('number');
      expect(response.body.data.amount).toBe(150.75);
    });

    it('should return 400 for invalid data', async () => {
      const invalidData = {
        amount: 150.00
        // type missing
      };

      const response = await request(app)
        .post('/cash-flow')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .send(invalidData)
        .expect(400);

      expect(response.body.error).toBe('Dados inválidos');
    });

    it('should return 400 for invalid type', async () => {
      const invalidData = {
        type: 'invalid',
        amount: 150.00,
        description: 'Test',
        category: 'test'
      };

      const response = await request(app)
        .post('/cash-flow')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .send(invalidData)
        .expect(400);

      expect(response.body.error).toBe('Dados inválidos');
    });
  });

  describe('PUT /cash-flow/:id', () => {
    it('should update an existing cash flow entry', async () => {
      const updateData = {
        amount: 200.00,
        description: 'Venda atualizada'
      };

      const existingEntry = {
        id: '1',
        type: 'entrada',
        amount: 150.00,
        description: 'Venda original',
        category: 'vendas',
        user_id: '123e4567-e89b-12d3-a456-426614174000'
      };

      const updatedEntry = {
        ...existingEntry,
        ...updateData
      };

      mockPrisma.cash_flow.findUnique.mockResolvedValue(existingEntry);
      mockPrisma.cash_flow.update.mockResolvedValue(updatedEntry);

      const response = await request(app)
        .put('/cash-flow/1')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .send(updateData)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.amount).toBe(200.00);
    });

    it('should return 404 for non-existent entry', async () => {
      mockPrisma.cash_flow.findUnique.mockResolvedValue(null);

      const response = await request(app)
        .put('/cash-flow/999')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .send({ amount: 200.00 })
        .expect(404);

      expect(response.body.error).toBe('Entrada não encontrada');
    });

    it('should return 403 for unauthorized access', async () => {
      const existingEntry = {
        id: '1',
        type: 'entrada',
        amount: 150.00,
        description: 'Venda original',
        category: 'vendas',
        user_id: 'different-user-id' // Different user
      };

      mockPrisma.cash_flow.findUnique.mockResolvedValue(existingEntry);

      const response = await request(app)
        .put('/cash-flow/1')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .send({ amount: 200.00 })
        .expect(403);

      expect(response.body.error).toBe('Acesso negado');
    });
  });

  describe('DELETE /cash-flow/:id', () => {
    it('should delete an existing cash flow entry', async () => {
      const entryToDelete = {
        id: '1',
        type: 'entrada',
        amount: 150.00,
        description: 'Venda',
        category: 'vendas',
        user_id: '123e4567-e89b-12d3-a456-426614174000'
      };

      mockPrisma.cash_flow.findUnique.mockResolvedValue(entryToDelete);
      mockPrisma.cash_flow.delete.mockResolvedValue(entryToDelete);

      const response = await request(app)
        .delete('/cash-flow/1')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe('Entrada excluída com sucesso');
    });

    it('should return 404 for non-existent entry', async () => {
      mockPrisma.cash_flow.findUnique.mockResolvedValue(null);

      const response = await request(app)
        .delete('/cash-flow/999')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .expect(404);

      expect(response.body.error).toBe('Entrada não encontrada');
    });

    it('should return 403 for unauthorized access', async () => {
      const entryToDelete = {
        id: '1',
        type: 'entrada',
        amount: 150.00,
        description: 'Venda',
        category: 'vendas',
        user_id: 'different-user-id' // Different user
      };

      mockPrisma.cash_flow.findUnique.mockResolvedValue(entryToDelete);

      const response = await request(app)
        .delete('/cash-flow/1')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .expect(403);

      expect(response.body.error).toBe('Acesso negado');
    });
  });
}); 