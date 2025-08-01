"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = require("../../src/index");
const prisma_1 = __importDefault(require("../../src/lib/prisma"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
describe('Customers Routes', () => {
    let authToken;
    let userId;
    let storeId;
    beforeAll(async () => {
        // Criar usuário de teste
        const user = await prisma_1.default.users.create({
            data: {
                id: '550e8400-e29b-41d4-a716-446655440001',
                email: 'test-customers@example.com',
                encrypted_password: 'hashedpassword'
            }
        });
        userId = user.id;
        authToken = jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET || 'test-secret');
        // Criar loja de teste
        const store = await prisma_1.default.stores.create({
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
        await prisma_1.default.orders.deleteMany({ where: { store_owner_id: userId } });
        await prisma_1.default.customers.deleteMany({ where: { store_owner_id: userId } });
        await prisma_1.default.stores.deleteMany({ where: { user_id: userId } });
        await prisma_1.default.users.deleteMany({ where: { id: userId } });
        await prisma_1.default.$disconnect();
    });
    beforeEach(async () => {
        // Limpar clientes antes de cada teste
        await prisma_1.default.orders.deleteMany({ where: { store_owner_id: userId } });
        await prisma_1.default.customers.deleteMany({ where: { store_owner_id: userId } });
    });
    describe('GET /customers', () => {
        it('deve listar todos os clientes', async () => {
            // Criar alguns clientes de teste
            await prisma_1.default.customers.createMany({
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
            const response = await (0, supertest_1.default)(index_1.app)
                .get('/customers')
                .set('Authorization', `Bearer ${authToken}`)
                .expect(200);
            expect(Array.isArray(response.body)).toBe(true);
            expect(response.body.length).toBeGreaterThanOrEqual(2);
            expect(response.body[0]).toHaveProperty('name');
            expect(response.body[0]).toHaveProperty('email');
        });
        it('deve retornar erro 401 sem autenticação', async () => {
            await (0, supertest_1.default)(index_1.app)
                .get('/customers')
                .expect(401);
        });
    });
    describe('GET /customers/:id', () => {
        it('deve buscar cliente por ID', async () => {
            const customer = await prisma_1.default.customers.create({
                data: {
                    name: 'Cliente Teste',
                    email: 'cliente-teste@test.com',
                    phone: '11777777777',
                    store_owner_id: userId
                }
            });
            const response = await (0, supertest_1.default)(index_1.app)
                .get(`/customers/${customer.id}`)
                .set('Authorization', `Bearer ${authToken}`)
                .expect(200);
            expect(response.body.id).toBe(customer.id);
            expect(response.body.name).toBe('Cliente Teste');
            expect(response.body.email).toBe('cliente-teste@test.com');
        });
        it('deve retornar 404 para cliente inexistente', async () => {
            await (0, supertest_1.default)(index_1.app)
                .get('/customers/non-existent-id')
                .set('Authorization', `Bearer ${authToken}`)
                .expect(404);
        });
        it('deve retornar erro 400 para ID inválido', async () => {
            await (0, supertest_1.default)(index_1.app)
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
            const response = await (0, supertest_1.default)(index_1.app)
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
            const response = await (0, supertest_1.default)(index_1.app)
                .post('/customers')
                .set('Authorization', `Bearer ${authToken}`)
                .send(invalidData)
                .expect(400);
            expect(response.body.error).toBe('Dados inválidos');
        });
        it('deve retornar erro 400 para email duplicado', async () => {
            // Criar primeiro cliente
            await prisma_1.default.customers.create({
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
            const response = await (0, supertest_1.default)(index_1.app)
                .post('/customers')
                .set('Authorization', `Bearer ${authToken}`)
                .send(duplicateData)
                .expect(400);
            expect(response.body.error).toBe('Email já está em uso');
        });
    });
    describe('PUT /customers/:id', () => {
        it('deve atualizar cliente existente', async () => {
            const customer = await prisma_1.default.customers.create({
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
            const response = await (0, supertest_1.default)(index_1.app)
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
            await (0, supertest_1.default)(index_1.app)
                .put('/customers/non-existent-id')
                .set('Authorization', `Bearer ${authToken}`)
                .send(updateData)
                .expect(404);
        });
        it('deve retornar erro 400 para dados inválidos', async () => {
            const customer = await prisma_1.default.customers.create({
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
            await (0, supertest_1.default)(index_1.app)
                .put(`/customers/${customer.id}`)
                .set('Authorization', `Bearer ${authToken}`)
                .send(invalidData)
                .expect(400);
        });
        it('deve retornar erro 401 sem autenticação', async () => {
            const customer = await prisma_1.default.customers.create({
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
            await (0, supertest_1.default)(index_1.app)
                .put(`/customers/${customer.id}`)
                .send(updateData)
                .expect(401);
        });
    });
    describe('DELETE /customers/:id', () => {
        it('deve deletar cliente existente', async () => {
            const customer = await prisma_1.default.customers.create({
                data: {
                    name: 'Cliente para Deletar',
                    email: 'para-deletar@test.com',
                    phone: '11999999997',
                    store_owner_id: userId
                }
            });
            await (0, supertest_1.default)(index_1.app)
                .delete(`/customers/${customer.id}`)
                .set('Authorization', `Bearer ${authToken}`)
                .expect(204);
            // Verificar se foi realmente deletada
            const deletedCustomer = await prisma_1.default.customers.findUnique({
                where: { id: customer.id }
            });
            expect(deletedCustomer).toBeNull();
        });
        it('deve retornar erro 404 para cliente inexistente', async () => {
            await (0, supertest_1.default)(index_1.app)
                .delete('/customers/non-existent-id')
                .set('Authorization', `Bearer ${authToken}`)
                .expect(404);
        });
        it('deve retornar erro 400 para ID inválido', async () => {
            await (0, supertest_1.default)(index_1.app)
                .delete('/customers/')
                .set('Authorization', `Bearer ${authToken}`)
                .expect(404);
        });
        it('deve retornar erro 401 sem autenticação', async () => {
            const customer = await prisma_1.default.customers.create({
                data: {
                    name: 'Cliente sem Auth Delete',
                    email: 'sem-auth-delete@test.com',
                    phone: '11999999996',
                    store_owner_id: userId
                }
            });
            await (0, supertest_1.default)(index_1.app)
                .delete(`/customers/${customer.id}`)
                .expect(401);
        });
    });
    describe('Relacionamentos', () => {
        it('deve incluir informações da loja', async () => {
            const customer = await prisma_1.default.customers.create({
                data: {
                    name: 'Cliente com Loja',
                    email: 'com-loja@test.com',
                    phone: '11999999995',
                    store_owner_id: userId,
                    store_id: storeId
                }
            });
            const response = await (0, supertest_1.default)(index_1.app)
                .get(`/customers/${customer.id}`)
                .set('Authorization', `Bearer ${authToken}`)
                .expect(200);
            expect(response.body.stores).toBeDefined();
            expect(response.body.stores.id).toBe(storeId);
            expect(response.body.stores.name).toBe('Test Store Customers');
        });
        it('deve incluir pedidos do cliente', async () => {
            const customer = await prisma_1.default.customers.create({
                data: {
                    name: 'Cliente com Pedidos',
                    email: 'com-pedidos@test.com',
                    phone: '11999999994',
                    store_owner_id: userId
                }
            });
            // Criar pedido para o cliente
            await prisma_1.default.orders.create({
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
            const response = await (0, supertest_1.default)(index_1.app)
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
            const response = await (0, supertest_1.default)(index_1.app)
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
            const response = await (0, supertest_1.default)(index_1.app)
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
            const response = await (0, supertest_1.default)(index_1.app)
                .post('/customers')
                .set('Authorization', `Bearer ${authToken}`)
                .send(invalidNameData)
                .expect(400);
            expect(response.body.error).toBe('Dados inválidos');
        });
    });
    describe('GET /customers/available-for-credit', () => {
        let customerWithCreditId;
        beforeEach(async () => {
            // Criar cliente que terá crediário
            const customerWithCredit = await prisma_1.default.customers.create({
                data: {
                    store_owner_id: userId,
                    name: 'Cliente Com Crediário',
                    phone: '51988888888',
                    email: 'com-credito@test.com',
                    address: 'Rua Com Crediário, 456'
                }
            });
            customerWithCreditId = customerWithCredit.id;
            // Criar crediário para este cliente
            await prisma_1.default.credit_accounts.create({
                data: {
                    customer_name: 'Cliente Com Crediário',
                    customer_phone: '51988888888',
                    customer_address: 'Rua Com Crediário, 456',
                    total_debt: 0,
                    status: 'active',
                    user_id: userId
                }
            });
        });
        it('deve listar apenas clientes disponíveis para crediário', async () => {
            const response = await (0, supertest_1.default)(index_1.app)
                .get('/customers/available-for-credit')
                .set('Authorization', `Bearer ${authToken}`);
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('available');
            expect(response.body).toHaveProperty('total');
            expect(response.body).toHaveProperty('message');
            // Deve incluir o cliente original (sem crediário)
            const availableCustomers = response.body.available;
            const originalCustomer = availableCustomers.find((c) => c.name === 'Cliente Teste');
            expect(originalCustomer).toBeDefined();
            // NÃO deve incluir o cliente que já tem crediário
            const customerWithCredit = availableCustomers.find((c) => c.id === customerWithCreditId);
            expect(customerWithCredit).toBeUndefined();
            // Verificar se a contagem está correta
            expect(response.body.total).toBe(availableCustomers.length);
            expect(response.body.message).toBe('Clientes disponíveis para criar crediário');
        });
        it('deve retornar lista vazia se todos os clientes tiverem crediário', async () => {
            // Criar crediário para o cliente original também
            await prisma_1.default.credit_accounts.create({
                data: {
                    customer_name: 'Cliente Teste',
                    customer_phone: '51999999999',
                    customer_address: 'Rua Teste, 123',
                    total_debt: 0,
                    status: 'active',
                    user_id: userId
                }
            });
            const response = await (0, supertest_1.default)(index_1.app)
                .get('/customers/available-for-credit')
                .set('Authorization', `Bearer ${authToken}`);
            expect(response.status).toBe(200);
            expect(response.body.available).toHaveLength(0);
            expect(response.body.total).toBe(0);
        });
        it('deve incluir clientes sem telefone na lista disponível', async () => {
            // Criar cliente sem telefone
            const customerWithoutPhone = await prisma_1.default.customers.create({
                data: {
                    store_owner_id: userId,
                    name: 'Cliente Sem Telefone',
                    email: 'sem-telefone@test.com',
                    address: 'Rua Sem Telefone, 789'
                }
            });
            const response = await (0, supertest_1.default)(index_1.app)
                .get('/customers/available-for-credit')
                .set('Authorization', `Bearer ${authToken}`);
            expect(response.status).toBe(200);
            const availableCustomers = response.body.available;
            const customerWithoutPhoneInList = availableCustomers.find((c) => c.id === customerWithoutPhone.id);
            expect(customerWithoutPhoneInList).toBeDefined();
            expect(customerWithoutPhoneInList.name).toBe('Cliente Sem Telefone');
            expect(customerWithoutPhoneInList.phone).toBeNull();
        });
        it('deve retornar 401 sem token de autenticação', async () => {
            const response = await (0, supertest_1.default)(index_1.app)
                .get('/customers/available-for-credit');
            expect(response.status).toBe(401);
        });
        it('deve retornar apenas clientes do usuário logado', async () => {
            // Criar outro usuário
            const otherUser = await prisma_1.default.users.create({
                data: {
                    id: '550e8400-e29b-41d4-a716-446655440002',
                    email: 'other-user@test.com',
                    encrypted_password: 'hashedpassword'
                }
            });
            // Criar cliente para outro usuário
            await prisma_1.default.customers.create({
                data: {
                    store_owner_id: otherUser.id,
                    name: 'Cliente Outro Usuário',
                    phone: '51977777777',
                    email: 'outro-usuario@test.com'
                }
            });
            const response = await (0, supertest_1.default)(index_1.app)
                .get('/customers/available-for-credit')
                .set('Authorization', `Bearer ${authToken}`);
            expect(response.status).toBe(200);
            const availableCustomers = response.body.available;
            const otherUserCustomer = availableCustomers.find((c) => c.name === 'Cliente Outro Usuário');
            expect(otherUserCustomer).toBeUndefined();
        });
    });
});
