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

async function testAllCreditRoutes() {
  console.log('🔍 Testando Todas as Rotas de Crédito...\n');
  
  const testToken = generateTestToken();
  const headers = {
    'Authorization': `Bearer ${testToken}`,
    'Content-Type': 'application/json'
  };
  
  try {
    // 1. Testar rota de pagamento (formato frontend)
    console.log('1️⃣ Testando rota de pagamento (formato frontend)...');
    const payloadPagamento = {
      credit_account_id: "2091f806-f03a-4d62-8982-04d39e23f744",
      type: "payment",
      amount: 100,
      date: "2025-07-30T00:41:22.365Z",
      description: "Pagamento de R$ 100,00"
    };
    
    console.log('📤 Payload de pagamento:', JSON.stringify(payloadPagamento, null, 2));
    
    try {
      const response = await axios.post(`${API_BASE_URL}/creditTransactions`, payloadPagamento, { headers });
      console.log('✅ Pagamento criado com sucesso:', {
        status: response.status,
        id: response.data.id,
        type: response.data.type,
        amount: response.data.amount
      });
    } catch (error) {
      console.log('❌ Erro no pagamento:', {
        status: error.response?.status,
        data: error.response?.data
      });
    }
    
    console.log('');
    
    // 2. Testar rota de débito com parcelamento
    console.log('2️⃣ Testando rota de débito com parcelamento...');
    const payloadDebito = {
      credit_account_id: "2091f806-f03a-4d62-8982-04d39e23f744",
      type: "debt",
      amount: 150,
      description: "Venda de 1 produtos",
      first_payment_date: "2025-07-29",
      frequency: "monthly",
      installments: 10,
      observations: ""
    };
    
    console.log('📤 Payload de débito:', JSON.stringify(payloadDebito, null, 2));
    
    try {
      const response = await axios.post(`${API_BASE_URL}/creditTransactions/debit-with-installments`, payloadDebito, { headers });
      console.log('✅ Débito com parcelamento criado:', {
        status: response.status,
        transaction_id: response.data.transaction?.id,
        installments_count: response.data.installments?.length
      });
    } catch (error) {
      console.log('❌ Erro no débito com parcelamento:', {
        status: error.response?.status,
        data: error.response?.data
      });
    }
    
    console.log('');
    
    // 3. Testar rota de histórico do cliente
    console.log('3️⃣ Testando rota de histórico do cliente...');
    try {
      const response = await axios.get(`${API_BASE_URL}/credit-accounts/2091f806-f03a-4d62-8982-04d39e23f744/transactions`, { headers });
      console.log('✅ Histórico do cliente carregado:', {
        status: response.status,
        count: response.data.count,
        success: response.data.success
      });
      
      if (response.data.data && response.data.data.length > 0) {
        console.log('📋 Transações encontradas:');
        response.data.data.slice(0, 3).forEach((transacao, index) => {
          console.log(`  ${index + 1}. ${transacao.type} - R$ ${transacao.amount} - ${transacao.description}`);
        });
      }
    } catch (error) {
      console.log('❌ Erro ao carregar histórico:', {
        status: error.response?.status,
        data: error.response?.data
      });
    }
    
    console.log('');
    
    // 4. Testar rota credit-transactions (alias)
    console.log('4️⃣ Testando rota /credit-transactions (alias)...');
    try {
      const response = await axios.get(`${API_BASE_URL}/credit-transactions`, { headers });
      console.log('✅ Rota /credit-transactions funcionando:', {
        status: response.status,
        count: response.data.data?.length || 0
      });
    } catch (error) {
      if (error.response?.status === 401) {
        console.log('✅ Rota /credit-transactions existe (401 - auth required)');
      } else {
        console.log('❌ Rota /credit-transactions não funciona:', {
          status: error.response?.status,
          data: error.response?.data
        });
      }
    }
    
    console.log('');
    
    // 5. Testar rota creditTransactions (original)
    console.log('5️⃣ Testando rota /creditTransactions (original)...');
    try {
      const response = await axios.get(`${API_BASE_URL}/creditTransactions`, { headers });
      console.log('✅ Rota /creditTransactions funcionando:', {
        status: response.status,
        count: response.data.data?.length || 0
      });
    } catch (error) {
      if (error.response?.status === 401) {
        console.log('✅ Rota /creditTransactions existe (401 - auth required)');
      } else {
        console.log('❌ Rota /creditTransactions não funciona:', {
          status: error.response?.status,
          data: error.response?.data
        });
      }
    }
    
    console.log('\n📋 Resumo dos Testes:');
    console.log('✅ Se todos os testes passaram: Sistema funcionando corretamente');
    console.log('⚠️ Se alguns testes falharam: Verificar logs acima');
    console.log('❌ Se muitos testes falharam: Servidor precisa ser reiniciado');
    
  } catch (error) {
    console.error('❌ Erro geral:', error.message);
  }
}

testAllCreditRoutes(); 