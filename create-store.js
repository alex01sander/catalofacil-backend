const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Edite os dados abaixo conforme necessário
  const data = {
    name: 'Minha Loja',
    slug: 'catalofacil',
    description: 'Bem-vindo à minha loja!',
    logo_url: 'https://link-da-logo.png',
    banner_url: 'https://link-do-banner.png',
    whatsapp_number: '5511999999999',
    instagram_url: 'https://instagram.com/minhaloja',
    theme_color: '#2980B9',
    user_id: 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f',
  };

  // Cria a loja
  const loja = await prisma.stores.create({ data });
  console.log('Loja criada com sucesso:', loja);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 