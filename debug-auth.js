const axios = require('axios');

const BASE_URL = 'https://catalofacil-backend.onrender.com';

async function debugAuth() {
  console.log('🔍 Iniciando diagnóstico de autenticação...\n');
  
  try {
    // 1. Testar se o servidor está respondendo
    console.log('1️⃣ Testando conectividade com o servidor...');
    try {
      const response = await axios.get(`${BASE_URL}/`);
      console.log('✅ Servidor respondendo:', response.status);
    } catch (error) {
      console.log('❌ Servidor não está respondendo:', error.message);
      return;
    }
    
    // 2. Fazer login para obter um novo token
    console.log('\n2️⃣ Fazendo login para obter novo token...');
    const loginData = {
      email: 'alexsander01@hotmail.com.br',
      password: '123456'
    };
    
    let token = null;
    try {
      const loginResponse = await axios.post(`${BASE_URL}/auth/login`, loginData);
      token = loginResponse.data.token;
      console.log('✅ Login realizado com sucesso');
      console.log('- Token obtido:', token ? token.substring(0, 50) + '...' : 'null');
    } catch (error) {
      console.log('❌ Erro no login:', error.response?.data || error.message);
      
      // Se o login falhar, vamos usar um token de exemplo para testar o debug
      console.log('\n⚠️ Usando token de exemplo para debug...');
      token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM1ZTA0YzJhLWIzYTItNGVmMS05MGRlLTNkZDg0MzNkOGQ2ZiIsImVtYWlsIjoiYWxleGFuZGVyMDFAaG90bWFpbC5jb20uYnIiLCJpYXQiOjE3Mzc2MjYzMDcsImV4cCI6MTczNzcxMjcwN30.example';
    }
    
    if (!token) {
      console.log('❌ Não foi possível obter token para testes');
      return;
    }
    
    // 3. Testar verificação do token
    console.log('\n3️⃣ Testando verificação do token...');
    try {
      const verifyResponse = await axios.get(`${BASE_URL}/auth/verify`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log('✅ Token válido:', verifyResponse.data);
    } catch (error) {
      console.log('❌ Token inválido:', error.response?.data || error.message);
      
      // 4. Usar endpoint de debug para analisar o token
      console.log('\n4️⃣ Analisando token com endpoint de debug...');
      try {
        const debugResponse = await axios.post(`${BASE_URL}/auth/debug-token`, {
          token
        });
        console.log('🔍 Resultado do debug:', JSON.stringify(debugResponse.data, null, 2));
      } catch (debugError) {
        console.log('❌ Erro no debug do token:', debugError.response?.data || debugError.message);
      }
    }
    
    // 5. Testar acesso a rota protegida
    console.log('\n5️⃣ Testando acesso a rota protegida (/products)...');
    try {
      const productsResponse = await axios.get(`${BASE_URL}/products`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log('✅ Acesso à rota protegida realizado com sucesso');
      console.log('- Total de produtos:', productsResponse.data.data?.length || 'N/A');
    } catch (error) {
      console.log('❌ Erro ao acessar rota protegida:', error.response?.data || error.message);
    }
    
  } catch (error) {
    console.error('❌ Erro geral no diagnóstico:', error.message);
  }
}

// Executar diagnóstico
debugAuth(); 