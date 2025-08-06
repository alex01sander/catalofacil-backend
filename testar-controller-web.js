const axios = require('axios');

async function testarControllerWeb() {
    console.log('🌐 TESTANDO ACESSO AO CONTROLLER VIA NAVEGADOR');
    console.log('==============================================\n');
    
    const urls = [
        'https://demo.catalofacil.com.br/controller',
        'https://demo.catalofacil.com.br/admin',
        'https://demo.catalofacil.com.br/controller-admins',
        'https://catalofacil-backend.onrender.com/controller',
        'https://catalofacil-backend.onrender.com/admin'
    ];
    
    console.log('🔍 Testando URLs do controller...\n');
    
    for (const url of urls) {
        try {
            console.log(`📡 Testando: ${url}`);
            const response = await axios.get(url, {
                timeout: 10000,
                validateStatus: () => true // Aceita qualquer status
            });
            
            const contentType = response.headers['content-type'] || '';
            const isHtml = contentType.includes('text/html');
            const isJson = contentType.includes('application/json');
            
            if (response.status === 200) {
                if (isHtml) {
                    console.log(`✅ ${response.status} - Página HTML (Frontend)`);
                    console.log(`   📄 Tamanho: ${response.data.length} caracteres`);
                    if (response.data.includes('controller') || response.data.includes('admin')) {
                        console.log(`   🎯 Contém referências ao controller/admin`);
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
                console.log(`❌ ${response.status} - Não encontrado`);
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
    
    console.log('🎯 INSTRUÇÕES PARA ACESSAR O CONTROLLER:');
    console.log('==========================================');
    console.log('');
    console.log('1️⃣ PRIMEIRO: Faça login no sistema');
    console.log('   🌐 Acesse: https://demo.catalofacil.com.br');
    console.log('   📧 Email: fulanosander@gmail.com');
    console.log('   🔑 Senha: 123456');
    console.log('');
    console.log('2️⃣ DEPOIS: Acesse o controller');
    console.log('   🌐 URL: https://demo.catalofacil.com.br/controller');
    console.log('   ou');
    console.log('   🌐 URL: https://demo.catalofacil.com.br/admin');
    console.log('');
    console.log('3️⃣ SE NÃO FUNCIONAR:');
    console.log('   🔧 Verifique se está logado');
    console.log('   🔧 Limpe o cache do navegador');
    console.log('   🔧 Tente em uma guia anônima');
    console.log('');
    console.log('💡 DICA: O controller só funciona para usuários admin!');
    console.log('   ✅ fulanosander@gmail.com tem acesso');
    console.log('   ❌ Outros usuários não têm acesso');
}

// Executar
testarControllerWeb(); 