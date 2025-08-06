-- =====================================================
-- CRIAR NOVO USUÁRIO ADMIN
-- =====================================================
-- Script para criar o usuário fulanosander@gmail.com como admin
-- ID: 12345678-1234-1234-1234-123456789abc
-- Domínio: demo.catalofacil.com.br

-- =====================================================
-- 1. CRIAR USUÁRIO ADMIN
-- =====================================================

-- Criar usuário admin fulanosander
INSERT INTO auth.users (
    id, 
    email, 
    role, 
    created_at, 
    updated_at
)
VALUES (
    '12345678-1234-1234-1234-123456789abc',
    'fulanosander@gmail.com',
    'admin',
    NOW(),
    NOW()
)
ON CONFLICT (id) DO UPDATE SET
    email = EXCLUDED.email,
    role = EXCLUDED.role,
    updated_at = NOW();

-- =====================================================
-- 2. ADICIONAR À TABELA CONTROLLER_ADMINS
-- =====================================================

-- Adicionar à tabela controller_admins
INSERT INTO public.controller_admins (user_id, email, created_at)
VALUES ('12345678-1234-1234-1234-123456789abc', 'fulanosander@gmail.com', NOW())
ON CONFLICT (user_id) DO NOTHING;

-- =====================================================
-- 3. CRIAR DOMÍNIO PARA O USUÁRIO
-- =====================================================

-- Criar domínio demo.catalofacil.com.br
INSERT INTO public.domain_owners (
    id,
    domain,
    user_id,
    created_at,
    updated_at,
    domain_type
)
VALUES (
    gen_random_uuid(),
    'demo.catalofacil.com.br',
    '12345678-1234-1234-1234-123456789abc',
    NOW(),
    NOW(),
    'domain'
)
ON CONFLICT (domain) DO UPDATE SET
    user_id = EXCLUDED.user_id,
    updated_at = NOW();

-- =====================================================
-- 4. CRIAR LOJA PARA O DOMÍNIO
-- =====================================================

-- Criar loja para o domínio demo.catalofacil.com.br
INSERT INTO public.stores (
    id,
    name,
    slug,
    domain,
    user_id,
    description,
    logo_url,
    banner_url,
    whatsapp_number,
    instagram_url,
    theme_color,
    created_at,
    updated_at
)
VALUES (
    gen_random_uuid(),
    'Demo Catálogo Fácil',
    'demo-catalofacil',
    'demo.catalofacil.com.br',
    '12345678-1234-1234-1234-123456789abc',
    'Loja de demonstração do Catálogo Fácil',
    'https://via.placeholder.com/150x50/007bff/ffffff?text=Demo+Catálogo+Fácil',
    'https://via.placeholder.com/1200x300/007bff/ffffff?text=Banner+Demo+Catálogo+Fácil',
    '5551999999999',
    'https://instagram.com/demo_catalofacil',
    '#007bff',
    NOW(),
    NOW()
)
ON CONFLICT (domain) DO UPDATE SET
    name = EXCLUDED.name,
    description = EXCLUDED.description,
    updated_at = NOW();

-- =====================================================
-- 5. VERIFICAR RESULTADO
-- =====================================================

-- Verificar se o usuário foi criado
SELECT 
    CASE 
        WHEN role = 'admin' THEN '✅ ADMIN'
        ELSE '❌ NÃO É ADMIN'
    END as status_admin,
    id,
    email,
    role,
    created_at,
    updated_at
FROM auth.users 
WHERE id = '12345678-1234-1234-1234-123456789abc';

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
WHERE user_id = '12345678-1234-1234-1234-123456789abc';

-- Verificar se o domínio foi criado
SELECT 
    CASE 
        WHEN domain IS NOT NULL THEN '✅ DOMÍNIO CRIADO'
        ELSE '❌ DOMÍNIO NÃO CRIADO'
    END as status_domain,
    domain,
    user_id,
    domain_type,
    created_at
FROM public.domain_owners 
WHERE domain = 'demo.catalofacil.com.br';

-- Verificar se a loja foi criada
SELECT 
    CASE 
        WHEN domain IS NOT NULL THEN '✅ LOJA CRIADA'
        ELSE '❌ LOJA NÃO CRIADA'
    END as status_store,
    name,
    slug,
    domain,
    user_id,
    description,
    created_at
FROM public.stores 
WHERE domain = 'demo.catalofacil.com.br';

-- =====================================================
-- INSTRUÇÕES DE USO:
-- =====================================================
/*
1. Execute a seção 1 para criar o usuário admin
2. Execute a seção 2 para adicionar à tabela controller_admins
3. Execute a seção 3 para criar o domínio
4. Execute a seção 4 para criar a loja
5. Execute a seção 5 para verificar o resultado

APÓS EXECUTAR ESTE SCRIPT:
- O usuário fulanosander@gmail.com será criado como admin
- ID: 12345678-1234-1234-1234-123456789abc
- Domínio: demo.catalofacil.com.br
- Loja: Demo Catálogo Fácil
- Poderá acessar o controller com o token JWT gerado

PRÓXIMOS PASSOS:
1. Execute este script no banco de produção
2. Gere um token JWT para este usuário
3. Teste o acesso ao controller
4. Acesse demo.catalofacil.com.br para ver a loja
*/ 