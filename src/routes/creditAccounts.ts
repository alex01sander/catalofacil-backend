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
const customerIdParamSchema = z.object({ customerId: z.string().min(1, 'ID do cliente obrigatório') });

// Buscar informações do cliente para criar crediário
router.get('/customer/:customerId', authenticateJWT, userRateLimit, async (req, res) => {
  if (!req.user) return res.status(401).json({ error: 'Usuário não autenticado' });
  
  const parse = customerIdParamSchema.safeParse(req.params);
  if (!parse.success) {
    return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
  }
  
  try {
    // Validar se o customerId é um UUID válido
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(parse.data.customerId)) {
      return res.status(404).json({ error: 'Cliente não encontrado' });
    }
    
    // Buscar cliente
    const cliente = await prisma.customers.findFirst({
      where: {
        id: parse.data.customerId,
        store_owner_id: req.user.id
      }
    });
    
    if (!cliente) {
      return res.status(404).json({ error: 'Cliente não encontrado' });
    }
    
    // Verificar se já tem crediário
    let crediarioExistente = null;
    if (cliente.phone) {
      crediarioExistente = await prisma.credit_accounts.findFirst({
        where: { customer_phone: cliente.phone }
      });
    }
    
    res.json({
      success: true,
      data: {
        customer: {
          id: cliente.id,
          name: cliente.name,
          phone: cliente.phone,
          email: cliente.email,
          address: cliente.address,
          created_at: cliente.created_at
        },
        creditAccount: crediarioExistente ? {
          id: crediarioExistente.id,
          customer_name: crediarioExistente.customer_name,
          customer_phone: crediarioExistente.customer_phone,
          total_debt: parseFloat(crediarioExistente.total_debt.toString()),
          status: crediarioExistente.status
        } : null
      }
    });
  } catch (error) {
    console.error('Erro ao buscar cliente para crediário:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

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
      res.json({
        success: true,
        data: response.data,
        pagination: response.pagination
      });
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
    // Validar se o id é um UUID válido
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(parse.data.id)) {
      return res.status(404).json({ error: 'Crediário não encontrado' });
    }
    
    const conta = await prisma.credit_accounts.findFirst({
      where: { 
        id: req.params.id,
        user_id: req.user.id
      },
      include: {
        credit_transactions: {
          orderBy: { created_at: 'desc' }
        }
      }
    });
    
    if (!conta) {
      return res.status(404).json({ error: 'Crediário não encontrado' });
    }
    
    // Converter total_debt para número
    const contaComValorNumerico = {
      ...conta,
      total_debt: parseFloat(conta.total_debt.toString())
    };
    
    res.json({
      success: true,
      data: contaComValorNumerico
    });
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
    // Validar dados de entrada
    const dadosParaValidacao = {
      customer_name: req.body.customer_name,
      customer_phone: req.body.customer_phone,
      customer_address: req.body.customer_address
    };
    
    console.log('📝 [CreditAccounts] Dados para validação:', JSON.stringify(dadosParaValidacao, null, 2));
    
    const parse = credit_accountsCreateInputSchema.safeParse(dadosParaValidacao);
    if (!parse.success) {
      console.error('❌ [CreditAccounts] Erro de validação:', parse.error.issues);
      console.error('❌ [CreditAccounts] Erro detalhado:', JSON.stringify(parse.error, null, 2));
      return res.status(400).json({ 
        error: 'Dados inválidos', 
        details: parse.error.issues 
      });
    }
    
    console.log('✅ [CreditAccounts] Dados validados:', JSON.stringify(parse.data, null, 2));
    
    // Verificar se já existe um crediário com o mesmo telefone
    const crediarioExistente = await prisma.credit_accounts.findFirst({
      where: { 
        customer_phone: parse.data.customer_phone,
        user_id: req.user.id
      }
    });
    
    if (crediarioExistente) {
      console.log('❌ [CreditAccounts] Cliente já tem crediário:', crediarioExistente.id);
      return res.status(400).json({ 
        error: 'Cliente já possui crediário ativo',
        existingAccountId: crediarioExistente.id
      });
    }
    
    // Dados para criação
    const dadosParaCriar = {
      user_id: req.user.id,
      customer_name: parse.data.customer_name!,
      customer_phone: parse.data.customer_phone!,
      customer_address: parse.data.customer_address || ''
    };
    
    console.log('📝 [CreditAccounts] Dados para criação:', JSON.stringify(dadosParaCriar, null, 2));
    
    const novaConta = await prisma.credit_accounts.create({ data: dadosParaCriar });
    
    // Limpar cache do usuário
    clearUserCache(req.user.id);
    
    console.log('✅ [CreditAccounts] Conta criada com sucesso:', novaConta.id);
    console.log('📝 [CreditAccounts] === FIM DA REQUISIÇÃO ===');
    
    res.status(201).json({
      success: true,
      data: {
        ...novaConta,
        total_debt: parseFloat(novaConta.total_debt.toString())
      }
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
    // Validar se o id é um UUID válido
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(parse.data.id)) {
      return res.status(404).json({ error: 'Crediário não encontrado' });
    }
    
    // Verificar se a conta existe
    const contaExistente = await prisma.credit_accounts.findFirst({
      where: { 
        id: req.params.id,
        user_id: req.user.id
      }
    });
    
    if (!contaExistente) {
      return res.status(404).json({ error: 'Crediário não encontrado' });
    }
    
    const contaAtualizada = await prisma.credit_accounts.update({
      where: { id: req.params.id },
      data: parseBody.data
    });
    
    // Limpar cache do usuário
    clearUserCache(req.user.id);
    
    res.json({
      success: true,
      data: {
        ...contaAtualizada,
        total_debt: parseFloat(contaAtualizada.total_debt.toString())
      }
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
    // Validar se o id é um UUID válido
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(parse.data.id)) {
      return res.status(404).json({ error: 'Crediário não encontrado' });
    }
    
    // Verificar se a conta pertence ao usuário
    const contaExistente = await prisma.credit_accounts.findFirst({
      where: { 
        id: req.params.id,
        user_id: req.user.id
      }
    });
    
    if (!contaExistente) {
      return res.status(404).json({ error: 'Crediário não encontrado' });
    }
    
    // Verificar se há dívidas pendentes
    if (parseFloat(contaExistente.total_debt.toString()) > 0) {
      return res.status(400).json({ 
        error: 'Não é possível excluir crediário com dívidas pendentes',
        total_debt: parseFloat(contaExistente.total_debt.toString())
      });
    }
    
    await prisma.credit_accounts.delete({
      where: { id: req.params.id }
    });
    
    // Limpar cache do usuário
    clearUserCache(req.user.id);
    
    res.json({
      success: true,
      message: 'Crediário excluído com sucesso'
    });
  } catch (error) {
    console.error('Erro ao deletar conta de crédito:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Adicionar transação ao crediário
router.post('/:id/transactions', authenticateJWT, userRateLimit, async (req, res) => {
  if (!req.user) return res.status(401).json({ error: 'Usuário não autenticado' });
  
  const parse = idParamSchema.safeParse(req.params);
  if (!parse.success) {
    return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
  }
  
  try {
    // Validar se o id é um UUID válido
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(parse.data.id)) {
      return res.status(404).json({ error: 'Crediário não encontrado' });
    }
    
    // Verificar se o crediário existe
    const crediario = await prisma.credit_accounts.findFirst({
      where: { 
        id: req.params.id,
        user_id: req.user.id
      }
    });
    
    if (!crediario) {
      return res.status(404).json({ error: 'Crediário não encontrado' });
    }
    
    // Validar dados da transação
    const { type, amount, description } = req.body;
    
    if (!type || !amount || !description) {
      return res.status(400).json({ error: 'Tipo, valor e descrição são obrigatórios' });
    }
    
    if (!['debito', 'pagamento'].includes(type)) {
      return res.status(400).json({ error: 'Tipo deve ser "debito" ou "pagamento"' });
    }
    
    if (typeof amount !== 'number' || amount <= 0) {
      return res.status(400).json({ error: 'Valor deve ser um número positivo' });
    }
    
    // Criar transação
    const transacao = await prisma.credit_transactions.create({
      data: {
        credit_account_id: req.params.id,
        user_id: req.user.id,
        type,
        amount,
        description
      }
    });
    
    // Atualizar total_debt do crediário
    const novoTotal = type === 'debito' 
      ? parseFloat(crediario.total_debt.toString()) + amount
      : parseFloat(crediario.total_debt.toString()) - amount;
    
    await prisma.credit_accounts.update({
      where: { id: req.params.id },
      data: { total_debt: novoTotal }
    });
    
    // Limpar cache do usuário
    clearUserCache(req.user.id);
    
    res.status(201).json({
      success: true,
      data: {
        ...transacao,
        amount: parseFloat(transacao.amount.toString())
      }
    });
  } catch (error) {
    console.error('Erro ao adicionar transação:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Listar transações do crediário
router.get('/:id/transactions', authenticateJWT, userRateLimit, async (req, res) => {
  if (!req.user) return res.status(401).json({ error: 'Usuário não autenticado' });
  
  const parse = idParamSchema.safeParse(req.params);
  if (!parse.success) {
    return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
  }
  
  try {
    // Validar se o id é um UUID válido
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(parse.data.id)) {
      return res.status(404).json({ error: 'Crediário não encontrado' });
    }
    
    // Verificar se o crediário existe
    const crediario = await prisma.credit_accounts.findFirst({
      where: { 
        id: req.params.id,
        user_id: req.user.id
      }
    });
    
    if (!crediario) {
      return res.status(404).json({ error: 'Crediário não encontrado' });
    }
    
    // Buscar transações
    const transacoes = await prisma.credit_transactions.findMany({
      where: { credit_account_id: req.params.id },
      orderBy: { created_at: 'desc' }
    });
    
    // Converter amount para número
    const transacoesComValorNumerico = transacoes.map(transacao => ({
      ...transacao,
      amount: parseFloat(transacao.amount.toString())
    }));
    
    res.json({
      success: true,
      data: transacoesComValorNumerico
    });
  } catch (error) {
    console.error('Erro ao listar transações:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

export default router; 