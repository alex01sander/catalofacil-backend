"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = require("../../src/index");
const prisma_1 = __importDefault(require("../../src/lib/prisma"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const uuid_1 = require("uuid");
describe('Categories Routes', () => {
    let authToken;
    let userId;
    let categoryId;
    beforeAll(async () => {
        // Criar usuário de teste
        const user = await prisma_1.default.users.create({
            data: {
                id: (0, uuid_1.v4)(),
                email: 'test-categories@example.com',
                encrypted_password: 'hashedpassword'
            }
        });
        userId = user.id;
        authToken = jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET || 'test-secret');
    });
    afterAll(async () => {
        // Limpar dados de teste
        await prisma_1.default.products.deleteMany({ where: { user_id: userId } });
        await prisma_1.default.categories.deleteMany({ where: { user_id: userId } });
        await prisma_1.default.users.deleteMany({ where: { id: userId } });
        await prisma_1.default.$disconnect();
    });
    describe('GET /categories', () => {
        beforeEach(async () => {
            // Criar categoria de teste
            const category = await prisma_1.default.categories.create({
                data: {
                    user_id: userId,
                    name: 'Categoria Teste',
                    color: '#FF5733'
                }
            });
            categoryId = category.id;
        });
        afterEach(async () => {
            await prisma_1.default.categories.deleteMany({ where: { user_id: userId } });
        });
        it('deve listar categorias do usuário', async () => {
            const response = await (0, supertest_1.default)(index_1.app)
                .get('/categories')
                .set('Authorization', `Bearer ${authToken}`);
            expect(response.status).toBe(200);
            expect(Array.isArray(response.body)).toBe(true);
            expect(response.body.length).toBeGreaterThan(0);
            expect(response.body[0].user_id).toBe(userId);
            expect(response.body[0].name).toBe('Categoria Teste');
        });
    });
    describe('GET /categories - array vazio', () => {
        it('deve retornar array vazio quando não há categorias', async () => {
            // Limpar todas as categorias do usuário antes do teste
            await prisma_1.default.categories.deleteMany({ where: { user_id: userId } });
            // Limpar cache do usuário
            const { clearUserCache } = require('../../src/lib/cache');
            clearUserCache(userId);
            const response = await (0, supertest_1.default)(index_1.app)
                .get('/categories')
                .set('Authorization', `Bearer ${authToken}`);
            expect(response.status).toBe(200);
            expect(Array.isArray(response.body)).toBe(true);
            expect(response.body.length).toBe(0);
        });
    });
    describe('POST /categories', () => {
        it('deve criar nova categoria', async () => {
            const categoryData = {
                name: 'Nova Categoria',
                color: '#4CAF50'
            };
            const response = await (0, supertest_1.default)(index_1.app)
                .post('/categories')
                .set('Authorization', `Bearer ${authToken}`)
                .send(categoryData);
            expect(response.status).toBe(201);
            expect(response.body.name).toBe('Nova Categoria');
            expect(response.body.color).toBe('#4CAF50');
            expect(response.body.user_id).toBe(userId);
        });
        it('deve criar categoria com cor padrão', async () => {
            const categoryData = {
                name: 'Categoria Sem Cor'
            };
            const response = await (0, supertest_1.default)(index_1.app)
                .post('/categories')
                .set('Authorization', `Bearer ${authToken}`)
                .send(categoryData);
            expect(response.status).toBe(201);
            expect(response.body.name).toBe('Categoria Sem Cor');
            expect(response.body.color).toBe('#8B5CF6'); // Cor padrão
        });
        it('deve retornar erro se nome não for fornecido', async () => {
            const categoryData = {
                color: '#FF5733'
            };
            const response = await (0, supertest_1.default)(index_1.app)
                .post('/categories')
                .set('Authorization', `Bearer ${authToken}`)
                .send(categoryData);
            expect(response.status).toBe(400);
            expect(response.body.error).toBe('Nome da categoria é obrigatório');
        });
    });
    describe('GET /categories/:id', () => {
        beforeEach(async () => {
            // Criar categoria de teste
            const category = await prisma_1.default.categories.create({
                data: {
                    user_id: userId,
                    name: 'Categoria Teste',
                    color: '#FF5733'
                }
            });
            categoryId = category.id;
        });
        afterEach(async () => {
            await prisma_1.default.categories.deleteMany({ where: { user_id: userId } });
        });
        it('deve buscar categoria por ID', async () => {
            const response = await (0, supertest_1.default)(index_1.app)
                .get(`/categories/${categoryId}`)
                .set('Authorization', `Bearer ${authToken}`);
            expect(response.status).toBe(200);
            expect(response.body.id).toBe(categoryId);
            expect(response.body.name).toBe('Categoria Teste');
            expect(response.body.color).toBe('#FF5733');
        });
        it('deve retornar erro para categoria inexistente', async () => {
            const response = await (0, supertest_1.default)(index_1.app)
                .get('/categories/categoria-inexistente')
                .set('Authorization', `Bearer ${authToken}`);
            expect(response.status).toBe(404);
            expect(response.body.error).toBe('Categoria não encontrada');
        });
        it('deve retornar erro para categoria de outro usuário', async () => {
            // Criar outro usuário
            const otherUser = await prisma_1.default.users.create({
                data: {
                    id: '550e8400-e29b-41d4-a716-446655440002',
                    email: 'other-user@example.com',
                    encrypted_password: 'hashedpassword'
                }
            });
            // Criar categoria para outro usuário
            const otherCategory = await prisma_1.default.categories.create({
                data: {
                    user_id: otherUser.id,
                    name: 'Categoria Outro Usuário',
                    color: '#FF0000'
                }
            });
            const response = await (0, supertest_1.default)(index_1.app)
                .get(`/categories/${otherCategory.id}`)
                .set('Authorization', `Bearer ${authToken}`);
            expect(response.status).toBe(404);
            expect(response.body.error).toBe('Categoria não encontrada');
            // Limpar
            await prisma_1.default.categories.deleteMany({ where: { user_id: otherUser.id } });
            await prisma_1.default.users.deleteMany({ where: { id: otherUser.id } });
        });
    });
    describe('PUT /categories/:id', () => {
        beforeEach(async () => {
            // Criar categoria de teste
            const category = await prisma_1.default.categories.create({
                data: {
                    user_id: userId,
                    name: 'Categoria Teste',
                    color: '#FF5733'
                }
            });
            categoryId = category.id;
        });
        afterEach(async () => {
            await prisma_1.default.categories.deleteMany({ where: { user_id: userId } });
        });
        it('deve atualizar categoria', async () => {
            const updateData = {
                name: 'Categoria Atualizada',
                color: '#2196F3'
            };
            const response = await (0, supertest_1.default)(index_1.app)
                .put(`/categories/${categoryId}`)
                .set('Authorization', `Bearer ${authToken}`)
                .send(updateData);
            expect(response.status).toBe(200);
            expect(response.body.name).toBe('Categoria Atualizada');
            expect(response.body.color).toBe('#2196F3');
        });
        it('deve atualizar apenas o nome', async () => {
            const updateData = {
                name: 'Apenas Nome Atualizado'
            };
            const response = await (0, supertest_1.default)(index_1.app)
                .put(`/categories/${categoryId}`)
                .set('Authorization', `Bearer ${authToken}`)
                .send(updateData);
            expect(response.status).toBe(200);
            expect(response.body.name).toBe('Apenas Nome Atualizado');
            expect(response.body.color).toBe('#FF5733'); // Cor original mantida
        });
        it('deve retornar erro para categoria inexistente', async () => {
            const updateData = {
                name: 'Categoria Atualizada'
            };
            const response = await (0, supertest_1.default)(index_1.app)
                .put('/categories/categoria-inexistente')
                .set('Authorization', `Bearer ${authToken}`)
                .send(updateData);
            expect(response.status).toBe(404);
            expect(response.body.error).toBe('Categoria não encontrada');
        });
    });
    describe('DELETE /categories/:id', () => {
        beforeEach(async () => {
            // Criar categoria de teste
            const category = await prisma_1.default.categories.create({
                data: {
                    user_id: userId,
                    name: 'Categoria Teste',
                    color: '#FF5733'
                }
            });
            categoryId = category.id;
        });
        it('deve deletar categoria sem produtos', async () => {
            const response = await (0, supertest_1.default)(index_1.app)
                .delete(`/categories/${categoryId}`)
                .set('Authorization', `Bearer ${authToken}`);
            expect(response.status).toBe(200);
            expect(response.body.message).toBe('Categoria deletada com sucesso');
            // Verificar se foi realmente deletada
            const deletedCategory = await prisma_1.default.categories.findUnique({
                where: { id: categoryId }
            });
            expect(deletedCategory).toBeNull();
        });
        it('deve retornar erro para categoria com produtos', async () => {
            // Criar produto associado à categoria
            await prisma_1.default.products.create({
                data: {
                    user_id: userId,
                    category_id: categoryId,
                    name: 'Produto Teste',
                    price: 10.00,
                    stock: 5
                }
            });
            const response = await (0, supertest_1.default)(index_1.app)
                .delete(`/categories/${categoryId}`)
                .set('Authorization', `Bearer ${authToken}`);
            expect(response.status).toBe(400);
            expect(response.body.error).toBe('Não é possível deletar categoria que possui produtos');
            // Limpar produto
            await prisma_1.default.products.deleteMany({ where: { user_id: userId } });
        });
        it('deve retornar erro para categoria inexistente', async () => {
            const response = await (0, supertest_1.default)(index_1.app)
                .delete('/categories/categoria-inexistente')
                .set('Authorization', `Bearer ${authToken}`);
            expect(response.status).toBe(404);
            expect(response.body.error).toBe('Categoria não encontrada');
        });
    });
    describe('GET /categories/:id/products', () => {
        beforeEach(async () => {
            // Criar categoria de teste
            const category = await prisma_1.default.categories.create({
                data: {
                    user_id: userId,
                    name: 'Categoria Teste',
                    color: '#FF5733'
                }
            });
            categoryId = category.id;
            // Criar produtos de teste
            await prisma_1.default.products.createMany({
                data: [
                    {
                        user_id: userId,
                        category_id: categoryId,
                        name: 'Produto 1',
                        price: 10.00,
                        stock: 5
                    },
                    {
                        user_id: userId,
                        category_id: categoryId,
                        name: 'Produto 2',
                        price: 20.00,
                        stock: 3
                    }
                ]
            });
        });
        afterEach(async () => {
            await prisma_1.default.products.deleteMany({ where: { user_id: userId } });
            await prisma_1.default.categories.deleteMany({ where: { user_id: userId } });
        });
        it('deve listar produtos da categoria', async () => {
            const response = await (0, supertest_1.default)(index_1.app)
                .get(`/categories/${categoryId}/products`)
                .set('Authorization', `Bearer ${authToken}`);
            expect(response.status).toBe(200);
            expect(Array.isArray(response.body)).toBe(true);
            expect(response.body.length).toBe(2);
            expect(response.body[0].category_id).toBe(categoryId);
            expect(response.body[1].category_id).toBe(categoryId);
        });
        it('deve retornar array vazio para categoria sem produtos', async () => {
            await prisma_1.default.products.deleteMany({ where: { user_id: userId } });
            const response = await (0, supertest_1.default)(index_1.app)
                .get(`/categories/${categoryId}/products`)
                .set('Authorization', `Bearer ${authToken}`);
            expect(response.status).toBe(200);
            expect(Array.isArray(response.body)).toBe(true);
            expect(response.body.length).toBe(0);
        });
        it('deve retornar erro para categoria inexistente', async () => {
            const response = await (0, supertest_1.default)(index_1.app)
                .get('/categories/categoria-inexistente/products')
                .set('Authorization', `Bearer ${authToken}`);
            expect(response.status).toBe(404);
            expect(response.body.error).toBe('Categoria não encontrada');
        });
    });
});
