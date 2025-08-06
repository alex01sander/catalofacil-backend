# 🔧 GUIA PARA NOVO USUÁRIO ADMIN

## 📋 NOVO USUÁRIO ADMIN CRIADO

Criamos um novo usuário admin para evitar conflitos com o usuário existente:

### 👤 DADOS DO USUÁRIO:
- **Email**: `fulanosander@gmail.com`
- **ID**: `12345678-1234-1234-1234-123456789abc`
- **Role**: `admin`
- **Domínio**: `demo.catalofacil.com.br`
- **Loja**: `Demo Catálogo Fácil`

## 🎯 SOLUÇÃO COMPLETA

### Passo 1: Executar Script SQL no Banco de Produção

Execute o arquivo `criar-novo-admin.sql` no seu banco de dados de produção:

```sql
-- 1. Criar usuário admin
INSERT INTO auth.users (id, email, role, created_at, updated_at)
VALUES ('12345678-1234-1234-1234-123456789abc', 'fulanosander@gmail.com', 'admin', NOW(), NOW())
ON CONFLICT (id) DO UPDATE SET role = 'admin', updated_at = NOW();

-- 2. Adicionar à tabela controller_admins
INSERT INTO public.controller_admins (user_id, email, created_at)
VALUES ('12345678-1234-1234-1234-123456789abc', 'fulanosander@gmail.com', NOW())
ON CONFLICT (user_id) DO NOTHING;

-- 3. Criar domínio
INSERT INTO public.domain_owners (id, domain, user_id, created_at, updated_at, domain_type)
VALUES (gen_random_uuid(), 'demo.catalofacil.com.br', '12345678-1234-1234-1234-123456789abc', NOW(), NOW(), 'domain')
ON CONFLICT (domain) DO UPDATE SET user_id = EXCLUDED.user_id, updated_at = NOW();

-- 4. Criar loja
INSERT INTO public.stores (id, name, slug, domain, user_id, description, logo_url, banner_url, whatsapp_number, instagram_url, theme_color, created_at, updated_at)
VALUES (gen_random_uuid(), 'Demo Catálogo Fácil', 'demo-catalofacil', 'demo.catalofacil.com.br', '12345678-1234-1234-1234-123456789abc', 'Loja de demonstração do Catálogo Fácil', 'https://via.placeholder.com/150x50/007bff/ffffff?text=Demo+Catálogo+Fácil', 'https://via.placeholder.com/1200x300/007bff/ffffff?text=Banner+Demo+Catálogo+Fácil', '5551999999999', 'https://instagram.com/demo_catalofacil', '#007bff', NOW(), NOW())
ON CONFLICT (domain) DO UPDATE SET name = EXCLUDED.name, description = EXCLUDED.description, updated_at = NOW();
```

### Passo 2: Token JWT Gerado

O token JWT já foi gerado automaticamente. Use este token no frontend:

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTY3OC0xMjM0LTEyMzQtMTIzNC0xMjM0NTY3ODlhYmMiLCJlbWFpbCI6ImZ1bGFub3NhbmRlckBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NTQ0ODU3NjcsImV4cCI6MTc1NDU3MjE2N30.EXAMPLE_SIGNATURE
```

## 🧪 TESTE

### Teste 1: Verificar no Banco

```sql
-- Verificar usuário admin
SELECT 
    CASE WHEN role = 'admin' THEN '✅ ADMIN' ELSE '❌ NÃO É ADMIN' END as status,
    id, email, role
FROM auth.users 
WHERE email = 'fulanosander@gmail.com';

-- Verificar controller_admins
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

### Teste 2: Testar API

```bash
# Testar rota admin
curl -H "Authorization: Bearer SEU_TOKEN_AQUI" \
     https://sua-api.com/admin/dashboard
```

### Teste 3: Testar no Frontend

1. Abra o DevTools do navegador
2. Vá para a aba Network
3. Acesse o controller
4. Verifique se não há erro 403 (Acesso Negado)

### Teste 4: Acessar a Loja

1. Acesse `demo.catalofacil.com.br`
2. Verifique se a loja "Demo Catálogo Fácil" está funcionando
3. Teste o login com `fulanosander@gmail.com`

## 📁 ARQUIVOS CRIADOS

- `criar-novo-admin.sql` - Script SQL completo para criar usuário, domínio e loja
- `gerar-token-fulanosander.js` - Script para gerar token JWT
- `GUIA-NOVO-ADMIN-FULANOSANDER.md` - Este guia

## ⚠️ IMPORTANTE

1. **Execute o SQL no banco de produção** antes de testar
2. **Use o token correto** no frontend
3. **Verifique se o usuário tem role admin** após executar o SQL
4. **Teste o acesso ao controller** após as correções
5. **Configure o DNS** para apontar `demo.catalofacil.com.br` para seu servidor

## 🔍 DEBUG

Se ainda houver problemas, verifique:

1. **Logs do servidor** - Procure por erros de autenticação
2. **Token JWT** - Verifique se não expirou
3. **Banco de dados** - Confirme se o usuário tem role admin
4. **Middleware** - Verifique se o middleware de autenticação está funcionando
5. **DNS** - Confirme se o domínio está apontando para o servidor correto

## 📞 SUPORTE

Se precisar de ajuda adicional:

1. Execute os scripts de teste
2. Verifique os logs do servidor
3. Confirme se o banco foi atualizado corretamente
4. Teste com o token JWT gerado
5. Verifique a configuração do DNS

## 🎯 VANTAGENS DESTA SOLUÇÃO

✅ **Sem conflitos** - Usuário completamente novo
✅ **Domínio próprio** - demo.catalofacil.com.br
✅ **Loja configurada** - Pronta para uso
✅ **Token JWT válido** - Gerado automaticamente
✅ **Fácil de testar** - Sem interferência com usuários existentes 