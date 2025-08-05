-- =====================================================
-- CORRIGIR APENAS TABELAS QUE REALMENTE TÊM USER_ID
-- =====================================================
-- Baseado na verificação real do schema
-- User ID do token: c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f

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
-- 2. CORRIGIR TODAS AS TABELAS QUE TÊM USER_ID
-- =====================================================

-- Corrigir cash_flow
UPDATE public.cash_flow 
SET user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f'
WHERE store_id = (
    SELECT id FROM public.stores WHERE slug = 'catalofacil'
);

-- Corrigir categories
UPDATE public.categories 
SET user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f'
WHERE store_id = (
    SELECT id FROM public.stores WHERE slug = 'catalofacil'
);

-- Corrigir controller_admins
UPDATE public.controller_admins 
SET user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f'
WHERE store_id = (
    SELECT id FROM public.stores WHERE slug = 'catalofacil'
);

-- Corrigir credit_accounts
UPDATE public.credit_accounts 
SET user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f'
WHERE store_id = (
    SELECT id FROM public.stores WHERE slug = 'catalofacil'
);

-- Corrigir credit_transactions
UPDATE public.credit_transactions 
SET user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f'
WHERE store_id = (
    SELECT id FROM public.stores WHERE slug = 'catalofacil'
);

-- Corrigir domain_owners
UPDATE public.domain_owners 
SET user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f'
WHERE store_id = (
    SELECT id FROM public.stores WHERE slug = 'catalofacil'
);

-- Corrigir expenses
UPDATE public.expenses 
SET user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f'
WHERE store_id = (
    SELECT id FROM public.stores WHERE slug = 'catalofacil'
);

-- Corrigir product_costs
UPDATE public.product_costs 
SET user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f'
WHERE store_id = (
    SELECT id FROM public.stores WHERE slug = 'catalofacil'
);

-- Corrigir products
UPDATE public.products 
SET user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f'
WHERE store_id = (
    SELECT id FROM public.stores WHERE slug = 'catalofacil'
);

-- Corrigir sales
UPDATE public.sales 
SET user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f'
WHERE store_id = (
    SELECT id FROM public.stores WHERE slug = 'catalofacil'
);

-- Corrigir store_settings
UPDATE public.store_settings 
SET user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f'
WHERE store_id = (
    SELECT id FROM public.stores WHERE slug = 'catalofacil'
);

-- Corrigir stores
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
UNION ALL
SELECT 
    'categories' as tabela,
    COUNT(*) as total,
    COUNT(CASE WHEN user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f' THEN 1 END) as corretos
FROM public.categories
UNION ALL
SELECT 
    'products' as tabela,
    COUNT(*) as total,
    COUNT(CASE WHEN user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f' THEN 1 END) as corretos
FROM public.products
UNION ALL
SELECT 
    'sales' as tabela,
    COUNT(*) as total,
    COUNT(CASE WHEN user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f' THEN 1 END) as corretos
FROM public.sales
UNION ALL
SELECT 
    'stores' as tabela,
    COUNT(*) as total,
    COUNT(CASE WHEN user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f' THEN 1 END) as corretos
FROM public.stores;

-- =====================================================
-- INSTRUÇÕES:
-- =====================================================
/*
1. Execute a seção 1 para criar o usuário
2. Execute a seção 2 para corrigir todas as tabelas que têm user_id
3. Execute a seção 3 para verificar o resultado

PROBLEMA:
- Frontend está enviando user_id do token: c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f
- Esse user_id não existe no banco
- Apenas algumas tabelas têm user_id

SOLUÇÃO:
- Criar usuário com o ID do token
- Corrigir APENAS as tabelas que realmente têm user_id
*/ 