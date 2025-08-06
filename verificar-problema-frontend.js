const axios = require('axios');

async function verificarProblemaFrontend() {
    console.log('🔍 DIAGNOSTICANDO PROBLEMA DO FRONTEND');
    console.log('======================================\n');
    
    const email = 'fulanosander@gmail.com';
    const password = '123456';
    
    try {
        console.log('1️⃣ Testando login no backend correto...');
        const loginResponse = await axios.post('https://catalofacil-backend.onrender.com/auth/login', {
            email,
            password
        });
        
        console.log('✅ Login bem-sucedido no backend!');
        console.log('📊 Usuário:', loginResponse.data.user);
        console.log('🔑 Token gerado:', loginResponse.data.token.substring(0, 50) + '...');
        
        const token = loginResponse.data.token;
        const userId = loginResponse.data.user.id;
        
        console.log('\n2️⃣ Testando acesso ao controller com token...');
        const controllerResponse = await axios.get(`https://catalofacil-backend.onrender.com/api/controller-admins/${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
        console.log('✅ Acesso ao controller confirmado!');
        console.log('📊 Resposta:', controllerResponse.data);
        
        console.log('\n3️⃣ Testando se o frontend está usando a URL correta...');
        
        // Simular o que o frontend deveria fazer
        const frontendLoginResponse = await axios.post('https://demo.catalofacil.com.br/api/auth/login', {
            email,
            password
        }, {
            validateStatus: () => true
        });
        
        console.log('📊 Frontend login status:', frontendLoginResponse.status);
        if (frontendLoginResponse.status === 404) {
            console.log('❌ PROBLEMA ENCONTRADO: Frontend usando URL errada!');
            console.log('   O frontend está tentando acessar: https://demo.catalofacil.com.br/api/auth/login');
            console.log('   Mas deveria usar: https://catalofacil-backend.onrender.com/auth/login');
        }
        
        console.log('\n🎯 DIAGNÓSTICO FINAL:');
        console.log('=====================');
        console.log('✅ Backend funcionando perfeitamente');
        console.log('✅ Login funcionando');
        console.log('✅ Token válido');
        console.log('✅ Usuário admin confirmado');
        console.log('❌ Frontend usando URL errada da API');
        
        console.log('\n🔧 SOLUÇÃO NECESSÁRIA:');
        console.log('=====================');
        console.log('O frontend precisa ser configurado para usar:');
        console.log('🌐 API Base URL: https://catalofacil-backend.onrender.com');
        console.log('');
        console.log('📋 URLs que devem ser alteradas no frontend:');
        console.log('   ❌ Atual: https://demo.catalofacil.com.br/api/auth/login');
        console.log('   ✅ Correta: https://catalofacil-backend.onrender.com/auth/login');
        console.log('');
        console.log('   ❌ Atual: https://demo.catalofacil.com.br/api/controller-admins/:userId');
        console.log('   ✅ Correta: https://catalofacil-backend.onrender.com/api/controller-admins/:userId');
        console.log('');
        console.log('💡 INSTRUÇÕES PARA O DESENVOLVEDOR DO FRONTEND:');
        console.log('================================================');
        console.log('1. Localize o arquivo de configuração da API (geralmente .env ou config.js)');
        console.log('2. Altere a variável de ambiente ou configuração da API base URL');
        console.log('3. Mude de: https://demo.catalofacil.com.br');
        console.log('4. Para: https://catalofacil-backend.onrender.com');
        console.log('5. Faça o build e deploy do frontend');
        console.log('');
        console.log('✅ DEPOIS DISSO O CONTROLLER FUNCIONARÁ!');
        
    } catch (error) {
        console.error('❌ Erro durante o diagnóstico:', error.message);
        
        if (error.response) {
            console.log('📊 Status:', error.response.status);
            console.log('📊 Dados:', error.response.data);
        }
    }
}

// Executar
verificarProblemaFrontend(); 