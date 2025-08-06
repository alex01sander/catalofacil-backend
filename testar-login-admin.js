const axios = require('axios');
const jwt = require('jsonwebtoken');

async function testarLoginAdmin() {
    console.log('🧪 TESTANDO LOGIN ADMIN');
    console.log('========================\n');
    
    const API_BASE_URL = 'https://demo.catalofacil.com.br';
    const email = 'fulanosander@gmail.com';
    const password = '123456';
    
    try {
        console.log('1️⃣ Fazendo login...');
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
        
        console.log('2️⃣ Decodificando token JWT...');
        const decoded = jwt.decode(token, { complete: true });
        console.log('📊 Token decodificado:');
        console.log(JSON.stringify(decoded, null, 2));
        console.log('');
        
        console.log('3️⃣ Verificando IDs...');
        console.log('🆔 ID do usuário (resposta):', user.id);
        console.log('🆔 ID do token (payload.id):', decoded.payload.id);
        console.log('🆔 ID esperado:', '12345678-1234-1234-1234-123456789abc');
        console.log('');
        
        console.log('4️⃣ Testando rota controller-admins...');
        const adminResponse = await axios.get(`${API_BASE_URL}/api/controller-admins/${user.id}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        
        console.log('✅ Rota controller-admins funcionando!');
        console.log('📊 Resposta:');
        console.log(JSON.stringify(adminResponse.data, null, 2));
        console.log('');
        
        console.log('🎯 RESUMO:');
        console.log('==========');
        console.log('✅ Login funcionando');
        console.log('✅ Token válido');
        console.log('✅ ID correto:', user.id === '12345678-1234-1234-1234-123456789abc' ? 'SIM' : 'NÃO');
        console.log('✅ Rota controller-admins funcionando');
        console.log('');
        console.log('💡 Se o ID estiver correto, o problema pode estar no frontend.');
        
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
testarLoginAdmin(); 