const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function listUsers() {
  try {
    console.log('🔍 Listando todos os usuários...');
    
    const users = await prisma.users.findMany({
      select: {
        id: true,
        email: true,
        role: true,
        created_at: true
      }
    });
    
    if (users.length === 0) {
      console.log('❌ Nenhum usuário encontrado no banco!');
      console.log('💡 Você precisa criar um usuário primeiro.');
    } else {
      console.log(`✅ Encontrados ${users.length} usuários:`);
      users.forEach((user, index) => {
        console.log(`${index + 1}. ID: ${user.id}`);
        console.log(`   Email: ${user.email}`);
        console.log(`   Role: ${user.role}`);
        console.log(`   Criado: ${user.created_at}`);
        console.log('');
      });
    }
    
  } catch (error) {
    console.error('❌ Erro:', error);
  } finally {
    await prisma.$disconnect();
  }
}

listUsers(); 