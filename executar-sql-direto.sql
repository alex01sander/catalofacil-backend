-- =====================================================
-- EXECUTAR DIRETAMENTE NO BANCO POSTGRESQL
-- =====================================================
-- Este script pode ser executado diretamente no PostgreSQL
-- sem precisar do Docker ou Node.js

-- =====================================================
-- 1. VERIFICAR CONEXÃO E SITUAÇÃO ATUAL
-- =====================================================

-- Verificar se conseguimos acessar o banco
SELECT '✅ Conexão com banco estabelecida' as status;

-- Verificar se a tabela auth.users existe
SELECT 
    CASE 
        WHEN EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'auth' AND table_name = 'users')
        THEN '✅ Tabela auth.users existe'
        ELSE '❌ Tabela auth.users não existe'
    END as status_tabela;

-- Verificar usuário atual (se existe)
SELECT 
    id,
    email,
    role,
    created_at
FROM auth.users 
WHERE id = '05703665-81d7-4c1d-9bb0-660f0571f465'
   OR email = 'alexsander01@hotmail.com.br';

-- =====================================================
-- 2. CRIAR USUÁRIO ADMIN ALEXSANDER
-- =====================================================

-- Criar usuário admin alexsander
INSERT INTO auth.users (
    id, 
    email, 
    role, 
    created_at, 
    updated_at
)
VALUES (
    '05703665-81d7-4c1d-9bb0-660f0571f465',
    'alexsander01@hotmail.com.br',
    'admin',
    NOW(),
    NOW()
)
ON CONFLICT (id) DO UPDATE SET
    email = EXCLUDED.email,
    role = EXCLUDED.role,
    updated_at = NOW();

-- =====================================================
-- 3. VERIFICAR RESULTADO
-- =====================================================

-- Verificar se o usuário foi criado/atualizado
SELECT 
    '✅ Usuário criado/atualizado' as status,
    id,
    email,
    role,
    created_at,
    updated_at
FROM auth.users 
WHERE id = '05703665-81d7-4c1d-9bb0-660f0571f465';

-- =====================================================
-- 4. VERIFICAR PERMISSÕES DE ADMIN
-- =====================================================

-- Verificar se o usuário tem role admin
SELECT 
    CASE 
        WHEN role = 'admin' THEN '✅ ADMIN - ACESSO PERMITIDO'
        ELSE '❌ NÃO É ADMIN - ACESSO NEGADO'
    END as status_admin,
    id,
    email,
    role
FROM auth.users 
WHERE id = '05703665-81d7-4c1d-9bb0-660f0571f465';

-- =====================================================
-- 5. VERIFICAR TABELA DE DOMÍNIOS
-- =====================================================

-- Verificar se a tabela domain_owners existe
SELECT 
    CASE 
        WHEN EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'domain_owners')
        THEN '✅ Tabela domain_owners existe'
        ELSE '❌ Tabela domain_owners não existe'
    END as status_tabela_dominios;

-- Verificar domínios existentes (se houver)
SELECT 
    'Domínios existentes:' as info,
    COUNT(*) as total_dominios
FROM public.domain_owners;

-- =====================================================
-- 6. RESUMO FINAL
-- =====================================================

SELECT 
    '🎉 CONFIGURAÇÃO CONCLUÍDA' as titulo,
    'alexsander01@hotmail.com.br' as email_admin,
    '05703665-81d7-4c1d-9bb0-660f0571f465' as user_id,
    'admin' as role,
    'Agora pode acessar o controller de domínios' as observacao;

-- =====================================================
-- INSTRUÇÕES PARA EXECUTAR:
-- =====================================================
/*
OPÇÕES PARA EXECUTAR ESTE SCRIPT:

1. VIA PSQL (linha de comando):
   psql -h localhost -U postgres -d catalogo -f executar-sql-direto.sql

2. VIA DBEAVER:
   - Abra o DBeaver
   - Conecte ao banco PostgreSQL
   - Abra este arquivo
   - Execute todo o script (Ctrl+Shift+E)

3. VIA PGADMIN:
   - Abra o pgAdmin
   - Conecte ao banco
   - Abra o Query Tool
   - Cole este script e execute

4. VIA OUTRO CLIENTE SQL:
   - Qualquer cliente SQL que suporte PostgreSQL
   - Cole e execute este script

RESULTADO ESPERADO:
- Usuário alexsander01@hotmail.com.br criado como admin
- ID: 05703665-81d7-4c1d-9bb0-660f0571f465
- Role: admin
- Poderá acessar todas as rotas administrativas
*/ 