"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = require("../../src/index");
const prisma_1 = __importDefault(require("../../src/lib/prisma"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
describe('Sales Routes', () => {
    let authToken;
    let userId;
    let productId;
    let saleId;
    beforeAll(async () => {
        // Criar usuário de teste
        const user = await prisma_1.default.users.create({
            data: {
                id: '550e8400-e29b-41d4-a716-446655440005',
                email: 'test-sales@example.com',
                encrypted_password: 'hashedpassword'
            }
        });
        userId = user.id;
        authToken = jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET || 'test-secret');
        // Criar produto de teste
        const product = await prisma_1.default.products.create({
            data: {
                user_id: userId,
                name: 'Produto Teste Sales',
                description: 'Produto para teste de vendas',
                price: 10.50,
                stock: 20
            }
        });
        productId = product.id;
    });
    afterAll(async () => {
        // Limpar dados de teste
        await prisma_1.default.sales.deleteMany({ where: { user_id: userId } });
        await prisma_1.default.products.deleteMany({ where: { user_id: userId } });
        await prisma_1.default.users.deleteMany({ where: { id: userId } });
        await prisma_1.default.$disconnect();
    });
    describe('GET /sales', () => {
        beforeEach(async () => {
            // Criar vendas de teste
            await prisma_1.default.sales.createMany({
                data: [
                    {
                        user_id: userId,
                        product_name: 'Produto 1',
                        quantity: 2,
                        unit_price: 10.00,
                        total_price: 20.00,
                        sale_date: new Date(),
                        status: 'completed'
                    },
                    {
                        user_id: userId,
                        product_name: 'Produto 2',
                        quantity: 1,
                        unit_price: 15.00,
                        total_price: 15.00,
                        sale_date: new Date(),
                        status: 'completed'
                    }
                ]
            });
        });
        afterEach(async () => {
            await prisma_1.default.sales.deleteMany({ where: { user_id: userId } });
        });
        it('deve listar vendas do usuário', async () => {
            const response = await (0, supertest_1.default)(index_1.app)
                .get('/sales')
                .set('Authorization', `Bearer ${authToken}`);
            expect(response.status).toBe(200);
            expect(Array.isArray(response.body)).toBe(true);
            expect(response.body.length).toBe(2);
            expect(response.body[0].user_id).toBe(userId);
        });
        it('deve filtrar por período', async () => {
            const startDate = new Date();
            startDate.setDate(startDate.getDate() - 7);
            const endDate = new Date();
            const response = await (0, supertest_1.default)(index_1.app)
                .get(`/sales?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}`)
                .set('Authorization', `Bearer ${authToken}`);
            expect(response.status).toBe(200);
            expect(Array.isArray(response.body)).toBe(true);
        });
        it('deve filtrar por status', async () => {
            const response = await (0, supertest_1.default)(index_1.app)
                .get('/sales?status=completed')
                .set('Authorization', `Bearer ${authToken}`);
            expect(response.status).toBe(200);
            expect(Array.isArray(response.body)).toBe(true);
            response.body.forEach((sale) => {
                expect(sale.status).toBe('completed');
            });
        });
    });
    describe('POST /sales', () => {
        it('deve criar nova venda', async () => {
            const saleData = {
                product_name: 'Produto Teste',
                quantity: 2,
                unit_price: 10.00,
                total_price: 20.00,
                sale_date: new Date().toISOString().split('T')[0],
                status: 'completed'
            };
            const response = await (0, supertest_1.default)(index_1.app)
                .post('/sales')
                .set('Authorization', `Bearer ${authToken}`)
                .send(saleData);
            expect(response.status).toBe(201);
            expect(response.body.product_name).toBe('Produto Teste');
            expect(response.body.quantity).toBe(2);
            expect(response.body.total_price).toBe(20);
            expect(response.body.user_id).toBe(userId);
        });
        it('deve retornar erro para dados inválidos', async () => {
            const saleData = {
                product_name: '',
                quantity: -1,
                unit_price: 0,
                total_price: 0
            };
            const response = await (0, supertest_1.default)(index_1.app)
                .post('/sales')
                .set('Authorization', `Bearer ${authToken}`)
                .send(saleData);
            expect(response.status).toBe(400);
            expect(response.body.error).toBe('Dados inválidos');
        });
        it('deve criar venda com status padrão', async () => {
            const saleData = {
                product_name: 'Produto Sem Status',
                quantity: 1,
                unit_price: 10.00,
                total_price: 10.00,
                sale_date: new Date().toISOString().split('T')[0]
            };
            const response = await (0, supertest_1.default)(index_1.app)
                .post('/sales')
                .set('Authorization', `Bearer ${authToken}`)
                .send(saleData);
            expect(response.status).toBe(201);
            expect(response.body.status).toBe('completed'); // Status padrão
        });
    });
    describe('GET /sales/:id', () => {
        beforeEach(async () => {
            // Criar venda de teste
            const sale = await prisma_1.default.sales.create({
                data: {
                    user_id: userId,
                    product_name: 'Produto Teste Sales',
                    quantity: 2,
                    unit_price: 10.00,
                    total_price: 20.00,
                    sale_date: new Date(),
                    status: 'completed'
                }
            });
            saleId = sale.id;
        });
        afterEach(async () => {
            await prisma_1.default.sales.deleteMany({ where: { user_id: userId } });
        });
        it('deve buscar venda por ID', async () => {
            const response = await (0, supertest_1.default)(index_1.app)
                .get(`/sales/${saleId}`)
                .set('Authorization', `Bearer ${authToken}`);
            expect(response.status).toBe(200);
            expect(response.body.id).toBe(saleId);
            expect(response.body.product_name).toBe('Produto Teste Sales');
            expect(response.body.total_price).toBe(20);
        });
        it('deve retornar erro para venda inexistente', async () => {
            const response = await (0, supertest_1.default)(index_1.app)
                .get('/sales/venda-inexistente')
                .set('Authorization', `Bearer ${authToken}`);
            expect(response.status).toBe(404);
            expect(response.body.error).toBe('Venda não encontrada');
        });
    });
    describe('PUT /sales/:id', () => {
        beforeEach(async () => {
            // Criar venda de teste
            const sale = await prisma_1.default.sales.create({
                data: {
                    user_id: userId,
                    product_name: 'Produto Teste Sales',
                    quantity: 2,
                    unit_price: 10.00,
                    total_price: 20.00,
                    sale_date: new Date(),
                    status: 'completed'
                }
            });
            saleId = sale.id;
        });
        afterEach(async () => {
            await prisma_1.default.sales.deleteMany({ where: { user_id: userId } });
        });
        it('deve atualizar venda', async () => {
            const updateData = {
                quantity: 3,
                total_price: 30.00,
                status: 'cancelled'
            };
            const response = await (0, supertest_1.default)(index_1.app)
                .put(`/sales/${saleId}`)
                .set('Authorization', `Bearer ${authToken}`)
                .send(updateData);
            expect(response.status).toBe(200);
            expect(response.body.quantity).toBe(3);
            expect(response.body.total_price).toBe(30);
            expect(response.body.status).toBe('cancelled');
        });
        it('deve retornar erro para venda inexistente', async () => {
            const updateData = {
                status: 'cancelled'
            };
            const response = await (0, supertest_1.default)(index_1.app)
                .put('/sales/venda-inexistente')
                .set('Authorization', `Bearer ${authToken}`)
                .send(updateData);
            expect(response.status).toBe(404);
            expect(response.body.error).toBe('Venda não encontrada');
        });
    });
    describe('DELETE /sales/:id', () => {
        beforeEach(async () => {
            // Criar venda de teste
            const sale = await prisma_1.default.sales.create({
                data: {
                    user_id: userId,
                    product_name: 'Produto Teste Sales',
                    quantity: 2,
                    unit_price: 10.00,
                    total_price: 20.00,
                    sale_date: new Date(),
                    status: 'completed'
                }
            });
            saleId = sale.id;
        });
        it('deve deletar venda', async () => {
            const response = await (0, supertest_1.default)(index_1.app)
                .delete(`/sales/${saleId}`)
                .set('Authorization', `Bearer ${authToken}`);
            expect(response.status).toBe(200);
            expect(response.body.message).toBe('Venda deletada com sucesso');
            // Verificar se foi realmente deletada
            const deletedSale = await prisma_1.default.sales.findUnique({
                where: { id: saleId }
            });
            expect(deletedSale).toBeNull();
        });
        it('deve retornar erro para venda inexistente', async () => {
            const response = await (0, supertest_1.default)(index_1.app)
                .delete('/sales/venda-inexistente')
                .set('Authorization', `Bearer ${authToken}`);
            expect(response.status).toBe(404);
            expect(response.body.error).toBe('Venda não encontrada');
        });
    });
    describe('GET /sales/summary', () => {
        beforeEach(async () => {
            // Criar vendas de teste com diferentes valores
            await prisma_1.default.sales.createMany({
                data: [
                    {
                        user_id: userId,
                        product_name: 'Produto 1',
                        quantity: 2,
                        unit_price: 10.00,
                        total_price: 20.00,
                        sale_date: new Date(),
                        status: 'completed'
                    },
                    {
                        user_id: userId,
                        product_name: 'Produto 2',
                        quantity: 1,
                        unit_price: 15.00,
                        total_price: 15.00,
                        sale_date: new Date(),
                        status: 'completed'
                    },
                    {
                        user_id: userId,
                        product_name: 'Produto 3',
                        quantity: 3,
                        unit_price: 5.00,
                        total_price: 15.00,
                        sale_date: new Date(),
                        status: 'cancelled'
                    }
                ]
            });
        });
        afterEach(async () => {
            await prisma_1.default.sales.deleteMany({ where: { user_id: userId } });
        });
        it('deve retornar resumo das vendas', async () => {
            const response = await (0, supertest_1.default)(index_1.app)
                .get('/sales/summary')
                .set('Authorization', `Bearer ${authToken}`);
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('totalSales');
            expect(response.body).toHaveProperty('totalRevenue');
            expect(response.body).toHaveProperty('averageTicket');
            expect(response.body).toHaveProperty('completedSales');
            expect(response.body).toHaveProperty('cancelledSales');
        });
        it('deve filtrar resumo por período', async () => {
            const startDate = new Date();
            startDate.setDate(startDate.getDate() - 30);
            const endDate = new Date();
            const response = await (0, supertest_1.default)(index_1.app)
                .get(`/sales/summary?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}`)
                .set('Authorization', `Bearer ${authToken}`);
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('totalSales');
        });
    });
    describe('GET /sales/top-products', () => {
        beforeEach(async () => {
            // Criar vendas de teste para diferentes produtos
            await prisma_1.default.sales.createMany({
                data: [
                    {
                        user_id: userId,
                        product_name: 'Produto A',
                        quantity: 5,
                        unit_price: 10.00,
                        total_price: 50.00,
                        sale_date: new Date(),
                        status: 'completed'
                    },
                    {
                        user_id: userId,
                        product_name: 'Produto A',
                        quantity: 3,
                        unit_price: 10.00,
                        total_price: 30.00,
                        sale_date: new Date(),
                        status: 'completed'
                    },
                    {
                        user_id: userId,
                        product_name: 'Produto B',
                        quantity: 2,
                        unit_price: 15.00,
                        total_price: 30.00,
                        sale_date: new Date(),
                        status: 'completed'
                    }
                ]
            });
        });
        afterEach(async () => {
            await prisma_1.default.sales.deleteMany({ where: { user_id: userId } });
        });
        it('deve retornar produtos mais vendidos', async () => {
            const response = await (0, supertest_1.default)(index_1.app)
                .get('/sales/top-products')
                .set('Authorization', `Bearer ${authToken}`);
            expect(response.status).toBe(200);
            expect(Array.isArray(response.body)).toBe(true);
            expect(response.body.length).toBeGreaterThan(0);
            expect(response.body[0]).toHaveProperty('product_name');
            expect(response.body[0]).toHaveProperty('total_quantity');
            expect(response.body[0]).toHaveProperty('total_revenue');
        });
        it('deve limitar número de produtos retornados', async () => {
            const response = await (0, supertest_1.default)(index_1.app)
                .get('/sales/top-products?limit=1')
                .set('Authorization', `Bearer ${authToken}`);
            expect(response.status).toBe(200);
            expect(Array.isArray(response.body)).toBe(true);
            expect(response.body.length).toBe(1);
        });
    });
    describe('POST /sales/bulk', () => {
        it('deve criar múltiplas vendas', async () => {
            const salesData = [
                {
                    product_name: 'Produto 1',
                    quantity: 2,
                    unit_price: 10.00,
                    total_price: 20.00,
                    sale_date: new Date().toISOString().split('T')[0],
                    status: 'completed'
                },
                {
                    product_name: 'Produto 2',
                    quantity: 1,
                    unit_price: 15.00,
                    total_price: 15.00,
                    sale_date: new Date().toISOString().split('T')[0],
                    status: 'completed'
                }
            ];
            const response = await (0, supertest_1.default)(index_1.app)
                .post('/sales/bulk')
                .set('Authorization', `Bearer ${authToken}`)
                .send({ sales: salesData });
            expect(response.status).toBe(201);
            expect(Array.isArray(response.body)).toBe(true);
            expect(response.body.length).toBe(2);
            expect(response.body[0].user_id).toBe(userId);
            expect(response.body[1].user_id).toBe(userId);
        });
        it('deve retornar erro para dados inválidos', async () => {
            const salesData = [
                {
                    product_name: '',
                    quantity: -1,
                    unit_price: 0,
                    total_price: 0
                }
            ];
            const response = await (0, supertest_1.default)(index_1.app)
                .post('/sales/bulk')
                .set('Authorization', `Bearer ${authToken}`)
                .send({ sales: salesData });
            expect(response.status).toBe(400);
            expect(response.body.error).toBe('Dados inválidos');
        });
    });
});
