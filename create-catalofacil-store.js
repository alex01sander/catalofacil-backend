require('dotenv').config({ path: '.env.test' });
const { PrismaClient } = require('@prisma/client');
const { v4: uuidv4 } = require('uuid');

const prisma = new PrismaClient();

async function createCatalofacilStore() {
  try {
    // Primeiro, vamos criar um usuário se não existir
    let user = await prisma.users.findFirst({
      where: { email: 'admin@catalofacil.com.br' }
    });

    if (!user) {
      user = await prisma.users.create({
        data: {
          id: uuidv4(),
          email: 'admin@catalofacil.com.br',
          encrypted_password: '$2a$10$dummy.hash.for.testing',
          email_confirmed_at: new Date(),
          created_at: new Date(),
          updated_at: new Date()
        }
      });
      console.log('Usuário criado:', user.id);
    } else {
      console.log('Usuário já existe:', user.id);
    }

    // Criar a loja catalofacil
    const store = await prisma.stores.create({
      data: {
        name: 'Catálogo Fácil',
        description: 'Sua loja online completa',
        slug: 'catalofacil',
        logo_url: 'https://via.placeholder.com/150x50/007bff/ffffff?text=Catálogo+Fácil',
        banner_url: 'https://via.placeholder.com/1200x300/007bff/ffffff?text=Banner+Catálogo+Fácil',
        whatsapp_number: '5551999999999',
        instagram_url: 'https://instagram.com/catalofacil',
        theme_color: '#007bff',
        user_id: user.id,
        created_at: new Date(),
        updated_at: new Date()
      }
    });

    console.log('Loja criada com sucesso:');
    console.log('ID:', store.id);
    console.log('Nome:', store.name);
    console.log('Slug:', store.slug);

    // Criar configurações da loja
    const storeSettings = await prisma.store_settings.create({
      data: {
        user_id: user.id,
        store_name: 'Catálogo Fácil',
        store_description: 'Sua loja online completa e profissional',
        store_subtitle: 'Facilite suas vendas com nosso catálogo digital',
        instagram_url: 'https://instagram.com/catalofacil',
        whatsapp_number: '5551999999999',
        mobile_logo: 'https://via.placeholder.com/150x50/007bff/ffffff?text=CF',
        desktop_banner: 'https://via.placeholder.com/1200x300/007bff/ffffff?text=Catálogo+Fácil',
        mobile_banner_image: 'https://via.placeholder.com/400x200/007bff/ffffff?text=CF',
        mobile_banner_color: '#007bff',
        created_at: new Date(),
        updated_at: new Date()
      }
    });

    console.log('Configurações da loja criadas:', storeSettings.id);

  } catch (error) {
    console.error('Erro ao criar loja:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createCatalofacilStore(); 