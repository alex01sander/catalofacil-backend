const fs = require('fs');
const { execSync } = require('child_process');

console.log('🔍 DETECTANDO BANCO DE PRODUÇÃO AUTOMATICAMENTE');
console.log('===============================================\n');

// Verificar se existe arquivo de configuração do Railway
const railwayJson = 'railway.json';
const renderYaml = 'render.yaml';
const dockerCompose = 'docker-compose.yml';

let databaseUrl = null;
let jwtSecret = null;

console.log('🔍 Procurando configurações de banco...');

// Verificar Railway
if (fs.existsSync(railwayJson)) {
  console.log('✅ Encontrado railway.json');
  try {
    const railwayConfig = JSON.parse(fs.readFileSync(railwayJson, 'utf8'));
    if (railwayConfig.variables && railwayConfig.variables.DATABASE_URL) {
      databaseUrl = railwayConfig.variables.DATABASE_URL;
      console.log('✅ DATABASE_URL encontrado no Railway');
    }
    if (railwayConfig.variables && railwayConfig.variables.JWT_SECRET) {
      jwtSecret = railwayConfig.variables.JWT_SECRET;
      console.log('✅ JWT_SECRET encontrado no Railway');
    }
  } catch (error) {
    console.log('⚠️ Erro ao ler railway.json');
  }
}

// Verificar Render
if (fs.existsSync(renderYaml)) {
  console.log('✅ Encontrado render.yaml');
  try {
    const renderContent = fs.readFileSync(renderYaml, 'utf8');
    const dbMatch = renderContent.match(/DATABASE_URL:\s*(.+)/);
    if (dbMatch) {
      databaseUrl = dbMatch[1].trim();
      console.log('✅ DATABASE_URL encontrado no Render');
    }
    const jwtMatch = renderContent.match(/JWT_SECRET:\s*(.+)/);
    if (jwtMatch) {
      jwtSecret = jwtMatch[1].trim();
      console.log('✅ JWT_SECRET encontrado no Render');
    }
  } catch (error) {
    console.log('⚠️ Erro ao ler render.yaml');
  }
}

// Verificar Docker Compose
if (fs.existsSync(dockerCompose)) {
  console.log('✅ Encontrado docker-compose.yml');
  try {
    const dockerContent = fs.readFileSync(dockerCompose, 'utf8');
    const dbMatch = dockerContent.match(/DATABASE_URL:\s*(.+)/);
    if (dbMatch) {
      databaseUrl = dbMatch[1].trim();
      console.log('✅ DATABASE_URL encontrado no Docker Compose');
    }
    const jwtMatch = dockerContent.match(/JWT_SECRET:\s*(.+)/);
    if (jwtMatch) {
      jwtSecret = jwtMatch[1].trim();
      console.log('✅ JWT_SECRET encontrado no Docker Compose');
    }
  } catch (error) {
    console.log('⚠️ Erro ao ler docker-compose.yml');
  }
}

// Verificar variáveis de ambiente do sistema
if (!databaseUrl && process.env.DATABASE_URL) {
  databaseUrl = process.env.DATABASE_URL;
  console.log('✅ DATABASE_URL encontrado nas variáveis de ambiente');
}

if (!jwtSecret && process.env.JWT_SECRET) {
  jwtSecret = process.env.JWT_SECRET;
  console.log('✅ JWT_SECRET encontrado nas variáveis de ambiente');
}

console.log('');

// Se não encontrou, criar arquivo .env com instruções
if (!databaseUrl || !jwtSecret) {
  console.log('⚠️ Configurações não encontradas automaticamente');
  console.log('');
  console.log('📋 CONFIGURAÇÃO MANUAL NECESSÁRIA:');
  console.log('');
  
  if (!databaseUrl) {
    console.log('❌ DATABASE_URL não encontrado');
    console.log('💡 Onde encontrar:');
    console.log('   - Railway: Dashboard > Seu projeto > Variables');
    console.log('   - Supabase: Settings > Database > Connection string');
    console.log('   - Render: Dashboard > Seu serviço > Environment');
    console.log('   - Heroku: Dashboard > Seu app > Settings > Config Vars');
    console.log('');
  }
  
  if (!jwtSecret) {
    console.log('❌ JWT_SECRET não encontrado');
    console.log('💡 Crie uma chave secreta:');
    console.log('   - Use: node -e "console.log(require(\'crypto\').randomBytes(32).toString(\'hex\'))"');
    console.log('   - Ou use qualquer string secreta');
    console.log('');
  }
  
  console.log('🔧 CONFIGURAÇÃO:');
  console.log('1. Crie um arquivo .env');
  console.log('2. Adicione as linhas:');
  console.log('   DATABASE_URL="sua_url_do_banco"');
  console.log('   JWT_SECRET="sua_chave_secreta"');
  console.log('3. Execute: node executar-tudo-automatico.js');
  console.log('');
  
  // Criar arquivo .env com instruções
  const envContent = `# =====================================================
# CONFIGURAÇÕES NECESSÁRIAS
# =====================================================

# URL do banco de produção (OBRIGATÓRIO)
# Exemplo: DATABASE_URL="postgresql://usuario:senha@host:5432/banco"
DATABASE_URL=""

# Chave secreta para JWT (OBRIGATÓRIO)
# Exemplo: JWT_SECRET="minha_chave_super_secreta_123"
JWT_SECRET=""

# =====================================================
# CONFIGURAÇÕES OPCIONAIS
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

  fs.writeFileSync('.env', envContent);
  console.log('✅ Arquivo .env criado com instruções');
  console.log('');
  console.log('❌ Configure o .env primeiro e depois execute novamente');
  return;
}

// Se encontrou as configurações, criar .env e executar
console.log('✅ Configurações encontradas automaticamente!');
console.log('📝 Criando arquivo .env...');

const envContent = `# =====================================================
# CONFIGURAÇÕES DETECTADAS AUTOMATICAMENTE
# =====================================================

# URL do banco de produção
DATABASE_URL="${databaseUrl}"

# Chave secreta para JWT
JWT_SECRET="${jwtSecret}"

# =====================================================
# CONFIGURAÇÕES OPCIONAIS
# =====================================================

# Porta do servidor
PORT=3000

# Ambiente
NODE_ENV=production

# =====================================================
# EXECUTANDO AUTOMATICAMENTE...
# =====================================================`;

fs.writeFileSync('.env', envContent);
console.log('✅ Arquivo .env criado com as configurações detectadas');
console.log('');

console.log('🚀 EXECUTANDO TUDO AUTOMATICAMENTE...');
console.log('');

try {
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