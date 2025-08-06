const fs = require('fs');
const { execSync } = require('child_process');

console.log('🚀 CONFIGURANDO E EXECUTANDO TUDO AUTOMATICAMENTE');
console.log('================================================\n');

// Verificar se o arquivo .env existe
const envFile = '.env';
const envExists = fs.existsSync(envFile);

if (!envExists) {
  console.log('📝 Criando arquivo .env...');
  
  const envContent = `# =====================================================
# CONFIGURAÇÕES DO BANCO DE DADOS
# =====================================================

# URL do banco de produção (substitua pelos seus dados reais)
DATABASE_URL="postgresql://seu_usuario:sua_senha@seu_host:5432/seu_banco"

# =====================================================
# CONFIGURAÇÕES JWT
# =====================================================

# Chave secreta para JWT (substitua por uma chave real)
JWT_SECRET="sua_chave_super_secreta_para_jwt_123456789"

# =====================================================
# CONFIGURAÇÕES DO SERVIDOR
# =====================================================

# Porta do servidor
PORT=3000

# Ambiente
NODE_ENV=production

# =====================================================
# INSTRUÇÕES:
# =====================================================
# 1. Substitua DATABASE_URL pelos dados reais do seu banco
# 2. Substitua JWT_SECRET por uma chave secreta real
# 3. Execute: node executar-tudo-automatico.js
# =====================================================`;

  fs.writeFileSync(envFile, envContent);
  console.log('✅ Arquivo .env criado');
  console.log('');
}

// Ler o arquivo .env atual
let envContent = fs.readFileSync(envFile, 'utf8');

// Verificar se DATABASE_URL está configurado
if (envContent.includes('seu_usuario:sua_senha@seu_host:5432/seu_banco')) {
  console.log('⚠️ DATABASE_URL não está configurado!');
  console.log('');
  console.log('📋 CONFIGURAÇÃO NECESSÁRIA:');
  console.log('1. Abra o arquivo .env');
  console.log('2. Substitua a linha DATABASE_URL pelos dados reais do seu banco');
  console.log('3. Exemplo: DATABASE_URL="postgresql://usuario:senha@host:5432/banco"');
  console.log('');
  console.log('💡 ONDE ENCONTRAR OS DADOS:');
  console.log('- Railway: Dashboard > Seu projeto > Variables');
  console.log('- Supabase: Settings > Database > Connection string');
  console.log('- Render: Dashboard > Seu serviço > Environment');
  console.log('');
  console.log('🔧 DEPOIS DE CONFIGURAR:');
  console.log('Execute: node executar-tudo-automatico.js');
  console.log('');
  console.log('❌ EXECUÇÃO INTERROMPIDA - Configure o DATABASE_URL primeiro');
  return;
}

// Verificar se JWT_SECRET está configurado
if (envContent.includes('sua_chave_super_secreta_para_jwt_123456789')) {
  console.log('⚠️ JWT_SECRET não está configurado!');
  console.log('');
  console.log('📋 CONFIGURAÇÃO NECESSÁRIA:');
  console.log('1. Abra o arquivo .env');
  console.log('2. Substitua JWT_SECRET por uma chave secreta real');
  console.log('3. Exemplo: JWT_SECRET="minha_chave_super_secreta_123"');
  console.log('');
  console.log('🔧 DEPOIS DE CONFIGURAR:');
  console.log('Execute: node executar-tudo-automatico.js');
  console.log('');
  console.log('❌ EXECUÇÃO INTERROMPIDA - Configure o JWT_SECRET primeiro');
  return;
}

console.log('✅ Configurações verificadas');
console.log('🚀 Executando tudo automaticamente...');
console.log('');

try {
  // Executar o script principal
  execSync('node executar-tudo-automatico.js', { stdio: 'inherit' });
} catch (error) {
  console.log('');
  console.log('❌ Erro durante a execução');
  console.log('');
  console.log('🔧 POSSÍVEIS SOLUÇÕES:');
  console.log('1. Verifique se o DATABASE_URL está correto');
  console.log('2. Verifique se o banco está acessível');
  console.log('3. Verifique se as credenciais estão corretas');
  console.log('4. Execute: node executar-tudo-automatico.js --help');
} 