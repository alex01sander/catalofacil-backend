// Teste simples de conexão com o banco
process.env.DATABASE_URL = 'postgresql://catalofacil:4WdNU3pa3vCOzshZO9dKmAgNyj4gYLte@dpg-d1srh66mcj7s73arkbtg-a.virginia-postgres.render.com/catalofacil_postgres?connection_limit=2';
process.env.NODE_ENV = 'test';

const { PrismaClient } = require('@prisma/client');

async function testConnection() {
  try {
    console.log('Tentando conectar ao banco...');
    console.log('DATABASE_URL:', process.env.DATABASE_URL);
    
    const prisma = new PrismaClient();
    
    // Testar conexão
    await prisma.$connect();
    console.log('✅ Conexão bem-sucedida!');
    
    // Testar uma query simples
    const result = await prisma.$queryRaw`SELECT 1 as test`;
    console.log('✅ Query de teste bem-sucedida:', result);
    
    await prisma.$disconnect();
    console.log('✅ Desconexão bem-sucedida!');
    
  } catch (error) {
    console.error('❌ Erro na conexão:', error.message);
    console.error('Stack:', error.stack);
  }
}

testConnection(); 