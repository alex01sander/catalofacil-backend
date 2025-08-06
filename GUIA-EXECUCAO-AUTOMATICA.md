# 🚀 GUIA DE EXECUÇÃO AUTOMÁTICA

## 📋 CRIAÇÃO AUTOMÁTICA DO ADMIN

Criamos scripts para fazer tudo automaticamente! Você tem duas opções:

### 🎯 OPÇÃO 1: SCRIPT SQL COMPLETO (RECOMENDADO)

Execute o arquivo `criar-admin-automatico.sql` no seu banco de produção:

```sql
-- Execute este arquivo completo no seu banco de produção
-- Ele criará automaticamente:
-- ✅ Usuário admin com senha
-- ✅ Controller admin
-- ✅ Domínio
-- ✅ Loja
-- ✅ Configurações
```

### 🎯 OPÇÃO 2: SCRIPT NODE.JS (SE O BANCO LOCAL ESTIVER RODANDO)

```bash
node criar-admin-automatico.js
```

## 📊 CREDENCIAIS CRIADAS

Após executar qualquer um dos scripts:

### 👤 USUÁRIO ADMIN:
- **Email**: `fulanosander@gmail.com`
- **Senha**: `123456`
- **ID**: `12345678-1234-1234-1234-123456789abc`
- **Role**: `admin`

### 🌐 DOMÍNIO E LOJA:
- **Domínio**: `demo.catalofacil.com.br`
- **Loja**: `Demo Catálogo Fácil`
- **Slug**: `demo-catalofacil`

## 🔧 COMO EXECUTAR NO BANCO DE PRODUÇÃO

### Passo 1: Acesse o banco de produção
```bash
# Via psql
psql -h seu-host -U seu-usuario -d seu-banco

# Via DBeaver ou outro cliente
# Conecte no banco de produção
```

### Passo 2: Execute o script SQL
```sql
-- Copie e cole todo o conteúdo do arquivo criar-admin-automatico.sql
-- Ou execute o arquivo diretamente
```

### Passo 3: Verifique se foi criado
```sql
-- Verificar usuário
SELECT 
    CASE WHEN role = 'admin' THEN '✅ ADMIN' ELSE '❌ NÃO É ADMIN' END as status,
    id, email, role
FROM auth.users 
WHERE email = 'fulanosander@gmail.com';

-- Verificar controller admin
SELECT 
    CASE WHEN user_id IS NOT NULL THEN '✅ NA TABELA' ELSE '❌ NÃO ESTÁ NA TABELA' END as status,
    user_id, email
FROM public.controller_admins 
WHERE user_id = '12345678-1234-1234-1234-123456789abc';

-- Verificar domínio
SELECT 
    CASE WHEN domain IS NOT NULL THEN '✅ DOMÍNIO CRIADO' ELSE '❌ DOMÍNIO NÃO CRIADO' END as status,
    domain, user_id
FROM public.domain_owners 
WHERE domain = 'demo.catalofacil.com.br';

-- Verificar loja
SELECT 
    CASE WHEN domain IS NOT NULL THEN '✅ LOJA CRIADA' ELSE '❌ LOJA NÃO CRIADA' END as status,
    name, slug, domain, user_id
FROM public.stores 
WHERE domain = 'demo.catalofacil.com.br';
```

## 🧪 TESTE APÓS A CRIAÇÃO

### Teste 1: Login no Frontend
1. Acesse o sistema
2. Use as credenciais:
   - Email: `fulanosander@gmail.com`
   - Senha: `123456`

### Teste 2: Acesso ao Controller
1. Após fazer login, acesse o controller admin
2. Verifique se não há erro 403 (Acesso Negado)

### Teste 3: Acesso à Loja
1. Acesse `demo.catalofacil.com.br`
2. Verifique se a loja está funcionando

## 🔑 TOKEN JWT

Após executar o script, gere um token JWT:

```bash
# Execute o script de geração de token
node gerar-token-fulanosander.js
```

Use o token gerado no frontend:
```
Authorization: Bearer [TOKEN_GERADO]
```

## 📁 ARQUIVOS CRIADOS

- `criar-admin-automatico.sql` - Script SQL completo
- `criar-admin-automatico.js` - Script Node.js (requer banco local)
- `gerar-token-fulanosander.js` - Gerador de token JWT
- `GUIA-EXECUCAO-AUTOMATICA.md` - Este guia

## ⚠️ IMPORTANTE

1. **Execute no banco de produção** - Não no local
2. **Verifique as credenciais** após a execução
3. **Teste o login** com as credenciais fornecidas
4. **Configure o DNS** para `demo.catalofacil.com.br`
5. **Gere o token JWT** após criar o usuário

## 🎯 VANTAGENS DA EXECUÇÃO AUTOMÁTICA

✅ **Tudo em um comando** - Script único
✅ **Senha criptografada** - Segurança garantida
✅ **Domínio configurado** - Pronto para uso
✅ **Loja criada** - Com configurações
✅ **Token JWT** - Gerado automaticamente
✅ **Sem conflitos** - Usuário completamente novo

## 🚨 EM CASO DE ERRO

Se houver algum erro:

1. **Verifique a conexão** com o banco
2. **Confirme as permissões** do usuário
3. **Execute as verificações** SQL acima
4. **Gere o token JWT** novamente
5. **Teste o login** com as credenciais

## 📞 SUPORTE

Se precisar de ajuda:

1. Execute as verificações SQL
2. Confirme se o usuário foi criado
3. Teste o login com as credenciais
4. Verifique os logs do servidor
5. Gere um novo token JWT se necessário

---

## 🎉 PRONTO!

Após executar o script, você terá:

- ✅ Usuário admin funcional
- ✅ Domínio configurado
- ✅ Loja pronta
- ✅ Token JWT válido
- ✅ Tudo funcionando automaticamente!

**Execute o script SQL no banco de produção e teste!** 🚀 