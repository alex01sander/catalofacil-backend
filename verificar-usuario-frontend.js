const { Client } = require('pg');

async function verificarUsuarioFrontend() {
    console.log('🔍 VERIFICANDO USUÁRIO QUE O FRONTEND ESTÁ USANDO');
    console.log('================================================\n');
    
    // URL do banco de produção
    const databaseUrl = 'postgresql://catalofacil:4WdNU3pa3vCOzshZO9dKmAgNyj4gYLte@dpg-d1srh66mcj7s73arkbtg-a.virginia-postgres.render.com:5432/catalofacil_postgres?connection_limit=2';
    
    // ID que o frontend está usando (dos logs)
    const frontendUserId = 'de5b0fba-f7a8-4e1e-9459-233b4c858ab3';
    
    // ID correto do fulanosander (do token)
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
        
        // 1. Verificar se existe usuário com o ID que o frontend está usando
        console.log('1️⃣ Verificando usuário que o frontend está usando...');
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
        
        // 3. Listar todos os usuários para encontrar o problema
        console.log('3️⃣ Listando todos os usuários...');
        const allUsers = await client.query(`
            SELECT id, email, role FROM auth.users ORDER BY created_at DESC LIMIT 10
        `);
        
        console.log('📊 Últimos 10 usuários criados:');
        allUsers.rows.forEach((user, index) => {
            console.log(`   ${index + 1}. ${user.email} (${user.id}) - Role: ${user.role}`);
        });
        
        console.log('');
        
        // 4. Verificar se há múltiplos usuários com o mesmo email
        console.log('4️⃣ Verificando se há múltiplos usuários com fulanosander@gmail.com...');
        const duplicateUsers = await client.query(`
            SELECT id, email, role, created_at FROM auth.users WHERE email = 'fulanosander@gmail.com' ORDER BY created_at DESC
        `);
        
        if (duplicateUsers.rows.length > 1) {
            console.log('⚠️ MÚLTIPLOS USUÁRIOS COM O MESMO EMAIL:');
            duplicateUsers.rows.forEach((user, index) => {
                console.log(`   ${index + 1}. ID: ${user.id} - Role: ${user.role} - Criado: ${user.created_at}`);
            });
        } else {
            console.log('✅ Apenas um usuário com fulanosander@gmail.com');
        }
        
        console.log('');
        
        // 5. Solução
        console.log('🎯 SOLUÇÃO NECESSÁRIA:');
        console.log('======================');
        
        if (frontendUserCheck.rows.length > 0) {
            console.log('🔧 O frontend está usando um usuário diferente!');
            console.log('   Opção 1: Remover role admin deste usuário');
            console.log('   Opção 2: Adicionar este usuário na tabela controller_admins');
            console.log('   Opção 3: Corrigir o frontend para usar o ID correto');
        } else {
            console.log('🔧 O frontend está usando um ID que não existe!');
            console.log('   O frontend precisa ser corrigido para usar o ID correto.');
        }
        
        console.log('');
        console.log('💡 RECOMENDAÇÃO:');
        console.log('================');
        console.log('1. Verificar se há múltiplos usuários com o mesmo email');
        console.log('2. Se houver, remover os duplicados');
        console.log('3. Garantir que apenas o usuário correto tenha role admin');
        console.log('4. Verificar se o frontend está usando o ID correto do token');
        
    } catch (error) {
        console.error('❌ Erro durante a verificação:', error.message);
    } finally {
        await client.end();
    }
}

// Executar
verificarUsuarioFrontend(); 