import express, { Request, Response } from 'express';
import { authenticateAdmin } from '../middleware/adminAuth';
import prisma from '../lib/prisma';
import crypto from 'crypto';

interface AdminRequest extends Request {
  admin?: {
    id: string;
    email: string;
    role: string;
  };
}

const router = express.Router();

// Middleware de autenticação admin para todas as rotas do controller
router.use(authenticateAdmin);

// ===== DASHBOARD PRINCIPAL DO CONTROLLER =====
router.get('/', async (req: AdminRequest, res: Response) => {
  try {
    // Estatísticas gerais do sistema
    const totalUsers = await prisma.users.count();
    const totalStores = await prisma.stores.count();
    const totalProducts = await prisma.products.count();
    const totalCustomers = await prisma.customers.count();
    const totalOrders = await prisma.orders.count();
    const totalSales = await prisma.sales.count();
    const totalDomains = await prisma.domain_owners.count();
    
    // Vendas do mês
    const currentMonth = new Date();
    currentMonth.setDate(1);
    currentMonth.setHours(0, 0, 0, 0);
    
    const monthlySales = await prisma.sales.aggregate({
      where: {
        created_at: {
          gte: currentMonth
        }
      },
      _sum: {
        total_price: true
      }
    });
    
    // Produtos mais vendidos
    const topProducts = await prisma.sales.groupBy({
      by: ['product_name'],
      _sum: {
        quantity: true
      },
      orderBy: {
        _sum: {
          quantity: 'desc'
        }
      },
      take: 5
    });
    
    // Domínios mais recentes
    const recentDomains = await prisma.domain_owners.findMany({
      include: {
        users: {
          select: {
            id: true,
            email: true,
            role: true
          }
        }
      },
      orderBy: {
        created_at: 'desc'
      },
      take: 5
    });
    
    res.json({
      message: 'Controller Admin Dashboard',
      stats: {
        totalUsers,
        totalStores,
        totalProducts,
        totalCustomers,
        totalOrders,
        totalSales,
        totalDomains,
        monthlyRevenue: monthlySales._sum.total_price || 0
      },
      topProducts,
      recentDomains,
      admin: req.admin
    });
  } catch (error) {
    console.error('Erro no controller dashboard:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// ===== GERENCIAMENTO DE DOMÍNIOS =====
router.get('/domains', async (req, res) => {
  try {
    const { page = 1, limit = 10, search = '' } = req.query;
    const skip = (Number(page) - 1) * Number(limit);
    
    const where = search ? {
      OR: [
        { domain: { contains: search as string, mode: 'insensitive' as any } },
        { domain_type: { contains: search as string, mode: 'insensitive' as any } }
      ]
    } : {};
    
    const [domains, total] = await Promise.all([
      prisma.domain_owners.findMany({
        where,
        include: {
          users: {
            select: {
              id: true,
              email: true,
              role: true,
              created_at: true
            }
          }
        },
        skip,
        take: Number(limit),
        orderBy: { created_at: 'desc' }
      }),
      prisma.domain_owners.count({ where })
    ]);
    
    res.json({
      domains,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        pages: Math.ceil(total / Number(limit))
      }
    });
  } catch (error) {
    console.error('Erro ao listar domínios:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

router.post('/domains', async (req, res) => {
  try {
    const { domain, user_id, domain_type = 'domain' } = req.body;
    
    if (!domain || !user_id) {
      return res.status(400).json({
        error: 'Domínio e user_id são obrigatórios'
      });
    }
    
    // Verificar se o domínio já existe
    const existingDomain = await prisma.domain_owners.findUnique({
      where: { domain }
    });
    
    if (existingDomain) {
      return res.status(409).json({ error: 'Domínio já cadastrado' });
    }
    
    // Verificar se o usuário existe
    const user = await prisma.users.findUnique({
      where: { id: user_id }
    });
    
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    
    const newDomain = await prisma.domain_owners.create({
      data: {
        domain,
        user_id,
        domain_type
      },
      include: {
        users: {
          select: {
            id: true,
            email: true,
            role: true,
            created_at: true
          }
        }
      }
    });
    
    res.status(201).json({
      message: 'Domínio criado com sucesso',
      domain: newDomain
    });
  } catch (error) {
    console.error('Erro ao criar domínio:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

router.get('/domains/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const domain = await prisma.domain_owners.findUnique({
      where: { id },
      include: {
        users: {
          select: {
            id: true,
            email: true,
            role: true,
            created_at: true
          }
        }
      }
    });
    
    if (!domain) {
      return res.status(404).json({ error: 'Domínio não encontrado' });
    }
    
    res.json({ domain });
  } catch (error) {
    console.error('Erro ao buscar domínio:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

router.put('/domains/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { domain, user_id, domain_type } = req.body;
    
    // Verificar se o domínio existe
    const existingDomain = await prisma.domain_owners.findUnique({
      where: { id }
    });
    
    if (!existingDomain) {
      return res.status(404).json({ error: 'Domínio não encontrado' });
    }
    
    // Se mudou o domínio, verificar se não existe outro com o mesmo nome
    if (domain && domain !== existingDomain.domain) {
      const duplicateDomain = await prisma.domain_owners.findUnique({
        where: { domain }
      });
      
      if (duplicateDomain) {
        return res.status(409).json({ error: 'Domínio já cadastrado' });
      }
    }
    
    // Se mudou o user_id, verificar se o usuário existe
    if (user_id && user_id !== existingDomain.user_id) {
      const user = await prisma.users.findUnique({
        where: { id: user_id }
      });
      
      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }
    }
    
    const updatedDomain = await prisma.domain_owners.update({
      where: { id },
      data: {
        domain: domain || undefined,
        user_id: user_id || undefined,
        domain_type: domain_type || undefined,
        updated_at: new Date()
      },
      include: {
        users: {
          select: {
            id: true,
            email: true,
            role: true,
            created_at: true
          }
        }
      }
    });
    
    res.json({
      message: 'Domínio atualizado com sucesso',
      domain: updatedDomain
    });
  } catch (error) {
    console.error('Erro ao atualizar domínio:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

router.delete('/domains/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const domain = await prisma.domain_owners.findUnique({
      where: { id }
    });
    
    if (!domain) {
      return res.status(404).json({ error: 'Domínio não encontrado' });
    }
    
    await prisma.domain_owners.delete({
      where: { id }
    });
    
    res.json({
      message: 'Domínio deletado com sucesso',
      deletedDomain: domain
    });
  } catch (error) {
    console.error('Erro ao deletar domínio:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// ===== CADASTRO COMPLETO DE DOMÍNIO E USUÁRIO =====
router.post('/register-domain-user', async (req, res) => {
  try {
    const {
      domain,
      user_email,
      user_password,
      user_role = 'admin',
      domain_type = 'domain',
      user_id = null
    } = req.body;

    if (!domain || !user_email || !user_password) {
      return res.status(400).json({
        error: 'Domínio, email e senha são obrigatórios'
      });
    }

    // Verificar se o domínio já existe
    const existingDomain = await prisma.domain_owners.findUnique({ 
      where: { domain } 
    });
    
    if (existingDomain) {
      return res.status(409).json({ error: 'Domínio já cadastrado' });
    }

    // Verificar se o email já existe
    const existingUser = await prisma.users.findFirst({ 
      where: { email: user_email } 
    });
    
    if (existingUser) {
      return res.status(409).json({ error: 'Email já cadastrado' });
    }

    const finalUserId = user_id || crypto.randomUUID();

    // Criar o usuário
    const newUser = await prisma.users.create({
      data: {
        id: finalUserId,
        email: user_email,
        encrypted_password: user_password, // Em produção, deve ser hasheada
        role: user_role,
        created_at: new Date(),
        updated_at: new Date()
      }
    });

    // Criar o domínio
    const newDomain = await prisma.domain_owners.create({
      data: {
        domain,
        user_id: newUser.id,
        domain_type
      }
    });

    // Buscar o resultado completo
    const result = await prisma.domain_owners.findUnique({
      where: { id: newDomain.id },
      include: {
        users: {
          select: {
            id: true,
            email: true,
            role: true,
            created_at: true
          }
        }
      }
    });

    res.status(201).json({
      message: 'Domínio e usuário cadastrados com sucesso',
      domain: result,
      user: {
        id: newUser.id,
        email: newUser.email,
        role: newUser.role
      }
    });
  } catch (error) {
    console.error('Erro ao cadastrar domínio e usuário:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// ===== GERENCIAMENTO DE USUÁRIOS =====
router.get('/users', async (req, res) => {
  try {
    const { page = 1, limit = 10, search = '' } = req.query;
    const skip = (Number(page) - 1) * Number(limit);
    
    const where = search ? {
      OR: [
        { email: { contains: search as string, mode: 'insensitive' as any } },
        { id: { contains: search as string, mode: 'insensitive' as any } }
      ]
    } : {};
    
    const [users, total] = await Promise.all([
      prisma.users.findMany({
        where,
        select: {
          id: true,
          email: true,
          role: true,
          created_at: true,
          updated_at: true
        },
        skip,
        take: Number(limit),
        orderBy: { created_at: 'desc' }
      }),
      prisma.users.count({ where })
    ]);
    
    res.json({
      users,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        pages: Math.ceil(total / Number(limit))
      }
    });
  } catch (error) {
    console.error('Erro ao listar usuários:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// ===== GERENCIAMENTO DE LOJAS =====
router.get('/stores', async (req, res) => {
  try {
    const { page = 1, limit = 10, search = '' } = req.query;
    const skip = (Number(page) - 1) * Number(limit);
    
    const where = search ? {
      OR: [
        { name: { contains: search as string, mode: 'insensitive' as any } },
        { slug: { contains: search as string, mode: 'insensitive' as any } }
      ]
    } : {};
    
    const [stores, total] = await Promise.all([
      prisma.stores.findMany({
        where,
        include: {
          users: {
            select: {
              id: true,
              email: true,
              role: true
            }
          }
        },
        skip,
        take: Number(limit),
        orderBy: { created_at: 'desc' }
      }),
      prisma.stores.count({ where })
    ]);
    
    res.json({
      stores,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        pages: Math.ceil(total / Number(limit))
      }
    });
  } catch (error) {
    console.error('Erro ao listar lojas:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// ===== RELATÓRIOS =====
router.get('/reports/sales', async (req, res) => {
  try {
    const { startDate, endDate, storeId } = req.query;
    
    const where: any = {};
    
    if (startDate && endDate) {
      where.created_at = {
        gte: new Date(startDate as string),
        lte: new Date(endDate as string)
      };
    }
    
    if (storeId) {
      where.store_id = storeId;
    }
    
    const sales = await prisma.sales.findMany({
      where,
      include: {
        stores: {
          select: {
            name: true,
            slug: true
          }
        }
      },
      orderBy: { created_at: 'desc' }
    });
    
    const summary = await prisma.sales.aggregate({
      where,
      _sum: {
        total_price: true,
        quantity: true
      },
      _count: true
    });
    
    res.json({
      sales,
      summary: {
        totalSales: summary._count,
        totalRevenue: summary._sum.total_price || 0,
        totalQuantity: summary._sum.quantity || 0,
        averagePrice: 0 // Calculado dinamicamente se necessário
      }
    });
  } catch (error) {
    console.error('Erro ao gerar relatório de vendas:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

export default router; 