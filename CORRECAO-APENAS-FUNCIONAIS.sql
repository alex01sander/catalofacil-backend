-- =====================================================
-- CORREÇÃO APENAS DAS TABELAS QUE FUNCIONARAM
-- =====================================================
-- Problema: Algumas tabelas não têm store_id
-- Solução: Corrigir apenas as que funcionaram

-- =====================================================
-- 1. CRIAR USUÁRIO COM ID DO TOKEN
-- =====================================================

-- Criar usuário com o ID do token
INSERT INTO auth.users (id, email, role, created_at, updated_at)
VALUES (
    'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f',
    'alexsander01@hotmail.com.br',
    'admin',
    NOW(),
    NOW()
)
ON CONFLICT (id) DO NOTHING;

-- =====================================================
-- 2. CORRIGIR APENAS TABELAS QUE FUNCIONARAM
-- =====================================================

-- Corrigir cash_flow (funcionou)
UPDATE public.cash_flow 
SET user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f'
WHERE store_id = (
    SELECT id FROM public.stores WHERE slug = 'catalofacil'
);

-- Corrigir categories (funcionou)
UPDATE public.categories 
SET user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f'
WHERE store_id = (
    SELECT id FROM public.stores WHERE slug = 'catalofacil'
);

-- Corrigir products (funcionou)
UPDATE public.products 
SET user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f'
WHERE store_id = (
    SELECT id FROM public.stores WHERE slug = 'catalofacil'
);

-- Corrigir sales (funcionou)
UPDATE public.sales 
SET user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f'
WHERE store_id = (
    SELECT id FROM public.stores WHERE slug = 'catalofacil'
);

-- Corrigir stores (funcionou)
UPDATE public.stores 
SET user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f'
WHERE slug = 'catalofacil';

-- =====================================================
-- 3. VERIFICAÇÃO FINAL
-- =====================================================

-- Verificar se todas as tabelas estão corretas
SELECT 
    'cash_flow' as tabela,
    COUNT(*) as total,
    COUNT(CASE WHEN user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f' THEN 1 END) as corretos
FROM public.cash_flow
WHERE store_id = (SELECT id FROM public.stores WHERE slug = 'catalofacil')
UNION ALL
SELECT 
    'categories' as tabela,
    COUNT(*) as total,
    COUNT(CASE WHEN user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f' THEN 1 END) as corretos
FROM public.categories
WHERE store_id = (SELECT id FROM public.stores WHERE slug = 'catalofacil')
UNION ALL
SELECT 
    'products' as tabela,
    COUNT(*) as total,
    COUNT(CASE WHEN user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f' THEN 1 END) as corretos
FROM public.products
WHERE store_id = (SELECT id FROM public.stores WHERE slug = 'catalofacil')
UNION ALL
SELECT 
    'sales' as tabela,
    COUNT(*) as total,
    COUNT(CASE WHEN user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f' THEN 1 END) as corretos
FROM public.sales
WHERE store_id = (SELECT id FROM public.stores WHERE slug = 'catalofacil')
UNION ALL
SELECT 
    'stores' as tabela,
    COUNT(*) as total,
    COUNT(CASE WHEN user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f' THEN 1 END) as corretos
FROM public.stores
WHERE slug = 'catalofacil';

-- =====================================================
-- INSTRUÇÕES:
-- =====================================================
/*
1. Execute TODO o script de uma vez no DBeaver
2. Verifique se todas as tabelas mostram "corretos = total"
3. Teste no frontend:
   - Criar categoria
   - Criar cliente
   - Criar produto
   - Qualquer outra operação

PROBLEMA:
- Algumas tabelas não têm store_id (controller_admins, credit_transactions, domain_owners, store_settings)
- Vamos corrigir apenas as que funcionaram

SOLUÇÃO:
- Criar usuário com o ID do token
- Corrigir APENAS as tabelas que têm store_id e funcionaram
*/ 