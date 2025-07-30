import { Router } from 'express';
import prisma from '../lib/prisma';
import { credit_accountsCreateInputSchema, credit_accountsUpdateInputSchema } from '../zod';
import authenticateJWT from '../middleware/auth';
import { userRateLimit } from '../middleware/rateLimiter';
import { paginationMiddleware, paginationHeaders, createPaginatedResponse, getPrismaQuery } from '../middleware/pagination';
import { cacheMiddleware, clearUserCache, generateCacheKey } from '../lib/cache';
import { z } from 'zod';

const router = Router();
const idParamSchema = z.object({ id: z.string().min(1, 'ID obrigatório') });

// Listar contas de crédito do usuário
router.get('/', 
  authenticateJWT, 
  userRateLimit,
  paginationMiddleware,
  paginationHeaders,
  cacheMiddleware(300, (req) => generateCacheKey('credit-accounts', req.user.id, {
    page: req.pagination?.page,
    limit: req.pagination?.limit,
    search: req.query.search,
    status: req.query.status
  })),
  async (req, res) => {
    if (!req.user) return res.status(401).json({ error: 'Usuário não autenticado' });
    
    try {
      // Construir filtros
      const where: any = { user_id: req.user.id };
      
      // Filtro por busca
      if (req.query.search) {
        where.OR = [
          { customer_name: { contains: req.query.search as string, mode: 'insensitive' } },
          { customer_phone: { contains: req.query.search as string, mode: 'insensitive' } }
        ];
      }
      
      // Filtro por status
      if (req.query.status) {
        where.status = req.query.status as string;
      }
      
      // Query com paginação
      const paginationQuery = getPrismaQuery(req.pagination!, 'created_at');
      
      // Buscar contas e contagem total em paralelo
      const [contas, totalCount] = await Promise.all([
        prisma.credit_accounts.findMany({
          where,
          include: {
            credit_transactions: {
              orderBy: { created_at: 'desc' },
              take: 5 // Últimas 5 transações
            }
          },
          ...paginationQuery
        }),
        prisma.credit_accounts.count({ where })
      ]);
      
      // Converter total_debt de string para número
      const contasComValorNumerico = contas.map(conta => ({
        ...conta,
        total_debt: parseFloat(conta.total_debt.toString())
      }));
      
      const response = createPaginatedResponse(contasComValorNumerico, totalCount, req.pagination!);
      res.json(response);
    } catch (error) {
      console.error('Erro ao listar contas de crédito:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// Buscar conta de crédito por ID
router.get('/:id', authenticateJWT, async (req, res) => {
  if (!req.user) return res.status(401).json({ error: 'Usuário não autenticado' });
  
  const parse = idParamSchema.safeParse(req.params);
  if (!parse.success) {
    return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
  }
  
  try {
    const conta = await prisma.credit_accounts.findFirst({
      where: { 
        id: req.params.id,
        user_id: req.user.id
      },
      include: {
        credit_transactions: {
          include: {
            credit_installments: {
              orderBy: { due_date: 'asc' }
            }
          },
          orderBy: { created_at: 'desc' }
        }
      }
    });
    
    if (!conta) {
      return res.status(404).json({ error: 'Conta de crédito não encontrada' });
    }
    
    // Converter total_debt para número
    const contaComValorNumerico = {
      ...conta,
      total_debt: parseFloat(conta.total_debt.toString())
    };
    
    res.json(contaComValorNumerico);
  } catch (error) {
    console.error('Erro ao buscar conta de crédito:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Criar conta de crédito
router.post('/', authenticateJWT, userRateLimit, async (req, res) => {
  if (!req.user) return res.status(401).json({ error: 'Usuário não autenticado' });
  
  console.log('📝 [CreditAccounts] === INÍCIO DA REQUISIÇÃO ===');
  console.log('📝 [CreditAccounts] Headers:', {
    'content-type': req.headers['content-type'],
    'authorization': req.headers.authorization ? 'Bearer ***' : 'Não fornecido'
  });
  console.log('📝 [CreditAccounts] Payload recebido:', JSON.stringify(req.body, null, 2));
  console.log('📝 [CreditAccounts] User ID:', req.user.id);
  
  try {
    // Preparar dados para validação
    const dadosParaValidacao = {
      ...req.body,
      user_id: req.user.id
    };
    
    console.log('📝 [CreditAccounts] Dados para validação:', JSON.stringify(dadosParaValidacao, null, 2));
    
    // Validar dados com Zod
    const parse = credit_accountsCreateInputSchema.safeParse(dadosParaValidacao);
    
    if (!parse.success) {
      console.error('❌ [CreditAccounts] Erro de validação:', parse.error.issues);
      console.error('❌ [CreditAccounts] Erro detalhado:', JSON.stringify(parse.error, null, 2));
      return res.status(400).json({ 
        error: 'Dados inválidos', 
        details: parse.error.issues,
        receivedData: req.body,
        validationErrors: parse.error.issues
      });
    }
    
    console.log('✅ [CreditAccounts] Dados validados:', JSON.stringify(parse.data, null, 2));
    
    // Verificar se já existe cliente com este telefone
    const clienteExistente = await prisma.credit_accounts.findFirst({
      where: {
        customer_phone: parse.data.customer_phone,
        user_id: req.user.id
      }
    });
    
    if (clienteExistente) {
      console.log('❌ [CreditAccounts] Cliente já existe:', clienteExistente.id);
      return res.status(400).json({ 
        error: 'Cliente já existe', 
        existingCustomer: {
          id: clienteExistente.id,
          name: clienteExistente.customer_name,
          phone: clienteExistente.customer_phone
        }
      });
    }
    
    // Verificar se os dados estão corretos antes de salvar
    console.log('📝 [CreditAccounts] Verificando dados antes de salvar:', {
      user_id: parse.data.user_id,
      store_id: parse.data.store_id,
      customer_name: parse.data.customer_name,
      customer_phone: parse.data.customer_phone,
      customer_address: parse.data.customer_address,
      total_debt: parse.data.total_debt,
      status: parse.data.status
    });
    
    // Garantir que user_id seja definido
    const dadosParaCriar = {
      ...parse.data,
      user_id: req.user.id // Sempre usar o ID do usuário autenticado
    };
    
    const novaConta = await prisma.credit_accounts.create({ data: dadosParaCriar });
    
    // Limpar cache do usuário
    clearUserCache(req.user.id);
    
    console.log('✅ [CreditAccounts] Conta criada com sucesso:', novaConta.id);
    console.log('📝 [CreditAccounts] === FIM DA REQUISIÇÃO ===');
    
    res.status(201).json({
      ...novaConta,
      total_debt: parseFloat(novaConta.total_debt.toString())
    });
  } catch (error) {
    console.error('❌ [CreditAccounts] Erro ao criar conta:', error);
    console.error('❌ [CreditAccounts] Stack trace:', error instanceof Error ? error.stack : 'Stack não disponível');
    console.error('❌ [CreditAccounts] === FIM COM ERRO ===');
    
    res.status(500).json({ 
      error: 'Erro interno do servidor', 
      details: error instanceof Error ? error.message : 'Erro desconhecido',
      stack: process.env.NODE_ENV === 'development' && error instanceof Error ? error.stack : undefined
    });
  }
});

// Atualizar conta de crédito
router.put('/:id', authenticateJWT, userRateLimit, async (req, res) => {
  if (!req.user) return res.status(401).json({ error: 'Usuário não autenticado' });
  
  const parse = idParamSchema.safeParse(req.params);
  if (!parse.success) {
    return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
  }
  
  const parseBody = credit_accountsUpdateInputSchema.safeParse(req.body);
  if (!parseBody.success) {
    return res.status(400).json({ error: 'Dados inválidos', details: parseBody.error.issues });
  }
  
  try {
    // Verificar se a conta pertence ao usuário
    const contaExistente = await prisma.credit_accounts.findFirst({
      where: { 
        id: req.params.id,
        user_id: req.user.id
      }
    });
    
    if (!contaExistente) {
      return res.status(404).json({ error: 'Conta de crédito não encontrada' });
    }
    
    const contaAtualizada = await prisma.credit_accounts.update({
      where: { id: req.params.id },
      data: parseBody.data
    });
    
    // Limpar cache do usuário
    clearUserCache(req.user.id);
    
    res.json({
      ...contaAtualizada,
      total_debt: parseFloat(contaAtualizada.total_debt.toString())
    });
  } catch (error) {
    console.error('Erro ao atualizar conta de crédito:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Deletar conta de crédito
router.delete('/:id', authenticateJWT, userRateLimit, async (req, res) => {
  if (!req.user) return res.status(401).json({ error: 'Usuário não autenticado' });
  
  const parse = idParamSchema.safeParse(req.params);
  if (!parse.success) {
    return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
  }
  
  try {
    // Verificar se a conta pertence ao usuário
    const contaExistente = await prisma.credit_accounts.findFirst({
      where: { 
        id: req.params.id,
        user_id: req.user.id
      }
    });
    
    if (!contaExistente) {
      return res.status(404).json({ error: 'Conta de crédito não encontrada' });
    }
    
    // Verificar se há dívidas pendentes
    if (parseFloat(contaExistente.total_debt.toString()) > 0) {
      return res.status(400).json({ 
        error: 'Não é possível deletar cliente com dívidas pendentes',
        total_debt: parseFloat(contaExistente.total_debt.toString())
      });
    }
    
    await prisma.credit_accounts.delete({ where: { id: req.params.id } });
    
    // Limpar cache do usuário
    clearUserCache(req.user.id);
    
    res.status(204).send();
  } catch (error) {
    console.error('Erro ao deletar conta de crédito:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Buscar transações de um cliente específico
router.get('/:id/transactions', authenticateJWT, userRateLimit, async (req, res) => {
  if (!req.user) return res.status(401).json({ error: 'Usuário não autenticado' });
  
  const parse = idParamSchema.safeParse(req.params);
  if (!parse.success) {
    return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
  }
  
  try {
    // Verificar se a conta pertence ao usuário
    const conta = await prisma.credit_accounts.findFirst({
      where: { 
        id: req.params.id,
        user_id: req.user.id
      }
    });
    
    if (!conta) {
      return res.status(404).json({ error: 'Conta de crédito não encontrada' });
    }
    
    // Buscar transações da conta
    const transacoes = await prisma.credit_transactions.findMany({
      where: { 
        credit_account_id: req.params.id,
        user_id: req.user.id
      },
      include: {
        credit_installments: {
          orderBy: { due_date: 'asc' }
        }
      },
      orderBy: { created_at: 'desc' }
    });
    
    // Converter amounts para números
    const transacoesComValorNumerico = transacoes.map(transacao => ({
      ...transacao,
      amount: parseFloat(transacao.amount.toString())
    }));
    
    res.json({
      success: true,
      data: transacoesComValorNumerico,
      count: transacoesComValorNumerico.length
    });
  } catch (error) {
    console.error('Erro ao buscar transações do cliente:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

export default router; 