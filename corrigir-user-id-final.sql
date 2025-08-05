-- =====================================================
-- SCRIPT FINAL PARA CORRIGIR USER_ID DAS CATEGORIAS
-- =====================================================
-- Problema: Token válido mas user_id não existe no banco
-- User ID do token: c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f
-- Erro: Foreign key constraint violated on categories_user_id_fkey

-- =====================================================
-- 1. VERIFICAR SITUAÇÃO ATUAL
-- =====================================================

-- Verificar usuário correto
SELECT 
    id,
    email,
    role,
    created_at
FROM auth.users 
WHERE email = 'alexsander01@hotmail.com.br';

-- Verificar se o user_id do token existe
SELECT 
    id,
    email,
    role,
    created_at
FROM auth.users 
WHERE id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f';

-- Verificar loja correta
SELECT 
    s.id,
    s.name,
    s.slug,
    s.user_id,
    u.email as owner_email
FROM public.stores s
LEFT JOIN auth.users u ON s.user_id = u.id
WHERE s.slug = 'catalofacil';

-- Verificar categorias existentes
SELECT 
    c.id,
    c.name,
    c.user_id,
    c.store_id,
    s.name as store_name,
    u.email as owner_email
FROM public.categories c
LEFT JOIN public.stores s ON c.store_id = s.id
LEFT JOIN auth.users u ON c.user_id = u.id
WHERE s.slug = 'catalofacil';

-- =====================================================
-- 2. SOLUÇÃO: CRIAR USUÁRIO COM ID DO TOKEN
-- =====================================================

-- Criar usuário com o ID que está no token
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
-- 3. VERIFICAR RESULTADO
-- =====================================================

-- Verificar se o usuário foi criado
SELECT 
    id,
    email,
    role,
    created_at
FROM auth.users 
WHERE id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f';

-- Verificar categorias após correção
SELECT 
    c.id,
    c.name,
    c.user_id,
    c.store_id,
    s.name as store_name,
    u.email as owner_email,
    CASE 
        WHEN c.user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f' 
        THEN '✅ CORRETO' 
        ELSE '❌ INCORRETO' 
    END as status
FROM public.categories c
LEFT JOIN public.stores s ON c.store_id = s.id
LEFT JOIN auth.users u ON c.user_id = u.id
WHERE s.slug = 'catalofacil';

-- =====================================================
-- 4. CORRIGIR CATEGORIAS EXISTENTES (SE NECESSÁRIO)
-- =====================================================

-- Corrigir user_id de todas as categorias da loja catalofacil
UPDATE public.categories 
SET user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f'
WHERE store_id = (
    SELECT id FROM public.stores WHERE slug = 'catalofacil'
);

-- =====================================================
-- 5. VERIFICAÇÃO FINAL
-- =====================================================

-- Verificar todas as categorias
SELECT 
    c.name,
    c.user_id,
    u.email as owner_email,
    CASE 
        WHEN c.user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f' 
        THEN '✅ CORRETO' 
        ELSE '❌ INCORRETO' 
    END as status
FROM public.categories c
LEFT JOIN auth.users u ON c.user_id = u.id
LEFT JOIN public.stores s ON c.store_id = s.id
WHERE s.slug = 'catalofacil';

-- =====================================================
-- 6. INFORMAÇÕES PARA O FRONTEND
-- =====================================================

-- Resumo dos IDs corretos
SELECT 
    'USUÁRIO TOKEN' as tipo,
    'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f' as id_correto,
    'alexsander01@hotmail.com.br' as email

UNION ALL

SELECT 
    'LOJA' as tipo,
    id as id_correto,
    name as email
FROM public.stores 
WHERE slug = 'catalofacil';

-- =====================================================
-- INSTRUÇÕES:
-- =====================================================
/*
1. Execute primeiro as consultas da seção 1 para verificar a situação atual
2. Execute o INSERT da seção 2 para criar o usuário com ID do token
3. Execute as consultas da seção 3 para verificar se funcionou
4. Execute o UPDATE da seção 4 para corrigir categorias existentes
5. Execute a verificação final da seção 5

PROBLEMA IDENTIFICADO:
- Token válido com user_id: c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f
- Mas esse user_id não existe no banco
- Erro: Foreign key constraint violated

SOLUÇÃO:
- Criar usuário com o ID que está no token
- Corrigir user_id das categorias existentes
*/ 