-- =====================================================
-- CORRIGIR USUÁRIO ADMIN EM PRODUÇÃO
-- =====================================================
-- Script para corrigir o problema de login do administrador
-- Baseado nos logs: usuário c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f está logado
-- mas precisa ter role admin para acessar o controller

-- =====================================================
-- 1. VERIFICAR SITUAÇÃO ATUAL
-- =====================================================

-- Verificar usuário atual (que está logado nos logs)
SELECT 
    id,
    email,
    role,
    created_at,
    updated_at
FROM auth.users 
WHERE id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f';

-- Verificar se está na tabela controller_admins
SELECT 
    user_id,
    created_at
FROM public.controller_admins 
WHERE user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f';

-- =====================================================
-- 2. CORRIGIR USUÁRIO ATUAL
-- =====================================================

-- Atualizar role para admin
UPDATE auth.users 
SET 
    role = 'admin',
    updated_at = NOW()
WHERE id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f';

-- =====================================================
-- 3. ADICIONAR À TABELA CONTROLLER_ADMINS
-- =====================================================

-- Adicionar à tabela controller_admins (se não existir)
INSERT INTO public.controller_admins (user_id, email, created_at)
VALUES ('c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f', 'alexsander01@hotmail.com.br', NOW())
ON CONFLICT (user_id) DO NOTHING;

-- =====================================================
-- 4. VERIFICAR RESULTADO
-- =====================================================

-- Verificar se o usuário foi corrigido
SELECT 
    CASE 
        WHEN role = 'admin' THEN '✅ ADMIN'
        ELSE '❌ NÃO É ADMIN'
    END as status_admin,
    id,
    email,
    role,
    updated_at
FROM auth.users 
WHERE id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f';

-- Verificar se está na tabela controller_admins
SELECT 
    CASE 
        WHEN user_id IS NOT NULL THEN '✅ NA TABELA CONTROLLER_ADMINS'
        ELSE '❌ NÃO ESTÁ NA TABELA'
    END as status_controller,
    user_id,
    email,
    created_at
FROM public.controller_admins 
WHERE user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f';

-- =====================================================
-- 5. LIMPEZA (OPCIONAL)
-- =====================================================

-- Se quiser remover o usuário admin esperado (opcional)
-- DELETE FROM auth.users WHERE id = '05703665-81d7-4c1d-9bb0-660f0571f465';
-- DELETE FROM public.controller_admins WHERE user_id = '05703665-81d7-4c1d-9bb0-660f0571f465';

-- =====================================================
-- INSTRUÇÕES DE USO:
-- =====================================================
/*
1. Execute a seção 1 para verificar a situação atual
2. Execute a seção 2 para corrigir o role do usuário
3. Execute a seção 3 para adicionar à tabela controller_admins
4. Execute a seção 4 para verificar o resultado

APÓS EXECUTAR ESTE SCRIPT:
- O usuário c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f será admin
- Poderá acessar o controller com o token JWT gerado
- O login funcionará corretamente

TOKEN JWT GERADO:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjNWUwNGMyYS1iM2EyLTRlZjEtOTBkZS0zZGQ4NDMzZDhkNmYiLCJlbWFpbCI6ImFsZXhzYW5kZXIwMUBob3RtYWlsLmNvbS5iciIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc1NDQ4NTc2NywiZXhwIjoxNzU0NTcyMTY3fQ.YEugVugRF5jM7oBxW6BGwkhXEuesmQ8zdwdCYa1iiH4

PARA TESTAR:
- Use o token no header: Authorization: Bearer <token>
- Teste o acesso ao controller
- Verifique se consegue acessar as rotas administrativas
*/ 