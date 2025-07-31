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

async function testClientHistory() {
  console.log('📋 TESTANDO HISTÓRICO DO CLIENTE\n');
  
  const testToken = generateTestToken();
  const headers = {
    'Authorization': `Bearer ${testToken}`,
    'Content-Type': 'application/json'
  };

  try {
    // 1. Buscar clientes existentes
    console.log('1️⃣ Buscando clientes existentes...');
    const customersResponse = await axios.get(`${API_BASE_URL}/credit-accounts`, { headers });
    
    if (customersResponse.data.data.length === 0) {
      console.log('❌ Nenhum cliente encontrado. Criando um cliente para teste...');
      
      // Criar um cliente para teste
      const customerData = {
        name: 'Cliente Teste Histórico',
        whatsapp: '51987654321',
        address: 'Rua Teste, 123'
      };

      const newCustomerResponse = await axios.post(`${API_BASE_URL}/credit-accounts`, customerData, { headers });
      const customerId = newCustomerResponse.data.id;
      console.log('✅ Cliente criado:', customerId);
      
      // Testar histórico do cliente recém-criado
      await testHistoryForCustomer(customerId, headers);
    } else {
      // Usar o primeiro cliente encontrado
      const customerId = customersResponse.data.data[0].id;
      console.log('✅ Cliente encontrado:', customerId);
      
      // Testar histórico do cliente
      await testHistoryForCustomer(customerId, headers);
    }

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

async function testHistoryForCustomer(customerId, headers) {
  console.log(`\n2️⃣ Testando histórico do cliente ${customerId}...`);
  
  try {
    const historyResponse = await axios.get(`${API_BASE_URL}/credit-accounts/${customerId}/transactions`, { headers });
    
    console.log('✅ Resposta recebida:');
    console.log('Tipo da resposta:', typeof historyResponse.data);
    console.log('É array?', Array.isArray(historyResponse.data));
    console.log('Quantidade de transações:', historyResponse.data.length);
    
    if (Array.isArray(historyResponse.data)) {
      console.log('✅ SUCESSO: A resposta é um array!');
      
      if (historyResponse.data.length > 0) {
        console.log('\n📋 Transações encontradas:');
        historyResponse.data.forEach((transacao, index) => {
          console.log(`   ${index + 1}. ${transacao.type}: R$ ${transacao.amount} - ${transacao.description}`);
        });
      } else {
        console.log('📋 Nenhuma transação encontrada para este cliente.');
      }
      
      console.log('\n🎉 TESTE CONCLUÍDO COM SUCESSO!');
      console.log('✅ A rota está retornando um array como esperado pelo frontend.');
      
    } else {
      console.log('❌ ERRO: A resposta não é um array!');
      console.log('Resposta recebida:', JSON.stringify(historyResponse.data, null, 2));
    }
    
  } catch (error) {
    console.log('❌ Erro ao buscar histórico:', error.response?.status, error.response?.data?.message);
  }
}

testClientHistory().catch(console.error); 