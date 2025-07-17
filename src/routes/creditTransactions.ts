import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { credit_transactionsCreateInputSchema, credit_transactionsUpdateInputSchema } from '../zod';

const router = Router();
const prisma = new PrismaClient();

// Listar todas as transações de crédito
router.get('/', async (req, res) => {
  const transacoes = await prisma.credit_transactions.findMany({ include: { credit_accounts: true } });
  res.json(transacoes);
});

// Buscar transação de crédito por ID
router.get('/:id', async (req, res) => {
  const transacao = await prisma.credit_transactions.findUnique({
    where: { id: req.params.id },
    include: { credit_accounts: true }
  });
  if (!transacao) return res.status(404).json({ error: 'Transação não encontrada' });
  res.json(transacao);
});

// Criar transação de crédito
router.post('/', async (req, res) => {
  const parse = credit_transactionsCreateInputSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({ error: 'Dados inválidos', details: parse.error.issues });
  }
  try {
    const user = (req as any).user;
    if (!user || !user.id) {
      return res.status(401).json({ error: 'Usuário não autenticado' });
    }
    const { credit_account_id, type, amount, description } = parse.data;

    // Validação do credit_account_id
    const conta = await prisma.credit_accounts.findUnique({
      where: { id: credit_account_id }
    });
    if (!conta) {
      return res.status(400).json({ error: 'Conta de crédito não encontrada' });
    }

    const nova = await prisma.credit_transactions.create({
      data: {
        user_id: user.id,
        credit_account_id,
        type,
        amount: String(amount),
        description,
        date: new Date(),
      },
    });

    // Atualiza total_debt e status da conta de crédito
    if (type === 'debt') {
      await prisma.credit_accounts.update({
        where: { id: credit_account_id },
        data: {
          total_debt: { increment: amount },
          status: 'aguardando_pagamento',
        },
      });
    } else if (type === 'payment') {
      const conta = await prisma.credit_accounts.findUnique({ where: { id: credit_account_id } });
      const novoTotal = Number(conta?.total_debt || 0) - Number(amount);
      await prisma.credit_accounts.update({
        where: { id: credit_account_id },
        data: {
          total_debt: { decrement: amount },
          status: novoTotal <= 0 ? 'quitado' : 'aguardando_pagamento',
        },
      });
    }
    res.status(201).json(nova);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao criar transação de crédito', details: e });
  }
});

// Atualizar transação de crédito
router.put('/:id', async (req, res) => {
  const parse = credit_transactionsUpdateInputSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({ error: 'Dados inválidos', details: parse.error.issues });
  }
  try {
    const atualizada = await prisma.credit_transactions.update({
      where: { id: req.params.id },
      data: parse.data,
    });
    res.json(atualizada);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao atualizar transação de crédito', details: e });
  }
});

// Deletar transação de crédito
router.delete('/:id', async (req, res) => {
  try {
    await prisma.credit_transactions.delete({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (e) {
    res.status(400).json({ error: 'Erro ao deletar transação', details: e });
  }
});

export default router; 