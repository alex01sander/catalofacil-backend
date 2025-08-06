const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const prisma = new PrismaClient();

// Configurações do novo usuário admin
const FULANOSANDER_USER_ID = '12345678-1234-1234-1234-123456789abc';
const FULANOSANDER_EMAIL = 'fulanosander@gmail.com';
const FULANOSANDER_PASSWORD = '123456';
const FULANOSANDER_DOMAIN = 'demo.catalofacil.com.br';

async function criarAdminAutomatico() {
  console.log('🔧 CRIANDO ADMIN AUTOMÁTICO');
  console.log('============================\n');

  try {
    // 1. Criar usuário admin com senha criptografada
    console.log('1️⃣ Criando usuário admin...');
    const hashedPassword = await bcrypt.hash(FULANOSANDER_PASSWORD, 10);
    
    const user = await prisma.users.upsert({
      where: { id: FULANOSANDER_USER_ID },
      update: {
        email: FULANOSANDER_EMAIL,
        role: 'admin',
        encrypted_password: hashedPassword,
        email_confirmed_at: new Date(),
        updated_at: new Date()
      },
      create: {
        id: FULANOSANDER_USER_ID,
        email: FULANOSANDER_EMAIL,
        role: 'admin',
        encrypted_password: hashedPassword,
        email_confirmed_at: new Date(),
        created_at: new Date(),
        updated_at: new Date()
      }
    });
    console.log('✅ Usuário admin criado:', user.email);
    console.log('');

    // 2. Adicionar à tabela controller_admins
    console.log('2️⃣ Adicionando à tabela controller_admins...');
    const controllerAdmin = await prisma.controller_admins.upsert({
      where: { user_id: FULANOSANDER_USER_ID },
      update: {
        email: FULANOSANDER_EMAIL,
        updated_at: new Date()
      },
      create: {
        user_id: FULANOSANDER_USER_ID,
        email: FULANOSANDER_EMAIL,
        created_at: new Date(),
        updated_at: new Date()
      }
    });
    console.log('✅ Controller admin criado');
    console.log('');

    // 3. Criar domínio
    console.log('3️⃣ Criando domínio...');
    const domain = await prisma.domain_owners.upsert({
      where: { domain: FULANOSANDER_DOMAIN },
      update: {
        user_id: FULANOSANDER_USER_ID,
        updated_at: new Date()
      },
      create: {
        domain: FULANOSANDER_DOMAIN,
        user_id: FULANOSANDER_USER_ID,
        domain_type: 'domain',
        created_at: new Date(),
        updated_at: new Date()
      }
    });
    console.log('✅ Domínio criado:', domain.domain);
    console.log('');

    // 4. Criar loja
    console.log('4️⃣ Criando loja...');
    const store = await prisma.stores.upsert({
      where: { domain: FULANOSANDER_DOMAIN },
      update: {
        name: 'Demo Catálogo Fácil',
        description: 'Loja de demonstração do Catálogo Fácil',
        updated_at: new Date()
      },
      create: {
        name: 'Demo Catálogo Fácil',
        slug: 'demo-catalofacil',
        domain: FULANOSANDER_DOMAIN,
        user_id: FULANOSANDER_USER_ID,
        description: 'Loja de demonstração do Catálogo Fácil',
        logo_url: 'https://via.placeholder.com/150x50/007bff/ffffff?text=Demo+Catálogo+Fácil',
        banner_url: 'https://via.placeholder.com/1200x300/007bff/ffffff?text=Banner+Demo+Catálogo+Fácil',
        whatsapp_number: '5551999999999',
        instagram_url: 'https://instagram.com/demo_catalofacil',
        theme_color: '#007bff',
        created_at: new Date(),
        updated_at: new Date()
      }
    });
    console.log('✅ Loja criada:', store.name);
    console.log('');

    // 5. Criar configurações da loja
    console.log('5️⃣ Criando configurações da loja...');
    const storeSettings = await prisma.store_settings.upsert({
      where: { user_id: FULANOSANDER_USER_ID },
      update: {
        store_name: 'Demo Catálogo Fácil',
        store_description: 'Loja de demonstração do Catálogo Fácil',
        updated_at: new Date()
      },
      create: {
        user_id: FULANOSANDER_USER_ID,
        store_name: 'Demo Catálogo Fácil',
        store_description: 'Loja de demonstração do Catálogo Fácil',
        store_subtitle: 'Produtos Incríveis',
        mobile_logo: 'https://via.placeholder.com/150x50/007bff/ffffff?text=Demo+Catálogo+Fácil',
        desktop_banner: 'https://via.placeholder.com/1200x300/007bff/ffffff?text=Banner+Demo+Catálogo+Fácil',
        mobile_banner_color: 'from-green-400 via-green-500 to-green-600',
        mobile_banner_image: 'https://via.placeholder.com/400x200/007bff/ffffff?text=Mobile+Banner',
        instagram_url: 'https://instagram.com/demo_catalofacil',
        whatsapp_number: '5551999999999',
        created_at: new Date(),
        updated_at: new Date()
      }
    });
    console.log('✅ Configurações da loja criadas');
    console.log('');

    // 6. Gerar token JWT
    console.log('6️⃣ Gerando token JWT...');
    if (!process.env.JWT_SECRET) {
      console.log('❌ JWT_SECRET não está configurado!');
      console.log('📝 Adicione JWT_SECRET=sua_chave_secreta no arquivo .env');
      return;
    }

    const payload = {
      userId: FULANOSANDER_USER_ID,
      email: FULANOSANDER_EMAIL,
      role: 'admin',
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60) // 24 horas
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET);
    console.log('✅ Token JWT gerado');
    console.log('');

    // 7. Atualizar arquivo de teste
    console.log('7️⃣ Atualizando arquivo de teste...');
    const fs = require('fs');
    const testFile = 'test-alexsander-admin.js';
    
    if (fs.existsSync(testFile)) {
      let testContent = fs.readFileSync(testFile, 'utf8');
      
      // Atualizar o ID do usuário
      testContent = testContent.replace(
        /const ALEXSANDER_USER_ID = '[^']*'/,
        `const ALEXSANDER_USER_ID = '${FULANOSANDER_USER_ID}'`
      );
      
      // Atualizar o email
      testContent = testContent.replace(
        /const ALEXSANDER_EMAIL = '[^']*'/,
        `const ALEXSANDER_EMAIL = '${FULANOSANDER_EMAIL}'`
      );
      
      // Substituir a função generateTestToken
      const newTokenFunction = `const generateTestToken = () => {
  return '${token}';
};`;
      
      const tokenFunctionRegex = /const generateTestToken = \(\) => \{[\s\S]*?\};/;
      testContent = testContent.replace(tokenFunctionRegex, newTokenFunction);
      
      fs.writeFileSync(testFile, testContent);
      console.log('✅ Arquivo de teste atualizado');
    }
    console.log('');

    // 8. Resumo final
    console.log('🎯 CRIAÇÃO AUTOMÁTICA CONCLUÍDA!');
    console.log('================================');
    console.log('');
    console.log('👤 USUÁRIO ADMIN:');
    console.log('   Email:', FULANOSANDER_EMAIL);
    console.log('   Senha:', FULANOSANDER_PASSWORD);
    console.log('   ID:', FULANOSANDER_USER_ID);
    console.log('   Role: admin');
    console.log('');
    console.log('🌐 DOMÍNIO E LOJA:');
    console.log('   Domínio:', FULANOSANDER_DOMAIN);
    console.log('   Loja: Demo Catálogo Fácil');
    console.log('   Slug: demo-catalofacil');
    console.log('');
    console.log('🔑 TOKEN JWT:');
    console.log(token);
    console.log('');
    console.log('📋 PRÓXIMOS PASSOS:');
    console.log('1. Teste o login com as credenciais acima');
    console.log('2. Acesse o controller admin');
    console.log('3. Configure o DNS para demo.catalofacil.com.br');
    console.log('4. Acesse a loja em demo.catalofacil.com.br');
    console.log('');
    console.log('🌐 Para testar no frontend:');
    console.log('Authorization: Bearer ' + token);
    console.log('');
    console.log('✅ TUDO PRONTO PARA USO!');

  } catch (error) {
    console.error('❌ Erro durante a criação:', error.message);
    
    if (error.code === 'P2002') {
      console.log('ℹ️ Erro de duplicação - alguns dados já existem');
    }
  } finally {
    await prisma.$disconnect();
  }
}

