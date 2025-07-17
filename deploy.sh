#!/bin/bash

# Script de Deploy para Produção
# Uso: ./deploy.sh

set -e

echo "🚀 Iniciando deploy para produção..."

# Verificar se o arquivo .env existe
if [ ! -f .env ]; then
    echo "❌ Arquivo .env não encontrado!"
    echo "📝 Copie o arquivo env.example para .env e configure as variáveis"
    exit 1
fi

# Carregar variáveis de ambiente
source .env

# Verificar se as variáveis obrigatórias estão definidas
if [ -z "$JWT_SECRET" ]; then
    echo "❌ JWT_SECRET não está definido no .env"
    exit 1
fi

if [ -z "$DATABASE_URL" ]; then
    echo "❌ DATABASE_URL não está definido no .env"
    exit 1
fi

echo "✅ Variáveis de ambiente verificadas"

# Parar containers existentes
echo "🛑 Parando containers existentes..."
docker-compose down

# Fazer backup do banco (se existir)
if docker-compose ps db | grep -q "Up"; then
    echo "💾 Fazendo backup do banco..."
    docker-compose exec -T db pg_dump -U $POSTGRES_USER $POSTGRES_DB > backup_$(date +%Y%m%d_%H%M%S).sql
fi

# Build das imagens
echo "🔨 Fazendo build das imagens..."
docker-compose build --no-cache

# Subir serviços
echo "⬆️ Subindo serviços..."
docker-compose up -d

# Aguardar banco estar pronto
echo "⏳ Aguardando banco estar pronto..."
sleep 10

# Executar migrations
echo "🔄 Executando migrations..."
docker-compose exec -T backend npx prisma migrate deploy

# Verificar se a aplicação está rodando
echo "🔍 Verificando se a aplicação está rodando..."
sleep 5

if curl -f http://localhost:$PORT > /dev/null 2>&1; then
    echo "✅ Deploy concluído com sucesso!"
    echo "🌐 Aplicação disponível em: http://localhost:$PORT"
else
    echo "❌ Erro: Aplicação não está respondendo"
    echo "📋 Logs do container:"
    docker-compose logs backend
    exit 1
fi

echo "🎉 Deploy finalizado!" 