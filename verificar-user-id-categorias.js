require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function verificarUserIdCategorias() {
  try {
    console.log('🔍 Verificando problema do user_id nas categorias...\n');

    // 1. Verificar usuário correto
    const usuarioCorreto = await prisma.users.findUnique({
      where: { email: 'alexsander01@hotmail.com.br' }
    });

    if (!usuarioCorreto) {
      console.log('❌ Usuário alexsander01@hotmail.com.br não encontrado');
      return;
    }

    console.log('✅ Usuário correto encontrado:');
    console.log(`   - ID: ${usuarioCorreto.id}`);
    console.log(`   - Email: ${usuarioCorreto.email}`);

    // 2. Verificar loja correta
    const lojaCorreta = await prisma.stores.findFirst({
      where: { 
        user_id: usuarioCorreto.id,
        slug: 'catalofacil'
      }
    });

    if (!lojaCorreta) {
      console.log('❌ Loja catalofacil não encontrada');
      return;
    }

    console.log('\n🏪 Loja correta encontrada:');
    console.log(`   - ID: ${lojaCorreta.id}`);
    console.log(`   - Nome: ${lojaCorreta.name}`);
    console.log(`   - Slug: ${lojaCorreta.slug}`);

    // 3. Verificar categorias existentes
    const categorias = await prisma.categories.findMany({
      where: { store_id: lojaCorreta.id }
    });

    console.log('\n🏷️ Categorias existentes:', categorias.length);
    categorias.forEach(categoria => {
      console.log(`   - ${categoria.name} (ID: ${categoria.id}, User ID: ${categoria.user_id})`);
    });

    // 4. Verificar se há categorias com user_id incorreto
    const categoriasIncorretas = categorias.filter(c => c.user_id !== usuarioCorreto.id);
    
    if (categoriasIncorretas.length > 0) {
      console.log('\n⚠️ Categorias com user_id incorreto:', categoriasIncorretas.length);
      categoriasIncorretas.forEach(categoria => {
        console.log(`   - ${categoria.name}: ${categoria.user_id} (deveria ser ${usuarioCorreto.id})`);
      });

      // 5. Corrigir user_id das categorias
      console.log('\n🔧 Corrigindo user_id das categorias...');
      
      for (const categoria of categoriasIncorretas) {
        await prisma.categories.update({
          where: { id: categoria.id },
          data: { user_id: usuarioCorreto.id }
        });
        console.log(`   ✅ ${categoria.name}: user_id corrigido`);
      }
    } else {
      console.log('\n✅ Todas as categorias já têm o user_id correto!');
    }

    // 6. Verificar resultado final
    console.log('\n📊 Verificando resultado final...\n');

    const categoriasFinais = await prisma.categories.findMany({
      where: { store_id: lojaCorreta.id }
    });

    categoriasFinais.forEach(categoria => {
      const status = categoria.user_id === usuarioCorreto.id ? '✅ CORRETO' : '❌ INCORRETO';
      console.log(`   - ${categoria.name}: ${status} (User ID: ${categoria.user_id})`);
    });

    // 7. Informações para o frontend
    console.log('\n📋 INFORMAÇÕES PARA O FRONTEND:');
    console.log(`   - User ID correto: ${usuarioCorreto.id}`);
    console.log(`   - Store ID correto: ${lojaCorreta.id}`);
    console.log(`   - Email: ${usuarioCorreto.email}`);
    console.log(`   - Token deve conter: ${usuarioCorreto.id}`);

    // 8. Verificar token atual
    console.log('\n🔑 VERIFICANDO TOKEN ATUAL:');
    console.log('   Token do erro: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM1ZTA0YzJhLWIzYTItNGVmMS05MGRlLTNkZDg0MzNkOGQ2ZiIsImVtYWlsIjoiYWxleHNhbmRlcjAxQGhvdG1haWwuY29tLmJyIiwiaWF0IjoxNzU0MzQwMDQ4LCJleHAiOjE3NTQ0MjY0NDh9.-rA0Tp0tSB5ch7jjayVxulbzcgz4kwi5b_hVB7wPyko');
    
    // Decodificar o token (sem verificar assinatura)
    const tokenParts = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM1ZTA0YzJhLWIzYTItNGVmMS05MGRlLTNkZDg0MzNkOGQ2ZiIsImVtYWlsIjoiYWxleHNhbmRlcjAxQGhvdG1haWwuY29tLmJyIiwiaWF0IjoxNzU0MzQwMDQ4LCJleHAiOjE3NTQ0MjY0NDh9.-rA0Tp0tSB5ch7jjayVxulbzcgz4kwi5b_hVB7wPyko'.split('.');
    const payload = JSON.parse(Buffer.from(tokenParts[1], 'base64').toString());
    
    console.log('   Token decodificado:');
    console.log(`     - ID no token: ${payload.id}`);
    console.log(`     - Email no token: ${payload.email}`);
    console.log(`     - ID correto deveria ser: ${usuarioCorreto.id}`);

    if (payload.id !== usuarioCorreto.id) {
      console.log('\n⚠️ PROBLEMA IDENTIFICADO:');
      console.log('   O token contém um ID diferente do usuário correto!');
      console.log('   O frontend precisa usar o token correto ou o backend precisa aceitar ambos os IDs.');
    }

    console.log('\n🎉 Verificação concluída!');

  } catch (error) {
    console.error('❌ Erro durante verificação:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Executar verificação
verificarUserIdCategorias(); 