const jwt = require('jsonwebtoken');
require('dotenv').config();

// Configurações do usuário admin
const ALEXSANDER_USER_ID = '05703665-81d7-4c1d-9bb0-660f0571f465';
const ALEXSANDER_EMAIL = 'alexsander01@hotmail.com.br';

function generateAdminToken() {
  try {
    // Verificar se JWT_SECRET está configurado
    if (!process.env.JWT_SECRET) {
      console.error('❌ Erro: JWT_SECRET não está configurado no .env');
      console.log('📝 Adicione JWT_SECRET=seu_secret_aqui no arquivo .env');
      return;
    }

    // Payload do token
    const payload = {
      userId: ALEXSANDER_USER_ID,
      email: ALEXSANDER_EMAIL,
      role: 'admin',
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60) // 24 horas
    };

    // Gerar token
    const token = jwt.sign(payload, process.env.JWT_SECRET);

    console.log('🔑 Token JWT gerado com sucesso!');
    console.log('');
    console.log('👤 Dados do usuário:');
    console.log('   ID:', ALEXSANDER_USER_ID);
    console.log('   Email:', ALEXSANDER_EMAIL);
    console.log('   Role: admin');
    console.log('');
    console.log('🔐 Token JWT:');
    console.log(token);
    console.log('');
    console.log('📋 Para usar no teste:');
    console.log('1. Copie o token acima');
    console.log('2. Substitua no arquivo test-alexsander-admin.js');
    console.log('3. Execute o teste novamente');
    console.log('');
    console.log('🌐 Para testar no frontend:');
    console.log('1. Use o token no header Authorization: Bearer <token>');
    console.log('2. Teste as rotas do controller');
    console.log('');
    console.log('⏰ Token válido por 24 horas');

  } catch (error) {
    console.error('❌ Erro ao gerar token:', error.message);
  }
}

// Verificar se o usuário existe no banco
async function verifyUserExists() {
  try {
    const { PrismaClient } = require('@prisma/client');
    const prisma = new PrismaClient();

    const user = await prisma.users.findUnique({
      where: { id: ALEXSANDER_USER_ID }
    });

    if (user) {
      console.log('✅ Usuário encontrado no banco:');
      console.log('   ID:', user.id);
      console.log('   Email:', user.email);
      console.log('   Role:', user.role);
      console.log('');
    } else {
      console.log('⚠️ Usuário não encontrado no banco!');
      console.log('📝 Execute primeiro: node create-alexsander-admin.js');
      console.log('');
    }

    await prisma.$disconnect();
  } catch (error) {
    console.log('⚠️ Não foi possível verificar o usuário no banco');
  }
}

// Executar verificação e geração
async function main() {
  console.log('🔍 Verificando usuário no banco...');
  await verifyUserExists();
  
  console.log('🔑 Gerando token JWT...');
  generateAdminToken();
}

if (process.argv.includes('--help')) {
  console.log('📖 AJUDA:');
  console.log('node generate-admin-token.js          - Gerar token');
  console.log('node generate-admin-token.js --help   - Mostrar ajuda');
  console.log('');
  console.log('📋 PRÉ-REQUISITOS:');
  console.log('1. JWT_SECRET configurado no .env');
  console.log('2. Usuário alexsander criado como admin');
  console.log('3. Banco de dados conectado');
} else {
  main();
} 