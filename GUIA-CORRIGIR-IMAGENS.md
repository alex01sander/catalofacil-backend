# 🖼️ GUIA PARA CORRIGIR IMAGENS DOS PRODUTOS

## 📋 **PROBLEMA IDENTIFICADO**

As imagens dos produtos estão usando `via.placeholder.com` que não está funcionando:
- **Erro**: `ERR_NAME_NOT_RESOLVED`
- **Produtos afetados**: Coca-Cola, Pepsi, Água, Suco, Heineken
- **Solução**: Usar imagens Base64 que funcionam offline

---

## 🚀 **SOLUÇÃO RÁPIDA**

### **PASSO 1: Abrir DBeaver**
1. Abra o DBeaver
2. Conecte ao banco PostgreSQL
3. Abra o arquivo `corrigir-imagens-produtos.sql`

### **PASSO 2: Executar Correção**
Execute este comando SQL:

```sql
-- Corrigir imagem da Coca-Cola
UPDATE public.products 
SET image = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRkYwMDAwIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+Q29jYS1Db2xhPC90ZXh0Pgo8L3N2Zz4K'
WHERE name = 'Coca-Cola';

-- Corrigir imagem da Pepsi
UPDATE public.products 
SET image = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMDA2NkNDIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+UGVwc2k8L3RleHQ+Cjwvc3ZnPgo='
WHERE name = 'Pepsi';

-- Corrigir imagem da Água
UPDATE public.products 
SET image = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMDA2NkNDIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+4cKwZ3VhPC90ZXh0Pgo8L3N2Zz4K'
WHERE name = 'Água';

-- Corrigir imagem do Suco
UPDATE public.products 
SET image = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRkY2NjAwIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+U3VjbzwvdGV4dD4KPC9zdmc+Cg=='
WHERE name = 'Suco';

-- Corrigir imagem da Heineken
UPDATE public.products 
SET image = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMDBGRjAwIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+SGVpbmVrZW48L3RleHQ+Cjwvc3ZnPgo='
WHERE name = 'Heineken';
```

### **PASSO 3: Verificar Resultado**
Execute esta consulta para verificar:

```sql
SELECT 
    p.name,
    p.image,
    CASE 
        WHEN p.image LIKE 'data:%' THEN 'Base64 ✅'
        WHEN p.image LIKE 'https://%' THEN 'URL Externa'
        ELSE 'Outro'
    END as tipo_imagem
FROM public.products p
ORDER BY p.name;
```

---

## 🎨 **O QUE SÃO AS IMAGENS BASE64?**

- **Funcionam offline**: Não dependem de internet
- **Cores diferentes**: Cada produto tem uma cor única
- **Texto do produto**: Nome do produto na imagem
- **Tamanho**: 300x300 pixels

### **Cores dos Produtos:**
- **Coca-Cola**: Vermelho (#FF0000)
- **Pepsi**: Azul (#0066CC)
- **Água**: Azul (#0066CC)
- **Suco**: Laranja (#FF6600)
- **Heineken**: Verde (#00FF00)

---

## ✅ **RESULTADO ESPERADO**

Após a correção:
- ✅ Imagens carregam instantaneamente
- ✅ Não há mais erros `ERR_NAME_NOT_RESOLVED`
- ✅ Produtos têm cores diferentes e identificáveis
- ✅ Funciona offline

---

## 🔄 **PRÓXIMOS PASSOS**

1. **Execute os comandos UPDATE** no DBeaver
2. **Verifique o resultado** com a consulta SELECT
3. **Teste no frontend** para confirmar que as imagens carregam
4. **Se necessário**, ajuste as cores ou textos

---

## ⚠️ **IMPORTANTE**

- **Faça backup** antes de executar
- **Execute um UPDATE por vez** se preferir
- **Teste no frontend** após cada alteração
- **As imagens Base64** são simples mas funcionais

**🎉 Pronto! Agora as imagens dos produtos funcionam perfeitamente!** 