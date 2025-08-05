const axios = require('axios');

// Configurações
const BASE_URL = 'http://localhost:3000/controller';
const ALEXSANDER_USER_ID = '05703665-81d7-4c1d-9bb0-660f0571f465';
const ALEXSANDER_EMAIL = 'alexsander01@hotmail.com.br';

// Token JWT para o usuário alexsander (você precisará gerar um token válido)
const generateTestToken = () => {
  // Em produção, você deve gerar um token JWT real
  return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwNTcwMzY2NS04MWQ3LTRjMWQtOWJiMC02NjBmMDU3MWY0NjUiLCJlbWFpbCI6ImFsZXhzYW5kZXIwMUBob3RtYWlsLmNvbS5iciIsImlhdCI6MTc1NDMxODgxMiwiZXhwIjoxNzU0NDA1MjEyfQ.example_signature';
};

async function testControllerRoutes() {
  console.log('🧪 Testando rotas do Controller Admin...\n');
  
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
  
  // 1. Testar Dashboard Principal do Controller
  console.log('1️⃣ Testando GET /controller/ (Dashboard Principal)');
  try {
    const response = await axios.get(`${BASE_URL}/`, { headers });
    console.log('✅ Status:', response.status);
    console.log('📊 Estatísticas:', response.data.stats);
    console.log('🌐 Domínios recentes:', response.data.recentDomains?.length || 0);
    console.log('🏆 Top Produtos:', response.data.topProducts?.length || 0);
  } catch (error) {
    console.log('❌ Status:', error.response?.status || 'Erro de conexão');
    console.log('❌ Erro:', error.response?.data?.error || error.message);
  }
  console.log('');
  
  // 2. Testar Listagem de Domínios
  console.log('2️⃣ Testando GET /controller/domains');
  try {
    const response = await axios.get(`${BASE_URL}/domains`, { headers });
    console.log('✅ Status:', response.status);
    console.log('🌐 Domínios encontrados:', response.data.domains?.length || 0);
    console.log('📄 Paginação:', response.data.pagination);
  } catch (error) {
    console.log('❌ Status:', error.response?.status || 'Erro de conexão');
    console.log('❌ Erro:', error.response?.data?.error || error.message);
  }
  console.log('');
  
  // 3. Testar Criação de Domínio
  console.log('3️⃣ Testando POST /controller/domains');
  try {
    const domainData = {
      domain: 'teste.controller.com.br',
      user_id: ALEXSANDER_USER_ID,
      domain_type: 'domain'
    };
    
    const response = await axios.post(`${BASE_URL}/domains`, domainData, { headers });
    console.log('✅ Status:', response.status);
    console.log('✅ Domínio criado:', response.data.domain?.domain);
  } catch (error) {
    console.log('❌ Status:', error.response?.status || 'Erro de conexão');
    console.log('❌ Erro:', error.response?.data?.error || error.message);
  }
  console.log('');
  
  // 4. Testar Cadastro Completo de Domínio e Usuário
  console.log('4️⃣ Testando POST /controller/register-domain-user');
  try {
    const registerData = {
      domain: 'novo.controller.com.br',
      user_email: 'novo@controller.com.br',
      user_password: 'senha123',
      user_role: 'admin'
    };
    
    const response = await axios.post(`${BASE_URL}/register-domain-user`, registerData, { headers });
    console.log('✅ Status:', response.status);
    console.log('✅ Domínio criado:', response.data.domain?.domain);
    console.log('✅ Usuário criado:', response.data.user?.email);
  } catch (error) {
    console.log('❌ Status:', error.response?.status || 'Erro de conexão');
    console.log('❌ Erro:', error.response?.data?.error || error.message);
  }
  console.log('');
  
  // 5. Testar Listagem de Usuários
  console.log('5️⃣ Testando GET /controller/users');
  try {
    const response = await axios.get(`${BASE_URL}/users`, { headers });
    console.log('✅ Status:', response.status);
    console.log('👥 Usuários encontrados:', response.data.users?.length || 0);
    console.log('📄 Paginação:', response.data.pagination);
  } catch (error) {
    console.log('❌ Status:', error.response?.status || 'Erro de conexão');
    console.log('❌ Erro:', error.response?.data?.error || error.message);
  }
  console.log('');
  
  // 6. Testar Listagem de Lojas
  console.log('6️⃣ Testando GET /controller/stores');
  try {
    const response = await axios.get(`${BASE_URL}/stores`, { headers });
    console.log('✅ Status:', response.status);
    console.log('🏪 Lojas encontradas:', response.data.stores?.length || 0);
    console.log('📄 Paginação:', response.data.pagination);
  } catch (error) {
    console.log('❌ Status:', error.response?.status || 'Erro de conexão');
    console.log('❌ Erro:', error.response?.data?.error || error.message);
  }
  console.log('');
  
  // 7. Testar Relatório de Vendas
  console.log('7️⃣ Testando GET /controller/reports/sales');
  try {
    const response = await axios.get(`${BASE_URL}/reports/sales`, { headers });
    console.log('✅ Status:', response.status);
    console.log('💰 Vendas encontradas:', response.data.sales?.length || 0);
    console.log('📊 Resumo:', response.data.summary);
  } catch (error) {
    console.log('❌ Status:', error.response?.status || 'Erro de conexão');
    console.log('❌ Erro:', error.response?.data?.error || error.message);
  }
  console.log('');
  
  console.log('🎯 Teste do Controller concluído!');
  console.log('');
  console.log('📝 PRÓXIMOS PASSOS:');
  console.log('1. Execute o script SQL limpar-duplicidades-seguro.sql no banco');
  console.log('2. Gere um token JWT válido para o usuário alexsander');
  console.log('3. Atualize o token neste script de teste');
  console.log('4. Execute novamente para verificar o acesso');
  console.log('');
  console.log('🌐 URLs disponíveis:');
  console.log('   - Dashboard: http://localhost:3000/controller/');
  console.log('   - Domínios: http://localhost:3000/controller/domains');
  console.log('   - Usuários: http://localhost:3000/controller/users');
  console.log('   - Lojas: http://localhost:3000/controller/stores');
  console.log('   - Relatórios: http://localhost:3000/controller/reports/sales');
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
  console.log('node test-controller-routes.js          - Executar teste');
  console.log('node test-controller-routes.js --help   - Mostrar ajuda');
  generateRealJWT();
} else {
  testControllerRoutes();
} 