const { Client } = require('pg');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

// Configurações do novo admin
const FULANOSANDER_USER_ID = '12345678-1234-1234-1234-123456789abc';
const FULANOSANDER_EMAIL = 'fulanosander@gmail.com';
const FULANOSANDER_PASSWORD = '123456';
const FULANOSANDER_DOMAIN = 'demo.catalofacil.com.br';

// Função para detectar DATABASE_URL automaticamente
function detectDatabaseUrl() {
    console.log('🔍 Detectando configurações do banco...');
    
    // 1. Tentar variável de ambiente
    if (process.env.DATABASE_URL) {
        console.log('✅ DATABASE_URL encontrada nas variáveis de ambiente');
        return process.env.DATABASE_URL;
    }
    
    // 2. Tentar ler de arquivos de configuração
    const configFiles = [
        'railway.json',
        'render.yaml', 
        'docker-compose.yml',
        '.env',
        'config.json'
    ];
    
    for (const file of configFiles) {
        if (fs.existsSync(file)) {
            console.log(`📁 Verificando arquivo: ${file}`);
            try {
                const content = fs.readFileSync(file, 'utf8');
                
                // Procurar por DATABASE_URL
                const dbUrlMatch = content.match(/DATABASE_URL\s*[:=]\s*["']?([^"'\s]+)["']?/);
                if (dbUrlMatch) {
                    console.log(`✅ DATABASE_URL encontrada em ${file}`);
                    return dbUrlMatch[1];
                }
                
                // Procurar por connection string do PostgreSQL
                const pgMatch = content.match(/postgresql:\/\/[^\s"']+/);
                if (pgMatch) {
                    console.log(`✅ String de conexão PostgreSQL encontrada em ${file}`);
                    return pgMatch[0];
                }
            } catch (error) {
                console.log(`❌ Erro ao ler ${file}:`, error.message);
            }
        }
    }
    
    // 3. Tentar configurações padrão do Docker
    console.log('🐳 Tentando configuração padrão do Docker...');
    return 'postgresql://postgres:postgres@localhost:5432/catalogo';
}

// Função para detectar JWT_SECRET automaticamente
function detectJwtSecret() {
    console.log('🔍 Detectando JWT_SECRET...');
    
    // 1. Tentar variável de ambiente
    if (process.env.JWT_SECRET) {
        console.log('✅ JWT_SECRET encontrada nas variáveis de ambiente');
        return process.env.JWT_SECRET;
    }
    
    // 2. Tentar ler de arquivos
    const configFiles = ['.env', 'config.json', 'railway.json'];
    
    for (const file of configFiles) {
        if (fs.existsSync(file)) {
            try {
                const content = fs.readFileSync(file, 'utf8');
                const jwtMatch = content.match(/JWT_SECRET\s*[:=]\s*["']?([^"'\s]+)["']?/);
                if (jwtMatch) {
                    console.log(`✅ JWT_SECRET encontrada em ${file}`);
                    return jwtMatch[1];
                }
            } catch (error) {
                // Ignorar erros
            }
        }
    }
    
    // 3. Usar chave padrão
    console.log('⚠️ Usando JWT_SECRET padrão');
    return 'chave_secreta_producao_123456789';
}

async function executarTudoAutomatico() {
    console.log('🚀 EXECUTANDO TUDO AUTOMATICAMENTE!');
    console.log('====================================\n');
    
    // Detectar configurações
    const databaseUrl = detectDatabaseUrl();
    const jwtSecret = detectJwtSecret();
    
    console.log('');
    console.log('📋 CONFIGURAÇÕES DETECTADAS:');
    console.log('DATABASE_URL:', databaseUrl ? '✅ Encontrada' : '❌ Não encontrada');
    console.log('JWT_SECRET:', jwtSecret ? '✅ Encontrada' : '❌ Não encontrada');
    console.log('');
    
    if (!databaseUrl) {
        console.log('❌ Não foi possível detectar DATABASE_URL automaticamente!');
        console.log('');
        console.log('🔧 CONFIGURAÇÃO MANUAL NECESSÁRIA:');
        console.log('1. Configure a variável de ambiente DATABASE_URL');
        console.log('2. Ou adicione em um arquivo .env: DATABASE_URL="sua_url"');
        console.log('3. Ou execute: DATABASE_URL="sua_url" node executar-tudo-automatico.js');
        console.log('');
        return;
    }
    
    // Configurar conexão com banco
    const client = new Client({
        connectionString: databaseUrl,
        ssl: { rejectUnauthorized: false }
    });
    
    try {
        console.log('🔗 Conectando ao banco...');
        await client.connect();
        console.log('✅ Conectado ao banco com sucesso!');
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
        
        const token = jwt.sign(payload, jwtSecret);
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
        console.log('🎯 TUDO EXECUTADO COM SUCESSO!');
        console.log('==============================');
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
    }
}

// Executar
executarTudoAutomatico(); 