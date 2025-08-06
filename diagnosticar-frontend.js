const axios = require('axios');
const jwt = require('jsonwebtoken');

async function diagnosticarFrontend() {
    console.log('🔍 DIAGNOSTICANDO PROBLEMA DO FRONTEND');
    console.log('=====================================\n');
    
    const email = 'fulanosander@gmail.com';
    const password = '123456';
    
    try {
        // 1. Fazer login no backend correto
        console.log('1️⃣ Fazendo login no backend...');
        const loginResponse = await axios.post('https://catalofacil-backend.onrender.com/auth/login', {
            email,
            password
        });
        
        const token = loginResponse.data.token;
        const user = loginResponse.data.user;
        
        console.log('✅ Login bem-sucedido!');
        console.log('📊 Usuário retornado:', user);
        console.log('🔑 Token gerado:', token.substring(0, 50) + '...');
        
        // 2. Decodificar o token
        console.log('\n2️⃣ Decodificando o token...');
        const decoded = jwt.decode(token, { complete: true });
        console.log('📊 Payload do token:', decoded.payload);
        
        // 3. Verificar se o ID do token é o correto
        console.log('\n3️⃣ Verificando ID do token...');
        const tokenUserId = decoded.payload.id;
        const responseUserId = user.id;
        
        console.log('🔑 ID do token:', tokenUserId);
        console.log('📊 ID da resposta:', responseUserId);
        console.log('✅ IDs são iguais:', tokenUserId === responseUserId);
        
        // 4. Testar acesso ao controller com o ID correto
        console.log('\n4️⃣ Testando acesso ao controller...');
        const controllerResponse = await axios.get(`https://catalofacil-backend.onrender.com/api/controller-admins/${tokenUserId}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        
        console.log('✅ Acesso ao controller confirmado!');
        console.log('📊 Resposta:', controllerResponse.data);
        
        // 5. Simular o que o frontend deveria fazer
        console.log('\n5️⃣ Simulando requisição do frontend...');
        console.log('🔍 O frontend deveria:');
        console.log('   1. Fazer login em: https://catalofacil-backend.onrender.com/auth/login');
        console.log('   2. Salvar o token no localStorage');
        console.log('   3. Extrair o user.id do token ou da resposta');
        console.log('   4. Fazer requisição para: https://catalofacil-backend.onrender.com/api/controller-admins/${user.id}');
        
        // 6. Verificar o que o frontend está fazendo de errado
        console.log('\n6️⃣ PROBLEMAS IDENTIFICADOS NO FRONTEND:');
        console.log('❌ Frontend está usando ID: de5b0fba-f7a8-4e1e-9459-233b4c858ab3');
        console.log('✅ Deveria usar ID:', tokenUserId);
        console.log('❌ Frontend está fazendo requisição para: https://demo.catalofacil.com.br/api/controller-admins/...');
        console.log('✅ Deveria fazer para: https://catalofacil-backend.onrender.com/api/controller-admins/...');
        
        // 7. Solução
        console.log('\n🎯 SOLUÇÃO NECESSÁRIA NO FRONTEND:');
        console.log('==================================');
        console.log('1. VERIFICAR ARQUIVO DE CONFIGURAÇÃO DA API:');
        console.log('   - Procurar por .env, .env.production, config.js, api.js');
        console.log('   - Alterar API_URL de demo.catalofacil.com.br para catalofacil-backend.onrender.com');
        console.log('');
        console.log('2. VERIFICAR COMO O USER ID É OBTIDO:');
        console.log('   - O frontend deve usar user.id da resposta do login');
        console.log('   - Ou extrair o ID do token decodificado');
        console.log('   - NÃO usar IDs hardcoded ou de cache');
        console.log('');
        console.log('3. VERIFICAR ARQUIVOS QUE PODEM TER O PROBLEMA:');
        console.log('   - src/constants/api.js');
        console.log('   - src/services/auth.js');
        console.log('   - src/contexts/AuthContext.js');
        console.log('   - src/hooks/useAuth.js');
        console.log('');
        console.log('4. COMANDOS PARA O DESENVOLVEDOR:');
        console.log('   npm run build');
        console.log('   npm run deploy');
        console.log('   # ou vercel --prod');
        
    } catch (error) {
        console.error('❌ Erro durante o diagnóstico:', error.message);
        if (error.response) {
            console.error('📊 Status:', error.response.status);
            console.error('📊 Data:', error.response.data);
        }
    }
}

diagnosticarFrontend(); 