const axios = require('axios');

async function testarBackendDireto() {
    console.log('🔍 TESTANDO BACKEND DIRETAMENTE');
    console.log('================================\n');
    
    // Possíveis URLs do backend
    const urls = [
        'https://catalofacil-backend.onrender.com',
        'https://catalofacil-backend.railway.app',
        'https://catalofacil-backend.up.railway.app',
        'https://catalofacil-backend.vercel.app',
        'https://catalofacil-backend.netlify.app',
        'https://api.catalofacil.com.br',
        'https://backend.catalofacil.com.br',
        'https://demo.catalofacil.com.br:3000',
        'https://demo.catalofacil.com.br:8080',
        'https://demo.catalofacil.com.br:5000'
    ];
    
    for (const baseUrl of urls) {
        try {
            console.log(`🔗 Testando: ${baseUrl}`);
            
            const response = await axios.get(`${baseUrl}/health`, {
                timeout: 5000
            });
            
            if (response.data && typeof response.data === 'object' && response.data.status) {
                console.log('✅ BACKEND ENCONTRADO!');
                console.log('📊 Resposta:', JSON.stringify(response.data, null, 2));
                console.log('');
                
                // Testar rota controller-admins
                try {
                    const adminResponse = await axios.get(`${baseUrl}/api/controller-admins`);
                    console.log('✅ Rota controller-admins funcionando!');
                    console.log('📊 Resposta:', JSON.stringify(adminResponse.data, null, 2));
                } catch (adminError) {
                    console.log('❌ Rota controller-admins não funcionando');
                }
                
                console.log('');
                console.log('🎯 URL DO BACKEND:', baseUrl);
                console.log('💡 Configure o frontend para usar esta URL');
                return;
            }
            
        } catch (error) {
            console.log('❌ Não é o backend');
        }
    }
    
    console.log('❌ Backend não encontrado em nenhuma URL');
    console.log('💡 Verifique se o servidor backend está rodando');
}

// Executar
testarBackendDireto(); 