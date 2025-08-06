# 🔧 GUIA PARA CORRIGIR LOGIN DO ADMINISTRADOR

## 📋 PROBLEMA IDENTIFICADO

Baseado nos logs de produção, o problema é que existem **dois usuários diferentes** com o mesmo email:

- **Usuário atual logado**: `c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f` (alexsander01@hotmail.com.br)
- **Usuário admin esperado**: `05703665-81d7-4c1d-9bb0-660f0571f465` (alexsander01@hotmail.com.br)

O token JWT está sendo gerado para o usuário `c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f`, mas este usuário **não tem role admin**, por isso não consegue acessar o controller.

## 🎯 SOLUÇÃO

### Opção 1: Corrigir o usuário atual (RECOMENDADO)

Esta é a solução mais simples, pois usa o usuário que já está logado nos logs.

#### Passo 1: Executar script SQL no banco de produção

Execute o arquivo `corrigir-admin-producao.sql` no seu banco de dados de produção:

```sql
-- 1. Verificar situação atual
SELECT id, email, role FROM users WHERE id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f';

-- 2. Corrigir usuário atual
UPDATE users 
SET role = 'admin', updated_at = NOW()
WHERE id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f';

-- 3. Adicionar à tabela controller_admins
INSERT INTO controller_admins (user_id, created_at)
VALUES ('c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f', NOW())
ON CONFLICT (user_id) DO NOTHING;

-- 4. Verificar resultado
SELECT 
    CASE WHEN role = 'admin' THEN '✅ ADMIN' ELSE '❌ NÃO É ADMIN' END as status,
    id, email, role
FROM users 
WHERE id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f';
```

#### Passo 2: Usar o token JWT gerado

O token JWT já foi gerado automaticamente. Use este token no frontend:

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjNWUwNGMyYS1iM2EyLTRlZjEtOTBkZS0zZGQ4NDMzZDhkNmYiLCJlbWFpbCI6ImFsZXhzYW5kZXIwMUBob3RtYWlsLmNvbS5iciIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc1NDQ4NTc2NywiZXhwIjoxNzU0NTcyMTY3fQ.YEugVugRF5jM7oBxW6BGwkhXEuesmQ8zdwdCYa1iiH4
```

### Opção 2: Usar o usuário admin esperado

Se preferir usar o usuário `05703665-81d7-4c1d-9bb0-660f0571f465`:

#### Passo 1: Criar usuário admin esperado

```sql
-- Criar usuário admin esperado
INSERT INTO users (id, email, role, created_at, updated_at)
VALUES ('05703665-81d7-4c1d-9bb0-660f0571f465', 'alexsander01@hotmail.com.br', 'admin', NOW(), NOW())
ON CONFLICT (id) DO UPDATE SET
    role = 'admin',
    updated_at = NOW();

-- Adicionar à tabela controller_admins
INSERT INTO controller_admins (user_id, created_at)
VALUES ('05703665-81d7-4c1d-9bb0-660f0571f465', NOW())
ON CONFLICT (user_id) DO NOTHING;
```

#### Passo 2: Gerar token para usuário admin esperado

```bash
node gerar-token-admin-producao.js --esperado
```

## 🧪 TESTE

### Teste 1: Verificar no banco

```sql
-- Verificar se o usuário é admin
SELECT 
    CASE WHEN role = 'admin' THEN '✅ ADMIN' ELSE '❌ NÃO É ADMIN' END as status,
    id, email, role
FROM users 
WHERE email = 'alexsander01@hotmail.com.br';

-- Verificar se está na tabela controller_admins
SELECT 
    CASE WHEN user_id IS NOT NULL THEN '✅ NA TABELA' ELSE '❌ NÃO ESTÁ NA TABELA' END as status,
    user_id
FROM controller_admins 
WHERE user_id IN ('c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f', '05703665-81d7-4c1d-9bb0-660f0571f465');
```

### Teste 2: Testar API

```bash
# Testar rota admin
curl -H "Authorization: Bearer SEU_TOKEN_AQUI" \
     https://sua-api.com/admin/dashboard
```

### Teste 3: Testar no frontend

1. Abra o DevTools do navegador
2. Vá para a aba Network
3. Acesse o controller
4. Verifique se não há erro 403 (Acesso Negado)

## 📁 ARQUIVOS CRIADOS

- `corrigir-admin-producao.sql` - Script SQL para corrigir o banco
- `gerar-token-admin-producao.js` - Script para gerar tokens JWT
- `corrigir-usuario-admin.js` - Script completo (requer banco local)
- `GUIA-CORRIGIR-LOGIN-ADMIN.md` - Este guia

## ⚠️ IMPORTANTE

1. **Execute o SQL no banco de produção** antes de testar
2. **Use o token correto** no frontend
3. **Verifique se o usuário tem role admin** após executar o SQL
4. **Teste o acesso ao controller** após as correções

## 🔍 DEBUG

Se ainda houver problemas, verifique:

1. **Logs do servidor** - Procure por erros de autenticação
2. **Token JWT** - Verifique se não expirou
3. **Banco de dados** - Confirme se o usuário tem role admin
4. **Middleware** - Verifique se o middleware de autenticação está funcionando

## 📞 SUPORTE

Se precisar de ajuda adicional:

1. Execute os scripts de teste
2. Verifique os logs do servidor
3. Confirme se o banco foi atualizado corretamente
4. Teste com o token JWT gerado 