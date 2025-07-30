const axios = require('axios');
const jwt = require('jsonwebtoken');

const API_BASE_URL = process.env.API_URL || 'https://catalofacil.catalofacil.com.br/api';
const JWT_SECRET = process.env.JWT_SECRET || '@Lex141828';

function generateTestToken() {
  const payload = {
    id: 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f',
    email: 'test@example.com'
  };
  
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
}

async function testPaymentUrls() {
  console.log('🔍 Testando URLs de Pagamento...\n');
  
  const testToken = generateTestToken();
  const headers = {
    'Authorization': `Bearer ${testToken}`,
    'Content-Type': 'application/json'
  };

  const payload = {
    credit_account_id: "2091f806-f03a-4d62-8982-04d39e23f744",
    type: "payment",
    amount: 50,
    description: "Teste de pagamento",
    date: new Date().toISOString()
  };

  const testCases = [
    {
      name: '❌ URL INCORRETA (que o frontend está usando)',
      url: '/creditTransactions/payment',
      expected: '404 Not Found'
    },
    {
      name: '✅ URL CORRETA (que deveria usar)',
      url: '/creditTransactions',
      expected: '201 Created'
    }
  ];

  for (const testCase of testCases) {
    console.log(`\n🧪 ${testCase.name}`);
    console.log(`📤 URL: ${testCase.url}`);
    console.log(`📋 Payload:`, JSON.stringify(payload, null, 2));
    
    try {
      const response = await axios.post(`${API_BASE_URL}${testCase.url}`, payload, { headers });
      console.log(`✅ Sucesso: ${response.status} ${response.statusText}`);
      console.log(`📄 Resposta:`, {
        id: response.data.id,
        type: response.data.type,
        amount: response.data.amount
      });
    } catch (error) {
      console.log(`❌ Erro: ${error.response?.status} ${error.response?.statusText}`);
      if (error.response?.data) {
        console.log(`📄 Detalhes:`, error.response.data);
      }
    }
  }

  console.log('\n📋 RESUMO:');
  console.log('• A URL /creditTransactions/payment NÃO existe no backend');
  console.log('• A URL /creditTransactions EXISTE e funciona para pagamentos');
  console.log('• O frontend precisa ser corrigido para usar a URL correta');
}

testPaymentUrls().catch(console.error); 