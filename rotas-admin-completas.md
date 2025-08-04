# 🎯 ROTAS ADMINISTRATIVAS COMPLETAS

## 🔐 **AUTENTICAÇÃO**
Todas as rotas requerem JWT de administrador no header:
```javascript
headers: {
  'Authorization': 'Bearer SEU_JWT_TOKEN',
  'Content-Type': 'application/json'
}
```

---

## 📊 **DASHBOARD E ESTATÍSTICAS**

### **Dashboard Principal**
```javascript
GET /api/admin/dashboard
```
**Retorna:**
- Estatísticas gerais (usuários, lojas, produtos, etc.)
- Receita mensal
- Produtos mais vendidos

### **Relatórios de Vendas**
```javascript
GET /api/admin/reports/sales?startDate=2024-01-01&endDate=2024-12-31&storeId=ID_DA_LOJA
```
**Retorna:**
- Lista de vendas
- Resumo (total, receita, quantidade, valor médio)

### **Relatórios de Produtos**
```javascript
GET /api/admin/reports/products
```
**Retorna:**
- Lista de produtos
- Resumo (total, ativos, inativos)

### **Relatórios Financeiros**
```javascript
GET /api/admin/reports/financial?startDate=2024-01-01&endDate=2024-12-31&storeId=ID_DA_LOJA
```
**Retorna:**
- Vendas
- Fluxo de caixa
- Despesas
- Resumo (receita, despesas, lucro, margem)

### **Relatórios de Estoque**
```javascript
GET /api/admin/reports/inventory?storeId=ID_DA_LOJA
```
**Retorna:**
- Lista de produtos
- Resumo (total, ativos, estoque baixo, sem estoque)
- Alertas (produtos com estoque baixo/zerado)

---

## 👥 **GERENCIAMENTO DE USUÁRIOS**

### **Listar Usuários**
```javascript
GET /api/admin/users?page=1&limit=10&search=termo
```
**Parâmetros:**
- `page`: Página atual
- `limit`: Itens por página
- `search`: Busca por email ou ID

### **Buscar Usuário Específico**
```javascript
GET /api/admin/users/:id
```

### **Atualizar Usuário**
```javascript
PUT /api/admin/users/:id
{
  "role": "admin"
}
```

---

## 🏪 **GERENCIAMENTO DE LOJAS**

### **Listar Lojas**
```javascript
GET /api/admin/stores?page=1&limit=10&search=termo
```
**Retorna:**
- Lista de lojas com dados do usuário proprietário
- Paginação

### **Buscar Loja Específica**
```javascript
GET /api/admin/stores/:id
```
**Retorna:**
- Dados da loja
- Produtos da loja
- Clientes da loja

---

## 📦 **GERENCIAMENTO DE PRODUTOS**

### **Listar Produtos**
```javascript
GET /api/admin/products?page=1&limit=10&search=termo&storeId=ID_DA_LOJA
```
**Parâmetros:**
- `page`: Página atual
- `limit`: Itens por página
- `search`: Busca por nome ou descrição
- `storeId`: Filtrar por loja

### **Buscar Produto Específico**
```javascript
GET /api/admin/products/:id
```
**Retorna:**
- Dados do produto
- Dados da loja
- Dados da categoria

---

## 🏷️ **GERENCIAMENTO DE CATEGORIAS**

### **Listar Categorias**
```javascript
GET /api/admin/categories?page=1&limit=10&search=termo&storeId=ID_DA_LOJA
```
**Parâmetros:**
- `page`: Página atual
- `limit`: Itens por página
- `search`: Busca por nome
- `storeId`: Filtrar por loja

**Retorna:**
- Lista de categorias
- Produtos de cada categoria
- Dados da loja

---

## 📋 **GERENCIAMENTO DE PEDIDOS**

### **Listar Pedidos**
```javascript
GET /api/admin/orders?page=1&limit=10&status=pendente&storeId=ID_DA_LOJA
```
**Parâmetros:**
- `page`: Página atual
- `limit`: Itens por página
- `status`: Filtrar por status
- `storeId`: Filtrar por loja

**Retorna:**
- Lista de pedidos
- Dados do cliente
- Itens do pedido
- Produtos de cada item

---

## 👥 **GERENCIAMENTO DE CLIENTES**

### **Listar Clientes**
```javascript
GET /api/admin/customers?page=1&limit=10&search=termo&storeId=ID_DA_LOJA
```
**Parâmetros:**
- `page`: Página atual
- `limit`: Itens por página
- `search`: Busca por nome, email ou telefone
- `storeId`: Filtrar por loja

---

## ⚙️ **CONFIGURAÇÕES DO SISTEMA**

### **Configurações Gerais**
```javascript
GET /api/admin/system/config
```
**Retorna:**
- Ambiente (development/production)
- Configuração do banco
- Configuração do Supabase
- Configurações de segurança
- Configurações do servidor

### **Status do Sistema**
```javascript
GET /api/admin/system/status
```
**Retorna:**
- Status online/offline
- Status do banco
- Estatísticas do banco
- Timestamp

---

## 📊 **EXEMPLOS DE USO**

### **Dashboard Completo**
```javascript
// Buscar dashboard
const dashboard = await fetch('/api/admin/dashboard', {
  headers: { 'Authorization': 'Bearer SEU_TOKEN' }
});

// Buscar relatório financeiro do mês
const financial = await fetch('/api/admin/reports/financial?startDate=2024-08-01&endDate=2024-08-31', {
  headers: { 'Authorization': 'Bearer SEU_TOKEN' }
});

// Buscar produtos de uma loja específica
const products = await fetch('/api/admin/products?storeId=0b094a7e-24cc-456e-912e-178792c3afde', {
  headers: { 'Authorization': 'Bearer SEU_TOKEN' }
});
```

### **Busca e Filtros**
```javascript
// Buscar usuários com termo "admin"
const users = await fetch('/api/admin/users?search=admin', {
  headers: { 'Authorization': 'Bearer SEU_TOKEN' }
});

// Buscar produtos com estoque baixo
const inventory = await fetch('/api/admin/reports/inventory', {
  headers: { 'Authorization': 'Bearer SEU_TOKEN' }
});
```

---

## 🔍 **FILTROS DISPONÍVEIS**

### **Paginção**
- `page`: Número da página
- `limit`: Itens por página

### **Busca**
- `search`: Termo de busca (varia por endpoint)

### **Filtros Específicos**
- `storeId`: Filtrar por loja
- `status`: Filtrar por status (pedidos)
- `startDate/endDate`: Filtrar por período

---

## 📈 **ESTATÍSTICAS RETORNADAS**

### **Dashboard**
- Total de usuários
- Total de lojas
- Total de produtos
- Total de clientes
- Total de pedidos
- Total de vendas
- Receita mensal

### **Relatórios**
- Vendas por período
- Produtos mais vendidos
- Estoque baixo/zerado
- Receita vs Despesas
- Margem de lucro

---

## ⚠️ **IMPORTANTE**

1. **Autenticação**: Todas as rotas requerem JWT de admin
2. **Paginação**: Use sempre `page` e `limit` para listas grandes
3. **Filtros**: Combine filtros para resultados mais precisos
4. **Performance**: Relatórios podem ser lentos com muitos dados
5. **Segurança**: Apenas admins têm acesso a essas rotas

---

## 🎯 **PRÓXIMOS PASSOS**

- [ ] Adicionar operações de CRUD (criar, editar, deletar)
- [ ] Adicionar exportação de relatórios (PDF, Excel)
- [ ] Adicionar notificações em tempo real
- [ ] Adicionar logs de auditoria
- [ ] Adicionar backup automático 