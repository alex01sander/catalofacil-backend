const axios = require('axios');
const jwt = require('jsonwebtoken');

// Configuração da API
const API_BASE_URL = process.env.API_URL || 'https://catalofacil.catalofacil.com.br/api';
const JWT_SECRET = process.env.JWT_SECRET || '@Lex141828';

// Gerar token JWT válido para teste
function generateTestToken() {
  const payload = {
    id: 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f',
    email: 'teste@exemplo.com',
    role: 'user'
  };
  
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
}

async function testRouteSimple() {
  console.log('🔍 Teste Simples de Rotas...\n');
  
  const testToken = generateTestToken();
  const headers = {
    'Authorization': `Bearer ${testToken}`,
    'Content-Type': 'application/json'
  };
  
  try {
    // Testar rota que sabemos que funciona
    console.log('1️⃣ Testando rota /credit-accounts (que sabemos que funciona)...');
    try {
      const response = await axios.get(`${API_BASE_URL}/credit-accounts`, { headers });
      console.log('✅ /credit-accounts funcionando:', response.status);
    } catch (error) {
      console.log('❌ /credit-accounts falhou:', error.response?.status);
    }
    
    console.log('');
    
    // Testar rota credit-transactions
    console.log('2️⃣ Testando rota /credit-transactions...');
    try {
      const response = await axios.get(`${API_BASE_URL}/credit-transactions`, { headers });
      console.log('✅ /credit-transactions funcionando:', response.status);
    } catch (error) {
      console.log('❌ /credit-transactions falhou:', {
        status: error.response?.status,
        data: error.response?.data
      });
    }
    
    console.log('');
    
    // Testar rota creditTransactions (sem hífen)
    console.log('3️⃣ Testando rota /creditTransactions (sem hífen)...');
    try {
      const response = await axios.get(`${API_BASE_URL}/creditTransactions`, { headers });
      console.log('✅ /creditTransactions funcionando:', response.status);
    } catch (error) {
      console.log('❌ /creditTransactions falhou:', {
        status: error.response?.status,
        data: error.response?.data
      });
    }
    
    console.log('');
    
    // Testar rota de health check
    console.log('4️⃣ Testando rota /health...');
    try {
      const response = await axios.get(`${API_BASE_URL}/health`);
      console.log('✅ /health funcionando:', response.status);
    } catch (error) {
      console.log('❌ /health falhou:', error.response?.status);
    }
    
  } catch (error) {
    console.error('❌ Erro geral:', error.message);
  }
}

testRouteSimple(); 