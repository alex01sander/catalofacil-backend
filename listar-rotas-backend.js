const axios = require('axios');

async function listarRotasBackend() {
    console.log('🔍 LISTANDO ROTAS DO BACKEND');
    console.log('=============================\n');
    
    const API_BASE_URL = 'https://catalofacil-backend.onrender.com';
    
    // Lista de rotas para testar
    const rotas = [
        '/',
        '/health',
        '/auth',
        '/auth/login',
        '/api/auth',
        '/api/auth/login',
        '/products',
        '/api/products',
        '/controllerAdmins',
        '/api/controller-admins',
        '/controller-admins',
        '/admin',
        '/api/admin',
        '/controller',
        '/api/controller',
        '/site',
        '/api/site',
        '/stores',
        '/api/stores',
        '/categories',
        '/api/categories',
        '/users',
        '/api/users'
    ];
    
    console.log('🔗 Testando rotas em:', API_BASE_URL);
    console.log('');
    
    for (const rota of rotas) {
        try {
            const response = await axios.get(`${API_BASE_URL}${rota}`, {
                timeout: 3000
            });
            
            // Verificar se é JSON (API) ou HTML (frontend)
            const isJson = typeof response.data === 'object' || 
                          (typeof response.data === 'string' && response.data.trim().startsWith('{'));
            
            if (isJson) {
                console.log(`✅ ${rota} - API (JSON)`);
                if (response.data && typeof response.data === 'object' && Object.keys(response.data).length <= 3) {
                    console.log(`   📊 ${JSON.stringify(response.data)}`);
                }
            } else {
                console.log(`❌ ${rota} - Frontend (HTML)`);
            }
            
        } catch (error) {
            if (error.response) {
                if (error.response.status === 404) {
                    console.log(`❌ ${rota} - 404 (Não encontrada)`);
                } else if (error.response.status === 401) {
                    console.log(`🔒 ${rota} - 401 (Autenticação necessária)`);
                } else if (error.response.status === 403) {
                    console.log(`🚫 ${rota} - 403 (Acesso negado)`);
                } else {
                    console.log(`❌ ${rota} - ${error.response.status} (Erro)`);
                }
            } else {
                console.log(`❌ ${rota} - Erro de conexão`);
            }
        }
    }
    
    console.log('');
    console.log('🎯 RESUMO:');
    console.log('==========');
    console.log('✅ Rotas que retornam JSON = API funcionando');
    console.log('❌ Rotas que retornam HTML = Frontend sendo servido');
    console.log('🔒 Rotas 401 = Precisam de autenticação');
    console.log('❌ Rotas 404 = Não existem');
}

// Executar
listarRotasBackend(); 