const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function createAlexsanderAdmin() {
  try {
    console.log('🔧 Criando usuário admin alexsander01@hotmail.com.br...');
    
    // Verificar se o usuário já existe
    const existingUser = await prisma.users.findUnique({
      where: { id: '05703665-81d7-4c1d-9bb0-660f0571f465' }
    });
    
    if (existingUser) {
      console.log('ℹ️ Usuário já existe:');
      console.log('   ID:', existingUser.id);
      console.log('   Email:', existingUser.email);
      console.log('   Role:', existingUser.role);
      return;
    }
    
    // Criar o usuário admin
    const user = await prisma.users.create({
      data: {
        id: '05703665-81d7-4c1d-9bb0-660f0571f465',
        email: 'alexsander01@hotmail.com.br',
        role: 'admin',
        created_at: new Date(),
        updated_at: new Date()
      }
    });
    
    console.log('✅ Usuário admin criado com sucesso!');
    console.log('   ID:', user.id);
    console.log('   Email:', user.email);
    console.log('   Role:', user.role);
    console.log('   Criado em:', user.created_at);
    
    // Verificar se foi criado corretamente
    const verifyUser = await prisma.users.findUnique({
      where: { id: '05703665-81d7-4c1d-9bb0-660f0571f465' }
    });
    
    if (verifyUser) {
      console.log('✅ Verificação: Usuário encontrado no banco');
    } else {
      console.log('❌ Erro: Usuário não foi encontrado após criação');
    }
    
  } catch (error) {
    console.error('❌ Erro ao criar usuário admin:', error.message);
    
    if (error.code === 'P2002') {
      console.log('ℹ️ Usuário já existe com este ID ou email');
    }
  } finally {
    await prisma.$disconnect();
  }
}

createAlexsanderAdmin(); 