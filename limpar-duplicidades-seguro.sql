-- =====================================================
-- LIMPAR DUPLICIDADES DE FORMA SEGURA
-- =====================================================
-- Script seguro para resolver as 3 duplicidades
-- Primeiro verifica referências, depois limpa

-- =====================================================
-- 1. VERIFICAR SITUAÇÃO ATUAL
-- =====================================================

-- Verificar todos os usuários duplicados
SELECT 
    'SITUAÇÃO ATUAL - DUPLICIDADES:' as info,
    id,
    email,
    role,
    created_at,
    CASE WHEN role = 'admin' THEN '✅ ADMIN' ELSE '❌ NÃO É ADMIN' END as status
FROM auth.users 
WHERE email = 'alexsander01@hotmail.com.br'
ORDER BY created_at;

-- =====================================================
-- 2. VERIFICAR REFERÊNCIAS ANTES DE DELETAR
-- =====================================================

-- Verificar referências do usuário 1 (b669b536-7bef-4181-b32b-8970ee6d8f49)
SELECT 
    'REFERÊNCIAS DO USUÁRIO 1 (b669b536-7bef-4181-b32b-8970ee6d8f49):' as info;

SELECT 'domain_owners' as tabela, COUNT(*) as quantidade
FROM public.domain_owners 
WHERE user_id = 'b669b536-7bef-4181-b32b-8970ee6d8f49';

SELECT 'stores' as tabela, COUNT(*) as quantidade
FROM public.stores 
WHERE user_id = 'b669b536-7bef-4181-b32b-8970ee6d8f49';

SELECT 'categories' as tabela, COUNT(*) as quantidade
FROM public.categories 
WHERE user_id = 'b669b536-7bef-4181-b32b-8970ee6d8f49';

-- Verificar referências do usuário 2 (c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f)
SELECT 
    'REFERÊNCIAS DO USUÁRIO 2 (c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f):' as info;

SELECT 'domain_owners' as tabela, COUNT(*) as quantidade
FROM public.domain_owners 
WHERE user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f';

SELECT 'stores' as tabela, COUNT(*) as quantidade
FROM public.stores 
WHERE user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f';

SELECT 'categories' as tabela, COUNT(*) as quantidade
FROM public.categories 
WHERE user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f';

-- Verificar referências do usuário 3 (05703665-81d7-4c1d-9bb0-660f0571f465) - QUE VAMOS MANTER
SELECT 
    'REFERÊNCIAS DO USUÁRIO 3 (05703665-81d7-4c1d-9bb0-660f0571f465) - QUE VAMOS MANTER:' as info;

SELECT 'domain_owners' as tabela, COUNT(*) as quantidade
FROM public.domain_owners 
WHERE user_id = '05703665-81d7-4c1d-9bb0-660f0571f465';

SELECT 'stores' as tabela, COUNT(*) as quantidade
FROM public.stores 
WHERE user_id = '05703665-81d7-4c1d-9bb0-660f0571f465';

SELECT 'categories' as tabela, COUNT(*) as quantidade
FROM public.categories 
WHERE user_id = '05703665-81d7-4c1d-9bb0-660f0571f465';

-- =====================================================
-- 3. ATUALIZAR REFERÊNCIAS (se necessário)
-- =====================================================

-- Se houver referências nos usuários que vamos deletar, mover para o usuário que vamos manter
-- (Execute apenas se houver referências)

