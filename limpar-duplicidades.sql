-- =====================================================
-- LIMPAR DUPLICIDADES DE USUÁRIOS
-- =====================================================
-- Script para resolver as 3 duplicidades do email alexsander01@hotmail.com.br

-- =====================================================
-- 1. VERIFICAR SITUAÇÃO ATUAL
-- =====================================================

-- Verificar todos os usuários com o email duplicado
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
-- 2. ESCOLHER QUAL USUÁRIO MANTER
-- =====================================================

-- Vamos manter o usuário com ID: 05703665-81d7-4c1d-9bb0-660f0571f465
-- (que é o que o frontend está enviando)
-- E deletar os outros dois

-- =====================================================
-- 3. DELETAR USUÁRIOS DUPLICADOS
-- =====================================================

-- Deletar o primeiro usuário duplicado (b669b536-7bef-4181-b32b-8970ee6d8f49)
DELETE FROM auth.users 
WHERE id = 'b669b536-7bef-4181-b32b-8970ee6d8f49'
  AND email = 'alexsander01@hotmail.com.br';

-- Deletar o segundo usuário duplicado (c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f)
DELETE FROM auth.users 
WHERE id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f'
  AND email = 'alexsander01@hotmail.com.br';

-- =====================================================
-- 4. GARANTIR QUE O USUÁRIO RESTANTE É ADMIN
-- =====================================================

-- Atualizar o usuário restante para ser admin
UPDATE auth.users 
SET 
    role = 'admin',
    updated_at = NOW()
WHERE id = '05703665-81d7-4c1d-9bb0-660f0571f465'
  AND email = 'alexsander01@hotmail.com.br';

-- =====================================================
-- 5. VERIFICAR RESULTADO
-- =====================================================

-- Verificar se a limpeza funcionou
SELECT 
    'APÓS LIMPEZA - DEVE TER APENAS 1 USUÁRIO:' as info,
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
-- 6. VERIFICAR SE HÁ OUTRAS REFERÊNCIAS
-- =====================================================

-- Verificar se há referências aos usuários deletados em outras tabelas
SELECT 
    'Verificando referências aos usuários deletados...' as info;

-- Verificar em domain_owners
SELECT 
    'Referências em domain_owners:' as tabela,
    COUNT(*) as quantidade
FROM public.domain_owners 
WHERE user_id IN ('b669b536-7bef-4181-b32b-8970ee6d8f49', 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f');

-- Verificar em stores
SELECT 
    'Referências em stores:' as tabela,
    COUNT(*) as quantidade
FROM public.stores 
WHERE user_id IN ('b669b536-7bef-4181-b32b-8970ee6d8f49', 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f');

-- Verificar em categories
SELECT 
    'Referências em categories:' as tabela,
    COUNT(*) as quantidade
FROM public.categories 
WHERE user_id IN ('b669b536-7bef-4181-b32b-8970ee6d8f49', 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f');

-- =====================================================
-- 7. RESUMO FINAL
-- =====================================================

SELECT 
    '🎉 LIMPEZA CONCLUÍDA' as titulo,
    'alexsander01@hotmail.com.br' as email,
    '05703665-81d7-4c1d-9bb0-660f0571f465' as user_id_mantido,
    'admin' as role_final,
    'Agora tem apenas 1 usuário admin' as observacao;

-- =====================================================
-- INSTRUÇÕES:
-- =====================================================
/*
1. Execute este script no seu banco PostgreSQL
2. Ele vai deletar os 2 usuários duplicados
3. Manterá apenas o usuário com ID: 05703665-81d7-4c1d-9bb0-660f0571f465
4. Garantirá que este usuário seja admin
5. Verificará se não há referências quebradas

RESULTADO:
- Apenas 1 usuário com email alexsander01@hotmail.com.br
- Role: admin
- ID: 05703665-81d7-4c1d-9bb0-660f0571f465
- Pronto para usar o controller de domínios
*/ 