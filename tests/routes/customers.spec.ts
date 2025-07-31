import request from 'supertest';
import { app } from '../../src/index';
import prisma from '../../src/lib/prisma';
import { generateToken } from '../utils';

describe('Customers Routes', () => {
  let authToken: string;
  let userId: string;
  let storeId: string;

  beforeAll(async () => {
    // Criar usuário de teste
    const user = await prisma.users.create({
      data: {
        id: '550e8400-e29b-41d4-a716-446655440001',
        email: 'test-customers@example.com',
        encrypted_password: 'hashedpassword'
      }
    });
    userId = user.id;
    authToken = generateToken(user);

    // Criar loja de teste
    const store = await prisma.stores.create({
      data: {
        name: 'Test Store Customers',
        slug: 'test-store-customers',
        user_id: userId
      }
    });
    storeId = store.id;
  });

  afterAll(async () => {
    // Limpar dados de teste
    await prisma.orders.deleteMany({ where: { store_owner_id: userId } });
    await prisma.customers.deleteMany({ where: { store_owner_id: userId } });
    await prisma.stores.deleteMany({ where: { user_id: userId } });
    await prisma.users.deleteMany({ where: { id: userId } });
    await prisma.$disconnect();
  });

  beforeEach(async () => {
    // Limpar clientes antes de cada teste
    await prisma.orders.deleteMany({ where: { store_owner_id: userId } });
    await prisma.customers.deleteMany({ where: { store_owner_id: userId } });
  });

  describe('GET /customers', () => {
    it('deve listar todos os clientes', async () => {
      // Criar alguns clientes de teste
      await prisma.customers.createMany({
        data: [
          {
            name: 'Cliente 1',
            email: 'cliente1@test.com',
            phone: '11999999999',
            store_owner_id: userId
          },
          {
            name: 'Cliente 2',
            email: 'cliente2@test.com',
            phone: '11888888888',
            store_owner_id: userId
          }
        ]
      });

      const response = await request(app)
        .get('/customers')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThanOrEqual(2);
      expect(response.body[0]).toHaveProperty('name');
      expect(response.body[0]).toHaveProperty('email');
    });

    it('deve retornar erro 401 sem autenticação', async () => {
      await request(app)
        .get('/customers')
        .expect(401);
    });
  });

  describe('GET /customers/:id', () => {
    it('deve buscar cliente por ID', async () => {
      const customer = await prisma.customers.create({
        data: {
          name: 'Cliente Teste',
          email: 'cliente-teste@test.com',
          phone: '11777777777',
          store_owner_id: userId
        }
      });

      const response = await request(app)
        .get(`/customers/${customer.id}`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      expect(response.body.id).toBe(customer.id);
      expect(response.body.name).toBe('Cliente Teste');
      expect(response.body.email).toBe('cliente-teste@test.com');
    });

    it('deve retornar 404 para cliente inexistente', async () => {
      await request(app)
        .get('/customers/non-existent-id')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(404);
    });

    it('deve retornar erro 400 para ID inválido', async () => {
      await request(app)
        .get('/customers/invalid-id-format')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(404);
    });
  });

  describe('POST /customers', () => {
    it('deve criar novo cliente', async () => {
      const customerData = {
        name: 'João Silva',
        email: 'joao@test.com',
        phone: '11999999999',
        store_owner_id: userId
      };

      const response = await request(app)
        .post('/customers')
        .set('Authorization', `Bearer ${authToken}`)
        .send(customerData)
        .expect(201);

      expect(response.body.name).toBe(customerData.name);
      expect(response.body.email).toBe(customerData.email);
      expect(response.body.phone).toBe(customerData.phone);
      expect(response.body.store_owner_id).toBe(userId);
    });

    it('deve retornar erro 400 para dados inválidos', async () => {
      const invalidData = {
        name: '', // Nome vazio
        email: 'email-invalido', // Email inválido
        phone: '11666666666',
        store_owner_id: userId
      };

      const response = await request(app)
        .post('/customers')
        .set('Authorization', `Bearer ${authToken}`)
        .send(invalidData)
        .expect(400);

      expect(response.body.error).toBe('Dados inválidos');
    });

    it('deve retornar erro 400 para email duplicado', async () => {
      // Criar primeiro cliente
      await prisma.customers.create({
        data: {
                  name: 'Cliente Original',
        email: 'duplicado@test.com',
        phone: '11555555555',
        store_owner_id: userId
        }
      });

      // Tentar criar cliente com mesmo email
      const duplicateData = {
        name: 'Cliente Duplicado',
        email: 'duplicado@test.com', // Email duplicado
        phone: '11444444444',
        store_owner_id: userId
      };

      const response = await request(app)
        .post('/customers')
        .set('Authorization', `Bearer ${authToken}`)
        .send(duplicateData)
        .expect(400);

      expect(response.body.error).toBe('Email já está em uso');
    });
  });

  describe('PUT /customers/:id', () => {
    it('deve atualizar cliente existente', async () => {
      const customer = await prisma.customers.create({
        data: {
          name: 'Cliente Original',
          email: 'original@test.com',
          phone: '11333333333',
          store_owner_id: userId
        }
      });

      const updateData = {
        name: 'Cliente Atualizado',
        email: 'atualizado@test.com',
        phone: '11222222222'
      };

      const response = await request(app)
        .put(`/customers/${customer.id}`)
        .set('Authorization', `Bearer ${authToken}`)
        .send(updateData)
        .expect(200);

      expect(response.body.name).toBe(updateData.name);
      expect(response.body.email).toBe(updateData.email);
      expect(response.body.phone).toBe(updateData.phone);
      expect(response.body.id).toBe(customer.id);
    });

    it('deve retornar erro 404 para cliente inexistente', async () => {
      const updateData = {
        name: 'Cliente Inexistente',
        email: 'inexistente@test.com',
        phone: '11111111111'
      };

      await request(app)
        .put('/customers/non-existent-id')
        .set('Authorization', `Bearer ${authToken}`)
        .send(updateData)
        .expect(404);
    });

    it('deve retornar erro 400 para dados inválidos', async () => {
      const customer = await prisma.customers.create({
        data: {
          name: 'Cliente para Atualizar',
          email: 'para-atualizar@test.com',
          phone: '11000000000',
          store_owner_id: userId
        }
      });

      const invalidData = {
        name: '', // Nome vazio
        email: 'email-invalido' // Email inválido
      };

      await request(app)
        .put(`/customers/${customer.id}`)
        .set('Authorization', `Bearer ${authToken}`)
        .send(invalidData)
        .expect(400);
    });

    it('deve retornar erro 401 sem autenticação', async () => {
      const customer = await prisma.customers.create({
        data: {
          name: 'Cliente sem Auth',
          email: 'sem-auth@test.com',
          phone: '11999999998',
          store_owner_id: userId
        }
      });

      const updateData = {
        name: 'Tentativa sem Auth',
        email: 'tentativa@test.com'
      };

      await request(app)
        .put(`/customers/${customer.id}`)
        .send(updateData)
        .expect(401);
    });
  });

  describe('DELETE /customers/:id', () => {
    it('deve deletar cliente existente', async () => {
      const customer = await prisma.customers.create({
        data: {
          name: 'Cliente para Deletar',
          email: 'para-deletar@test.com',
          phone: '11999999997',
          store_owner_id: userId
        }
      });

      await request(app)
        .delete(`/customers/${customer.id}`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(204);

      // Verificar se foi realmente deletada
      const deletedCustomer = await prisma.customers.findUnique({
        where: { id: customer.id }
      });
      expect(deletedCustomer).toBeNull();
    });

    it('deve retornar erro 404 para cliente inexistente', async () => {
      await request(app)
        .delete('/customers/non-existent-id')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(404);
    });

    it('deve retornar erro 400 para ID inválido', async () => {
      await request(app)
        .delete('/customers/')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(404);
    });

    it('deve retornar erro 401 sem autenticação', async () => {
      const customer = await prisma.customers.create({
        data: {
          name: 'Cliente sem Auth Delete',
          email: 'sem-auth-delete@test.com',
          phone: '11999999996',
          store_owner_id: userId
        }
      });

      await request(app)
        .delete(`/customers/${customer.id}`)
        .expect(401);
    });
  });

  describe('Relacionamentos', () => {
    it('deve incluir informações da loja', async () => {
      const customer = await prisma.customers.create({
        data: {
          name: 'Cliente com Loja',
          email: 'com-loja@test.com',
          phone: '11999999995',
          store_owner_id: userId,
          store_id: storeId
        }
      });

      const response = await request(app)
        .get(`/customers/${customer.id}`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      expect(response.body.stores).toBeDefined();
      expect(response.body.stores.id).toBe(storeId);
      expect(response.body.stores.name).toBe('Test Store Customers');
    });

    it('deve incluir pedidos do cliente', async () => {
      const customer = await prisma.customers.create({
        data: {
          name: 'Cliente com Pedidos',
          email: 'com-pedidos@test.com',
          phone: '11999999994',
          store_owner_id: userId
        }
      });

      // Criar pedido para o cliente
      await prisma.orders.create({
        data: {
          customer_id: customer.id,
          customer_name: customer.name,
          customer_phone: customer.phone,
          total_amount: 50.00,
          status: 'pending',
          store_owner_id: userId,
          store_id: storeId
        }
      });

      const response = await request(app)
        .get(`/customers/${customer.id}`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      expect(response.body.orders).toBeDefined();
      expect(response.body.orders).toHaveLength(1);
      expect(response.body.orders[0].customer_name).toBe(customer.name);
    });
  });

  describe('Validações', () => {
    it('deve validar formato de email', async () => {
      const invalidEmailData = {
        name: 'Cliente Email Inválido',
        email: 'email-invalido', // Email sem @
        phone: '11999999993',
        store_owner_id: userId
      };

      const response = await request(app)
        .post('/customers')
        .set('Authorization', `Bearer ${authToken}`)
        .send(invalidEmailData)
        .expect(400);

      expect(response.body.error).toBe('Dados inválidos');
    });

    it('deve validar telefone obrigatório', async () => {
      const invalidPhoneData = {
        name: 'Cliente sem Telefone',
        email: 'sem-telefone@test.com',
        // phone faltando
        store_owner_id: userId
      };

      const response = await request(app)
        .post('/customers')
        .set('Authorization', `Bearer ${authToken}`)
        .send(invalidPhoneData)
        .expect(400);

      expect(response.body.error).toBe('Dados inválidos');
    });

    it('deve validar nome obrigatório', async () => {
      const invalidNameData = {
        name: '', // Nome vazio
        email: 'sem-nome@test.com',
        phone: '11999999992',
        store_owner_id: userId
      };

      const response = await request(app)
        .post('/customers')
        .set('Authorization', `Bearer ${authToken}`)
        .send(invalidNameData)
        .expect(400);

      expect(response.body.error).toBe('Dados inválidos');
    });
  });
}); 