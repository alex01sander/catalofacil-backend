-- =====================================================
-- CRIAR USUÁRIO COM ID QUE O FRONTEND ESTÁ ENVIANDO
-- =====================================================
-- Problema: Frontend está enviando user_id que não existe
-- User ID do frontend: 05703665-81d7-4c1d-9bb0-660f0571f465

-- =====================================================
-- 1. VERIFICAR SITUAÇÃO ATUAL
-- =====================================================

-- Verificar usuário que o frontend está enviando
SELECT 
    id,
    email,
    role,
    created_at
FROM auth.users 
WHERE id = '05703665-81d7-4c1d-9bb0-660f0571f465';

-- Verificar usuário correto que já existe
SELECT 
    id,
    email,
    role,
    created_at
FROM auth.users 
WHERE email = 'alexsander01@hotmail.com.br';

-- =====================================================
-- 2. CRIAR USUÁRIO COM ID DO FRONTEND
-- =====================================================

-- Criar usuário com o ID que o frontend está enviando
INSERT INTO auth.users (id, email, role, created_at, updated_at)
VALUES (
    '05703665-81d7-4c1d-9bb0-660f0571f465',
    'alexsander01@hotmail.com.br',
    'admin',
    NOW(),
    NOW()
)
ON CONFLICT (id) DO NOTHING;

-- =====================================================
-- 3. VERIFICAR RESULTADO
-- =====================================================

-- Verificar se o usuário foi criado
SELECT 
    id,
    email,
    role,
    created_at
FROM auth.users 
WHERE id = '05703665-81d7-4c1d-9bb0-660f0571f465';

-- =====================================================
-- 4. CORRIGIR CATEGORIAS PARA O NOVO USUÁRIO
-- =====================================================

-- Corrigir user_id de todas as categorias para o usuário do frontend
UPDATE public.categories 
SET user_id = '05703665-81d7-4c1d-9bb0-660f0571f465'
WHERE store_id = (
    SELECT id FROM public.stores WHERE slug = 'catalofacil'
);

-- =====================================================
-- 5. VERIFICAÇÃO FINAL
-- =====================================================

-- Verificar categorias
SELECT 
    c.name,
    c.user_id,
    u.email as owner_email,
    CASE 
        WHEN c.user_id = '05703665-81d7-4c1d-9bb0-660f0571f465' 
        THEN '✅ CORRETO' 
        ELSE '❌ INCORRETO' 
    END as status
FROM public.categories c
LEFT JOIN auth.users u ON c.user_id = u.id
LEFT JOIN public.stores s ON c.store_id = s.id
WHERE s.slug = 'catalofacil';

-- =====================================================
-- INSTRUÇÕES:
-- =====================================================
/*
1. Execute o INSERT da seção 2 para criar o usuário
2. Execute o UPDATE da seção 4 para corrigir categorias
3. Execute a verificação da seção 5

PROBLEMA:
- Frontend está enviando user_id: 05703665-81d7-4c1d-9bb0-660f0571f465
- Esse user_id não existe no banco
- Precisamos criar o usuário com esse ID

SOLUÇÃO:
- Criar usuário com o ID que o frontend está enviando
- Corrigir categorias para usar esse ID
*/ 