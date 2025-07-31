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
    await prisma.customers.deleteMany({ where: { id: customerId } });
    await prisma.users.deleteMany({ where: { id: userId } });
    await prisma.$disconnect();
  });

  beforeEach(async () => {
    // Limpar crediários antes de cada teste
    await prisma.credit_transactions.deleteMany({});
    await prisma.credit_accounts.deleteMany({});
  });

  describe('GET /creditAccounts/customer/:customerId', () => {
    it('deve buscar informações do cliente para criar crediário', async () => {
      const response = await request(app)
        .get(`/creditAccounts/customer/${customerId}`)
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('customer');
      expect(response.body.customer.id).toBe(customerId);
      expect(response.body.customer.name).toBe('Cliente Teste Crediário');
      expect(response.body.customer.phone).toBe('51999999999');
      expect(response.body.hasCreditAccount).toBe(false);
      expect(response.body.existingCreditAccount).toBeNull();
    });

    it('deve retornar 404 para cliente inexistente', async () => {
      const response = await request(app)
        .get('/creditAccounts/customer/cliente-inexistente')
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(404);
      expect(response.body.error).toBe('Cliente não encontrado');
    });

    it('deve retornar 401 sem token de autenticação', async () => {
      const response = await request(app)
        .get(`/creditAccounts/customer/${customerId}`);

      expect(response.status).toBe(401);
    });
  });

  describe('POST /creditAccounts', () => {
    it('deve criar crediário com cliente válido', async () => {
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
      expect(response.body).toHaveProperty('id');
      expect(response.body.customer_id).toBe(customerId);
      expect(response.body.customer_name).toBe('Cliente Teste Crediário');
      expect(response.body.customer_phone).toBe('51999999999');
      expect(response.body.total_debt).toBe(0);
      expect(response.body.status).toBe('active');

      creditAccountId = response.body.id;
    });

    it('deve retornar erro se cliente não existir', async () => {
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
          customer_id: customerId,
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
          customer_id: customerId,
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
      expect(creditAccount.customer_id).toBe(customerId);
      expect(creditAccount.customer_name).toBe('Cliente Teste Crediário');
      expect(creditAccount.total_debt).toBe(150.5);
      expect(creditAccount.customers).toBeDefined();
      expect(creditAccount.customers.id).toBe(customerId);
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
          customer_id: customerId,
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
      expect(response.body.customer_id).toBe(customerId);
      expect(response.body.customer_name).toBe('Cliente Teste Crediário');
      expect(response.body.total_debt).toBe(200);
    });

    it('deve retornar 404 para crediário inexistente', async () => {
      const response = await request(app)
        .get('/creditAccounts/crediario-inexistente')
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(404);
      expect(response.body.error).toBe('Conta de crédito não encontrada');
    });
  });

  describe('PUT /creditAccounts/:id', () => {
    beforeEach(async () => {
      // Criar crediário para teste
      const creditAccount = await prisma.credit_accounts.create({
        data: {
          customer_id: customerId,
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
        status: 'pending'
      };

      const response = await request(app)
        .put(`/creditAccounts/${creditAccountId}`)
        .set('Authorization', `Bearer ${authToken}`)
        .send(updateData);

      expect(response.status).toBe(200);
      expect(response.body.id).toBe(creditAccountId);
      expect(response.body.total_debt).toBe(250);
      expect(response.body.status).toBe('pending');
    });

    it('deve retornar 404 para crediário inexistente', async () => {
      const updateData = { total_debt: 250.00 };

      const response = await request(app)
        .put('/creditAccounts/crediario-inexistente')
        .set('Authorization', `Bearer ${authToken}`)
        .send(updateData);

      expect(response.status).toBe(404);
      expect(response.body.error).toBe('Conta de crédito não encontrada');
    });
  });

  describe('DELETE /creditAccounts/:id', () => {
    beforeEach(async () => {
      // Criar crediário para teste
      const creditAccount = await prisma.credit_accounts.create({
        data: {
          customer_id: customerId,
          customer_name: 'Cliente Teste Crediário',
          customer_phone: '51999999999',
          customer_address: 'Rua Teste, 123',
          total_debt: 0, // Sem dívidas para permitir exclusão
          status: 'active'
        }
      });
      creditAccountId = creditAccount.id;
    });

    it('deve deletar crediário sem dívidas', async () => {
      const response = await request(app)
        .delete(`/creditAccounts/${creditAccountId}`)
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(204);
    });

    it('deve retornar erro se crediário tiver dívidas', async () => {
      // Criar crediário com dívidas
      const creditAccountWithDebt = await prisma.credit_accounts.create({
        data: {
          customer_id: customerId,
          customer_name: 'Cliente Com Dívida',
          customer_phone: '51988888888',
          customer_address: 'Rua Teste, 456',
          total_debt: 150.00, // Com dívidas
          status: 'active'
        }
      });

      const response = await request(app)
        .delete(`/creditAccounts/${creditAccountWithDebt.id}`)
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(400);
      expect(response.body.error).toBe('Não é possível deletar cliente com dívidas pendentes');
    });

    it('deve retornar 404 para crediário inexistente', async () => {
      const response = await request(app)
        .delete('/creditAccounts/crediario-inexistente')
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(404);
      expect(response.body.error).toBe('Conta de crédito não encontrada');
    });
  });

  describe('GET /creditAccounts/:id/transactions', () => {
    beforeEach(async () => {
      // Criar crediário e transações para teste
      const creditAccount = await prisma.credit_accounts.create({
        data: {
          customer_id: customerId,
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

    it('deve listar transações do crediário', async () => {
      const response = await request(app)
        .get(`/creditAccounts/${creditAccountId}/transactions`)
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(2);
      
      const transactions = response.body;
      expect(transactions[0].credit_account_id).toBe(creditAccountId);
      expect(transactions[0].amount).toBe(50);
      expect(transactions[1].amount).toBe(25);
    });

    it('deve retornar 404 para crediário inexistente', async () => {
      const response = await request(app)
        .get('/creditAccounts/crediario-inexistente/transactions')
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(404);
      expect(response.body.error).toBe('Conta de crédito não encontrada');
    });
  });
}); 