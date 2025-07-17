import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Listar todas as vendas
router.get('/', async (req, res) => {
  const vendas = await prisma.sales.findMany({ include: { stores: true } });
  res.json(vendas);
});

// Buscar venda por ID
router.get('/:id', async (req, res) => {
  const venda = await prisma.sales.findUnique({
    where: { id: req.params.id },
    include: { stores: true }
  });
  if (!venda) return res.status(404).json({ error: 'Venda não encontrada' });
  res.json(venda);
});

// Criar venda
router.post('/', async (req, res) => {
  try {
    const { product_id, ...saleData } = req.body;
    const nova = await prisma.sales.create({ data: saleData });
    // Atualizar estoque do produto
    if (product_id) {
      const produto = await prisma.products.findUnique({ where: { id: product_id } });
      if (produto) {
        const novoEstoque = produto.stock - Number(saleData.quantity);
        await prisma.products.update({
          where: { id: product_id },
          data: {
            stock: novoEstoque,
            is_active: novoEstoque > 0
          }
        });
      }
    }
    res.status(201).json(nova);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao criar venda', details: e });
  }
});

// Atualizar venda
router.put('/:id', async (req, res) => {
  try {
    const atualizada = await prisma.sales.update({
      where: { id: req.params.id },
      data: req.body,
    });
    res.json(atualizada);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao atualizar venda', details: e });
  }
});

// Deletar venda
router.delete('/:id', async (req, res) => {
  try {
    await prisma.sales.delete({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (e) {
    res.status(400).json({ error: 'Erro ao deletar venda', details: e });
  }
});

export default router; 