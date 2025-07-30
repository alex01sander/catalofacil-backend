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

async function testPaymentDebug() {
  console.log('🔍 Debugando Problema do Pagamento...\n');
  
  const testToken = generateTestToken();
  const headers = {
    'Authorization': `Bearer ${testToken}`,
    'Content-Type': 'application/json'
  };
  
  try {
    // Testar diferentes formatos de pagamento
    const testCases = [
      {
        name: 'Formato Frontend (payment)',
        payload: {
          credit_account_id: "2091f806-f03a-4d62-8982-04d39e23f744",
          type: "payment",
          amount: 100,
          date: "2025-07-30T00:41:22.365Z",
          description: "Pagamento de R$ 100,00"
        }
      },
      {
        name: 'Formato API (pagamento)',
        payload: {
          credit_account_id: "2091f806-f03a-4d62-8982-04d39e23f744",
          type: "pagamento",
          amount: 100,
          date: "2025-07-30T00:41:22.365Z",
          description: "Pagamento de R$ 100,00"
        }
      },
      {
        name: 'Formato Frontend (payment) - sem date',
        payload: {
          credit_account_id: "2091f806-f03a-4d62-8982-04d39e23f744",
          type: "payment",
          amount: 100,
          description: "Pagamento de R$ 100,00"
        }
      }
    ];
    
    for (const testCase of testCases) {
      console.log(`\n🧪 Testando: ${testCase.name}`);
      console.log('📤 Payload:', JSON.stringify(testCase.payload, null, 2));
      
      try {
        const response = await axios.post(`${API_BASE_URL}/creditTransactions`, testCase.payload, { headers });
        console.log('✅ Sucesso:', {
          status: response.status,
          id: response.data.id,
          type: response.data.type,
          amount: response.data.amount
        });
      } catch (error) {
        console.log('❌ Erro:', {
          status: error.response?.status,
          data: error.response?.data
        });
        
        // Mostrar detalhes dos erros de validação
        if (error.response?.data?.details) {
          console.log('📋 Detalhes dos erros:');
          error.response.data.details.forEach((erro, index) => {
            console.log(`  ${index + 1}. Campo: ${erro.path?.join('.') || 'desconhecido'}`);
            console.log(`     Erro: ${erro.message || erro.code}`);
            console.log(`     Esperado: ${erro.expected || 'N/A'}`);
            console.log('');
          });
        }
      }
    }
    
  } catch (error) {
    console.error('❌ Erro geral:', error.message);
  }
}

testPaymentDebug(); 