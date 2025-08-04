require('dotenv').config({ path: '.env.test' });
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function checkStores() {
  try {
    const stores = await prisma.stores.findMany({
      select: {
        id: true,
        name: true,
        slug: true
      }
    });
    
    console.log('Lojas encontradas:');
    console.log(stores);
    
    // Verificar especificamente o slug 'catalofacil'
    const catalofacilStore = await prisma.stores.findUnique({
      where: { slug: 'catalofacil' }
    });
    
    console.log('\nLoja com slug "catalofacil":');
    console.log(catalofacilStore);
    
  } catch (error) {
    console.error('Erro:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkStores(); 