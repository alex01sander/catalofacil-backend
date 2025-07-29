const axios = require('axios');
const jwt = require('jsonwebtoken');

// Configuração da API
const API_BASE_URL = process.env.API_URL || 'https://catalofacil.catalofacil.com.br/api';
const JWT_SECRET = process.env.JWT_SECRET || '@Lex141828';

// Gerar token JWT válido para teste
function generateTestToken() {
  const payload = {
    id: 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f', // ID do usuário de teste
    email: 'teste@exemplo.com',
    role: 'user'
  };
  
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
}

async function testCreditTransactionsDebug() {
  console.log('🔍 Testando Rotas de Transações de Crédito (Debug)...\n');
  
  const testToken = generateTestToken();
  console.log('🔑 Token gerado:', testToken.substring(0, 50) + '...');
  
  const headers = {
    'Authorization': `Bearer ${testToken}`,
    'Content-Type': 'application/json'
  };
  
  try {
    // 1. Verificar se a rota base existe
    console.log('1️⃣ Testando rota base /credit-transactions...');
    try {
      const response = await axios.get(`${API_BASE_URL}/credit-transactions`, { headers });
      console.log('✅ Rota base funcionando:', {
        status: response.status,
        dataCount: response.data.data?.length || 0
      });
    } catch (error) {
      console.log('❌ Erro na rota base:', {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message
      });
    }
    
    console.log('');
    
    // 2. Testar payload exato do frontend (rota errada)
    console.log('2️⃣ Testando payload do frontend na rota errada...');
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
    
    try {
      const response = await axios.post(`${API_BASE_URL}/credit-transactions`, payloadFrontend, { headers });
      console.log('✅ POST na rota base funcionou (inesperado):', response.data);
    } catch (error) {
      console.log('❌ POST na rota base falhou (esperado):', {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message
      });
    }
    
    console.log('');
    
    // 3. Testar payload correto na rota correta
    console.log('3️⃣ Testando payload correto na rota /debit-with-installments...');
    const payloadCorreto = {
      customer_name: "Alex Sander",
      customer_phone: "51992401184",
      customer_address: "Rua Padre Raulino Reitz, nº 123",
      is_new_customer: false,
      existing_customer_id: "73b21da7-4984-4157-ab0f-155989ef05e8",
      description: "Venda de 1 produtos",
      total_amount: 150,
      installments_count: 2,
      frequency: "mensal",
      first_due_date: "2025-07-29",
      observations: ""
    };
    
    console.log('📤 Payload correto:', JSON.stringify(payloadCorreto, null, 2));
    
    try {
      const response = await axios.post(`${API_BASE_URL}/credit-transactions/debit-with-installments`, payloadCorreto, { headers });
      console.log('✅ Débito com parcelamento criado:', {
        transaction_id: response.data.transaction?.id,
        installments_count: response.data.installments?.length,
        credit_account_id: response.data.credit_account_id
      });
    } catch (error) {
      console.log('❌ Erro no débito com parcelamento:', {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message
      });
    }
    
    console.log('');
    
    // 4. Testar transação simples
    console.log('4️⃣ Testando transação simples...');
    const transacaoSimples = {
      credit_account_id: "73b21da7-4984-4157-ab0f-155989ef05e8",
      type: "debito",
      amount: 100,
      description: "Teste de transação simples"
    };
    
    console.log('📤 Transação simples:', JSON.stringify(transacaoSimples, null, 2));
    
    try {
      const response = await axios.post(`${API_BASE_URL}/credit-transactions`, transacaoSimples, { headers });
      console.log('✅ Transação simples criada:', {
        id: response.data.id,
        amount: response.data.amount,
        type: response.data.type
      });
    } catch (error) {
      console.log('❌ Erro na transação simples:', {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message
      });
    }
    
    console.log('');
    
    // 5. Listar transações existentes
    console.log('5️⃣ Listando transações existentes...');
    try {
      const response = await axios.get(`${API_BASE_URL}/credit-transactions`, { headers });
      console.log(`✅ Transações encontradas: ${response.data.data?.length || 0}`);
      
      if (response.data.data && response.data.data.length > 0) {
        console.log('📋 Transações:');
        response.data.data.forEach((transacao, index) => {
          console.log(`  ${index + 1}. ${transacao.type} - R$ ${transacao.amount} - ${transacao.description}`);
        });
      }
    } catch (error) {
      console.log('❌ Erro ao listar transações:', error.response?.data || error.message);
    }
    
  } catch (error) {
    console.error('❌ Erro geral:', error.response?.data || error.message);
    
    if (error.response?.status === 401) {
      console.log('\n💡 Dica: Verifique se o token está correto');
    }
  }
}

// Executar teste
testCreditTransactionsDebug(); 