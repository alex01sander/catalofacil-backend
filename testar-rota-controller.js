const axios = require('axios');

async function testarRotaController() {
    console.log('🔍 TESTANDO ROTA /CONTROLLER ESPECIFICAMENTE');
    console.log('============================================\n');
    
    const urls = [
        'https://demo.catalofacil.com.br/controller',
        'https://demo.catalofacil.com.br/api/controller',
        'https://demo.catalofacil.com.br/controller/',
        'https://catalofacil-backend.onrender.com/controller',
        'https://catalofacil-backend.onrender.com/api/controller'
    ];
    
    console.log('🔍 Testando diferentes variações da rota controller...\n');
    
    for (const url of urls) {
        try {
            console.log(`📡 Testando: ${url}`);
            const response = await axios.get(url, {
                timeout: 10000,
                validateStatus: () => true
            });
            
            const contentType = response.headers['content-type'] || '';
            const isHtml = contentType.includes('text/html');
            const isJson = contentType.includes('application/json');
            
            if (response.status === 200) {
                if (isHtml) {
                    console.log(`✅ ${response.status} - Página HTML (Frontend)`);
                    console.log(`   📄 Tamanho: ${response.data.length} caracteres`);
                    
                    // Verificar se é a página de acesso negado
                    if (response.data.includes('Acesso Negado') || response.data.includes('Access Denied')) {
                        console.log(`   🚫 Contém mensagem de "Acesso Negado"`);
                    }
                    
                    if (response.data.includes('controller')) {
                        console.log(`   🎯 Contém referências ao controller`);
                    }
                } else if (isJson) {
                    console.log(`✅ ${response.status} - API JSON (Backend)`);
                    console.log(`   📊 Resposta: ${JSON.stringify(response.data).substring(0, 100)}...`);
                } else {
                    console.log(`✅ ${response.status} - Outro tipo de conteúdo`);
                }
            } else if (response.status === 401) {
                console.log(`🔒 ${response.status} - Precisa de autenticação`);
            } else if (response.status === 404) {
                console.log(`❌ ${response.status} - Rota não encontrada`);
                if (isJson && response.data.error) {
                    console.log(`   📊 Erro: ${response.data.error}`);
                }
            } else {
                console.log(`⚠️ ${response.status} - Status inesperado`);
            }
            
        } catch (error) {
            if (error.code === 'ECONNREFUSED') {
                console.log(`❌ Erro de conexão - Servidor não responde`);
            } else if (error.code === 'ENOTFOUND') {
                console.log(`❌ Domínio não encontrado`);
            } else {
                console.log(`❌ Erro: ${error.message}`);
            }
        }
        
        console.log('');
    }
    
    console.log('🎯 DIAGNÓSTICO DA ROTA /CONTROLLER:');
    console.log('====================================');
    console.log('');
    console.log('📊 PROBLEMAS IDENTIFICADOS:');
    console.log('1. Frontend pode não ter sido atualizado com as novas configurações');
    console.log('2. Rota /controller pode estar retornando HTML em vez de verificar autenticação');
    console.log('3. Frontend pode estar fazendo chamadas para URLs erradas');
    console.log('');
    console.log('🔧 SOLUÇÕES NECESSÁRIAS:');
    console.log('=======================');
    console.log('1. VERIFICAR SE O FRONTEND FOI DEPLOYADO:');
    console.log('   - O frontend precisa ser rebuildado e redeployado');
    console.log('   - As configurações da API precisam ser aplicadas');
    console.log('');
    console.log('2. VERIFICAR A CONFIGURAÇÃO DO FRONTEND:');
    console.log('   - Arquivo .env.production deve ter: VITE_API_URL=https://catalofacil-backend.onrender.com');
    console.log('   - vercel.json deve ter o proxy configurado');
    console.log('   - src/constants/api.ts deve usar a URL correta');
    console.log('');
    console.log('3. VERIFICAR SE O DEPLOY FOI FEITO:');
    console.log('   - O Vercel/Netlify pode não ter aplicado as mudanças');
    console.log('   - Pode ser necessário forçar um novo deploy');
    console.log('');
    console.log('💡 PRÓXIMOS PASSOS:');
    console.log('==================');
    console.log('1. Confirmar que o frontend foi redeployado');
    console.log('2. Verificar se as configurações foram aplicadas');
    console.log('3. Testar novamente após o deploy');
    console.log('4. Se persistir, verificar logs do frontend');
}

// Executar
testarRotaController(); 