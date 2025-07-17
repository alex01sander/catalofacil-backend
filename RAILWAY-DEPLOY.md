# 🚂 Deploy no Railway

Este guia te ajudará a fazer deploy do sistema de catálogo no Railway.

## 📋 Pré-requisitos

- Conta no Railway (https://railway.app)
- Git configurado
- Projeto no GitHub/GitLab

## 🚀 Passo a Passo

### 1. **Preparar o Projeto**

```bash
# Instalar dependências
npm install

# Testar build local
npm run build

# Verificar se tudo está funcionando
npm run dev
```

### 2. **Conectar ao Railway**

1. Acesse https://railway.app
2. Faça login com GitHub/GitLab
3. Clique em "New Project"
4. Selecione "Deploy from GitHub repo"
5. Escolha seu repositório

### 3. **Configurar Variáveis de Ambiente**

No Railway Dashboard, vá em "Variables" e adicione:

```env
# Obrigatórias
DATABASE_URL=postgresql://seu_usuario:sua_senha@seu_host:5432/seu_banco
JWT_SECRET=sua_chave_secreta_muito_segura_aqui
NODE_ENV=production

# Opcionais
FRONTEND_URL=https://seu-frontend.railway.app
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
LOG_LEVEL=info
```

### 4. **Configurar Banco de Dados**

1. No Railway, clique em "New"
2. Selecione "Database" → "PostgreSQL"
3. Aguarde a criação
4. Copie a URL do banco (Railway fornece automaticamente)
5. Cole no `DATABASE_URL` nas variáveis de ambiente

### 5. **Configurar Deploy**

O Railway detectará automaticamente que é um projeto Node.js. As configurações já estão no `package.json`:

- **Build Command**: `npm run build`
- **Start Command**: `npm start`
- **Health Check**: `/health`

### 6. **Executar Migrations**

Após o primeiro deploy, execute as migrations:

```bash
# Via Railway CLI
railway run npx prisma migrate deploy

# Ou via Railway Dashboard
# Vá em "Deployments" → "View Logs" → "Execute Command"
# Digite: npx prisma migrate deploy
```

## 🔧 Configurações Específicas

### Domínio Personalizado

1. No Railway, vá em "Settings"
2. Clique em "Domains"
3. Adicione seu domínio
4. Configure DNS conforme instruções

### SSL/HTTPS

O Railway fornece SSL automaticamente para domínios `.railway.app`

### Monitoramento

- **Logs**: Disponível no Railway Dashboard
- **Métricas**: CPU, RAM, etc. no dashboard
- **Health Checks**: Automático via `/health`

## 🚨 Troubleshooting

### Problemas Comuns

1. **Build falha**
   ```bash
   # Verificar logs
   railway logs
   
   # Testar localmente
   npm run build
   ```

2. **Erro de conexão com banco**
   ```bash
   # Verificar DATABASE_URL
   railway variables
   
   # Testar conexão
   railway run npx prisma db pull
   ```

3. **Aplicação não inicia**
   ```bash
   # Verificar logs
   railway logs
   
   # Verificar variáveis
   railway variables
   ```

### Comandos Úteis

```bash
# Instalar Railway CLI
npm install -g @railway/cli

# Login
railway login

# Conectar ao projeto
railway link

# Ver logs
railway logs

# Executar comando
railway run npm run db:migrate

# Abrir no navegador
railway open
```

## 📊 Monitoramento

### Logs
- Acesse o Railway Dashboard
- Vá em "Deployments"
- Clique em "View Logs"

### Métricas
- CPU, RAM, Network
- Disponível no dashboard

### Alertas
- Configure alertas no Railway Dashboard
- Notificações por email/Slack

## 🔄 Deploy Automático

O Railway faz deploy automático quando você faz push para a branch principal.

### Workflow Recomendado

1. **Desenvolvimento**
   ```bash
   git checkout -b feature/nova-funcionalidade
   # Desenvolver...
   git push origin feature/nova-funcionalidade
   ```

2. **Teste**
   - Criar Pull Request
   - Railway fará deploy automático para preview

3. **Produção**
   ```bash
   git checkout main
   git merge feature/nova-funcionalidade
   git push origin main
   # Railway fará deploy automático
   ```

## 💰 Custos

- **Free Tier**: $5 de crédito/mês
- **Pro**: $20/mês
- **Enterprise**: Sob consulta

## 🆘 Suporte

- **Documentação**: https://docs.railway.app
- **Discord**: https://discord.gg/railway
- **Email**: support@railway.app

---

**🎉 Parabéns!** Seu sistema está no ar no Railway! 