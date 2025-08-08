const axios = require('axios');

async function testarRotasAdmin() {
    console.log('🔍 TESTANDO ROTAS ADMIN');
    console.log('========================\n');
    
    const baseUrl = 'https://catalofacil-backend.onrender.com';
    
    // Testar rota básica /admin
    try {
        console.log('1️⃣ Testando /admin...');
        const adminResponse = await axios.get(`${baseUrl}/admin`, {
            timeout: 10000,
            validateStatus: () => true
        });
        console.log(`Status: ${adminResponse.status}`);
        console.log(`Resposta: ${JSON.stringify(adminResponse.data).substring(0, 100)}...`);
    } catch (error) {
        console.log(`❌ Erro: ${error.message}`);
    }
    
    console.log('');
    
    // Testar rota /admin-management
    try {
        console.log('2️⃣ Testando /admin-management...');
        const adminManagementResponse = await axios.get(`${baseUrl}/admin-management`, {
            timeout: 10000,
            validateStatus: () => true
        });
        console.log(`Status: ${adminManagementResponse.status}`);
        console.log(`Resposta: ${JSON.stringify(adminManagementResponse.data).substring(0, 100)}...`);
    } catch (error) {
        console.log(`❌ Erro: ${error.message}`);
    }
    
    console.log('');
    
    // Testar rota /api/admin-management
    try {
        console.log('3️⃣ Testando /api/admin-management...');
        const apiAdminManagementResponse = await axios.get(`${baseUrl}/api/admin-management`, {
            timeout: 10000,
            validateStatus: () => true
        });
        console.log(`Status: ${apiAdminManagementResponse.status}`);
        console.log(`Resposta: ${JSON.stringify(apiAdminManagementResponse.data).substring(0, 100)}...`);
    } catch (error) {
        console.log(`❌ Erro: ${error.message}`);
    }
    
    console.log('');
    
    // Testar rota específica /api/admin-management/users
    try {
        console.log('4️⃣ Testando /api/admin-management/users...');
        const usersResponse = await axios.get(`${baseUrl}/api/admin-management/users`, {
            timeout: 10000,
            validateStatus: () => true
        });
        console.log(`Status: ${usersResponse.status}`);
        console.log(`Resposta: ${JSON.stringify(usersResponse.data).substring(0, 100)}...`);
    } catch (error) {
        console.log(`❌ Erro: ${error.message}`);
    }
    
    console.log('');
    console.log('🎯 ANÁLISE:');
    console.log('===========');
    console.log('Se todas as rotas retornarem 404, o problema é que as rotas não estão sendo registradas.');
    console.log('Se algumas retornarem 401, significa que precisam de autenticação.');
    console.log('Se algumas retornarem 200, significa que estão funcionando.');
}

testarRotasAdmin(); 