import request from 'supertest';
import { app } from '../../src/index';
import prisma from '../../src/lib/prisma';
import jwt from 'jsonwebtoken';

describe('Orders Routes', () => {
  let authToken: string;
  let userId: string;
  let customerId: string;
  let productId: string;
  let orderId: string;

  beforeAll(async () => {
    // Criar usuário de teste
    const user = await prisma.users.create({
      data: {
        id: '550e8400-e29b-41d4-a716-446655440004',
        email: 'test-orders@example.com',
        encrypted_password: 'hashedpassword'
      }
    });
    userId = user.id;
    authToken = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET || 'test-secret');

    // Criar produto de teste
    const product = await prisma.products.create({
      data: {
        user_id: userId,
        name: 'Produto Teste Orders',
        description: 'Produto para teste de pedidos',
        price: 15.00,
        stock: 10
      }
    });
    productId = product.id;

    // Criar cliente de teste
    const customer = await prisma.customers.create({
      data: {
        store_owner_id: userId,
        name: 'Cliente Teste Orders',
        phone: '51999999999',
        email: 'cliente-orders@test.com',
        address: 'Rua Teste, 123'
      }
    });
    customerId = customer.id;
  });

  afterAll(async () => {
    // Limpar dados de teste
    await prisma.order_items.deleteMany({});
    await prisma.orders.deleteMany({});
    await prisma.products.deleteMany({ where: { user_id: userId } });
    await prisma.customers.deleteMany({ where: { store_owner_id: userId } });
    await prisma.users.deleteMany({ where: { id: userId } });
    await prisma.$disconnect();
  });

  describe('GET /orders', () => {
    beforeEach(async () => {
      // Criar pedido de teste
      const order = await prisma.orders.create({
        data: {
          store_owner_id: userId,
          customer_id: customerId,
          customer_name: 'Cliente Teste Orders',
          customer_email: 'cliente-orders@test.com',
          customer_phone: '51999999999',
          total_amount: 30.00,
          status: 'pending'
        }
      });
      orderId = order.id;

      // Criar itens do pedido
      await prisma.order_items.create({
        data: {
          order_id: orderId,
          product_id: productId,
          quantity: 2,
          unit_price: 15.00,
          total_price: 30.00
        }
      });
    });

    afterEach(async () => {
      await prisma.order_items.deleteMany({});
      await prisma.orders.deleteMany({});
    });

    it('deve listar pedidos do usuário', async () => {
      const response = await request(app)
        .get('/orders')
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
      expect(response.body[0].store_owner_id).toBe(userId);
    });

    it('deve filtrar por status', async () => {
      const response = await request(app)
        .get('/orders?status=pending')
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      response.body.forEach((order: any) => {
        expect(order.status).toBe('pending');
      });
    });

    it('deve incluir itens do pedido quando solicitado', async () => {
      const response = await request(app)
        .get('/orders?includeItems=true')
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body[0].order_items).toBeDefined();
      expect(response.body[0].order_items.length).toBeGreaterThan(0);
    });
  });

  describe('POST /orders', () => {
    it('deve criar novo pedido', async () => {
      const orderData = {
        customer_id: customerId,
        customer_name: 'Cliente Teste Orders',
        customer_email: 'cliente-orders@test.com',
        customer_phone: '51999999999',
        items: [
          {
            product_id: productId,
            quantity: 2,
            unit_price: 15.00,
            total_price: 30.00
          }
        ]
      };

      const response = await request(app)
        .post('/orders')
        .set('Authorization', `Bearer ${authToken}`)
        .send(orderData);

      expect(response.status).toBe(201);
      expect(response.body.customer_id).toBe(customerId);
      expect(response.body.total_amount).toBe(30);
      expect(response.body.status).toBe('pending');
    });

    it('deve retornar erro para dados inválidos', async () => {
      const orderData = {
        customer_name: 'Cliente Teste',
        // Faltando campos obrigatórios
      };

      const response = await request(app)
        .post('/orders')
        .set('Authorization', `Bearer ${authToken}`)
        .send(orderData);

      expect(response.status).toBe(400);
      expect(response.body.error).toBe('Dados inválidos');
    });

    it('deve retornar erro para produto inexistente', async () => {
      const orderData = {
        customer_id: customerId,
        customer_name: 'Cliente Teste Orders',
        customer_email: 'cliente-orders@test.com',
        customer_phone: '51999999999',
        items: [
          {
            product_id: 'produto-inexistente',
            quantity: 2,
            unit_price: 15.00,
            total_price: 30.00
          }
        ]
      };

      const response = await request(app)
        .post('/orders')
        .set('Authorization', `Bearer ${authToken}`)
        .send(orderData);

      expect(response.status).toBe(404);
      expect(response.body.error).toBe('Produto não encontrado');
    });
  });

  describe('GET /orders/:id', () => {
    beforeEach(async () => {
      // Criar pedido de teste
      const order = await prisma.orders.create({
        data: {
          store_owner_id: userId,
          customer_id: customerId,
          customer_name: 'Cliente Teste Orders',
          customer_email: 'cliente-orders@test.com',
          customer_phone: '51999999999',
          total_amount: 30.00,
          status: 'pending'
        }
      });
      orderId = order.id;

      // Criar itens do pedido
      await prisma.order_items.create({
        data: {
          order_id: orderId,
          product_id: productId,
          quantity: 2,
          unit_price: 15.00,
          total_price: 30.00
        }
      });
    });

    afterEach(async () => {
      await prisma.order_items.deleteMany({});
      await prisma.orders.deleteMany({});
    });

    it('deve buscar pedido por ID', async () => {
      const response = await request(app)
        .get(`/orders/${orderId}`)
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(200);
      expect(response.body.id).toBe(orderId);
      expect(response.body.customer_name).toBe('Cliente Teste Orders');
      expect(response.body.total_amount).toBe(30);
    });

    it('deve incluir itens do pedido', async () => {
      const response = await request(app)
        .get(`/orders/${orderId}?includeItems=true`)
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(200);
      expect(response.body.order_items).toBeDefined();
      expect(response.body.order_items.length).toBe(1);
      expect(response.body.order_items[0].product_id).toBe(productId);
    });

    it('deve retornar erro para pedido inexistente', async () => {
      const response = await request(app)
        .get('/orders/pedido-inexistente')
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(404);
      expect(response.body.error).toBe('Pedido não encontrado');
    });
  });

  describe('PUT /orders/:id', () => {
    beforeEach(async () => {
      // Criar pedido de teste
      const order = await prisma.orders.create({
        data: {
          store_owner_id: userId,
          customer_id: customerId,
          customer_name: 'Cliente Teste Orders',
          customer_email: 'cliente-orders@test.com',
          customer_phone: '51999999999',
          total_amount: 30.00,
          status: 'pending'
        }
      });
      orderId = order.id;
    });

    afterEach(async () => {
      await prisma.orders.deleteMany({});
    });

    it('deve atualizar status do pedido', async () => {
      const updateData = {
        status: 'completed'
      };

      const response = await request(app)
        .put(`/orders/${orderId}`)
        .set('Authorization', `Bearer ${authToken}`)
        .send(updateData);

      expect(response.status).toBe(200);
      expect(response.body.status).toBe('completed');
    });

    it('deve atualizar informações do cliente', async () => {
      const updateData = {
        customer_name: 'Cliente Atualizado',
        customer_email: 'cliente-atualizado@test.com'
      };

      const response = await request(app)
        .put(`/orders/${orderId}`)
        .set('Authorization', `Bearer ${authToken}`)
        .send(updateData);

      expect(response.status).toBe(200);
      expect(response.body.customer_name).toBe('Cliente Atualizado');
      expect(response.body.customer_email).toBe('cliente-atualizado@test.com');
    });

    it('deve retornar erro para pedido inexistente', async () => {
      const updateData = {
        status: 'completed'
      };

      const response = await request(app)
        .put('/orders/pedido-inexistente')
        .set('Authorization', `Bearer ${authToken}`)
        .send(updateData);

      expect(response.status).toBe(404);
      expect(response.body.error).toBe('Pedido não encontrado');
    });
  });

  describe('DELETE /orders/:id', () => {
    beforeEach(async () => {
      // Criar pedido de teste
      const order = await prisma.orders.create({
        data: {
          store_owner_id: userId,
          customer_id: customerId,
          customer_name: 'Cliente Teste Orders',
          customer_email: 'cliente-orders@test.com',
          customer_phone: '51999999999',
          total_amount: 30.00,
          status: 'pending'
        }
      });
      orderId = order.id;
    });

    it('deve deletar pedido', async () => {
      const response = await request(app)
        .delete(`/orders/${orderId}`)
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(200);
      expect(response.body.message).toBe('Pedido deletado com sucesso');

      // Verificar se foi realmente deletado
      const deletedOrder = await prisma.orders.findUnique({
        where: { id: orderId }
      });
      expect(deletedOrder).toBeNull();
    });

    it('deve retornar erro para pedido inexistente', async () => {
      const response = await request(app)
        .delete('/orders/pedido-inexistente')
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(404);
      expect(response.body.error).toBe('Pedido não encontrado');
    });
  });

  describe('POST /orders/:id/items', () => {
    beforeEach(async () => {
      // Criar pedido de teste
      const order = await prisma.orders.create({
        data: {
          store_owner_id: userId,
          customer_id: customerId,
          customer_name: 'Cliente Teste Orders',
          customer_email: 'cliente-orders@test.com',
          customer_phone: '51999999999',
          total_amount: 30.00,
          status: 'pending'
        }
      });
      orderId = order.id;
    });

    afterEach(async () => {
      await prisma.order_items.deleteMany({});
      await prisma.orders.deleteMany({});
    });

    it('deve adicionar item ao pedido', async () => {
      const itemData = {
        product_id: productId,
        quantity: 1,
        unit_price: 15.00,
        total_price: 15.00
      };

      const response = await request(app)
        .post(`/orders/${orderId}/items`)
        .set('Authorization', `Bearer ${authToken}`)
        .send(itemData);

      expect(response.status).toBe(201);
      expect(response.body.product_id).toBe(productId);
      expect(response.body.quantity).toBe(1);
      expect(response.body.total_price).toBe(15);
    });

    it('deve retornar erro para produto inexistente', async () => {
      const itemData = {
        product_id: 'produto-inexistente',
        quantity: 1,
        unit_price: 15.00,
        total_price: 15.00
      };

      const response = await request(app)
        .post(`/orders/${orderId}/items`)
        .set('Authorization', `Bearer ${authToken}`)
        .send(itemData);

      expect(response.status).toBe(404);
      expect(response.body.error).toBe('Produto não encontrado');
    });

    it('deve retornar erro para pedido inexistente', async () => {
      const itemData = {
        product_id: productId,
        quantity: 1,
        unit_price: 15.00,
        total_price: 15.00
      };

      const response = await request(app)
        .post('/orders/pedido-inexistente/items')
        .set('Authorization', `Bearer ${authToken}`)
        .send(itemData);

      expect(response.status).toBe(404);
      expect(response.body.error).toBe('Pedido não encontrado');
    });
  });

  describe('PUT /orders/:id/items/:itemId', () => {
    let itemId: string;

    beforeEach(async () => {
      // Criar pedido de teste
      const order = await prisma.orders.create({
        data: {
          store_owner_id: userId,
          customer_id: customerId,
          customer_name: 'Cliente Teste Orders',
          customer_email: 'cliente-orders@test.com',
          customer_phone: '51999999999',
          total_amount: 30.00,
          status: 'pending'
        }
      });
      orderId = order.id;

      // Criar item de teste
      const item = await prisma.order_items.create({
        data: {
          order_id: orderId,
          product_id: productId,
          quantity: 2,
          unit_price: 15.00,
          total_price: 30.00
        }
      });
      itemId = item.id;
    });

    afterEach(async () => {
      await prisma.order_items.deleteMany({});
      await prisma.orders.deleteMany({});
    });

    it('deve atualizar item do pedido', async () => {
      const updateData = {
        quantity: 3,
        unit_price: 15.00,
        total_price: 45.00
      };

      const response = await request(app)
        .put(`/orders/${orderId}/items/${itemId}`)
        .set('Authorization', `Bearer ${authToken}`)
        .send(updateData);

      expect(response.status).toBe(200);
      expect(response.body.quantity).toBe(3);
      expect(response.body.total_price).toBe(45);
    });

    it('deve retornar erro para item inexistente', async () => {
      const updateData = {
        quantity: 3
      };

      const response = await request(app)
        .put(`/orders/${orderId}/items/item-inexistente`)
        .set('Authorization', `Bearer ${authToken}`)
        .send(updateData);

      expect(response.status).toBe(404);
      expect(response.body.error).toBe('Item não encontrado');
    });
  });

  describe('DELETE /orders/:id/items/:itemId', () => {
    let itemId: string;

    beforeEach(async () => {
      // Criar pedido de teste
      const order = await prisma.orders.create({
        data: {
          store_owner_id: userId,
          customer_id: customerId,
          customer_name: 'Cliente Teste Orders',
          customer_email: 'cliente-orders@test.com',
          customer_phone: '51999999999',
          total_amount: 30.00,
          status: 'pending'
        }
      });
      orderId = order.id;

      // Criar item de teste
      const item = await prisma.order_items.create({
        data: {
          order_id: orderId,
          product_id: productId,
          quantity: 2,
          unit_price: 15.00,
          total_price: 30.00
        }
      });
      itemId = item.id;
    });

    afterEach(async () => {
      await prisma.order_items.deleteMany({});
      await prisma.orders.deleteMany({});
    });

    it('deve deletar item do pedido', async () => {
      const response = await request(app)
        .delete(`/orders/${orderId}/items/${itemId}`)
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(200);
      expect(response.body.message).toBe('Item deletado com sucesso');

      // Verificar se foi realmente deletado
      const deletedItem = await prisma.order_items.findUnique({
        where: { id: itemId }
      });
      expect(deletedItem).toBeNull();
    });

    it('deve retornar erro para item inexistente', async () => {
      const response = await request(app)
        .delete(`/orders/${orderId}/items/item-inexistente`)
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(404);
      expect(response.body.error).toBe('Item não encontrado');
    });
  });
}); 