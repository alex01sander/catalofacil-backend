-- =====================================================
-- COMANDO SIMPLES PARA CRIAR USUÁRIO ADMIN
-- =====================================================
-- Execute apenas este comando no seu banco PostgreSQL

INSERT INTO auth.users (id, email, role, created_at, updated_at)
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
-- VERIFICAÇÃO (execute após o comando acima)
-- =====================================================

SELECT 
    '✅ Usuário admin criado!' as status,
    id,
    email,
    role
FROM auth.users 
WHERE id = '05703665-81d7-4c1d-9bb0-660f0571f465'; 