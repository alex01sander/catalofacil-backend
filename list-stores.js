const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const lojas = await prisma.stores.findMany({
    select: { id: true, name: true, slug: true }
  });
  console.log('Lojas cadastradas:');
  lojas.forEach(loja => console.log(loja));
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 