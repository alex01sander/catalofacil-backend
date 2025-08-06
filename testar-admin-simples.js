const axios = require('axios');

async function testarAdminSimples() {
    console.log('🔍 TESTE SIMPLES DAS ROTAS ADMIN');
    console.log('================================\n');
    
    const baseUrl = 'https://catalofacil-backend.onrender.com';
    
    try {
        // 1. Testar rota /admin (que sabemos que funciona)
        console.log('1️⃣ Testando /admin...');
        const adminResponse = await axios.get(`${baseUrl}/admin`, {
            validateStatus: () => true
        });
        console.log(`Status: ${adminResponse.status}`);
        
        // 2. Testar rota /admin-management
        console.log('\n2️⃣ Testando /admin-management...');
        const adminManagementResponse = await axios.get(`${baseUrl}/admin-management`, {
            validateStatus: () => true
        });
        console.log(`Status: ${adminManagementResponse.status}`);
        
        // 3. Testar rota /api/admin-management
        console.log('\n3️⃣ Testando /api/admin-management...');
        const apiAdminManagementResponse = await axios.get(`${baseUrl}/api/admin-management`, {
            validateStatus: () => true
        });
        console.log(`Status: ${apiAdminManagementResponse.status}`);
        
        // 4. Testar rota específica /api/admin-management/stats
        console.log('\n4️⃣ Testando /api/admin-management/stats...');
        const statsResponse = await axios.get(`${baseUrl}/api/admin-management/stats`, {
            validateStatus: () => true
        });
        console.log(`Status: ${statsResponse.status}`);
        
        // 5. Verificar se há diferença entre /admin e /admin-management
        console.log('\n🎯 ANÁLISE:');
        console.log('===========');
        console.log(`/admin: ${adminResponse.status}`);
        console.log(`/admin-management: ${adminManagementResponse.status}`);
        console.log(`/api/admin-management: ${apiAdminManagementResponse.status}`);
        console.log(`/api/admin-management/stats: ${statsResponse.status}`);
        
        if (adminResponse.status === 401 && adminManagementResponse.status === 404) {
            console.log('\n💡 CONCLUSÃO:');
            console.log('=============');
            console.log('✅ /admin está funcionando (401 = precisa de auth)');
            console.log('❌ /admin-management não está funcionando (404 = rota não existe)');
            console.log('🔧 PROBLEMA: As rotas /admin-management não foram registradas corretamente');
        }
        
    } catch (error) {
        console.error('❌ Erro:', error.message);
    }
}

testarAdminSimples(); 