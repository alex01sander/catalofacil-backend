const axios = require('axios');

async function testarAdminDireto() {
    console.log('🔍 TESTANDO ROTAS DIRETAS NO /ADMIN');
    console.log('===================================\n');
    
    const baseUrl = 'https://catalofacil-backend.onrender.com';
    
    try {
        // 1. Fazer login para obter token
        console.log('1️⃣ Fazendo login...');
        const loginResponse = await axios.post(`${baseUrl}/auth/login`, {
            email: 'fulanosander@gmail.com',
            password: '123456'
        });
        
        const token = loginResponse.data.token;
        console.log('✅ Login bem-sucedido!');
        
        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        };
        
        // 2. Testar rota /admin/stats
        console.log('\n2️⃣ Testando /admin/stats...');
        try {
            const statsResponse = await axios.get(`${baseUrl}/admin/stats`, { headers });
            console.log('✅ /admin/stats funcionando!');
            console.log('📊 Dados:', statsResponse.data);
        } catch (error) {
            console.log('❌ /admin/stats não funcionou:', error.response?.status, error.response?.data);
        }
        
        // 3. Testar rota /admin/users
        console.log('\n3️⃣ Testando /admin/users...');
        try {
            const usersResponse = await axios.get(`${baseUrl}/admin/users`, { headers });
            console.log('✅ /admin/users funcionando!');
            console.log('📊 Total de usuários:', usersResponse.data.total);
        } catch (error) {
            console.log('❌ /admin/users não funcionou:', error.response?.status, error.response?.data);
        }
        
        // 4. Testar rota /admin/domains
        console.log('\n4️⃣ Testando /admin/domains...');
        try {
            const domainsResponse = await axios.get(`${baseUrl}/admin/domains`, { headers });
            console.log('✅ /admin/domains funcionando!');
            console.log('📊 Total de domínios:', domainsResponse.data.total);
        } catch (error) {
            console.log('❌ /admin/domains não funcionou:', error.response?.status, error.response?.data);
        }
        
        // 5. Testar rota /api/admin/stats
        console.log('\n5️⃣ Testando /api/admin/stats...');
        try {
            const apiStatsResponse = await axios.get(`${baseUrl}/api/admin/stats`, { headers });
            console.log('✅ /api/admin/stats funcionando!');
            console.log('📊 Dados:', apiStatsResponse.data);
        } catch (error) {
            console.log('❌ /api/admin/stats não funcionou:', error.response?.status, error.response?.data);
        }
        
        console.log('\n🎯 RESUMO:');
        console.log('==========');
        console.log('Se as rotas /admin funcionarem, o problema é apenas com /admin-management');
        console.log('Se não funcionarem, há um problema geral com o arquivo admin.ts');
        
    } catch (error) {
        console.error('❌ Erro no login:', error.message);
    }
}

testarAdminDireto(); 