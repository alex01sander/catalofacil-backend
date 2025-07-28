const axios = require('axios');

// Configuração da API
const API_BASE_URL = process.env.API_URL || 'http://localhost:3000';
const STORE_SLUG = 'catalofacil'; // Ajuste conforme necessário

async function testPublicAPI() {
  console.log('🧪 Testando API Pública...\n');
  
  try {
    // 1. Testar rota de configurações da loja
    console.log('1️⃣ Testando configurações da loja...');
    const storeConfig = await axios.get(`${API_BASE_URL}/site/public/${STORE_SLUG}`);
    console.log('✅ Configurações da loja:', storeConfig.data);
    console.log('');
    
    // 2. Testar rota de produtos públicos
    console.log('2️⃣ Testando lista de produtos públicos...');
    const products = await axios.get(`${API_BASE_URL}/site/public/${STORE_SLUG}/products`);
    console.log(`✅ Produtos encontrados: ${products.data.length}`);
    
    if (products.data.length > 0) {
      const firstProduct = products.data[0];
      console.log('📦 Primeiro produto:', {
        id: firstProduct.id,
        name: firstProduct.name,
        price: firstProduct.price,
        stock: firstProduct.stock,
        is_active: firstProduct.is_active,
        hasStock: 'stock' in firstProduct,
        hasIsActive: 'is_active' in firstProduct
      });
      
      // 3. Testar rota de produto individual
      console.log('\n3️⃣ Testando produto individual...');
      const individualProduct = await axios.get(`${API_BASE_URL}/site/public/${STORE_SLUG}/products/${firstProduct.id}`);
      console.log('✅ Produto individual:', {
        id: individualProduct.data.id,
        name: individualProduct.data.name,
        price: individualProduct.data.price,
        stock: individualProduct.data.stock,
        is_active: individualProduct.data.is_active,
        hasStock: 'stock' in individualProduct.data,
        hasIsActive: 'is_active' in individualProduct.data
      });
    }
    
    // 4. Testar rota de categorias
    console.log('\n4️⃣ Testando categorias...');
    const categories = await axios.get(`${API_BASE_URL}/site/public/${STORE_SLUG}/categories`);
    console.log(`✅ Categorias encontradas: ${categories.data.length}`);
    
    console.log('\n🎉 Todos os testes passaram!');
    
  } catch (error) {
    console.error('❌ Erro nos testes:', error.response?.data || error.message);
    
    if (error.response?.status === 404) {
      console.log('\n💡 Dicas:');
      console.log('- Verifique se o slug da loja está correto');
      console.log('- Verifique se a loja existe no banco de dados');
      console.log('- Verifique se há produtos ativos na loja');
    }
  }
}

// Executar testes
testPublicAPI(); 