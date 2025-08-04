const axios = require('axios');

async function testAPI() {
  try {
    console.log('🧪 Testando API...');
    
    // Testar configurações da loja
    const storeResponse = await axios.get('http://localhost:3000/site/public/catalofacil');
    console.log('✅ Loja encontrada:', storeResponse.data.name);
    
    // Testar produtos
    const productsResponse = await axios.get('http://localhost:3000/site/public/catalofacil/products');
    console.log(`✅ Produtos encontrados: ${productsResponse.data.length}`);
    
    if (productsResponse.data.length > 0) {
      console.log('📦 Primeiro produto:', productsResponse.data[0]);
    } else {
      console.log('⚠️ Nenhum produto encontrado para esta loja');
    }
    
  } catch (error) {
    console.error('❌ Erro:', error.response?.data || error.message);
  }
}

testAPI(); 