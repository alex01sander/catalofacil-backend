const http = require('http');

// Testar se o servidor está rodando
const testServer = () => {
  console.log('🔍 Testando se o servidor está rodando...');
  
  const req = http.get('http://localhost:3000/health', (res) => {
    console.log(`📊 Status: ${res.statusCode}`);
    
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      console.log('📄 Response:', data);
    });
  });
  
  req.on('error', (error) => {
    console.error('❌ Servidor não está rodando:', error.message);
  });
  
  req.setTimeout(5000, () => {
    console.log('⏰ Timeout - servidor não está rodando');
    req.destroy();
  });
};

// Testar rota controllerAdmins diretamente
const testControllerAdminsDirect = () => {
  console.log('\n🔍 Testando rota controllerAdmins diretamente...');
  
  const req = http.get('http://localhost:3000/controllerAdmins', (res) => {
    console.log(`📊 Status: ${res.statusCode}`);
    
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      console.log('📄 Response:', data);
    });
  });
  
  req.on('error', (error) => {
    console.error('❌ Erro na requisição:', error.message);
  });
  
  req.setTimeout(5000, () => {
    console.log('⏰ Timeout');
    req.destroy();
  });
};

// Testar rota com userId
const testControllerAdminsWithUserId = () => {
  console.log('\n🔍 Testando rota controllerAdmins com userId...');
  
  const userId = '53841ae3-5489-485b-b05d-07857d562e51';
  const req = http.get(`http://localhost:3000/controllerAdmins/${userId}`, (res) => {
    console.log(`📊 Status: ${res.statusCode}`);
    
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      console.log('📄 Response:', data);
    });
  });
  
  req.on('error', (error) => {
    console.error('❌ Erro na requisição:', error.message);
  });
  
  req.setTimeout(5000, () => {
    console.log('⏰ Timeout');
    req.destroy();
  });
};

// Executar testes
console.log('🚀 Iniciando testes simples...\n');

testServer();
setTimeout(testControllerAdminsDirect, 1000);
setTimeout(testControllerAdminsWithUserId, 2000); 