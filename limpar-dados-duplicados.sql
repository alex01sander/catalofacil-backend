-- =====================================================
-- SCRIPT PARA LIMPAR DADOS DUPLICADOS - DBEAVER
-- =====================================================
-- Execute este script no DBeaver para limpar dados duplicados
-- e manter apenas a loja catalofacil.catalofacil.com.br

-- =====================================================
-- 1. VERIFICAR DADOS ATUAIS
-- =====================================================

-- Verificar usuário
SELECT 
    id,
    email,
    role,
    created_at
FROM auth.users 
WHERE email = 'alexsander01@hotmail.com.br';

-- Verificar lojas
SELECT 
    s.id,
    s.name,
    s.slug,
    s.domain,
    s.created_at,
    u.email as owner_email
FROM public.stores s
LEFT JOIN auth.users u ON s.user_id = u.id
WHERE u.email = 'alexsander01@hotmail.com.br';

-- Verificar configurações
SELECT 
    ss.id,
    ss.store_name,
    ss.store_description,
    ss.created_at,
    u.email as owner_email
FROM public.store_settings ss
LEFT JOIN auth.users u ON ss.user_id = u.id
WHERE u.email = 'alexsander01@hotmail.com.br';

-- Verificar produtos
SELECT 
    p.id,
    p.name,
    p.store_id,
    s.name as store_name,
    s.slug as store_slug
FROM public.products p
LEFT JOIN public.stores s ON p.store_id = s.id
LEFT JOIN auth.users u ON p.user_id = u.id
WHERE u.email = 'alexsander01@hotmail.com.br';

-- Verificar categorias
SELECT 
    c.id,
    c.name,
    c.store_id,
    s.name as store_name,
    s.slug as store_slug
FROM public.categories c
LEFT JOIN public.stores s ON c.store_id = s.id
LEFT JOIN auth.users u ON c.user_id = u.id
WHERE u.email = 'alexsander01@hotmail.com.br';

-- =====================================================
-- 2. IDENTIFICAR LOJA CORRETA
-- =====================================================

-- Obter ID da loja correta (catalofacil)
SELECT 
    id as loja_correta_id,
    name as loja_correta_nome,
    slug as loja_correta_slug
FROM public.stores 
WHERE slug = 'catalofacil' 
LIMIT 1;

-- =====================================================
-- 3. EXECUTAR LIMPEZA (DESCOMENTE AS LINHAS ABAIXO)
-- =====================================================

/*
-- 3.1 Remover configurações duplicadas (manter apenas a primeira)
DELETE FROM public.store_settings 
WHERE user_id = (
    SELECT id FROM auth.users WHERE email = 'alexsander01@hotmail.com.br'
) 
AND id NOT IN (
    SELECT MIN(id) 
    FROM public.store_settings 
    WHERE user_id = (
        SELECT id FROM auth.users WHERE email = 'alexsander01@hotmail.com.br'
    )
);

-- 3.2 Corrigir produtos para a loja correta
UPDATE public.products 
SET store_id = (
    SELECT id FROM public.stores WHERE slug = 'catalofacil'
)
WHERE user_id = (
    SELECT id FROM auth.users WHERE email = 'alexsander01@hotmail.com.br'
)
AND store_id != (
    SELECT id FROM public.stores WHERE slug = 'catalofacil'
);

-- 3.3 Corrigir categorias para a loja correta
UPDATE public.categories 
SET store_id = (
    SELECT id FROM public.stores WHERE slug = 'catalofacil'
)
WHERE user_id = (
    SELECT id FROM auth.users WHERE email = 'alexsander01@hotmail.com.br'
)
AND store_id != (
    SELECT id FROM public.stores WHERE slug = 'catalofacil'
);

-- 3.4 Remover lojas duplicadas (manter apenas catalofacil)
DELETE FROM public.stores 
WHERE user_id = (
    SELECT id FROM auth.users WHERE email = 'alexsander01@hotmail.com.br'
)
AND slug != 'catalofacil';

-- 3.5 Verificar se há dados órfãos e removê-los
DELETE FROM public.products 
WHERE store_id NOT IN (SELECT id FROM public.stores);

DELETE FROM public.categories 
WHERE store_id NOT IN (SELECT id FROM public.stores);
*/

-- =====================================================
-- 4. VERIFICAR RESULTADO FINAL
-- =====================================================

-- Verificar resultado após limpeza
SELECT 
    'LOJAS' as tipo,
    COUNT(*) as quantidade
FROM public.stores s
LEFT JOIN auth.users u ON s.user_id = u.id
WHERE u.email = 'alexsander01@hotmail.com.br'

UNION ALL

SELECT 
    'CONFIGURAÇÕES' as tipo,
    COUNT(*) as quantidade
FROM public.store_settings ss
LEFT JOIN auth.users u ON ss.user_id = u.id
WHERE u.email = 'alexsander01@hotmail.com.br'

UNION ALL

SELECT 
    'PRODUTOS' as tipo,
    COUNT(*) as quantidade
FROM public.products p
LEFT JOIN auth.users u ON p.user_id = u.id
WHERE u.email = 'alexsander01@hotmail.com.br'

UNION ALL

SELECT 
    'CATEGORIAS' as tipo,
    COUNT(*) as quantidade
FROM public.categories c
LEFT JOIN auth.users u ON c.user_id = u.id
WHERE u.email = 'alexsander01@hotmail.com.br';

-- Verificar se todos os produtos estão na loja correta
SELECT 
    p.name as produto,
    s.name as loja_atual,
    s.slug as loja_slug,
    CASE 
        WHEN s.slug = 'catalofacil' THEN '✅ CORRETO'
        ELSE '❌ INCORRETO'
    END as status
FROM public.products p
LEFT JOIN public.stores s ON p.store_id = s.id
LEFT JOIN auth.users u ON p.user_id = u.id
WHERE u.email = 'alexsander01@hotmail.com.br';

-- =====================================================
-- INSTRUÇÕES DE USO:
-- =====================================================
/*
1. Execute primeiro as consultas da seção 1 para verificar os dados atuais
2. Verifique o ID da loja correta na seção 2
3. Se os dados estiverem corretos, descomente as linhas da seção 3
4. Execute as consultas da seção 4 para verificar o resultado

IMPORTANTE: Faça backup antes de executar as operações de DELETE/UPDATE!
*/ 