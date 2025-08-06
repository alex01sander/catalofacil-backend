const { Client } = require('pg');
const bcrypt = require('bcryptjs');

// Configurações do novo admin
const FULANOSANDER_USER_ID = '12345678-1234-1234-1234-123456789abc';
const FULANOSANDER_EMAIL = 'fulanosander@gmail.com';
const FULANOSANDER_PASSWORD = '123456';

async function adicionarSenhaHash() {
    console.log('🔐 ADICIONANDO SENHA HASH AO USUÁRIO');
    console.log('=====================================\n');
    
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
        
        // 1. Verificar se o usuário existe
        console.log('1️⃣ Verificando se o usuário existe...');
        const userCheck = await client.query(`
            SELECT id, email, role, encrypted_password FROM auth.users WHERE email = $1
        `, [FULANOSANDER_EMAIL]);
        
        if (userCheck.rows.length === 0) {
            console.log('❌ Usuário não encontrado!');
            return;
        }
        
        const user = userCheck.rows[0];
        console.log('✅ Usuário encontrado:', {
            id: user.id,
            email: user.email,
            role: user.role,
            hasPassword: !!user.encrypted_password
        });
        
        // 2. Gerar hash da senha
        console.log('2️⃣ Gerando hash da senha...');
        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(FULANOSANDER_PASSWORD, saltRounds);
        console.log('✅ Hash da senha gerado');
        
        // 3. Atualizar usuário com a senha hash
        console.log('3️⃣ Atualizando usuário com senha hash...');
        await client.query(`
            UPDATE auth.users 
            SET encrypted_password = $1, updated_at = NOW()
            WHERE email = $2
        `, [passwordHash, FULANOSANDER_EMAIL]);
        console.log('✅ Senha hash adicionada ao usuário');
        
        // 4. Verificar se foi atualizado
        console.log('4️⃣ Verificando se a senha foi adicionada...');
        const finalCheck = await client.query(`
            SELECT id, email, role, encrypted_password IS NOT NULL as has_password
            FROM auth.users WHERE email = $1
        `, [FULANOSANDER_EMAIL]);
        
        if (finalCheck.rows.length > 0) {
            const finalUser = finalCheck.rows[0];
            console.log('✅ Verificação final:', {
                id: finalUser.id,
                email: finalUser.email,
                role: finalUser.role,
                hasPassword: finalUser.has_password
            });
        }
        
        // 5. Resumo final
        console.log('');
        console.log('🎯 SENHA HASH ADICIONADA COM SUCESSO!');
        console.log('=====================================');
        console.log('');
        console.log('📧 Email: fulanosander@gmail.com');
        console.log('🔑 Senha: 123456');
        console.log('🆔 User ID: 12345678-1234-1234-1234-123456789abc');
        console.log('');
        console.log('✅ AGORA VOCÊ PODE FAZER LOGIN NO FRONTEND!');
        console.log('');
        console.log('💡 Teste o login com:');
        console.log('   - Email: fulanosander@gmail.com');
        console.log('   - Senha: 123456');
        
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
adicionarSenhaHash(); 