const axios = require('axios');

// Configuração da API
const API_BASE_URL = process.env.API_URL || 'https://catalofacil.catalofacil.com.br/api';
const TEST_TOKEN = process.env.TEST_TOKEN || 'seu-token-aqui';

async function testCreditSystem() {
  console.log('🎯 Testando Sistema de Crediário Completo...\n');
  
  const headers = {
    'Authorization': `Bearer ${TEST_TOKEN}`,
    'Content-Type': 'application/json'
  };
  
  try {
    // 1. Testar criação de cliente
    console.log('1️⃣ Testando criação de cliente...');
    const clienteData = {
      customer_name: 'Alex Sander',
      customer_phone: '51992401184',
      customer_address: 'Rua Padre Raulino Reitz, nº 123',
      store_id: 'store-id-aqui' // Substitua por um store_id válido
    };
    
    console.log('📤 Dados do cliente:', clienteData);
    
    try {
      const clienteResponse = await axios.post(`${API_BASE_URL}/credit-accounts`, clienteData, { headers });
      console.log('✅ Cliente criado com sucesso:', {
        id: clienteResponse.data.id,
        name: clienteResponse.data.customer_name,
        phone: clienteResponse.data.customer_phone,
        total_debt: clienteResponse.data.total_debt
      });
      
      const clienteId = clienteResponse.data.id;
      
      // 2. Testar criação de débito com parcelamento (cliente novo)
      console.log('\n2️⃣ Testando débito com parcelamento (cliente novo)...');
      const debitoNovoClienteData = {
        customer_name: 'Maria Silva',
        customer_phone: '51987654321',
        customer_address: 'Rua das Flores, 456',
        is_new_customer: true,
        description: 'Compra de mercadoria - Cliente novo',
        total_amount: 300.00,
        installments_count: 3,
        frequency: 'mensal',
        first_due_date: new Date().toISOString(),
        observations: 'Cliente novo, primeira compra'
      };
      
      console.log('📤 Dados do débito (cliente novo):', debitoNovoClienteData);
      
      try {
        const debitoNovoResponse = await axios.post(`${API_BASE_URL}/credit-transactions/debit-with-installments`, debitoNovoClienteData, { headers });
        console.log('✅ Débito com parcelamento criado (cliente novo):', {
          transaction_id: debitoNovoResponse.data.transaction.id,
          installments_count: debitoNovoResponse.data.installments.length,
          total_amount: debitoNovoResponse.data.transaction.amount,
          credit_account_id: debitoNovoResponse.data.credit_account_id
        });
        
        console.log('📋 Parcelas criadas:');
        debitoNovoResponse.data.installments.forEach((parcela, index) => {
          console.log(`  ${index + 1}. Parcela ${parcela.installment_number}: R$ ${parcela.amount} - Vencimento: ${new Date(parcela.due_date).toLocaleDateString('pt-BR')}`);
        });
        
      } catch (error) {
        console.log('❌ Erro no débito (cliente novo):', {
          status: error.response?.status,
          data: error.response?.data,
          message: error.message
        });
      }
      
      // 3. Testar criação de débito com parcelamento (cliente existente)
      console.log('\n3️⃣ Testando débito com parcelamento (cliente existente)...');
      const debitoClienteExistenteData = {
        customer_name: 'Alex Sander',
        customer_phone: '51992401184',
        is_new_customer: false,
        existing_customer_id: clienteId,
        description: 'Compra de mercadoria - Cliente existente',
        total_amount: 150.00,
        installments_count: 2,
        frequency: 'quinzenal',
        first_due_date: new Date().toISOString(),
        observations: 'Segunda compra do cliente'
      };
      
      console.log('📤 Dados do débito (cliente existente):', debitoClienteExistenteData);
      
      try {
        const debitoExistenteResponse = await axios.post(`${API_BASE_URL}/credit-transactions/debit-with-installments`, debitoClienteExistenteData, { headers });
        console.log('✅ Débito com parcelamento criado (cliente existente):', {
          transaction_id: debitoExistenteResponse.data.transaction.id,
          installments_count: debitoExistenteResponse.data.installments.length,
          total_amount: debitoExistenteResponse.data.transaction.amount
        });
        
        console.log('📋 Parcelas criadas:');
        debitoExistenteResponse.data.installments.forEach((parcela, index) => {
          console.log(`  ${index + 1}. Parcela ${parcela.installment_number}: R$ ${parcela.amount} - Vencimento: ${new Date(parcela.due_date).toLocaleDateString('pt-BR')}`);
        });
        
      } catch (error) {
        console.log('❌ Erro no débito (cliente existente):', {
          status: error.response?.status,
          data: error.response?.data,
          message: error.message
        });
      }
      
      // 4. Testar listagem de clientes
      console.log('\n4️⃣ Testando listagem de clientes...');
      try {
        const clientesResponse = await axios.get(`${API_BASE_URL}/credit-accounts`, { headers });
        console.log(`✅ Clientes encontrados: ${clientesResponse.data.data.length}`);
        
        if (clientesResponse.data.data.length > 0) {
          console.log('📋 Clientes:');
          clientesResponse.data.data.forEach((cliente, index) => {
            console.log(`  ${index + 1}. ${cliente.customer_name} - ${cliente.customer_phone} - Dívida: R$ ${cliente.total_debt}`);
          });
        }
      } catch (error) {
        console.log('❌ Erro ao listar clientes:', error.response?.data || error.message);
      }
      
      // 5. Testar listagem de transações
      console.log('\n5️⃣ Testando listagem de transações...');
      try {
        const transacoesResponse = await axios.get(`${API_BASE_URL}/credit-transactions`, { headers });
        console.log(`✅ Transações encontradas: ${transacoesResponse.data.data.length}`);
        
        if (transacoesResponse.data.data.length > 0) {
          console.log('📋 Transações:');
          transacoesResponse.data.data.forEach((transacao, index) => {
            console.log(`  ${index + 1}. ${transacao.type} - R$ ${transacao.amount} - ${transacao.description}`);
            if (transacao.credit_installments && transacao.credit_installments.length > 0) {
              console.log(`     Parcelas: ${transacao.credit_installments.length}`);
            }
          });
        }
      } catch (error) {
        console.log('❌ Erro ao listar transações:', error.response?.data || error.message);
      }
      
      // 6. Testar busca de cliente específico
      console.log('\n6️⃣ Testando busca de cliente específico...');
      try {
        const clienteEspecificoResponse = await axios.get(`${API_BASE_URL}/credit-accounts/${clienteId}`, { headers });
        console.log('✅ Cliente encontrado:', {
          id: clienteEspecificoResponse.data.id,
          name: clienteEspecificoResponse.data.customer_name,
          phone: clienteEspecificoResponse.data.customer_phone,
          total_debt: clienteEspecificoResponse.data.total_debt,
          transactions_count: clienteEspecificoResponse.data.credit_transactions?.length || 0
        });
        
        if (clienteEspecificoResponse.data.credit_transactions && clienteEspecificoResponse.data.credit_transactions.length > 0) {
          console.log('📋 Transações do cliente:');
          clienteEspecificoResponse.data.credit_transactions.forEach((transacao, index) => {
            console.log(`  ${index + 1}. ${transacao.type} - R$ ${transacao.amount} - ${transacao.description}`);
            if (transacao.credit_installments && transacao.credit_installments.length > 0) {
              console.log(`     Parcelas: ${transacao.credit_installments.length}`);
            }
          });
        }
      } catch (error) {
        console.log('❌ Erro ao buscar cliente específico:', error.response?.data || error.message);
      }
      
    } catch (error) {
      console.log('❌ Erro ao criar cliente:', {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message
      });
    }
    
    console.log('\n🎉 Teste do sistema de crediário concluído!');
    
  } catch (error) {
    console.error('❌ Erro geral:', error.response?.data || error.message);
    
    if (error.response?.status === 401) {
      console.log('\n💡 Dica: Verifique se o token está correto');
    }
  }
}

// Executar teste
testCreditSystem();