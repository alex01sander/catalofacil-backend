const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function testUser() {
  try {
    const userId = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f';
    
    console.log('🔍 Verificando usuário:', userId);
    
    // Verificar na tabela auth.users
    const user = await prisma.users.findUnique({
      where: { id: userId }
    });
    
    if (user) {
      console.log('✅ Usuário encontrado na tabela auth.users:');
      console.log('- ID:', user.id);
      console.log('- Email:', user.email);
      console.log('- Role:', user.role);
    } else {
      console.log('❌ Usuário NÃO encontrado na tabela auth.users');
    }
    
    // Verificar se há categorias para este usuário
    const categories = await prisma.categories.findMany({
      where: { user_id: userId }
    });
    
    console.log(`📊 Categorias encontradas: ${categories.length}`);
    
  } catch (error) {
    console.error('❌ Erro:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testUser(); 