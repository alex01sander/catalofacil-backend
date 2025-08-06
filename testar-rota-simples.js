const axios = require('axios');

async function testarRotaSimples() {
    console.log('🧪 TESTANDO ROTA CONTROLLER-ADMINS');
    console.log('==================================\n');
    
    const API_BASE_URL = 'https://demo.catalofacil.com.br';
    
    try {
        console.log('1️⃣ Testando rota GET /api/controller-admins...');
        const response = await axios.get(`${API_BASE_URL}/api/controller-admins`);
        
        console.log('✅ Rota funcionando!');
        console.log('📊 Resposta:');
        console.log(JSON.stringify(response.data, null, 2));
        
    } catch (error) {
        console.error('❌ Erro na rota GET /api/controller-admins:', error.message);
        
        if (error.response) {
            console.log('📊 Status:', error.response.status);
            console.log('📊 Resposta:', JSON.stringify(error.response.data, null, 2));
        }
    }
    
    try {
        console.log('\n2️⃣ Testando rota GET /api/controller-admins/12345678-1234-1234-1234-123456789abc...');
        const response = await axios.get(`${API_BASE_URL}/api/controller-admins/12345678-1234-1234-1234-123456789abc`);
        
        console.log('✅ Rota funcionando!');
        console.log('📊 Resposta:');
        console.log(JSON.stringify(response.data, null, 2));
        
    } catch (error) {
        console.error('❌ Erro na rota GET /api/controller-admins/:userId:', error.message);
        
        if (error.response) {
            console.log('📊 Status:', error.response.status);
            console.log('📊 Resposta:', JSON.stringify(error.response.data, null, 2));
        }
    }
    
    try {
        console.log('\n3️⃣ Testando rota GET /controllerAdmins...');
        const response = await axios.get(`${API_BASE_URL}/controllerAdmins`);
        
        console.log('✅ Rota funcionando!');
        console.log('📊 Resposta:');
        console.log(JSON.stringify(response.data, null, 2));
        
    } catch (error) {
        console.error('❌ Erro na rota GET /controllerAdmins:', error.message);
        
        if (error.response) {
            console.log('📊 Status:', error.response.status);
            console.log('📊 Resposta:', JSON.stringify(error.response.data, null, 2));
        }
    }
}

// Executar
testarRotaSimples(); 