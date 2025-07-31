import request from 'supertest';
import { app } from '../../src/index';
import prisma from '../../src/lib/prisma';
import { generateToken } from '../utils';

describe('Sales Routes', () => {
  let authToken: string;
  let userId: string;
  let storeId: string;
  let productId: string;

  beforeAll(async () => {
    // Criar usuário de teste
    const user = await prisma.users.create({
      data: {
        email: 'test-sales@example.com',
        encrypted_password: 'hashedpassword',
        name: 'Test Sales User'
      }
    });
    userId = user.id;
    authToken = generateToken(user);

    // Criar loja de teste
    const store = await prisma.stores.create({
      data: {
        name: 'Test Store Sales',
        slug: 'test-store-sales',
        user_id: userId
      }
    });
    storeId = store.id;

    // Criar produto de teste
    const product = await prisma.products.create({
      data: {
        name: 'Test Product Sales',
        description: 'Product for sales testing',
        price: '10.50',
        stock: 100,
        user_id: userId,
        store_id: storeId
      }
    });
    productId = product.id;
  });

  afterAll(async () => {
    // Limpar dados de teste
    await prisma.sales.deleteMany({ where: { user_id: userId } });
    await prisma.cash_flow.deleteMany({ where: { user_id: userId } });
    await prisma.products.deleteMany({ where: { user_id: userId } });
    await prisma.stores.deleteMany({ where: { user_id: userId } });
    await prisma.users.deleteMany({ where: { id: userId } });
    await prisma.$disconnect();
  });

  beforeEach(async () => {
    // Limpar vendas antes de cada teste
    await prisma.sales.deleteMany({ where: { user_id: userId } });
    await prisma.cash_flow.deleteMany({ where: { user_id: userId } });
  });

  describe('GET /sales', () => {
    it('deve listar vendas do usuário autenticado', async () => {
      // Criar algumas vendas de teste
      await prisma.sales.createMany({
        data: [
          {
            user_id: userId,
            product_name: 'Product 1',
            quantity: 2,
            unit_price: '10.00',
            total_price: '20.00',
            sale_date: new Date(),
            status: 'completed',
            store_id: storeId
          },
          {
            user_id: userId,
            product_name: 'Product 2',
            quantity: 1,
            unit_price: '15.00',
            total_price: '15.00',
            sale_date: new Date(),
            status: 'completed',
            store_id: storeId
          }
        ]
      });

      const response = await request(app)
        .get('/sales')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      expect(response.body.data).toHaveLength(2);
      expect(response.body.totalCount).toBe(2);
      expect(response.body.data[0]).toHaveProperty('product_name');
      expect(response.body.data[0]).toHaveProperty('total_price');
    });

    it('deve filtrar vendas por status', async () => {
      await prisma.sales.createMany({
        data: [
          {
            user_id: userId,
            product_name: 'Product 1',
            quantity: 1,
            unit_price: '10.00',
            total_price: '10.00',
            sale_date: new Date(),
            status: 'completed',
            store_id: storeId
          },
          {
            user_id: userId,
            product_name: 'Product 2',
            quantity: 1,
            unit_price: '15.00',
            total_price: '15.00',
            sale_date: new Date(),
            status: 'pending',
            store_id: storeId
          }
        ]
      });

      const response = await request(app)
        .get('/sales?status=completed')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      expect(response.body.data).toHaveLength(1);
      expect(response.body.data[0].status).toBe('completed');
    });

    it('deve filtrar vendas por data', async () => {
      const today = new Date();
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);

      await prisma.sales.createMany({
        data: [
          {
            user_id: userId,
            product_name: 'Product Today',
            quantity: 1,
            unit_price: '10.00',
            total_price: '10.00',
            sale_date: today,
            status: 'completed',
            store_id: storeId
          },
          {
            user_id: userId,
            product_name: 'Product Yesterday',
            quantity: 1,
            unit_price: '15.00',
            total_price: '15.00',
            sale_date: yesterday,
            status: 'completed',
            store_id: storeId
          }
        ]
      });

      const response = await request(app)
        .get(`/sales?dateFrom=${today.toISOString().split('T')[0]}`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      expect(response.body.data).toHaveLength(1);
      expect(response.body.data[0].product_name).toBe('Product Today');
    });

    it('deve retornar erro 401 sem autenticação', async () => {
      await request(app)
        .get('/sales')
        .expect(401);
    });
  });

  describe('GET /sales/:id', () => {
    it('deve buscar venda por ID', async () => {
      const venda = await prisma.sales.create({
        data: {
          user_id: userId,
          product_name: 'Test Product',
          quantity: 1,
          unit_price: '10.00',
          total_price: '10.00',
          sale_date: new Date(),
          status: 'completed',
          store_id: storeId
        }
      });

      const response = await request(app)
        .get(`/sales/${venda.id}`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      expect(response.body.id).toBe(venda.id);
      expect(response.body.product_name).toBe('Test Product');
    });

    it('deve retornar 404 para venda inexistente', async () => {
      await request(app)
        .get('/sales/non-existent-id')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(404);
    });

    it('deve retornar erro 400 para ID inválido', async () => {
      await request(app)
        .get('/sales/')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(404);
    });
  });

  describe('POST /sales', () => {
    it('deve criar nova venda', async () => {
      const vendaData = {
        product_name: 'New Product',
        quantity: 3,
        unit_price: 12.50,
        total_price: 37.50,
        sale_date: new Date().toISOString(),
        status: 'completed',
        store_id: storeId
      };

      const response = await request(app)
        .post('/sales')
        .set('Authorization', `Bearer ${authToken}`)
        .send(vendaData)
        .expect(201);

      expect(response.body.product_name).toBe(vendaData.product_name);
      expect(response.body.quantity).toBe(vendaData.quantity);
      expect(response.body.user_id).toBe(userId);
    });

    it('deve criar venda e descontar estoque quando product_id fornecido', async () => {
      const vendaData = {
        product_name: 'Product with Stock',
        quantity: 5,
        unit_price: 10.00,
        total_price: 50.00,
        sale_date: new Date().toISOString(),
        status: 'completed',
        store_id: storeId
      };

      const response = await request(app)
        .post('/sales')
        .set('Authorization', `Bearer ${authToken}`)
        .send({ ...vendaData, product_id: productId })
        .expect(201);

      // Verificar se o estoque foi descontado
      const updatedProduct = await prisma.products.findUnique({
        where: { id: productId }
      });

      expect(updatedProduct?.stock).toBe(95); // 100 - 5
    });

    it('deve retornar erro 400 para dados inválidos', async () => {
      const invalidData = {
        product_name: '', // Nome vazio
        quantity: -1, // Quantidade negativa
        unit_price: 'invalid' // Preço inválido
      };

      const response = await request(app)
        .post('/sales')
        .set('Authorization', `Bearer ${authToken}`)
        .send(invalidData)
        .expect(400);

      expect(response.body.error).toBe('Dados inválidos');
    });
  });

  describe('PUT /sales/:id', () => {
    it('deve atualizar venda existente', async () => {
      const venda = await prisma.sales.create({
        data: {
          user_id: userId,
          product_name: 'Original Product',
          quantity: 1,
          unit_price: '10.00',
          total_price: '10.00',
          sale_date: new Date(),
          status: 'completed',
          store_id: storeId
        }
      });

      const updateData = {
        product_name: 'Updated Product',
        quantity: 2,
        total_price: 20.00
      };

      const response = await request(app)
        .put(`/sales/${venda.id}`)
        .set('Authorization', `Bearer ${authToken}`)
        .send(updateData)
        .expect(200);

      expect(response.body.product_name).toBe(updateData.product_name);
      expect(response.body.quantity).toBe(updateData.quantity);
    });

    it('deve retornar erro 400 para dados inválidos', async () => {
      const venda = await prisma.sales.create({
        data: {
          user_id: userId,
          product_name: 'Test Product',
          quantity: 1,
          unit_price: '10.00',
          total_price: '10.00',
          sale_date: new Date(),
          status: 'completed',
          store_id: storeId
        }
      });

      const invalidData = {
        quantity: -1 // Quantidade negativa
      };

      await request(app)
        .put(`/sales/${venda.id}`)
        .set('Authorization', `Bearer ${authToken}`)
        .send(invalidData)
        .expect(400);
    });
  });

  describe('DELETE /sales/:id', () => {
    it('deve deletar venda existente', async () => {
      const venda = await prisma.sales.create({
        data: {
          user_id: userId,
          product_name: 'Product to Delete',
          quantity: 1,
          unit_price: '10.00',
          total_price: '10.00',
          sale_date: new Date(),
          status: 'completed',
          store_id: storeId
        }
      });

      await request(app)
        .delete(`/sales/${venda.id}`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(204);

      // Verificar se foi realmente deletada
      const deletedVenda = await prisma.sales.findUnique({
        where: { id: venda.id }
      });
      expect(deletedVenda).toBeNull();
    });

    it('deve retornar erro 400 para ID inválido', async () => {
      await request(app)
        .delete('/sales/')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(404);
    });
  });

  describe('POST /sales/product-sale', () => {
    it('deve registrar venda de produto com fluxo de caixa', async () => {
      const saleData = {
        product_id: productId,
        quantity: 3,
        unit_price: 10.00,
        payment_method: 'dinheiro',
        sale_date: new Date().toISOString()
      };

      const response = await request(app)
        .post('/sales/product-sale')
        .set('Authorization', `Bearer ${authToken}`)
        .send(saleData)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.venda).toBeDefined();
      expect(response.body.fluxo).toBeDefined();
      expect(response.body.produto).toBeDefined();
      expect(response.body.produto.novo_estoque).toBe(97); // 100 - 3

      // Verificar se o fluxo de caixa foi criado
      expect(response.body.fluxo.type).toBe('entrada');
      expect(response.body.fluxo.category).toBe('vendas');
      expect(response.body.fluxo.amount).toBe(30.00);
    });

    it('deve retornar erro 400 para dados obrigatórios faltando', async () => {
      const incompleteData = {
        product_id: productId,
        // quantity e unit_price faltando
      };

      const response = await request(app)
        .post('/sales/product-sale')
        .set('Authorization', `Bearer ${authToken}`)
        .send(incompleteData)
        .expect(400);

      expect(response.body.error).toBe('Dados obrigatórios faltando');
    });

    it('deve retornar erro 404 para produto inexistente', async () => {
      const saleData = {
        product_id: 'non-existent-product-id',
        quantity: 1,
        unit_price: 10.00
      };

      await request(app)
        .post('/sales/product-sale')
        .set('Authorization', `Bearer ${authToken}`)
        .send(saleData)
        .expect(404);
    });

    it('deve retornar erro 403 para produto de outro usuário', async () => {
      // Criar outro usuário e produto
      const otherUser = await prisma.users.create({
        data: {
          email: 'other-user@example.com',
          encrypted_password: 'hashedpassword',
          name: 'Other User'
        }
      });

      const otherStore = await prisma.stores.create({
        data: {
          name: 'Other Store',
          slug: 'other-store',
          user_id: otherUser.id
        }
      });

      const otherProduct = await prisma.products.create({
        data: {
          name: 'Other Product',
          description: 'Product from other user',
          price: '10.00',
          stock: 50,
          user_id: otherUser.id,
          store_id: otherStore.id
        }
      });

      const saleData = {
        product_id: otherProduct.id,
        quantity: 1,
        unit_price: 10.00
      };

      await request(app)
        .post('/sales/product-sale')
        .set('Authorization', `Bearer ${authToken}`)
        .send(saleData)
        .expect(403);

      // Limpar dados de teste
      await prisma.products.delete({ where: { id: otherProduct.id } });
      await prisma.stores.delete({ where: { id: otherStore.id } });
      await prisma.users.delete({ where: { id: otherUser.id } });
    });

    it('deve retornar erro 400 para estoque insuficiente', async () => {
      const saleData = {
        product_id: productId,
        quantity: 150, // Mais que o estoque disponível (100)
        unit_price: 10.00
      };

      const response = await request(app)
        .post('/sales/product-sale')
        .set('Authorization', `Bearer ${authToken}`)
        .send(saleData)
        .expect(400);

      expect(response.body.error).toBe('Estoque insuficiente');
      expect(response.body.available).toBe(100);
      expect(response.body.requested).toBe(150);
    });

    it('deve usar data atual quando sale_date não fornecida', async () => {
      const saleData = {
        product_id: productId,
        quantity: 1,
        unit_price: 10.00
        // sale_date não fornecida
      };

      const response = await request(app)
        .post('/sales/product-sale')
        .set('Authorization', `Bearer ${authToken}`)
        .send(saleData)
        .expect(201);

      expect(response.body.venda.sale_date).toBeDefined();
      expect(response.body.fluxo.date).toBeDefined();
    });
  });
}); 