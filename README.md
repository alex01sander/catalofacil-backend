# Sistema de Catálogo - Backend

Sistema backend para gerenciamento de catálogos de produtos e pedidos com integração financeira completa.

## 🆕 Funcionalidades Principais

### 📦 Gestão de Pedidos com Integração Financeira
- **Processamento Automático**: Pedidos aceitos são automaticamente processados
- **Controle de Estoque**: Desconto automático quando pedidos são aceitos
- **Fluxo de Caixa**: Registro automático de receitas
- **Contas de Crédito**: Gerenciamento integrado de clientes

### 🔄 Endpoints de Pedidos

#### Aceitar Pedido
```http
PUT /orders/:id
Content-Type: application/json
Authorization: Bearer <token>

{
  "status": "accepted"
}
```

**O que acontece automaticamente:**
1. ✅ Cria registros na tabela `sales`
2. 💰 Registra entrada no `cash_flow`
3. 📦 Atualiza estoque dos produtos
4. 👤 Gerencia conta de crédito do cliente

#### Verificar Status de Processamento
```http
GET /orders/:id/processing-status
Authorization: Bearer <token>
```

**Resposta:**
```json
{
  "order": {
    "id": "123",
    "status": "accepted",
    "total_amount": 150.00
  },
  "processing_status": {
    "is_processed": true,
    "processed_at": "2024-01-15T10:30:00Z",
    "has_sales_records": true,
    "has_cash_flow_entry": true,
    "has_credit_transactions": true
  },
  "related_records": {
    "sales": [...],
    "cash_flow_entry": {...},
    "credit_transactions": [...]
  }
}
```

#### Reprocessar Pedido
```http
POST /orders/:id/reprocess
Authorization: Bearer <token>
```

### 🛡️ Validações e Segurança

- **Estoque Insuficiente**: Impede processamento se não há produtos suficientes
- **Prevenção de Duplicação**: Sistema idempotente evita processamento duplo
- **Controle de Acesso**: Apenas proprietários podem processar seus pedidos
- **Logs Detalhados**: Todas as operações são registradas

### 📊 Status de Pedidos Suportados

Para que um pedido seja processado automaticamente, o status deve mudar de `pending` para:
- `accepted`
- `confirmed` 
- `aceito`
- `confirmado`

## 🚀 Instalação e Uso

```bash
# Instalar dependências
npm install

# Configurar banco de dados
npx prisma generate
npx prisma db push

# Compilar
npm run build

# Executar
npm start
```

## 📋 Variáveis de Ambiente

```env
DATABASE_URL="postgresql://..."
JWT_SECRET="your-secret-key"
SUPABASE_URL="https://..."
SUPABASE_SERVICE_KEY="..."
```

## 🧪 Testando o Sistema

### 1. Criar um Pedido
```bash
curl -X POST http://localhost:3000/orders \
  -H "Content-Type: application/json" \
  -d '{
    "store_owner_id": "user-id",
    "customer_name": "João Silva",
    "customer_phone": "11999999999",
    "total_amount": 150.00,
    "order_items": [
      {
        "product_id": "product-id",
        "quantity": 2,
        "unit_price": 75.00,
        "total_price": 150.00
      }
    ]
  }'
```

### 2. Aceitar o Pedido
```bash
curl -X PUT http://localhost:3000/orders/PEDIDO-ID \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer TOKEN" \
  -d '{"status": "accepted"}'
```

### 3. Verificar Processamento
```bash
curl -X GET http://localhost:3000/orders/PEDIDO-ID/processing-status \
  -H "Authorization: Bearer TOKEN"
```

## ⚠️ Observações Importantes

- **Transações Atômicas**: Todas as operações financeiras usam transações do Prisma
- **Rollback Automático**: Se alguma operação falhar, tudo é desfeito
- **Logs Estruturados**: Use os logs para debugging e auditoria
- **Performance**: Operações são otimizadas com índices no banco

## 🔧 Arquitetura

```
├── src/
│   ├── routes/
│   │   ├── orders.ts        # Gestão de pedidos com integração financeira
│   │   ├── sales.ts         # Registro de vendas
│   │   ├── cashFlow.ts      # Fluxo de caixa
│   │   └── creditAccounts.ts # Contas de crédito
│   ├── lib/
│   │   ├── prisma.ts        # Cliente do banco
│   │   └── cache.ts         # Sistema de cache
│   └── middleware/
│       ├── auth.ts          # Autenticação JWT
│       └── rateLimiter.ts   # Limitação de taxa
```

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Crie um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. 