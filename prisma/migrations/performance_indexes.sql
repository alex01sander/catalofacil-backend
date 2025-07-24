-- Índices para performance otimizada baseados nos queries mais comuns

-- Produtos - índices compostos para queries frequentes
CREATE INDEX IF NOT EXISTS idx_products_user_active_created ON products(user_id, is_active, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_products_user_category ON products(user_id, category_id);
CREATE INDEX IF NOT EXISTS idx_products_store_active ON products(store_id, is_active);
CREATE INDEX IF NOT EXISTS idx_products_name_search ON products USING gin (to_tsvector('portuguese', name));
CREATE INDEX IF NOT EXISTS idx_products_description_search ON products USING gin (to_tsvector('portuguese', description));

-- Vendas - índices para relatórios e filtros
CREATE INDEX IF NOT EXISTS idx_sales_user_date ON sales(user_id, sale_date DESC);
CREATE INDEX IF NOT EXISTS idx_sales_user_status ON sales(user_id, status);
CREATE INDEX IF NOT EXISTS idx_sales_store_date ON sales(store_id, sale_date DESC);
CREATE INDEX IF NOT EXISTS idx_sales_user_created ON sales(user_id, created_at DESC);

-- Categorias - otimização para listagens
CREATE INDEX IF NOT EXISTS idx_categories_user_name ON categories(user_id, name);
CREATE INDEX IF NOT EXISTS idx_categories_store_user ON categories(store_id, user_id);

-- Fluxo de caixa - índices para filtros de data e tipo
CREATE INDEX IF NOT EXISTS idx_cash_flow_user_date ON cash_flow(user_id, date DESC);
CREATE INDEX IF NOT EXISTS idx_cash_flow_user_type ON cash_flow(user_id, type);
CREATE INDEX IF NOT EXISTS idx_cash_flow_user_category ON cash_flow(user_id, category);
CREATE INDEX IF NOT EXISTS idx_cash_flow_store_date ON cash_flow(store_id, date DESC);

-- Lojas - otimização para buscas por slug e domínio
CREATE INDEX IF NOT EXISTS idx_stores_user_created ON stores(user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_stores_slug_lower ON stores(lower(slug));

-- Clientes - índices para buscas
CREATE INDEX IF NOT EXISTS idx_customers_store_owner ON customers(store_owner_id);
CREATE INDEX IF NOT EXISTS idx_customers_store_created ON customers(store_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_customers_phone ON customers(phone) WHERE phone IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_customers_email ON customers(email) WHERE email IS NOT NULL;

-- Pedidos - índices para relatórios
CREATE INDEX IF NOT EXISTS idx_orders_user_status_created ON orders(store_owner_id, status, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_orders_store_created ON orders(store_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_orders_customer_created ON orders(customer_id, created_at DESC);

-- Items de pedido - otimização para relatórios de produtos
CREATE INDEX IF NOT EXISTS idx_order_items_product ON order_items(product_id);
CREATE INDEX IF NOT EXISTS idx_order_items_order_product ON order_items(order_id, product_id);

-- Contas de crédito - índices para consultas por cliente
CREATE INDEX IF NOT EXISTS idx_credit_accounts_user_phone ON credit_accounts(user_id, customer_phone);
CREATE INDEX IF NOT EXISTS idx_credit_accounts_user_status ON credit_accounts(user_id, status);

-- Transações de crédito - índices para relatórios
CREATE INDEX IF NOT EXISTS idx_credit_transactions_account_date ON credit_transactions(credit_account_id, date DESC);
CREATE INDEX IF NOT EXISTS idx_credit_transactions_user_date ON credit_transactions(user_id, date DESC);

-- Despesas - índices para controle financeiro  
CREATE INDEX IF NOT EXISTS idx_expenses_user_due_date ON expenses(user_id, due_date);
CREATE INDEX IF NOT EXISTS idx_expenses_user_status ON expenses(user_id, status);
CREATE INDEX IF NOT EXISTS idx_expenses_store_created ON expenses(store_id, created_at DESC); 