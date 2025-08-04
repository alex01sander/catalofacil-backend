const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    // Buscar a loja para obter o user_id
    const store = await prisma.stores.findUnique({
      where: { slug: 'catalofacil' },
      select: { id: true, name: true, user_id: true }
    });
    
    console.log('Loja encontrada:', store);
    
    // Buscar o usuário
    const user = await prisma.users.findUnique({
      where: { id: store.user_id },
      select: { id: true, email: true }
    });
    
    console.log('Usuário da loja:', user);
    
    // Buscar todos os usuários para comparação
    const allUsers = await prisma.users.findMany({
      select: { id: true, email: true }
    });
    
    console.log('\nTodos os usuários:');
    allUsers.forEach(user => {
      console.log(`- ${user.email}: ${user.id}`);
    });
    
  } catch (error) {
    console.error('Erro:', error);
  }
}

main()
  .finally(async () => {
    await prisma.$disconnect();
  }); 