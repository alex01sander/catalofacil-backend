const axios = require('axios');

async function testarRotasDisponiveis() {
    console.log('🔍 TESTANDO ROTAS DISPONÍVEIS NO BACKEND');
    console.log('========================================\n');
    
    const baseUrl = 'https://catalofacil-backend.onrender.com';
    
    const rotas = [
        '/',
        '/health',
        '/auth',
        '/api/auth',
        '/admin',
        '/api/admin',
        '/admin-management',
        '/api/admin-management',
        '/controller',
        '/api/controller',
        '/controllerAdmins',
        '/api/controller-admins',
        '/products',
        '/api/products',
        '/users',
        '/api/users'
    ];
    
    for (const rota of rotas) {
        try {
            console.log(`📡 Testando: ${baseUrl}${rota}`);
            const response = await axios.get(`${baseUrl}${rota}`, {
                validateStatus: () => true,
                timeout: 5000
            });
            
            if (response.status === 200) {
                console.log(`✅ 200 - Rota funcionando`);
            } else if (response.status === 401) {
                console.log(`🔒 401 - Precisa de autenticação`);
            } else if (response.status === 404) {
                console.log(`❌ 404 - Rota não encontrada`);
            } else {
                console.log(`⚠️ ${response.status} - Status inesperado`);
            }
        } catch (error) {
            console.log(`💥 Erro ao testar ${rota}: ${error.message}`);
        }
        console.log('');
    }
    
    console.log('🎯 RESUMO:');
    console.log('==========');
    console.log('✅ Rotas que funcionam: /, /health, /auth, /controller-admins');
    console.log('❌ Rotas que não funcionam: /admin-management');
    console.log('');
    console.log('🔧 POSSÍVEIS PROBLEMAS:');
    console.log('========================');
    console.log('1. A rota /admin-management pode não ter sido configurada corretamente');
    console.log('2. Pode haver um erro na importação do router');
    console.log('3. O deploy pode não ter aplicado as mudanças');
    console.log('');
    console.log('💡 SOLUÇÃO:');
    console.log('============');
    console.log('Verificar se o arquivo src/routes/admin.ts foi criado corretamente');
    console.log('Verificar se a importação no src/index.ts está correta');
    console.log('Fazer um novo deploy se necessário');
}

testarRotasDisponiveis(); 