// Função para verificar se tudo foi criado
async function verificarCriacao() {
  console.log('\n🔍 VERIFICANDO CRIAÇÃO');
  console.log('======================\n');

  try {
    // Verificar usuário
    const user = await prisma.users.findUnique({
      where: { id: FULANOSANDER_USER_ID }
    });
    console.log('👤 Usuário:', user ? '✅ Criado' : '❌ Não criado');
    if (user) {
      console.log('   Email:', user.email);
      console.log('   Role:', user.role);
    }

    // Verificar controller admin
    const controllerAdmin = await prisma.controller_admins.findUnique({
      where: { user_id: FULANOSANDER_USER_ID }
    });
    console.log('🔧 Controller Admin:', controllerAdmin ? '✅ Criado' : '❌ Não criado');

    // Verificar domínio
    const domain = await prisma.domain_owners.findUnique({
      where: { domain: FULANOSANDER_DOMAIN }
    });
    console.log('🌐 Domínio:', domain ? '✅ Criado' : '❌ Não criado');
    if (domain) {
      console.log('   Domain:', domain.domain);
    }

    // Verificar loja
    const store = await prisma.stores.findUnique({
      where: { domain: FULANOSANDER_DOMAIN }
    });
    console.log('🏪 Loja:', store ? '✅ Criada' : '❌ Não criada');
    if (store) {
      console.log('   Nome:', store.name);
      console.log('   Slug:', store.slug);
    }

    // Verificar configurações
    const settings = await prisma.store_settings.findUnique({
      where: { user_id: FULANOSANDER_USER_ID }
    });
    console.log('⚙️ Configurações:', settings ? '✅ Criadas' : '❌ Não criadas');

  } catch (error) {
    console.error('❌ Erro ao verificar:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

if (process.argv.includes('--verify')) {
  verificarCriacao();
} else if (process.argv.includes('--help')) {
  console.log('📖 AJUDA:');
  console.log('node criar-admin-automatico.js          - Criar admin automaticamente');
  console.log('node criar-admin-automatico.js --verify - Verificar se foi criado');
  console.log('node criar-admin-automatico.js --help   - Mostrar ajuda');
  console.log('');
  console.log('📋 CREDENCIAIS:');
  console.log('Email: fulanosander@gmail.com');
  console.log('Senha: 123456');
  console.log('Domínio: demo.catalofacil.com.br');
} else {
  criarAdminAutomatico();
} 