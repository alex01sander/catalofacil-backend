import request from 'supertest';
import express from 'express';
import { generateTestToken } from '../utils.spec';

// Mock do Prisma
const mockPrisma = {
  products: {
    findMany: jest.fn(),
    findUnique: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
    count: jest.fn()
  },
  sales: {
    create: jest.fn()
  },
  cash_flow: {
    create: jest.fn()
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
  userRateLimit: (req: any, res: any, next: any) => next(),
  uploadRateLimit: (req: any, res: any, next: any) => next()
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
  generateCacheKey: jest.fn(() => 'test-cache-key'),
  clearUserCache: jest.fn()
}));

// Mock do multer
jest.mock('multer', () => {
  const multer = () => {
    const mw = (req: any, res: any, next: any) => next();
    mw.single = () => (req: any, res: any, next: any) => next();
    return mw;
  };
  return multer;
});

// Mock do supabase
jest.mock('../../src/lib/supabase', () => ({
  __esModule: true,
  default: {
    storage: {
      from: jest.fn(() => ({
        upload: jest.fn(() => Promise.resolve({ data: { path: 'test-image.jpg' }, error: null }))
      }))
    }
  }
}));

// Importar as rotas
import productsRouter from '../../src/routes/products';

const app = express();
app.use(express.json());
app.use('/products', productsRouter);

