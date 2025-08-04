-- =====================================================
-- CONSULTAS SQL PARA DBEAVER - SISTEMA CATÁLOGO FÁCIL
-- =====================================================

-- =====================================================
-- 1. CONSULTAR USUÁRIOS
-- =====================================================

-- Listar todos os usuários
SELECT 
    id,
    email,
    role,
    phone,
    is_super_admin,
    created_at,
    updated_at
FROM auth.users
ORDER BY created_at DESC;

-- Buscar usuário específico por email
SELECT 
    id,
    email,
    role,
    phone,
    is_super_admin,
    created_at
FROM auth.users
WHERE email = 'admin@catalofacil.com.br';

-- Usuários administradores
SELECT 
    id,
    email,
    role,
    created_at
FROM auth.users
WHERE role = 'admin' OR is_super_admin = true;

-- =====================================================
-- 2. CONSULTAR DOMÍNIOS/LOJAS
-- =====================================================

-- Listar todas as lojas
SELECT 
    s.id,
    s.name,
    s.slug,
    s.domain,
    s.description,
    s.theme_color,
    s.created_at,
    u.email as owner_email
FROM public.stores s
LEFT JOIN auth.users u ON s.user_id = u.id
ORDER BY s.created_at DESC;

-- Buscar loja específica por slug
SELECT 
    s.id,
    s.name,
    s.slug,
    s.domain,
    s.description,
    s.logo_url,
    s.banner_url,
    s.whatsapp_number,
    s.instagram_url,
    s.theme_color,
    s.created_at,
    u.email as owner_email
FROM public.stores s
LEFT JOIN auth.users u ON s.user_id = u.id
WHERE s.slug = 'catalofacil';

-- Configurações das lojas
SELECT 
    ss.id,
    ss.store_name,
    ss.store_description,
    ss.store_subtitle,
    ss.instagram_url,
    ss.whatsapp_number,
    ss.mobile_logo,
    ss.desktop_banner,
    ss.mobile_banner_color,
    ss.created_at,
    u.email as owner_email
FROM public.store_settings ss
LEFT JOIN auth.users u ON ss.user_id = u.id
ORDER BY ss.created_at DESC;

-- =====================================================
-- 3. CONSULTAR CATEGORIAS
-- =====================================================

-- Listar todas as categorias
SELECT 
    c.id,
    c.name,
    c.color,
    c.image,
    c.created_at,
    c.store_id,
    s.name as store_name,
    u.email as owner_email
FROM public.categories c
LEFT JOIN public.stores s ON c.store_id = s.id
LEFT JOIN auth.users u ON c.user_id = u.id
ORDER BY c.created_at DESC;

-- Categorias de uma loja específica
SELECT 
    c.id,
    c.name,
    c.color,
    c.image,
    c.created_at,
    COUNT(p.id) as total_products
FROM public.categories c
LEFT JOIN public.products p ON c.id = p.category_id
WHERE c.store_id = '0b094a7e-24cc-456e-912e-178792c3afde'
GROUP BY c.id, c.name, c.color, c.image, c.created_at
ORDER BY c.name;

-- =====================================================
-- 4. CONSULTAR PRODUTOS
-- =====================================================

-- Listar todos os produtos
SELECT 
    p.id,
    p.name,
    p.description,
    p.price,
    p.stock,
    p.is_active,
    p.image,
    p.created_at,
    c.name as category_name,
    s.name as store_name,
    u.email as owner_email
FROM public.products p
LEFT JOIN public.categories c ON p.category_id = c.id
LEFT JOIN public.stores s ON p.store_id = s.id
LEFT JOIN auth.users u ON p.user_id = u.id
ORDER BY p.created_at DESC;

-- Produtos de uma loja específica
SELECT 
    p.id,
    p.name,
    p.description,
    p.price,
    p.stock,
    p.is_active,
    p.image,
    p.created_at,
    c.name as category_name
FROM public.products p
LEFT JOIN public.categories c ON p.category_id = c.id
WHERE p.store_id = '0b094a7e-24cc-456e-912e-178792c3afde'
ORDER BY p.name;

-- Produtos ativos (para vitrine)
SELECT 
    p.id,
    p.name,
    p.description,
    p.price,
    p.stock,
    p.image,
    c.name as category_name
FROM public.products p
LEFT JOIN public.categories c ON p.category_id = c.id
WHERE p.store_id = '0b094a7e-24cc-456e-912e-178792c3afde'
  AND p.is_active = true
ORDER BY p.name;

-- Produtos com estoque baixo (menos de 10)
SELECT 
    p.id,
    p.name,
    p.stock,
    p.price,
    c.name as category_name,
    s.name as store_name
FROM public.products p
LEFT JOIN public.categories c ON p.category_id = c.id
LEFT JOIN public.stores s ON p.store_id = s.id
WHERE p.stock < 10
ORDER BY p.stock ASC;

-- Produtos sem estoque
SELECT 
    p.id,
    p.name,
    p.stock,
    p.price,
    c.name as category_name,
    s.name as store_name
FROM public.products p
LEFT JOIN public.categories c ON p.category_id = c.id
LEFT JOIN public.stores s ON p.store_id = s.id
WHERE p.stock = 0
ORDER BY p.name;

-- =====================================================
-- 5. CONSULTAS COMBINADAS
-- =====================================================

