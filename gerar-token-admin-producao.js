const jwt = require('jsonwebtoken');
require('dotenv').config();

// IDs dos usuários encontrados nos logs de produção
const USUARIO_ATUAL = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f';
const USUARIO_ADMIN_ESPERADO = '05703665-81d7-4c1d-9bb0-660f0571f465';
const EMAIL = 'alexsander01@hotmail.com.br';

function gerarTokenAdminProducao() {
  console.log('🔧 GERANDO TOKEN ADMIN PARA PRODUÇÃO');
  console.log('=====================================\n');

  try {
    // Verificar se JWT_SECRET está configurado
    if (!process.env.JWT_SECRET) {
      console.log('❌ JWT_SECRET não está configurado!');
      console.log('📝 Adicione JWT_SECRET=sua_chave_secreta no arquivo .env');
      console.log('💡 Exemplo: JWT_SECRET=minha_chave_super_secreta_123');
      return;
    }
    console.log('✅ JWT_SECRET configurado');
    console.log('');

    // Baseado nos logs, o usuário atual é c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f
    console.log('📋 ANÁLISE DOS LOGS:');
    console.log('   Usuário atual logado:', USUARIO_ATUAL);
    console.log('   Usuário admin esperado:', USUARIO_ADMIN_ESPERADO);
    console.log('   Email:', EMAIL);
    console.log('');

    // Gerar token para o usuário atual (que está sendo usado nos logs)
    console.log('🔑 Gerando token para o usuário atual...');
    
    const payload = {
      userId: USUARIO_ATUAL,
      email: EMAIL,
      role: 'admin',
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60) // 24 horas
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET);
    console.log('✅ Token JWT gerado com sucesso!');
    console.log('');

    // Atualizar arquivo de teste
    console.log('📝 Atualizando arquivo de teste...');
    const fs = require('fs');
    const testFile = 'test-alexsander-admin.js';
    
    if (fs.existsSync(testFile)) {
      let testContent = fs.readFileSync(testFile, 'utf8');
      
      // Atualizar o ID do usuário
      testContent = testContent.replace(
        /const ALEXSANDER_USER_ID = '[^']*'/,
        `const ALEXSANDER_USER_ID = '${USUARIO_ATUAL}'`
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

    // Resumo final
    console.log('🎯 RESUMO:');
    console.log('==========');
    console.log('✅ Token JWT gerado para produção');
    console.log('✅ Usuário ID:', USUARIO_ATUAL);
    console.log('✅ Email:', EMAIL);
    console.log('✅ Role: admin');
    console.log('✅ Arquivo de teste atualizado');
    console.log('');
    console.log('🔑 TOKEN JWT:');
    console.log(token);
    console.log('');
    console.log('📋 PRÓXIMOS PASSOS:');
    console.log('1. Execute no banco de produção:');
    console.log('   UPDATE users SET role = \'admin\' WHERE id = \'' + USUARIO_ATUAL + '\';');
    console.log('   INSERT INTO controller_admins (user_id, created_at) VALUES (\'' + USUARIO_ATUAL + '\', NOW()) ON CONFLICT DO NOTHING;');
    console.log('');
    console.log('2. Teste o login no frontend com este token');
    console.log('3. Verifique se consegue acessar o controller');
    console.log('');
    console.log('🌐 Para testar no frontend:');
    console.log('Authorization: Bearer ' + token);
    console.log('');
    console.log('⚠️ IMPORTANTE:');
    console.log('   - Este token é para o usuário que já está logado nos logs');
    console.log('   - Você precisa atualizar o banco de produção para dar role admin');
    console.log('   - Ou usar o usuário admin esperado (05703665...) se preferir');

  } catch (error) {
    console.error('❌ Erro ao gerar token:', error.message);
  }
}

// Função para gerar token para o usuário admin esperado
function gerarTokenAdminEsperado() {
  console.log('\n🔧 GERANDO TOKEN PARA USUÁRIO ADMIN ESPERADO');
  console.log('=============================================\n');

  try {
    if (!process.env.JWT_SECRET) {
      console.log('❌ JWT_SECRET não está configurado!');
      return;
    }

    const payload = {
      userId: USUARIO_ADMIN_ESPERADO,
      email: EMAIL,
      role: 'admin',
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60)
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET);
    
    console.log('🔑 TOKEN PARA USUÁRIO ADMIN ESPERADO:');
    console.log(token);
    console.log('');
    console.log('👤 USUÁRIO:');
    console.log('   ID:', USUARIO_ADMIN_ESPERADO);
    console.log('   Email:', EMAIL);
    console.log('   Role: admin');
    console.log('');
    console.log('📋 Para usar este token, você precisa:');
    console.log('1. Criar o usuário no banco de produção');
    console.log('2. Dar role admin');
    console.log('3. Adicionar à tabela controller_admins');

  } catch (error) {
    console.error('❌ Erro ao gerar token:', error.message);
  }
}

if (process.argv.includes('--esperado')) {
  gerarTokenAdminEsperado();
} else if (process.argv.includes('--help')) {
  console.log('📖 AJUDA:');
  console.log('node gerar-token-admin-producao.js          - Gerar token para usuário atual');
  console.log('node gerar-token-admin-producao.js --esperado - Gerar token para usuário admin esperado');
  console.log('node gerar-token-admin-producao.js --help   - Mostrar ajuda');
} else {
  gerarTokenAdminProducao();
} 