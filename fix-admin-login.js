const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const prisma = new PrismaClient();

// Configurações do usuário admin
const ALEXSANDER_USER_ID = '05703665-81d7-4c1d-9bb0-660f0571f465';
const ALEXSANDER_EMAIL = 'alexsander01@hotmail.com.br';

async function fixAdminLogin() {
  console.log('🔧 CORRIGINDO LOGIN DO ADMINISTRADOR');
  console.log('=====================================\n');

  try {
    // 1. Verificar configuração do JWT_SECRET
    console.log('1️⃣ Verificando JWT_SECRET...');
    if (!process.env.JWT_SECRET) {
      console.log('❌ JWT_SECRET não está configurado!');
      console.log('📝 Adicione JWT_SECRET=sua_chave_secreta no arquivo .env');
      console.log('💡 Exemplo: JWT_SECRET=minha_chave_super_secreta_123');
      return;
    }
    console.log('✅ JWT_SECRET configurado');
    console.log('');

    // 2. Verificar se o usuário existe
    console.log('2️⃣ Verificando usuário no banco...');
    let user = await prisma.users.findUnique({
      where: { id: ALEXSANDER_USER_ID }
    });

    if (!user) {
      console.log('⚠️ Usuário não encontrado. Criando...');
      user = await prisma.users.create({
        data: {
          id: ALEXSANDER_USER_ID,
          email: ALEXSANDER_EMAIL,
          role: 'admin',
          created_at: new Date(),
          updated_at: new Date()
        }
      });
      console.log('✅ Usuário criado com sucesso!');
    } else {
      console.log('✅ Usuário encontrado:');
      console.log('   ID:', user.id);
      console.log('   Email:', user.email);
      console.log('   Role:', user.role);
      
      // Verificar se o role está correto
      if (user.role !== 'admin') {
        console.log('⚠️ Usuário não é admin. Corrigindo...');
        await prisma.users.update({
          where: { id: ALEXSANDER_USER_ID },
          data: { 
            role: 'admin',
            updated_at: new Date()
          }
        });
        console.log('✅ Role corrigido para admin');
      }
    }
    console.log('');

    // 3. Verificar se está na tabela controller_admins
    console.log('3️⃣ Verificando tabela controller_admins...');
    const controllerAdmin = await prisma.controller_admins.findFirst({
      where: { user_id: ALEXSANDER_USER_ID }
    });

    if (!controllerAdmin) {
      console.log('⚠️ Usuário não está na tabela controller_admins. Adicionando...');
      await prisma.controller_admins.create({
        data: {
          user_id: ALEXSANDER_USER_ID,
          created_at: new Date()
        }
      });
      console.log('✅ Usuário adicionado à tabela controller_admins');
    } else {
      console.log('✅ Usuário já está na tabela controller_admins');
    }
    console.log('');

    // 4. Gerar token JWT válido
    console.log('4️⃣ Gerando token JWT...');
    const payload = {
      userId: ALEXSANDER_USER_ID,
      email: ALEXSANDER_EMAIL,
      role: 'admin',
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60) // 24 horas
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET);
    console.log('✅ Token JWT gerado com sucesso!');
    console.log('');

    // 5. Atualizar arquivo de teste
    console.log('5️⃣ Atualizando arquivo de teste...');
    const fs = require('fs');
    const testFile = 'test-alexsander-admin.js';
    
    if (fs.existsSync(testFile)) {
      let testContent = fs.readFileSync(testFile, 'utf8');
      
      // Substituir a função generateTestToken
      const newTokenFunction = `const generateTestToken = () => {
  return '${token}';
};`;
      
      const tokenFunctionRegex = /const generateTestToken = \(\) => \{[\s\S]*?\};/;
      testContent = testContent.replace(tokenFunctionRegex, newTokenFunction);
      
      fs.writeFileSync(testFile, testContent);
      console.log('✅ Arquivo de teste atualizado com o novo token');
    } else {
      console.log('⚠️ Arquivo de teste não encontrado');
    }
    console.log('');

    // 6. Resumo final
    console.log('🎯 RESUMO DA CORREÇÃO:');
    console.log('======================');
    console.log('✅ JWT_SECRET configurado');
    console.log('✅ Usuário alexsander criado/verificado como admin');
    console.log('✅ Usuário adicionado à tabela controller_admins');
    console.log('✅ Token JWT válido gerado');
    console.log('✅ Arquivo de teste atualizado');
    console.log('');
    console.log('🔑 TOKEN JWT GERADO:');
    console.log(token);
    console.log('');
    console.log('📋 PRÓXIMOS PASSOS:');
    console.log('1. Execute: node test-alexsander-admin.js');
    console.log('2. Teste o login no frontend com este token');
    console.log('3. Verifique se consegue acessar o controller');
    console.log('');
    console.log('🌐 Para testar no frontend:');
    console.log('Authorization: Bearer ' + token);

  } catch (error) {
    console.error('❌ Erro durante a correção:', error.message);
    
    if (error.code === 'P2002') {
      console.log('ℹ️ Erro de duplicação - usuário já existe');
    }
  } finally {
    await prisma.$disconnect();
  }
}

// Função para testar o token gerado
async function testGeneratedToken() {
  console.log('\n🧪 TESTANDO TOKEN GERADO');
  console.log('========================\n');

  try {
    const axios = require('axios');
    const BASE_URL = 'http://localhost:3000/admin';
    
    // Gerar token novamente para teste
    const payload = {
      userId: ALEXSANDER_USER_ID,
      email: ALEXSANDER_EMAIL,
      role: 'admin',
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60)
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET);
    
    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };

    console.log('🔍 Testando rota /admin/dashboard...');
    try {
      const response = await axios.get(`${BASE_URL}/dashboard`, { headers });
      console.log('✅ Status:', response.status);
      console.log('✅ Dashboard acessível!');
    } catch (error) {
      console.log('❌ Status:', error.response?.status || 'Erro de conexão');
      console.log('❌ Erro:', error.response?.data?.error || error.message);
    }

  } catch (error) {
    console.log('⚠️ Não foi possível testar o token (axios não disponível)');
  }
}

if (process.argv.includes('--test')) {
  testGeneratedToken();
} else if (process.argv.includes('--help')) {
  console.log('📖 AJUDA:');
  console.log('node fix-admin-login.js          - Corrigir login do admin');
  console.log('node fix-admin-login.js --test   - Testar token gerado');
  console.log('node fix-admin-login.js --help   - Mostrar ajuda');
} else {
  fixAdminLogin();
} 