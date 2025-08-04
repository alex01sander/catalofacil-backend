const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    // Buscar a loja pelo slug
    const store = await prisma.stores.findUnique({
      where: { slug: 'catalofacil' },
      select: { id: true, name: true, slug: true }
    });
    
    console.log('Loja encontrada:', store);
    
    // Buscar todas as lojas para comparação
    const allStores = await prisma.stores.findMany({
      select: { id: true, name: true, slug: true }
    });
    
    console.log('\nTodas as lojas:');
    allStores.forEach(store => {
      console.log(`- ${store.name} (${store.slug}): ${store.id}`);
    });
    
  } catch (error) {
    console.error('Erro:', error);
  }
}

main()
  .finally(async () => {
    await prisma.$disconnect();
  }); 