# 🎛️ DOCUMENTAÇÃO - CONTROLLER ADMIN ROUTES

## 📋 **VISÃO GERAL**

O Controller Admin é uma rota específica para o dashboard administrativo, organizando todas as funcionalidades de administração em um local centralizado.

**URL Base:** `catalofacil.catalofacil.com.br/controller`

---

## 🔐 **AUTENTICAÇÃO**

Todas as rotas requerem JWT de administrador no header:
```javascript
headers: {
  'Authorization': 'Bearer SEU_JWT_TOKEN',
  'Content-Type': 'application/json'
}
```

---

## 🎯 **ROTAS DISPONÍVEIS**

### **1. Dashboard Principal**
```javascript
GET /controller/
```

**Descrição:** Dashboard principal com estatísticas gerais do sistema

**Resposta de Sucesso (200):**
```json
{
  "message": "Controller Admin Dashboard",
  "stats": {
    "totalUsers": 10,
    "totalStores": 5,
    "totalProducts": 150,
    "totalCustomers": 25,
    "totalOrders": 100,
    "totalSales": 80,
    "totalDomains": 3,
    "monthlyRevenue": 15000.50
  },
  "topProducts": [
    {
      "product_name": "Produto A",
      "_sum": { "quantity": 50 }
    }
  ],
  "recentDomains": [
    {
      "id": "uuid",
      "domain": "exemplo.com.br",
      "users": {
        "id": "uuid",
        "email": "admin@exemplo.com.br",
        "role": "admin"
      }
    }
  ],
  "admin": {
    "id": "uuid",
    "email": "alexsander01@hotmail.com.br",
    "role": "admin"
  }
}
```

---

### **2. Gerenciamento de Domínios**

#### **Listar Domínios**
```javascript
GET /controller/domains?page=1&limit=10&search=termo
```

**Parâmetros:**
- `page` (opcional): Página atual (padrão: 1)
- `limit` (opcional): Itens por página (padrão: 10)
- `search` (opcional): Busca por domínio ou tipo

**Resposta de Sucesso (200):**
```json
{
  "domains": [
    {
      "id": "uuid",
      "domain": "exemplo.com.br",
      "user_id": "uuid",
      "domain_type": "domain",
      "created_at": "2024-01-01T00:00:00Z",
      "updated_at": "2024-01-01T00:00:00Z",
      "users": {
        "id": "uuid",
        "email": "admin@exemplo.com.br",
        "role": "admin",
        "created_at": "2024-01-01T00:00:00Z"
      }
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 1,
    "pages": 1
  }
}
```

#### **Criar Domínio**
```javascript
POST /controller/domains
```

**Body:**
```json
{
  "domain": "novo.com.br",
  "user_id": "uuid-do-usuario",
  "domain_type": "domain"
}
```

**Resposta de Sucesso (201):**
```json
{
  "message": "Domínio criado com sucesso",
  "domain": {
    "id": "uuid",
    "domain": "novo.com.br",
    "user_id": "uuid-do-usuario",
    "domain_type": "domain",
    "users": {
      "id": "uuid-do-usuario",
      "email": "admin@novo.com.br",
      "role": "admin",
      "created_at": "2024-01-01T00:00:00Z"
    }
  }
}
```

#### **Buscar Domínio Específico**
```javascript
GET /controller/domains/:id
```

**Resposta de Sucesso (200):**
```json
{
  "domain": {
    "id": "uuid",
    "domain": "exemplo.com.br",
    "user_id": "uuid",
    "domain_type": "domain",
    "users": {
      "id": "uuid",
      "email": "admin@exemplo.com.br",
      "role": "admin",
      "created_at": "2024-01-01T00:00:00Z"
    }
  }
}
```

#### **Atualizar Domínio**
```javascript
PUT /controller/domains/:id
```

**Body:**
```json
{
  "domain": "novo-nome.com.br",
  "user_id": "novo-user-id",
  "domain_type": "subdomain"
}
```

**Resposta de Sucesso (200):**
```json
{
  "message": "Domínio atualizado com sucesso",
  "domain": {
    "id": "uuid",
    "domain": "novo-nome.com.br",
    "user_id": "novo-user-id",
    "domain_type": "subdomain",
    "users": {
      "id": "novo-user-id",
      "email": "admin@novo-nome.com.br",
      "role": "admin",
      "created_at": "2024-01-01T00:00:00Z"
    }
  }
}
```

#### **Deletar Domínio**
```javascript
DELETE /controller/domains/:id
```

**Resposta de Sucesso (200):**
```json
{
  "message": "Domínio deletado com sucesso",
  "deletedDomain": {
    "id": "uuid",
    "domain": "exemplo.com.br",
    "user_id": "uuid"
  }
}
```

---

### **3. Cadastro Completo de Domínio e Usuário**

#### **Criar Domínio e Usuário Simultaneamente**
```javascript
POST /controller/register-domain-user
```

**Body:**
```json
{
  "domain": "novo-dominio.com.br",
  "user_email": "admin@novo-dominio.com.br",
  "user_password": "senha123",
  "user_role": "admin",
  "domain_type": "domain",
  "user_id": "uuid-opcional"
}
```

