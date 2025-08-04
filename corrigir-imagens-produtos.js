require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function corrigirImagensProdutos() {
  try {
    console.log('🖼️ Corrigindo imagens dos produtos...\n');

    // 1. Verificar usuário
    const usuario = await prisma.users.findUnique({
      where: { email: 'alexsander01@hotmail.com.br' }
    });

    if (!usuario) {
      console.log('❌ Usuário alexsander01@hotmail.com.br não encontrado');
      return;
    }

    console.log('✅ Usuário encontrado:', usuario.email);

    // 2. Verificar produtos atuais
    const produtos = await prisma.products.findMany({
      where: { user_id: usuario.id }
    });

    console.log('\n📦 Produtos encontrados:', produtos.length);
    produtos.forEach(produto => {
      console.log(`- ${produto.name}: ${produto.image ? produto.image.substring(0, 50) + '...' : 'Sem imagem'}`);
    });

    // 3. Definir novas imagens (Base64 - funcionam offline)
    const novasImagens = {
      'Coca-Cola': 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRkYwMDAwIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+Q29jYS1Db2xhPC90ZXh0Pgo8L3N2Zz4K',
      'Pepsi': 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMDA2NkNDIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+UGVwc2k8L3RleHQ+Cjwvc3ZnPgo=',
      'Água': 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMDA2NkNDIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+4cKwZ3VhPC90ZXh0Pgo8L3N2Zz4K',
      'Suco': 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRkY2NjAwIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+U3VjbzwvdGV4dD4KPC9zdmc+Cg==',
      'Heineken': 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMDBGRjAwIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+SGVpbmVrZW48L3RleHQ+Cjwvc3ZnPgo='
    };

    // 4. Atualizar imagens
    console.log('\n🔄 Atualizando imagens...\n');

    for (const produto of produtos) {
      const novaImagem = novasImagens[produto.name];
      
      if (novaImagem) {
        await prisma.products.update({
          where: { id: produto.id },
          data: { image: novaImagem }
        });
        console.log(`✅ ${produto.name}: Imagem atualizada`);
      } else {
        console.log(`⚠️ ${produto.name}: Nenhuma imagem definida`);
      }
    }

    // 5. Verificar resultado
    console.log('\n📊 Verificando resultado...\n');

    const produtosAtualizados = await prisma.products.findMany({
      where: { user_id: usuario.id }
    });

    produtosAtualizados.forEach(produto => {
      const tipoImagem = produto.image?.startsWith('data:') ? 'Base64' : 
                        produto.image?.startsWith('https://') ? 'URL Externa' : 
                        produto.image?.startsWith('/') ? 'Local' : 'Outro';
      
      console.log(`- ${produto.name}: ${tipoImagem} (${produto.image ? produto.image.substring(0, 30) + '...' : 'Sem imagem'})`);
    });

    console.log('\n🎉 Correção das imagens concluída!');
    console.log('📋 Agora as imagens funcionam offline e não dependem de serviços externos.');

  } catch (error) {
    console.error('❌ Erro ao corrigir imagens:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Executar correção
corrigirImagensProdutos(); 