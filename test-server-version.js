const axios = require('axios');

// Configuração da API
const API_BASE_URL = process.env.API_URL || 'https://catalofacil.catalofacil.com.br/api';

async function testServerVersion() {
  console.log('🔍 Verificando versão do servidor...\n');
  
  try {
    // Testar rota de health check
    console.log('1️⃣ Testando health check...');
    const healthResponse = await axios.get(`${API_BASE_URL}/health`);
    console.log('✅ Health check funcionando:', healthResponse.status);
    
    // Testar se a rota credit-transactions existe
    console.log('\n2️⃣ Testando rota /credit-transactions...');
    try {
      const response = await axios.get(`${API_BASE_URL}/credit-transactions`);
      console.log('✅ Rota /credit-transactions existe:', response.status);
    } catch (error) {
      if (error.response?.status === 401) {
        console.log('✅ Rota /credit-transactions existe (401 - auth required)');
      } else {
        console.log('❌ Rota /credit-transactions não existe:', error.response?.status);
      }
    }
    
    // Testar se a rota creditTransactions existe
    console.log('\n3️⃣ Testando rota /creditTransactions...');
    try {
      const response = await axios.get(`${API_BASE_URL}/creditTransactions`);
      console.log('✅ Rota /creditTransactions existe:', response.status);
    } catch (error) {
      if (error.response?.status === 401) {
        console.log('✅ Rota /creditTransactions existe (401 - auth required)');
      } else {
        console.log('❌ Rota /creditTransactions não existe:', error.response?.status);
      }
    }
    
    console.log('\n📋 Resumo:');
    console.log('- Se ambas as rotas existem: ✅ Servidor atualizado');
    console.log('- Se apenas /creditTransactions existe: ⚠️ Servidor precisa ser reiniciado');
    console.log('- Se nenhuma rota existe: ❌ Problema na configuração');
    
  } catch (error) {
    console.error('❌ Erro ao verificar servidor:', error.message);
  }
}

testServerVersion(); 