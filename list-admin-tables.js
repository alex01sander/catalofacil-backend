const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function listAdminTables() {
  try {
    console.log('🔍 Listando todas as tabelas do sistema...\n');
    
    // Tabelas principais do sistema
    const tables = [
      'users',
      'stores', 
      'store_settings',
      'categories',
      'products',
      'customers',
      'orders',
      'order_items',
      'sales',
      'cash_flow',
      'credit_accounts',
      'credit_transactions',
      'credit_installments',
      'expenses',
      'product_costs',
      'profiles',
      'controller_admins',
      'domain_owners'
    ];
    
    console.log('📊 Tabelas principais:');
    tables.forEach((table, index) => {
      console.log(`  ${index + 1}. ${table}`);
    });
    
    console.log('\n🎯 Tabelas que precisam de rotas administrativas:');
    console.log('  ✅ users - Gerenciar usuários');
    console.log('  ✅ stores - Gerenciar lojas');
    console.log('  ✅ store_settings - Configurações das lojas');
    console.log('  ✅ categories - Categorias de produtos');
    console.log('  ✅ products - Produtos');
    console.log('  ✅ customers - Clientes');
    console.log('  ✅ orders - Pedidos');
    console.log('  ✅ sales - Vendas');
    console.log('  ✅ cash_flow - Fluxo de caixa');
    console.log('  ✅ credit_accounts - Contas de crédito');
    console.log('  ✅ credit_transactions - Transações de crédito');
    console.log('  ✅ expenses - Despesas');
    console.log('  ✅ product_costs - Custos dos produtos');
    console.log('  ✅ controller_admins - Administradores do sistema');
    console.log('  ✅ domain_owners - Proprietários de domínios');
    
    console.log('\n📋 Rotas administrativas necessárias:');
    console.log('  🔐 Todas as rotas devem ter autenticação de admin');
    console.log('  📊 CRUD completo para cada tabela');
    console.log('  📈 Relatórios e estatísticas');
    console.log('  🔍 Busca e filtros avançados');
    
  } catch (error) {
    console.error('❌ Erro:', error);
  } finally {
    await prisma.$disconnect();
  }
}

listAdminTables(); 