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

async function testSalesRoutes() {
  console.log('🛒 TESTANDO ROTAS DE VENDAS\n');
  
  const testToken = generateTestToken();
  const headers = {
    'Authorization': `Bearer ${testToken}`,
    'Content-Type': 'application/json'
  };

  // Primeiro, buscar um produto para testar
  console.log('1️⃣ Buscando produto para teste...');
  let produto = null;
  
  try {
    const productsResponse = await axios.get(`${API_BASE_URL}/products`, { headers });
    if (productsResponse.data.data.length > 0) {
      produto = productsResponse.data.data[0];
      console.log('✅ Produto encontrado:', {
        id: produto.id,
        name: produto.name,
        price: produto.price,
        stock: produto.stock
      });
    } else {
      console.log('❌ Nenhum produto encontrado');
      return;
    }
  } catch (error) {
    console.log('❌ Erro ao buscar produtos:', error.response?.status, error.response?.data?.message);
    return;
  }

  const testCases = [
    {
      name: '❌ Rota simples de vendas (pode não registrar no fluxo)',
      url: '/sales',
      payload: {
        product_name: produto.name,
        quantity: 1,
        unit_price: produto.price,
        total_price: produto.price,
        sale_date: new Date().toISOString(),
        status: 'completed',
        store_id: produto.store_id
      }
    },
    {
      name: '✅ Rota específica de venda de produto (RECOMENDADA)',
      url: '/sales/product-sale',
      payload: {
        product_id: produto.id,
        quantity: 1,
        unit_price: produto.price,
        payment_method: 'dinheiro',
        sale_date: new Date().toISOString()
      }
    }
  ];

  for (const testCase of testCases) {
    console.log(`\n🧪 ${testCase.name}`);
    console.log(`📤 URL: ${testCase.url}`);
    console.log(`📋 Payload:`, JSON.stringify(testCase.payload, null, 2));
    
    try {
      const response = await axios.post(`${API_BASE_URL}${testCase.url}`, testCase.payload, { headers });
      console.log(`✅ Sucesso: ${response.status} ${response.statusText}`);
      
      if (response.data.venda) {
        console.log(`📊 Venda criada:`, {
          id: response.data.venda.id,
          product_name: response.data.venda.product_name,
          total_price: response.data.venda.total_price
        });
      }
      
      if (response.data.fluxo) {
        console.log(`💰 Fluxo de caixa:`, {
          id: response.data.fluxo.id,
          type: response.data.fluxo.type,
          amount: response.data.fluxo.amount,
          category: response.data.fluxo.category
        });
      }
      
    } catch (error) {
      console.log(`❌ Erro: ${error.response?.status} ${error.response?.statusText}`);
      if (error.response?.data) {
        console.log(`📄 Detalhes:`, error.response.data);
      }
    }
  }

  console.log('\n📋 RESUMO:');
  console.log('• A rota /sales/product-sale é a RECOMENDADA para vendas');
  console.log('• Ela registra automaticamente no fluxo de caixa');
  console.log('• Ela atualiza o estoque do produto');
  console.log('• Ela usa transações atômicas para garantir consistência');
  console.log('\n💡 O frontend deve usar: POST /api/sales/product-sale');
}

testSalesRoutes().catch(console.error); 