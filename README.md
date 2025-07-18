# API - Sistema Catálogo

## Sumário

- [Autenticação](#autenticação)
- [Rotas Públicas](#rotas-públicas)
- [Rotas Privadas (JWT)](#rotas-privadas-jwt)
- [Exemplo de uso do JWT](#exemplo-de-uso-do-jwt)
- [Códigos de resposta](#códigos-de-resposta)

---

## Autenticação

A maioria das rotas exige um token JWT no header:

```
Authorization: Bearer SEU_TOKEN_AQUI
```

---

## Rotas Públicas

| Método | Rota             | Descrição                                 |
|--------|------------------|-------------------------------------------|
| GET    | `/site/:slug`    | Consulta produtos públicos por domínio    |
| GET    | `/health`        | Health check para monitoramento           |

---

## Rotas Privadas (JWT)

| Método | Rota                  | Descrição                        |
|--------|-----------------------|----------------------------------|
| GET    | `/users`              | Lista todos os usuários          |
| GET    | `/users/:id`          | Busca usuário por ID             |
| POST   | `/users`              | Cria novo usuário                |
| PUT    | `/users/:id`          | Atualiza usuário                 |
| DELETE | `/users/:id`          | Remove usuário                   |
| GET    | `/orders`             | Lista pedidos                    |
| GET    | `/orders/:id`         | Busca pedido por ID              |
| POST   | `/orders`             | Cria pedido                      |
| PUT    | `/orders/:id`         | Atualiza pedido                  |
| DELETE | `/orders/:id`         | Remove pedido                    |
| GET    | `/products`           | Lista produtos                   |
| GET    | `/products/:id`       | Busca produto por ID             |
| POST   | `/products`           | Cria produto                     |
| PUT    | `/products/:id`       | Atualiza produto                 |
| DELETE | `/products/:id`       | Remove produto                   |
| GET    | `/customers`          | Lista clientes                   |
| GET    | `/customers/:id`      | Busca cliente por ID             |
| POST   | `/customers`          | Cria cliente                     |
| PUT    | `/customers/:id`      | Atualiza cliente                 |
| DELETE | `/customers/:id`      | Remove cliente                   |
| GET    | `/sales`              | Lista vendas                     |
| GET    | `/sales/:id`          | Busca venda por ID               |
| POST   | `/sales`              | Cria venda                       |
| PUT    | `/sales/:id`          | Atualiza venda                   |
| DELETE | `/sales/:id`          | Remove venda                     |
| ...    | ...                   | ...                              |

> **Obs:** Todas as rotas de recursos (`users`, `orders`, `products`, `customers`, etc.) seguem o mesmo padrão REST.

---

## Exemplo de uso do JWT

1. Faça login (exemplo: `/auth/login`) e receba um token.
2. Use o token nas próximas requisições:

```
curl -H "Authorization: Bearer SEU_TOKEN_AQUI" https://sua-api.railway.app/users
```

---

## Códigos de resposta

- `200 OK` - Sucesso
- `201 Created` - Recurso criado
- `204 No Content` - Remoção sem retorno
- `400 Bad Request` - Dados inválidos
- `401 Unauthorized` - Token ausente ou inválido
- `404 Not Found` - Recurso não encontrado
- `500 Internal Server Error` - Erro inesperado

---

## Observações

- Todos os parâmetros de rota são validados.
- Nenhum campo sensível é retornado nas respostas.
- Consulte o código para detalhes de cada endpoint.

--- 