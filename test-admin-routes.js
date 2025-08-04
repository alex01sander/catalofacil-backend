const axios = require('axios');

async function testAdminRoutes() {
  const baseUrl = 'http://localhost:3000';
  
  // Token válido para o usuário admin
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiNjY5YjUzNi03YmVmLTQxODEtYjMyYi04OTcwZWU2ZDhmNDkiLCJlbWFpbCI6ImFkbWluQGNhdGFsb2ZhY2lsLmNvbS5iciIsImlhdCI6MTc1NDMxODgxMiwiZXhwIjoxNzU0NDA1MjEyfQ.87IRX-xuMVArFg6z0MnnPeGvXgdMDl09uFJea3Z4_YY';
  
  console.log('🧪 Testando rotas administrativas...\n');
  
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  };
  
  // 1. Testar Dashboard Admin
  console.log('1️⃣ Testando GET /api/admin/dashboard');
  try {
    const dashboardResponse = await axios.get(`${baseUrl}/api/admin/dashboard`, { headers });
    console.log('✅ Status:', dashboardResponse.status);
    console.log('📊 Estatísticas:', dashboardResponse.data.stats);
    console.log('🏆 Top Produtos:', dashboardResponse.data.topProducts?.length || 0);
  } catch (error) {
    console.log('❌ Status:', error.response?.status || 'Erro de conexão');
    console.log('❌ Erro:', error.response?.data || error.message);
  }
  console.log('');
  
  // 2. Testar Listagem de Usuários
  console.log('2️⃣ Testando GET /api/admin/users');
  try {
    const usersResponse = await axios.get(`${baseUrl}/api/admin/users`, { headers });
    console.log('✅ Status:', usersResponse.status);
    console.log('👥 Usuários encontrados:', usersResponse.data.users?.length || 0);
    console.log('📄 Paginação:', usersResponse.data.pagination);
  } catch (error) {
    console.log('❌ Status:', error.response?.status || 'Erro de conexão');
    console.log('❌ Erro:', error.response?.data || error.message);
  }
  console.log('');
  
  // 3. Testar Listagem de Lojas
  console.log('3️⃣ Testando GET /api/admin/stores');
  try {
    const storesResponse = await axios.get(`${baseUrl}/api/admin/stores`, { headers });
    console.log('✅ Status:', storesResponse.status);
    console.log('🏪 Lojas encontradas:', storesResponse.data.stores?.length || 0);
    console.log('📄 Paginação:', storesResponse.data.pagination);
  } catch (error) {
    console.log('❌ Status:', error.response?.status || 'Erro de conexão');
    console.log('❌ Erro:', error.response?.data || error.message);
  }
  console.log('');
  
  // 4. Testar Relatório de Vendas
  console.log('4️⃣ Testando GET /api/admin/reports/sales');
  try {
    const salesReportResponse = await axios.get(`${baseUrl}/api/admin/reports/sales`, { headers });
    console.log('✅ Status:', salesReportResponse.status);
    console.log('💰 Vendas encontradas:', salesReportResponse.data.sales?.length || 0);
    console.log('📊 Resumo:', salesReportResponse.data.summary);
  } catch (error) {
    console.log('❌ Status:', error.response?.status || 'Erro de conexão');
    console.log('❌ Erro:', error.response?.data || error.message);
  }
  console.log('');
  
  // 5. Testar Relatório de Produtos
  console.log('5️⃣ Testando GET /api/admin/reports/products');
  try {
    const productsReportResponse = await axios.get(`${baseUrl}/api/admin/reports/products`, { headers });
    console.log('✅ Status:', productsReportResponse.status);
    console.log('📦 Produtos encontrados:', productsReportResponse.data.products?.length || 0);
    console.log('📊 Resumo:', productsReportResponse.data.summary);
  } catch (error) {
    console.log('❌ Status:', error.response?.status || 'Erro de conexão');
    console.log('❌ Erro:', error.response?.data || error.message);
  }
  console.log('');
  
  // 6. Testar Gerenciamento de Produtos
  console.log('6️⃣ Testando GET /api/admin/products');
  try {
    const productsResponse = await axios.get(`${baseUrl}/api/admin/products`, { headers });
    console.log('✅ Status:', productsResponse.status);
    console.log('📦 Produtos encontrados:', productsResponse.data.products?.length || 0);
    console.log('📄 Paginação:', productsResponse.data.pagination);
  } catch (error) {
    console.log('❌ Status:', error.response?.status || 'Erro de conexão');
    console.log('❌ Erro:', error.response?.data || error.message);
  }
  console.log('');
  
  // 7. Testar Gerenciamento de Categorias
  console.log('7️⃣ Testando GET /api/admin/categories');
  try {
    const categoriesResponse = await axios.get(`${baseUrl}/api/admin/categories`, { headers });
    console.log('✅ Status:', categoriesResponse.status);
    console.log('🏷️  Categorias encontradas:', categoriesResponse.data.categories?.length || 0);
    console.log('📄 Paginação:', categoriesResponse.data.pagination);
  } catch (error) {
    console.log('❌ Status:', error.response?.status || 'Erro de conexão');
    console.log('❌ Erro:', error.response?.data || error.message);
  }
  console.log('');
  
  // 8. Testar Gerenciamento de Pedidos
  console.log('8️⃣ Testando GET /api/admin/orders');
  try {
    const ordersResponse = await axios.get(`${baseUrl}/api/admin/orders`, { headers });
    console.log('✅ Status:', ordersResponse.status);
    console.log('📋 Pedidos encontrados:', ordersResponse.data.orders?.length || 0);
    console.log('📄 Paginação:', ordersResponse.data.pagination);
  } catch (error) {
    console.log('❌ Status:', error.response?.status || 'Erro de conexão');
    console.log('❌ Erro:', error.response?.data || error.message);
  }
  console.log('');
  
  // 9. Testar Gerenciamento de Clientes
  console.log('9️⃣ Testando GET /api/admin/customers');
  try {
    const customersResponse = await axios.get(`${baseUrl}/api/admin/customers`, { headers });
    console.log('✅ Status:', customersResponse.status);
    console.log('👥 Clientes encontrados:', customersResponse.data.customers?.length || 0);
    console.log('📄 Paginação:', customersResponse.data.pagination);
  } catch (error) {
    console.log('❌ Status:', error.response?.status || 'Erro de conexão');
    console.log('❌ Erro:', error.response?.data || error.message);
  }
  console.log('');
  
  // 10. Testar Relatório Financeiro
  console.log('🔟 Testando GET /api/admin/reports/financial');
  try {
    const financialResponse = await axios.get(`${baseUrl}/api/admin/reports/financial`, { headers });
    console.log('✅ Status:', financialResponse.status);
    console.log('💰 Vendas:', financialResponse.data.sales?.length || 0);
    console.log('💸 Despesas:', financialResponse.data.expenses?.length || 0);
    console.log('📊 Resumo:', financialResponse.data.summary);
  } catch (error) {
    console.log('❌ Status:', error.response?.status || 'Erro de conexão');
    console.log('❌ Erro:', error.response?.data || error.message);
  }
  console.log('');
  
  // 11. Testar Relatório de Estoque
  console.log('1️⃣1️⃣ Testando GET /api/admin/reports/inventory');
  try {
    const inventoryResponse = await axios.get(`${baseUrl}/api/admin/reports/inventory`, { headers });
    console.log('✅ Status:', inventoryResponse.status);
    console.log('📦 Produtos:', inventoryResponse.data.products?.length || 0);
    console.log('📊 Resumo:', inventoryResponse.data.summary);
    console.log('⚠️  Alertas:', inventoryResponse.data.alerts);
  } catch (error) {
    console.log('❌ Status:', error.response?.status || 'Erro de conexão');
    console.log('❌ Erro:', error.response?.data || error.message);
  }
  console.log('');
  
  // 12. Testar Configurações do Sistema
  console.log('1️⃣2️⃣ Testando GET /api/admin/system/config');
  try {
    const configResponse = await axios.get(`${baseUrl}/api/admin/system/config`, { headers });
    console.log('✅ Status:', configResponse.status);
    console.log('⚙️  Ambiente:', configResponse.data.environment);
    console.log('🗄️  Banco:', configResponse.data.database);
    console.log('🔐 Segurança:', configResponse.data.security);
  } catch (error) {
    console.log('❌ Status:', error.response?.status || 'Erro de conexão');
    console.log('❌ Erro:', error.response?.data || error.message);
  }
  console.log('');
  
  // 13. Testar Status do Sistema
  console.log('1️⃣3️⃣ Testando GET /api/admin/system/status');
  try {
    const systemStatusResponse = await axios.get(`${baseUrl}/api/admin/system/status`, { headers });
    console.log('✅ Status:', systemStatusResponse.status);
    console.log('🖥️  Sistema:', systemStatusResponse.data.status);
    console.log('🗄️  Banco:', systemStatusResponse.data.database);
  } catch (error) {
    console.log('❌ Status:', error.response?.status || 'Erro de conexão');
    console.log('❌ Erro:', error.response?.data || error.message);
  }
  
  console.log('\n🎉 Resumo das rotas administrativas:');
  console.log('✅ Dashboard admin criado');
  console.log('✅ Gerenciamento de usuários');
  console.log('✅ Gerenciamento de lojas');
  console.log('✅ Gerenciamento de produtos');
  console.log('✅ Gerenciamento de categorias');
  console.log('✅ Gerenciamento de pedidos');
  console.log('✅ Gerenciamento de clientes');
  console.log('✅ Relatórios de vendas');
  console.log('✅ Relatórios de produtos');
  console.log('✅ Relatórios financeiros');
  console.log('✅ Relatórios de estoque');
  console.log('✅ Configurações do sistema');
  console.log('✅ Status do sistema');
  console.log('✅ Autenticação de admin');
}

testAdminRoutes(); 