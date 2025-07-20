const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function createUser() {
  try {
    console.log('🔧 Criando usuário no banco...');
    
    // Dados do usuário
    const userData = {
      id: 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f', // Mesmo ID do token
      email: 'alexsander01@hotmail.com.br',
      encrypted_password: await bcrypt.hash('123456', 10), // Senha: 123456
      role: 'authenticated',
      email_confirmed_at: new Date(),
      created_at: new Date(),
      updated_at: new Date()
    };
    
    const user = await prisma.users.create({
      data: userData
    });
    
    console.log('✅ Usuário criado com sucesso!');
    console.log('- ID:', user.id);
    console.log('- Email:', user.email);
    console.log('- Role:', user.role);
    console.log('');
    console.log('🔑 Credenciais para login:');
    console.log('- Email: alexsander01@hotmail.com.br');
    console.log('- Senha: 123456');
    
  } catch (error) {
    console.error('❌ Erro ao criar usuário:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createUser(); 