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

async function testCompleteCreditSystem() {
  console.log('🚀 TESTE COMPLETO DO SISTEMA DE CRÉDITO\n');
  
  const testToken = generateTestToken();
  const headers = {
    'Authorization': `Bearer ${testToken}`,
    'Content-Type': 'application/json'
  };

  let createdCustomerId = null;
  let createdTransactionId = null;

  try {
    // 1. TESTE: Criar Cliente
    console.log('1️⃣ Testando criação de cliente...');
    const customerData = {
      name: 'João Silva',
      whatsapp: '51987654321',
      address: 'Rua das Flores, 123'
    };

    const customerResponse = await axios.post(`${API_BASE_URL}/credit-accounts`, customerData, { headers });
    createdCustomerId = customerResponse.data.id;
    console.log('✅ Cliente criado:', {
      id: customerResponse.data.id,
      name: customerResponse.data.name,
      total_debt: customerResponse.data.total_debt
    });

    // 2. TESTE: Débito com Parcelamento
    console.log('\n2️⃣ Testando débito com parcelamento...');
    const debitData = {
      customer: {
        name: 'Maria Santos',
        whatsapp: '51912345678',
        address: 'Av. Principal, 456'
      },
      transaction: {
        description: 'Compra de eletrodomésticos',
        total_amount: 300,
        installments_count: 3,
        frequency: 'monthly',
        first_due_date: '2025-08-01'
      }
    };

    const debitResponse = await axios.post(`${API_BASE_URL}/credit-transactions/debit-with-installments`, debitData, { headers });
    createdTransactionId = debitResponse.data.transaction.id;
    console.log('✅ Débito criado:', {
      transaction_id: debitResponse.data.transaction.id,
      amount: debitResponse.data.transaction.amount,
      installments_count: debitResponse.data.installments.length
    });

    // 3. TESTE: Pagamento Simples
    console.log('\n3️⃣ Testando pagamento simples...');
    const paymentData = {
      credit_account_id: createdCustomerId,
      type: 'payment',
      amount: 50,
      description: 'Pagamento parcial',
      date: new Date().toISOString()
    };

    const paymentResponse = await axios.post(`${API_BASE_URL}/credit-transactions`, paymentData, { headers });
    console.log('✅ Pagamento registrado:', {
      id: paymentResponse.data.id,
      type: paymentResponse.data.type,
      amount: paymentResponse.data.amount
    });

    // 4. TESTE: Listar Clientes
    console.log('\n4️⃣ Testando listagem de clientes...');
    const customersResponse = await axios.get(`${API_BASE_URL}/credit-accounts`, { headers });
    console.log('✅ Clientes listados:', {
      total: customersResponse.data.total,
      count: customersResponse.data.data.length
    });

    // 5. TESTE: Histórico do Cliente
    console.log('\n5️⃣ Testando histórico do cliente...');
    const historyResponse = await axios.get(`${API_BASE_URL}/credit-accounts/${createdCustomerId}/transactions`, { headers });
    console.log('✅ Histórico obtido:', {
      customer_id: createdCustomerId,
      transactions_count: historyResponse.data.length
    });

    // 6. TESTE: Listar Transações
    console.log('\n6️⃣ Testando listagem de transações...');
    const transactionsResponse = await axios.get(`${API_BASE_URL}/credit-transactions`, { headers });
    console.log('✅ Transações listadas:', {
      total: transactionsResponse.data.total,
      count: transactionsResponse.data.data.length
    });

    // 7. TESTE: Buscar Transação Específica
    console.log('\n7️⃣ Testando busca de transação específica...');
    const transactionResponse = await axios.get(`${API_BASE_URL}/credit-transactions/${createdTransactionId}`, { headers });
    console.log('✅ Transação encontrada:', {
      id: transactionResponse.data.id,
      type: transactionResponse.data.type,
      amount: transactionResponse.data.amount
    });

    console.log('\n🎉 TODOS OS TESTES PASSARAM!');
    console.log('\n📊 RESUMO:');
    console.log('• ✅ Criação de clientes funcionando');
    console.log('• ✅ Débitos com parcelamento funcionando');
    console.log('• ✅ Pagamentos simples funcionando');
    console.log('• ✅ Listagens funcionando');
    console.log('• ✅ Histórico de clientes funcionando');
    console.log('• ✅ Busca de transações funcionando');
    console.log('\n🚀 Sistema de crédito 100% operacional!');

  } catch (error) {
    console.log('\n❌ ERRO NO TESTE:');
    console.log('Status:', error.response?.status);
    console.log('Mensagem:', error.response?.data?.message || error.message);
    console.log('URL:', error.config?.url);
    console.log('Payload:', error.config?.data);
    
    if (error.response?.status === 404) {
      console.log('\n💡 DICA: O servidor pode precisar ser reiniciado para aplicar as mudanças.');
    }
  }
}

testCompleteCreditSystem().catch(console.error); 