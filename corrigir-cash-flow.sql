-- =====================================================
-- CORRIGIR TABELA CASH_FLOW
-- =====================================================
-- Problema: Apenas 35 de 204 registros estão corretos
-- User ID do token: c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f

-- =====================================================
-- 1. VERIFICAR SITUAÇÃO ATUAL
-- =====================================================

-- Verificar quantos registros têm user_id incorreto
SELECT 
    COUNT(*) as total_registros,
    COUNT(CASE WHEN user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f' THEN 1 END) as corretos,
    COUNT(CASE WHEN user_id != 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f' THEN 1 END) as incorretos
FROM public.cash_flow
WHERE store_id = (
    SELECT id FROM public.stores WHERE slug = 'catalofacil'
);

-- Verificar quais user_ids estão sendo usados
SELECT 
    user_id,
    COUNT(*) as quantidade
FROM public.cash_flow
WHERE store_id = (
    SELECT id FROM public.stores WHERE slug = 'catalofacil'
)
GROUP BY user_id
ORDER BY quantidade DESC;

-- =====================================================
-- 2. CORRIGIR TODOS OS REGISTROS DE CASH_FLOW
-- =====================================================

-- Corrigir TODOS os registros de cash_flow para o user_id correto
UPDATE public.cash_flow 
SET user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f'
WHERE store_id = (
    SELECT id FROM public.stores WHERE slug = 'catalofacil'
);

-- =====================================================
-- 3. VERIFICAÇÃO FINAL
-- =====================================================

-- Verificar se todos os registros foram corrigidos
SELECT 
    'cash_flow' as tabela,
    COUNT(*) as total,
    COUNT(CASE WHEN user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f' THEN 1 END) as corretos,
    COUNT(CASE WHEN user_id != 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f' THEN 1 END) as incorretos
FROM public.cash_flow
WHERE store_id = (
    SELECT id FROM public.stores WHERE slug = 'catalofacil'
);

-- =====================================================
-- INSTRUÇÕES:
-- =====================================================
/*
1. Execute a seção 1 para ver a situação atual
2. Execute a seção 2 para corrigir todos os registros
3. Execute a seção 3 para verificar o resultado

PROBLEMA:
- cash_flow tem 204 registros, mas apenas 35 estão corretos
- Precisamos corrigir os 169 registros restantes

SOLUÇÃO:
- Atualizar TODOS os registros de cash_flow para usar o user_id correto
*/ 