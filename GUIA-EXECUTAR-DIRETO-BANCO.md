# 🗄️ GUIA PARA EXECUTAR DIRETAMENTE NO BANCO

## 📋 **OBJETIVO**
Criar o usuário `alexsander01@hotmail.com.br` como admin diretamente no banco PostgreSQL, sem precisar do Docker ou Node.js.

---

## 🚀 **OPÇÕES PARA EXECUTAR**

### **OPÇÃO 1: DBeaver (Recomendado)**
1. Abra o DBeaver
2. Conecte ao seu banco PostgreSQL
3. Abra o arquivo `executar-sql-direto.sql`
4. Execute todo o script (Ctrl+Shift+E ou F5)

### **OPÇÃO 2: pgAdmin**
1. Abra o pgAdmin
2. Conecte ao banco PostgreSQL
3. Clique com botão direito no banco → Query Tool
4. Cole o conteúdo do arquivo `executar-sql-direto.sql`
5. Execute (F5)

### **OPÇÃO 3: Linha de Comando (psql)**
```bash
psql -h localhost -U postgres -d catalogo -f executar-sql-direto.sql
```

### **OPÇÃO 4: Qualquer Cliente SQL**
- Abra seu cliente SQL preferido
- Conecte ao PostgreSQL
- Cole e execute o script

---

## 📁 **ARQUIVO PRINCIPAL**
- **`executar-sql-direto.sql`** - Script completo para executar no banco

---

## ✅ **O QUE O SCRIPT FAZ**

1. **Verifica a conexão** com o banco
2. **Verifica se as tabelas existem** (auth.users, domain_owners)
3. **Cria o usuário admin** alexsander01@hotmail.com.br
4. **Verifica o resultado** da criação
5. **Confirma as permissões** de admin
6. **Mostra um resumo final**

---

## 🎯 **RESULTADO ESPERADO**

Após executar o script, você verá:
- ✅ Usuário criado com ID: `05703665-81d7-4c1d-9bb0-660f0571f465`
- ✅ Email: `alexsander01@hotmail.com.br`
- ✅ Role: `admin`
- ✅ Status: "ADMIN - ACESSO PERMITIDO"

---

## 🔍 **VERIFICAÇÃO RÁPIDA**

Após executar, você pode verificar com esta consulta simples:

```sql
SELECT 
    id,
    email,
    role,
    CASE WHEN role = 'admin' THEN '✅ ADMIN' ELSE '❌ NÃO É ADMIN' END as status
FROM auth.users 
WHERE email = 'alexsander01@hotmail.com.br';
```

---

## 🎉 **PRÓXIMOS PASSOS**

Após executar o script no banco:

1. **Gerar token JWT** para o usuário alexsander
2. **Testar o acesso** às rotas admin
3. **Usar o controller de domínios**

---

## ⚠️ **IMPORTANTE**

- O script usa `ON CONFLICT` para não dar erro se o usuário já existir
- Se o usuário já existir, apenas atualiza o role para 'admin'
- Não precisa parar ou reiniciar nada
- Funciona com qualquer versão do PostgreSQL

**Execute o script e pronto! O usuário alexsander será admin.** 