const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // IDs fixos para exemplo
  const store_id = '0b094a7e-24cc-456e-912e-178792c3afde'; // catalofacil
  const user_id = 'b669b536-7bef-4181-b32b-8970ee6d8f49'; // admin@catalofacil.com.br

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