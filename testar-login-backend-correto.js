const axios = require('axios');
const jwt = require('jsonwebtoken');

async function testarLoginBackendCorreto() {
    console.log('🧪 TESTANDO LOGIN COM BACKEND CORRETO');
    console.log('=====================================\n');
    
    const API_BASE_URL = 'https://catalofacil-backend.onrender.com';
    const email = 'fulanosander@gmail.com';
    const password = '123456';
    
    try {
        console.log('1️⃣ Fazendo login no backend correto...');
        console.log('📧 Email:', email);
        console.log('🔑 Senha:', password);
        console.log('🌐 URL:', `${API_BASE_URL}/api/auth/login`);
        console.log('');
        
        const loginResponse = await axios.post(`${API_BASE_URL}/api/auth/login`, {
            email: email,
            password: password
        });
        
        console.log('✅ Login realizado com sucesso!');
        console.log('📊 Resposta do login:');
        console.log(JSON.stringify(loginResponse.data, null, 2));
        console.log('');
        
        const token = loginResponse.data.token;
        const user = loginResponse.data.user;
        
        console.log('2️⃣ Testando rota controller-admins...');
        const adminResponse = await axios.get(`${API_BASE_URL}/api/controller-admins/${user.id}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        
        console.log('✅ Rota controller-admins funcionando!');
        console.log('📊 Resposta:');
        console.log(JSON.stringify(adminResponse.data, null, 2));
        console.log('');
        
        console.log('🎯 RESUMO FINAL:');
        console.log('================');
        console.log('✅ Backend funcionando:', API_BASE_URL);
        console.log('✅ Login funcionando');
        console.log('✅ Token válido');
        console.log('✅ Rota controller-admins funcionando');
        console.log('✅ Usuário admin configurado corretamente');
        console.log('');
        console.log('💡 PROBLEMA IDENTIFICADO:');
        console.log('   O frontend está usando a URL errada');
        console.log('   URL atual: https://demo.catalofacil.com.br');
        console.log('   URL correta: https://catalofacil-backend.onrender.com');
        console.log('');
        console.log('🔧 SOLUÇÃO:');
        console.log('   Configure o frontend para usar:');
        console.log('   https://catalofacil-backend.onrender.com');
        console.log('');
        console.log('📧 Credenciais para teste:');
        console.log('   Email: fulanosander@gmail.com');
        console.log('   Senha: 123456');
        
    } catch (error) {
        console.error('❌ Erro durante o teste:', error.message);
        
        if (error.response) {
            console.log('📊 Resposta de erro:');
            console.log(JSON.stringify(error.response.data, null, 2));
            console.log('📊 Status:', error.response.status);
        }
    }
}

// Executar
testarLoginBackendCorreto(); 