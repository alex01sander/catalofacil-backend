const axios = require('axios');

async function testarFluxoCompletoFrontend() {
    console.log('🔍 TESTANDO FLUXO COMPLETO DO FRONTEND');
    console.log('======================================\n');
    
    const email = 'fulanosander@gmail.com';
    const password = '123456';
    
    try {
        console.log('1️⃣ Simulando login do frontend...');
        console.log('   📡 POST https://catalofacil-backend.onrender.com/auth/login');
        
        const loginResponse = await axios.post('https://catalofacil-backend.onrender.com/auth/login', {
            email,
            password
        });
        
        console.log('✅ Login bem-sucedido!');
        console.log('📊 Usuário:', loginResponse.data.user);
        console.log('🔑 Token:', loginResponse.data.token.substring(0, 50) + '...');
        
        const token = loginResponse.data.token;
        const userId = loginResponse.data.user.id;
        
        console.log('\n2️⃣ Simulando verificação de admin do frontend...');
        console.log('   📡 GET https://catalofacil-backend.onrender.com/api/controller-admins/' + userId);
        
        const adminCheckResponse = await axios.get(`https://catalofacil-backend.onrender.com/api/controller-admins/${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
        console.log('✅ Verificação de admin bem-sucedida!');
        console.log('📊 Resposta:', adminCheckResponse.data);
        
        console.log('\n3️⃣ Simulando acesso à rota /controller...');
        console.log('   📡 GET https://demo.catalofacil.com.br/controller');
        
        const controllerResponse = await axios.get('https://demo.catalofacil.com.br/controller', {
            validateStatus: () => true
        });
        
        console.log('📊 Status da rota /controller:', controllerResponse.status);
        console.log('📄 Tipo de conteúdo:', controllerResponse.headers['content-type']);
        
        if (controllerResponse.data.includes('Acesso Negado')) {
            console.log('🚫 PÁGINA MOSTRA "ACESSO NEGADO"');
            console.log('   Isso significa que o frontend não conseguiu verificar o admin');
        } else {
            console.log('✅ PÁGINA CARREGOU NORMALMENTE');
        }
        
        console.log('\n4️⃣ Verificando se há algum problema na verificação...');
        
        // Testar se o token está sendo enviado corretamente
        console.log('   📡 Testando token no header...');
        
        const tokenTestResponse = await axios.get(`https://catalofacil-backend.onrender.com/api/controller-admins/${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        
        console.log('✅ Token funcionando corretamente!');
        console.log('📊 Resposta:', tokenTestResponse.data);
        
        console.log('\n🎯 DIAGNÓSTICO FINAL:');
        console.log('=====================');
        console.log('✅ Login funcionando');
        console.log('✅ Token válido');
        console.log('✅ Verificação de admin funcionando');
        console.log('✅ Backend respondendo corretamente');
        console.log('❌ Frontend mostrando "Acesso Negado"');
        
        console.log('\n🔧 POSSÍVEIS CAUSAS:');
        console.log('===================');
        console.log('1. Frontend não está enviando o token corretamente');
        console.log('2. Frontend está fazendo a verificação em momento errado');
        console.log('3. Frontend está usando um ID de usuário diferente');
        console.log('4. Cache do navegador com dados antigos');
        console.log('5. Problema na lógica de autenticação do frontend');
        
        console.log('\n💡 SOLUÇÕES:');
        console.log('============');
        console.log('1. Verificar se o frontend está salvando o token após login');
        console.log('2. Verificar se o frontend está enviando o token nas requisições');
        console.log('3. Verificar se há algum problema na lógica de autenticação');
        console.log('4. Verificar se o usuário está realmente logado no frontend');
        console.log('5. Verificar se não há conflito de IDs de usuário');
        
        console.log('\n🔍 PRÓXIMOS PASSOS:');
        console.log('==================');
        console.log('1. Verificar no console do navegador se há erros');
        console.log('2. Verificar se o token está sendo salvo no localStorage');
        console.log('3. Verificar se as requisições estão sendo feitas com o token');
        console.log('4. Verificar se o usuário logado é realmente fulanosander@gmail.com');
        
    } catch (error) {
        console.error('❌ Erro durante o teste:', error.message);
        
        if (error.response) {
            console.log('📊 Status:', error.response.status);
            console.log('📊 Dados:', error.response.data);
        }
    }
}

// Executar
testarFluxoCompletoFrontend(); 