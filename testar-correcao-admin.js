const axios = require('axios');

async function testarCorrecaoAdmin() {
    console.log('🔧 TESTANDO CORREÇÃO DAS ROTAS ADMIN-MANAGEMENT');
    console.log('================================================\n');
    
    const baseUrl = 'https://catalofacil-backend.onrender.com';
    
    // Testar rota /admin-management (deve retornar 401 agora)
    try {
        console.log('1️⃣ Testando /admin-management...');
        const adminManagementResponse = await axios.get(`${baseUrl}/admin-management`, {
            timeout: 10000,
            validateStatus: () => true
        });
        console.log(`Status: ${adminManagementResponse.status}`);
        if (adminManagementResponse.status === 401) {
            console.log('✅ CORREÇÃO FUNCIONOU! Rota retorna 401 (precisa de auth)');
        } else if (adminManagementResponse.status === 404) {
            console.log('❌ AINDA RETORNA 404 - Correção não funcionou');
        } else {
            console.log(`📝 Resposta: ${JSON.stringify(adminManagementResponse.data).substring(0, 100)}...`);
        }
    } catch (error) {
        console.log(`❌ Erro: ${error.message}`);
    }
    
    console.log('');
    
    // Testar rota /api/admin-management (deve retornar 401 agora)
    try {
        console.log('2️⃣ Testando /api/admin-management...');
        const apiAdminManagementResponse = await axios.get(`${baseUrl}/api/admin-management`, {
            timeout: 10000,
            validateStatus: () => true
        });
        console.log(`Status: ${apiAdminManagementResponse.status}`);
        if (apiAdminManagementResponse.status === 401) {
            console.log('✅ CORREÇÃO FUNCIONOU! Rota retorna 401 (precisa de auth)');
        } else if (apiAdminManagementResponse.status === 404) {
            console.log('❌ AINDA RETORNA 404 - Correção não funcionou');
        } else {
            console.log(`📝 Resposta: ${JSON.stringify(apiAdminManagementResponse.data).substring(0, 100)}...`);
        }
    } catch (error) {
        console.log(`❌ Erro: ${error.message}`);
    }
    
    console.log('');
    
    // Testar rota específica /api/admin-management/users
    try {
        console.log('3️⃣ Testando /api/admin-management/users...');
        const usersResponse = await axios.get(`${baseUrl}/api/admin-management/users`, {
            timeout: 10000,
            validateStatus: () => true
        });
        console.log(`Status: ${usersResponse.status}`);
        if (usersResponse.status === 401) {
            console.log('✅ CORREÇÃO FUNCIONOU! Rota retorna 401 (precisa de auth)');
        } else if (usersResponse.status === 404) {
            console.log('❌ AINDA RETORNA 404 - Correção não funcionou');
        } else {
            console.log(`📝 Resposta: ${JSON.stringify(usersResponse.data).substring(0, 100)}...`);
        }
    } catch (error) {
        console.log(`❌ Erro: ${error.message}`);
    }
    
    console.log('');
    console.log('🎯 RESULTADO:');
    console.log('=============');
    console.log('Se todas as rotas retornarem 401, a correção funcionou!');
    console.log('Se ainda retornarem 404, pode ser necessário fazer deploy.');
    console.log('');
    console.log('💡 PRÓXIMOS PASSOS:');
    console.log('===================');
    console.log('1. Fazer commit das alterações');
    console.log('2. Fazer push para o repositório');
    console.log('3. Aguardar o deploy automático');
    console.log('4. Testar novamente');
}

testarCorrecaoAdmin(); 