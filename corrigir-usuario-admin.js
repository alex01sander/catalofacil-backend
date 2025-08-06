const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const prisma = new PrismaClient();

// IDs dos usuários encontrados nos logs
const USUARIO_ATUAL = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f';
const USUARIO_ADMIN_ESPERADO = '05703665-81d7-4c1d-9bb0-660f0571f465';
const EMAIL = 'alexsander01@hotmail.com.br';

async function corrigirUsuarioAdmin() {
  console.log('🔧 CORRIGINDO USUÁRIO ADMIN');
  console.log('============================\n');

  try {
    // 1. Verificar situação atual dos usuários
    console.log('1️⃣ Verificando usuários no banco...');
    
    const usuarioAtual = await prisma.users.findUnique({
      where: { id: USUARIO_ATUAL }
    });
    
    const usuarioAdminEsperado = await prisma.users.findUnique({
      where: { id: USUARIO_ADMIN_ESPERADO }
    });

    console.log('👤 Usuário atual (c5e04c2a...):');
    if (usuarioAtual) {
      console.log('   ✅ Existe');
      console.log('   ID:', usuarioAtual.id);
      console.log('   Email:', usuarioAtual.email);
      console.log('   Role:', usuarioAtual.role);
    } else {
      console.log('   ❌ Não existe');
    }

    console.log('\n👤 Usuário admin esperado (05703665...):');
    if (usuarioAdminEsperado) {
      console.log('   ✅ Existe');
      console.log('   ID:', usuarioAdminEsperado.id);
      console.log('   Email:', usuarioAdminEsperado.email);
      console.log('   Role:', usuarioAdminEsperado.role);
    } else {
      console.log('   ❌ Não existe');
    }
    console.log('');

    // 2. Estratégia de correção
    console.log('2️⃣ Definindo estratégia de correção...');
    
    if (usuarioAtual && usuarioAdminEsperado) {
      console.log('⚠️ Ambos os usuários existem!');
      console.log('📋 Estratégia: Atualizar o usuário atual para ser admin');
      
      // Atualizar o usuário atual para ser admin
      await prisma.users.update({
        where: { id: USUARIO_ATUAL },
        data: { 
          role: 'admin',
          updated_at: new Date()
        }
      });
      console.log('✅ Usuário atual atualizado para admin');
      
    } else if (usuarioAtual && !usuarioAdminEsperado) {
      console.log('📋 Estratégia: Usar o usuário atual como admin');
      
      // Atualizar o usuário atual para ser admin
      await prisma.users.update({
        where: { id: USUARIO_ATUAL },
        data: { 
          role: 'admin',
          updated_at: new Date()
        }
      });
      console.log('✅ Usuário atual definido como admin');
      
    } else if (!usuarioAtual && usuarioAdminEsperado) {
      console.log('📋 Estratégia: Usar o usuário admin esperado');
      console.log('✅ Usuário admin esperado já existe');
      
    } else {
      console.log('📋 Estratégia: Criar novo usuário admin');
      
      // Criar novo usuário admin
      await prisma.users.create({
        data: {
          id: USUARIO_ADMIN_ESPERADO,
          email: EMAIL,
          role: 'admin',
          created_at: new Date(),
          updated_at: new Date()
        }
      });
      console.log('✅ Novo usuário admin criado');
    }
    console.log('');

    // 3. Verificar/criar entrada na tabela controller_admins
    console.log('3️⃣ Verificando tabela controller_admins...');
    
    const userIdParaUsar = usuarioAtual ? USUARIO_ATUAL : USUARIO_ADMIN_ESPERADO;
    
    const controllerAdmin = await prisma.controller_admins.findFirst({
      where: { user_id: userIdParaUsar }
    });

    if (!controllerAdmin) {
      console.log('⚠️ Usuário não está na tabela controller_admins. Adicionando...');
      await prisma.controller_admins.create({
        data: {
          user_id: userIdParaUsar,
          created_at: new Date()
        }
      });
      console.log('✅ Usuário adicionado à tabela controller_admins');
    } else {
      console.log('✅ Usuário já está na tabela controller_admins');
    }
    console.log('');

    // 4. Gerar token JWT para o usuário correto
    console.log('4️⃣ Gerando token JWT...');
    
    const payload = {
      userId: userIdParaUsar,
      email: EMAIL,
      role: 'admin',
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60) // 24 horas
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET);
    console.log('✅ Token JWT gerado com sucesso!');
    console.log('');

    // 5. Atualizar arquivo de teste
    console.log('5️⃣ Atualizando arquivo de teste...');
    const fs = require('fs');
    const testFile = 'test-alexsander-admin.js';
    
    if (fs.existsSync(testFile)) {
      let testContent = fs.readFileSync(testFile, 'utf8');
      
      // Atualizar o ID do usuário
      testContent = testContent.replace(
        /const ALEXSANDER_USER_ID = '[^']*'/,
        `const ALEXSANDER_USER_ID = '${userIdParaUsar}'`
      );
      
      // Substituir a função generateTestToken
      const newTokenFunction = `const generateTestToken = () => {
  return '${token}';
};`;
      
      const tokenFunctionRegex = /const generateTestToken = \(\) => \{[\s\S]*?\};/;
      testContent = testContent.replace(tokenFunctionRegex, newTokenFunction);
      
      fs.writeFileSync(testFile, testContent);
      console.log('✅ Arquivo de teste atualizado');
    } else {
      console.log('⚠️ Arquivo de teste não encontrado');
    }
    console.log('');

    // 6. Resumo final
    console.log('🎯 RESUMO DA CORREÇÃO:');
    console.log('======================');
    console.log('✅ Usuário admin definido:', userIdParaUsar);
    console.log('✅ Role admin configurado');
    console.log('✅ Tabela controller_admins atualizada');
    console.log('✅ Token JWT válido gerado');
    console.log('✅ Arquivo de teste atualizado');
    console.log('');
    console.log('🔑 TOKEN JWT GERADO:');
    console.log(token);
    console.log('');
    console.log('👤 USUÁRIO ADMIN:');
    console.log('   ID:', userIdParaUsar);
    console.log('   Email:', EMAIL);
    console.log('   Role: admin');
    console.log('');
    console.log('📋 PRÓXIMOS PASSOS:');
    console.log('1. Execute: node test-alexsander-admin.js');
    console.log('2. Teste o login no frontend com este token');
    console.log('3. Verifique se consegue acessar o controller');
    console.log('');
    console.log('🌐 Para testar no frontend:');
    console.log('Authorization: Bearer ' + token);

  } catch (error) {
    console.error('❌ Erro durante a correção:', error.message);
    
    if (error.code === 'P2002') {
      console.log('ℹ️ Erro de duplicação - usuário já existe');
    }
  } finally {
    await prisma.$disconnect();
  }
}

