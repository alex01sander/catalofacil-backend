const axios = require('axios');

async function testarStatsEspecifico() {
    console.log('🔍 TESTE ESPECÍFICO PARA /ADMIN/STATS');
    console.log('=====================================\n');
    
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
        
        // 2. Testar rota /admin/stats com verbose
        console.log('\n2️⃣ Testando /admin/stats...');
        try {
            const statsResponse = await axios.get(`${baseUrl}/admin/stats`, { 
                headers,
                timeout: 10000,
                validateStatus: () => true
            });
            console.log('📊 Status:', statsResponse.status);
            console.log('📊 Headers:', statsResponse.headers);
            console.log('📊 Data:', statsResponse.data);
        } catch (error) {
            console.log('❌ Erro:', error.message);
            if (error.response) {
                console.log('📊 Status:', error.response.status);
                console.log('📊 Data:', error.response.data);
            }
        }
        
        // 3. Testar rota /admin/stats com curl equivalente
        console.log('\n3️⃣ Testando com curl equivalente...');
        const { exec } = require('child_process');
        const curlCommand = `curl -s -w "\\nStatus: %{http_code}\\n" "${baseUrl}/admin/stats" -H "Authorization: Bearer ${token}"`;
        
        exec(curlCommand, (error, stdout, stderr) => {
            if (error) {
                console.log('❌ Erro no curl:', error.message);
                return;
            }
            console.log('📊 Resposta do curl:');
            console.log(stdout);
        });
        
    } catch (error) {
        console.error('❌ Erro no login:', error.message);
    }
}

testarStatsEspecifico(); 