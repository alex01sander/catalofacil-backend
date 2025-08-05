-- =====================================================
-- CORRIGIR TODAS AS TABELAS QUE DEPENDEM DO USER_ID
-- =====================================================
-- Problema: Frontend está enviando user_id que não existe
-- User ID do token: c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f

-- =====================================================
-- 1. VERIFICAR TODAS AS TABELAS COM USER_ID
-- =====================================================

-- Verificar tabelas que têm user_id
SELECT 
    table_name,
    column_name
FROM information_schema.columns 
WHERE table_schema = 'public' 
AND column_name = 'user_id'
ORDER BY table_name;

-- =====================================================
-- 2. VERIFICAR SITUAÇÃO ATUAL DE CADA TABELA
-- =====================================================

-- Verificar categories
SELECT 
    'categories' as tabela,
    COUNT(*) as total_registros,
    COUNT(CASE WHEN user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f' THEN 1 END) as registros_corretos
FROM public.categories;

-- Verificar customers
SELECT 
    'customers' as tabela,
    COUNT(*) as total_registros,
    COUNT(CASE WHEN user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f' THEN 1 END) as registros_corretos
FROM public.customers;

-- Verificar products
SELECT 
    'products' as tabela,
    COUNT(*) as total_registros,
    COUNT(CASE WHEN user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f' THEN 1 END) as registros_corretos
FROM public.products;

-- Verificar orders
SELECT 
    'orders' as tabela,
    COUNT(*) as total_registros,
    COUNT(CASE WHEN user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f' THEN 1 END) as registros_corretos
FROM public.orders;

-- Verificar sales
SELECT 
    'sales' as tabela,
    COUNT(*) as total_registros,
    COUNT(CASE WHEN user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f' THEN 1 END) as registros_corretos
FROM public.sales;

-- Verificar stores
SELECT 
    'stores' as tabela,
    COUNT(*) as total_registros,
    COUNT(CASE WHEN user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f' THEN 1 END) as registros_corretos
FROM public.stores;

-- =====================================================
-- 3. CRIAR USUÁRIO COM ID DO TOKEN (SE NÃO EXISTIR)
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
-- 4. CORRIGIR TODAS AS TABELAS
-- =====================================================

-- Corrigir categories
UPDATE public.categories 
SET user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f'
WHERE store_id = (
    SELECT id FROM public.stores WHERE slug = 'catalofacil'
);

-- Corrigir customers
UPDATE public.customers 
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

-- Corrigir orders
UPDATE public.orders 
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

-- Corrigir stores
UPDATE public.stores 
SET user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f'
WHERE slug = 'catalofacil';

-- =====================================================
-- 5. VERIFICAÇÃO FINAL
-- =====================================================

-- Verificar se todas as tabelas estão corretas
SELECT 
    'categories' as tabela,
    COUNT(*) as total,
    COUNT(CASE WHEN user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f' THEN 1 END) as corretos
FROM public.categories
UNION ALL
SELECT 
    'customers' as tabela,
    COUNT(*) as total,
    COUNT(CASE WHEN user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f' THEN 1 END) as corretos
FROM public.customers
UNION ALL
SELECT 
    'products' as tabela,
    COUNT(*) as total,
    COUNT(CASE WHEN user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f' THEN 1 END) as corretos
FROM public.products
UNION ALL
SELECT 
    'orders' as tabela,
    COUNT(*) as total,
    COUNT(CASE WHEN user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f' THEN 1 END) as corretos
FROM public.orders
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
1. Execute a seção 1 para ver todas as tabelas com user_id
2. Execute a seção 2 para ver a situação atual
3. Execute a seção 3 para criar o usuário (se necessário)
4. Execute a seção 4 para corrigir todas as tabelas
5. Execute a seção 5 para verificar o resultado

PROBLEMA:
- Frontend está enviando user_id do token: c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f
- Esse user_id não existe no banco
- Todas as tabelas que dependem de user_id estão falhando

SOLUÇÃO:
- Criar usuário com o ID do token
- Corrigir TODAS as tabelas para usar esse ID
*/ 