# 🚀 Guia de Deploy para Produção

Este guia contém todas as instruções necessárias para colocar o sistema de catálogo em produção.

## 📋 Pré-requisitos

- Docker e Docker Compose instalados
- Acesso a um servidor Linux
- Domínio configurado (opcional, mas recomendado)
- Certificado SSL (recomendado)

## 🔧 Configuração Inicial

### 1. Configurar Variáveis de Ambiente

```bash
# Copiar arquivo de exemplo
cp env.example .env

# Editar o arquivo .env com suas configurações
nano .env
```

**Variáveis obrigatórias:**
- `JWT_SECRET`: Chave secreta para JWT (mínimo 32 caracteres)
- `DATABASE_URL`: URL de conexão com PostgreSQL
- `NODE_ENV`: Deve ser "production"

### 2. Configurar Banco de Dados

Para usar PostgreSQL local:
```bash
# Usar Docker Compose (recomendado)
docker-compose up -d db

# Ou instalar PostgreSQL no servidor
sudo apt update
sudo apt install postgresql postgresql-contrib
```

### 3. Executar Deploy

```bash
# Tornar o script executável
chmod +x deploy.sh

# Executar deploy
./deploy.sh
```

## 🔒 Configurações de Segurança

### Firewall
```bash
# Permitir apenas portas necessárias
sudo ufw allow 22    # SSH
sudo ufw allow 80     # HTTP
sudo ufw allow 443    # HTTPS
sudo ufw allow 3000   # API (se exposta diretamente)
sudo ufw enable
```

### SSL/HTTPS (Recomendado)
```bash
# Instalar Certbot
sudo apt install certbot

# Obter certificado
sudo certbot certonly --standalone -d seu-dominio.com

# Configurar renovação automática
sudo crontab -e
# Adicionar: 0 12 * * * /usr/bin/certbot renew --quiet
```

## 📊 Monitoramento

### Logs
```bash
# Ver logs em tempo real
docker-compose logs -f backend

# Ver logs do banco
docker-compose logs -f db
```

### Health Checks
```bash
# Verificar status dos serviços
docker-compose ps

# Testar endpoint de saúde
curl http://localhost:3000/
```

## 🔄 Backup

### Backup Automático
```bash
# Criar script de backup
cat > backup.sh << 'EOF'
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
docker-compose exec -T db pg_dump -U postgres catalogo > backup_$DATE.sql
gzip backup_$DATE.sql
# Enviar para storage externo (opcional)
# aws s3 cp backup_$DATE.sql.gz s3://seu-bucket/backups/
EOF

chmod +x backup.sh

# Adicionar ao crontab (backup diário às 2h)
crontab -e
# Adicionar: 0 2 * * * /caminho/para/backup.sh
```

## 🚨 Troubleshooting

### Problemas Comuns

1. **Aplicação não inicia**
   ```bash
   docker-compose logs backend
   ```

2. **Erro de conexão com banco**
   ```bash
   docker-compose logs db
   docker-compose exec db psql -U postgres -d catalogo
   ```

3. **Erro de permissão**
   ```bash
   sudo chown -R $USER:$USER .
   ```

### Rollback
```bash
# Parar aplicação
docker-compose down

# Restaurar backup
docker-compose up -d db
sleep 10
docker-compose exec -T db psql -U postgres -d catalogo < backup_YYYYMMDD_HHMMSS.sql

# Subir versão anterior
docker-compose up -d
```

## 📈 Performance

### Otimizações Recomendadas

1. **Configurar Nginx como proxy reverso**
2. **Usar CDN para assets estáticos**
3. **Configurar cache no Redis (opcional)**
4. **Monitorar uso de recursos**

### Comandos Úteis

```bash
# Ver uso de recursos
docker stats

# Reiniciar serviço específico
docker-compose restart backend

# Atualizar aplicação
git pull
./deploy.sh
```

## 📞 Suporte

Em caso de problemas:
1. Verificar logs: `docker-compose logs`
2. Verificar status: `docker-compose ps`
3. Testar conectividade: `curl http://localhost:3000/`
4. Verificar recursos: `docker stats`

---

**⚠️ Importante:** Sempre teste em ambiente de desenvolvimento antes de fazer deploy em produção! 