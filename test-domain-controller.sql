-- =====================================================
-- TESTE DO CONTROLLER DE DOMÍNIOS E USUÁRIOS
-- =====================================================

-- =====================================================
-- 1. VERIFICAR ESTRUTURA DAS TABELAS
-- =====================================================

-- Verificar se a tabela domain_owners existe
SELECT 
    table_name,
    column_name,
    data_type,
    is_nullable
FROM information_schema.columns 
WHERE table_name = 'domain_owners' 
AND table_schema = 'public'
ORDER BY ordinal_position;

-- Verificar se a tabela users existe no schema auth
SELECT 
    table_name,
    column_name,
    data_type,
    is_nullable
FROM information_schema.columns 
WHERE table_name = 'users' 
AND table_schema = 'auth'
ORDER BY ordinal_position;

-- =====================================================
-- 2. TESTE MANUAL DE CADASTRO
-- =====================================================

-- 2.1 Criar usuário de teste
INSERT INTO auth.users (id, email, role, created_at, updated_at)
VALUES (
    gen_random_uuid(),
    'teste@dominio-exemplo.com',
    'admin',
    NOW(),
    NOW()
)
ON CONFLICT (email) DO NOTHING
RETURNING id, email, role;

-- 2.2 Buscar o usuário criado
SELECT 
    id,
    email,
    role,
    created_at
FROM auth.users 
WHERE email = 'teste@dominio-exemplo.com';

-- 2.3 Criar domínio vinculado ao usuário
INSERT INTO public.domain_owners (domain, user_id, domain_type)
VALUES (
    'dominio-exemplo.com',
    (SELECT id FROM auth.users WHERE email = 'teste@dominio-exemplo.com'),
    'domain'
)
ON CONFLICT (domain) DO NOTHING
RETURNING id, domain, user_id, domain_type;

-- =====================================================
-- 3. TESTE DE CONSULTAS
-- =====================================================

-- 3.1 Listar todos os domínios com dados do usuário
SELECT 
    do.id as domain_id,
    do.domain,
    do.domain_type,
    do.created_at as domain_created,
    u.id as user_id,
    u.email as user_email,
    u.role as user_role,
    u.created_at as user_created
FROM public.domain_owners do
LEFT JOIN auth.users u ON do.user_id = u.id
ORDER BY do.created_at DESC;

-- 3.2 Buscar domínio específico
SELECT 
    do.*,
    u.email as owner_email,
    u.role as owner_role
FROM public.domain_owners do
LEFT JOIN auth.users u ON do.user_id = u.id
WHERE do.domain = 'dominio-exemplo.com';

-- 3.3 Contar domínios por tipo
SELECT 
    domain_type,
    COUNT(*) as total
FROM public.domain_owners
GROUP BY domain_type;

-- 3.4 Contar domínios por usuário
SELECT 
    u.email,
    COUNT(do.id) as total_domains
FROM auth.users u
LEFT JOIN public.domain_owners do ON u.id = do.user_id
GROUP BY u.id, u.email
ORDER BY total_domains DESC;

-- =====================================================
-- 4. TESTE DE ATUALIZAÇÃO
-- =====================================================

-- 4.1 Atualizar tipo de domínio
UPDATE public.domain_owners 
SET 
    domain_type = 'subdomain',
    updated_at = NOW()
WHERE domain = 'dominio-exemplo.com'
RETURNING id, domain, domain_type, updated_at;

-- 4.2 Verificar atualização
SELECT 
    domain,
    domain_type,
    updated_at
FROM public.domain_owners 
WHERE domain = 'dominio-exemplo.com';

-- =====================================================
-- 5. TESTE DE VALIDAÇÕES
-- =====================================================

-- 5.1 Tentar criar domínio duplicado (deve falhar)
INSERT INTO public.domain_owners (domain, user_id, domain_type)
VALUES (
    'dominio-exemplo.com',
    (SELECT id FROM auth.users WHERE email = 'teste@dominio-exemplo.com'),
    'domain'
);

-- 5.2 Tentar criar usuário duplicado (deve falhar)
INSERT INTO auth.users (id, email, role, created_at, updated_at)
VALUES (
    gen_random_uuid(),
    'teste@dominio-exemplo.com',
    'admin',
    NOW(),
    NOW()
);

-- 5.3 Tentar vincular domínio a usuário inexistente (deve falhar)
INSERT INTO public.domain_owners (domain, user_id, domain_type)
VALUES (
    'dominio-inexistente.com',
    '00000000-0000-0000-0000-000000000000',
    'domain'
);

-- =====================================================
-- 6. TESTE DE REMOÇÃO
-- =====================================================

-- 6.1 Remover domínio de teste
DELETE FROM public.domain_owners 
WHERE domain = 'dominio-exemplo.com'
RETURNING id, domain;

-- 6.2 Verificar se foi removido
SELECT COUNT(*) as total_domains
FROM public.domain_owners 
WHERE domain = 'dominio-exemplo.com';

-- 6.3 Remover usuário de teste
DELETE FROM auth.users 
WHERE email = 'teste@dominio-exemplo.com'
RETURNING id, email;

-- =====================================================
-- 7. TESTE DE PERFORMANCE
-- =====================================================

-- 7.1 Verificar índices
SELECT 
    indexname,
    indexdef
FROM pg_indexes 
WHERE tablename = 'domain_owners'
AND schemaname = 'public';

-- 7.2 Verificar estatísticas
SELECT 
    schemaname,
    tablename,
    n_tup_ins as inserts,
    n_tup_upd as updates,
    n_tup_del as deletes
FROM pg_stat_user_tables
WHERE tablename = 'domain_owners';

-- =====================================================
-- 8. LIMPEZA FINAL
-- =====================================================

-- Remover dados de teste que possam ter ficado
DELETE FROM public.domain_owners 
WHERE domain LIKE '%exemplo%';

DELETE FROM auth.users 
WHERE email LIKE '%exemplo%';

-- Verificar limpeza
SELECT 
    'domains' as table_name,
    COUNT(*) as total
FROM public.domain_owners 
WHERE domain LIKE '%exemplo%'
UNION ALL
SELECT 
    'users' as table_name,
    COUNT(*) as total
FROM auth.users 
WHERE email LIKE '%exemplo%';

-- =====================================================
-- INSTRUÇÕES DE USO:
-- =====================================================
/*
1. Execute as seções 1-3 para verificar a estrutura e criar dados de teste
2. Execute as seções 4-5 para testar atualizações e validações
3. Execute as seções 6-7 para testar remoção e performance
4. Execute a seção 8 para limpeza

RESULTADOS ESPERADOS:
- Seção 1: Deve mostrar as estruturas das tabelas
- Seção 2: Deve criar usuário e domínio com sucesso
- Seção 3: Deve retornar dados corretos
- Seção 4: Deve atualizar o domínio
- Seção 5: Deve falhar com erros de validação
- Seção 6: Deve remover os dados
- Seção 7: Deve mostrar índices e estatísticas
- Seção 8: Deve limpar todos os dados de teste
*/ 