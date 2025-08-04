const axios = require('axios');

async function testRoutes() {
  const baseUrl = 'http://localhost:3000';
  
  const routes = [
    '/health',
    '/site/public/catalofacil',
    '/site/public/catalofacil/products',
    '/api/site/public/catalofacil',
    '/api/site/public/catalofacil/products',
    '/products',
    '/stores'
  ];
  
  console.log('🧪 Testando todas as rotas...\n');
  
  for (const route of routes) {
    try {
      console.log(`📡 Testando: ${route}`);
      const response = await axios.get(`${baseUrl}${route}`);
      console.log(`✅ Status: ${response.status}`);
      
      if (response.data && Array.isArray(response.data)) {
        console.log(`📊 Items: ${response.data.length}`);
      } else if (response.data && typeof response.data === 'object') {
        console.log(`📊 Keys: ${Object.keys(response.data).join(', ')}`);
      }
      
    } catch (error) {
      console.log(`❌ Status: ${error.response?.status || 'Erro de conexão'}`);
      console.log(`❌ Erro: ${error.response?.data?.error || error.message}`);
    }
    console.log('');
  }
}

testRoutes(); 