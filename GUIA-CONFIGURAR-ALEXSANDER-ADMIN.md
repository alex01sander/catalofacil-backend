# 🔧 GUIA PARA CONFIGURAR ALEXSANDER COMO ADMIN

## 📋 **OBJETIVO**
Configurar o usuário `alexsander01@hotmail.com.br` como administrador para que possa acessar o controller de domínios e todas as rotas administrativas.

---

## 👤 **DADOS DO USUÁRIO**
- **ID**: `05703665-81d7-4c1d-9bb0-660f0571f465`
- **Email**: `alexsander01@hotmail.com.br`
- **Role**: `admin`
- **Status**: Precisa ser criado no banco

---

## 🚀 **PASSOS PARA CONFIGURAÇÃO**

### **PASSO 1: Iniciar o Banco de Dados**
```bash
# Opção 1: Docker Compose
docker-compose up -d db

# Opção 2: PostgreSQL local
# Certifique-se de que o PostgreSQL está rodando na porta 5432
```

### **PASSO 2: Executar Script SQL**
1. Abra o DBeaver ou outro cliente SQL
2. Conecte ao banco PostgreSQL
3. Execute o arquivo `criar-alexsander-admin.sql`

**Ou execute via linha de comando:**
```bash
psql -h localhost -U postgres -d catalogo -f criar-alexsander-admin.sql
```

### **PASSO 3: Verificar Criação**
Execute as consultas de verificação no script SQL para confirmar:
- ✅ Usuário criado com ID correto
- ✅ Email configurado corretamente
- ✅ Role definido como 'admin'

### **PASSO 4: Gerar Token JWT**
Você precisa de um token JWT válido para o usuário. Opções:

**Opção A: Usar rota de login (recomendado)**
```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "alexsander01@hotmail.com.br",
    "password": "sua_senha_aqui"
  }'
```

**Opção B: Gerar token manualmente**
```javascript
const jwt = require('jsonwebtoken');

const payload = {
  userId: '05703665-81d7-4c1d-9bb0-660f0571f465',
  email: 'alexsander01@hotmail.com.br',
  iat: Math.floor(Date.now() / 1000),
  exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60) // 24 horas
};

const token = jwt.sign(payload, process.env.JWT_SECRET);
console.log('Token:', token);
```

### **PASSO 5: Testar Acesso**
Execute o script de teste:
```bash
node test-alexsander-admin.js
```

---

## 📁 **ARQUIVOS CRIADOS**

1. **`criar-alexsander-admin.sql`** - Script SQL para criar o usuário
2. **`test-alexsander-admin.js`** - Script para testar o acesso
3. **`create-alexsander-admin.js`** - Script Node.js para criar o usuário
4. **`GUIA-CONFIGURAR-ALEXSANDER-ADMIN.md`** - Este guia

---

## 🔍 **VERIFICAÇÕES**

### **Verificar no Banco**
```sql
-- Verificar usuário criado
SELECT id, email, role, created_at 
FROM auth.users 
WHERE id = '05703665-81d7-4c1d-9bb0-660f0571f465';

-- Verificar permissões
SELECT 
  CASE WHEN role = 'admin' THEN '✅ ADMIN' ELSE '❌ NÃO É ADMIN' END as status,
  id, email, role
FROM auth.users 
WHERE id = '05703665-81d7-4c1d-9bb0-660f0571f465';
```

### **Verificar via API**
```bash
# Testar dashboard admin
curl -H "Authorization: Bearer SEU_TOKEN_AQUI" \
     http://localhost:3000/admin/dashboard

# Testar listagem de domínios
curl -H "Authorization: Bearer SEU_TOKEN_AQUI" \
     http://localhost:3000/admin/domains
```

---

## 🎯 **ROTAS DISPONÍVEIS APÓS CONFIGURAÇÃO**

### **Dashboard e Relatórios**
- `GET /admin/dashboard` - Dashboard principal
- `GET /admin/reports/sales` - Relatório de vendas
- `GET /admin/reports/products` - Relatório de produtos
- `GET /admin/reports/financial` - Relatório financeiro

### **Gerenciamento de Usuários**
- `GET /admin/users` - Listar usuários
- `GET /admin/users/:id` - Buscar usuário específico
- `PUT /admin/users/:id` - Atualizar usuário

### **Gerenciamento de Lojas**
- `GET /admin/stores` - Listar lojas
- `GET /admin/stores/:id` - Buscar loja específica
- `PUT /admin/stores/:id` - Atualizar loja

### **Gerenciamento de Domínios (NOVO)**
- `GET /admin/domains` - Listar domínios
- `POST /admin/domains` - Criar domínio
- `GET /admin/domains/:id` - Buscar domínio específico
- `PUT /admin/domains/:id` - Atualizar domínio
- `DELETE /admin/domains/:id` - Deletar domínio
- `POST /admin/register-domain-user` - Cadastro completo de domínio e usuário

---

## ⚠️ **PROBLEMAS COMUNS**

### **Erro: "Can't reach database server"**
- Verifique se o PostgreSQL está rodando
- Verifique as configurações de conexão no `.env`
- Execute `docker-compose up -d db` se usando Docker

### **Erro: "Token inválido"**
- Verifique se o JWT_SECRET está configurado
- Gere um novo token JWT válido
- Verifique se o token não expirou

### **Erro: "Acesso negado. Apenas administradores"**
- Verifique se o usuário tem role = 'admin'
- Execute novamente o script SQL
- Verifique se o user_id no token corresponde ao usuário no banco

---

## ✅ **CHECKLIST DE CONCLUSÃO**

- [ ] Banco de dados rodando
- [ ] Usuário criado no banco com role 'admin'
- [ ] Token JWT válido gerado
- [ ] Teste de acesso ao dashboard funcionando
- [ ] Teste de acesso às rotas de domínios funcionando
- [ ] Controller de domínios acessível

---

## 🎉 **RESULTADO FINAL**

Após seguir todos os passos, o usuário `alexsander01@hotmail.com.br` terá:
- ✅ Acesso completo às rotas administrativas
- ✅ Permissão para gerenciar domínios
- ✅ Permissão para criar usuários vinculados a domínios
- ✅ Acesso ao dashboard e relatórios
- ✅ Token JWT válido para autenticação

**O controller de domínios estará totalmente funcional e acessível!** 