describe('Products Routes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /products', () => {
    it('should return list of products', async () => {
      const mockProducts = [
        {
          id: '1',
          name: 'Produto Teste',
          description: 'Descrição do produto',
          price: 50.00,
          stock: 10,
          is_active: true,
          category: {
            name: 'Categoria Teste'
          }
        }
      ];

      mockPrisma.products.findMany.mockResolvedValue(mockProducts);
      mockPrisma.products.count.mockResolvedValue(1);

      const response = await request(app)
        .get('/products')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data).toHaveLength(1);
      expect(response.body.data[0].name).toBe('Produto Teste');
    });

    it('should handle database errors', async () => {
      mockPrisma.products.findMany.mockRejectedValue(new Error('Database error'));

      const response = await request(app)
        .get('/products')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .expect(500);

      expect(response.body.error).toBe('Erro interno do servidor');
    });
  });

  describe('GET /products/:id', () => {
    it('should return a specific product', async () => {
      const mockProduct = {
        id: '1',
        name: 'Produto Teste',
        description: 'Descrição do produto',
        price: 50.00,
        stock: 10,
        is_active: true,
        category: {
          name: 'Categoria Teste'
        }
      };

      mockPrisma.products.findUnique.mockResolvedValue(mockProduct);

      const response = await request(app)
        .get('/products/1')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.name).toBe('Produto Teste');
    });

    it('should return 404 for non-existent product', async () => {
      mockPrisma.products.findUnique.mockResolvedValue(null);

      const response = await request(app)
        .get('/products/999')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .expect(404);

      expect(response.body.error).toBe('Produto não encontrado');
    });
  });

  describe('POST /products', () => {
    it('should create a new product', async () => {
      const productData = {
        name: 'Novo Produto',
        description: 'Descrição do novo produto',
        price: 75.00,
        stock: 20,
        category_id: '1',
        is_active: true
      };

      const createdProduct = {
        id: '2',
        ...productData,
        user_id: '123e4567-e89b-12d3-a456-426614174000',
        created_at: new Date()
      };

      mockPrisma.products.create.mockResolvedValue(createdProduct);

      const response = await request(app)
        .post('/products')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .send(productData)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.data.name).toBe('Novo Produto');
      expect(mockPrisma.products.create).toHaveBeenCalledWith({
        data: {
          ...productData,
          user_id: '123e4567-e89b-12d3-a456-426614174000'
        }
      });
    });

    it('should return 400 for invalid data', async () => {
      const invalidData = {
        price: 75.00
        // name missing
      };

      const response = await request(app)
        .post('/products')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .send(invalidData)
        .expect(400);

      expect(response.body.error).toBe('Dados inválidos');
    });
  });

  describe('PUT /products/:id', () => {
    it('should update an existing product', async () => {
      const updateData = {
        name: 'Produto Atualizado',
        price: 100.00
      };

      const existingProduct = {
        id: '1',
        name: 'Produto Original',
        price: 50.00,
        user_id: '123e4567-e89b-12d3-a456-426614174000'
      };

      const updatedProduct = {
        ...existingProduct,
        ...updateData
      };

      mockPrisma.products.findUnique.mockResolvedValue(existingProduct);
      mockPrisma.products.update.mockResolvedValue(updatedProduct);

      const response = await request(app)
        .put('/products/1')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .send(updateData)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.name).toBe('Produto Atualizado');
    });

    it('should return 404 for non-existent product', async () => {
      mockPrisma.products.findUnique.mockResolvedValue(null);

      const response = await request(app)
        .put('/products/999')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .send({ name: 'Test' })
        .expect(404);

      expect(response.body.error).toBe('Produto não encontrado');
    });

    it('should return 403 for unauthorized access', async () => {
      const existingProduct = {
        id: '1',
        name: 'Produto Original',
        price: 50.00,
        user_id: 'different-user-id' // Different user
      };

      mockPrisma.products.findUnique.mockResolvedValue(existingProduct);

      const response = await request(app)
        .put('/products/1')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .send({ name: 'Test' })
        .expect(403);

      expect(response.body.error).toBe('Acesso negado');
    });
  });

  describe('DELETE /products/:id', () => {
    it('should delete an existing product', async () => {
      const productToDelete = {
        id: '1',
        name: 'Produto Teste',
        user_id: '123e4567-e89b-12d3-a456-426614174000'
      };

      mockPrisma.products.findUnique.mockResolvedValue(productToDelete);
      mockPrisma.products.delete.mockResolvedValue(productToDelete);

      const response = await request(app)
        .delete('/products/1')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe('Produto excluído com sucesso');
    });

    it('should return 404 for non-existent product', async () => {
      mockPrisma.products.findUnique.mockResolvedValue(null);

      const response = await request(app)
        .delete('/products/999')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .expect(404);

      expect(response.body.error).toBe('Produto não encontrado');
    });

    it('should return 403 for unauthorized access', async () => {
      const productToDelete = {
        id: '1',
        name: 'Produto Teste',
        user_id: 'different-user-id' // Different user
      };

      mockPrisma.products.findUnique.mockResolvedValue(productToDelete);

      const response = await request(app)
        .delete('/products/1')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .expect(403);

      expect(response.body.error).toBe('Acesso negado');
    });
  });

  describe('POST /products/product-sale', () => {
    it('should create a product sale with stock update and cash flow entry', async () => {
      const saleData = {
        product_id: '1',
        quantity: 2,
        total_amount: 100.00,
        customer_name: 'João Silva',
        payment_method: 'dinheiro'
      };

      const mockProduct = {
        id: '1',
        name: 'Produto Teste',
        price: 50.00,
        stock: 10
      };

      const createdSale = {
        id: '1',
        ...saleData,
        user_id: '123e4567-e89b-12d3-a456-426614174000',
        created_at: new Date()
      };

      const createdCashFlow = {
        id: '1',
        type: 'entrada',
        amount: 100.00,
        description: 'Venda de Produto Teste',
        category: 'vendas',
        user_id: '123e4567-e89b-12d3-a456-426614174000'
      };

      mockPrisma.$transaction.mockImplementation(async (callback) => {
        return await callback(mockPrisma);
      });

      mockPrisma.products.findUnique.mockResolvedValue(mockProduct);
      mockPrisma.products.update.mockResolvedValue({ ...mockProduct, stock: 8 });
      mockPrisma.sales.create.mockResolvedValue(createdSale);
      mockPrisma.cash_flow.create.mockResolvedValue(createdCashFlow);

      const response = await request(app)
        .post('/products/product-sale')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .send(saleData)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.data.total_amount).toBe(100.00);
      expect(response.body.cashFlow.type).toBe('entrada');
    });

    it('should return 404 for non-existent product', async () => {
      const saleData = {
        product_id: '999',
        quantity: 2,
        total_amount: 100.00
      };

      mockPrisma.products.findUnique.mockResolvedValue(null);

      const response = await request(app)
        .post('/products/product-sale')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .send(saleData)
        .expect(404);

      expect(response.body.error).toBe('Produto não encontrado');
    });

    it('should return 400 for insufficient stock', async () => {
      const saleData = {
        product_id: '1',
        quantity: 15, // More than available stock
        total_amount: 750.00
      };

      const mockProduct = {
        id: '1',
        name: 'Produto Teste',
        price: 50.00,
        stock: 10
      };

      mockPrisma.products.findUnique.mockResolvedValue(mockProduct);

      const response = await request(app)
        .post('/products/product-sale')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .send(saleData)
        .expect(400);

      expect(response.body.error).toBe('Estoque insuficiente');
    });

    it('should return 400 for invalid data', async () => {
      const invalidData = {
        product_id: '1'
        // quantity missing
      };

      const response = await request(app)
        .post('/products/product-sale')
        .set('Authorization', `Bearer ${generateTestToken()}`)
        .send(invalidData)
        .expect(400);

      expect(response.body.error).toBe('Dados inválidos');
    });
  });

  describe('GET /public/:slug/products', () => {
    it('should return public products for a store', async () => {
      const mockProducts = [
        {
          id: '1',
          name: 'Produto Público',
          description: 'Descrição pública',
          price: 50.00,
          stock: 10,
          is_active: true,
          category: {
            name: 'Categoria Pública'
          }
        }
      ];

      mockPrisma.products.findMany.mockResolvedValue(mockProducts);
      mockPrisma.products.count.mockResolvedValue(1);

      const response = await request(app)
        .get('/public/test-store/products')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data).toHaveLength(1);
      expect(response.body.data[0].name).toBe('Produto Público');
      expect(response.body.data[0]).toHaveProperty('stock');
      expect(response.body.data[0]).toHaveProperty('is_active');
    });
  });

  describe('GET /public/:slug/products/:id', () => {
    it('should return a specific public product', async () => {
      const mockProduct = {
        id: '1',
        name: 'Produto Público',
        description: 'Descrição pública',
        price: 50.00,
        stock: 10,
        is_active: true,
        category: {
          name: 'Categoria Pública'
        }
      };

      mockPrisma.products.findUnique.mockResolvedValue(mockProduct);

      const response = await request(app)
        .get('/public/test-store/products/1')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.name).toBe('Produto Público');
      expect(response.body.data).toHaveProperty('stock');
      expect(response.body.data).toHaveProperty('is_active');
    });

    it('should return 404 for non-existent public product', async () => {
      mockPrisma.products.findUnique.mockResolvedValue(null);

      const response = await request(app)
        .get('/public/test-store/products/999')
        .expect(404);

      expect(response.body.error).toBe('Produto não encontrado');
    });
  });
}); 