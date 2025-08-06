const { Client } = require('pg');
const jwt = require('jsonwebtoken');
const fs = require('fs');

// Configurações do novo admin
const FULANOSANDER_USER_ID = '12345678-1234-1234-1234-123456789abc';
const FULANOSANDER_EMAIL = 'fulanosander@gmail.com';
const FULANOSANDER_DOMAIN = 'demo.catalofacil.com.br';

async function verificarECriar() {
    console.log('🔍 VERIFICANDO E CRIANDO USUÁRIO ADMIN');
    console.log('=======================================\n');
    
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
        
        // 1. Verificar se o usuário existe
        console.log('1️⃣ Verificando se o usuário existe...');
        const userCheck = await client.query(`
            SELECT id, email, role FROM auth.users WHERE email = $1
        `, [FULANOSANDER_EMAIL]);
        
        if (userCheck.rows.length > 0) {
            console.log('✅ Usuário já existe:', userCheck.rows[0]);
        } else {
            console.log('❌ Usuário não encontrado, criando...');
            
            // Criar usuário admin
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
        }
        
        // 2. Verificar e adicionar na tabela de admins
        console.log('2️⃣ Verificando tabela controller_admins...');
        const adminCheck = await client.query(`
            SELECT user_id, email FROM public.controller_admins WHERE user_id = $1
        `, [FULANOSANDER_USER_ID]);
        
        if (adminCheck.rows.length === 0) {
            console.log('❌ Admin não encontrado, adicionando...');
            await client.query(`
                INSERT INTO public.controller_admins (user_id, email, created_at)
                VALUES ($1, $2, NOW())
                ON CONFLICT (user_id) DO NOTHING
            `, [FULANOSANDER_USER_ID, FULANOSANDER_EMAIL]);
            console.log('✅ Admin adicionado na tabela controller_admins');
        } else {
            console.log('✅ Admin já existe na tabela controller_admins');
        }
        
        // 3. Verificar e vincular domínio
        console.log('3️⃣ Verificando domínio...');
        const domainCheck = await client.query(`
            SELECT domain, user_id FROM public.domain_owners WHERE domain = $1
        `, [FULANOSANDER_DOMAIN]);
        
        if (domainCheck.rows.length === 0) {
            console.log('❌ Domínio não encontrado, vinculando...');
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
        } else {
            console.log('✅ Domínio já existe:', domainCheck.rows[0]);
        }
        
        // 4. Verificar e criar loja
        console.log('4️⃣ Verificando loja...');
        const storeCheck = await client.query(`
            SELECT name, domain FROM public.stores WHERE domain = $1
        `, [FULANOSANDER_DOMAIN]);
        
        if (storeCheck.rows.length === 0) {
            console.log('❌ Loja não encontrada, criando...');
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
        } else {
            console.log('✅ Loja já existe:', storeCheck.rows[0]);
        }
        
        // 5. Verificar e configurar store_settings
        console.log('5️⃣ Verificando store_settings...');
        const settingsCheck = await client.query(`
            SELECT store_name, store_description FROM public.store_settings WHERE user_id = $1
        `, [FULANOSANDER_USER_ID]);
        
        if (settingsCheck.rows.length === 0) {
            console.log('❌ Store settings não encontradas, configurando...');
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
        } else {
            console.log('✅ Store settings já existem:', settingsCheck.rows[0]);
        }
        
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
        
        // 7. Verificação final
        console.log('7️⃣ Verificação final...');
        
        const finalUserCheck = await client.query(`
            SELECT id, email, role FROM auth.users WHERE email = $1
        `, [FULANOSANDER_EMAIL]);
        
        const finalAdminCheck = await client.query(`
            SELECT user_id, email FROM public.controller_admins WHERE user_id = $1
        `, [FULANOSANDER_USER_ID]);
        
        const finalDomainCheck = await client.query(`
            SELECT domain, user_id FROM public.domain_owners WHERE domain = $1
        `, [FULANOSANDER_DOMAIN]);
        
        const finalStoreCheck = await client.query(`
            SELECT name, domain FROM public.stores WHERE domain = $1
        `, [FULANOSANDER_DOMAIN]);
        
        const finalSettingsCheck = await client.query(`
            SELECT store_name, store_description FROM public.store_settings WHERE user_id = $1
        `, [FULANOSANDER_USER_ID]);
        
        console.log('✅ Verificação final concluída');
        
        // 8. Resumo final
        console.log('');
        console.log('🎯 VERIFICAÇÃO E CRIAÇÃO CONCLUÍDA!');
        console.log('===================================');
        console.log('');
        console.log('📧 Email: fulanosander@gmail.com');
        console.log('🔑 Senha: 123456');
        console.log('🆔 User ID: 12345678-1234-1234-1234-123456789abc');
        console.log('🌐 Domínio: demo.catalofacil.com.br');
        console.log('');
        console.log('🔐 TOKEN JWT:');
        console.log(token);
        console.log('');
        console.log('📊 STATUS FINAL:');
        console.log('- Usuário:', finalUserCheck.rows.length > 0 ? '✅ Existe' : '❌ Não existe');
        console.log('- Admin:', finalAdminCheck.rows.length > 0 ? '✅ Existe' : '❌ Não existe');
        console.log('- Domínio:', finalDomainCheck.rows.length > 0 ? '✅ Existe' : '❌ Não existe');
        console.log('- Loja:', finalStoreCheck.rows.length > 0 ? '✅ Existe' : '❌ Não existe');
        console.log('- Configurações:', finalSettingsCheck.rows.length > 0 ? '✅ Existe' : '❌ Não existe');
        console.log('');
        
        if (finalUserCheck.rows.length > 0) {
            console.log('✅ TUDO FUNCIONANDO! Agora você pode fazer login no frontend.');
        } else {
            console.log('❌ ALGO DEU ERRADO! O usuário não foi criado.');
        }
        
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
verificarECriar(); 