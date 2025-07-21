const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Edite os dados abaixo conforme necessário
  const data = {
    name: 'Categoria Exemplo',
    color: '#8B5CF6',
    image: 'https://link-da-imagem.png',
    user_id: 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f', // admin da loja
    store_id: '848d038b-e5fe-4e8e-876b-a0fe4a2a052b', // catalofacil
  };

  // Cria a categoria
  const categoria = await prisma.categories.create({ data });
  console.log('Categoria criada com sucesso:', categoria);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 