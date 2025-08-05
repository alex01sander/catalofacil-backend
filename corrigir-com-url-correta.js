const { PrismaClient } = require('@prisma/client');

// URL correta do banco de produção (Railway)
const DATABASE_URL = "postgresql://postgres:password@containers-us-west-1.railway.app:5432/railway";

// Configurar Prisma para usar o banco de produção
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: DATABASE_URL
    }
  }
});

async function corrigirComUrlCorreta() {
  try {
    console.log('🚀 INICIANDO CORREÇÃO AUTOMÁTICA...\n');
    console.log('🔗 Conectando ao banco:', DATABASE_URL);

    // Testar conexão
    await prisma.$connect();
    console.log('✅ Conexão com banco estabelecida!');

    // User ID do token
    const userIdToken = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f';
    const email = 'alexsander01@hotmail.com.br';
    const storeSlug = 'catalofacil';

    // =====================================================
    // 1. CRIAR USUÁRIO COM ID DO TOKEN
    // =====================================================
    console.log('\n📝 1. Criando usuário com ID do token...');
    
    try {
      await prisma.$executeRaw`
        INSERT INTO auth.users (id, email, role, created_at, updated_at)
        VALUES (${userIdToken}, ${email}, 'admin', NOW(), NOW())
        ON CONFLICT (id) DO NOTHING
      `;
      console.log('✅ Usuário criado/verificado com sucesso!');
    } catch (error) {
      console.log('⚠️ Usuário já existe ou erro:', error.message);
    }

    // =====================================================
    // 2. ENCONTRAR STORE_ID
    // =====================================================
    console.log('\n🏪 2. Encontrando store_id...');
    
    const store = await prisma.stores.findUnique({
      where: { slug: storeSlug }
    });

    if (!store) {
      throw new Error(`Store com slug '${storeSlug}' não encontrada!`);
    }

    console.log(`✅ Store encontrada: ${store.name} (ID: ${store.id})`);

    // =====================================================
    // 3. CORRIGIR TODAS AS TABELAS COM USER_ID
    // =====================================================
    console.log('\n🔧 3. Corrigindo todas as tabelas com user_id...');

    const tabelasComUserId = [
      'cash_flow',
      'categories', 
      'controller_admins',
      'credit_accounts',
      'credit_transactions',
      'domain_owners',
      'expenses',
      'product_costs',
      'products',
      'sales',
      'store_settings',
      'stores'
    ];

    for (const tabela of tabelasComUserId) {
      try {
        console.log(`📊 Corrigindo tabela: ${tabela}...`);
        
        // Verificar se a tabela existe e tem user_id
        const colunas = await prisma.$queryRaw`
          SELECT column_name 
          FROM information_schema.columns 
          WHERE table_schema = 'public' 
          AND table_name = ${tabela}
          AND column_name = 'user_id'
        `;

        if (colunas.length === 0) {
          console.log(`⚠️ Tabela ${tabela} não tem user_id, pulando...`);
          continue;
        }

        // Atualizar user_id
        let resultado;
        if (tabela === 'stores') {
          resultado = await prisma.$executeRaw`
            UPDATE public.${prisma.raw(tabela)} 
            SET user_id = ${userIdToken}
            WHERE slug = ${storeSlug}
          `;
        } else {
          resultado = await prisma.$executeRaw`
            UPDATE public.${prisma.raw(tabela)} 
            SET user_id = ${userIdToken}
            WHERE store_id = ${store.id}
          `;
        }

        console.log(`✅ ${tabela}: ${resultado} registros atualizados`);
      } catch (error) {
        console.log(`❌ Erro ao corrigir ${tabela}:`, error.message);
      }
    }

    // =====================================================
    // 4. VERIFICAÇÃO FINAL
    // =====================================================
    console.log('\n🔍 4. Verificação final...');

    for (const tabela of tabelasComUserId) {
      try {
        const colunas = await prisma.$queryRaw`
          SELECT column_name 
          FROM information_schema.columns 
          WHERE table_schema = 'public' 
          AND table_name = ${tabela}
          AND column_name = 'user_id'
        `;

        if (colunas.length === 0) continue;

        let query;
        if (tabela === 'stores') {
          query = `SELECT COUNT(*) as total, COUNT(CASE WHEN user_id = '${userIdToken}' THEN 1 END) as corretos FROM public.${tabela} WHERE slug = '${storeSlug}'`;
        } else {
          query = `SELECT COUNT(*) as total, COUNT(CASE WHEN user_id = '${userIdToken}' THEN 1 END) as corretos FROM public.${tabela} WHERE store_id = '${store.id}'`;
        }

        const resultado = await prisma.$queryRaw(query);
        const { total, corretos } = resultado[0];

        console.log(`📊 ${tabela}: ${corretos}/${total} registros corretos`);
      } catch (error) {
        console.log(`❌ Erro ao verificar ${tabela}:`, error.message);
      }
    }

    console.log('\n🎉 CORREÇÃO AUTOMÁTICA CONCLUÍDA!');
    console.log('✅ Agora teste no frontend:');
    console.log('   - Criar categoria');
    console.log('   - Criar cliente');
    console.log('   - Criar produto');
    console.log('   - Qualquer outra operação');

  } catch (error) {
    console.error('❌ Erro durante correção automática:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Executar correção automática
corrigirComUrlCorreta(); 