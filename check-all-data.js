const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    console.log('🔍 Verificando todos os dados do banco...\n');
    
    // Verificar todas as lojas
    const stores = await prisma.stores.findMany({
      select: { id: true, name: true, slug: true, user_id: true }
    });
    console.log('🏪 Lojas encontradas:', stores.length);
    stores.forEach(store => {
      console.log(`  - ${store.name} (${store.slug}): ${store.id}`);
    });
    
    // Verificar todos os usuários
    const users = await prisma.users.findMany({
      select: { id: true, email: true }
    });
    console.log('\n👥 Usuários encontrados:', users.length);
    users.forEach(user => {
      console.log(`  - ${user.email}: ${user.id}`);
    });
    
    // Verificar todas as categorias
    const categories = await prisma.categories.findMany({
      select: { id: true, name: true, store_id: true, user_id: true }
    });
    console.log('\n📂 Categorias encontradas:', categories.length);
    categories.forEach(cat => {
      console.log(`  - ${cat.name}: ${cat.id} (store: ${cat.store_id})`);
    });
    
    // Verificar todos os produtos
    const products = await prisma.products.findMany({
      select: { id: true, name: true, store_id: true, user_id: true, is_active: true }
    });
    console.log('\n📦 Produtos encontrados:', products.length);
    products.forEach(prod => {
      console.log(`  - ${prod.name}: ${prod.id} (store: ${prod.store_id}, ativo: ${prod.is_active})`);
    });
    
    // Verificar vendas
    const sales = await prisma.sales.findMany({
      select: { id: true, total_price: true, store_id: true, created_at: true, product_name: true }
    });
    console.log('\n💰 Vendas encontradas:', sales.length);
    sales.forEach(sale => {
      console.log(`  - Venda ${sale.id}: ${sale.product_name} - R$ ${sale.total_price} (store: ${sale.store_id}) - ${sale.created_at}`);
    });
    
    // Verificar cash flow
    const cashFlow = await prisma.cash_flow.findMany({
      select: { id: true, amount: true, type: true, description: true, store_id: true, created_at: true }
    });
    console.log('\n💵 Cash Flow encontrado:', cashFlow.length);
    cashFlow.forEach(cf => {
      console.log(`  - ${cf.type}: ${cf.description} - R$ ${cf.amount} (store: ${cf.store_id}) - ${cf.created_at}`);
    });
    
  } catch (error) {
    console.error('❌ Erro:', error);
  }
}

main()
  .finally(async () => {
    await prisma.$disconnect();
  }); 