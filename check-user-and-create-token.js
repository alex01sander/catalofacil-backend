const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient();

async function checkUserAndCreateToken() {
  try {
    console.log('🔍 Verificando usuários no banco...\n');
    
    // Buscar usuários
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
    
    if (users.length > 0) {
      const firstUser = users[0];
      console.log('🎫 Criando token para o primeiro usuário...');
      
      const token = jwt.sign(
        { 
          userId: firstUser.id, 
          email: firstUser.email 
        },
        'sua_chave_secreta_muito_segura_aqui_123456789',
        { expiresIn: '24h' }
      );
      
      console.log('✅ Token criado:', token.substring(0, 50) + '...');
      console.log('');
      
      // Testar dados que o frontend está enviando
      const testData = {
        user_id: firstUser.id, // Usar o ID real do usuário
        store_name: "Britto",
        store_description: "Venho conferiri o melhor preço",
        store_subtitle: "Produtos Incríveis",
        instagram_url: "https://instagram.com/_alogin",
        whatsapp_number: "5551992401184",
        mobile_logo: "https://fjoykgkdploqlizfhovm.supabase.co/storage/v1/object/public/logos/logo.png",
        desktop_banner: "https://fjoykgkdploqlizfhovm.supabase.co/storage/v1/object/public/banners/banner.png",
        mobile_banner_image: "https://fjoykgkdploqlizfhovm.supabase.co/storage/v1/object/public/banners/mobile-banner.png",
        mobile_banner_color: "verde"
      };
      
      console.log('📤 Dados de teste com user_id correto:');
      console.log(JSON.stringify(testData, null, 2));
      console.log('');
      console.log('🔑 Token para usar no frontend:');
      console.log(token);
      
    } else {
      console.log('❌ Nenhum usuário encontrado no banco!');
    }
    
  } catch (error) {
    console.error('❌ Erro:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkUserAndCreateToken(); 