**Resposta de Sucesso (201):**
```json
{
  "message": "Domínio e usuário cadastrados com sucesso",
  "domain": {
    "id": "uuid",
    "domain": "novo-dominio.com.br",
    "user_id": "uuid",
    "domain_type": "domain",
    "users": {
      "id": "uuid",
      "email": "admin@novo-dominio.com.br",
      "role": "admin",
      "created_at": "2024-01-01T00:00:00Z"
    }
  },
  "user": {
    "id": "uuid",
    "email": "admin@novo-dominio.com.br",
    "role": "admin"
  }
}
```

---

### **4. Gerenciamento de Usuários**

#### **Listar Usuários**
```javascript
GET /controller/users?page=1&limit=10&search=termo
```

**Resposta de Sucesso (200):**
```json
{
  "users": [
    {
      "id": "uuid",
      "email": "usuario@exemplo.com.br",
      "role": "admin",
      "created_at": "2024-01-01T00:00:00Z",
      "updated_at": "2024-01-01T00:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 1,
    "pages": 1
  }
}
```

---

### **5. Gerenciamento de Lojas**

#### **Listar Lojas**
```javascript
GET /controller/stores?page=1&limit=10&search=termo
```

**Resposta de Sucesso (200):**
```json
{
  "stores": [
    {
      "id": "uuid",
      "name": "Loja Exemplo",
      "slug": "loja-exemplo",
      "users": {
        "id": "uuid",
        "email": "admin@exemplo.com.br",
        "role": "admin"
      }
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 1,
    "pages": 1
  }
}
```

---

### **6. Relatórios**

#### **Relatório de Vendas**
```javascript
GET /controller/reports/sales?startDate=2024-01-01&endDate=2024-12-31&storeId=uuid
```

**Parâmetros:**
- `startDate` (opcional): Data inicial (YYYY-MM-DD)
- `endDate` (opcional): Data final (YYYY-MM-DD)
- `storeId` (opcional): ID da loja específica

**Resposta de Sucesso (200):**
```json
{
  "sales": [
    {
      "id": "uuid",
      "product_name": "Produto A",
      "quantity": 5,
      "total_price": 100.50,
      "created_at": "2024-01-01T00:00:00Z",
      "stores": {
        "name": "Loja Exemplo",
        "slug": "loja-exemplo"
      }
    }
  ],
  "summary": {
    "totalSales": 1,
    "totalRevenue": 100.50,
    "totalQuantity": 5,
    "averagePrice": 100.50
  }
}
```

---

## ⚠️ **CÓDIGOS DE ERRO**

### **400 - Bad Request**
```json
{
  "error": "Domínio e user_id são obrigatórios"
}
```

### **401 - Unauthorized**
```json
{
  "error": "Token de autenticação necessário"
}
```

### **403 - Forbidden**
```json
{
  "error": "Acesso negado. Apenas administradores."
}
```

### **404 - Not Found**
```json
{
  "error": "Domínio não encontrado"
}
```

### **409 - Conflict**
```json
{
  "error": "Domínio já cadastrado"
}
```

### **500 - Internal Server Error**
```json
{
  "error": "Erro interno do servidor"
}
```

---

## 🧪 **TESTE DAS ROTAS**

Execute o script de teste:
```bash
node test-controller-routes.js
```

**URLs para teste manual:**
- Dashboard: `http://localhost:3000/controller/`
- Domínios: `http://localhost:3000/controller/domains`
- Usuários: `http://localhost:3000/controller/users`
- Lojas: `http://localhost:3000/controller/stores`
- Relatórios: `http://localhost:3000/controller/reports/sales`

---

## 🔧 **EXEMPLOS DE USO**

### **Exemplo com cURL:**
```bash
# Dashboard
curl -H "Authorization: Bearer SEU_TOKEN" \
     http://localhost:3000/controller/

# Listar domínios
curl -H "Authorization: Bearer SEU_TOKEN" \
     http://localhost:3000/controller/domains

# Criar domínio
curl -X POST \
     -H "Authorization: Bearer SEU_TOKEN" \
     -H "Content-Type: application/json" \
     -d '{"domain":"exemplo.com.br","user_id":"uuid"}' \
     http://localhost:3000/controller/domains
```

### **Exemplo com JavaScript:**
```javascript
const axios = require('axios');

const token = 'SEU_JWT_TOKEN';
const headers = {
  'Authorization': `Bearer ${token}`,
  'Content-Type': 'application/json'
};

// Dashboard
const dashboard = await axios.get('http://localhost:3000/controller/', { headers });

// Criar domínio e usuário
const newDomain = await axios.post('http://localhost:3000/controller/register-domain-user', {
  domain: 'novo.com.br',
  user_email: 'admin@novo.com.br',
  user_password: 'senha123',
  user_role: 'admin'
}, { headers });
```

---

## 🎉 **RESULTADO**

O Controller Admin fornece uma interface centralizada e organizada para todas as operações administrativas do sistema, com autenticação robusta e funcionalidades completas de gerenciamento. 