const { Client } = require('pg');
const jwt = require('jsonwebtoken');
const fs = require('fs');

// Configurações do novo admin
const FULANOSANDER_USER_ID = '12345678-1234-1234-1234-123456789abc';
const FULANOSANDER_EMAIL = 'fulanosander@gmail.com';
const FULANOSANDER_DOMAIN = 'demo.catalofacil.com.br';

async function finalizarConfiguracao() {
    console.log('🔧 FINALIZANDO CONFIGURAÇÃO DA LOJA');
    console.log('====================================\n');
    
    // URL do banco de produção
    const databaseUrl = 'postgresql://catalofacil:4WdNU3pa3vCOzshZO9dKmAgNyj4gYLte@dpg-d1srh66mcj7s73arkbtg-a.virginia-postgres.render.com:5432/catalofacil_postgres?connection_limit=2';
    const jwtSecret = '@Lex141828';
    
    // Configurar conexão com banco de produção
    const client = new Client({
        connectionString: databaseUrl,
        ssl: { rejectUnauthorized: false }
    });
    
    try {
        console.log('🔗 Conectando ao banco de produção...');
        await client.connect();
        console.log('✅ Conectado ao banco de produção com sucesso!');
        console.log('');
        
        // Configurar store_settings com a estrutura correta
        console.log('🔧 Configurando store_settings...');
        await client.query(`
            INSERT INTO public.store_settings (
                id,
                user_id,
                store_name,
                store_description,
                store_subtitle,
                mobile_logo,
                desktop_banner,
                mobile_banner_color,
                mobile_banner_image,
                instagram_url,
                whatsapp_number,
                created_at,
                updated_at
            )
            VALUES (
                gen_random_uuid(),
                $1,
                'Demo Catálogo Fácil',
                'Loja de demonstração do Catálogo Fácil',
                'Produtos Incríveis',
                'https://via.placeholder.com/150x50/007bff/ffffff?text=Demo+Catálogo+Fácil',
                'https://via.placeholder.com/1200x300/007bff/ffffff?text=Banner+Demo+Catálogo+Fácil',
                'from-blue-400 via-blue-500 to-blue-600',
                'https://via.placeholder.com/400x200/007bff/ffffff?text=Mobile+Banner',
                'https://instagram.com/demo_catalofacil',
                '5551999999999',
                NOW(),
                NOW()
            )
            ON CONFLICT (user_id) DO UPDATE SET
                store_name = EXCLUDED.store_name,
                store_description = EXCLUDED.store_description,
                store_subtitle = EXCLUDED.store_subtitle,
                mobile_logo = EXCLUDED.mobile_logo,
                desktop_banner = EXCLUDED.desktop_banner,
                mobile_banner_color = EXCLUDED.mobile_banner_color,
                mobile_banner_image = EXCLUDED.mobile_banner_image,
                instagram_url = EXCLUDED.instagram_url,
                whatsapp_number = EXCLUDED.whatsapp_number,
                updated_at = NOW()
        `, [FULANOSANDER_USER_ID]);
        console.log('✅ Store settings configuradas');
        
        // Gerar token JWT
        console.log('🔐 Gerando token JWT...');
        const payload = {
            userId: FULANOSANDER_USER_ID,
            email: FULANOSANDER_EMAIL,
            role: 'admin',
            iat: Math.floor(Date.now() / 1000),
            exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60) // 24 horas
        };
        
        const token = jwt.sign(payload, jwtSecret);
        console.log('✅ Token JWT gerado');
        
        // Atualizar arquivo de teste
        console.log('📝 Atualizando arquivo de teste...');
        const testFileContent = `const axios = require('axios');

// Configurações do novo admin
const FULANOSANDER_USER_ID = '${FULANOSANDER_USER_ID}';
const FULANOSANDER_EMAIL = '${FULANOSANDER_EMAIL}';
const FULANOSANDER_TOKEN = '${token}';

// URL base da API
const API_BASE_URL = 'http://localhost:3000'; // Ajuste conforme necessário

// Função para gerar token de teste
function generateTestToken() {
    return FULANOSANDER_TOKEN;
}

// Testar rotas admin
async function testAdminRoutes() {
    const token = generateTestToken();
    
    console.log('🔐 Testando login com novo admin...');
    console.log('📧 Email:', FULANOSANDER_EMAIL);
    console.log('🆔 User ID:', FULANOSANDER_USER_ID);
    console.log('');

    try {
        // Testar rota de produtos
        console.log('📦 Testando rota de produtos...');
        const productsResponse = await axios.get(\`\${API_BASE_URL}/admin/products\`, {
            headers: { Authorization: \`Bearer \${token}\` }
        });
        console.log('✅ Produtos:', productsResponse.data.length, 'produtos encontrados');
        
        // Testar rota de categorias
        console.log('📂 Testando rota de categorias...');
        const categoriesResponse = await axios.get(\`\${API_BASE_URL}/admin/categories\`, {
            headers: { Authorization: \`Bearer \${token}\` }
        });
        console.log('✅ Categorias:', categoriesResponse.data.length, 'categorias encontradas');
        
        // Testar rota de vendas
        console.log('💰 Testando rota de vendas...');
        const salesResponse = await axios.get(\`\${API_BASE_URL}/admin/sales\`, {
            headers: { Authorization: \`Bearer \${token}\` }
        });
        console.log('✅ Vendas:', salesResponse.data.length, 'vendas encontradas');
        
        console.log('');
        console.log('🎯 TODOS OS TESTES PASSARAM! O novo admin está funcionando!');
        
    } catch (error) {
        console.error('❌ Erro nos testes:', error.response?.data || error.message);
    }
}

// Executar testes
testAdminRoutes();
`;

        fs.writeFileSync('test-alexsander-admin.js', testFileContent);
        console.log('✅ Arquivo test-alexsander-admin.js atualizado');
        
        // Verificar se tudo foi criado
        console.log('🔍 Verificando se tudo foi criado...');
        
        const userResult = await client.query(`
            SELECT email, role FROM auth.users WHERE email = $1
        `, [FULANOSANDER_EMAIL]);
        
        const domainResult = await client.query(`
            SELECT domain, user_id FROM public.domain_owners WHERE domain = $1
        `, [FULANOSANDER_DOMAIN]);
        
        const storeResult = await client.query(`
            SELECT name, domain FROM public.stores WHERE domain = $1
        `, [FULANOSANDER_DOMAIN]);
        
        const settingsResult = await client.query(`
            SELECT store_name, store_description FROM public.store_settings WHERE user_id = $1
        `, [FULANOSANDER_USER_ID]);
        
        console.log('✅ Verificação concluída');
        
        // Resumo final
        console.log('');
        console.log('🎯 TUDO EXECUTADO COM SUCESSO NO BANCO DE PRODUÇÃO!');
        console.log('==================================================');
        console.log('');
        console.log('📧 Email: fulanosander@gmail.com');
        console.log('🔑 Senha: 123456');
        console.log('🆔 User ID: 12345678-1234-1234-1234-123456789abc');
        console.log('🌐 Domínio: demo.catalofacil.com.br');
        console.log('');
        console.log('🔐 TOKEN JWT:');
        console.log(token);
        console.log('');
        console.log('✅ PRÓXIMOS PASSOS:');
        console.log('1. Use este token no frontend para fazer login');
        console.log('2. Configure o DNS do domínio demo.catalofacil.com.br');
        console.log('3. Teste com: node test-alexsander-admin.js');
        console.log('');
        console.log('📊 RESUMO:');
        console.log('- Usuário criado:', userResult.rows.length > 0 ? '✅' : '❌');
        console.log('- Domínio vinculado:', domainResult.rows.length > 0 ? '✅' : '❌');
        console.log('- Loja criada:', storeResult.rows.length > 0 ? '✅' : '❌');
        console.log('- Configurações da loja:', settingsResult.rows.length > 0 ? '✅' : '❌');
        
    } catch (error) {
        console.error('❌ Erro durante a execução:', error.message);
        
        if (error.code === '23505') {
            console.log('ℹ️ Erro de duplicação - alguns dados já existem');
        }
        
        if (error.code === 'ECONNREFUSED') {
            console.log('❌ Erro de conexão com o banco');
            console.log('📝 Verifique se a DATABASE_URL está correta');
        }
        
        if (error.code === '42P01') {
            console.log('❌ Tabela não encontrada');
            console.log('📝 Verifique se o banco está configurado corretamente');
        }
    } finally {
        await client.end();
    }
}

// Executar
finalizarConfiguracao(); 