const axios = require('axios');

// Configurações do novo admin
const FULANOSANDER_USER_ID = '12345678-1234-1234-1234-123456789abc';
const FULANOSANDER_EMAIL = 'fulanosander@gmail.com';
const FULANOSANDER_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTY3OC0xMjM0LTEyMzQtMTIzNC0xMjM0NTY3ODlhYmMiLCJlbWFpbCI6ImZ1bGFub3NhbmRlckBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NTQ0OTc2NDksImV4cCI6MTc1NDU4NDA0OX0.mJT6xH_aLuagGqQ-5mNTPl98oebEE7r-gXMKL4vw6PM';

// URL base da API
const API_BASE_URL = 'http://localhost:3000'; // Ajuste conforme necessário

// Função para gerar token de teste
function generateTestToken() {
    return FULANOSANDER_TOKEN;
}

// Testar rotas admin
async function testAdminRoutes() {
    const token = generateTestToken();
    
    console.log('🔐 Testando login com novo admin...');
    console.log('📧 Email:', FULANOSANDER_EMAIL);
    console.log('🆔 User ID:', FULANOSANDER_USER_ID);
    console.log('');

    try {
        // Testar rota de produtos
        console.log('📦 Testando rota de produtos...');
        const productsResponse = await axios.get(`${API_BASE_URL}/admin/products`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        console.log('✅ Produtos:', productsResponse.data.length, 'produtos encontrados');
        
        // Testar rota de categorias
        console.log('📂 Testando rota de categorias...');
        const categoriesResponse = await axios.get(`${API_BASE_URL}/admin/categories`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        console.log('✅ Categorias:', categoriesResponse.data.length, 'categorias encontradas');
        
        // Testar rota de vendas
        console.log('💰 Testando rota de vendas...');
        const salesResponse = await axios.get(`${API_BASE_URL}/admin/sales`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        console.log('✅ Vendas:', salesResponse.data.length, 'vendas encontradas');
        
        console.log('');
        console.log('🎯 TODOS OS TESTES PASSARAM! O novo admin está funcionando!');
        
    } catch (error) {
        console.error('❌ Erro nos testes:', error.response?.data || error.message);
    }
}

// Executar testes
testAdminRoutes();
