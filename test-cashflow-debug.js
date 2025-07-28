const axios = require('axios');

// Configuração da API
const API_BASE_URL = process.env.API_URL || 'http://localhost:3000';

// Token de teste (substitua por um token válido)
const TEST_TOKEN = process.env.TEST_TOKEN || 'seu-token-aqui';

async function testCashFlow() {
  console.log('🧪 Testando Fluxo de Caixa...\n');
  
  const headers = {
    'Authorization': `Bearer ${TEST_TOKEN}`,
    'Content-Type': 'application/json'
  };
  
  try {
    // 1. Testar criação de entrada (income)
    console.log('1️⃣ Testando criação de entrada (income)...');
    const entradaData = {
      user_id: 'user-id-aqui', // Substitua por um user_id válido
      store_id: 'store-id-aqui', // Substitua por um store_id válido
      type: 'income',
      category: 'vendas',
      description: 'Teste de venda',
      amount: 100.00,
      date: new Date(),
      payment_method: 'dinheiro'
    };
    
    console.log('📤 Dados enviados:', entradaData);
    
    try {
      const entradaResponse = await axios.post(`${API_BASE_URL}/cashflow`, entradaData, { headers });
      console.log('✅ Resposta da entrada:', entradaResponse.data);
    } catch (error) {
      console.log('❌ Erro na entrada:', error.response?.data || error.message);
    }
    
    console.log('');
    
    // 2. Testar criação de saída (expense)
    console.log('2️⃣ Testando criação de saída (expense)...');
    const saidaData = {
      user_id: 'user-id-aqui', // Substitua por um user_id válido
      store_id: 'store-id-aqui', // Substitua por um store_id válido
      type: 'expense',
      category: 'despesas',
      description: 'Teste de despesa',
      amount: 50.00,
      date: new Date(),
      payment_method: 'dinheiro'
    };
    
    console.log('📤 Dados enviados:', saidaData);
    
    try {
      const saidaResponse = await axios.post(`${API_BASE_URL}/cashflow`, saidaData, { headers });
      console.log('✅ Resposta da saída:', saidaResponse.data);
    } catch (error) {
      console.log('❌ Erro na saída:', error.response?.data || error.message);
    }
    
    console.log('');
    
    // 3. Testar listagem do fluxo de caixa
    console.log('3️⃣ Testando listagem do fluxo de caixa...');
    try {
      const listResponse = await axios.get(`${API_BASE_URL}/cashflow`, { headers });
      console.log(`✅ Fluxos encontrados: ${listResponse.data.data.length}`);
      
      if (listResponse.data.data.length > 0) {
        console.log('📊 Últimos fluxos:');
        listResponse.data.data.slice(0, 3).forEach((fluxo, index) => {
          console.log(`  ${index + 1}. ${fluxo.type} - R$ ${fluxo.amount} - ${fluxo.description}`);
        });
      }
    } catch (error) {
      console.log('❌ Erro na listagem:', error.response?.data || error.message);
    }
    
  } catch (error) {
    console.error('❌ Erro geral:', error.message);
  }
}

// Executar teste
testCashFlow(); 