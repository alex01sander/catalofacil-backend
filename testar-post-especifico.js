const axios = require('axios');

async function testarRotasPOST() {
    console.log('🔍 TESTANDO ROTAS POST ESPECÍFICAS');
    console.log('=====================================');
    
    const API_BASE_URL = 'https://catalofacil-backend.onrender.com';
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1Njc4LTEyMzQtMTIzNC0xMjM0LTEyMzQ1Njc4OWFiYyIsImVtYWlsIjoiZnVsYW5vc2FuZGVyQGdtYWlsLmNvbSIsImlhdCI6MTc1NDUxMjIyMiwiZXhwIjoxNzU0NTk4NjIyfQ.eIGkTAI9pdpEwUh99TdSujZCETkwlJ4pptJfcnALbQk';
    
    const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    };
    
    const testData = {
        email: 'teste@exemplo.com',
        password: '123456',
        domain: 'teste.catalofacil.com.br',
        role: 'user'
    };
    
    try {
        // 1. Testar rota POST sem autenticação
        console.log('\n1️⃣ Testando POST /admin/test-post-no-auth...');
        try {
            const response1 = await axios.post(`${API_BASE_URL}/admin/test-post-no-auth`, { test: 'data' }, {
                headers: { 'Content-Type': 'application/json' },
                timeout: 10000
            });
            console.log('✅ Status:', response1.status);
            console.log('✅ Data:', response1.data);
        } catch (error) {
            console.log('❌ Erro:', error.response?.status, error.response?.data || error.message);
        }
        
        // 2. Testar rota POST com autenticação
        console.log('\n2️⃣ Testando POST /admin/test-post...');
        try {
            const response2 = await axios.post(`${API_BASE_URL}/admin/test-post`, { test: 'data' }, {
                headers,
                timeout: 10000
            });
            console.log('✅ Status:', response2.status);
            console.log('✅ Data:', response2.data);
        } catch (error) {
            console.log('❌ Erro:', error.response?.status, error.response?.data || error.message);
        }
        
        // 3. Testar rota POST /admin/users
        console.log('\n3️⃣ Testando POST /admin/users...');
        try {
            const response3 = await axios.post(`${API_BASE_URL}/admin/users`, testData, {
                headers,
                timeout: 10000
            });
            console.log('✅ Status:', response3.status);
            console.log('✅ Data:', response3.data);
        } catch (error) {
            console.log('❌ Erro:', error.response?.status, error.response?.data || error.message);
        }
        
        // 4. Testar rota GET para comparação
        console.log('\n4️⃣ Testando GET /admin/users (para comparação)...');
        try {
            const response4 = await axios.get(`${API_BASE_URL}/admin/users`, {
                headers,
                timeout: 10000
            });
            console.log('✅ Status:', response4.status);
            console.log('✅ Data:', response4.data.users.length, 'usuários encontrados');
        } catch (error) {
            console.log('❌ Erro:', error.response?.status, error.response?.data || error.message);
        }
        
    } catch (error) {
        console.error('❌ Erro geral:', error.message);
    }
}

testarRotasPOST(); 