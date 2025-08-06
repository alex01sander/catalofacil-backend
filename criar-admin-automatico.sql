-- =====================================================
-- CRIAR ADMIN AUTOMÁTICO - FULANOSANDER
-- =====================================================
-- Script para criar automaticamente o usuário fulanosander@gmail.com
-- Email: fulanosander@gmail.com
-- Senha: 123456
-- Domínio: demo.catalofacil.com.br

-- =====================================================
-- 1. CRIAR USUÁRIO ADMIN COM SENHA
-- =====================================================

-- Criar usuário admin fulanosander com senha criptografada
INSERT INTO auth.users (
    id, 
    email, 
    role, 
    encrypted_password,
    email_confirmed_at,
    created_at, 
    updated_at
)
VALUES (
    '12345678-1234-1234-1234-123456789abc',
    'fulanosander@gmail.com',
    'admin',
    crypt('123456', gen_salt('bf')),
    NOW(),
    NOW(),
    NOW()
)
ON CONFLICT (id) DO UPDATE SET
    email = EXCLUDED.email,
    role = EXCLUDED.role,
    encrypted_password = EXCLUDED.encrypted_password,
    email_confirmed_at = EXCLUDED.email_confirmed_at,
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
-- 5. CRIAR CONFIGURAÇÕES DA LOJA
-- =====================================================

-- Criar configurações da loja
INSERT INTO public.store_settings (
    id,
    user_id,
    store_name,
    store_description,
    store_subtitle,
    mobile_logo,
    desktop_banner,
    mobile_banner_color,
    mobile_banner_image,
    instagram_url,
    whatsapp_number,
    created_at,
    updated_at
)
VALUES (
    gen_random_uuid(),
    '12345678-1234-1234-1234-123456789abc',
    'Demo Catálogo Fácil',
    'Loja de demonstração do Catálogo Fácil',
    'Produtos Incríveis',
    'https://via.placeholder.com/150x50/007bff/ffffff?text=Demo+Catálogo+Fácil',
    'https://via.placeholder.com/1200x300/007bff/ffffff?text=Banner+Demo+Catálogo+Fácil',
    'from-green-400 via-green-500 to-green-600',
    'https://via.placeholder.com/400x200/007bff/ffffff?text=Mobile+Banner',
    'https://instagram.com/demo_catalofacil',
    '5551999999999',
    NOW(),
    NOW()
)
ON CONFLICT (user_id) DO UPDATE SET
    store_name = EXCLUDED.store_name,
    store_description = EXCLUDED.store_description,
    updated_at = NOW();

-- =====================================================
-- 6. VERIFICAR RESULTADO
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
    email_confirmed_at,
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

-- Verificar se as configurações foram criadas
SELECT 
    CASE 
        WHEN user_id IS NOT NULL THEN '✅ CONFIGURAÇÕES CRIADAS'
        ELSE '❌ CONFIGURAÇÕES NÃO CRIADAS'
    END as status_settings,
    store_name,
    store_description,
    whatsapp_number,
    instagram_url,
    created_at
FROM public.store_settings 
WHERE user_id = '12345678-1234-1234-1234-123456789abc';

-- =====================================================
-- RESUMO FINAL
-- =====================================================

SELECT 
    '🎯 RESUMO DA CRIAÇÃO AUTOMÁTICA' as titulo,
    'fulanosander@gmail.com' as email,
    '123456' as senha,
    'demo.catalofacil.com.br' as dominio,
    'Demo Catálogo Fácil' as loja,
    'admin' as role;

-- =====================================================
-- INSTRUÇÕES DE USO:
-- =====================================================
/*
EXECUTE ESTE SCRIPT COMPLETO NO BANCO DE PRODUÇÃO!

APÓS EXECUTAR:
✅ Usuário fulanosander@gmail.com criado com senha 123456
✅ Role admin configurado
✅ Domínio demo.catalofacil.com.br criado
✅ Loja Demo Catálogo Fácil criada
✅ Configurações da loja criadas
✅ Tudo pronto para uso!

PARA LOGIN:
- Email: fulanosander@gmail.com
- Senha: 123456
- Domínio: demo.catalofacil.com.br

PRÓXIMOS PASSOS:
1. Execute este script no banco de produção
2. Teste o login com as credenciais acima
3. Acesse o controller admin
4. Configure o DNS para demo.catalofacil.com.br
*/ 