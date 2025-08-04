const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // IDs fixos
  const store_id = '0b094a7e-24cc-456e-912e-178792c3afde'; // catalofacil
  const user_id = 'b669b536-7bef-4181-b32b-8970ee6d8f49'; // admin@catalofacil.com.br

  try {
    // Buscar categoria existente
    const categoria = await prisma.categories.findFirst({
      where: { store_id, name: 'Bebidas' }
    });

    if (!categoria) {
      console.log('Categoria não encontrada, criando...');
      const novaCategoria = await prisma.categories.create({
        data: {
          name: 'Bebidas',
          color: '#00BFFF',
          image: 'https://via.placeholder.com/150x150/00BFFF/ffffff?text=Bebidas',
          user_id,
          store_id
        }
      });
      console.log('Categoria criada:', novaCategoria.name);
    }

    // Criar mais produtos
    const produtos = [
      {
        name: 'Pepsi Lata 350ml',
        price: 4.99,
        stock: 50,
        description: 'Refrigerante Pepsi, sabor único!',
        image: 'https://via.placeholder.com/300x300/ff0000/ffffff?text=Pepsi'
      },
      {
        name: 'Água Mineral 500ml',
        price: 2.50,
        stock: 200,
        description: 'Água mineral natural, sempre fresca!',
        image: 'https://via.placeholder.com/300x300/0066cc/ffffff?text=Água'
      },
      {
        name: 'Suco de Laranja 1L',
        price: 8.99,
        stock: 30,
        description: 'Suco natural de laranja, rico em vitamina C!',
        image: 'https://via.placeholder.com/300x300/ff6600/ffffff?text=Suco'
      },
      {
        name: 'Cerveja Heineken 350ml',
        price: 6.99,
        stock: 80,
        description: 'Cerveja premium, sabor inconfundível!',
        image: 'https://via.placeholder.com/300x300/00ff00/ffffff?text=Heineken'
      }
    ];

    for (const produtoData of produtos) {
      const produto = await prisma.products.create({
        data: {
          ...produtoData,
          is_active: true,
          user_id,
          category_id: categoria.id,
          images: [produtoData.image],
          store_id
        }
      });
      console.log(`✅ Produto criado: ${produto.name} - R$ ${produto.price}`);
    }

    console.log('\n🎉 Todos os produtos foram criados com sucesso!');

  } catch (error) {
    console.error('❌ Erro:', error);
  }
}

main()
  .finally(async () => {
    await prisma.$disconnect();
  }); 