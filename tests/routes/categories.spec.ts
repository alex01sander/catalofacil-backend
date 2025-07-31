import request from 'supertest';
import { app } from '../../src/index';
import prisma from '../../src/lib/prisma';
import { generateToken } from '../utils';

describe('Categories Routes', () => {
  let authToken: string;
  let userId: string;
  let storeId: string;

  beforeAll(async () => {
    // Criar usuário de teste
    const user = await prisma.users.create({
      data: {
        email: 'test-categories@example.com',
        encrypted_password: 'hashedpassword',
        name: 'Test Categories User'
      }
    });
    userId = user.id;
    authToken = generateToken(user);

    // Criar loja de teste
    const store = await prisma.stores.create({
      data: {
        name: 'Test Store Categories',
        slug: 'test-store-categories',
        user_id: userId
      }
    });
    storeId = store.id;
  });

  afterAll(async () => {
    // Limpar dados de teste
    await prisma.products.deleteMany({ where: { user_id: userId } });
    await prisma.categories.deleteMany({ where: { user_id: userId } });
    await prisma.stores.deleteMany({ where: { user_id: userId } });
    await prisma.users.deleteMany({ where: { id: userId } });
    await prisma.$disconnect();
  });

  beforeEach(async () => {
    // Limpar categorias antes de cada teste
    await prisma.products.deleteMany({ where: { user_id: userId } });
    await prisma.categories.deleteMany({ where: { user_id: userId } });
  });

  describe('GET /categories', () => {
    it('deve listar categorias do usuário autenticado', async () => {
      // Criar algumas categorias de teste
      await prisma.categories.createMany({
        data: [
          {
            name: 'Categoria 1',

            user_id: userId,
            store_id: storeId
          },
          {
            name: 'Categoria 2',

            user_id: userId,
            store_id: storeId
          }
        ]
      });

      const response = await request(app)
        .get('/categories')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body).toHaveLength(2);
      expect(response.body[0]).toHaveProperty('name');
      expect(response.body[0]).toHaveProperty('user_id', userId);
    });

    it('deve incluir produtos quando solicitado', async () => {
      // Criar categoria com produtos
      const category = await prisma.categories.create({
        data: {
          name: 'Categoria com Produtos',

          user_id: userId,
          store_id: storeId
        }
      });

      // Criar produto na categoria
      await prisma.products.create({
        data: {
          name: 'Produto Teste',
          description: 'Produto para teste',
          price: '10.00',
          stock: 10,
          user_id: userId,
          store_id: storeId,
          category_id: category.id
        }
      });

      const response = await request(app)
        .get('/categories?includeProducts=true')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      expect(response.body[0].products).toBeDefined();
      expect(response.body[0].products).toHaveLength(1);
      expect(response.body[0].products[0].name).toBe('Produto Teste');
    });

    it('deve retornar erro 401 sem autenticação', async () => {
      await request(app)
        .get('/categories')
        .expect(401);
    });
  });

  describe('GET /categories/:id', () => {
    it('deve buscar categoria por ID', async () => {
      const category = await prisma.categories.create({
        data: {
          name: 'Categoria Teste',

          user_id: userId,
          store_id: storeId
        }
      });

      const response = await request(app)
        .get(`/categories/${category.id}`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      expect(response.body.id).toBe(category.id);
      expect(response.body.name).toBe('Categoria Teste');
      expect(response.body.user_id).toBe(userId);
    });

    it('deve retornar 404 para categoria inexistente', async () => {
      await request(app)
        .get('/categories/non-existent-id')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(404);
    });

    it('deve retornar 404 para categoria de outro usuário', async () => {
      // Criar outro usuário e categoria
      const otherUser = await prisma.users.create({
        data: {
          email: 'other-categories@example.com',
          password: 'hashedpassword',
          name: 'Other Categories User'
        }
      });

      const otherStore = await prisma.stores.create({
        data: {
          name: 'Other Store Categories',
          slug: 'other-store-categories',
          user_id: otherUser.id
        }
      });

      const otherCategory = await prisma.categories.create({
        data: {
          name: 'Other Category',
          description: 'Category from other user',
          user_id: otherUser.id,
          store_id: otherStore.id
        }
      });

      await request(app)
        .get(`/categories/${otherCategory.id}`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(404);

      // Limpar dados de teste
      await prisma.categories.delete({ where: { id: otherCategory.id } });
      await prisma.stores.delete({ where: { id: otherStore.id } });
      await prisma.users.delete({ where: { id: otherUser.id } });
    });

    it('deve retornar erro 400 para ID inválido', async () => {
      await request(app)
        .get('/categories/')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(404);
    });
  });

  describe('POST /categories', () => {
    it('deve criar nova categoria', async () => {
      const categoryData = {
        name: 'Nova Categoria',
        description: 'Descrição da nova categoria',
        store_id: storeId
      };

      const response = await request(app)
        .post('/categories')
        .set('Authorization', `Bearer ${authToken}`)
        .send(categoryData)
        .expect(201);

      expect(response.body.name).toBe(categoryData.name);
      expect(response.body.description).toBe(categoryData.description);
      expect(response.body.user_id).toBe(userId);
      expect(response.body.store_id).toBe(storeId);
    });

    it('deve retornar erro 400 para dados inválidos', async () => {
      const invalidData = {
        name: '', // Nome vazio
        description: 'Descrição válida',
        store_id: storeId
      };

      const response = await request(app)
        .post('/categories')
        .set('Authorization', `Bearer ${authToken}`)
        .send(invalidData)
        .expect(400);

      expect(response.body.error).toBe('Dados inválidos');
    });

    it('deve retornar erro 401 sem autenticação', async () => {
      const categoryData = {
        name: 'Categoria sem Auth',
        description: 'Categoria sem autenticação',
        store_id: storeId
      };

      await request(app)
        .post('/categories')
        .send(categoryData)
        .expect(401);
    });
  });

  describe('PUT /categories/:id', () => {
    it('deve atualizar categoria existente', async () => {
      const category = await prisma.categories.create({
        data: {
          name: 'Categoria Original',
          description: 'Descrição original',
          user_id: userId,
          store_id: storeId
        }
      });

      const updateData = {
        name: 'Categoria Atualizada',
        description: 'Descrição atualizada'
      };

      const response = await request(app)
        .put(`/categories/${category.id}`)
        .set('Authorization', `Bearer ${authToken}`)
        .send(updateData)
        .expect(200);

      expect(response.body.name).toBe(updateData.name);
      expect(response.body.description).toBe(updateData.description);
      expect(response.body.id).toBe(category.id);
    });

    it('deve retornar erro 404 para categoria inexistente', async () => {
      const updateData = {
        name: 'Categoria Inexistente',
        description: 'Descrição'
      };

      await request(app)
        .put('/categories/non-existent-id')
        .set('Authorization', `Bearer ${authToken}`)
        .send(updateData)
        .expect(404);
    });

    it('deve retornar erro 404 para categoria de outro usuário', async () => {
      // Criar outro usuário e categoria
      const otherUser = await prisma.users.create({
        data: {
          email: 'other-update@example.com',
          password: 'hashedpassword',
          name: 'Other Update User'
        }
      });

      const otherStore = await prisma.stores.create({
        data: {
          name: 'Other Update Store',
          slug: 'other-update-store',
          user_id: otherUser.id
        }
      });

      const otherCategory = await prisma.categories.create({
        data: {
          name: 'Other Category',
          description: 'Category from other user',
          user_id: otherUser.id,
          store_id: otherStore.id
        }
      });

      const updateData = {
        name: 'Tentativa de Atualização',
        description: 'Descrição'
      };

      await request(app)
        .put(`/categories/${otherCategory.id}`)
        .set('Authorization', `Bearer ${authToken}`)
        .send(updateData)
        .expect(404);

      // Limpar dados de teste
      await prisma.categories.delete({ where: { id: otherCategory.id } });
      await prisma.stores.delete({ where: { id: otherStore.id } });
      await prisma.users.delete({ where: { id: otherUser.id } });
    });

    it('deve retornar erro 400 para dados inválidos', async () => {
      const category = await prisma.categories.create({
        data: {
          name: 'Categoria para Atualizar',
          description: 'Descrição',
          user_id: userId,
          store_id: storeId
        }
      });

      const invalidData = {
        name: '' // Nome vazio
      };

      await request(app)
        .put(`/categories/${category.id}`)
        .set('Authorization', `Bearer ${authToken}`)
        .send(invalidData)
        .expect(400);
    });
  });

  describe('DELETE /categories/:id', () => {
    it('deve deletar categoria existente', async () => {
      const category = await prisma.categories.create({
        data: {
          name: 'Categoria para Deletar',
          description: 'Descrição da categoria para deletar',
          user_id: userId,
          store_id: storeId
        }
      });

      await request(app)
        .delete(`/categories/${category.id}`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(204);

      // Verificar se foi realmente deletada
      const deletedCategory = await prisma.categories.findUnique({
        where: { id: category.id }
      });
      expect(deletedCategory).toBeNull();
    });

    it('deve retornar erro 404 para categoria inexistente', async () => {
      await request(app)
        .delete('/categories/non-existent-id')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(404);
    });

    it('deve retornar erro 404 para categoria de outro usuário', async () => {
      // Criar outro usuário e categoria
      const otherUser = await prisma.users.create({
        data: {
          email: 'other-delete@example.com',
          password: 'hashedpassword',
          name: 'Other Delete User'
        }
      });

      const otherStore = await prisma.stores.create({
        data: {
          name: 'Other Delete Store',
          slug: 'other-delete-store',
          user_id: otherUser.id
        }
      });

      const otherCategory = await prisma.categories.create({
        data: {
          name: 'Other Category',
          description: 'Category from other user',
          user_id: otherUser.id,
          store_id: otherStore.id
        }
      });

      await request(app)
        .delete(`/categories/${otherCategory.id}`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(404);

      // Limpar dados de teste
      await prisma.categories.delete({ where: { id: otherCategory.id } });
      await prisma.stores.delete({ where: { id: otherStore.id } });
      await prisma.users.delete({ where: { id: otherUser.id } });
    });

    it('deve retornar erro 400 para ID inválido', async () => {
      await request(app)
        .delete('/categories/')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(404);
    });
  });

  describe('Relacionamentos', () => {
    it('deve incluir informações da loja', async () => {
      const category = await prisma.categories.create({
        data: {
          name: 'Categoria com Loja',
          description: 'Categoria que inclui informações da loja',
          user_id: userId,
          store_id: storeId
        }
      });

      const response = await request(app)
        .get(`/categories/${category.id}`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      expect(response.body.stores).toBeDefined();
      expect(response.body.stores.id).toBe(storeId);
      expect(response.body.stores.name).toBe('Test Store Categories');
    });

    it('deve incluir informações do usuário', async () => {
      const category = await prisma.categories.create({
        data: {
          name: 'Categoria com Usuário',
          description: 'Categoria que inclui informações do usuário',
          user_id: userId,
          store_id: storeId
        }
      });

      const response = await request(app)
        .get(`/categories/${category.id}`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      expect(response.body.users).toBeDefined();
      expect(response.body.users.id).toBe(userId);
      expect(response.body.users.name).toBe('Test Categories User');
    });
  });
}); 