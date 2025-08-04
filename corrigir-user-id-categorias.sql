-- =====================================================
-- SCRIPT PARA CORRIGIR USER_ID DAS CATEGORIAS
-- =====================================================
-- Problema: Frontend está enviando user_id que não existe no banco
-- Solução: Verificar e corrigir user_id das categorias

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

-- Verificar se o user_id do erro existe
SELECT 
    id,
    email,
    role,
    created_at
FROM auth.users 
WHERE id = '811a031a-866e-4c12-84dd-9894960b466e';

-- =====================================================
-- 2. CORRIGIR USER_ID DAS CATEGORIAS (DESCOMENTE SE NECESSÁRIO)
-- =====================================================

/*
-- Corrigir user_id de todas as categorias da loja catalofacil
UPDATE public.categories 
SET user_id = (
    SELECT id FROM auth.users WHERE email = 'alexsander01@hotmail.com.br'
)
WHERE store_id = (
    SELECT id FROM public.stores WHERE slug = 'catalofacil'
);
*/

-- =====================================================
-- 3. VERIFICAR RESULTADO
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
-- 4. INFORMAÇÕES PARA O FRONTEND
-- =====================================================

-- Resumo dos IDs corretos
SELECT 
    'USUÁRIO' as tipo,
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
-- 5. VERIFICAR TOKEN ATUAL
-- =====================================================

-- Token do erro: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM1ZTA0YzJhLWIzYTItNGVmMS05MGRlLTNkZDg0MzNkOGQ2ZiIsImVtYWlsIjoiYWxleHNhbmRlcjAxQGhvdG1haWwuY29tLmJyIiwiaWF0IjoxNzU0MzQwMDQ4LCJleHAiOjE3NTQ0MjY0NDh9.-rA0Tp0tSB5ch7jjayVxulbzcgz4kwi5b_hVB7wPyko

-- Verificar se o ID do token existe no banco
SELECT 
    id,
    email,
    role,
    created_at
FROM auth.users 
WHERE id = 'c5e04c2a-b3a2-4ef1-90de-3dd843d8d6f';

-- =====================================================
-- INSTRUÇÕES:
-- =====================================================
/*
1. Execute primeiro as consultas da seção 1 para verificar a situação atual
2. Se necessário, descomente e execute o UPDATE da seção 2
3. Execute as consultas da seção 3 para verificar o resultado
4. Use as informações da seção 4 para configurar o frontend
5. Verifique o token na seção 5

PROBLEMA IDENTIFICADO:
- Frontend está enviando user_id: 811a031a-866e-4c12-84dd-9894960b466e
- Token contém ID: c5e04c2a-b3a2-4ef1-90de-3dd843d8d6f
- Usuário correto: alexsander01@hotmail.com.br

SOLUÇÃO:
- Corrigir user_id das categorias para o ID correto
- Ou criar um usuário com o ID que o frontend está enviando
- Ou ajustar o frontend para usar o ID correto
*/ 