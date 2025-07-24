#!/bin/bash

echo "🚀 Script de Deploy para Produção - Sistema Catálogo"
echo "=================================================="

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Função para log
log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
}

error() {
    echo -e "${RED}[ERROR] $1${NC}"
}

warning() {
    echo -e "${YELLOW}[WARNING] $1${NC}"
}

info() {
    echo -e "${BLUE}[INFO] $1${NC}"
}

# Verificar se estamos no diretório correto
if [ ! -f "package.json" ]; then
    error "package.json não encontrado. Execute este script na raiz do projeto."
    exit 1
fi

# Verificar variáveis de ambiente essenciais
log "Verificando variáveis de ambiente..."
if [ -z "$DATABASE_URL" ]; then
    error "DATABASE_URL não configurada"
    exit 1
fi

if [ -z "$JWT_SECRET" ]; then
    error "JWT_SECRET não configurada"
    exit 1
fi

# Verificar Node.js e npm
log "Verificando versões..."
node --version
npm --version

# Backup do banco (opcional)
if [ "$BACKUP_ENABLED" = "true" ]; then
    log "Fazendo backup do banco de dados..."
    mkdir -p backups
    pg_dump $DATABASE_URL > "backups/backup_$(date +%Y%m%d_%H%M%S).sql" || warning "Backup falhou"
fi

# Limpar node_modules e reinstalar
log "Limpando dependências antigas..."
rm -rf node_modules package-lock.json

# Instalar dependências
log "Instalando dependências..."
npm ci --production=false

# Executar linting (se disponível)
if npm run lint --silent > /dev/null 2>&1; then
    log "Executando linting..."
    npm run lint
fi

# Gerar cliente Prisma
log "Gerando cliente Prisma..."
npx prisma generate

# Executar migrações
log "Executando migrações do banco..."
npx prisma migrate deploy

# Build da aplicação
log "Compilando aplicação..."
npm run build

# Verificar se o build foi bem-sucedido
if [ ! -d "dist" ]; then
    error "Build falhou - diretório dist não encontrado"
    exit 1
fi

# Testar conexão com banco
log "Testando conexão com banco..."
node -e "
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
prisma.\$connect()
  .then(() => {
    console.log('✅ Conexão com banco OK');
    process.exit(0);
  })
  .catch((e) => {
    console.error('❌ Erro na conexão:', e);
    process.exit(1);
  });
" || { error "Falha na conexão com banco"; exit 1; }

# Verificar se o servidor inicia
log "Testando inicialização do servidor..."
timeout 10s node dist/index.js &
SERVER_PID=$!
sleep 5

if ps -p $SERVER_PID > /dev/null; then
    log "✅ Servidor iniciou com sucesso"
    kill $SERVER_PID
else
    error "❌ Servidor falhou ao iniciar"
    exit 1
fi

# Executar health check
log "Executando health check..."
if command -v curl &> /dev/null; then
    timeout 10s node dist/index.js &
    SERVER_PID=$!
    sleep 3
    
    if curl -f http://localhost:${PORT:-3000}/health > /dev/null 2>&1; then
        log "✅ Health check passou"
    else
        warning "⚠️ Health check falhou"
    fi
    
    kill $SERVER_PID 2>/dev/null
fi

# Limpar arquivos desnecessários para produção
log "Limpando arquivos desnecessários..."
rm -rf src/
rm -rf node_modules/@types/
rm -rf .git/ # apenas se for um deploy final

# Otimizar node_modules para produção
log "Instalando apenas dependências de produção..."
npm ci --production=true

log "🎉 Deploy para produção concluído com sucesso!"
log "📋 Próximos passos:"
echo "   1. Configure as variáveis de ambiente no servidor"
echo "   2. Configure o proxy reverso (nginx)"
echo "   3. Configure SSL/TLS"
echo "   4. Configure monitoramento"
echo "   5. Configure backup automático"
echo ""
info "Para iniciar o servidor: npm start"
info "Para iniciar em produção: NODE_ENV=production npm run start" 