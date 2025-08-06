const axios = require('axios');

async function testarAuthRoute() {
    console.log('🔍 TESTANDO ROTA DE AUTENTICAÇÃO');
    console.log('=================================\n');
    
    const API_BASE_URL = 'https://catalofacil-backend.onrender.com';
    
    try {
        console.log('1️⃣ Testando GET /auth...');
        const response = await axios.get(`${API_BASE_URL}/auth`);
        console.log('✅ Rota /auth funcionando!');
        console.log('📊 Resposta:', JSON.stringify(response.data, null, 2));
        
    } catch (error) {
        console.error('❌ Erro na rota /auth:', error.message);
        if (error.response) {
            console.log('📊 Status:', error.response.status);
            console.log('📊 Resposta:', JSON.stringify(error.response.data, null, 2));
        }
    }
    
    try {
        console.log('\n2️⃣ Testando POST /auth/login...');
        const loginResponse = await axios.post(`${API_BASE_URL}/auth/login`, {
            email: 'fulanosander@gmail.com',
            password: '123456'
        });
        console.log('✅ Login funcionando!');
        console.log('📊 Resposta:', JSON.stringify(loginResponse.data, null, 2));
        
    } catch (error) {
        console.error('❌ Erro no login:', error.message);
        if (error.response) {
            console.log('📊 Status:', error.response.status);
            console.log('📊 Resposta:', JSON.stringify(error.response.data, null, 2));
        }
    }
    
    try {
        console.log('\n3️⃣ Testando GET /auth/verify...');
        const verifyResponse = await axios.get(`${API_BASE_URL}/auth/verify`);
        console.log('✅ Rota /auth/verify funcionando!');
        console.log('📊 Resposta:', JSON.stringify(verifyResponse.data, null, 2));
        
    } catch (error) {
        console.error('❌ Erro na rota /auth/verify:', error.message);
        if (error.response) {
            console.log('📊 Status:', error.response.status);
            console.log('📊 Resposta:', JSON.stringify(error.response.data, null, 2));
        }
    }
}

// Executar
testarAuthRoute(); 