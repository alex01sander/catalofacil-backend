const https = require('https');

// Testar a rota controller-admins
const testControllerAdmins = () => {
  const userId = '53841ae3-5489-485b-b05d-07857d562e51';
  const url = `https://catalofacil.catalofacil.com.br/api/controller-admins/${userId}`;
  
  console.log('🔍 Testando rota controller-admins...');
  console.log(`URL: ${url}`);
  
  const req = https.get(url, (res) => {
    console.log(`📊 Status: ${res.statusCode}`);
    console.log(`📋 Headers:`, res.headers);
    
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      console.log('📄 Response:', data);
      
      try {
        const json = JSON.parse(data);
        console.log('✅ JSON parseado:', json);
      } catch (e) {
        console.log('❌ Erro ao parsear JSON:', e.message);
      }
    });
  });
  
  req.on('error', (error) => {
    console.error('❌ Erro na requisição:', error.message);
  });
  
  req.setTimeout(10000, () => {
    console.log('⏰ Timeout - requisição demorou muito');
    req.destroy();
  });
};

// Testar também a rota local se estiver rodando
const testLocalControllerAdmins = () => {
  const userId = '53841ae3-5489-485b-b05d-07857d562e51';
  const url = `http://localhost:3000/api/controller-admins/${userId}`;
  
  console.log('\n🔍 Testando rota local controller-admins...');
  console.log(`URL: ${url}`);
  
  const http = require('http');
  
  const req = http.get(url, (res) => {
    console.log(`📊 Status: ${res.statusCode}`);
    
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      console.log('📄 Response:', data);
      
      try {
        const json = JSON.parse(data);
        console.log('✅ JSON parseado:', json);
      } catch (e) {
        console.log('❌ Erro ao parsear JSON:', e.message);
      }
    });
  });
  
  req.on('error', (error) => {
    console.error('❌ Erro na requisição local:', error.message);
  });
  
  req.setTimeout(5000, () => {
    console.log('⏰ Timeout - servidor local não está rodando');
    req.destroy();
  });
};

// Executar testes
console.log('🚀 Iniciando testes da rota controller-admins...\n');

testControllerAdmins();
setTimeout(testLocalControllerAdmins, 2000); 