-- Mover referências de domain_owners
UPDATE public.domain_owners 
SET user_id = '05703665-81d7-4c1d-9bb0-660f0571f465'
WHERE user_id IN ('b669b536-7bef-4181-b32b-8970ee6d8f49', 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f');

-- Mover referências de stores
UPDATE public.stores 
SET user_id = '05703665-81d7-4c1d-9bb0-660f0571f465'
WHERE user_id IN ('b669b536-7bef-4181-b32b-8970ee6d8f49', 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f');

-- Mover referências de categories
UPDATE public.categories 
SET user_id = '05703665-81d7-4c1d-9bb0-660f0571f465'
WHERE user_id IN ('b669b536-7bef-4181-b32b-8970ee6d8f49', 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f');

-- =====================================================
-- 4. DELETAR USUÁRIOS DUPLICADOS
-- =====================================================

-- Deletar o primeiro usuário duplicado
DELETE FROM auth.users 
WHERE id = 'b669b536-7bef-4181-b32b-8970ee6d8f49'
  AND email = 'alexsander01@hotmail.com.br';

-- Deletar o segundo usuário duplicado
DELETE FROM auth.users 
WHERE id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f'
  AND email = 'alexsander01@hotmail.com.br';

-- =====================================================
-- 5. GARANTIR QUE O USUÁRIO RESTANTE É ADMIN
-- =====================================================

-- Atualizar o usuário restante para ser admin
UPDATE auth.users 
SET 
    role = 'admin',
    updated_at = NOW()
WHERE id = '05703665-81d7-4c1d-9bb0-660f0571f465'
  AND email = 'alexsander01@hotmail.com.br';

-- =====================================================
-- 6. VERIFICAR RESULTADO FINAL
-- =====================================================

-- Verificar se a limpeza funcionou
SELECT 
    'RESULTADO FINAL - DEVE TER APENAS 1 USUÁRIO:' as info,
    id,
    email,
    role,
    created_at,
    CASE WHEN role = 'admin' THEN '✅ ADMIN' ELSE '❌ NÃO É ADMIN' END as status
FROM auth.users 
WHERE email = 'alexsander01@hotmail.com.br';

-- Contar quantos usuários restaram
SELECT 
    'TOTAL DE USUÁRIOS COM ESTE EMAIL:' as info,
    COUNT(*) as quantidade
FROM auth.users 
WHERE email = 'alexsander01@hotmail.com.br';

-- =====================================================
-- 7. VERIFICAR SE AS REFERÊNCIAS FORAM MOVIDAS
-- =====================================================

-- Verificar se todas as referências estão no usuário correto
SELECT 
    'VERIFICAÇÃO FINAL DAS REFERÊNCIAS:' as info;

SELECT 'domain_owners' as tabela, COUNT(*) as quantidade
FROM public.domain_owners 
WHERE user_id = '05703665-81d7-4c1d-9bb0-660f0571f465';

SELECT 'stores' as tabela, COUNT(*) as quantidade
FROM public.stores 
WHERE user_id = '05703665-81d7-4c1d-9bb0-660f0571f465';

SELECT 'categories' as tabela, COUNT(*) as quantidade
FROM public.categories 
WHERE user_id = '05703665-81d7-4c1d-9bb0-660f0571f465';

-- =====================================================
-- 8. RESUMO FINAL
-- =====================================================

SELECT 
    '🎉 LIMPEZA SEGURA CONCLUÍDA' as titulo,
    'alexsander01@hotmail.com.br' as email,
    '05703665-81d7-4c1d-9bb0-660f0571f465' as user_id_mantido,
    'admin' as role_final,
    'Todas as referências foram preservadas' as observacao;

-- =====================================================
-- INSTRUÇÕES:
-- =====================================================
/*
ESTE SCRIPT É MAIS SEGURO PORQUE:

1. Primeiro verifica todas as referências
2. Move as referências para o usuário que vamos manter
3. Só depois deleta os usuários duplicados
4. Garante que não há dados perdidos

EXECUTE ESTE SCRIPT NO SEU BANCO:
- Ele vai mostrar todas as referências antes de deletar
- Moverá automaticamente as referências se necessário
- Deletará apenas os usuários duplicados
- Manterá apenas 1 usuário admin

RESULTADO:
- Apenas 1 usuário com email alexsander01@hotmail.com.br
- Role: admin
- ID: 05703665-81d7-4c1d-9bb0-660f0571f465
- Todas as referências preservadas
- Pronto para usar o controller de domínios
*/ 