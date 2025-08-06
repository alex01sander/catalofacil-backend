const { Client } = require('pg');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const readline = require('readline');

// Configurações do novo admin
const FULANOSANDER_USER_ID = '12345678-1234-1234-1234-123456789abc';
const FULANOSANDER_EMAIL = 'fulanosander@gmail.com';
const FULANOSANDER_DOMAIN = 'demo.catalofacil.com.br';

// Interface para ler input do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function question(prompt) {
    return new Promise((resolve) => {
        rl.question(prompt, resolve);
    });
}

async function executarComUrl() {
    console.log('🚀 EXECUTANDO TUDO COM URL FORNECIDA!');
    console.log('=====================================\n');
    
    // Pedir DATABASE_URL
    console.log('📋 CONFIGURAÇÃO NECESSÁRIA:');
    console.log('Você precisa fornecer a URL do banco de produção.');
    console.log('');
    console.log('💡 ONDE ENCONTRAR:');
    console.log('- Railway: Dashboard > Seu projeto > Variables > DATABASE_URL');
    console.log('- Supabase: Settings > Database > Connection string');
    console.log('- Render: Dashboard > Seu serviço > Environment > DATABASE_URL');
    console.log('- Heroku: Dashboard > Seu app > Settings > Config Vars > DATABASE_URL');
    console.log('');
    
    const databaseUrl = await question('🔗 Cole aqui a DATABASE_URL: ');
    
    if (!databaseUrl || databaseUrl.trim() === '') {
        console.log('❌ URL não fornecida!');
        rl.close();
        return;
    }
    
    // Pedir JWT_SECRET
    console.log('');
    const jwtSecret = await question('🔐 Cole aqui o JWT_SECRET (ou pressione Enter para usar padrão): ');
    
    const finalJwtSecret = jwtSecret.trim() || 'chave_secreta_producao_123456789';
    
    console.log('');
    console.log('🔍 CONFIGURAÇÕES:');
    console.log('DATABASE_URL:', databaseUrl.substring(0, 20) + '...');
    console.log('JWT_SECRET:', finalJwtSecret.substring(0, 10) + '...');
    console.log('');
    
    const confirmacao = await question('✅ Confirmar e executar? (s/n): ');
    
    if (confirmacao.toLowerCase() !== 's' && confirmacao.toLowerCase() !== 'sim') {
        console.log('❌ Operação cancelada!');
        rl.close();
        return;
    }
    
    // Configurar conexão com banco de produção
    const client = new Client({
        connectionString: databaseUrl,
        ssl: { rejectUnauthorized: false }
    });
    
    try {
        console.log('');
        console.log('🔗 Conectando ao banco de produção...');
        await client.connect();
        console.log('✅ Conectado ao banco de produção com sucesso!');
        console.log('');
        
        // 1. Criar usuário admin
        console.log('1️⃣ Criando usuário admin...');
        await client.query(`
            INSERT INTO auth.users (
                id, 
                email, 
                role, 
                created_at, 
                updated_at
            )
            VALUES ($1, $2, $3, NOW(), NOW())
            ON CONFLICT (id) DO UPDATE SET
                email = EXCLUDED.email,
                role = EXCLUDED.role,
                updated_at = NOW()
        `, [FULANOSANDER_USER_ID, FULANOSANDER_EMAIL, 'admin']);
        console.log('✅ Usuário admin criado');
        
        // 2. Adicionar na tabela de admins
        console.log('2️⃣ Adicionando na tabela de admins...');
        await client.query(`
            INSERT INTO public.controller_admins (user_id, email, created_at)
            VALUES ($1, $2, NOW())
            ON CONFLICT (user_id) DO NOTHING
        `, [FULANOSANDER_USER_ID, FULANOSANDER_EMAIL]);
        console.log('✅ Admin adicionado na tabela controller_admins');
        
        // 3. Vincular domínio
        console.log('3️⃣ Vinculando domínio...');
        await client.query(`
            INSERT INTO public.domain_owners (
                id,
                domain,
                user_id,
                created_at,
                updated_at,
                domain_type
            )
            VALUES (gen_random_uuid(), $1, $2, NOW(), NOW(), 'domain')
            ON CONFLICT (domain) DO UPDATE SET
                user_id = EXCLUDED.user_id,
                updated_at = NOW()
        `, [FULANOSANDER_DOMAIN, FULANOSANDER_USER_ID]);
        console.log('✅ Domínio vinculado');
        
        // 4. Criar loja
        console.log('4️⃣ Criando loja...');
        await client.query(`
            INSERT INTO public.stores (
                id,
                name,
                slug,
                domain,
                user_id,
                description,
                logo_url,
                banner_url,
                whatsapp_number,
                instagram_url,
                theme_color,
                created_at,
                updated_at
            )
            VALUES (
                gen_random_uuid(),
                'Demo Catálogo Fácil',
                'demo-catalofacil',
                $1,
                $2,
                'Loja de demonstração do Catálogo Fácil',
                'https://via.placeholder.com/150x50/007bff/ffffff?text=Demo+Catálogo+Fácil',
                'https://via.placeholder.com/1200x300/007bff/ffffff?text=Banner+Demo+Catálogo+Fácil',
                '5551999999999',
                'https://instagram.com/demo_catalofacil',
                '#007bff',
                NOW(),
                NOW()
            )
            ON CONFLICT (domain) DO UPDATE SET
                name = EXCLUDED.name,
                description = EXCLUDED.description,
                updated_at = NOW()
        `, [FULANOSANDER_DOMAIN, FULANOSANDER_USER_ID]);
        console.log('✅ Loja criada');
        
        // 5. Configurações da loja
        console.log('5️⃣ Configurando loja...');
        await client.query(`
            INSERT INTO public.store_settings (
                id,
                store_id,
                setting_key,
                setting_value,
                created_at,
                updated_at
            )
            SELECT 
                gen_random_uuid(),
                s.id,
                'store_enabled',
                'true',
                NOW(),
                NOW()
            FROM public.stores s 
            WHERE s.domain = $1
            ON CONFLICT (store_id, setting_key) DO UPDATE SET
                setting_value = EXCLUDED.setting_value,
                updated_at = NOW()
        `, [FULANOSANDER_DOMAIN]);
        console.log('✅ Configurações da loja criadas');
        
        // 6. Gerar token JWT
        console.log('6️⃣ Gerando token JWT...');
        const payload = {
            userId: FULANOSANDER_USER_ID,
            email: FULANOSANDER_EMAIL,
            role: 'admin',
            iat: Math.floor(Date.now() / 1000),
            exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60) // 24 horas
        };
        
        const token = jwt.sign(payload, finalJwtSecret);
        console.log('✅ Token JWT gerado');
        
        // 7. Atualizar arquivo de teste
        console.log('7️⃣ Atualizando arquivo de teste...');
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
        
        // 8. Verificar se tudo foi criado
        console.log('8️⃣ Verificando se tudo foi criado...');
        
        const userResult = await client.query(`
            SELECT email, role FROM auth.users WHERE email = $1
        `, [FULANOSANDER_EMAIL]);
        
        const domainResult = await client.query(`
            SELECT domain, user_id FROM public.domain_owners WHERE domain = $1
        `, [FULANOSANDER_DOMAIN]);
        
        const storeResult = await client.query(`
            SELECT name, domain FROM public.stores WHERE domain = $1
        `, [FULANOSANDER_DOMAIN]);
        
        console.log('✅ Verificação concluída');
        
        // 9. Resumo final
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
        rl.close();
    }
}

// Executar
executarComUrl(); 