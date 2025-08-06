const { Client } = require('pg');

// Configurações do novo admin
const FULANOSANDER_USER_ID = '12345678-1234-1234-1234-123456789abc';
const FULANOSANDER_EMAIL = 'fulanosander@gmail.com';
const FULANOSANDER_DOMAIN = 'demo.catalofacil.com.br';

async function corrigirSlugLoja() {
    console.log('🔧 CORRIGINDO SLUG DA LOJA');
    console.log('===========================\n');
    
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
        
        // 1. Verificar loja atual
        console.log('1️⃣ Verificando loja atual...');
        const storeCheck = await client.query(`
            SELECT id, name, slug, domain FROM public.stores WHERE domain = $1
        `, [FULANOSANDER_DOMAIN]);
        
        if (storeCheck.rows.length === 0) {
            console.log('❌ Loja não encontrada!');
            return;
        }
        
        const currentStore = storeCheck.rows[0];
        console.log('✅ Loja encontrada:', {
            id: currentStore.id,
            name: currentStore.name,
            slug: currentStore.slug,
            domain: currentStore.domain
        });
        
        // 2. Atualizar slug para 'demo'
        console.log('2️⃣ Atualizando slug para "demo"...');
        await client.query(`
            UPDATE public.stores 
            SET slug = 'demo', updated_at = NOW()
            WHERE domain = $1
        `, [FULANOSANDER_DOMAIN]);
        console.log('✅ Slug atualizado para "demo"');
        
        // 3. Verificar se foi atualizado
        console.log('3️⃣ Verificando se o slug foi atualizado...');
        const finalCheck = await client.query(`
            SELECT id, name, slug, domain FROM public.stores WHERE domain = $1
        `, [FULANOSANDER_DOMAIN]);
        
        if (finalCheck.rows.length > 0) {
            const finalStore = finalCheck.rows[0];
            console.log('✅ Loja atualizada:', {
                id: finalStore.id,
                name: finalStore.name,
                slug: finalStore.slug,
                domain: finalStore.domain
            });
        }
        
        // 4. Verificar se existe loja com slug 'demo'
        console.log('4️⃣ Verificando se existe loja com slug "demo"...');
        const demoSlugCheck = await client.query(`
            SELECT id, name, slug, domain FROM public.stores WHERE slug = 'demo'
        `);
        
        if (demoSlugCheck.rows.length > 0) {
            console.log('✅ Loja com slug "demo" encontrada:', demoSlugCheck.rows[0]);
        } else {
            console.log('❌ Loja com slug "demo" não encontrada!');
        }
        
        // 5. Resumo final
        console.log('');
        console.log('🎯 SLUG DA LOJA CORRIGIDO!');
        console.log('==========================');
        console.log('');
        console.log('📧 Email: fulanosander@gmail.com');
        console.log('🔑 Senha: 123456');
        console.log('🆔 User ID: 12345678-1234-1234-1234-123456789abc');
        console.log('');
        console.log('🌐 DOMÍNIO: demo.catalofacil.com.br');
        console.log('🏪 SLUG DA LOJA: demo');
        console.log('');
        console.log('🔗 URLs que devem funcionar:');
        console.log('   - https://demo.catalofacil.com.br/api/site/public/demo');
        console.log('   - https://demo.catalofacil.com.br/api/site/public/demo/categories');
        console.log('   - https://demo.catalofacil.com.br/api/site/public/demo/products');
        console.log('');
        console.log('✅ AGORA O FRONTEND DEVE FUNCIONAR!');
        console.log('');
        console.log('💡 Teste acessando: https://demo.catalofacil.com.br');
        
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
corrigirSlugLoja(); 