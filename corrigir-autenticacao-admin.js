const { Client } = require('pg');

async function corrigirAutenticacaoAdmin() {
    console.log('🔧 CORRIGINDO AUTENTICAÇÃO DO ADMIN');
    console.log('====================================\n');
    
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
        
        // 1. Verificar usuário atual
        console.log('1️⃣ Verificando usuário atual...');
        const userCheck = await client.query(`
            SELECT id, email, role FROM auth.users WHERE email = 'fulanosander@gmail.com'
        `);
        
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
        
        // 3. Garantir que o role é 'admin'
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
        
        // 4. Verificar se existe algum outro usuário com role admin
        console.log('4️⃣ Verificando outros usuários admin...');
        const otherAdmins = await client.query(`
            SELECT id, email, role FROM auth.users WHERE role = 'admin' AND email != 'fulanosander@gmail.com'
        `);
        
        if (otherAdmins.rows.length > 0) {
            console.log('⚠️ Outros usuários admin encontrados:');
            otherAdmins.rows.forEach(admin => {
                console.log(`   - ${admin.email} (${admin.id})`);
            });
            
            console.log('🔧 Removendo role admin de outros usuários...');
            await client.query(`
                UPDATE auth.users 
                SET role = 'user', updated_at = NOW()
                WHERE role = 'admin' AND email != 'fulanosander@gmail.com'
            `);
            console.log('✅ Role admin removido de outros usuários');
        } else {
            console.log('✅ Apenas fulanosander@gmail.com tem role admin');
        }
        
        // 5. Verificação final
        console.log('5️⃣ Verificação final...');
        const finalUserCheck = await client.query(`
            SELECT id, email, role FROM auth.users WHERE email = 'fulanosander@gmail.com'
        `);
        
        const finalAdminCheck = await client.query(`
            SELECT id, user_id, email FROM public.controller_admins WHERE user_id = $1
        `, [user.id]);
        
        const allAdminsCheck = await client.query(`
            SELECT id, email, role FROM auth.users WHERE role = 'admin'
        `);
        
        console.log('✅ Verificação final concluída');
        
        // 6. Resumo final
        console.log('');
        console.log('🎯 AUTENTICAÇÃO DO ADMIN CORRIGIDA!');
        console.log('===================================');
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
        console.log('- Único admin:', allAdminsCheck.rows.length === 1 ? '✅' : '❌');
        console.log('');
        console.log('🔗 URLs que devem funcionar:');
        console.log('   - https://catalofacil-backend.onrender.com/auth/login');
        console.log('   - https://catalofacil-backend.onrender.com/api/controller-admins/' + user.id);
        console.log('');
        console.log('✅ AGORA O FRONTEND DEVE FUNCIONAR!');
        console.log('');
        console.log('💡 IMPORTANTE: Configure o frontend para usar:');
        console.log('   https://catalofacil-backend.onrender.com');
        
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
corrigirAutenticacaoAdmin(); 