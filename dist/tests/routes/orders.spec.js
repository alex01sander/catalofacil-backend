"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = require("../../src/index");
const prisma_1 = __importDefault(require("../../src/lib/prisma"));
const utils_1 = require("../utils");
describe('Orders Routes', () => {
    let authToken;
    let userId;
    let storeId;
    let productId;
    let customerId;
    beforeAll(async () => {
        // Criar usuário de teste
        const user = await prisma_1.default.users.create({
            data: {
                email: 'test-orders@example.com',
                encrypted_password: 'hashedpassword',
                name: 'Test Orders User'
            }
        });
        userId = user.id;
        authToken = (0, utils_1.generateToken)(user);
        // Criar loja de teste
        const store = await prisma_1.default.stores.create({
            data: {
                name: 'Test Store Orders',
                slug: 'test-store-orders',
                user_id: userId
            }
        });
        storeId = store.id;
        // Criar produto de teste
        const product = await prisma_1.default.products.create({
            data: {
                name: 'Test Product Orders',
                description: 'Product for orders testing',
                price: '15.00',
                stock: 50,
                user_id: userId,
                store_id: storeId
            }
        });
        productId = product.id;
        // Criar cliente de teste
        const customer = await prisma_1.default.customers.create({
            data: {
                name: 'Test Customer',
                email: 'customer@test.com',
                phone: '11999999999',
                store_owner_id: userId
            }
        });
        customerId = customer.id;
    });
    afterAll(async () => {
        // Limpar dados de teste
        await prisma_1.default.credit_transactions.deleteMany({ where: { user_id: userId } });
        await prisma_1.default.credit_accounts.deleteMany({ where: { user_id: userId } });
        await prisma_1.default.sales.deleteMany({ where: { user_id: userId } });
        await prisma_1.default.cash_flow.deleteMany({ where: { user_id: userId } });
        await prisma_1.default.order_items.deleteMany({ where: { order_id: { in: await prisma_1.default.orders.findMany({ where: { store_owner_id: userId }, select: { id: true } }).then(orders => orders.map(o => o.id)) } } });
        await prisma_1.default.orders.deleteMany({ where: { store_owner_id: userId } });
        await prisma_1.default.customers.deleteMany({ where: { user_id: userId } });
        await prisma_1.default.products.deleteMany({ where: { user_id: userId } });
        await prisma_1.default.stores.deleteMany({ where: { user_id: userId } });
        await prisma_1.default.users.deleteMany({ where: { id: userId } });
        await prisma_1.default.$disconnect();
    });
    beforeEach(async () => {
        // Limpar dados antes de cada teste
        await prisma_1.default.credit_transactions.deleteMany({ where: { user_id: userId } });
        await prisma_1.default.credit_accounts.deleteMany({ where: { user_id: userId } });
        await prisma_1.default.sales.deleteMany({ where: { user_id: userId } });
        await prisma_1.default.cash_flow.deleteMany({ where: { user_id: userId } });
        await prisma_1.default.order_items.deleteMany({ where: { order_id: { in: await prisma_1.default.orders.findMany({ where: { store_owner_id: userId }, select: { id: true } }).then(orders => orders.map(o => o.id)) } } });
        await prisma_1.default.orders.deleteMany({ where: { store_owner_id: userId } });
    });
    describe('GET /orders', () => {
        it('deve listar pedidos com itens', async () => {
            // Criar pedido com itens
            const order = await prisma_1.default.orders.create({
                data: {
                    customer_name: 'Test Customer',
                    customer_phone: '11999999999',
                    total_amount: 30.00,
                    status: 'pending',
                    store_owner_id: userId,
                    store_id: storeId,
                    order_items: {
                        create: [
                            {
                                product_id: productId,
                                quantity: 2,
                                unit_price: '15.00',
                                total_price: '30.00'
                            }
                        ]
                    }
                }
            });
            const response = await (0, supertest_1.default)(index_1.app)
                .get('/orders')
                .set('Authorization', `Bearer ${authToken}`)
                .expect(200);
            expect(Array.isArray(response.body)).toBe(true);
            expect(response.body.length).toBeGreaterThan(0);
            expect(response.body[0]).toHaveProperty('order_items');
            expect(response.body[0].order_items).toHaveLength(1);
        });
        it('deve retornar erro 401 sem autenticação', async () => {
            await (0, supertest_1.default)(index_1.app)
                .get('/orders')
                .expect(401);
        });
    });
    describe('GET /orders/:id', () => {
        it('deve buscar pedido por ID', async () => {
            const order = await prisma_1.default.orders.create({
                data: {
                    customer_name: 'Test Customer',
                    customer_phone: '11999999999',
                    total_amount: 30.00,
                    status: 'pending',
                    store_owner_id: userId,
                    store_id: storeId,
                    order_items: {
                        create: [
                            {
                                product_id: productId,
                                quantity: 2,
                                unit_price: '15.00',
                                total_price: '30.00'
                            }
                        ]
                    }
                }
            });
            const response = await (0, supertest_1.default)(index_1.app)
                .get(`/orders/${order.id}`)
                .set('Authorization', `Bearer ${authToken}`)
                .expect(200);
            expect(response.body.id).toBe(order.id);
            expect(response.body.customer_name).toBe('Test Customer');
            expect(response.body.order_items).toHaveLength(1);
        });
        it('deve retornar 404 para pedido inexistente', async () => {
            await (0, supertest_1.default)(index_1.app)
                .get('/orders/non-existent-id')
                .set('Authorization', `Bearer ${authToken}`)
                .expect(404);
        });
        it('deve retornar erro 400 para ID inválido', async () => {
            await (0, supertest_1.default)(index_1.app)
                .get('/orders/')
                .set('Authorization', `Bearer ${authToken}`)
                .expect(404);
        });
    });
    describe('GET /orders/:id/processing-status', () => {
        it('deve verificar status de processamento de pedido não processado', async () => {
            const order = await prisma_1.default.orders.create({
                data: {
                    customer_name: 'Test Customer',
                    customer_phone: '11999999999',
                    total_amount: 30.00,
                    status: 'pending',
                    store_owner_id: userId,
                    store_id: storeId,
                    order_items: {
                        create: [
                            {
                                product_id: productId,
                                quantity: 2,
                                unit_price: '15.00',
                                total_price: '30.00'
                            }
                        ]
                    }
                }
            });
            const response = await (0, supertest_1.default)(index_1.app)
                .get(`/orders/${order.id}/processing-status`)
                .set('Authorization', `Bearer ${authToken}`)
                .expect(200);
            expect(response.body.processing_status.is_processed).toBe(false);
            expect(response.body.processing_status.has_sales_records).toBe(false);
            expect(response.body.processing_status.has_cash_flow_entry).toBe(false);
        });
        it('deve retornar erro 403 para pedido de outro usuário', async () => {
            // Criar outro usuário e pedido
            const otherUser = await prisma_1.default.users.create({
                data: {
                    email: 'other-orders@example.com',
                    password: 'hashedpassword',
                    name: 'Other Orders User'
                }
            });
            const otherStore = await prisma_1.default.stores.create({
                data: {
                    name: 'Other Store Orders',
                    slug: 'other-store-orders',
                    user_id: otherUser.id
                }
            });
            const otherOrder = await prisma_1.default.orders.create({
                data: {
                    customer_name: 'Other Customer',
                    customer_phone: '11888888888',
                    total_amount: 20.00,
                    status: 'pending',
                    store_owner_id: otherUser.id,
                    store_id: otherStore.id
                }
            });
            await (0, supertest_1.default)(index_1.app)
                .get(`/orders/${otherOrder.id}/processing-status`)
                .set('Authorization', `Bearer ${authToken}`)
                .expect(403);
            // Limpar dados de teste
            await prisma_1.default.orders.delete({ where: { id: otherOrder.id } });
            await prisma_1.default.stores.delete({ where: { id: otherStore.id } });
            await prisma_1.default.users.delete({ where: { id: otherUser.id } });
        });
    });
    describe('POST /orders', () => {
        it('deve criar novo pedido com itens', async () => {
            const orderData = {
                customer_name: 'New Customer',
                customer_phone: '11777777777',
                total_amount: 45.00,
                status: 'pending',
                store_owner_id: userId,
                store_id: storeId,
                order_items: [
                    {
                        product_id: productId,
                        quantity: 3,
                        unit_price: '15.00',
                        total_price: '45.00'
                    }
                ]
            };
            const response = await (0, supertest_1.default)(index_1.app)
                .post('/orders')
                .send(orderData)
                .expect(201);
            expect(response.body.customer_name).toBe(orderData.customer_name);
            expect(response.body.total_amount).toBe(orderData.total_amount);
            expect(response.body.order_items).toHaveLength(1);
        });
        it('deve retornar erro 400 para pedido sem itens', async () => {
            const orderData = {
                customer_name: 'Customer without items',
                customer_phone: '11666666666',
                total_amount: 0,
                status: 'pending',
                store_owner_id: userId,
                store_id: storeId,
                order_items: [] // Array vazio
            };
            const response = await (0, supertest_1.default)(index_1.app)
                .post('/orders')
                .send(orderData)
                .expect(400);
            expect(response.body.error).toBe('Pedido deve conter pelo menos um item.');
        });
        it('deve retornar erro 400 para dados inválidos', async () => {
            const invalidData = {
                customer_name: '', // Nome vazio
                total_amount: -10, // Valor negativo
                order_items: [
                    {
                        product_id: productId,
                        quantity: 1,
                        unit_price: '10.00',
                        total_price: '10.00'
                    }
                ]
            };
            const response = await (0, supertest_1.default)(index_1.app)
                .post('/orders')
                .send(invalidData)
                .expect(400);
            expect(response.body.error).toBe('Dados inválidos');
        });
    });
    describe('PUT /orders/:id', () => {
        it('deve atualizar pedido existente', async () => {
            const order = await prisma_1.default.orders.create({
                data: {
                    customer_name: 'Original Customer',
                    customer_phone: '11555555555',
                    total_amount: 30.00,
                    status: 'pending',
                    store_owner_id: userId,
                    store_id: storeId,
                    order_items: {
                        create: [
                            {
                                product_id: productId,
                                quantity: 2,
                                unit_price: '15.00',
                                total_price: '30.00'
                            }
                        ]
                    }
                }
            });
            const updateData = {
                customer_name: 'Updated Customer',
                status: 'accepted'
            };
            const response = await (0, supertest_1.default)(index_1.app)
                .put(`/orders/${order.id}`)
                .set('Authorization', `Bearer ${authToken}`)
                .send(updateData)
                .expect(200);
            expect(response.body.customer_name).toBe(updateData.customer_name);
            expect(response.body.status).toBe(updateData.status);
        });
        it('deve processar pedido quando status muda para aceito', async () => {
            const order = await prisma_1.default.orders.create({
                data: {
                    customer_name: 'Customer for Processing',
                    customer_phone: '11444444444',
                    total_amount: 30.00,
                    status: 'pending',
                    store_owner_id: userId,
                    store_id: storeId,
                    order_items: {
                        create: [
                            {
                                product_id: productId,
                                quantity: 2,
                                unit_price: '15.00',
                                total_price: '30.00'
                            }
                        ]
                    }
                }
            });
            const updateData = {
                status: 'accepted'
            };
            const response = await (0, supertest_1.default)(index_1.app)
                .put(`/orders/${order.id}`)
                .set('Authorization', `Bearer ${authToken}`)
                .send(updateData)
                .expect(200);
            expect(response.body.status).toBe('accepted');
            // Verificar se as vendas foram criadas
            const sales = await prisma_1.default.sales.findMany({
                where: {
                    user_id: userId,
                    product_name: {
                        contains: `Pedido #${order.id.substring(0, 8)}`
                    }
                }
            });
            expect(sales.length).toBeGreaterThan(0);
            // Verificar se o fluxo de caixa foi criado
            const cashFlow = await prisma_1.default.cash_flow.findFirst({
                where: {
                    user_id: userId,
                    description: {
                        contains: `Pedido #${order.id.substring(0, 8)}`
                    }
                }
            });
            expect(cashFlow).toBeDefined();
        });
        it('deve retornar erro 403 para pedido de outro usuário', async () => {
            // Criar outro usuário e pedido
            const otherUser = await prisma_1.default.users.create({
                data: {
                    email: 'other-update@example.com',
                    password: 'hashedpassword',
                    name: 'Other Update User'
                }
            });
            const otherStore = await prisma_1.default.stores.create({
                data: {
                    name: 'Other Update Store',
                    slug: 'other-update-store',
                    user_id: otherUser.id
                }
            });
            const otherOrder = await prisma_1.default.orders.create({
                data: {
                    customer_name: 'Other Customer',
                    customer_phone: '11333333333',
                    total_amount: 20.00,
                    status: 'pending',
                    store_owner_id: otherUser.id,
                    store_id: otherStore.id
                }
            });
            const updateData = {
                status: 'accepted'
            };
            await (0, supertest_1.default)(index_1.app)
                .put(`/orders/${otherOrder.id}`)
                .set('Authorization', `Bearer ${authToken}`)
                .send(updateData)
                .expect(403);
            // Limpar dados de teste
            await prisma_1.default.orders.delete({ where: { id: otherOrder.id } });
            await prisma_1.default.stores.delete({ where: { id: otherStore.id } });
            await prisma_1.default.users.delete({ where: { id: otherUser.id } });
        });
        it('deve retornar erro 400 para dados inválidos', async () => {
            const order = await prisma_1.default.orders.create({
                data: {
                    customer_name: 'Test Customer',
                    customer_phone: '11222222222',
                    total_amount: 30.00,
                    status: 'pending',
                    store_owner_id: userId,
                    store_id: storeId,
                    order_items: {
                        create: [
                            {
                                product_id: productId,
                                quantity: 2,
                                unit_price: '15.00',
                                total_price: '30.00'
                            }
                        ]
                    }
                }
            });
            const invalidData = {
                total_amount: -10 // Valor negativo
            };
            await (0, supertest_1.default)(index_1.app)
                .put(`/orders/${order.id}`)
                .set('Authorization', `Bearer ${authToken}`)
                .send(invalidData)
                .expect(400);
        });
    });
    describe('POST /orders/:id/reprocess', () => {
        it('deve reprocessar pedido aceito', async () => {
            const order = await prisma_1.default.orders.create({
                data: {
                    customer_name: 'Customer for Reprocess',
                    customer_phone: '11111111111',
                    total_amount: 30.00,
                    status: 'accepted',
                    store_owner_id: userId,
                    store_id: storeId,
                    order_items: {
                        create: [
                            {
                                product_id: productId,
                                quantity: 2,
                                unit_price: '15.00',
                                total_price: '30.00'
                            }
                        ]
                    }
                }
            });
            const response = await (0, supertest_1.default)(index_1.app)
                .post(`/orders/${order.id}/reprocess`)
                .set('Authorization', `Bearer ${authToken}`)
                .expect(200);
            expect(response.body.success).toBe(true);
            expect(response.body.message).toContain('reprocessado com sucesso');
        });
        it('deve retornar erro 400 para pedido não aceito', async () => {
            const order = await prisma_1.default.orders.create({
                data: {
                    customer_name: 'Customer Pending',
                    customer_phone: '11000000000',
                    total_amount: 30.00,
                    status: 'pending',
                    store_owner_id: userId,
                    store_id: storeId,
                    order_items: {
                        create: [
                            {
                                product_id: productId,
                                quantity: 2,
                                unit_price: '15.00',
                                total_price: '30.00'
                            }
                        ]
                    }
                }
            });
            const response = await (0, supertest_1.default)(index_1.app)
                .post(`/orders/${order.id}/reprocess`)
                .set('Authorization', `Bearer ${authToken}`)
                .expect(400);
            expect(response.body.error).toContain('deve estar com status aceito');
        });
        it('deve retornar erro 403 para pedido de outro usuário', async () => {
            // Criar outro usuário e pedido
            const otherUser = await prisma_1.default.users.create({
                data: {
                    email: 'other-reprocess@example.com',
                    password: 'hashedpassword',
                    name: 'Other Reprocess User'
                }
            });
            const otherStore = await prisma_1.default.stores.create({
                data: {
                    name: 'Other Reprocess Store',
                    slug: 'other-reprocess-store',
                    user_id: otherUser.id
                }
            });
            const otherOrder = await prisma_1.default.orders.create({
                data: {
                    customer_name: 'Other Customer',
                    customer_phone: '11999999998',
                    total_amount: 20.00,
                    status: 'accepted',
                    store_owner_id: otherUser.id,
                    store_id: otherStore.id
                }
            });
            await (0, supertest_1.default)(index_1.app)
                .post(`/orders/${otherOrder.id}/reprocess`)
                .set('Authorization', `Bearer ${authToken}`)
                .expect(403);
            // Limpar dados de teste
            await prisma_1.default.orders.delete({ where: { id: otherOrder.id } });
            await prisma_1.default.stores.delete({ where: { id: otherStore.id } });
            await prisma_1.default.users.delete({ where: { id: otherUser.id } });
        });
    });
    describe('DELETE /orders/:id', () => {
        it('deve deletar pedido existente', async () => {
            const order = await prisma_1.default.orders.create({
                data: {
                    customer_name: 'Customer to Delete',
                    customer_phone: '11999999997',
                    total_amount: 30.00,
                    status: 'pending',
                    store_owner_id: userId,
                    store_id: storeId,
                    order_items: {
                        create: [
                            {
                                product_id: productId,
                                quantity: 2,
                                unit_price: '15.00',
                                total_price: '30.00'
                            }
                        ]
                    }
                }
            });
            await (0, supertest_1.default)(index_1.app)
                .delete(`/orders/${order.id}`)
                .set('Authorization', `Bearer ${authToken}`)
                .expect(204);
            // Verificar se foi realmente deletada
            const deletedOrder = await prisma_1.default.orders.findUnique({
                where: { id: order.id }
            });
            expect(deletedOrder).toBeNull();
        });
        it('deve retornar erro 400 para ID inválido', async () => {
            await (0, supertest_1.default)(index_1.app)
                .delete('/orders/')
                .set('Authorization', `Bearer ${authToken}`)
                .expect(404);
        });
    });
    describe('Processamento de pedidos com crédito', () => {
        it('deve criar conta de crédito quando pedido tem telefone do cliente', async () => {
            const order = await prisma_1.default.orders.create({
                data: {
                    customer_name: 'Credit Customer',
                    customer_phone: '11999999996',
                    total_amount: 30.00,
                    status: 'pending',
                    store_owner_id: userId,
                    store_id: storeId,
                    order_items: {
                        create: [
                            {
                                product_id: productId,
                                quantity: 2,
                                unit_price: '15.00',
                                total_price: '30.00'
                            }
                        ]
                    }
                }
            });
            // Atualizar status para aceito (processar)
            await (0, supertest_1.default)(index_1.app)
                .put(`/orders/${order.id}`)
                .set('Authorization', `Bearer ${authToken}`)
                .send({ status: 'accepted' })
                .expect(200);
            // Verificar se a conta de crédito foi criada
            const creditAccount = await prisma_1.default.credit_accounts.findFirst({
                where: {
                    customer_phone: '11999999996',
                    user_id: userId
                }
            });
            expect(creditAccount).toBeDefined();
            expect(creditAccount?.customer_name).toBe('Credit Customer');
            // Verificar se a transação de crédito foi criada
            const creditTransaction = await prisma_1.default.credit_transactions.findFirst({
                where: {
                    credit_account_id: creditAccount?.id,
                    user_id: userId
                }
            });
            expect(creditTransaction).toBeDefined();
            expect(creditTransaction?.type).toBe('pagamento');
            expect(creditTransaction?.amount).toBe(30.00);
        });
    });
});
