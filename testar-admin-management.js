const axios = require('axios');

async function testarAdminManagement() {
    console.log('🔍 TESTANDO FUNCIONALIDADES DE ADMIN MANAGEMENT');
    console.log('==============================================\n');
    
    const email = 'fulanosander@gmail.com';
    const password = '123456';
    
    try {
        // 1. Fazer login para obter token
        console.log('1️⃣ Fazendo login...');
        const loginResponse = await axios.post('https://catalofacil-backend.onrender.com/auth/login', {
            email,
            password
        });
        
        const token = loginResponse.data.token;
        console.log('✅ Login bem-sucedido!');
        console.log('🔑 Token obtido');
        
        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        };
        
        // 2. Testar estatísticas gerais
        console.log('\n2️⃣ Testando estatísticas gerais...');
        const statsResponse = await axios.get('https://catalofacil-backend.onrender.com/api/admin-management/stats', { headers });
        console.log('✅ Estatísticas obtidas:', statsResponse.data);
        
        // 3. Testar listagem de usuários
        console.log('\n3️⃣ Testando listagem de usuários...');
        const usersResponse = await axios.get('https://catalofacil-backend.onrender.com/api/admin-management/users', { headers });
        console.log('✅ Usuários listados:', usersResponse.data.users.length, 'usuários encontrados');
        
        // 4. Testar listagem de domínios
        console.log('\n4️⃣ Testando listagem de domínios...');
        const domainsResponse = await axios.get('https://catalofacil-backend.onrender.com/api/admin-management/domains', { headers });
        console.log('✅ Domínios listados:', domainsResponse.data.domains.length, 'domínios encontrados');
        
        // 5. Testar cadastro de novo usuário
        console.log('\n5️⃣ Testando cadastro de novo usuário...');
        const novoUsuario = {
            email: 'teste@exemplo.com',
            password: '123456',
            domain: 'teste.catalofacil.com.br',
            role: 'user'
        };
        
        const createUserResponse = await axios.post('https://catalofacil-backend.onrender.com/api/admin-management/users', novoUsuario, { headers });
        console.log('✅ Usuário criado:', createUserResponse.data);
        
        // 6. Testar atualização de usuário
        console.log('\n6️⃣ Testando atualização de usuário...');
        const userId = createUserResponse.data.user.id;
        const updateData = {
            email: 'teste-atualizado@exemplo.com',
            role: 'user'
        };
        
        const updateResponse = await axios.put(`https://catalofacil-backend.onrender.com/api/admin-management/users/${userId}`, updateData, { headers });
        console.log('✅ Usuário atualizado:', updateResponse.data);
        
        // 7. Testar deleção de usuário
        console.log('\n7️⃣ Testando deleção de usuário...');
        const deleteResponse = await axios.delete(`https://catalofacil-backend.onrender.com/api/admin-management/users/${userId}`, { headers });
        console.log('✅ Usuário deletado:', deleteResponse.data);
        
        // 8. Resumo final
        console.log('\n🎯 RESUMO DOS TESTES:');
        console.log('=====================');
        console.log('✅ Login funcionando');
        console.log('✅ Estatísticas funcionando');
        console.log('✅ Listagem de usuários funcionando');
        console.log('✅ Listagem de domínios funcionando');
        console.log('✅ Criação de usuário funcionando');
        console.log('✅ Atualização de usuário funcionando');
        console.log('✅ Deleção de usuário funcionando');
        console.log('');
        console.log('📋 ENDPOINTS DISPONÍVEIS:');
        console.log('========================');
        console.log('GET  /api/admin-management/stats - Estatísticas gerais');
        console.log('GET  /api/admin-management/users - Listar usuários');
        console.log('POST /api/admin-management/users - Criar usuário');
        console.log('PUT  /api/admin-management/users/:id - Atualizar usuário');
        console.log('DELETE /api/admin-management/users/:id - Deletar usuário');
        console.log('GET  /api/admin-management/domains - Listar domínios');
        console.log('');
        console.log('🔧 EXEMPLO DE CRIAÇÃO DE USUÁRIO:');
        console.log('================================');
        console.log('POST /api/admin-management/users');
        console.log('Body: {');
        console.log('  "email": "cliente@exemplo.com",');
        console.log('  "password": "123456",');
        console.log('  "domain": "cliente.catalofacil.com.br",');
        console.log('  "role": "user"');
        console.log('}');
        console.log('');
        console.log('🎉 TODAS AS FUNCIONALIDADES ESTÃO FUNCIONANDO!');
        
    } catch (error) {
        console.error('❌ Erro durante os testes:', error.message);
        if (error.response) {
            console.error('📊 Status:', error.response.status);
            console.error('📊 Data:', error.response.data);
        }
    }
}

testarAdminManagement(); 