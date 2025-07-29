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

async function testCreditAccountsDebug() {
  console.log('🔍 Testando Criação de Contas de Crédito (Debug)...\n');
  
  const testToken = generateTestToken();
  console.log('🔑 Token gerado:', testToken.substring(0, 50) + '...');
  
  const headers = {
    'Authorization': `Bearer ${testToken}`,
    'Content-Type': 'application/json'
  };
  
  try {
    // 1. Testar com dados mínimos
    console.log('1️⃣ Testando com dados mínimos...');
    const dadosMinimos = {
      customer_name: 'Teste Cliente',
      customer_phone: '51999999999'
    };
    
    console.log('📤 Dados mínimos:', dadosMinimos);
    
    try {
      const response = await axios.post(`${API_BASE_URL}/credit-accounts`, dadosMinimos, { headers });
      console.log('✅ Cliente criado com sucesso:', {
        id: response.data.id,
        name: response.data.customer_name,
        phone: response.data.customer_phone,
        total_debt: response.data.total_debt
      });
    } catch (error) {
      console.log('❌ Erro com dados mínimos:', {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message
      });
    }
    
    console.log('');
    
    // 2. Testar com dados completos
    console.log('2️⃣ Testando com dados completos...');
    const dadosCompletos = {
      customer_name: 'Alex Sander',
      customer_phone: '51992401184',
      customer_address: 'Rua Padre Raulino Reitz, nº 123',
      total_debt: 0,
      status: 'aguardando_pagamento'
    };
    
    console.log('📤 Dados completos:', dadosCompletos);
    
    try {
      const response = await axios.post(`${API_BASE_URL}/credit-accounts`, dadosCompletos, { headers });
      console.log('✅ Cliente criado com sucesso:', {
        id: response.data.id,
        name: response.data.customer_name,
        phone: response.data.customer_phone,
        total_debt: response.data.total_debt
      });
    } catch (error) {
      console.log('❌ Erro com dados completos:', {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message
      });
    }
    
    console.log('');
    
    // 3. Testar sem store_id
    console.log('3️⃣ Testando sem store_id...');
    const dadosSemStoreId = {
      customer_name: 'João Silva',
      customer_phone: '51988888888',
      customer_address: 'Rua das Flores, 456'
    };
    
    console.log('📤 Dados sem store_id:', dadosSemStoreId);
    
    try {
      const response = await axios.post(`${API_BASE_URL}/credit-accounts`, dadosSemStoreId, { headers });
      console.log('✅ Cliente criado com sucesso:', {
        id: response.data.id,
        name: response.data.customer_name,
        phone: response.data.customer_phone,
        total_debt: response.data.total_debt
      });
    } catch (error) {
      console.log('❌ Erro sem store_id:', {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message
      });
    }
    
    console.log('');
    
    // 4. Testar com telefone inválido
    console.log('4️⃣ Testando com telefone inválido...');
    const dadosTelefoneInvalido = {
      customer_name: 'Maria Santos',
      customer_phone: '' // Telefone vazio
    };
    
    console.log('📤 Dados com telefone inválido:', dadosTelefoneInvalido);
    
    try {
      const response = await axios.post(`${API_BASE_URL}/credit-accounts`, dadosTelefoneInvalido, { headers });
      console.log('✅ Cliente criado com sucesso (inesperado):', response.data);
    } catch (error) {
      console.log('❌ Erro com telefone inválido (esperado):', {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message
      });
    }
    
    console.log('');
    
    // 5. Testar com nome vazio
    console.log('5️⃣ Testando com nome vazio...');
    const dadosNomeVazio = {
      customer_name: '',
      customer_phone: '51977777777'
    };
    
    console.log('📤 Dados com nome vazio:', dadosNomeVazio);
    
    try {
      const response = await axios.post(`${API_BASE_URL}/credit-accounts`, dadosNomeVazio, { headers });
      console.log('✅ Cliente criado com sucesso (inesperado):', response.data);
    } catch (error) {
      console.log('❌ Erro com nome vazio (esperado):', {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message
      });
    }
    
    // 6. Verificar se há clientes existentes
    console.log('\n6️⃣ Verificando clientes existentes...');
    try {
      const listResponse = await axios.get(`${API_BASE_URL}/credit-accounts`, { headers });
      console.log(`✅ Clientes encontrados: ${listResponse.data.data?.length || 0}`);
      
      if (listResponse.data.data && listResponse.data.data.length > 0) {
        console.log('📋 Clientes:');
        listResponse.data.data.forEach((cliente, index) => {
          console.log(`  ${index + 1}. ${cliente.customer_name} - ${cliente.customer_phone} - Dívida: R$ ${cliente.total_debt}`);
        });
      }
    } catch (error) {
      console.log('❌ Erro ao listar clientes:', error.response?.data || error.message);
    }
    
  } catch (error) {
    console.error('❌ Erro geral:', error.response?.data || error.message);
    
    if (error.response?.status === 401) {
      console.log('\n💡 Dica: Verifique se o token está correto');
    }
  }
}

// Executar teste
testCreditAccountsDebug(); 