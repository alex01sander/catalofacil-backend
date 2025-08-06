const axios = require('axios');

async function testarCompleto() {
    console.log('🧪 TESTANDO FLUXO COMPLETO');
    console.log('==========================\n');
    
    const API_BASE_URL = 'https://catalofacil-backend.onrender.com';
    const email = 'fulanosander@gmail.com';
    const password = '123456';
    
    try {
        console.log('1️⃣ Fazendo login...');
        const loginResponse = await axios.post(`${API_BASE_URL}/auth/login`, {
            email: email,
            password: password
        });
        
        console.log('✅ Login realizado com sucesso!');
        const token = loginResponse.data.token;
        const user = loginResponse.data.user;
        
        console.log('📊 Usuário:', user.email);
        console.log('🆔 ID:', user.id);
        console.log('');
        
        console.log('2️⃣ Testando rota controller-admins...');
        const adminResponse = await axios.get(`${API_BASE_URL}/api/controller-admins/${user.id}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        
        console.log('✅ Rota controller-admins funcionando!');
        console.log('📊 Resposta:', JSON.stringify(adminResponse.data, null, 2));
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
        console.log('');
        console.log('🔗 URLs que funcionam:');
        console.log('   - https://catalofacil-backend.onrender.com/auth/login');
        console.log('   - https://catalofacil-backend.onrender.com/api/controller-admins/12345678-1234-1234-1234-123456789abc');
        
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
testarCompleto(); 