const axios = require('axios');

async function testarAdminManagementDebug() {
    console.log('🔍 DEBUG DAS ROTAS ADMIN-MANAGEMENT');
    console.log('====================================\n');
    
    const baseUrl = 'https://catalofacil-backend.onrender.com';
    
    // Testar rota básica do servidor
    try {
        console.log('1️⃣ Testando conectividade básica...');
        const basicResponse = await axios.get(`${baseUrl}/health`, {
            timeout: 10000,
            validateStatus: () => true
        });
        console.log(`✅ Servidor respondendo: ${basicResponse.status}`);
    } catch (error) {
        console.log(`❌ Erro de conectividade: ${error.message}`);
        return;
    }
    
    console.log('');
    
    // Testar rota /admin (que sabemos que funciona)
    try {
        console.log('2️⃣ Testando /admin (deve retornar 401)...');
        const adminResponse = await axios.get(`${baseUrl}/admin`, {
            timeout: 10000,
            validateStatus: () => true
        });
        console.log(`✅ /admin: ${adminResponse.status}`);
    } catch (error) {
        console.log(`❌ /admin: ${error.message}`);
    }
    
    console.log('');
    
    // Testar rota /admin-management
    try {
        console.log('3️⃣ Testando /admin-management...');
        const adminManagementResponse = await axios.get(`${baseUrl}/admin-management`, {
            timeout: 10000,
            validateStatus: () => true
        });
        console.log(`📊 /admin-management: ${adminManagementResponse.status}`);
        if (adminManagementResponse.status === 404) {
            console.log('❌ ROTA NÃO ENCONTRADA - PROBLEMA NA REGISTRAÇÃO');
        } else if (adminManagementResponse.status === 401) {
            console.log('✅ ROTA FUNCIONANDO - Precisa de autenticação');
        }
    } catch (error) {
        console.log(`❌ /admin-management: ${error.message}`);
    }
    
    console.log('');
    
    // Testar rota /api/admin-management
    try {
        console.log('4️⃣ Testando /api/admin-management...');
        const apiAdminManagementResponse = await axios.get(`${baseUrl}/api/admin-management`, {
            timeout: 10000,
            validateStatus: () => true
        });
        console.log(`📊 /api/admin-management: ${apiAdminManagementResponse.status}`);
        if (apiAdminManagementResponse.status === 404) {
            console.log('❌ ROTA NÃO ENCONTRADA - PROBLEMA NA REGISTRAÇÃO');
        } else if (apiAdminManagementResponse.status === 401) {
            console.log('✅ ROTA FUNCIONANDO - Precisa de autenticação');
        }
    } catch (error) {
        console.log(`❌ /api/admin-management: ${error.message}`);
    }
    
    console.log('');
    
    // Testar rota específica /api/admin-management/users
    try {
        console.log('5️⃣ Testando /api/admin-management/users...');
        const usersResponse = await axios.get(`${baseUrl}/api/admin-management/users`, {
            timeout: 10000,
            validateStatus: () => true
        });
        console.log(`📊 /api/admin-management/users: ${usersResponse.status}`);
        if (usersResponse.status === 404) {
            console.log('❌ ROTA NÃO ENCONTRADA - PROBLEMA NA IMPLEMENTAÇÃO');
        } else if (usersResponse.status === 401) {
            console.log('✅ ROTA FUNCIONANDO - Precisa de autenticação');
        }
    } catch (error) {
        console.log(`❌ /api/admin-management/users: ${error.message}`);
    }
    
    console.log('\n🔍 ANÁLISE:');
    console.log('Se todas as rotas retornam 404, o problema está na importação/registração');
    console.log('Se algumas funcionam e outras não, o problema está na implementação específica');
}

testarAdminManagementDebug().catch(console.error); 