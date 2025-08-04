require('dotenv').config({ path: '.env.test' });
const request = require('supertest');
const { app } = require('./dist/index');

async function testSiteRoute() {
  try {
    console.log('Testando rota /site/public/catalofacil...');
    
    const response = await request(app)
      .get('/site/public/catalofacil')
      .expect(200);
    
    console.log('Resposta da API:');
    console.log(JSON.stringify(response.body, null, 2));
    
  } catch (error) {
    console.error('Erro ao testar rota:', error.message);
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Body:', error.response.body);
    }
  }
}

testSiteRoute(); 