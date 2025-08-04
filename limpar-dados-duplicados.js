require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function limparDadosDuplicados() {
  try {
    console.log('🔍 Analisando dados duplicados...\n');

    // 1. Verificar usuário
    const usuario = await prisma.users.findUnique({
      where: { email: 'alexsander01@hotmail.com.br' }
    });

    if (!usuario) {
      console.log('❌ Usuário alexsander01@hotmail.com.br não encontrado');
      return;
    }

    console.log('✅ Usuário encontrado:', usuario.email, '(ID:', usuario.id, ')');

    // 2. Verificar lojas
    const lojas = await prisma.stores.findMany({
      where: { user_id: usuario.id }
    });

    console.log('\n📊 Lojas encontradas:');
    lojas.forEach(loja => {
      console.log(`- ${loja.name} (${loja.slug}) - ID: ${loja.id}`);
    });

    // 3. Verificar configurações
    const configuracoes = await prisma.store_settings.findMany({
      where: { user_id: usuario.id }
    });

    console.log('\n⚙️ Configurações encontradas:');
    configuracoes.forEach(config => {
      console.log(`- ${config.store_name} - ID: ${config.id}`);
    });

    // 4. Identificar a loja correta (catalofacil)
    const lojaCorreta = lojas.find(loja => loja.slug === 'catalofacil');
    
    if (!lojaCorreta) {
      console.log('\n❌ Loja "catalofacil" não encontrada');
      return;
    }

    console.log('\n✅ Loja correta identificada:', lojaCorreta.name, '(ID:', lojaCorreta.id, ')');

    // 5. Verificar produtos
    const produtos = await prisma.products.findMany({
      where: { user_id: usuario.id }
    });

    console.log('\n📦 Produtos encontrados:', produtos.length);
    produtos.forEach(produto => {
      console.log(`- ${produto.name} (Loja: ${produto.store_id === lojaCorreta.id ? 'CORRETA' : 'INCORRETA'})`);
    });

    // 6. Verificar categorias
    const categorias = await prisma.categories.findMany({
      where: { user_id: usuario.id }
    });

    console.log('\n🏷️ Categorias encontradas:', categorias.length);
    categorias.forEach(categoria => {
      console.log(`- ${categoria.name} (Loja: ${categoria.store_id === lojaCorreta.id ? 'CORRETA' : 'INCORRETA'})`);
    });

    // 7. Perguntar se deve prosseguir com a limpeza
    console.log('\n⚠️ ATENÇÃO: Esta operação irá:');
    console.log('1. Manter apenas a loja "catalofacil"');
    console.log('2. Remover configurações duplicadas');
    console.log('3. Corrigir produtos e categorias para a loja correta');
    console.log('4. Remover dados órfãos');

    // 8. Executar limpeza
    console.log('\n🧹 Iniciando limpeza...\n');

    // 8.1 Remover configurações duplicadas (manter apenas uma)
    if (configuracoes.length > 1) {
      console.log('🗑️ Removendo configurações duplicadas...');
      const configParaManter = configuracoes[0];
      const configsParaRemover = configuracoes.slice(1);
      
      for (const config of configsParaRemover) {
        await prisma.store_settings.delete({
          where: { id: config.id }
        });
        console.log(`   - Removida: ${config.store_name}`);
      }
    }

    // 8.2 Corrigir produtos para a loja correta
    const produtosIncorretos = produtos.filter(p => p.store_id !== lojaCorreta.id);
    if (produtosIncorretos.length > 0) {
      console.log('🔧 Corrigindo produtos...');
      for (const produto of produtosIncorretos) {
        await prisma.products.update({
          where: { id: produto.id },
          data: { store_id: lojaCorreta.id }
        });
        console.log(`   - Corrigido: ${produto.name}`);
      }
    }

    // 8.3 Corrigir categorias para a loja correta
    const categoriasIncorretas = categorias.filter(c => c.store_id !== lojaCorreta.id);
    if (categoriasIncorretas.length > 0) {
      console.log('🔧 Corrigindo categorias...');
      for (const categoria of categoriasIncorretas) {
        await prisma.categories.update({
          where: { id: categoria.id },
          data: { store_id: lojaCorreta.id }
        });
        console.log(`   - Corrigida: ${categoria.name}`);
      }
    }

    // 8.4 Remover lojas duplicadas (manter apenas catalofacil)
    const lojasParaRemover = lojas.filter(l => l.slug !== 'catalofacil');
    if (lojasParaRemover.length > 0) {
      console.log('🗑️ Removendo lojas duplicadas...');
      for (const loja of lojasParaRemover) {
        await prisma.stores.delete({
          where: { id: loja.id }
        });
        console.log(`   - Removida: ${loja.name} (${loja.slug})`);
      }
    }

    // 9. Verificar resultado final
    console.log('\n✅ Limpeza concluída! Verificando resultado...\n');

    const lojasFinais = await prisma.stores.findMany({
      where: { user_id: usuario.id }
    });

    const configsFinais = await prisma.store_settings.findMany({
      where: { user_id: usuario.id }
    });

    const produtosFinais = await prisma.products.findMany({
      where: { user_id: usuario.id }
    });

    const categoriasFinais = await prisma.categories.findMany({
      where: { user_id: usuario.id }
    });

    console.log('📊 RESULTADO FINAL:');
    console.log(`- Lojas: ${lojasFinais.length} (${lojasFinais.map(l => l.name).join(', ')})`);
    console.log(`- Configurações: ${configsFinais.length} (${configsFinais.map(c => c.store_name).join(', ')})`);
    console.log(`- Produtos: ${produtosFinais.length}`);
    console.log(`- Categorias: ${categoriasFinais.length}`);

    // 10. Verificar se todos os produtos estão na loja correta
    const produtosForaDaLoja = produtosFinais.filter(p => p.store_id !== lojaCorreta.id);
    if (produtosForaDaLoja.length > 0) {
      console.log('\n⚠️ ATENÇÃO: Ainda há produtos fora da loja correta!');
      produtosForaDaLoja.forEach(p => {
        console.log(`   - ${p.name} (store_id: ${p.store_id})`);
      });
    } else {
      console.log('\n✅ Todos os produtos estão na loja correta!');
    }

    console.log('\n🎉 Limpeza concluída com sucesso!');
    console.log('📋 Agora você tem apenas:');
    console.log(`   - Loja: catalofacil.catalofacil.com.br`);
    console.log(`   - Email: alexsander01@hotmail.com.br`);
    console.log(`   - Produtos: ${produtosFinais.length}`);
    console.log(`   - Categorias: ${categoriasFinais.length}`);

  } catch (error) {
    console.error('❌ Erro durante a limpeza:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Executar limpeza
limparDadosDuplicados(); 