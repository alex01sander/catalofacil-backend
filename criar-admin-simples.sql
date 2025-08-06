-- Script simples para criar admin e vincular domínio
-- Execute isso diretamente no seu banco de produção

-- 1. Criar usuário admin (sem senha hash por enquanto)
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

-- 2. Adicionar na tabela de admins
INSERT INTO public.controller_admins (user_id, email, created_at)
VALUES ('12345678-1234-1234-1234-123456789abc', 'fulanosander@gmail.com', NOW())
ON CONFLICT (user_id) DO NOTHING;

-- 3. Vincular domínio
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

-- 4. Criar loja para o domínio
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

-- 5. Configurações da loja
INSERT INTO public.store_settings (
    id,
    store_id,
    setting_key,
    setting_value,
    created_at,
    updated_at
)
SELECT 
    gen_random_uuid(),
    s.id,
    'store_enabled',
    'true',
    NOW(),
    NOW()
FROM public.stores s 
WHERE s.domain = 'demo.catalofacil.com.br'
ON CONFLICT (store_id, setting_key) DO UPDATE SET
    setting_value = EXCLUDED.setting_value,
    updated_at = NOW();

-- Verificar se deu certo
SELECT 
    'Usuário criado:' as status,
    u.email,
    u.role
FROM auth.users u 
WHERE u.email = 'fulanosander@gmail.com';

SELECT 
    'Domínio vinculado:' as status,
    d.domain,
    d.user_id
FROM public.domain_owners d 
WHERE d.domain = 'demo.catalofacil.com.br';

SELECT 
    'Loja criada:' as status,
    s.name,
    s.domain
FROM public.stores s 
WHERE s.domain = 'demo.catalofacil.com.br'; 