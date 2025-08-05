const axios = require('axios');

const BASE_URL = 'http://localhost:3000/admin';
const ADMIN_TOKEN = 'seu_token_admin_aqui'; // Substitua pelo token real

const headers = {
  'Authorization': `Bearer ${ADMIN_TOKEN}`,
  'Content-Type': 'application/json'
};

async function testDomainController() {
  console.log('🧪 Testando Controller de Domínios e Usuários\n');

  try {
    // 1. Testar cadastro completo de domínio e usuário
    console.log('1️⃣ Testando cadastro completo de domínio e usuário...');
    
    const registerData = {
      domain: 'teste-exemplo.com',
      user_email: 'admin@teste-exemplo.com',
      user_password: 'senha123',
      user_role: 'admin',
      domain_type: 'domain'
    };

    const registerResponse = await axios.post(
      `${BASE_URL}/register-domain-user`,
      registerData,
      { headers }
    );

    console.log('✅ Cadastro realizado:', registerResponse.data);
    const { domain, user } = registerResponse.data;

    // 2. Testar listagem de domínios
    console.log('\n2️⃣ Testando listagem de domínios...');
    
    const domainsResponse = await axios.get(
      `${BASE_URL}/domains`,
      { headers }
    );

    console.log('✅ Domínios encontrados:', domainsResponse.data.domains.length);

    // 3. Testar busca de domínio específico
    console.log('\n3️⃣ Testando busca de domínio específico...');
    
    const domainResponse = await axios.get(
      `${BASE_URL}/domains/${domain.id}`,
      { headers }
    );

    console.log('✅ Domínio encontrado:', domainResponse.data.domain);

    // 4. Testar atualização de domínio
    console.log('\n4️⃣ Testando atualização de domínio...');
    
    const updateData = {
      domain_type: 'subdomain'
    };

    const updateResponse = await axios.put(
      `${BASE_URL}/domains/${domain.id}`,
      updateData,
      { headers }
    );

    console.log('✅ Domínio atualizado:', updateResponse.data.domain_type);

    // 5. Testar cadastro de domínio separado
    console.log('\n5️⃣ Testando cadastro de domínio separado...');
    
    const newDomainData = {
      domain: 'outro-dominio.com',
      user_id: user.id,
      domain_type: 'domain'
    };

    const newDomainResponse = await axios.post(
      `${BASE_URL}/domains`,
      newDomainData,
      { headers }
    );

    console.log('✅ Novo domínio criado:', newDomainResponse.data.domain);

    // 6. Testar busca com filtros
    console.log('\n6️⃣ Testando busca com filtros...');
    
    const searchResponse = await axios.get(
      `${BASE_URL}/domains?search=teste&page=1&limit=5`,
      { headers }
    );

    console.log('✅ Busca com filtros:', searchResponse.data.domains.length, 'resultados');

    console.log('\n🎉 Todos os testes passaram com sucesso!');

  } catch (error) {
    console.error('❌ Erro nos testes:', error.response?.data || error.message);
    
    if (error.response?.status === 401) {
      console.log('\n💡 Dica: Verifique se o token de admin está correto');
    }
  }
}

// Função para testar apenas o cadastro
async function testSimpleRegistration() {
  console.log('🧪 Teste Simples de Cadastro\n');

  try {
    const data = {
      domain: 'meu-site.com',
      user_email: 'admin@meu-site.com',
      user_password: 'minhasenha123',
      user_role: 'admin'
    };

    const response = await axios.post(
      `${BASE_URL}/register-domain-user`,
      data,
      { headers }
    );

    console.log('✅ Cadastro realizado com sucesso!');
    console.log('📧 Email:', response.data.user.email);
    console.log('🌐 Domínio:', response.data.domain.domain);
    console.log('🆔 User ID:', response.data.user.id);

  } catch (error) {
    console.error('❌ Erro:', error.response?.data || error.message);
  }
}

// Executar testes
if (process.argv.includes('--simple')) {
  testSimpleRegistration();
} else {
  testDomainController();
} 