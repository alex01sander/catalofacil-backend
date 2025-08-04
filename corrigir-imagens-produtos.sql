-- =====================================================
-- SCRIPT PARA CORRIGIR IMAGENS DOS PRODUTOS
-- =====================================================
-- Problema: via.placeholder.com não está funcionando
-- Solução: Usar URLs de imagens mais confiáveis

-- =====================================================
-- 1. VERIFICAR IMAGENS ATUAIS
-- =====================================================

-- Verificar produtos e suas imagens atuais
SELECT 
    p.id,
    p.name,
    p.image,
    p.price,
    p.stock,
    p.is_active
FROM public.products p
LEFT JOIN public.stores s ON p.store_id = s.id
LEFT JOIN auth.users u ON p.user_id = u.id
WHERE u.email = 'alexsander01@hotmail.com.br'
ORDER BY p.name;

-- =====================================================
-- 2. CORRIGIR IMAGENS (DESCOMENTE AS LINHAS ABAIXO)
-- =====================================================

/*
-- 2.1 Corrigir imagem da Coca-Cola
UPDATE public.products 
SET image = 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=300&h=300&fit=crop&crop=center'
WHERE name = 'Coca-Cola' 
AND user_id = (SELECT id FROM auth.users WHERE email = 'alexsander01@hotmail.com.br');

-- 2.2 Corrigir imagem da Pepsi
UPDATE public.products 
SET image = 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=300&h=300&fit=crop&crop=center'
WHERE name = 'Pepsi' 
AND user_id = (SELECT id FROM auth.users WHERE email = 'alexsander01@hotmail.com.br');

-- 2.3 Corrigir imagem da Água
UPDATE public.products 
SET image = 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=300&fit=crop&crop=center'
WHERE name = 'Água' 
AND user_id = (SELECT id FROM auth.users WHERE email = 'alexsander01@hotmail.com.br');

-- 2.4 Corrigir imagem do Suco
UPDATE public.products 
SET image = 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=300&h=300&fit=crop&crop=center'
WHERE name = 'Suco' 
AND user_id = (SELECT id FROM auth.users WHERE email = 'alexsander01@hotmail.com.br');

-- 2.5 Corrigir imagem da Heineken
UPDATE public.products 
SET image = 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300&h=300&fit=crop&crop=center'
WHERE name = 'Heineken' 
AND user_id = (SELECT id FROM auth.users WHERE email = 'alexsander01@hotmail.com.br');
*/

-- =====================================================
-- 3. ALTERNATIVA: USAR IMAGENS LOCAIS (DESCOMENTE SE NECESSÁRIO)
-- =====================================================

/*
-- 3.1 Usar imagens locais simples
UPDATE public.products 
SET image = '/images/coca-cola.jpg'
WHERE name = 'Coca-Cola' 
AND user_id = (SELECT id FROM auth.users WHERE email = 'alexsander01@hotmail.com.br');

UPDATE public.products 
SET image = '/images/pepsi.jpg'
WHERE name = 'Pepsi' 
AND user_id = (SELECT id FROM auth.users WHERE email = 'alexsander01@hotmail.com.br');

UPDATE public.products 
SET image = '/images/agua.jpg'
WHERE name = 'Água' 
AND user_id = (SELECT id FROM auth.users WHERE email = 'alexsander01@hotmail.com.br');

UPDATE public.products 
SET image = '/images/suco.jpg'
WHERE name = 'Suco' 
AND user_id = (SELECT id FROM auth.users WHERE email = 'alexsander01@hotmail.com.br');

UPDATE public.products 
SET image = '/images/heineken.jpg'
WHERE name = 'Heineken' 
AND user_id = (SELECT id FROM auth.users WHERE email = 'alexsander01@hotmail.com.br');
*/

-- =====================================================
-- 4. ALTERNATIVA: USAR IMAGENS BASE64 (DESCOMENTE SE NECESSÁRIO)
-- =====================================================

/*
-- 3.1 Usar imagens base64 simples (ícones coloridos)
UPDATE public.products 
SET image = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRkYwMDAwIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+Q29jYS1Db2xhPC90ZXh0Pgo8L3N2Zz4K'
WHERE name = 'Coca-Cola' 
AND user_id = (SELECT id FROM auth.users WHERE email = 'alexsander01@hotmail.com.br');

UPDATE public.products 
SET image = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMDA2NkNDIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+UGVwc2k8L3RleHQ+Cjwvc3ZnPgo='
WHERE name = 'Pepsi' 
AND user_id = (SELECT id FROM auth.users WHERE email = 'alexsander01@hotmail.com.br');

UPDATE public.products 
SET image = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMDA2NkNDIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+4cKwZ3VhPC90ZXh0Pgo8L3N2Zz4K'
WHERE name = 'Água' 
AND user_id = (SELECT id FROM auth.users WHERE email = 'alexsander01@hotmail.com.br');

UPDATE public.products 
SET image = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRkY2NjAwIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+U3VjbzwvdGV4dD4KPC9zdmc+Cg=='
WHERE name = 'Suco' 
AND user_id = (SELECT id FROM auth.users WHERE email = 'alexsander01@hotmail.com.br');

UPDATE public.products 
SET image = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMDBGRjAwIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+SGVpbmVrZW48L3RleHQ+Cjwvc3ZnPgo='
WHERE name = 'Heineken' 
AND user_id = (SELECT id FROM auth.users WHERE email = 'alexsander01@hotmail.com.br');
*/

-- =====================================================
-- 5. VERIFICAR RESULTADO
-- =====================================================

-- Verificar produtos após correção
SELECT 
    p.id,
    p.name,
    p.image,
    p.price,
    p.stock,
    p.is_active,
    CASE 
        WHEN p.image LIKE 'https://%' THEN 'URL Externa'
        WHEN p.image LIKE 'data:%' THEN 'Base64'
        WHEN p.image LIKE '/%' THEN 'Local'
        ELSE 'Outro'
    END as tipo_imagem
FROM public.products p
LEFT JOIN public.stores s ON p.store_id = s.id
LEFT JOIN auth.users u ON p.user_id = u.id
WHERE u.email = 'alexsander01@hotmail.com.br'
ORDER BY p.name;

-- =====================================================
-- INSTRUÇÕES:
-- =====================================================
/*
1. Execute primeiro a consulta da seção 1 para ver as imagens atuais
2. Escolha uma das opções:
   - Seção 2: URLs do Unsplash (mais bonitas, mas dependem de internet)
   - Seção 3: URLs locais (precisam de arquivos no servidor)
   - Seção 4: Base64 (funcionam offline, mas são simples)
3. Descomente a seção escolhida e execute
4. Execute a consulta da seção 5 para verificar o resultado

RECOMENDAÇÃO: Use a seção 4 (Base64) para garantir que funcione sempre!
*/ 