-- Dashboard completo de uma loja
SELECT 
    -- Dados da loja
    s.name as store_name,
    s.slug,
    s.description,
    
    -- Estatísticas
    COUNT(DISTINCT p.id) as total_products,
    COUNT(DISTINCT c.id) as total_categories,
    COUNT(DISTINCT cu.id) as total_customers,
    COUNT(DISTINCT o.id) as total_orders,
    
    -- Produtos ativos
    COUNT(CASE WHEN p.is_active = true THEN 1 END) as active_products,
    
    -- Estoque
    COUNT(CASE WHEN p.stock = 0 THEN 1 END) as out_of_stock,
    COUNT(CASE WHEN p.stock < 10 AND p.stock > 0 THEN 1 END) as low_stock
    
FROM public.stores s
LEFT JOIN public.products p ON s.id = p.store_id
LEFT JOIN public.categories c ON s.id = c.store_id
LEFT JOIN public.customers cu ON s.id = cu.store_id
LEFT JOIN public.orders o ON s.id = o.store_id
WHERE s.slug = 'catalofacil'
GROUP BY s.id, s.name, s.slug, s.description;

-- Relatório de produtos por categoria
SELECT 
    c.name as category_name,
    COUNT(p.id) as total_products,
    COUNT(CASE WHEN p.is_active = true THEN 1 END) as active_products,
    COUNT(CASE WHEN p.stock = 0 THEN 1 END) as out_of_stock,
    AVG(p.price) as average_price,
    SUM(p.stock) as total_stock
FROM public.categories c
LEFT JOIN public.products p ON c.id = p.category_id
WHERE c.store_id = '0b094a7e-24cc-456e-912e-178792c3afde'
GROUP BY c.id, c.name
ORDER BY total_products DESC;

-- =====================================================
-- 6. CONSULTAS DE VENDAS E FINANCEIRO
-- =====================================================

-- Vendas por período
SELECT 
    s.product_name,
    s.quantity,
    s.unit_price,
    s.total_price,
    s.sale_date,
    s.status,
    st.name as store_name
FROM public.sales s
LEFT JOIN public.stores st ON s.store_id = st.id
WHERE s.sale_date BETWEEN '2024-01-01' AND '2024-12-31'
ORDER BY s.sale_date DESC;

-- Resumo financeiro
SELECT 
    COUNT(*) as total_sales,
    SUM(total_price) as total_revenue,
    AVG(total_price) as average_sale,
    SUM(quantity) as total_items_sold
FROM public.sales
WHERE sale_date >= CURRENT_DATE - INTERVAL '30 days';

-- =====================================================
-- 7. CONSULTAS DE CLIENTES
-- =====================================================

-- Listar clientes
SELECT 
    cu.id,
    cu.name,
    cu.email,
    cu.phone,
    cu.address,
    cu.created_at,
    s.name as store_name
FROM public.customers cu
LEFT JOIN public.stores s ON cu.store_id = s.id
ORDER BY cu.created_at DESC;

-- =====================================================
-- 8. CONSULTAS DE PEDIDOS
-- =====================================================

-- Listar pedidos
SELECT 
    o.id,
    o.status,
    o.total_amount,
    o.created_at,
    cu.name as customer_name,
    s.name as store_name
FROM public.orders o
LEFT JOIN public.customers cu ON o.customer_id = cu.id
LEFT JOIN public.stores s ON o.store_id = s.id
ORDER BY o.created_at DESC;

-- =====================================================
-- 9. CONSULTAS DE ADMINISTRADORES
-- =====================================================

-- Listar administradores
SELECT 
    ca.id,
    ca.email,
    ca.created_at,
    u.role,
    u.is_super_admin
FROM public.controller_admins ca
LEFT JOIN auth.users u ON ca.user_id = u.id
ORDER BY ca.created_at DESC;

-- =====================================================
-- 10. CONSULTAS DE DOMÍNIOS
-- =====================================================

-- Listar domínios
SELECT 
    do.id,
    do.domain,
    do.created_at,
    u.email as owner_email
FROM public.domain_owners do
LEFT JOIN auth.users u ON do.user_id = u.id
ORDER BY do.created_at DESC;

-- =====================================================
-- DICAS DE USO NO DBEAVER
-- =====================================================

/*
1. CONECTAR AO BANCO:
   - Host: localhost (ou seu servidor)
   - Port: 5432
   - Database: seu_banco
   - Username: seu_usuario
   - Password: sua_senha

2. EXECUTAR CONSULTAS:
   - Selecione a consulta desejada
   - Pressione Ctrl+Enter ou clique no botão "Execute SQL Script"

3. FILTRAR RESULTADOS:
   - Substitua os valores nas cláusulas WHERE
   - Exemplo: WHERE s.slug = 'sua-loja'

4. EXPORTAR DADOS:
   - Clique com botão direito nos resultados
   - Selecione "Export Data"
   - Escolha formato (CSV, Excel, etc.)

5. SALVAR CONSULTAS:
   - Use Ctrl+S para salvar
   - Organize em arquivos por funcionalidade

6. ÍNDICES ÚTEIS:
   - store_id: '0b094a7e-24cc-456e-912e-178792c3afde' (loja principal)
   - user_id: 'b669b536-7bef-4181-b32b-8970ee6d8f49' (usuário admin)
*/ 