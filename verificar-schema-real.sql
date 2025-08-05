-- =====================================================
-- VERIFICAR SCHEMA REAL DAS TABELAS
-- =====================================================

-- =====================================================
-- 1. VERIFICAR QUAIS TABELAS TÊM USER_ID
-- =====================================================

-- Verificar tabelas que têm user_id
SELECT 
    table_name,
    column_name,
    data_type
FROM information_schema.columns 
WHERE table_schema = 'public' 
AND column_name = 'user_id'
ORDER BY table_name;

-- =====================================================
-- 2. VERIFICAR ESTRUTURA DE CADA TABELA
-- =====================================================

-- Verificar estrutura da tabela categories
SELECT 
    column_name,
    data_type,
    is_nullable
FROM information_schema.columns 
WHERE table_schema = 'public' 
AND table_name = 'categories'
ORDER BY ordinal_position;

-- Verificar estrutura da tabela customers
SELECT 
    column_name,
    data_type,
    is_nullable
FROM information_schema.columns 
WHERE table_schema = 'public' 
AND table_name = 'customers'
ORDER BY ordinal_position;

-- Verificar estrutura da tabela products
SELECT 
    column_name,
    data_type,
    is_nullable
FROM information_schema.columns 
WHERE table_schema = 'public' 
AND table_name = 'products'
ORDER BY ordinal_position;

-- Verificar estrutura da tabela orders
SELECT 
    column_name,
    data_type,
    is_nullable
FROM information_schema.columns 
WHERE table_schema = 'public' 
AND table_name = 'orders'
ORDER BY ordinal_position;

-- Verificar estrutura da tabela sales
SELECT 
    column_name,
    data_type,
    is_nullable
FROM information_schema.columns 
WHERE table_schema = 'public' 
AND table_name = 'sales'
ORDER BY ordinal_position;

-- Verificar estrutura da tabela stores
SELECT 
    column_name,
    data_type,
    is_nullable
FROM information_schema.columns 
WHERE table_schema = 'public' 
AND table_name = 'stores'
ORDER BY ordinal_position;

-- =====================================================
-- 3. CRIAR USUÁRIO COM ID DO TOKEN
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
-- 4. CORRIGIR APENAS TABELAS QUE TÊM USER_ID
-- =====================================================

-- Corrigir categories (se tiver user_id)
UPDATE public.categories 
SET user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f'
WHERE store_id = (
    SELECT id FROM public.stores WHERE slug = 'catalofacil'
);

-- Corrigir products (se tiver user_id)
UPDATE public.products 
SET user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f'
WHERE store_id = (
    SELECT id FROM public.stores WHERE slug = 'catalofacil'
);

-- Corrigir orders (se tiver user_id)
UPDATE public.orders 
SET user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f'
WHERE store_id = (
    SELECT id FROM public.stores WHERE slug = 'catalofacil'
);

-- Corrigir sales (se tiver user_id)
UPDATE public.sales 
SET user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f'
WHERE store_id = (
    SELECT id FROM public.stores WHERE slug = 'catalofacil'
);

-- Corrigir stores (se tiver user_id)
UPDATE public.stores 
SET user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f'
WHERE slug = 'catalofacil';

-- =====================================================
-- INSTRUÇÕES:
-- =====================================================
/*
1. Execute a seção 1 para ver quais tabelas têm user_id
2. Execute a seção 2 para ver a estrutura de cada tabela
3. Execute a seção 3 para criar o usuário
4. Execute a seção 4 para corrigir apenas as tabelas que têm user_id

PROBLEMA:
- Nem todas as tabelas têm user_id
- Precisamos verificar o schema real primeiro
*/ 