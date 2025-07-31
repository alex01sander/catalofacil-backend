const axios = require('axios');
const jwt = require('jsonwebtoken');

// Configuração
const BASE_URL = 'http://localhost:3000';
const JWT_SECRET = process.env.JWT_SECRET || 'test-secret';

// Token de teste
const testUser = {
  id: 'test-user-123',
  email: 'test@example.com'
};
const authToken = jwt.sign(testUser, JWT_SECRET);

async function testIntegration() {
  console.log('🧪 Testando integração Clientes-Crediário...\n');

  try {
    // 1. Testar rota de clientes disponíveis para crediário
    console.log('1️⃣ Testando GET /customers/available-for-credit');
    try {
      const response = await axios.get(`${BASE_URL}/customers/available-for-credit`, {
        headers: { Authorization: `Bearer ${authToken}` }
      });
      console.log('✅ Sucesso:', response.status, response.data.message);
      console.log('   Clientes disponíveis:', response.data.total);
    } catch (error) {
      console.log('❌ Erro:', error.response?.status, error.response?.data?.error || error.message);
    }

    // 2. Testar rota de informações do cliente para crediário
    console.log('\n2️⃣ Testando GET /creditAccounts/customer/:customerId');
    try {
      const response = await axios.get(`${BASE_URL}/creditAccounts/customer/test-customer-id`, {
        headers: { Authorization: `Bearer ${authToken}` }
      });
      console.log('✅ Sucesso:', response.status);
      console.log('   Cliente:', response.data.customer?.name);
      console.log('   Tem crediário:', response.data.hasCreditAccount);
    } catch (error) {
      console.log('❌ Erro:', error.response?.status, error.response?.data?.error || error.message);
    }

    // 3. Testar criação de crediário com cliente
    console.log('\n3️⃣ Testando POST /creditAccounts');
    try {
      const creditData = {
        customer_id: 'test-customer-id',
        total_debt: 0,
        status: 'active'
      };
      
      const response = await axios.post(`${BASE_URL}/creditAccounts`, creditData, {
        headers: { 
          Authorization: `Bearer ${authToken}`,
          'Content-Type': 'application/json'
        }
      });
      console.log('✅ Sucesso:', response.status);
      console.log('   Crediário criado:', response.data.id);
    } catch (error) {
      console.log('❌ Erro:', error.response?.status, error.response?.data?.error || error.message);
    }

    // 4. Testar listagem de crediários
    console.log('\n4️⃣ Testando GET /creditAccounts');
    try {
      const response = await axios.get(`${BASE_URL}/creditAccounts`, {
        headers: { Authorization: `Bearer ${authToken}` }
      });
      console.log('✅ Sucesso:', response.status);
      console.log('   Total de crediários:', response.data.data?.length || 0);
    } catch (error) {
      console.log('❌ Erro:', error.response?.status, error.response?.data?.error || error.message);
    }

    console.log('\n🎉 Teste de integração concluído!');

  } catch (error) {
    console.error('💥 Erro geral:', error.message);
  }
}

// Executar teste se o arquivo for chamado diretamente
if (require.main === module) {
  testIntegration();
}

module.exports = { testIntegration }; 