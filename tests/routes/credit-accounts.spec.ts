import request from 'supertest';
import { app } from '../../src/index';
import prisma from '../../src/lib/prisma';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';

describe('Credit Accounts Routes', () => {
  let authToken: string;
  let userId: string;
  let customerId: string;
  let creditAccountId: string;

  beforeAll(async () => {
    // Criar usuário de teste
    const user = await prisma.users.create({
      data: {
        id: uuidv4(),
        email: 'test-credit@example.com',
        encrypted_password: 'hashedpassword'
      }
    });
    userId = user.id;
    authToken = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET || 'test-secret');

    // Criar cliente de teste
    const customer = await prisma.customers.create({
      data: {
        id: uuidv4(),
        store_owner_id: userId,
        name: 'Cliente Teste',
        email: 'cliente@teste.com',
        phone: '11999999999'
      }
    });
    customerId = customer.id;
  });

  afterAll(async () => {
    // Limpar dados de teste
    await prisma.credit_transactions.deleteMany({});
    await prisma.credit_accounts.deleteMany({});
    await prisma.customers.deleteMany({ where: { store_owner_id: userId } });
    await prisma.users.deleteMany({ where: { id: userId } });
    await prisma.$disconnect();
  });

  describe('GET /creditAccounts/customer/:customerId', () => {
    it('deve retornar dados do cliente e status do crediário', async () => {
      const response = await request(app)
        .get(`/creditAccounts/customer/${customerId}`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data).toHaveProperty('customer');
      expect(response.body.data).toHaveProperty('creditAccount');
    });

    it('deve retornar erro para cliente inexistente', async () => {
      const response = await request(app)
        .get('/creditAccounts/customer/999')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(404);

      expect(response.body.error).toBe('Cliente não encontrado');
    });
  });

  describe('POST /creditAccounts', () => {
    it('deve criar crediário com dados do cliente', async () => {
      const creditData = {
        customer_name: 'Cliente Teste',
        customer_phone: '11999999999',
        customer_address: 'Rua Teste, 123'
      };

      const response = await request(app)
        .post('/creditAccounts')
        .set('Authorization', `Bearer ${authToken}`)
        .send(creditData)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.data.customer_name).toBe('Cliente Teste');
      creditAccountId = response.body.data.id;
    });

    it('deve retornar erro para cliente inexistente', async () => {
      const creditData = {
        customer_name: '', // Nome vazio para causar erro de validação
        customer_phone: '11999999998'
      };

      const response = await request(app)
        .post('/creditAccounts')
        .set('Authorization', `Bearer ${authToken}`)
        .send(creditData)
        .expect(400);

      expect(response.body.error).toBe('Dados inválidos');
    });
  });

  describe('GET /creditAccounts', () => {
    it('deve listar crediários do usuário', async () => {
      const response = await request(app)
        .get('/creditAccounts')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(Array.isArray(response.body.data)).toBe(true);
    });

    it('deve filtrar por status', async () => {
      const response = await request(app)
        .get('/creditAccounts?status=active')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(Array.isArray(response.body.data)).toBe(true);
    });
  });

  describe('GET /creditAccounts/:id', () => {
    it('deve buscar crediário por ID', async () => {
      const response = await request(app)
        .get(`/creditAccounts/${creditAccountId}`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.id).toBe(creditAccountId);
    });

    it('deve retornar erro para crediário inexistente', async () => {
      const response = await request(app)
        .get('/creditAccounts/999')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(404);

      expect(response.body.error).toBe('Crediário não encontrado');
    });
  });

  describe('PUT /creditAccounts/:id', () => {
    it('deve atualizar crediário', async () => {
      const updateData = {
        customer_address: 'Nova Rua, 456'
      };

      const response = await request(app)
        .put(`/creditAccounts/${creditAccountId}`)
        .set('Authorization', `Bearer ${authToken}`)
        .send(updateData)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.customer_address).toBe('Nova Rua, 456');
    });

    it('deve retornar erro para crediário inexistente', async () => {
      const response = await request(app)
        .put('/creditAccounts/999')
        .set('Authorization', `Bearer ${authToken}`)
        .send({ customer_address: 'Nova Rua, 456' })
        .expect(404);

      expect(response.body.error).toBe('Crediário não encontrado');
    });
  });

  describe('DELETE /creditAccounts/:id', () => {
    it('deve deletar crediário', async () => {
      const response = await request(app)
        .delete(`/creditAccounts/${creditAccountId}`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe('Crediário excluído com sucesso');
    });

    it('deve retornar erro para crediário inexistente', async () => {
      const response = await request(app)
        .delete('/creditAccounts/999')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(404);

      expect(response.body.error).toBe('Crediário não encontrado');
    });
  });

  describe('POST /creditAccounts/:id/transactions', () => {
    beforeEach(async () => {
      // Recriar crediário para testes de transações com telefone único
      const creditAccount = await prisma.credit_accounts.create({
        data: {
          id: uuidv4(),
          customer_name: 'Cliente Teste Transações',
          customer_phone: `11${Math.floor(Math.random() * 90000000) + 10000000}`, // Telefone único
          user_id: userId
        }
      });
      creditAccountId = creditAccount.id;
    });

    it('deve adicionar débito ao crediário', async () => {
      const transactionData = {
        type: 'debito',
        amount: 100.00,
        description: 'Compra teste'
      };

      const response = await request(app)
        .post(`/creditAccounts/${creditAccountId}/transactions`)
        .set('Authorization', `Bearer ${authToken}`)
        .send(transactionData)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.data.type).toBe('debito');
    });

    it('deve adicionar pagamento ao crediário', async () => {
      const transactionData = {
        type: 'pagamento',
        amount: 50.00,
        description: 'Pagamento teste'
      };

      const response = await request(app)
        .post(`/creditAccounts/${creditAccountId}/transactions`)
        .set('Authorization', `Bearer ${authToken}`)
        .send(transactionData)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.data.type).toBe('pagamento');
    });

    it('deve retornar erro para crediário inexistente', async () => {
      const transactionData = {
        type: 'debito',
        amount: 100.00,
        description: 'Compra teste'
      };

      const response = await request(app)
        .post('/creditAccounts/999/transactions')
        .set('Authorization', `Bearer ${authToken}`)
        .send(transactionData)
        .expect(404);

      expect(response.body.error).toBe('Crediário não encontrado');
    });
  });

  describe('GET /creditAccounts/:id/transactions', () => {
    it('deve listar transações do crediário', async () => {
      const response = await request(app)
        .get(`/creditAccounts/${creditAccountId}/transactions`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(Array.isArray(response.body.data)).toBe(true);
    });

    it('deve retornar erro para crediário inexistente', async () => {
      const response = await request(app)
        .get('/creditAccounts/999/transactions')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(404);

      expect(response.body.error).toBe('Crediário não encontrado');
    });
  });
}); 