const axios = require('axios');

async function testarRotasEspecificas() {
    console.log('🔍 TESTANDO ROTAS ESPECÍFICAS');
    console.log('==============================\n');
    
    const baseUrl = 'https://catalofacil-backend.onrender.com';
    
    // Testar rota /admin (que sabemos que funciona)
    try {
        console.log('1️⃣ Testando /admin (deve retornar 401)...');
        const adminResponse = await axios.get(`${baseUrl}/admin`, {
            timeout: 10000,
            validateStatus: () => true
        });
        console.log(`✅ Status: ${adminResponse.status}`);
        console.log(`📝 Resposta: ${JSON.stringify(adminResponse.data).substring(0, 100)}...`);
    } catch (error) {
        console.log(`❌ Erro: ${error.message}`);
    }
    
    console.log('');
    
    // Testar rota /admin/users (que deveria funcionar)
    try {
        console.log('2️⃣ Testando /admin/users (deve retornar 401)...');
        const adminUsersResponse = await axios.get(`${baseUrl}/admin/users`, {
            timeout: 10000,
            validateStatus: () => true
        });
        console.log(`✅ Status: ${adminUsersResponse.status}`);
        console.log(`📝 Resposta: ${JSON.stringify(adminUsersResponse.data).substring(0, 100)}...`);
    } catch (error) {
        console.log(`❌ Erro: ${error.message}`);
    }
    
    console.log('');
    
    // Testar rota /admin-management (que está retornando 404)
    try {
        console.log('3️⃣ Testando /admin-management (está retornando 404)...');
        const adminManagementResponse = await axios.get(`${baseUrl}/admin-management`, {
            timeout: 10000,
            validateStatus: () => true
        });
        console.log(`❌ Status: ${adminManagementResponse.status}`);
        console.log(`📝 Resposta: ${JSON.stringify(adminManagementResponse.data).substring(0, 100)}...`);
    } catch (error) {
        console.log(`❌ Erro: ${error.message}`);
    }
    
    console.log('');
    
    // Testar rota /api/admin-management (que está retornando 404)
    try {
        console.log('4️⃣ Testando /api/admin-management (está retornando 404)...');
        const apiAdminManagementResponse = await axios.get(`${baseUrl}/api/admin-management`, {
            timeout: 10000,
            validateStatus: () => true
        });
        console.log(`❌ Status: ${apiAdminManagementResponse.status}`);
        console.log(`📝 Resposta: ${JSON.stringify(apiAdminManagementResponse.data).substring(0, 100)}...`);
    } catch (error) {
        console.log(`❌ Erro: ${error.message}`);
    }
    
    console.log('');
    
    // Testar rota /api/admin (que deveria funcionar)
    try {
        console.log('5️⃣ Testando /api/admin (deve retornar 401)...');
        const apiAdminResponse = await axios.get(`${baseUrl}/api/admin`, {
            timeout: 10000,
            validateStatus: () => true
        });
        console.log(`✅ Status: ${apiAdminResponse.status}`);
        console.log(`📝 Resposta: ${JSON.stringify(apiAdminResponse.data).substring(0, 100)}...`);
    } catch (error) {
        console.log(`❌ Erro: ${error.message}`);
    }
    
    console.log('');
    console.log('🎯 DIAGNÓSTICO:');
    console.log('===============');
    console.log('✅ /admin e /api/admin funcionam (401 = precisa de auth)');
    console.log('❌ /admin-management e /api/admin-management não funcionam (404)');
    console.log('');
    console.log('🔧 POSSÍVEIS CAUSAS:');
    console.log('====================');
    console.log('1. Problema na ordem de registro das rotas');
    console.log('2. Middleware interceptando as rotas /admin-management');
    console.log('3. Problema no deploy (código antigo em produção)');
    console.log('4. Problema na configuração do servidor');
}

testarRotasEspecificas(); 