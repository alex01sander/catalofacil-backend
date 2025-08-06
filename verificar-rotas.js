const axios = require('axios');

async function verificarRotas() {
    console.log('🔍 VERIFICANDO ROTAS DO SERVIDOR');
    console.log('=================================\n');
    
    const API_BASE_URL = 'https://demo.catalofacil.com.br';
    
    try {
        console.log('1️⃣ Testando rota raiz...');
        const rootResponse = await axios.get(`${API_BASE_URL}/`);
        console.log('✅ Servidor está rodando');
        console.log('📊 Resposta:', JSON.stringify(rootResponse.data, null, 2));
        
    } catch (error) {
        console.error('❌ Erro na rota raiz:', error.message);
        return;
    }
    
    try {
        console.log('\n2️⃣ Testando rota health...');
        const healthResponse = await axios.get(`${API_BASE_URL}/health`);
        console.log('✅ Health check funcionando');
        console.log('📊 Resposta:', JSON.stringify(healthResponse.data, null, 2));
        
    } catch (error) {
        console.error('❌ Erro na rota health:', error.message);
    }
    
    try {
        console.log('\n3️⃣ Testando rota auth...');
        const authResponse = await axios.get(`${API_BASE_URL}/auth/verify`);
        console.log('✅ Rota auth funcionando');
        console.log('📊 Resposta:', JSON.stringify(authResponse.data, null, 2));
        
    } catch (error) {
        console.error('❌ Erro na rota auth:', error.message);
        if (error.response) {
            console.log('📊 Status:', error.response.status);
        }
    }
    
    try {
        console.log('\n4️⃣ Testando rota products...');
        const productsResponse = await axios.get(`${API_BASE_URL}/products`);
        console.log('✅ Rota products funcionando');
        console.log('📊 Resposta:', JSON.stringify(productsResponse.data, null, 2));
        
    } catch (error) {
        console.error('❌ Erro na rota products:', error.message);
        if (error.response) {
            console.log('📊 Status:', error.response.status);
        }
    }
    
    try {
        console.log('\n5️⃣ Testando rota controllerAdmins (sem /api)...');
        const controllerResponse = await axios.get(`${API_BASE_URL}/controllerAdmins`);
        console.log('✅ Rota controllerAdmins funcionando');
        console.log('📊 Resposta:', JSON.stringify(controllerResponse.data, null, 2));
        
    } catch (error) {
        console.error('❌ Erro na rota controllerAdmins:', error.message);
        if (error.response) {
            console.log('📊 Status:', error.response.status);
        }
    }
    
    console.log('\n🎯 RESUMO:');
    console.log('==========');
    console.log('✅ Servidor está rodando');
    console.log('❌ Rota /api/controller-admins não está funcionando');
    console.log('💡 O problema pode estar na configuração do servidor');
}

// Executar
verificarRotas(); 