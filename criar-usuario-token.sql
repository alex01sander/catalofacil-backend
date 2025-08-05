-- =====================================================
-- CRIAR USUÁRIO COM ID DO TOKEN
-- =====================================================
-- Problema: Frontend está enviando user_id do token que não existe
-- User ID do token: c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f

-- =====================================================
-- 1. VERIFICAR SITUAÇÃO ATUAL
-- =====================================================

-- Verificar usuário do token
SELECT 
    id,
    email,
    role,
    created_at
FROM auth.users 
WHERE id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f';

-- Verificar usuário correto que já existe
SELECT 
    id,
    email,
    role,
    created_at
FROM auth.users 
WHERE email = 'alexsander01@hotmail.com.br';

-- =====================================================
-- 2. CRIAR USUÁRIO COM ID DO TOKEN
-- =====================================================

-- Criar usuário com o ID do token
INSERT INTO auth.users (id, email, role, created_at, updated_at)
VALUES (
    'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f',
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
WHERE id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f';

-- =====================================================
-- 4. CORRIGIR CATEGORIAS PARA O USUÁRIO DO TOKEN
-- =====================================================

-- Corrigir user_id de todas as categorias para o usuário do token
UPDATE public.categories 
SET user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f'
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
        WHEN c.user_id = 'c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f' 
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
- Frontend está enviando user_id do token: c5e04c2a-b3a2-4ef1-90de-3dd8433d8d6f
- Esse user_id não existe no banco
- Precisamos criar o usuário com esse ID

SOLUÇÃO:
- Criar usuário com o ID do token
- Corrigir categorias para usar esse ID
*/ 