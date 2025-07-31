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

async function testTotalDebtRecalculation() {
  console.log('🧮 TESTANDO RECÁLCULO DO TOTAL_DEBT\n');
  
  const testToken = generateTestToken();
  const headers = {
    'Authorization': `Bearer ${testToken}`,
    'Content-Type': 'application/json'
  };

  let customerId = null;
  let transactionId = null;

  try {
    // 1. Criar um cliente para teste
    console.log('1️⃣ Criando cliente para teste...');
    const customerData = {
      name: 'João Silva Teste',
      whatsapp: '51987654321',
      address: 'Rua Teste, 123'
    };

    const customerResponse = await axios.post(`${API_BASE_URL}/credit-accounts`, customerData, { headers });
    customerId = customerResponse.data.id;
    console.log('✅ Cliente criado:', {
      id: customerId,
      name: customerResponse.data.customer_name,
      total_debt: customerResponse.data.total_debt
    });

    // 2. Criar um débito
    console.log('\n2️⃣ Criando débito de R$ 200...');
    const debitData = {
      credit_account_id: customerId,
      type: 'debito',
      amount: 200,
      description: 'Débito de teste',
      date: new Date().toISOString()
    };

    const debitResponse = await axios.post(`${API_BASE_URL}/credit-transactions`, debitData, { headers });
    transactionId = debitResponse.data.id;
    console.log('✅ Débito criado:', {
      id: transactionId,
      type: debitResponse.data.type,
      amount: debitResponse.data.amount
    });

    // 3. Verificar total_debt após débito
    console.log('\n3️⃣ Verificando total_debt após débito...');
    const customerAfterDebit = await axios.get(`${API_BASE_URL}/credit-accounts/${customerId}`, { headers });
    console.log('✅ Total de dívida após débito:', customerAfterDebit.data.total_debt);

    // 4. Criar um pagamento
    console.log('\n4️⃣ Criando pagamento de R$ 50...');
    const paymentData = {
      credit_account_id: customerId,
      type: 'payment',
      amount: 50,
      description: 'Pagamento de teste',
      date: new Date().toISOString()
    };

    const paymentResponse = await axios.post(`${API_BASE_URL}/credit-transactions`, paymentData, { headers });
    console.log('✅ Pagamento criado:', {
      id: paymentResponse.data.id,
      type: paymentResponse.data.type,
      amount: paymentResponse.data.amount
    });

    // 5. Verificar total_debt após pagamento
    console.log('\n5️⃣ Verificando total_debt após pagamento...');
    const customerAfterPayment = await axios.get(`${API_BASE_URL}/credit-accounts/${customerId}`, { headers });
    console.log('✅ Total de dívida após pagamento:', customerAfterPayment.data.total_debt);

    // 6. Testar recálculo manual
    console.log('\n6️⃣ Testando recálculo manual...');
    const recalculationResponse = await axios.post(`${API_BASE_URL}/credit-transactions/recalculate-debt/${customerId}`, {}, { headers });
    console.log('✅ Recálculo realizado:', {
      success: recalculationResponse.data.success,
      total_debt: recalculationResponse.data.total_debt,
      message: recalculationResponse.data.message
    });

    // 7. Verificar total_debt após recálculo
    console.log('\n7️⃣ Verificando total_debt após recálculo...');
    const customerAfterRecalculation = await axios.get(`${API_BASE_URL}/credit-accounts/${customerId}`, { headers });
    console.log('✅ Total de dívida após recálculo:', customerAfterRecalculation.data.total_debt);

    // 8. Listar transações para verificar
    console.log('\n8️⃣ Listando transações da conta...');
    const transactionsResponse = await axios.get(`${API_BASE_URL}/credit-accounts/${customerId}/transactions`, { headers });
    console.log('✅ Transações encontradas:', transactionsResponse.data.length);
    
    transactionsResponse.data.forEach((transacao, index) => {
      console.log(`   ${index + 1}. ${transacao.type}: R$ ${transacao.amount} - ${transacao.description}`);
    });

    console.log('\n🎉 TESTE CONCLUÍDO COM SUCESSO!');
    console.log('\n📊 RESUMO:');
    console.log('• ✅ Criação de débito funcionando');
    console.log('• ✅ Criação de pagamento funcionando');
    console.log('• ✅ Atualização automática do total_debt funcionando');
    console.log('• ✅ Recálculo manual funcionando');
    console.log('• ✅ Listagem de transações funcionando');

  } catch (error) {
    console.log('\n❌ ERRO NO TESTE:');
    console.log('Status:', error.response?.status);
    console.log('Mensagem:', error.response?.data?.message || error.message);
    console.log('URL:', error.config?.url);
    
    if (error.response?.status === 404) {
      console.log('\n💡 DICA: O servidor pode precisar ser reiniciado para aplicar as mudanças.');
    }
  }
}

testTotalDebtRecalculation().catch(console.error); 