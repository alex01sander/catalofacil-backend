import request from 'supertest';
import express from 'express';
import { generateTestToken } from '../utils.spec';

// Mock do Prisma
const mockPrisma = {
  credit_accounts: {
    findMany: jest.fn(),
    findUnique: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
    count: jest.fn()
  },
  credit_transactions: {
    findMany: jest.fn()
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
import creditAccountsRouter from '../../src/routes/creditAccounts';

const app = express();
app.use(express.json());
app.use('/credit-accounts', creditAccountsRouter);

describe('Credit Accounts Routes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /credit-accounts', () => {
    it('should return list of credit accounts', async () => {
      const mockAccounts = [
        {
          id: '1',
          customer_name: 'João Silva',
          customer_phone: '51987654321',
          total_debt: 150.00,
          status: 'active',
          created_at: new Date()
        }
      ];

      mockPrisma.credit_accounts.findMany.mockResolvedValue(mockAccounts);
      mockPrisma.credit_accounts.count.mockResolvedValue(1);

      const response = await request(app)
        .get('/credit-accounts')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data).toHaveLength(1);
      expect(response.body.data[0].customer_name).toBe('João Silva');
    });

    it('should handle database errors', async () => {
      mockPrisma.credit_accounts.findMany.mockRejectedValue(new Error('Database error'));

      const response = await request(app)
        .get('/credit-accounts')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .expect(500);

      expect(response.body.error).toBe('Erro interno do servidor');
    });
  });

  describe('GET /credit-accounts/:id', () => {
    it('should return a specific credit account', async () => {
      const mockAccount = {
        id: '1',
        customer_name: 'João Silva',
        customer_phone: '51987654321',
        total_debt: 150.00,
        status: 'active',
        created_at: new Date()
      };

      mockPrisma.credit_accounts.findUnique.mockResolvedValue(mockAccount);

      const response = await request(app)
        .get('/credit-accounts/1')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.customer_name).toBe('João Silva');
    });

    it('should return 404 for non-existent account', async () => {
      mockPrisma.credit_accounts.findUnique.mockResolvedValue(null);

      const response = await request(app)
        .get('/credit-accounts/999')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .expect(404);

      expect(response.body.error).toBe('Conta de crédito não encontrada');
    });
  });

  describe('POST /credit-accounts', () => {
    it('should create a new credit account', async () => {
      const newAccountData = {
        customer_name: 'Maria Silva',
        customer_phone: '51987654321',
        customer_address: 'Rua Teste, 123',
        total_debt: 0,
        status: 'active'
      };

      const createdAccount = {
        id: '2',
        ...newAccountData,
        user_id: '123e4567-e89b-12d3-a456-426614174000',
        created_at: new Date()
      };

      mockPrisma.credit_accounts.create.mockResolvedValue(createdAccount);

      const response = await request(app)
        .post('/credit-accounts')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .send(newAccountData)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.data.customer_name).toBe('Maria Silva');
      expect(mockPrisma.credit_accounts.create).toHaveBeenCalledWith({
        data: {
          ...newAccountData,
          user_id: '123e4567-e89b-12d3-a456-426614174000'
        }
      });
    });

    it('should return 400 for invalid data', async () => {
      const invalidData = {
        customer_phone: '51987654321'
        // customer_name missing
      };

      const response = await request(app)
        .post('/credit-accounts')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .send(invalidData)
        .expect(400);

      expect(response.body.error).toBe('Dados inválidos');
    });

    it('should return 409 for duplicate customer', async () => {
      const accountData = {
        customer_name: 'João Silva',
        customer_phone: '51987654321'
      };

      mockPrisma.credit_accounts.create.mockRejectedValue({
        code: 'P2002',
        message: 'Unique constraint failed'
      });

      const response = await request(app)
        .post('/credit-accounts')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .send(accountData)
        .expect(409);

      expect(response.body.error).toBe('Cliente já existe');
    });
  });

  describe('PUT /credit-accounts/:id', () => {
    it('should update an existing credit account', async () => {
      const updateData = {
        customer_name: 'João Silva Atualizado',
        customer_phone: '51987654321'
      };

      const updatedAccount = {
        id: '1',
        ...updateData,
        total_debt: 150.00,
        status: 'active',
        updated_at: new Date()
      };

      mockPrisma.credit_accounts.findUnique.mockResolvedValue(updatedAccount);
      mockPrisma.credit_accounts.update.mockResolvedValue(updatedAccount);

      const response = await request(app)
        .put('/credit-accounts/1')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .send(updateData)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.customer_name).toBe('João Silva Atualizado');
    });

    it('should return 404 for non-existent account', async () => {
      mockPrisma.credit_accounts.findUnique.mockResolvedValue(null);

      const response = await request(app)
        .put('/credit-accounts/999')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .send({ customer_name: 'Test' })
        .expect(404);

      expect(response.body.error).toBe('Conta de crédito não encontrada');
    });
  });

  describe('DELETE /credit-accounts/:id', () => {
    it('should delete a credit account without debt', async () => {
      const accountToDelete = {
        id: '1',
        customer_name: 'João Silva',
        total_debt: 0
      };

      mockPrisma.credit_accounts.findUnique.mockResolvedValue(accountToDelete);
      mockPrisma.credit_accounts.delete.mockResolvedValue(accountToDelete);

      const response = await request(app)
        .delete('/credit-accounts/1')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe('Conta de crédito excluída com sucesso');
    });

    it('should return 400 for account with debt', async () => {
      const accountWithDebt = {
        id: '1',
        customer_name: 'João Silva',
        total_debt: 150.00
      };

      mockPrisma.credit_accounts.findUnique.mockResolvedValue(accountWithDebt);

      const response = await request(app)
        .delete('/credit-accounts/1')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .expect(400);

      expect(response.body.error).toBe('Não é possível excluir uma conta com dívida pendente');
    });

    it('should return 404 for non-existent account', async () => {
      mockPrisma.credit_accounts.findUnique.mockResolvedValue(null);

      const response = await request(app)
        .delete('/credit-accounts/999')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .expect(404);

      expect(response.body.error).toBe('Conta de crédito não encontrada');
    });
  });

  describe('GET /credit-accounts/:id/transactions', () => {
    it('should return transactions for a specific account', async () => {
      const mockTransactions = [
        {
          id: '1',
          type: 'debito',
          amount: 150.00,
          description: 'Compra a prazo',
          date: new Date(),
          credit_installments: []
        }
      ];

      mockPrisma.credit_accounts.findUnique.mockResolvedValue({
        id: '1',
        customer_name: 'João Silva'
      });
      mockPrisma.credit_transactions.findMany.mockResolvedValue(mockTransactions);

      const response = await request(app)
        .get('/credit-accounts/1/transactions')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .expect(200);

      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body).toHaveLength(1);
      expect(response.body[0].type).toBe('debito');
    });

    it('should return 404 for non-existent account', async () => {
      mockPrisma.credit_accounts.findUnique.mockResolvedValue(null);

      const response = await request(app)
        .get('/credit-accounts/999/transactions')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .expect(404);

      expect(response.body.error).toBe('Conta de crédito não encontrada');
    });
  });
}); 