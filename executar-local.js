const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { execSync } = require('child_process');

// Configurações do novo usuário admin
const FULANOSANDER_USER_ID = '12345678-1234-1234-1234-123456789abc';
const FULANOSANDER_EMAIL = 'fulanosander@gmail.com';
const FULANOSANDER_PASSWORD = '123456';
const FULANOSANDER_DOMAIN = 'demo.catalofacil.com.br';

async function executarLocal() {
  console.log('🚀 EXECUTANDO TUDO NO BANCO LOCAL');
  console.log('==================================\n');

  // Configurar variáveis de ambiente para banco local
  process.env.DATABASE_URL = 'postgresql://postgres:postgres@localhost:5432/catalogo';
  process.env.JWT_SECRET = 'chave_secreta_local_123456789';

  console.log('✅ Configurações locais definidas');
  console.log('🔗 Conectando ao banco local...');
  console.log('');

  const prisma = new PrismaClient();

  try {
    // Testar conexão
    await prisma.$connect();
    console.log('✅ Conectado ao banco local!');
    console.log('');

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

    // 8. Verificar se tudo foi criado
    console.log('8️⃣ Verificando se tudo foi criado...');
    
    const userCheck = await prisma.users.findUnique({
      where: { id: FULANOSANDER_USER_ID }
    });
    console.log('👤 Usuário:', userCheck ? '✅ Criado' : '❌ Não criado');

    const controllerCheck = await prisma.controller_admins.findUnique({
      where: { user_id: FULANOSANDER_USER_ID }
    });
    console.log('🔧 Controller Admin:', controllerCheck ? '✅ Criado' : '❌ Não criado');

    const domainCheck = await prisma.domain_owners.findUnique({
      where: { domain: FULANOSANDER_DOMAIN }
    });
    console.log('🌐 Domínio:', domainCheck ? '✅ Criado' : '❌ Não criado');

    const storeCheck = await prisma.stores.findUnique({
      where: { domain: FULANOSANDER_DOMAIN }
    });
    console.log('🏪 Loja:', storeCheck ? '✅ Criada' : '❌ Não criada');

    const settingsCheck = await prisma.store_settings.findUnique({
      where: { user_id: FULANOSANDER_USER_ID }
    });
    console.log('⚙️ Configurações:', settingsCheck ? '✅ Criadas' : '❌ Não criadas');
    console.log('');

    // 9. Resumo final
    console.log('🎯 TUDO EXECUTADO NO BANCO LOCAL!');
    console.log('==================================');
    console.log('');
    console.log('👤 USUÁRIO ADMIN CRIADO:');
    console.log('   Email:', FULANOSANDER_EMAIL);
    console.log('   Senha:', FULANOSANDER_PASSWORD);
    console.log('   ID:', FULANOSANDER_USER_ID);
    console.log('   Role: admin');
    console.log('');
    console.log('🌐 DOMÍNIO E LOJA CRIADOS:');
    console.log('   Domínio:', FULANOSANDER_DOMAIN);
    console.log('   Loja: Demo Catálogo Fácil');
    console.log('   Slug: demo-catalofacil');
    console.log('');
    console.log('🔑 TOKEN JWT GERADO:');
    console.log(token);
    console.log('');
    console.log('📋 PRÓXIMOS PASSOS:');
    console.log('1. ✅ Usuário criado automaticamente');
    console.log('2. ✅ Domínio configurado automaticamente');
    console.log('3. ✅ Loja criada automaticamente');
    console.log('4. ✅ Token JWT gerado automaticamente');
    console.log('5. 🔄 Teste o login com as credenciais acima');
    console.log('6. 🔄 Configure o DNS para demo.catalofacil.com.br');
    console.log('');
    console.log('🌐 Para testar no frontend:');
    console.log('Authorization: Bearer ' + token);
    console.log('');
    console.log('✅ TUDO PRONTO! AGORA É SÓ TESTAR!');

  } catch (error) {
    console.error('❌ Erro durante a execução:', error.message);
    
    if (error.code === 'P2002') {
      console.log('ℹ️ Erro de duplicação - alguns dados já existem');
    }
    
    if (error.code === 'P1001') {
      console.log('❌ Erro de conexão com o banco');
      console.log('📝 Verifique se o Docker está rodando');
      console.log('💡 Execute: docker-compose up -d');
    }
  } finally {
    await prisma.$disconnect();
  }
}

// Função para mostrar ajuda
function mostrarAjuda() {
  console.log('📖 AJUDA - EXECUTAR NO BANCO LOCAL');
  console.log('==================================');
  console.log('');
  console.log('🚀 COMANDOS:');
  console.log('node executar-local.js          - Executar tudo no banco local');
  console.log('node executar-local.js --help   - Mostrar ajuda');
  console.log('');
  console.log('📋 PRÉ-REQUISITOS:');
  console.log('1. Docker instalado e rodando');
  console.log('2. Execute: docker-compose up -d');
  console.log('');
  console.log('📋 CREDENCIAIS QUE SERÃO CRIADAS:');
  console.log('Email: fulanosander@gmail.com');
  console.log('Senha: 123456');
  console.log('Domínio: demo.catalofacil.com.br');
}

if (process.argv.includes('--help')) {
  mostrarAjuda();
} else {
  executarLocal();
} 