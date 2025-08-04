# 🧹 GUIA PARA CORRIGIR DADOS DUPLICADOS

## 📋 **PROBLEMA IDENTIFICADO**

Você tem dados associados ao email errado:
- **Dados atuais**: `admin@catalofacil.com.br`
- **Dados desejados**: `alexsander01@hotmail.com.br`
- **Loja**: "Catálogo Fácil" com slug `catalofacil`
- **Configurações**: "Britto" 
- **Produtos**: 5 produtos na loja

## 🎯 **OBJETIVO**

Corrigir o email do usuário para:
- **Email**: `alexsander01@hotmail.com.br`
- **Loja**: `catalofacil.catalofacil.com.br`
- **Produtos**: Todos os 5 produtos
- **Configurações**: Manter as configurações "Britto"

---

## 📁 **ARQUIVOS CRIADOS**

1. **`corrigir-email-usuario.sql`** - Script SQL para corrigir o email
2. **`limpar-dados-duplicados.sql`** - Script SQL para limpeza (se necessário)
3. **`consultas-dbeaver.sql`** - Consultas gerais para DBeaver
4. **`guia-dbeaver.md`** - Guia de uso do DBeaver

---

## 🚀 **PASSOS PARA CORREÇÃO**

### **PASSO 1: Abrir DBeaver**
1. Abra o DBeaver
2. Conecte ao banco PostgreSQL
3. Abra o arquivo `corrigir-email-usuario.sql`

### **PASSO 2: Verificar Situação Atual**
Execute as consultas da **Seção 1** para ver:
- Usuário com email `admin@catalofacil.com.br`
- Se existe usuário com `alexsander01@hotmail.com.br`
- Lojas, configurações e produtos do usuário admin

### **PASSO 3: Executar Correção**
1. **IMPORTANTE**: Faça backup antes!
2. Descomente as linhas da **Seção 2**
3. Execute a correção do email

### **PASSO 4: Verificar Resultado**
Execute as consultas da **Seção 3** para confirmar:
- Usuário com email correto
- Lojas associadas ao email correto
- Configurações associadas ao email correto
- Produtos associados ao email correto

---

## ⚠️ **OPERAÇÃO QUE SERÁ EXECUTADA**

### **Corrigir Email do Usuário**
```sql
-- Atualizar email do usuário admin para alexsander01@hotmail.com.br
UPDATE auth.users 
SET email = 'alexsander01@hotmail.com.br'
WHERE email = 'admin@catalofacil.com.br';
```

**Esta operação irá:**
- Manter o mesmo ID do usuário
- Manter todas as lojas, produtos e configurações
- Apenas alterar o email de `admin@catalofacil.com.br` para `alexsander01@hotmail.com.br`

---

## 🔍 **CONSULTAS DE VERIFICAÇÃO**

### **Antes da Correção**
```sql
-- Verificar usuário atual
SELECT id, email, role, created_at
FROM auth.users 
WHERE email = 'admin@catalofacil.com.br';

-- Verificar dados do usuário
SELECT 
    'LOJAS' as tipo, COUNT(*) as quantidade
FROM public.stores s
LEFT JOIN auth.users u ON s.user_id = u.id
WHERE u.email = 'admin@catalofacil.com.br'

UNION ALL

SELECT 
    'CONFIGURAÇÕES' as tipo, COUNT(*) as quantidade
FROM public.store_settings ss
LEFT JOIN auth.users u ON ss.user_id = u.id
WHERE u.email = 'admin@catalofacil.com.br'

UNION ALL

SELECT 
    'PRODUTOS' as tipo, COUNT(*) as quantidade
FROM public.products p
LEFT JOIN auth.users u ON p.user_id = u.id
WHERE u.email = 'admin@catalofacil.com.br';
```

### **Depois da Correção**
O resultado deve ser:
- **USUÁRIO**: 1 (alexsander01@hotmail.com.br)
- **LOJAS**: 1 (Catálogo Fácil)
- **CONFIGURAÇÕES**: 1 (Britto)
- **PRODUTOS**: 5 (todos os produtos)

---

## 🎯 **RESULTADO ESPERADO**

Após a correção, você terá:

### **Usuário Correto**
- **Email**: alexsander01@hotmail.com.br
- **ID**: b669b536-7bef-4181-b32b-8970ee6d8f49
- **Role**: admin

### **Loja Única**
- **Nome**: Catálogo Fácil
- **Slug**: catalofacil
- **Domínio**: catalofacil.catalofacil.com.br
- **Email**: alexsander01@hotmail.com.br

### **Configuração Única**
- **Nome da Loja**: Britto
- **Descrição**: Venho conferiri o melhor preço
- **WhatsApp**: 5551992401184

### **Produtos Organizados**
- Todos os 5 produtos na loja correta
- Coca-Cola, Pepsi, Água, Suco, Cerveja

---

## ⚠️ **IMPORTANTE**

### **Antes de Executar**
1. **Faça backup** do banco de dados
2. **Teste** as consultas SELECT primeiro
3. **Verifique** se os dados estão corretos
4. **Execute** a operação de UPDATE

### **Se Algo Der Erro**
1. **Pare** imediatamente
2. **Verifique** os logs de erro
3. **Restaure** o backup se necessário
4. **Execute** a operação novamente

---

## 📞 **SUPORTE**

Se precisar de ajuda:
1. Execute as consultas de verificação
2. Me envie os resultados
3. Vou te ajudar a resolver qualquer problema

---

## ✅ **CHECKLIST FINAL**

Após a correção, verifique se:

- [ ] Usuário tem email alexsander01@hotmail.com.br
- [ ] Loja "Catálogo Fácil" está associada ao email correto
- [ ] Configurações "Britto" estão associadas ao email correto
- [ ] Todos os 5 produtos estão associados ao email correto
- [ ] O frontend carrega corretamente
- [ ] As APIs funcionam normalmente
- [ ] Não há erros no console

---

## 🔄 **PRÓXIMOS PASSOS**

Se ainda houver problemas após a correção do email:
1. Use o script `limpar-dados-duplicados.sql` para limpeza adicional
2. Verifique se há dados órfãos
3. Teste todas as funcionalidades

**🎉 Pronto! Agora você tem a loja catalofacil.catalofacil.com.br para o email alexsander01@hotmail.com.br** 