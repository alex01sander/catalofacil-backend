const axios = require('axios');

// Configuração da API
const API_BASE_URL = process.env.API_URL || 'https://catalofacil.catalofacil.com.br/api';
const TEST_TOKEN = process.env.TEST_TOKEN || 'seu-token-aqui';

async function testQuickLaunch() {
  console.log('⚡ Testando Lançamento Rápido...\n');
  
  const headers = {
    'Authorization': `Bearer ${TEST_TOKEN}`,
    'Content-Type': 'application/json'
  };
  
  try {
    // 1. Testar lançamento de entrada (income)
    console.log('1️⃣ Testando lançamento de entrada...');
    const entradaData = {
      type: 'income',
      category: 'vendas',
      description: 'Teste de lançamento rápido - entrada',
      amount: 100.00,
      date: new Date().toISOString(),
      payment_method: 'dinheiro'
    };
    
    console.log('📤 Dados enviados (entrada):', entradaData);
    
    try {
      const entradaResponse = await axios.post(`${API_BASE_URL}/fluxo-caixa`, entradaData, { headers });
      console.log('✅ Entrada criada com sucesso:', entradaResponse.data);
    } catch (error) {
      console.log('❌ Erro na entrada:', {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message
      });
    }
    
    console.log('');
    
    // 2. Testar lançamento de saída (expense)
    console.log('2️⃣ Testando lançamento de saída...');
    const saidaData = {
      type: 'expense',
      category: 'despesas',
      description: 'Teste de lançamento rápido - saída',
      amount: 50.00,
      date: new Date().toISOString(),
      payment_method: 'dinheiro'
    };
    
    console.log('📤 Dados enviados (saída):', saidaData);
    
    try {
      const saidaResponse = await axios.post(`${API_BASE_URL}/fluxo-caixa`, saidaData, { headers });
      console.log('✅ Saída criada com sucesso:', saidaResponse.data);
    } catch (error) {
      console.log('❌ Erro na saída:', {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message
      });
    }
    
    console.log('');
    
    // 3. Testar com dados mínimos
    console.log('3️⃣ Testando com dados mínimos...');
    const minimoData = {
      type: 'income',
      category: 'teste',
      description: 'Teste mínimo',
      amount: 10.00
    };
    
    console.log('📤 Dados mínimos:', minimoData);
    
    try {
      const minimoResponse = await axios.post(`${API_BASE_URL}/fluxo-caixa`, minimoData, { headers });
      console.log('✅ Mínimo criado com sucesso:', minimoResponse.data);
    } catch (error) {
      console.log('❌ Erro no mínimo:', {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message
      });
    }
    
    // 4. Verificar se há fluxos existentes
    console.log('\n4️⃣ Verificando fluxos existentes...');
    try {
      const listResponse = await axios.get(`${API_BASE_URL}/fluxo-caixa`, { headers });
      console.log(`✅ Fluxos encontrados: ${listResponse.data.data?.length || 0}`);
    } catch (error) {
      console.log('❌ Erro ao listar fluxos:', error.response?.data || error.message);
    }
    
  } catch (error) {
    console.error('❌ Erro geral:', error.response?.data || error.message);
    
    if (error.response?.status === 401) {
      console.log('\n💡 Dica: Verifique se o token está correto');
    }
  }
}

// Executar teste
testQuickLaunch();