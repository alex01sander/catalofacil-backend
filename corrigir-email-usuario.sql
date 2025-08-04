-- =====================================================
-- SCRIPT PARA CORRIGIR EMAIL DO USUÁRIO
-- =====================================================
-- Problema: Dados estão associados ao email admin@catalofacil.com.br
-- Solução: Atualizar para alexsander01@hotmail.com.br

-- =====================================================
-- 1. VERIFICAR SITUAÇÃO ATUAL
-- =====================================================

-- Verificar usuário atual (admin@catalofacil.com.br)
SELECT 
    id,
    email,
    role,
    created_at
FROM auth.users 
WHERE email = 'admin@catalofacil.com.br';

-- Verificar se existe usuário com email alexsander01@hotmail.com.br
SELECT 
    id,
    email,
    role,
    created_at
FROM auth.users 
WHERE email = 'alexsander01@hotmail.com.br';

-- Verificar lojas do usuário admin
SELECT 
    s.id,
    s.name,
    s.slug,
    s.domain,
    s.created_at,
    u.email as owner_email
FROM public.stores s
LEFT JOIN auth.users u ON s.user_id = u.id
WHERE u.email = 'admin@catalofacil.com.br';

-- Verificar configurações do usuário admin
SELECT 
    ss.id,
    ss.store_name,
    ss.store_description,
    ss.created_at,
    u.email as owner_email
FROM public.store_settings ss
LEFT JOIN auth.users u ON ss.user_id = u.id
WHERE u.email = 'admin@catalofacil.com.br';

-- Verificar produtos do usuário admin
SELECT 
    p.id,
    p.name,
    p.store_id,
    s.name as store_name,
    s.slug as store_slug,
    u.email as owner_email
FROM public.products p
LEFT JOIN public.stores s ON p.store_id = s.id
LEFT JOIN auth.users u ON p.user_id = u.id
WHERE u.email = 'admin@catalofacil.com.br';

-- =====================================================
-- 2. EXECUTAR CORREÇÃO (DESCOMENTE AS LINHAS ABAIXO)
-- =====================================================

/*
-- 2.1 Atualizar email do usuário admin para alexsander01@hotmail.com.br
UPDATE auth.users 
SET email = 'alexsander01@hotmail.com.br'
WHERE email = 'admin@catalofacil.com.br';

-- 2.2 Verificar se a atualização funcionou
SELECT 
    id,
    email,
    role,
    created_at
FROM auth.users 
WHERE email = 'alexsander01@hotmail.com.br';
*/

-- =====================================================
-- 3. VERIFICAR RESULTADO FINAL
-- =====================================================

-- Verificar usuário após correção
SELECT 
    id,
    email,
    role,
    created_at
FROM auth.users 
WHERE email = 'alexsander01@hotmail.com.br';

-- Verificar lojas após correção
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

-- Verificar configurações após correção
SELECT 
    ss.id,
    ss.store_name,
    ss.store_description,
    ss.created_at,
    u.email as owner_email
FROM public.store_settings ss
LEFT JOIN auth.users u ON ss.user_id = u.id
WHERE u.email = 'alexsander01@hotmail.com.br';

-- Verificar produtos após correção
SELECT 
    p.id,
    p.name,
    p.store_id,
    s.name as store_name,
    s.slug as store_slug,
    u.email as owner_email
FROM public.products p
LEFT JOIN public.stores s ON p.store_id = s.id
LEFT JOIN auth.users u ON p.user_id = u.id
WHERE u.email = 'alexsander01@hotmail.com.br';

-- =====================================================
-- 4. RESUMO FINAL
-- =====================================================

-- Resumo de todos os dados para o email correto
SELECT 
    'USUÁRIO' as tipo,
    COUNT(*) as quantidade
FROM auth.users 
WHERE email = 'alexsander01@hotmail.com.br'

UNION ALL

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
WHERE u.email = 'alexsander01@hotmail.com.br';

-- =====================================================
-- INSTRUÇÕES:
-- =====================================================
/*
1. Execute primeiro as consultas da seção 1 para verificar a situação atual
2. Descomente as linhas da seção 2 para executar a correção
3. Execute as consultas da seção 3 para verificar o resultado
4. Execute a consulta da seção 4 para ver o resumo final

RESULTADO ESPERADO:
- USUÁRIO: 1 (alexsander01@hotmail.com.br)
- LOJAS: 1 (Catálogo Fácil)
- CONFIGURAÇÕES: 1 (Britto)
- PRODUTOS: 5 (todos os produtos)

IMPORTANTE: Faça backup antes de executar!
*/ 