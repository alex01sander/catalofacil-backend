import { Router } from 'express';
import prisma from '../lib/prisma';
import { customersCreateInputSchema, customersUpdateInputSchema } from '../zod';
import authenticateJWT from '../middleware/auth';
import { z } from 'zod';

const router = Router();
const idParamSchema = z.object({ id: z.string().min(1, 'ID obrigatório') });

// Listar todos os clientes
router.get('/', authenticateJWT, async (req, res) => {
  const clientes = await prisma.customers.findMany({ include: { stores: true, orders: true } });
  res.json(clientes);
});

// Listar clientes disponíveis para crediário (que não têm conta de crédito)
router.get('/available-for-credit', authenticateJWT, async (req, res) => {
  try {
    // Buscar todos os clientes do usuário
    const todosClientes = await prisma.customers.findMany({
      where: { store_owner_id: req.user!.id },
      select: {
        id: true,
        name: true,
        phone: true,
        email: true,
        address: true,
        created_at: true
      }
    });

    // Buscar telefones que já têm conta de crédito
    const contasExistentes = await prisma.credit_accounts.findMany({
      where: {
        customer_phone: {
          in: todosClientes.map(c => c.phone).filter(Boolean) as string[]
        }
      },
      select: { customer_phone: true }
    });

    const telefonesComCrediario = new Set(contasExistentes.map(c => c.customer_phone));

    // Filtrar clientes que não têm crediário
    const clientesDisponiveis = todosClientes.filter(cliente => 
      !cliente.phone || !telefonesComCrediario.has(cliente.phone)
    );

    res.json({
      available: clientesDisponiveis,
      total: clientesDisponiveis.length,
      message: 'Clientes disponíveis para criar crediário'
    });
  } catch (error) {
    console.error('Erro ao buscar clientes disponíveis:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Buscar cliente por ID
router.get('/:id', authenticateJWT, async (req, res) => {
  const parse = idParamSchema.safeParse(req.params);
  if (!parse.success) {
    return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
  }
  
  const cliente = await prisma.customers.findUnique({
    where: { id: req.params.id },
    include: { stores: true, orders: true }
  });
  
  if (!cliente) return res.status(404).json({ error: 'Cliente não encontrado' });
  res.json(cliente);
});

// Criar cliente
router.post('/', authenticateJWT, async (req, res) => {
  const parse = customersCreateInputSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({ error: 'Dados inválidos', details: parse.error.issues });
  }
  
  try {
    // Verificar se já existe cliente com o mesmo email
    if (parse.data.email) {
      const clienteExistente = await prisma.customers.findFirst({
        where: { email: parse.data.email }
      });
      
      if (clienteExistente) {
        return res.status(400).json({ error: 'Email já está em uso' });
      }
    }
    
    const novo = await prisma.customers.create({ data: parse.data });
    res.status(201).json(novo);
  } catch (e) {
    console.error('Erro ao criar cliente:', e);
    res.status(400).json({ error: 'Erro ao criar cliente' });
  }
});

// Atualizar cliente
router.put('/:id', authenticateJWT, async (req, res) => {
  const parseParams = idParamSchema.safeParse(req.params);
  if (!parseParams.success) {
    return res.status(400).json({ error: 'Parâmetro inválido', details: parseParams.error.issues });
  }
  
  const parseBody = customersUpdateInputSchema.safeParse(req.body);
  if (!parseBody.success) {
    return res.status(400).json({ error: 'Dados inválidos', details: parseBody.error.issues });
  }
  
  try {
    // Verificar se o cliente existe
    const clienteExistente = await prisma.customers.findUnique({
      where: { id: req.params.id }
    });
    
    if (!clienteExistente) {
      return res.status(404).json({ error: 'Cliente não encontrado' });
    }
    
    const atualizado = await prisma.customers.update({
      where: { id: req.params.id },
      data: parseBody.data,
    });
    res.json(atualizado);
  } catch (e) {
    console.error('Erro ao atualizar cliente:', e);
    res.status(400).json({ error: 'Erro ao atualizar cliente' });
  }
});

// Deletar cliente
router.delete('/:id', authenticateJWT, async (req, res) => {
  const parse = idParamSchema.safeParse(req.params);
  if (!parse.success) {
    return res.status(400).json({ error: 'Parâmetro inválido', details: parse.error.issues });
  }
  
  try {
    // Verificar se o cliente existe
    const clienteExistente = await prisma.customers.findUnique({
      where: { id: req.params.id }
    });
    
    if (!clienteExistente) {
      return res.status(404).json({ error: 'Cliente não encontrado' });
    }
    
    await prisma.customers.delete({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (e) {
    console.error('Erro ao deletar cliente:', e);
    res.status(400).json({ error: 'Erro ao deletar cliente' });
  }
});

export default router;
