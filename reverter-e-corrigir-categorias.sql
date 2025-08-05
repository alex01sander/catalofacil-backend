-- =====================================================
-- SCRIPT PARA REVERTER E CORRIGIR CATEGORIAS
-- =====================================================
-- Problema: Alterações incorretas foram feitas
-- Solução: Reverter e corrigir da forma certa

-- =====================================================
-- 1. VERIFICAR SITUAÇÃO ATUAL
-- =====================================================

-- Verificar usuário correto (que já existe)
SELECT 
    id,
    email,
    role,
    created_at
FROM auth.users 
WHERE email = 'alexsander01@hotmail.com.br';

-- Verificar se há usuário duplicado (que pode ter sido criado incorretamente)
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
-- 2. REVERTER ALTERAÇÕES INCORRETAS
-- =====================================================

-- Remover usuário duplicado (se foi criado incorretamente)
DELETE FROM auth.users 
WHERE id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f'
AND email = 'alexsander01@hotmail.com.br';

-- =====================================================
-- 3. CORRIGIR CATEGORIAS PARA O USUÁRIO CORRETO
-- =====================================================

-- Corrigir user_id de todas as categorias para o usuário correto
UPDATE public.categories 
SET user_id = (
    SELECT id FROM auth.users WHERE email = 'alexsander01@hotmail.com.br'
)
WHERE store_id = (
    SELECT id FROM public.stores WHERE slug = 'catalofacil'
);

-- =====================================================
-- 4. VERIFICAR RESULTADO
-- =====================================================

-- Verificar categorias após correção
SELECT 
    c.id,
    c.name,
    c.user_id,
    c.store_id,
    s.name as store_name,
    u.email as owner_email,
    CASE 
        WHEN c.user_id = (SELECT id FROM auth.users WHERE email = 'alexsander01@hotmail.com.br') 
        THEN '✅ CORRETO' 
        ELSE '❌ INCORRETO' 
    END as status
FROM public.categories c
LEFT JOIN public.stores s ON c.store_id = s.id
LEFT JOIN auth.users u ON c.user_id = u.id
WHERE s.slug = 'catalofacil';

-- =====================================================
-- 5. VERIFICAÇÃO FINAL
-- =====================================================

-- Verificar todas as categorias
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

-- =====================================================
-- 6. INFORMAÇÕES PARA O FRONTEND
-- =====================================================

-- Resumo dos IDs corretos
SELECT 
    'USUÁRIO CORRETO' as tipo,
    id as id_correto,
    email
FROM auth.users 
WHERE email = 'alexsander01@hotmail.com.br'

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
2. Execute o DELETE da seção 2 para remover usuário duplicado (se existir)
3. Execute o UPDATE da seção 3 para corrigir categorias
4. Execute as consultas da seção 4 para verificar se funcionou
5. Execute a verificação final da seção 5

PROBLEMA IDENTIFICADO:
- Usuário correto já existe no banco
- Alterações incorretas podem ter criado duplicatas
- Categorias precisam usar o user_id correto

SOLUÇÃO:
- Remover usuário duplicado (se existir)
- Corrigir user_id das categorias para o usuário correto
*/ 