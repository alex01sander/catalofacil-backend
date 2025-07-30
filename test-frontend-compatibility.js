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

async function testFrontendCompatibility() {
  console.log('🔍 Testando Compatibilidade com Frontend...\n');
  
  const testToken = generateTestToken();
  const headers = {
    'Authorization': `Bearer ${testToken}`,
    'Content-Type': 'application/json'
  };
  
  try {
    // Payload exato do frontend (das imagens)
    const payloadFrontend = {
      credit_account_id: "2091f806-f03a-4d62-8982-04d39e23f744",
      type: "debt",
      amount: 150,
      description: "Venda de 1 produtos",
      final_due_date: "2026-04-28",
      first_payment_date: "2025-07-29",
      frequency: "monthly",
      installment_value: 15,
      installments: 10,
      observations: "",
      products: [{product_id: "76f7aba7-0819-4911-a3cd-f3da94e5fcbd", quantity: 1}]
    };
    
    console.log('📤 Payload do frontend:', JSON.stringify(payloadFrontend, null, 2));
    
    // Testar na rota correta
    console.log('\n1️⃣ Testando na rota /creditTransactions/debit-with-installments...');
    try {
      const response = await axios.post(`${API_BASE_URL}/creditTransactions/debit-with-installments`, payloadFrontend, { headers });
      console.log('✅ POST funcionou:', {
        status: response.status,
        success: response.data.success,
        message: response.data.message,
        transaction_id: response.data.transaction?.id,
        installments_count: response.data.installments?.length
      });
    } catch (error) {
      console.log('❌ POST falhou:', {
        status: error.response?.status,
        data: error.response?.data
      });
      
      // Mostrar detalhes dos erros de validação
      if (error.response?.data?.details) {
        console.log('\n📋 Detalhes dos erros de validação:');
        error.response.data.details.forEach((erro, index) => {
          console.log(`  ${index + 1}. Campo: ${erro.path?.join('.') || 'desconhecido'}`);
          console.log(`     Erro: ${erro.message || erro.code}`);
          console.log(`     Esperado: ${erro.expected || 'N/A'}`);
          console.log('');
        });
      }
    }
    
    console.log('\n2️⃣ Verificando se o cliente existe...');
    try {
      const response = await axios.get(`${API_BASE_URL}/credit-accounts`, { headers });
      const cliente = response.data.data?.find(c => c.id === payloadFrontend.credit_account_id);
      if (cliente) {
        console.log('✅ Cliente encontrado:', {
          id: cliente.id,
          name: cliente.customer_name,
          phone: cliente.customer_phone,
          total_debt: cliente.total_debt
        });
      } else {
        console.log('❌ Cliente não encontrado');
      }
    } catch (error) {
      console.log('❌ Erro ao buscar cliente:', error.response?.data || error.message);
    }
    
  } catch (error) {
    console.error('❌ Erro geral:', error.message);
  }
}

testFrontendCompatibility(); 