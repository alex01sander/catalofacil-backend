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
  
  const req = http.get('http://localhost:3000/controllerAdmins/test', (res) => {
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
    console.log('⏰ Timeout - rota não respondeu');
    req.destroy();
  });
};

// Testar rota com alias
const testControllerAdminsAlias = () => {
  console.log('\n🔍 Testando rota com alias /api/controller-admins...');
  
  const req = http.get('http://localhost:3000/api/controller-admins/test', (res) => {
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
    console.log('⏰ Timeout - rota não respondeu');
    req.destroy();
  });
};

// Executar testes
testServer();
setTimeout(testControllerAdminsDirect, 1000);
setTimeout(testControllerAdminsAlias, 2000); 