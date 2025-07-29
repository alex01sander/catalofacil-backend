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

async function testFrontendPayload() {
  console.log('🔍 Testando Payload do Frontend na Rota Correta...\n');
  
  const testToken = generateTestToken();
  const headers = {
    'Authorization': `Bearer ${testToken}`,
    'Content-Type': 'application/json'
  };
  
  try {
    // Payload exato do frontend
    const payloadFrontend = {
      credit_account_id: "73b21da7-4984-4157-ab0f-155989ef05e8",
      type: "debt",
      amount: 150,
      description: "Venda de 1 produtos",
      final_due_date: "2025-08-28",
      first_payment_date: "2025-07-29",
      frequency: "monthly",
      installment_value: 75,
      installments: 2,
      observations: "",
      products: [{product_id: "76f7aba7-0819-4911-a3cd-f3da94e5fcbd", quantity: 1}]
    };
    
    console.log('📤 Payload do frontend:', JSON.stringify(payloadFrontend, null, 2));
    
    // Testar na rota correta (sem hífen)
    console.log('\n1️⃣ Testando na rota correta /creditTransactions...');
    try {
      const response = await axios.post(`${API_BASE_URL}/creditTransactions`, payloadFrontend, { headers });
      console.log('✅ POST na rota correta funcionou:', {
        status: response.status,
        data: response.data
      });
    } catch (error) {
      console.log('❌ POST na rota correta falhou:', {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message
      });
    }
    
    console.log('\n2️⃣ Testando na rota com hífen /credit-transactions...');
    try {
      const response = await axios.post(`${API_BASE_URL}/credit-transactions`, payloadFrontend, { headers });
      console.log('✅ POST na rota com hífen funcionou:', {
        status: response.status,
        data: response.data
      });
    } catch (error) {
      console.log('❌ POST na rota com hífen falhou:', {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message
      });
    }
    
  } catch (error) {
    console.error('❌ Erro geral:', error.message);
  }
}

testFrontendPayload(); 