# 🗄️ GUIA DE USO DO DBEAVER - SISTEMA CATÁLOGO FÁCIL

## 🔗 **CONEXÃO COM O BANCO**

### **Configuração da Conexão**
1. Abra o DBeaver
2. Clique em "Nova Conexão" (ícone de tomada)
3. Selecione "PostgreSQL"
4. Preencha os dados:
   ```
   Host: localhost (ou seu servidor)
   Port: 5432
   Database: seu_banco_de_dados
   Username: seu_usuario
   Password: sua_senha
   ```

### **Testar Conexão**
- Clique em "Test Connection"
- Se der erro, verifique:
  - Se o PostgreSQL está rodando
  - Se as credenciais estão corretas
  - Se o banco existe

---

## 📊 **ESTRUTURA DO BANCO**

### **Schemas Principais**
- **`auth`**: Usuários e autenticação
- **`public`**: Dados do sistema (produtos, lojas, etc.)

### **Tabelas Principais**
```
auth.users              - Usuários do sistema
public.stores           - Lojas/domínios
public.products         - Produtos
public.categories       - Categorias
public.customers        - Clientes
public.orders           - Pedidos
public.sales            - Vendas
public.store_settings   - Configurações das lojas
```

---

## 🔍 **CONSULTAS BÁSICAS**

### **1. Ver Todos os Usuários**
```sql
SELECT id, email, role, created_at 
FROM auth.users 
ORDER BY created_at DESC;
```

### **2. Ver Todas as Lojas**
```sql
SELECT s.name, s.slug, s.domain, u.email as owner
FROM public.stores s
LEFT JOIN auth.users u ON s.user_id = u.id;
```

### **3. Ver Todos os Produtos**
```sql
SELECT p.name, p.price, p.stock, c.name as category
FROM public.products p
LEFT JOIN public.categories c ON p.category_id = c.id;
```

### **4. Ver Categorias**
```sql
SELECT c.name, c.color, s.name as store_name
FROM public.categories c
LEFT JOIN public.stores s ON c.store_id = s.id;
```

---

## 🎯 **CONSULTAS ESPECÍFICAS**

### **Produtos da Loja Principal**
```sql
SELECT p.name, p.price, p.stock, p.is_active
FROM public.products p
WHERE p.store_id = '0b094a7e-24cc-456e-912e-178792c3afde'
ORDER BY p.name;
```

### **Produtos Ativos (para Vitrine)**
```sql
SELECT p.name, p.description, p.price, p.image
FROM public.products p
WHERE p.store_id = '0b094a7e-24cc-456e-912e-178792c3afde'
  AND p.is_active = true;
```

### **Produtos com Estoque Baixo**
```sql
SELECT p.name, p.stock, p.price
FROM public.products p
WHERE p.stock < 10
ORDER BY p.stock ASC;
```

### **Configurações da Loja**
```sql
SELECT ss.store_name, ss.store_description, ss.whatsapp_number
FROM public.store_settings ss
WHERE ss.user_id = 'b669b536-7bef-4181-b32b-8970ee6d8f49';
```

---

## 📈 **RELATÓRIOS**

### **Dashboard da Loja**
```sql
SELECT 
    s.name as store_name,
    COUNT(p.id) as total_products,
    COUNT(CASE WHEN p.is_active = true THEN 1 END) as active_products,
    COUNT(CASE WHEN p.stock = 0 THEN 1 END) as out_of_stock
FROM public.stores s
LEFT JOIN public.products p ON s.id = p.store_id
WHERE s.slug = 'catalofacil'
GROUP BY s.id, s.name;
```

### **Vendas por Período**
```sql
SELECT 
    product_name,
    SUM(quantity) as total_sold,
    SUM(total_price) as total_revenue
FROM public.sales
WHERE sale_date >= CURRENT_DATE - INTERVAL '30 days'
GROUP BY product_name
ORDER BY total_revenue DESC;
```

---

## 🛠️ **DICAS DE USO**

### **Executar Consultas**
1. Selecione a consulta no editor
2. Pressione `Ctrl+Enter` ou clique no botão ▶️
3. Os resultados aparecerão na aba "Data"

### **Filtrar Resultados**
- Use `WHERE` para filtrar dados
- Exemplo: `WHERE p.stock > 0`

### **Ordenar Resultados**
- Use `ORDER BY` para ordenar
- Exemplo: `ORDER BY p.name ASC`

### **Limitar Resultados**
- Use `LIMIT` para limitar linhas
- Exemplo: `LIMIT 10`

---

## 📤 **EXPORTAR DADOS**

### **Exportar para CSV**
1. Execute a consulta
2. Clique com botão direito nos resultados
3. Selecione "Export Data"
4. Escolha "CSV"
5. Configure as opções e salve

### **Exportar para Excel**
1. Execute a consulta
2. Clique com botão direito nos resultados
3. Selecione "Export Data"
4. Escolha "Excel"
5. Configure as opções e salve

---

## 🔧 **CONSULTAS ÚTEIS PARA DEBUG**

### **Verificar Dados da Loja**
```sql
SELECT 
    s.name, s.slug, s.domain,
    COUNT(p.id) as produtos,
    COUNT(c.id) as categorias
FROM public.stores s
LEFT JOIN public.products p ON s.id = p.store_id
LEFT JOIN public.categories c ON s.id = c.store_id
WHERE s.slug = 'catalofacil'
GROUP BY s.id, s.name, s.slug, s.domain;
```

### **Verificar Usuário Admin**
```sql
SELECT id, email, role, is_super_admin
FROM auth.users
WHERE email = 'admin@catalofacil.com.br';
```

### **Verificar Configurações**
```sql
SELECT 
    ss.store_name,
    ss.store_description,
    ss.whatsapp_number,
    u.email as owner
FROM public.store_settings ss
LEFT JOIN auth.users u ON ss.user_id = u.id;
```

---

## ⚠️ **IMPORTANTE**

### **IDs Importantes**
- **Loja Principal**: `0b094a7e-24cc-456e-912e-178792c3afde`
- **Usuário Admin**: `b669b536-7bef-4181-b32b-8970ee6d8f49`
- **Slug da Loja**: `catalofacil`

### **Schemas**
- Usuários: `auth.users`
- Dados do sistema: `public.*`

### **Backup**
- Sempre faça backup antes de alterar dados
- Use `SELECT` antes de `UPDATE` ou `DELETE`
- Teste consultas em dados pequenos primeiro

---

## 🆘 **SOLUÇÃO DE PROBLEMAS**

### **Erro de Conexão**
- Verifique se o PostgreSQL está rodando
- Confirme host, porta e credenciais
- Teste com `psql` primeiro

### **Erro de Permissão**
- Verifique se o usuário tem permissões
- Use `GRANT` se necessário

### **Consulta Lenta**
- Use `EXPLAIN` para analisar performance
- Adicione índices se necessário
- Limite resultados com `LIMIT`

---

## 📚 **PRÓXIMOS PASSOS**

1. **Explore as tabelas**: Use o navegador do DBeaver
2. **Teste as consultas**: Execute uma por vez
3. **Personalize**: Adapte para suas necessidades
4. **Salve consultas**: Organize em arquivos
5. **Crie relatórios**: Combine consultas para insights 