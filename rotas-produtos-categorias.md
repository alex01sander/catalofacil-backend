# 📋 ROTAS DE PRODUTOS E CATEGORIAS

## 🏪 **VITRINE PÚBLICA (Frontend)**

### **Produtos Públicos**
```javascript
// ✅ Listar produtos da loja (vitrine pública)
GET /api/site/public/catalofacil/products

// ✅ Buscar produto específico da loja
GET /api/site/public/catalofacil/products/:id

// ✅ Dados da loja (configurações)
GET /api/site/public/catalofacil
```

### **Categorias Públicas**
```javascript
// ✅ Listar categorias da loja (vitrine pública)
GET /api/site/public/catalofacil/categories
```

---

## 🔐 **ÁREA ADMINISTRATIVA (Backend)**

### **Produtos - CRUD Completo**
```javascript
// ✅ Criar produto
POST /api/products
{
  "name": "Nome do Produto",
  "description": "Descrição",
  "price": 10.50,
  "stock": 100,
  "store_id": "0b094a7e-24cc-456e-912e-178792c3afde",
  "category_id": "id-da-categoria",
  "image": "https://url-da-imagem.jpg"
}

// ✅ Listar produtos do usuário
GET /api/products

// ✅ Buscar produto por ID
GET /api/products/:id

// ✅ Atualizar produto
PUT /api/products/:id

// ✅ Deletar produto
DELETE /api/products/:id
```

### **Categorias - CRUD Completo**
```javascript
// ⚠️ Criar categoria (com problema)
POST /api/categorias
{
  "name": "Nome da Categoria",
  "storeId": "0b094a7e-24cc-456e-912e-178792c3afde"
}

// ✅ Listar categorias do usuário
GET /api/categorias

// ✅ Buscar categoria por ID
GET /api/categorias/:id

// ✅ Atualizar categoria
PUT /api/categorias/:id

// ✅ Deletar categoria
DELETE /api/categorias/:id
```

---

## 🎯 **ROTAS ADMINISTRATIVAS (Super Admin)**

### **Dashboard Admin**
```javascript
// ✅ Dashboard com estatísticas
GET /api/admin/dashboard

// ✅ Relatório de produtos
GET /api/admin/reports/products

// ✅ Relatório de vendas
GET /api/admin/reports/sales
```

---

## 📊 **FLUXO DE DADOS**

### **1. Cadastro na Área Admin**
```
Admin cadastra produto/categoria
↓
Salva na tabela products/categories
↓
Campo store_id = "0b094a7e-24cc-456e-912e-178792c3afde"
```

### **2. Exibição na Vitrine Pública**
```
Frontend chama /api/site/public/catalofacil/products
↓
Backend busca produtos onde:
- store_id = loja.id
- is_active = true
↓
Retorna produtos para vitrine
```

---

## 🔍 **DETALHES TÉCNICOS**

### **Tabelas Envolvidas**
- `stores` - Lojas (slug: "catalofacil")
- `products` - Produtos (store_id → stores.id)
- `categories` - Categorias (store_id → stores.id)
- `store_settings` - Configurações da loja

### **IDs Importantes**
```javascript
const STORE_ID = "0b094a7e-24cc-456e-912e-178792c3afde";
const USER_ID = "b669b536-7bef-4181-b32b-8970ee6d8f49";
```

### **Filtros Aplicados**
- **Vitrine**: Apenas produtos `is_active = true`
- **Admin**: Todos os produtos do usuário
- **Super Admin**: Todos os produtos do sistema

---

## ⚠️ **PROBLEMAS CONHECIDOS**

1. **Categories POST**: Erro de validação Prisma
2. **User ID**: Frontend usa ID diferente do backend
3. **Store Settings**: Usar PUT, não POST

---

## 💡 **DICAS PARA O FRONTEND**

1. **Para vitrine**: Use sempre `/api/site/public/catalofacil/`
2. **Para admin**: Use `/api/products` e `/api/categorias`
3. **Para super admin**: Use `/api/admin/`
4. **Sempre inclua JWT** para rotas autenticadas
5. **Use os IDs corretos** fornecidos acima 