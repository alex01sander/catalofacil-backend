import request from 'supertest';
import express from 'express';
import { generateTestToken } from '../utils.spec';

// Mock do Prisma
const mockPrisma = {
  credit_transactions: {
    findMany: jest.fn(),
    findUnique: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
    count: jest.fn()
  },
  credit_accounts: {
    findUnique: jest.fn(),
    update: jest.fn(),
    create: jest.fn()
  },
  credit_installments: {
    create: jest.fn(),
    findMany: jest.fn()
  },
  $transaction: jest.fn()
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
import creditTransactionsRouter from '../../src/routes/creditTransactions';

const app = express();
app.use(express.json());
app.use('/credit-transactions', creditTransactionsRouter);

describe('Credit Transactions Routes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /credit-transactions', () => {
    it('should return list of credit transactions', async () => {
      const mockTransactions = [
        {
          id: '1',
          type: 'debito',
          amount: 150.00,
          description: 'Compra a prazo',
          date: new Date(),
          credit_account: {
            customer_name: 'João Silva'
          }
        }
      ];

      mockPrisma.credit_transactions.findMany.mockResolvedValue(mockTransactions);
      mockPrisma.credit_transactions.count.mockResolvedValue(1);

      const response = await request(app)
        .get('/credit-transactions')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data).toHaveLength(1);
      expect(response.body.data[0].type).toBe('debito');
    });
  });

  describe('GET /credit-transactions/:id', () => {
    it('should return a specific credit transaction', async () => {
      const mockTransaction = {
        id: '1',
        type: 'debito',
        amount: 150.00,
        description: 'Compra a prazo',
        date: new Date(),
        credit_account: {
          customer_name: 'João Silva'
        },
        credit_installments: []
      };

      mockPrisma.credit_transactions.findUnique.mockResolvedValue(mockTransaction);

      const response = await request(app)
        .get('/credit-transactions/1')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.type).toBe('debito');
    });

    it('should return 404 for non-existent transaction', async () => {
      mockPrisma.credit_transactions.findUnique.mockResolvedValue(null);

      const response = await request(app)
        .get('/credit-transactions/999')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .expect(404);

      expect(response.body.error).toBe('Transação não encontrada');
    });
  });

  describe('POST /credit-transactions', () => {
    it('should create a new debit transaction', async () => {
      const transactionData = {
        credit_account_id: '1',
        type: 'debito',
        amount: 150.00,
        description: 'Compra a prazo',
        date: '2025-01-15'
      };

      const createdTransaction = {
        id: '1',
        ...transactionData,
        user_id: '123e4567-e89b-12d3-a456-426614174000',
        created_at: new Date()
      };

      const mockAccount = {
        id: '1',
        total_debt: 0
      };

      mockPrisma.credit_accounts.findUnique.mockResolvedValue(mockAccount);
      mockPrisma.credit_transactions.create.mockResolvedValue(createdTransaction);
      mockPrisma.credit_accounts.update.mockResolvedValue({ ...mockAccount, total_debt: 150.00 });

      const response = await request(app)
        .post('/credit-transactions')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .send(transactionData)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.data.type).toBe('debito');
    });

    it('should create a payment transaction', async () => {
      const transactionData = {
        credit_account_id: '1',
        type: 'payment', // Frontend sends 'payment', should be converted to 'pagamento'
        amount: 50.00,
        description: 'Pagamento parcial',
        date: '2025-01-15'
      };

      const createdTransaction = {
        id: '1',
        ...transactionData,
        type: 'pagamento', // Should be converted
        user_id: '123e4567-e89b-12d3-a456-426614174000',
        created_at: new Date()
      };

      const mockAccount = {
        id: '1',
        total_debt: 150.00
      };

      mockPrisma.credit_accounts.findUnique.mockResolvedValue(mockAccount);
      mockPrisma.credit_transactions.create.mockResolvedValue(createdTransaction);
      mockPrisma.credit_accounts.update.mockResolvedValue({ ...mockAccount, total_debt: 100.00 });

      const response = await request(app)
        .post('/credit-transactions')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .send(transactionData)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.data.type).toBe('pagamento');
    });

    it('should return 400 for invalid data', async () => {
      const invalidData = {
        credit_account_id: '1',
        amount: 150.00
        // type missing
      };

      const response = await request(app)
        .post('/credit-transactions')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .send(invalidData)
        .expect(400);

      expect(response.body.error).toBe('Dados inválidos');
    });

    it('should return 404 for non-existent credit account', async () => {
      const transactionData = {
        credit_account_id: '999',
        type: 'debito',
        amount: 150.00,
        description: 'Test'
      };

      mockPrisma.credit_accounts.findUnique.mockResolvedValue(null);

      const response = await request(app)
        .post('/credit-transactions')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .send(transactionData)
        .expect(404);

      expect(response.body.error).toBe('Conta de crédito não encontrada');
    });
  });

  describe('POST /credit-transactions/debit-with-installments', () => {
    it('should create debit with installments for new customer', async () => {
      const debitData = {
        is_new_customer: true,
        customer_name: 'Maria Silva',
        customer_phone: '51987654321',
        customer_address: 'Rua Teste, 123',
        total_amount: 300.00,
        description: 'Compra parcelada',
        installments_count: 3,
        frequency: 'mensal',
        first_due_date: '2025-02-15'
      };

      const mockAccount = {
        id: '1',
        customer_name: 'Maria Silva',
        total_debt: 0
      };

      const mockTransaction = {
        id: '1',
        type: 'debito',
        amount: 300.00,
        description: 'Compra parcelada'
      };

      const mockInstallments = [
        { id: '1', installment_number: 1, amount: 100.00, due_date: new Date('2025-02-15') },
        { id: '2', installment_number: 2, amount: 100.00, due_date: new Date('2025-03-15') },
        { id: '3', installment_number: 3, amount: 100.00, due_date: new Date('2025-04-15') }
      ];

      mockPrisma.$transaction.mockImplementation(async (callback) => {
        return await callback(mockPrisma);
      });

      mockPrisma.credit_accounts.create.mockResolvedValue(mockAccount);
      mockPrisma.credit_transactions.create.mockResolvedValue(mockTransaction);
      mockPrisma.credit_installments.create
        .mockResolvedValueOnce(mockInstallments[0])
        .mockResolvedValueOnce(mockInstallments[1])
        .mockResolvedValueOnce(mockInstallments[2]);

      const response = await request(app)
        .post('/credit-transactions/debit-with-installments')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .send(debitData)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.transaction.type).toBe('debito');
      expect(response.body.installments).toHaveLength(3);
    });

    it('should create debit with installments for existing customer', async () => {
      const debitData = {
        is_new_customer: false,
        existing_customer_id: '1',
        total_amount: 200.00,
        description: 'Compra adicional',
        installments_count: 2,
        frequency: 'semanal',
        first_due_date: '2025-02-15'
      };

      const mockAccount = {
        id: '1',
        customer_name: 'João Silva',
        total_debt: 150.00
      };

      const mockTransaction = {
        id: '1',
        type: 'debito',
        amount: 200.00,
        description: 'Compra adicional'
      };

      mockPrisma.$transaction.mockImplementation(async (callback) => {
        return await callback(mockPrisma);
      });

      mockPrisma.credit_accounts.findUnique.mockResolvedValue(mockAccount);
      mockPrisma.credit_accounts.update.mockResolvedValue({ ...mockAccount, total_debt: 350.00 });
      mockPrisma.credit_transactions.create.mockResolvedValue(mockTransaction);

      const response = await request(app)
        .post('/credit-transactions/debit-with-installments')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .send(debitData)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.transaction.type).toBe('debito');
    });

    it('should handle frontend payload format (type: debt)', async () => {
      const frontendData = {
        is_new_customer: true,
        customer_name: 'João Silva',
        customer_phone: '51987654321',
        total_amount: 150.00,
        description: 'Teste',
        installments: 2, // Frontend sends 'installments' instead of 'installments_count'
        frequency: 'monthly', // Frontend sends 'monthly' instead of 'mensal'
        first_payment_date: '2025-02-15' // Frontend sends 'first_payment_date' instead of 'first_due_date'
      };

      const mockAccount = {
        id: '1',
        customer_name: 'João Silva',
        total_debt: 0
      };

      const mockTransaction = {
        id: '1',
        type: 'debito',
        amount: 150.00,
        description: 'Teste'
      };

      mockPrisma.$transaction.mockImplementation(async (callback) => {
        return await callback(mockPrisma);
      });

      mockPrisma.credit_accounts.create.mockResolvedValue(mockAccount);
      mockPrisma.credit_transactions.create.mockResolvedValue(mockTransaction);

      const response = await request(app)
        .post('/credit-transactions/debit-with-installments')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .send(frontendData)
        .expect(201);

      expect(response.body.success).toBe(true);
    });

    it('should return 400 for invalid data', async () => {
      const invalidData = {
        is_new_customer: true,
        customer_phone: '51987654321'
        // customer_name missing
      };

      const response = await request(app)
        .post('/credit-transactions/debit-with-installments')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .send(invalidData)
        .expect(400);

      expect(response.body.error).toBe('Dados inválidos');
    });
  });

  describe('PUT /credit-transactions/:id', () => {
    it('should update an existing transaction', async () => {
      const updateData = {
        amount: 200.00,
        description: 'Compra atualizada'
      };

      const existingTransaction = {
        id: '1',
        type: 'debito',
        amount: 150.00,
        description: 'Compra original',
        credit_account_id: '1'
      };

      const updatedTransaction = {
        ...existingTransaction,
        ...updateData
      };

      mockPrisma.credit_transactions.findUnique.mockResolvedValue(existingTransaction);
      mockPrisma.credit_transactions.update.mockResolvedValue(updatedTransaction);
      mockPrisma.$transaction.mockImplementation(async (callback) => {
        return await callback(mockPrisma);
      });

      const response = await request(app)
        .put('/credit-transactions/1')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .send(updateData)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.amount).toBe(200.00);
    });

    it('should return 404 for non-existent transaction', async () => {
      mockPrisma.credit_transactions.findUnique.mockResolvedValue(null);

      const response = await request(app)
        .put('/credit-transactions/999')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .send({ amount: 200.00 })
        .expect(404);

      expect(response.body.error).toBe('Transação não encontrada');
    });
  });

  describe('DELETE /credit-transactions/:id', () => {
    it('should delete an existing transaction', async () => {
      const transactionToDelete = {
        id: '1',
        type: 'debito',
        amount: 150.00,
        credit_account_id: '1'
      };

      mockPrisma.credit_transactions.findUnique.mockResolvedValue(transactionToDelete);
      mockPrisma.credit_transactions.delete.mockResolvedValue(transactionToDelete);
      mockPrisma.$transaction.mockImplementation(async (callback) => {
        return await callback(mockPrisma);
      });

      const response = await request(app)
        .delete('/credit-transactions/1')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe('Transação excluída com sucesso');
    });

    it('should return 404 for non-existent transaction', async () => {
      mockPrisma.credit_transactions.findUnique.mockResolvedValue(null);

      const response = await request(app)
        .delete('/credit-transactions/999')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .expect(404);

      expect(response.body.error).toBe('Transação não encontrada');
    });
  });

  describe('POST /credit-transactions/recalculate-debt/:creditAccountId', () => {
    it('should recalculate total debt for an account', async () => {
      const mockTransactions = [
        { type: 'debito', amount: 150.00 },
        { type: 'pagamento', amount: 50.00 }
      ];

      const mockAccount = {
        id: '1',
        customer_name: 'João Silva',
        total_debt: 100.00
      };

      mockPrisma.credit_accounts.findUnique.mockResolvedValue(mockAccount);
      mockPrisma.credit_transactions.findMany.mockResolvedValue(mockTransactions);
      mockPrisma.credit_accounts.update.mockResolvedValue({ ...mockAccount, total_debt: 100.00 });

      const response = await request(app)
        .post('/credit-transactions/recalculate-debt/1')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe('Total de dívida recalculado com sucesso');
    });

    it('should return 404 for non-existent account', async () => {
      mockPrisma.credit_accounts.findUnique.mockResolvedValue(null);

      const response = await request(app)
        .post('/credit-transactions/recalculate-debt/999')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .expect(404);

      expect(response.body.error).toBe('Conta de crédito não encontrada');
    });
  });
}); 