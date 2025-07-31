import request from 'supertest';
import { app } from '../../src/index';
import prisma from '../../src/lib/prisma';
import jwt from 'jsonwebtoken';

describe('Credit Accounts Routes', () => {
  let authToken: string;
  let userId: string;
  let customerId: string;
  let creditAccountId: string;

  beforeAll(async () => {
    // Criar usuário de teste
    const user = await prisma.users.create({
      data: {
        id: '550e8400-e29b-41d4-a716-446655440003',
        email: 'test-credit@example.com',
        encrypted_password: 'hashedpassword'
      }
    });
    userId = user.id;
    authToken = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET || 'test-secret');

    // Criar cliente de teste
    const customer = await prisma.customers.create({
      data: {
        store_owner_id: userId,
        name: 'Cliente Teste Crediário',
        phone: '51999999999',
        email: 'cliente-credito@test.com',
        address: 'Rua Teste, 123'
      }
    });
    customerId = customer.id;
  });

  afterAll(async () => {
    // Limpar dados de teste
    await prisma.credit_transactions.deleteMany({});
    await prisma.credit_accounts.deleteMany({});
    await prisma.customers.deleteMany({});
    await prisma.users.deleteMany({});
    await prisma.$disconnect();
  });

  describe('GET /creditAccounts/customer/:customerId', () => {
    it('deve retornar dados do cliente e status do crediário', async () => {
      const response = await request(app)
        .get(`/creditAccounts/customer/${customerId}`)
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(200);
      expect(response.body.customer.id).toBe(customerId);
      expect(response.body.customer.name).toBe('Cliente Teste Crediário');
      expect(response.body.hasCreditAccount).toBe(false);
      expect(response.body.existingCreditAccount).toBeNull();
    });

    it('deve retornar erro para cliente inexistente', async () => {
      const response = await request(app)
        .get('/creditAccounts/customer/cliente-inexistente')
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(404);
      expect(response.body.error).toBe('Cliente não encontrado');
    });
  });

  describe('POST /creditAccounts', () => {
    it('deve criar crediário com dados do cliente', async () => {
      const creditData = {
        customer_id: customerId,
        total_debt: 0,
        status: 'active'
      };

      const response = await request(app)
        .post('/creditAccounts')
        .set('Authorization', `Bearer ${authToken}`)
        .send(creditData);

      expect(response.status).toBe(201);
      expect(response.body.customer_id).toBe(customerId);
      expect(response.body.customer_name).toBe('Cliente Teste Crediário');
      expect(response.body.customer_phone).toBe('51999999999');
      expect(response.body.total_debt).toBe(0);
      expect(response.body.status).toBe('active');
    });

    it('deve retornar erro para cliente inexistente', async () => {
      const creditData = {
        customer_id: 'cliente-inexistente',
        total_debt: 0,
        status: 'active'
      };

      const response = await request(app)
        .post('/creditAccounts')
        .set('Authorization', `Bearer ${authToken}`)
        .send(creditData);

      expect(response.status).toBe(404);
      expect(response.body.error).toBe('Cliente não encontrado ou não pertence ao seu cadastro');
    });

    it('deve retornar erro se cliente já tiver crediário', async () => {
      // Criar primeiro crediário
      await prisma.credit_accounts.create({
        data: {
          user_id: userId,
          customer_name: 'Cliente Teste Crediário',
          customer_phone: '51999999999',
          customer_address: 'Rua Teste, 123',
          total_debt: 0,
          status: 'active'
        }
      });

      // Tentar criar segundo crediário
      const creditData = {
        customer_id: customerId,
        total_debt: 0,
        status: 'active'
      };

      const response = await request(app)
        .post('/creditAccounts')
        .set('Authorization', `Bearer ${authToken}`)
        .send(creditData);

      expect(response.status).toBe(400);
      expect(response.body.error).toBe('Cliente já possui conta de crédito');
      expect(response.body.existingCreditAccount).toBeDefined();
    });

    it('deve retornar erro se customer_id não for fornecido', async () => {
      const creditData = {
        total_debt: 0,
        status: 'active'
      };

      const response = await request(app)
        .post('/creditAccounts')
        .set('Authorization', `Bearer ${authToken}`)
        .send(creditData);

      expect(response.status).toBe(400);
      expect(response.body.error).toBe('Dados inválidos');
    });
  });

  describe('GET /creditAccounts', () => {
    beforeEach(async () => {
      // Criar crediário para teste
      const creditAccount = await prisma.credit_accounts.create({
        data: {
          user_id: userId,
          customer_name: 'Cliente Teste Crediário',
          customer_phone: '51999999999',
          customer_address: 'Rua Teste, 123',
          total_debt: 150.50,
          status: 'active'
        }
      });
      creditAccountId = creditAccount.id;
    });

    it('deve listar crediários com informações do cliente', async () => {
      const response = await request(app)
        .get('/creditAccounts')
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('data');
      expect(response.body.data).toHaveLength(1);
      
      const creditAccount = response.body.data[0];
      expect(creditAccount.customer_name).toBe('Cliente Teste Crediário');
      expect(creditAccount.total_debt).toBe(150.5);
    });

    it('deve filtrar por busca', async () => {
      const response = await request(app)
        .get('/creditAccounts?search=Teste')
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(200);
      expect(response.body.data).toHaveLength(1);
    });

    it('deve filtrar por status', async () => {
      const response = await request(app)
        .get('/creditAccounts?status=active')
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(200);
      expect(response.body.data).toHaveLength(1);
    });
  });

  describe('GET /creditAccounts/:id', () => {
    beforeEach(async () => {
      // Criar crediário para teste
      const creditAccount = await prisma.credit_accounts.create({
        data: {
          user_id: userId,
          customer_name: 'Cliente Teste Crediário',
          customer_phone: '51999999999',
          customer_address: 'Rua Teste, 123',
          total_debt: 200.00,
          status: 'active'
        }
      });
      creditAccountId = creditAccount.id;
    });

    it('deve buscar crediário por ID', async () => {
      const response = await request(app)
        .get(`/creditAccounts/${creditAccountId}`)
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(200);
      expect(response.body.id).toBe(creditAccountId);
      expect(response.body.customer_name).toBe('Cliente Teste Crediário');
      expect(response.body.total_debt).toBe(200);
    });

    it('deve retornar erro para crediário inexistente', async () => {
      const response = await request(app)
        .get('/creditAccounts/crediario-inexistente')
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(404);
      expect(response.body.error).toBe('Crediário não encontrado');
    });
  });

  describe('PUT /creditAccounts/:id', () => {
    beforeEach(async () => {
      // Criar crediário para teste
      const creditAccount = await prisma.credit_accounts.create({
        data: {
          user_id: userId,
          customer_name: 'Cliente Teste Crediário',
          customer_phone: '51999999999',
          customer_address: 'Rua Teste, 123',
          total_debt: 100.00,
          status: 'active'
        }
      });
      creditAccountId = creditAccount.id;
    });

    it('deve atualizar crediário', async () => {
      const updateData = {
        total_debt: 250.00,
        status: 'suspended'
      };

      const response = await request(app)
        .put(`/creditAccounts/${creditAccountId}`)
        .set('Authorization', `Bearer ${authToken}`)
        .send(updateData);

      expect(response.status).toBe(200);
      expect(response.body.total_debt).toBe(250);
      expect(response.body.status).toBe('suspended');
    });

    it('deve retornar erro para crediário inexistente', async () => {
      const updateData = {
        total_debt: 250.00
      };

      const response = await request(app)
        .put('/creditAccounts/crediario-inexistente')
        .set('Authorization', `Bearer ${authToken}`)
        .send(updateData);

      expect(response.status).toBe(404);
      expect(response.body.error).toBe('Crediário não encontrado');
    });
  });

  describe('DELETE /creditAccounts/:id', () => {
    beforeEach(async () => {
      // Criar crediário para teste
      const creditAccount = await prisma.credit_accounts.create({
        data: {
          user_id: userId,
          customer_name: 'Cliente Teste Crediário',
          customer_phone: '51999999999',
          customer_address: 'Rua Teste, 123',
          total_debt: 50.00,
          status: 'active'
        }
      });
      creditAccountId = creditAccount.id;
    });

    it('deve deletar crediário', async () => {
      const response = await request(app)
        .delete(`/creditAccounts/${creditAccountId}`)
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(200);
      expect(response.body.message).toBe('Crediário deletado com sucesso');

      // Verificar se foi realmente deletado
      const deletedAccount = await prisma.credit_accounts.findUnique({
        where: { id: creditAccountId }
      });
      expect(deletedAccount).toBeNull();
    });

    it('deve retornar erro para crediário inexistente', async () => {
      const response = await request(app)
        .delete('/creditAccounts/crediario-inexistente')
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(404);
      expect(response.body.error).toBe('Crediário não encontrado');
    });
  });

  describe('Transações de Crédito', () => {
    beforeEach(async () => {
      // Criar crediário para teste
      const creditAccount = await prisma.credit_accounts.create({
        data: {
          user_id: userId,
          customer_name: 'Cliente Teste Crediário',
          customer_phone: '51999999999',
          customer_address: 'Rua Teste, 123',
          total_debt: 100.00,
          status: 'active'
        }
      });
      creditAccountId = creditAccount.id;

      // Criar transações
      await prisma.credit_transactions.createMany({
        data: [
          {
            credit_account_id: creditAccountId,
            user_id: userId,
            type: 'debito',
            amount: 50.00,
            description: 'Compra 1'
          },
          {
            credit_account_id: creditAccountId,
            user_id: userId,
            type: 'pagamento',
            amount: 25.00,
            description: 'Pagamento 1'
          }
        ]
      });
    });

    it('deve incluir transações na listagem', async () => {
      const response = await request(app)
        .get(`/creditAccounts/${creditAccountId}`)
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(200);
      expect(response.body.credit_transactions).toHaveLength(2);
      
      const debito = response.body.credit_transactions.find((t: any) => t.type === 'debito');
      const pagamento = response.body.credit_transactions.find((t: any) => t.type === 'pagamento');
      
      expect(debito.amount).toBe(50);
      expect(pagamento.amount).toBe(25);
    });
  });
}); 