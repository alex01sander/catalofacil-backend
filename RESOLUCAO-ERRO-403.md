# 🔧 Resolução - Erro 403 Token Inválido

## 📋 Problema Identificado

O erro `403 (Forbidden)` com a mensagem "Token inválido" indica que:

1. **Token expirado** (duração de 24h)
2. **JWT_SECRET diferente** entre geração e verificação
3. **Token não está sendo enviado** corretamente pelo frontend

## 🔍 Diagnóstico Rápido

### Passo 1: Executar Script de Diagnóstico
```bash
node debug-auth.js
```

### Passo 2: Verificar Logs do Servidor
No ambiente de produção (Render), verificar os logs:
- Procurar por mensagens de `🔐 Tentativa de autenticação`
- Verificar se `JWT_SECRET não configurado` aparece nos logs
- Observar se há mensagens de `Token expirado` vs `Token malformado`

## 🛠️ Soluções por Causa

### 1. **Token Expirado** (Mais Provável)
**Solução:** Fazer novo login no frontend

```javascript
// No frontend, limpar token e redirecionar para login
localStorage.removeItem('token');
window.location.href = '/login';
```

### 2. **JWT_SECRET Alterado na Produção**
**Solução:** Verificar e sincronizar JWT_SECRET

```bash
# No Render Dashboard:
# 1. Ir em Environment Variables
# 2. Verificar se JWT_SECRET está definido
# 3. Deve ser o mesmo usado durante desenvolvimento
```

### 3. **Problema no Envio do Token**
**Solução:** Verificar formato do header Authorization

```javascript
// Frontend deve enviar assim:
headers: {
  'Authorization': `Bearer ${token}` // Note o espaço após "Bearer"
}
```

## 🚀 Soluções Imediatas

### Solução 1: Regenerar Token (RECOMENDADO)
```bash
# 1. Acessar rota de login para obter novo token
curl -X POST https://catalofacil-backend.onrender.com/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"alexsander01@hotmail.com.br","password":"123456"}'

# 2. Usar o novo token no frontend
```

### Solução 2: Verificar Configurações de Produção
```bash
# Verificar se as variáveis estão configuradas no Render:
# - JWT_SECRET (deve ter pelo menos 32 caracteres)
# - DATABASE_URL
# - NODE_ENV=production
```

### Solução 3: Restart do Serviço
```bash
# No Render Dashboard:
# 1. Ir na aba "Settings"
# 2. Clicar em "Manual Deploy"
# 3. Aguardar o redeploy completar
```

## 🔧 Alterações no Código

### Logs Adicionados
Adicionei logs detalhados no middleware de autenticação que mostrarão:
- URL e método da requisição
- Presença do header Authorization
- Tipo específico de erro JWT
- Informações do token decodificado (para debug)

### Novos Endpoints de Diagnóstico

#### `/auth/verify` - Verificar Token
```bash
curl -X GET https://catalofacil-backend.onrender.com/auth/verify \
  -H "Authorization: Bearer SEU_TOKEN_AQUI"
```

#### `/auth/debug-token` - Debug Detalhado
```bash
curl -X POST https://catalofacil-backend.onrender.com/auth/debug-token \
  -H "Content-Type: application/json" \
  -d '{"token":"SEU_TOKEN_AQUI"}'
```

## 📊 Monitoramento

### 1. Verificar Logs em Tempo Real
No Render Dashboard → Logs, procurar por:
- `✅ Login realizado:` - logins bem-sucedidos
- `❌ Erro na verificação do token:` - problemas de autenticação
- `🔐 Tentativa de autenticação:` - todas as tentativas

### 2. Testar Endpoints Críticos
```bash
# Testar as rotas que estavam falhando:
curl -H "Authorization: Bearer TOKEN" https://catalofacil-backend.onrender.com/products
curl -H "Authorization: Bearer TOKEN" https://catalofacil-backend.onrender.com/categorias
curl -H "Authorization: Bearer TOKEN" https://catalofacil-backend.onrender.com/fluxo-caixa
```

## 🎯 Próximos Passos

1. **Execute o script de diagnóstico**: `node debug-auth.js`
2. **Compile e deploy as alterações**: `npm run build && git push`
3. **Faça um novo login** no frontend para obter token fresco
4. **Monitore os logs** para confirmar se o problema foi resolvido

## 🆘 Se o Problema Persistir

1. Verificar se `JWT_SECRET` no Render é exatamente o mesmo usado no desenvolvimento
2. Confirmar que o token está sendo enviado no formato correto pelo frontend
3. Verificar se não há proxy/CDN alterando os headers HTTP
4. Considerar implementar refresh token para melhor experiência do usuário

---

**Nota:** As alterações no código incluem logs detalhados que ajudarão a identificar exatamente onde está o problema. Após resolver, os logs podem ser removidos ou reduzidos para produção. 