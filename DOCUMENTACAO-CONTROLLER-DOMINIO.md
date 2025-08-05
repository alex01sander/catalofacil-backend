# Controller de Domínios e Usuários

## 📋 Visão Geral

Este controller permite gerenciar domínios e usuários de forma integrada, permitindo:
- Cadastrar domínio e usuário em uma única operação
- Gerenciar domínios separadamente
- Vincular usuários existentes a domínios
- Listar, atualizar e remover domínios

## 🚀 Rotas Disponíveis

### 1. Cadastro Completo de Domínio e Usuário

**POST** `/admin/register-domain-user`

Cadastra um novo domínio e usuário em uma única operação.

#### Parâmetros:
```json
{
  "domain": "meu-site.com",
  "user_email": "admin@meu-site.com", 
  "user_password": "minhasenha123",
  "user_role": "admin",
  "domain_type": "domain",
  "user_id": null // opcional - se não fornecido, será gerado automaticamente
}
```

#### Resposta de Sucesso:
```json
{
  "message": "Domínio e usuário cadastrados com sucesso",
  "domain": {
    "id": "uuid-do-dominio",
    "domain": "meu-site.com",
    "user_id": "uuid-do-usuario",
    "domain_type": "domain",
    "created_at": "2024-01-01T00:00:00.000Z",
    "updated_at": "2024-01-01T00:00:00.000Z",
    "users": {
      "id": "uuid-do-usuario",
      "email": "admin@meu-site.com",
      "role": "admin",
      "created_at": "2024-01-01T00:00:00.000Z"
    }
  },
  "user": {
    "id": "uuid-do-usuario",
    "email": "admin@meu-site.com",
    "role": "admin"
  }
}
```

### 2. Listar Domínios

**GET** `/admin/domains`

Lista todos os domínios com paginação e busca.

#### Parâmetros de Query:
- `page` (opcional): Página atual (padrão: 1)
- `limit` (opcional): Itens por página (padrão: 10)
- `search` (opcional): Termo de busca no domínio ou tipo

#### Exemplo:
```
GET /admin/domains?page=1&limit=5&search=exemplo
```

#### Resposta:
```json
{
  "domains": [
    {
      "id": "uuid-do-dominio",
      "domain": "exemplo.com",
      "user_id": "uuid-do-usuario",
      "domain_type": "domain",
      "created_at": "2024-01-01T00:00:00.000Z",
      "updated_at": "2024-01-01T00:00:00.000Z",
      "users": {
        "id": "uuid-do-usuario",
        "email": "admin@exemplo.com",
        "role": "admin"
      }
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 5,
    "total": 10,
    "pages": 2
  }
}
```

### 3. Buscar Domínio Específico

**GET** `/admin/domains/:id`

Busca um domínio específico pelo ID.

#### Resposta:
```json
{
  "id": "uuid-do-dominio",
  "domain": "exemplo.com",
  "user_id": "uuid-do-usuario",
  "domain_type": "domain",
  "created_at": "2024-01-01T00:00:00.000Z",
  "updated_at": "2024-01-01T00:00:00.000Z",
  "users": {
    "id": "uuid-do-usuario",
    "email": "admin@exemplo.com",
    "role": "admin",
    "created_at": "2024-01-01T00:00:00.000Z"
  }
}
```

### 4. Criar Domínio

**POST** `/admin/domains`

Cria um novo domínio vinculado a um usuário existente.

#### Parâmetros:
```json
{
  "domain": "novo-site.com",
  "user_id": "uuid-do-usuario-existente",
  "domain_type": "domain"
}
```

### 5. Atualizar Domínio

**PUT** `/admin/domains/:id`

Atualiza um domínio existente.

#### Parâmetros (todos opcionais):
```json
{
  "domain": "novo-dominio.com",
  "user_id": "novo-uuid-usuario",
  "domain_type": "subdomain"
}
```

### 6. Remover Domínio

**DELETE** `/admin/domains/:id`

Remove um domínio.

#### Resposta:
```json
{
  "message": "Domínio removido com sucesso"
}
```

## 🔐 Autenticação

Todas as rotas requerem autenticação de administrador. Inclua o token no header:

```
Authorization: Bearer seu_token_admin_aqui
```

## 📝 Exemplos de Uso

### Exemplo 1: Cadastro Simples
```bash
curl -X POST http://localhost:3000/admin/register-domain-user \
  -H "Authorization: Bearer seu_token" \
  -H "Content-Type: application/json" \
  -d '{
    "domain": "minha-loja.com",
    "user_email": "admin@minha-loja.com",
    "user_password": "senha123",
    "user_role": "admin"
  }'
```

### Exemplo 2: Listar Domínios
```bash
curl -X GET "http://localhost:3000/admin/domains?page=1&limit=10" \
  -H "Authorization: Bearer seu_token"
```

### Exemplo 3: Atualizar Domínio
```bash
curl -X PUT http://localhost:3000/admin/domains/uuid-do-dominio \
  -H "Authorization: Bearer seu_token" \
  -H "Content-Type: application/json" \
  -d '{
    "domain_type": "subdomain"
  }'
```

## 🧪 Testes

Execute os testes usando o arquivo `test-domain-controller.js`:

```bash
# Teste completo
node test-domain-controller.js

# Teste simples de cadastro
node test-domain-controller.js --simple
```

## ⚠️ Validações

### Cadastro de Domínio e Usuário:
- Domínio é obrigatório
- Email é obrigatório e deve ser único
- Senha é obrigatória
- Domínio deve ser único no sistema
- Email deve ser único no sistema

### Operações de Domínio:
- ID do usuário deve existir no sistema
- Domínio deve ser único
- Não é possível remover domínio que não existe

## 🔄 Fluxo de Dados

1. **Cadastro Completo**:
   - Valida dados de entrada
   - Verifica se domínio e email já existem
   - Cria usuário com ID gerado ou fornecido
   - Cria domínio vinculado ao usuário
   - Retorna dados completos

2. **Gerenciamento de Domínios**:
   - CRUD completo para domínios
   - Validações de integridade
   - Relacionamento com usuários

## 🗄️ Estrutura do Banco

### Tabela `domain_owners`:
- `id`: UUID (chave primária)
- `domain`: String (único)
- `user_id`: UUID (referência para users)
- `domain_type`: String (padrão: "domain")
- `created_at`: Timestamp
- `updated_at`: Timestamp

### Tabela `users` (auth schema):
- `id`: UUID (chave primária)
- `email`: String (único)
- `encrypted_password`: String
- `role`: String
- `created_at`: Timestamp
- `updated_at`: Timestamp

## 🚨 Tratamento de Erros

### Códigos de Status:
- `200`: Sucesso
- `201`: Criado com sucesso
- `400`: Dados inválidos
- `401`: Não autorizado
- `404`: Não encontrado
- `409`: Conflito (domínio/email já existe)
- `500`: Erro interno do servidor

### Exemplos de Erro:
```json
{
  "error": "Domínio já cadastrado"
}
```

```json
{
  "error": "Email já cadastrado"
}
```

```json
{
  "error": "Usuário não encontrado"
}
```

## 🔧 Configuração

Certifique-se de que:
1. O middleware de autenticação admin está configurado
2. O Prisma está conectado ao banco
3. As tabelas `domain_owners` e `users` existem
4. O token de admin é válido

## 📈 Próximos Passos

- [ ] Implementar hash de senha
- [ ] Adicionar validação de formato de domínio
- [ ] Implementar logs de auditoria
- [ ] Adicionar rate limiting
- [ ] Implementar cache para consultas frequentes 