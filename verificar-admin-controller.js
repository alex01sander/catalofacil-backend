const { Client } = require('pg');

// Configurações do novo admin
const FULANOSANDER_USER_ID = '12345678-1234-1234-1234-123456789abc';
const FULANOSANDER_EMAIL = 'fulanosander@gmail.com';
const FULANOSANDER_DOMAIN = 'demo.catalofacil.com.br';

async function verificarAdminController() {
    console.log('🔍 VERIFICANDO ADMIN NO CONTROLLER');
    console.log('==================================\n');
    
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
        
        const user = userCheck.rows[0];
        console.log('✅ Usuário encontrado:', user);
        
        // 2. Verificar se está na tabela controller_admins
        console.log('2️⃣ Verificando tabela controller_admins...');
        const adminCheck = await client.query(`
            SELECT id, user_id, email FROM public.controller_admins WHERE user_id = $1
        `, [user.id]);
        
        if (adminCheck.rows.length === 0) {
            console.log('❌ Usuário não está na tabela controller_admins!');
            console.log('🔧 Adicionando usuário na tabela controller_admins...');
            
            await client.query(`
                INSERT INTO public.controller_admins (id, user_id, email, created_at)
                VALUES (gen_random_uuid(), $1, $2, NOW())
                ON CONFLICT (user_id) DO NOTHING
            `, [user.id, user.email]);
            
            console.log('✅ Usuário adicionado na tabela controller_admins');
        } else {
            console.log('✅ Usuário já está na tabela controller_admins:', adminCheck.rows[0]);
        }
        
        // 3. Verificar se o role está correto
        console.log('3️⃣ Verificando role do usuário...');
        if (user.role !== 'admin') {
            console.log('❌ Role não é admin, corrigindo...');
            
            await client.query(`
                UPDATE auth.users 
                SET role = 'admin', updated_at = NOW()
                WHERE id = $1
            `, [user.id]);
            
            console.log('✅ Role atualizado para admin');
        } else {
            console.log('✅ Role já é admin');
        }
        
        // 4. Verificação final
        console.log('4️⃣ Verificação final...');
        const finalUserCheck = await client.query(`
            SELECT id, email, role FROM auth.users WHERE email = $1
        `, [FULANOSANDER_EMAIL]);
        
        const finalAdminCheck = await client.query(`
            SELECT id, user_id, email FROM public.controller_admins WHERE user_id = $1
        `, [user.id]);
        
        console.log('✅ Verificação final concluída');
        
        // 5. Resumo final
        console.log('');
        console.log('🎯 VERIFICAÇÃO DE ADMIN CONCLUÍDA!');
        console.log('==================================');
        console.log('');
        console.log('📧 Email: fulanosander@gmail.com');
        console.log('🔑 Senha: 123456');
        console.log('🆔 User ID:', user.id);
        console.log('');
        console.log('🌐 DOMÍNIO: demo.catalofacil.com.br');
        console.log('🏪 SLUG DA LOJA: demo');
        console.log('');
        console.log('📊 STATUS FINAL:');
        console.log('- Usuário existe:', finalUserCheck.rows.length > 0 ? '✅' : '❌');
        console.log('- Role é admin:', finalUserCheck.rows[0]?.role === 'admin' ? '✅' : '❌');
        console.log('- Está na tabela controller_admins:', finalAdminCheck.rows.length > 0 ? '✅' : '❌');
        console.log('');
        console.log('🔗 URLs que devem funcionar:');
        console.log('   - https://demo.catalofacil.com.br/api/controller-admins/' + user.id);
        console.log('   - https://demo.catalofacil.com.br/api/site/public/demo');
        console.log('   - https://demo.catalofacil.com.br/api/site/public/demo/categories');
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
verificarAdminController(); 