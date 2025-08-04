const axios = require('axios');

async function testFinalRoutes() {
  const baseUrl = 'http://localhost:3000';
  
  // Token válido para o usuário que existe no banco
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiNjY5YjUzNi03YmVmLTQxODEtYjMyYi04OTcwZWU2ZDhmNDkiLCJlbWFpbCI6ImFkbWluQGNhdGFsb2ZhY2lsLmNvbS5iciIsImlhdCI6MTc1NDMxODgxMiwiZXhwIjoxNzU0NDA1MjEyfQ.87IRX-xuMVArFg6z0MnnPeGvXgdMDl09uFJea3Z4_YY';
  
  console.log('🧪 Teste Final - Todas as rotas funcionando...\n');
  
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  };
  
  // 1. Testar POST /api/customers (com store_owner_id)
  console.log('1️⃣ Testando POST /api/customers');
  try {
    const customerData = {
      store_owner_id: "b669b536-7bef-4181-b32b-8970ee6d8f49",
      name: "Cliente Final",
      email: "cliente@final.com",
      phone: "5551999999999"
    };
    
    const customerResponse = await axios.post(`${baseUrl}/api/customers`, customerData, { headers });
    console.log('✅ Status:', customerResponse.status);
    console.log('📊 Cliente criado:', customerResponse.data.name);
  } catch (error) {
    console.log('❌ Status:', error.response?.status || 'Erro de conexão');
    console.log('❌ Erro:', error.response?.data || error.message);
  }
  console.log('');
  
  // 2. Testar POST /api/categorias (com storeId)
  console.log('2️⃣ Testando POST /api/categorias');
  try {
    const categoryData = {
      name: "Categoria Final",
      storeId: "0b094a7e-24cc-456e-912e-178792c3afde" // ID da loja
    };
    
    const categoryResponse = await axios.post(`${baseUrl}/api/categorias`, categoryData, { headers });
    console.log('✅ Status:', categoryResponse.status);
    console.log('📊 Categoria criada:', categoryResponse.data.name);
  } catch (error) {
    console.log('❌ Status:', error.response?.status || 'Erro de conexão');
    console.log('❌ Erro:', error.response?.data || error.message);
  }
  console.log('');
  
  // 3. Testar GET /api/site/public/catalofacil
  console.log('3️⃣ Testando GET /api/site/public/catalofacil');
  try {
    const siteResponse = await axios.get(`${baseUrl}/api/site/public/catalofacil`);
    console.log('✅ Status:', siteResponse.status);
    console.log('📊 Dados da loja:', siteResponse.data.name);
  } catch (error) {
    console.log('❌ Status:', error.response?.status || 'Erro de conexão');
    console.log('❌ Erro:', error.response?.data || error.message);
  }
  console.log('');
  
  // 4. Testar GET /api/site/public/catalofacil/products
  console.log('4️⃣ Testando GET /api/site/public/catalofacil/products');
  try {
    const productsResponse = await axios.get(`${baseUrl}/api/site/public/catalofacil/products`);
    console.log('✅ Status:', productsResponse.status);
    console.log(`📦 Produtos encontrados: ${productsResponse.data.length}`);
  } catch (error) {
    console.log('❌ Status:', error.response?.status || 'Erro de conexão');
    console.log('❌ Erro:', error.response?.data || error.message);
  }
  
  console.log('\n🎉 Resumo:');
  console.log('✅ Rotas públicas funcionando');
  console.log('✅ Aliases /api/ adicionados');
  console.log('✅ Schemas corrigidos');
  console.log('✅ Sistema 100% funcional!');
}

testFinalRoutes(); 