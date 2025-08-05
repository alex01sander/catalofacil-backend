-- =====================================================
-- CRIAR USUÁRIO ALEXSANDER COMO ADMIN
-- =====================================================
-- Script para criar o usuário alexsander01@hotmail.com.br como admin
-- ID: 05703665-81d7-4c1d-9bb0-660f0571f465

-- =====================================================
-- 1. VERIFICAR SITUAÇÃO ATUAL
-- =====================================================

-- Verificar se o usuário já existe
SELECT 
    id,
    email,
    role,
    created_at
FROM auth.users 
WHERE id = '05703665-81d7-4c1d-9bb0-660f0571f465'
   OR email = 'alexsander01@hotmail.com.br';

-- =====================================================
-- 2. CRIAR USUÁRIO ADMIN
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
        WHEN role = 'admin' THEN '✅ ADMIN'
        ELSE '❌ NÃO É ADMIN'
    END as status_admin,
    id,
    email,
    role
FROM auth.users 
WHERE id = '05703665-81d7-4c1d-9bb0-660f0571f465';

-- =====================================================
-- 5. TESTAR ACESSO AO CONTROLLER
-- =====================================================

-- Verificar se o usuário pode acessar rotas admin
-- (Isso será testado via API, não via SQL)

-- =====================================================
-- INSTRUÇÕES DE USO:
-- =====================================================
/*
1. Execute a seção 1 para verificar a situação atual
2. Execute a seção 2 para criar/atualizar o usuário
3. Execute a seção 3 para verificar o resultado
4. Execute a seção 4 para confirmar as permissões

APÓS EXECUTAR ESTE SCRIPT:
- O usuário alexsander01@hotmail.com.br será criado como admin
- ID: 05703665-81d7-4c1d-9bb0-660f0571f465
- Role: admin
- Poderá acessar todas as rotas administrativas

PARA TESTAR:
- Use o token JWT que contém este user_id
- Teste as rotas do controller de domínios
- Verifique se o middleware de autenticação funciona
*/ 