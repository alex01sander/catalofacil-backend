const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // IDs fixos para exemplo
  const store_id = '848d038b-e5fe-4e8e-876b-a0fe4a2a052b'; // catalofacil
  const user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f'; // admin

  // 1. Criar categoria
  const categoria = await prisma.categories.create({
    data: {
      name: 'Bebidas',
      color: '#00BFFF',
      image: 'https://fjoykgkdploqlizfhovm.supabase.co/storage/v1/object/public/categorias/bebidas.png',
      user_id,
      store_id
    }
  });
  console.log('Categoria criada:', categoria);

  // 2. Criar produto
  const produto = await prisma.products.create({
    data: {
      name: 'Coca-Cola Lata 350ml',
      price: 5.99,
      stock: 100,
      is_active: true,
      user_id,
      category_id: categoria.id,
      description: 'Refrigerante gelado, perfeito para o calor!',
      image: 'https://fjoykgkdploqlizfhovm.supabase.co/storage/v1/object/public/products/coca-cola-lata.png',
      images: ['https://fjoykgkdploqlizfhovm.supabase.co/storage/v1/object/public/products/coca-cola-lata.png'],
      store_id
    }
  });
  console.log('Produto criado:', produto);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 