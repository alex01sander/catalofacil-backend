# 🏷️ GUIA PARA CORRIGIR PROBLEMA DAS CATEGORIAS

## 📋 **PROBLEMA IDENTIFICADO**

O frontend está enviando um `user_id` que não existe no banco de dados:
- **Erro**: `P2003 - Usuário não existe no banco`
- **User ID enviado**: `811a031a-866e-4c12-84dd-9894960b466e`
- **Token contém ID**: `c5e04c2a-b3a2-4ef1-90de-3dd843d8d6f`
- **Usuário correto**: `alexsander01@hotmail.com.br`

---

## 🚀 **SOLUÇÃO RÁPIDA**

### **OPÇÃO 1: Corrigir no Backend (Recomendado)**

Execute este comando no **DBeaver**:

```sql
-- Corrigir user_id de todas as categorias da loja catalofacil
UPDATE public.categories 
SET user_id = (
    SELECT id FROM auth.users WHERE email = 'alexsander01@hotmail.com.br'
)
WHERE store_id = (
    SELECT id FROM public.stores WHERE slug = 'catalofacil'
);
```

### **OPÇÃO 2: Criar Usuário com ID do Frontend**

Se preferir manter o ID que o frontend está enviando:

```sql
-- Criar usuário com o ID que o frontend está enviando
INSERT INTO auth.users (id, email, role, created_at, updated_at)
VALUES (
    '811a031a-866e-4c12-84dd-9894960b466e',
    'alexsander01@hotmail.com.br',
    'admin',
    NOW(),
    NOW()
);
```

---

## 🔍 **VERIFICAÇÃO**

### **Antes da Correção**
```sql
-- Verificar usuário correto
SELECT id, email FROM auth.users 
WHERE email = 'alexsander01@hotmail.com.br';

-- Verificar categorias
SELECT c.name, c.user_id, u.email as owner_email
FROM public.categories c
LEFT JOIN auth.users u ON c.user_id = u.id
LEFT JOIN public.stores s ON c.store_id = s.id
WHERE s.slug = 'catalofacil';
```

### **Depois da Correção**
```sql
-- Verificar se a correção funcionou
SELECT 
    c.name,
    c.user_id,
    u.email as owner_email,
    CASE 
        WHEN c.user_id = (SELECT id FROM auth.users WHERE email = 'alexsander01@hotmail.com.br') 
        THEN '✅ CORRETO' 
        ELSE '❌ INCORRETO' 
    END as status
FROM public.categories c
LEFT JOIN auth.users u ON c.user_id = u.id
LEFT JOIN public.stores s ON c.store_id = s.id
WHERE s.slug = 'catalofacil';
```

---

## 📋 **INFORMAÇÕES IMPORTANTES**

### **IDs Corretos:**
- **Usuário**: `alexsander01@hotmail.com.br`
- **Loja**: `catalofacil`
- **Store ID**: (será mostrado na consulta)

### **Token Atual:**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM1ZTA0YzJhLWIzYTItNGVmMS05MGRlLTNkZDg0MzNkOGQ2ZiIsImVtYWlsIjoiYWxleHNhbmRlcjAxQGhvdG1haWwuY29tLmJyIiwiaWF0IjoxNzU0MzQwMDQ4LCJleHAiOjE3NTQ0MjY0NDh9.-rA0Tp0tSB5ch7jjayVxulbzcgz4kwi5b_hVB7wPyko
```

### **Problema do Token:**
- O token contém ID: `c5e04c2a-b3a2-4ef1-90de-3dd843d8d6f`
- Mas o frontend está enviando: `811a031a-866e-4c12-84dd-9894960b466e`
- Ambos são diferentes do usuário correto

---

## ✅ **RESULTADO ESPERADO**

Após a correção:
- ✅ Categorias têm o user_id correto
- ✅ Frontend consegue criar categorias
- ✅ Não há mais erro `P2003`
- ✅ API `/api/categorias` funciona normalmente

---

## 🔄 **PRÓXIMOS PASSOS**

1. **Execute o UPDATE** no DBeaver (Opção 1)
2. **Verifique o resultado** com as consultas
3. **Teste no frontend** para criar uma categoria
4. **Se ainda der erro**, use a Opção 2

---

## ⚠️ **IMPORTANTE**

- **Faça backup** antes de executar
- **Execute uma opção por vez**
- **Teste no frontend** após cada alteração
- **Se necessário**, ajuste o token no frontend

---

## 🎯 **SOLUÇÃO DEFINITIVA**

Para resolver completamente, você pode:

1. **Corrigir o backend** (Opção 1) - Mais simples
2. **Ajustar o frontend** para usar o ID correto
3. **Criar um novo token** com o ID correto

**🎉 Execute a Opção 1 e o problema das categorias será resolvido!** 