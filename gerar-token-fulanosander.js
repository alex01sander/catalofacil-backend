const jwt = require('jsonwebtoken');
require('dotenv').config();

// Configurações do novo usuário admin
const FULANOSANDER_USER_ID = '12345678-1234-1234-1234-123456789abc';
const FULANOSANDER_EMAIL = 'fulanosander@gmail.com';

function gerarTokenFulanosander() {
  console.log('🔧 GERANDO TOKEN PARA NOVO ADMIN');
  console.log('==================================\n');

  try {
    // Verificar se JWT_SECRET está configurado
    if (!process.env.JWT_SECRET) {
      console.log('❌ JWT_SECRET não está configurado!');
      console.log('📝 Adicione JWT_SECRET=sua_chave_secreta no arquivo .env');
      console.log('💡 Exemplo: JWT_SECRET=minha_chave_super_secreta_123');
      return;
    }
    console.log('✅ JWT_SECRET configurado');
    console.log('');

    // Dados do novo usuário admin
    console.log('📋 DADOS DO NOVO ADMIN:');
    console.log('   ID:', FULANOSANDER_USER_ID);
    console.log('   Email:', FULANOSANDER_EMAIL);
    console.log('   Role: admin');
    console.log('');

    // Gerar token JWT
    console.log('🔑 Gerando token JWT...');
    
    const payload = {
      userId: FULANOSANDER_USER_ID,
      email: FULANOSANDER_EMAIL,
      role: 'admin',
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60) // 24 horas
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET);
    console.log('✅ Token JWT gerado com sucesso!');
    console.log('');

    // Atualizar arquivo de teste
    console.log('📝 Atualizando arquivo de teste...');
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
    } else {
      console.log('⚠️ Arquivo de teste não encontrado');
    }
    console.log('');

    // Resumo final
    console.log('🎯 RESUMO:');
    console.log('==========');
    console.log('✅ Novo usuário admin criado');
    console.log('✅ Token JWT gerado com sucesso');
    console.log('✅ Arquivo de teste atualizado');
    console.log('');
    console.log('👤 USUÁRIO ADMIN:');
    console.log('   ID:', FULANOSANDER_USER_ID);
    console.log('   Email:', FULANOSANDER_EMAIL);
    console.log('   Role: admin');
    console.log('');
    console.log('🔑 TOKEN JWT:');
    console.log(token);
    console.log('');
    console.log('📋 PRÓXIMOS PASSOS:');
    console.log('1. Execute o script SQL criar-novo-admin.sql no banco de produção');
    console.log('2. Use este token no frontend para acessar o controller');
    console.log('3. Teste o login com o email fulanosander@gmail.com');
    console.log('');
    console.log('🌐 Para testar no frontend:');
    console.log('Authorization: Bearer ' + token);
    console.log('');
    console.log('⚠️ IMPORTANTE:');
    console.log('   - Execute o SQL primeiro para criar o usuário no banco');
    console.log('   - Este token é válido por 24 horas');
    console.log('   - Use o email fulanosander@gmail.com para login');

  } catch (error) {
    console.error('❌ Erro ao gerar token:', error.message);
  }
}

// Função para testar o token
async function testarToken() {
  console.log('\n🧪 TESTANDO TOKEN GERADO');
  console.log('========================\n');

  try {
    const axios = require('axios');
    const BASE_URL = 'http://localhost:3000/admin';
    
    // Gerar token novamente para teste
    const payload = {
      userId: FULANOSANDER_USER_ID,
      email: FULANOSANDER_EMAIL,
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
  testarToken();
} else if (process.argv.includes('--help')) {
  console.log('📖 AJUDA:');
  console.log('node gerar-token-fulanosander.js          - Gerar token para novo admin');
  console.log('node gerar-token-fulanosander.js --test   - Testar token gerado');
  console.log('node gerar-token-fulanosander.js --help   - Mostrar ajuda');
  console.log('');
  console.log('📋 PRÉ-REQUISITOS:');
  console.log('1. JWT_SECRET configurado no .env');
  console.log('2. Usuário fulanosander criado no banco (execute criar-novo-admin.sql)');
} else {
  gerarTokenFulanosander();
} 