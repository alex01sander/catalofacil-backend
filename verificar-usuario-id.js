const { Client } = require('pg');

async function verificarUsuarioId() {
    console.log('🔍 VERIFICANDO USUÁRIO COM ID ESPECÍFICO');
    console.log('=========================================\n');
    
    // URL do banco de produção
    const databaseUrl = 'postgresql://catalofacil:4WdNU3pa3vCOzshZO9dKmAgNyj4gYLte@dpg-d1srh66mcj7s73arkbtg-a.virginia-postgres.render.com:5432/catalofacil_postgres?connection_limit=2';
    
    // ID que está sendo usado pelo frontend
    const frontendUserId = '1411de2e-6ac8-4c7f-9c79-664e848e8024';
    
    // ID correto do fulanosander
    const correctUserId = '12345678-1234-1234-1234-123456789abc';
    
    const client = new Client({
        connectionString: databaseUrl,
        ssl: { rejectUnauthorized: false }
    });
    
    try {
        console.log('🔗 Conectando ao banco de produção...');
        await client.connect();
        console.log('✅ Conectado ao banco de produção com sucesso!');
        console.log('');
        
        // 1. Verificar se existe usuário com o ID do frontend
        console.log('1️⃣ Verificando usuário com ID do frontend...');
        const frontendUserCheck = await client.query(`
            SELECT id, email, role FROM auth.users WHERE id = $1
        `, [frontendUserId]);
        
        if (frontendUserCheck.rows.length > 0) {
            const user = frontendUserCheck.rows[0];
            console.log('⚠️ USUÁRIO ENCONTRADO COM ID DO FRONTEND:');
            console.log('   ID:', user.id);
            console.log('   Email:', user.email);
            console.log('   Role:', user.role);
            
            // Verificar se está na tabela controller_admins
            const adminCheck = await client.query(`
                SELECT id, user_id, email FROM public.controller_admins WHERE user_id = $1
            `, [frontendUserId]);
            
            if (adminCheck.rows.length > 0) {
                console.log('   ✅ Está na tabela controller_admins');
            } else {
                console.log('   ❌ NÃO está na tabela controller_admins');
            }
        } else {
            console.log('❌ Nenhum usuário encontrado com ID:', frontendUserId);
        }
        
        console.log('');
        
        // 2. Verificar usuário correto (fulanosander)
        console.log('2️⃣ Verificando usuário correto (fulanosander)...');
        const correctUserCheck = await client.query(`
            SELECT id, email, role FROM auth.users WHERE id = $1
        `, [correctUserId]);
        
        if (correctUserCheck.rows.length > 0) {
            const user = correctUserCheck.rows[0];
            console.log('✅ USUÁRIO CORRETO ENCONTRADO:');
            console.log('   ID:', user.id);
            console.log('   Email:', user.email);
            console.log('   Role:', user.role);
            
            // Verificar se está na tabela controller_admins
            const adminCheck = await client.query(`
                SELECT id, user_id, email FROM public.controller_admins WHERE user_id = $1
            `, [correctUserId]);
            
            if (adminCheck.rows.length > 0) {
                console.log('   ✅ Está na tabela controller_admins');
            } else {
                console.log('   ❌ NÃO está na tabela controller_admins');
            }
        } else {
            console.log('❌ Usuário correto não encontrado!');
        }
        
        console.log('');
        
        // 3. Listar todos os usuários admin
        console.log('3️⃣ Listando todos os usuários admin...');
        const allAdmins = await client.query(`
            SELECT id, email, role FROM auth.users WHERE role = 'admin'
        `);
        
        console.log('📊 Usuários com role admin:');
        allAdmins.rows.forEach((admin, index) => {
            console.log(`   ${index + 1}. ${admin.email} (${admin.id})`);
        });
        
        console.log('');
        
        // 4. Listar todos os usuários na tabela controller_admins
        console.log('4️⃣ Listando todos os usuários na tabela controller_admins...');
        const allControllerAdmins = await client.query(`
            SELECT id, user_id, email FROM public.controller_admins
        `);
        
        console.log('📊 Usuários na tabela controller_admins:');
        allControllerAdmins.rows.forEach((admin, index) => {
            console.log(`   ${index + 1}. ${admin.email} (${admin.user_id})`);
        });
        
        console.log('');
        
        // 5. Solução
        console.log('🎯 SOLUÇÃO NECESSÁRIA:');
        console.log('======================');
        
        if (frontendUserCheck.rows.length > 0) {
            console.log('🔧 O frontend está usando um usuário diferente!');
            console.log('   Opção 1: Remover role admin deste usuário');
            console.log('   Opção 2: Adicionar este usuário na tabela controller_admins');
            console.log('   Opção 3: Corrigir o frontend para usar fulanosander@gmail.com');
        } else {
            console.log('🔧 O frontend está usando um ID que não existe!');
            console.log('   O frontend precisa ser corrigido para usar o ID correto.');
        }
        
        console.log('');
        console.log('💡 RECOMENDAÇÃO:');
        console.log('================');
        console.log('1. Verificar qual usuário está logado no frontend');
        console.log('2. Se for um usuário diferente, fazer logout e login com fulanosander@gmail.com');
        console.log('3. Se o problema persistir, verificar a configuração da API no frontend');
        
    } catch (error) {
        console.error('❌ Erro durante a verificação:', error.message);
    } finally {
        await client.end();
    }
}

// Executar
verificarUsuarioId(); 