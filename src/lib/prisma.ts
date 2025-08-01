import { PrismaClient } from '@prisma/client';

// Instância única do PrismaClient para toda a aplicação
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL || 'postgresql://catalofacil:4WdNU3pa3vCOzshZO9dKmAgNyj4gYLte@dpg-d1srh66mcj7s73arkbtg-a.virginia-postgres.render.com/catalofacil_postgres?connection_limit=2'
    }
  },
  log: process.env.NODE_ENV === 'development' ? ['query', 'info', 'warn', 'error'] : ['error']
});

// Teste de conexão na inicialização
prisma.$connect()
  .then(() => {
    console.log('✅ Prisma conectado com sucesso');
  })
  .catch((error) => {
    console.error('❌ Erro ao conectar Prisma:', error);
  });

export default prisma; 