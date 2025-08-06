const { Client } = require('pg');

// Configurações do novo admin
const FULANOSANDER_USER_ID = '12345678-1234-1234-1234-123456789abc';
const FULANOSANDER_EMAIL = 'fulanosander@gmail.com';
const FULANOSANDER_DOMAIN = 'demo.catalofacil.com.br';

async function verificarDominioAcesso() {
    console.log('🌐 VERIFICANDO ACESSO AO DOMÍNIO');
    console.log('=================================\n');
    
    // URL do banco de produção
    const databaseUrl = 'postgresql://catalofacil:4WdNU3pa3vCOzshZO9dKmAgNyj4gYLte@dpg-d1srh66mcj7s73arkbtg-a.virginia-postgres.render.com:5432/catalofacil_postgres?connection_limit=2';
    
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
        
        // 1. Verificar usuário
        console.log('1️⃣ Verificando usuário...');
        const userCheck = await client.query(`
            SELECT id, email, role FROM auth.users WHERE email = $1
        `, [FULANOSANDER_EMAIL]);
        
        if (userCheck.rows.length === 0) {
            console.log('❌ Usuário não encontrado!');
            return;
        }
        
        console.log('✅ Usuário encontrado:', userCheck.rows[0]);
        
        // 2. Verificar domínio vinculado
        console.log('2️⃣ Verificando domínio vinculado...');
        const domainCheck = await client.query(`
            SELECT domain, user_id FROM public.domain_owners WHERE user_id = $1
        `, [FULANOSANDER_USER_ID]);
        
        if (domainCheck.rows.length === 0) {
            console.log('❌ Nenhum domínio vinculado ao usuário!');
        } else {
            console.log('✅ Domínios vinculados:');
            domainCheck.rows.forEach(row => {
                console.log(`   - ${row.domain}`);
            });
        }
        
        // 3. Verificar se o domínio correto está vinculado
        console.log('3️⃣ Verificando se o domínio correto está vinculado...');
        const correctDomainCheck = await client.query(`
            SELECT domain, user_id FROM public.domain_owners WHERE domain = $1
        `, [FULANOSANDER_DOMAIN]);
        
        if (correctDomainCheck.rows.length === 0) {
            console.log('❌ Domínio demo.catalofacil.com.br não está vinculado!');
            console.log('🔧 Vinculando domínio correto...');
            
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
            
            console.log('✅ Domínio demo.catalofacil.com.br vinculado!');
        } else {
            console.log('✅ Domínio demo.catalofacil.com.br já está vinculado');
        }
        
        // 4. Verificar loja
        console.log('4️⃣ Verificando loja...');
        const storeCheck = await client.query(`
            SELECT name, domain FROM public.stores WHERE domain = $1
        `, [FULANOSANDER_DOMAIN]);
        
        if (storeCheck.rows.length === 0) {
            console.log('❌ Loja não encontrada para o domínio!');
            console.log('🔧 Criando loja...');
            
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
            
            console.log('✅ Loja criada!');
        } else {
            console.log('✅ Loja encontrada:', storeCheck.rows[0]);
        }
        
        // 5. Verificação final
        console.log('5️⃣ Verificação final...');
        const finalDomainCheck = await client.query(`
            SELECT domain, user_id FROM public.domain_owners WHERE domain = $1
        `, [FULANOSANDER_DOMAIN]);
        
        const finalStoreCheck = await client.query(`
            SELECT name, domain FROM public.stores WHERE domain = $1
        `, [FULANOSANDER_DOMAIN]);
        
        console.log('✅ Verificação final concluída');
        
        // 6. Resumo final
        console.log('');
        console.log('🎯 CONFIGURAÇÃO DE DOMÍNIO CONCLUÍDA!');
        console.log('=====================================');
        console.log('');
        console.log('📧 Email: fulanosander@gmail.com');
        console.log('🔑 Senha: 123456');
        console.log('🆔 User ID: 12345678-1234-1234-1234-123456789abc');
        console.log('');
        console.log('🌐 DOMÍNIO CORRETO:');
        console.log('   - demo.catalofacil.com.br');
        console.log('');
        console.log('❌ DOMÍNIO INCORRETO (não acesse):');
        console.log('   - catalofacil.catalofacil.com.br');
        console.log('');
        console.log('📊 STATUS FINAL:');
        console.log('- Domínio vinculado:', finalDomainCheck.rows.length > 0 ? '✅' : '❌');
        console.log('- Loja criada:', finalStoreCheck.rows.length > 0 ? '✅' : '❌');
        console.log('');
        console.log('✅ AGORA ACESSE APENAS: demo.catalofacil.com.br');
        console.log('');
        console.log('💡 IMPORTANTE:');
        console.log('   - Use apenas o domínio demo.catalofacil.com.br');
        console.log('   - Não acesse catalofacil.catalofacil.com.br');
        console.log('   - Configure o DNS do domínio demo.catalofacil.com.br');
        
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
verificarDominioAcesso(); 