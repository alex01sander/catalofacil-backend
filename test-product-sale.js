const axios = require('axios');

// Configuração da API
const API_BASE_URL = process.env.API_URL || 'http://localhost:3000';

// Token de teste (substitua por um token válido)
const TEST_TOKEN = process.env.TEST_TOKEN || 'seu-token-aqui';

async function testProductSale() {
  console.log('🛒 Testando Registro de Venda de Produto...\n');
  
  const headers = {
    'Authorization': `Bearer ${TEST_TOKEN}`,
    'Content-Type': 'application/json'
  };
  
  try {
    // 1. Primeiro, buscar produtos disponíveis
    console.log('1️⃣ Buscando produtos disponíveis...');
    try {
      const productsResponse = await axios.get(`${API_BASE_URL}/products`, { headers });
      console.log(`✅ Produtos encontrados: ${productsResponse.data.data.length}`);
      
      if (productsResponse.data.data.length === 0) {
        console.log('❌ Nenhum produto encontrado. Crie um produto primeiro.');
        return;
      }
      
      const produto = productsResponse.data.data[0];
      console.log('📦 Produto selecionado:', {
        id: produto.id,
        name: produto.name,
        price: produto.price,
        stock: produto.stock
      });
      
      // 2. Testar registro de venda
      console.log('\n2️⃣ Testando registro de venda...');
      const saleData = {
        product_id: produto.id,
        quantity: 1,
        unit_price: produto.price,
        payment_method: 'dinheiro',
        sale_date: new Date()
      };
      
      console.log('📤 Dados da venda:', saleData);
      
      const saleResponse = await axios.post(`${API_BASE_URL}/sales/product-sale`, saleData, { headers });
      console.log('✅ Venda registrada com sucesso!');
      console.log('📊 Resposta:', {
        venda_id: saleResponse.data.venda.id,
        fluxo_id: saleResponse.data.fluxo.id,
        total: saleResponse.data.venda.total_price,
        novo_estoque: saleResponse.data.produto.novo_estoque
      });
      
      // 3. Verificar se apareceu no fluxo de caixa
      console.log('\n3️⃣ Verificando fluxo de caixa...');
      const cashFlowResponse = await axios.get(`${API_BASE_URL}/cashflow`, { headers });
      console.log(`✅ Fluxos encontrados: ${cashFlowResponse.data.data.length}`);
      
      if (cashFlowResponse.data.data.length > 0) {
        const ultimoFluxo = cashFlowResponse.data.data[0];
        console.log('💰 Último fluxo:', {
          type: ultimoFluxo.type,
          amount: ultimoFluxo.amount,
          description: ultimoFluxo.description,
          category: ultimoFluxo.category
        });
        
        if (ultimoFluxo.type === 'entrada' && ultimoFluxo.category === 'vendas') {
          console.log('✅ Fluxo de caixa registrado corretamente como ENTRADA!');
        } else {
          console.log('⚠️ Fluxo de caixa pode estar incorreto');
        }
      }
      
      // 4. Verificar se a venda apareceu na lista de vendas
      console.log('\n4️⃣ Verificando lista de vendas...');
      const salesResponse = await axios.get(`${API_BASE_URL}/sales`, { headers });
      console.log(`✅ Vendas encontradas: ${salesResponse.data.data.length}`);
      
      if (salesResponse.data.data.length > 0) {
        const ultimaVenda = salesResponse.data.data[0];
        console.log('📋 Última venda:', {
          id: ultimaVenda.id,
          product_name: ultimaVenda.product_name,
          quantity: ultimaVenda.quantity,
          total_price: ultimaVenda.total_price,
          status: ultimaVenda.status
        });
      }
      
      console.log('\n🎉 Teste completo! Venda registrada com sucesso.');
      
    } catch (error) {
      console.log('❌ Erro ao buscar produtos:', error.response?.data || error.message);
    }
    
  } catch (error) {
    console.error('❌ Erro geral:', error.response?.data || error.message);
    
    if (error.response?.status === 401) {
      console.log('\n💡 Dica: Verifique se o token está correto');
    }
  }
}

// Executar teste
testProductSale();