// Função para limpar usuários duplicados (opcional)
async function limparUsuariosDuplicados() {
  console.log('\n🧹 LIMPANDO USUÁRIOS DUPLICADOS');
  console.log('================================\n');

  try {
    // Verificar se existem dois usuários com o mesmo email
    const usuariosComEmail = await prisma.users.findMany({
      where: { email: EMAIL }
    });

    if (usuariosComEmail.length > 1) {
      console.log(`⚠️ Encontrados ${usuariosComEmail.length} usuários com o mesmo email`);
      
      usuariosComEmail.forEach((user, index) => {
        console.log(`   ${index + 1}. ID: ${user.id}, Role: ${user.role}`);
      });

      // Manter apenas o usuário que será admin
      const usuarioParaManter = usuariosComEmail.find(u => u.id === USUARIO_ATUAL) || usuariosComEmail[0];
      const usuariosParaRemover = usuariosComEmail.filter(u => u.id !== usuarioParaManter.id);

      console.log(`\n📋 Manter usuário: ${usuarioParaManter.id}`);
      console.log(`📋 Remover usuários: ${usuariosParaRemover.map(u => u.id).join(', ')}`);

      // Remover usuários duplicados
      for (const user of usuariosParaRemover) {
        await prisma.users.delete({
          where: { id: user.id }
        });
        console.log(`✅ Usuário ${user.id} removido`);
      }
    } else {
      console.log('✅ Nenhum usuário duplicado encontrado');
    }

  } catch (error) {
    console.error('❌ Erro ao limpar usuários:', error.message);
  }
}

if (process.argv.includes('--clean')) {
  limparUsuariosDuplicados();
} else if (process.argv.includes('--help')) {
  console.log('📖 AJUDA:');
  console.log('node corrigir-usuario-admin.js          - Corrigir usuário admin');
  console.log('node corrigir-usuario-admin.js --clean  - Limpar usuários duplicados');
  console.log('node corrigir-usuario-admin.js --help   - Mostrar ajuda');
} else {
  corrigirUsuarioAdmin();
} 