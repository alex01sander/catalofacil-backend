const axios = require('axios');

// Configurações
const BASE_URL = 'http://localhost:3000/admin';
const ALEXSANDER_USER_ID = '05703665-81d7-4c1d-9bb0-660f0571f465';
const ALEXSANDER_EMAIL = 'alexsander01@hotmail.com.br';

// Token JWT para o usuário alexsander (você precisará gerar um token válido)
// Este é um exemplo - você deve gerar um token real com o JWT_SECRET correto
const generateTestToken = () => {
  // Em produção, você deve gerar um token JWT real
  // Por enquanto, vamos usar um token de exemplo
  return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwNTcwMzY2NS04MWQ3LTRjMWQtOWJiMC02NjBmMDU3MWY0NjUiLCJlbWFpbCI6ImFsZXhzYW5kZXIwMUBob3RtYWlsLmNvbS5iciIsImlhdCI6MTc1NDMxODgxMiwiZXhwIjoxNzU0NDA1MjEyfQ.example_signature';
};

async function testAlexsanderAdminAccess() {
  console.log('🧪 Testando acesso do usuário alexsander como admin...\n');
  
  const token = generateTestToken();
  
  const headers = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  };
  
  console.log('👤 Dados do usuário:');
  console.log('   ID:', ALEXSANDER_USER_ID);
  console.log('   Email:', ALEXSANDER_EMAIL);
  console.log('   Token:', token.substring(0, 50) + '...');
  console.log('');
  
  // 1. Testar Dashboard Admin
  console.log('1️⃣ Testando GET /admin/dashboard');
  try {
    const response = await axios.get(`${BASE_URL}/dashboard`, { headers });
    console.log('✅ Status:', response.status);
    console.log('📊 Dashboard acessível');
  } catch (error) {
    console.log('❌ Status:', error.response?.status || 'Erro de conexão');
    console.log('❌ Erro:', error.response?.data?.error || error.message);
  }
  console.log('');
  
  // 2. Testar Listagem de Domínios
  console.log('2️⃣ Testando GET /admin/domains');
  try {
    const response = await axios.get(`${BASE_URL}/domains`, { headers });
    console.log('✅ Status:', response.status);
    console.log('🌐 Domínios encontrados:', response.data.domains?.length || 0);
  } catch (error) {
    console.log('❌ Status:', error.response?.status || 'Erro de conexão');
    console.log('❌ Erro:', error.response?.data?.error || error.message);
  }
  console.log('');
  
  // 3. Testar Criação de Domínio
  console.log('3️⃣ Testando POST /admin/register-domain-user');
  try {
    const domainData = {
      domain: 'teste.alexsander.com.br',
      user_email: 'teste@alexsander.com.br',
      user_password: 'senha123',
      user_role: 'admin'
    };
    
    const response = await axios.post(`${BASE_URL}/register-domain-user`, domainData, { headers });
    console.log('✅ Status:', response.status);
    console.log('✅ Domínio criado:', response.data.domain?.domain);
    console.log('✅ Usuário criado:', response.data.user?.email);
  } catch (error) {
    console.log('❌ Status:', error.response?.status || 'Erro de conexão');
    console.log('❌ Erro:', error.response?.data?.error || error.message);
  }
  console.log('');
  
  // 4. Testar Listagem de Usuários
  console.log('4️⃣ Testando GET /admin/users');
  try {
    const response = await axios.get(`${BASE_URL}/users`, { headers });
    console.log('✅ Status:', response.status);
    console.log('👥 Usuários encontrados:', response.data.users?.length || 0);
  } catch (error) {
    console.log('❌ Status:', error.response?.status || 'Erro de conexão');
    console.log('❌ Erro:', error.response?.data?.error || error.message);
  }
  console.log('');
  
  console.log('🎯 Teste concluído!');
  console.log('');
  console.log('📝 PRÓXIMOS PASSOS:');
  console.log('1. Execute o script SQL criar-alexsander-admin.sql no banco');
  console.log('2. Gere um token JWT válido para o usuário alexsander');
  console.log('3. Atualize o token neste script de teste');
  console.log('4. Execute novamente para verificar o acesso');
}

// Função para gerar token JWT real (se necessário)
function generateRealJWT() {
  console.log('🔑 Para gerar um token JWT real:');
  console.log('1. Use o JWT_SECRET do seu .env');
  console.log('2. Payload deve conter:');
  console.log('   - userId: "05703665-81d7-4c1d-9bb0-660f0571f465"');
  console.log('   - email: "alexsander01@hotmail.com.br"');
  console.log('   - exp: timestamp de expiração');
  console.log('');
  console.log('3. Ou use a rota de login da API para obter um token válido');
}

if (process.argv.includes('--help')) {
  console.log('📖 AJUDA:');
  console.log('node test-alexsander-admin.js          - Executar teste');
  console.log('node test-alexsander-admin.js --help   - Mostrar ajuda');
  generateRealJWT();
} else {
  testAlexsanderAdminAccess();
} 