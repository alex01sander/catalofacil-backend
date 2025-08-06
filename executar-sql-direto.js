const { Client } = require('pg');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const fs = require('fs');

// Configurações do novo usuário admin
const FULANOSANDER_USER_ID = '12345678-1234-1234-1234-123456789abc';
const FULANOSANDER_EMAIL = 'fulanosander@gmail.com';
const FULANOSANDER_PASSWORD = '123456';
const FULANOSANDER_DOMAIN = 'demo.catalofacil.com.br';

async function executarSQLDireto() {
  console.log('🚀 EXECUTANDO SQL DIRETAMENTE');
  console.log('==============================\n');

  // Configurar conexão com banco local
  const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'catalogo',
    user: 'postgres',
    password: 'postgres'
  });

  try {
    console.log('🔗 Conectando ao banco local...');
    await client.connect();
    console.log('✅ Conectado ao banco local!');
    console.log('');

    // 1. Criar usuário admin com senha criptografada
    console.log('1️⃣ Criando usuário admin...');
    const hashedPassword = await bcrypt.hash(FULANOSANDER_PASSWORD, 10);
    
    const createUserQuery = `
      INSERT INTO auth.users (
        id, 
        email, 
        role, 
        encrypted_password,
        email_confirmed_at,
        created_at, 
        updated_at
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      ON CONFLICT (id) DO UPDATE SET
        email = EXCLUDED.email,
        role = EXCLUDED.role,
        encrypted_password = EXCLUDED.encrypted_password,
        email_confirmed_at = EXCLUDED.email_confirmed_at,
        updated_at = EXCLUDED.updated_at
    `;
    
    await client.query(createUserQuery, [
      FULANOSANDER_USER_ID,
      FULANOSANDER_EMAIL,
      'admin',
      hashedPassword,
      new Date(),
      new Date(),
      new Date()
    ]);
    console.log('✅ Usuário admin criado:', FULANOSANDER_EMAIL);
    console.log('');

    // 2. Adicionar à tabela controller_admins
    console.log('2️⃣ Adicionando à tabela controller_admins...');
    const createControllerQuery = `
      INSERT INTO public.controller_admins (user_id, email, created_at)
      VALUES ($1, $2, $3)
      ON CONFLICT (user_id) DO NOTHING
    `;
    
    await client.query(createControllerQuery, [
      FULANOSANDER_USER_ID,
      FULANOSANDER_EMAIL,
      new Date()
    ]);
    console.log('✅ Controller admin criado');
    console.log('');

    // 3. Criar domínio
    console.log('3️⃣ Criando domínio...');
    const createDomainQuery = `
      INSERT INTO public.domain_owners (
        id,
        domain,
        user_id,
        created_at,
        updated_at,
        domain_type
      )
      VALUES (gen_random_uuid(), $1, $2, $3, $4, 'domain')
      ON CONFLICT (domain) DO UPDATE SET
        user_id = EXCLUDED.user_id,
        updated_at = EXCLUDED.updated_at
    `;
    
    await client.query(createDomainQuery, [
      FULANOSANDER_DOMAIN,
      FULANOSANDER_USER_ID,
      new Date(),
      new Date()
    ]);
    console.log('✅ Domínio criado:', FULANOSANDER_DOMAIN);
    console.log('');

    // 4. Criar loja
    console.log('4️⃣ Criando loja...');
    const createStoreQuery = `
      INSERT INTO public.stores (
        id,
        name,
        slug,
        domain,
        user_id,
        description,
        logo_url,
        banner_url,
        whatsapp_number,
        instagram_url,
        theme_color,
        created_at,
        updated_at
      )
      VALUES (
        gen_random_uuid(),
        'Demo Catálogo Fácil',
        'demo-catalofacil',
        $1,
        $2,
        'Loja de demonstração do Catálogo Fácil',
        'https://via.placeholder.com/150x50/007bff/ffffff?text=Demo+Catálogo+Fácil',
        'https://via.placeholder.com/1200x300/007bff/ffffff?text=Banner+Demo+Catálogo+Fácil',
        '5551999999999',
        'https://instagram.com/demo_catalofacil',
        '#007bff',
        $3,
        $4
      )
      ON CONFLICT (domain) DO UPDATE SET
        name = EXCLUDED.name,
        description = EXCLUDED.description,
        updated_at = EXCLUDED.updated_at
    `;
    
    await client.query(createStoreQuery, [
      FULANOSANDER_DOMAIN,
      FULANOSANDER_USER_ID,
      new Date(),
      new Date()
    ]);
    console.log('✅ Loja criada: Demo Catálogo Fácil');
    console.log('');

    // 5. Criar configurações da loja
    console.log('5️⃣ Criando configurações da loja...');
    const createSettingsQuery = `
      INSERT INTO public.store_settings (
        id,
        user_id,
        store_name,
        store_description,
        store_subtitle,
        mobile_logo,
        desktop_banner,
        mobile_banner_color,
        mobile_banner_image,
        instagram_url,
        whatsapp_number,
        created_at,
        updated_at
      )
      VALUES (
        gen_random_uuid(),
        $1,
        'Demo Catálogo Fácil',
        'Loja de demonstração do Catálogo Fácil',
        'Produtos Incríveis',
        'https://via.placeholder.com/150x50/007bff/ffffff?text=Demo+Catálogo+Fácil',
        'https://via.placeholder.com/1200x300/007bff/ffffff?text=Banner+Demo+Catálogo+Fácil',
        'from-green-400 via-green-500 to-green-600',
        'https://via.placeholder.com/400x200/007bff/ffffff?text=Mobile+Banner',
        'https://instagram.com/demo_catalofacil',
        '5551999999999',
        $2,
        $3
      )
      ON CONFLICT (user_id) DO UPDATE SET
        store_name = EXCLUDED.store_name,
        store_description = EXCLUDED.store_description,
        updated_at = EXCLUDED.updated_at
    `;
    
    await client.query(createSettingsQuery, [
      FULANOSANDER_USER_ID,
      new Date(),
      new Date()
    ]);
    console.log('✅ Configurações da loja criadas');
    console.log('');

    // 6. Gerar token JWT
    console.log('6️⃣ Gerando token JWT...');
    const jwtSecret = 'chave_secreta_local_123456789';
    const payload = {
      userId: FULANOSANDER_USER_ID,
      email: FULANOSANDER_EMAIL,
      role: 'admin',
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60) // 24 horas
    };

    const token = jwt.sign(payload, jwtSecret);
    console.log('✅ Token JWT gerado');
    console.log('');

    // 7. Atualizar arquivo de teste
    console.log('7️⃣ Atualizando arquivo de teste...');
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
    
    const userCheck = await client.query('SELECT * FROM auth.users WHERE id = $1', [FULANOSANDER_USER_ID]);
    console.log('👤 Usuário:', userCheck.rows.length > 0 ? '✅ Criado' : '❌ Não criado');

    const controllerCheck = await client.query('SELECT * FROM public.controller_admins WHERE user_id = $1', [FULANOSANDER_USER_ID]);
    console.log('🔧 Controller Admin:', controllerCheck.rows.length > 0 ? '✅ Criado' : '❌ Não criado');

    const domainCheck = await client.query('SELECT * FROM public.domain_owners WHERE domain = $1', [FULANOSANDER_DOMAIN]);
    console.log('🌐 Domínio:', domainCheck.rows.length > 0 ? '✅ Criado' : '❌ Não criado');

    const storeCheck = await client.query('SELECT * FROM public.stores WHERE domain = $1', [FULANOSANDER_DOMAIN]);
    console.log('🏪 Loja:', storeCheck.rows.length > 0 ? '✅ Criada' : '❌ Não criada');

    const settingsCheck = await client.query('SELECT * FROM public.store_settings WHERE user_id = $1', [FULANOSANDER_USER_ID]);
    console.log('⚙️ Configurações:', settingsCheck.rows.length > 0 ? '✅ Criadas' : '❌ Não criadas');
    console.log('');

    // 9. Resumo final
    console.log('🎯 TUDO EXECUTADO COM SUCESSO!');
    console.log('==============================');
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
    
    if (error.code === '23505') {
      console.log('ℹ️ Erro de duplicação - alguns dados já existem');
    }
    
    if (error.code === 'ECONNREFUSED') {
      console.log('❌ Erro de conexão com o banco');
      console.log('📝 Verifique se o Docker está rodando');
      console.log('💡 Execute: docker-compose up -d');
    }
  } finally {
    await client.end();
  }
}

// Função para mostrar ajuda
function mostrarAjuda() {
  console.log('📖 AJUDA - EXECUTAR SQL DIRETAMENTE');
  console.log('===================================');
  console.log('');
  console.log('🚀 COMANDOS:');
  console.log('node executar-sql-direto.js          - Executar tudo via SQL direto');
  console.log('node executar-sql-direto.js --help   - Mostrar ajuda');
  console.log('');
  console.log('📋 PRÉ-REQUISITOS:');
  console.log('1. Docker instalado e rodando');
  console.log('2. Execute: docker-compose up -d');
  console.log('3. Instale: npm install pg');
  console.log('');
  console.log('📋 CREDENCIAIS QUE SERÃO CRIADAS:');
  console.log('Email: fulanosander@gmail.com');
  console.log('Senha: 123456');
  console.log('Domínio: demo.catalofacil.com.br');
}

if (process.argv.includes('--help')) {
  mostrarAjuda();
} else {
  executarSQLDireto();
} 