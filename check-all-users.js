const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function checkAllUsers() {
  try {
    console.log('🔍 Verificando todos os usuários no banco...\n');
    
    // Buscar todos os usuários
    const users = await prisma.users.findMany({
      select: {
        id: true,
        email: true,
        created_at: true
      }
    });
    
    console.log('👥 Usuários encontrados:', users.length);
    users.forEach((user, index) => {
      console.log(`  ${index + 1}. ID: ${user.id}`);
      console.log(`     Email: ${user.email}`);
      console.log(`     Criado: ${user.created_at}`);
      console.log('');
    });
    
    // Verificar se o user_id do frontend existe
    const frontendUserId = "11ef1a5c-dd4a-4a50-86c1-8a04ed657bd3";
    const backendUserId = "b669b536-7bef-4181-b32b-8970ee6d8f49";
    
    console.log('🔍 Verificando user_id do frontend...');
    const frontendUser = await prisma.users.findUnique({
      where: { id: frontendUserId }
    });
    
    if (frontendUser) {
      console.log('✅ User ID do frontend existe no banco');
      console.log(`   Email: ${frontendUser.email}`);
    } else {
      console.log('❌ User ID do frontend NÃO existe no banco');
      console.log(`   ID procurado: ${frontendUserId}`);
    }
    
    console.log('');
    console.log('🔍 Verificando user_id do backend...');
    const backendUser = await prisma.users.findUnique({
      where: { id: backendUserId }
    });
    
    if (backendUser) {
      console.log('✅ User ID do backend existe no banco');
      console.log(`   Email: ${backendUser.email}`);
    } else {
      console.log('❌ User ID do backend NÃO existe no banco');
      console.log(`   ID procurado: ${backendUserId}`);
    }
    
  } catch (error) {
    console.error('❌ Erro:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkAllUsers(); 