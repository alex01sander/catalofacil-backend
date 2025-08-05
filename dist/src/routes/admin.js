"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const adminAuth_1 = require("../middleware/adminAuth");
const prisma_1 = __importDefault(require("../lib/prisma"));
const crypto_1 = __importDefault(require("crypto"));
const router = express_1.default.Router();
// Middleware de autenticação admin para todas as rotas
router.use(adminAuth_1.authenticateAdmin);
// ===== DASHBOARD ADMIN =====
router.get('/dashboard', async (req, res) => {
    try {
        // Estatísticas gerais
        const totalUsers = await prisma_1.default.users.count();
        const totalStores = await prisma_1.default.stores.count();
        const totalProducts = await prisma_1.default.products.count();
        const totalCustomers = await prisma_1.default.customers.count();
        const totalOrders = await prisma_1.default.orders.count();
        const totalSales = await prisma_1.default.sales.count();
        // Vendas do mês
        const currentMonth = new Date();
        currentMonth.setDate(1);
        currentMonth.setHours(0, 0, 0, 0);
        const monthlySales = await prisma_1.default.sales.aggregate({
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
        const topProducts = await prisma_1.default.sales.groupBy({
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
        res.json({
            stats: {
                totalUsers,
                totalStores,
                totalProducts,
                totalCustomers,
                totalOrders,
                totalSales,
                monthlyRevenue: monthlySales._sum.total_price || 0
            },
            topProducts
        });
    }
    catch (error) {
        console.error('Erro no dashboard:', error);
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
                { email: { contains: search, mode: 'insensitive' } },
                { id: { contains: search, mode: 'insensitive' } }
            ]
        } : {};
        const [users, total] = await Promise.all([
            prisma_1.default.users.findMany({
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
            prisma_1.default.users.count({ where })
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
    }
    catch (error) {
        console.error('Erro ao buscar usuários:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
router.get('/users/:id', async (req, res) => {
    try {
        const user = await prisma_1.default.users.findUnique({
            where: { id: req.params.id },
            select: {
                id: true,
                email: true,
                role: true,
                created_at: true,
                updated_at: true
            }
        });
        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.json(user);
    }
    catch (error) {
        console.error('Erro ao buscar usuário:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
router.put('/users/:id', async (req, res) => {
    try {
        const { role } = req.body;
        const user = await prisma_1.default.users.update({
            where: { id: req.params.id },
            data: { role },
            select: {
                id: true,
                email: true,
                role: true,
                updated_at: true
            }
        });
        res.json(user);
    }
    catch (error) {
        console.error('Erro ao atualizar usuário:', error);
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
                { name: { contains: search, mode: 'insensitive' } },
                { slug: { contains: search, mode: 'insensitive' } }
            ]
        } : {};
        const [stores, total] = await Promise.all([
            prisma_1.default.stores.findMany({
                where,
                include: {
                    users: {
                        select: {
                            id: true,
                            email: true
                        }
                    }
                },
                skip,
                take: Number(limit),
                orderBy: { created_at: 'desc' }
            }),
            prisma_1.default.stores.count({ where })
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
    }
    catch (error) {
        console.error('Erro ao buscar lojas:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
router.get('/stores/:id', async (req, res) => {
    try {
        const store = await prisma_1.default.stores.findUnique({
            where: { id: req.params.id },
            include: {
                users: {
                    select: {
                        id: true,
                        email: true
                    }
                },
                products: {
                    select: {
                        id: true,
                        name: true,
                        price: true,
                        is_active: true
                    }
                },
                customers: {
                    select: {
                        id: true,
                        name: true,
                        email: true
                    }
                }
            }
        });
        if (!store) {
            return res.status(404).json({ error: 'Loja não encontrada' });
        }
        res.json(store);
    }
    catch (error) {
        console.error('Erro ao buscar loja:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
// ===== RELATÓRIOS =====
router.get('/reports/sales', async (req, res) => {
    try {
        const { startDate, endDate, storeId } = req.query;
        const where = {};
        if (startDate && endDate) {
            where.created_at = {
                gte: new Date(startDate),
                lte: new Date(endDate)
            };
        }
        if (storeId) {
            where.store_id = storeId;
        }
        const sales = await prisma_1.default.sales.findMany({
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
        const totalRevenue = sales.reduce((sum, sale) => sum + Number(sale.total_price), 0);
        const totalQuantity = sales.reduce((sum, sale) => sum + Number(sale.quantity), 0);
        res.json({
            sales,
            summary: {
                totalSales: sales.length,
                totalRevenue,
                totalQuantity,
                averageOrderValue: sales.length > 0 ? totalRevenue / sales.length : 0
            }
        });
    }
    catch (error) {
        console.error('Erro ao gerar relatório de vendas:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
router.get('/reports/products', async (req, res) => {
    try {
        const products = await prisma_1.default.products.findMany({
            include: {
                stores: {
                    select: {
                        name: true,
                        slug: true
                    }
                },
                categories: {
                    select: {
                        name: true
                    }
                }
            },
            orderBy: { created_at: 'desc' }
        });
        const activeProducts = products.filter(p => p.is_active);
        const inactiveProducts = products.filter(p => !p.is_active);
        res.json({
            products,
            summary: {
                total: products.length,
                active: activeProducts.length,
                inactive: inactiveProducts.length
            }
        });
    }
    catch (error) {
        console.error('Erro ao gerar relatório de produtos:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
// ===== GERENCIAMENTO DE PRODUTOS =====
router.get('/products', async (req, res) => {
    try {
        const { page = 1, limit = 10, search = '', storeId = '' } = req.query;
        const skip = (Number(page) - 1) * Number(limit);
        const where = {};
        if (search) {
            where.OR = [
                { name: { contains: search, mode: 'insensitive' } },
                { description: { contains: search, mode: 'insensitive' } }
            ];
        }
        if (storeId) {
            where.store_id = storeId;
        }
        const [products, total] = await Promise.all([
            prisma_1.default.products.findMany({
                where,
                include: {
                    stores: {
                        select: {
                            id: true,
                            name: true,
                            slug: true
                        }
                    },
                    categories: {
                        select: {
                            id: true,
                            name: true
                        }
                    }
                },
                skip,
                take: Number(limit),
                orderBy: { created_at: 'desc' }
            }),
            prisma_1.default.products.count({ where })
        ]);
        res.json({
            products,
            pagination: {
                page: Number(page),
                limit: Number(limit),
                total,
                pages: Math.ceil(total / Number(limit))
            }
        });
    }
    catch (error) {
        console.error('Erro ao buscar produtos:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
router.get('/products/:id', async (req, res) => {
    try {
        const product = await prisma_1.default.products.findUnique({
            where: { id: req.params.id },
            include: {
                stores: {
                    select: {
                        id: true,
                        name: true,
                        slug: true
                    }
                },
                categories: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        });
        if (!product) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }
        res.json(product);
    }
    catch (error) {
        console.error('Erro ao buscar produto:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
// ===== GERENCIAMENTO DE CATEGORIAS =====
router.get('/categories', async (req, res) => {
    try {
        const { page = 1, limit = 10, search = '', storeId = '' } = req.query;
        const skip = (Number(page) - 1) * Number(limit);
        const where = {};
        if (search) {
            where.name = { contains: search, mode: 'insensitive' };
        }
        if (storeId) {
            where.store_id = storeId;
        }
        const [categories, total] = await Promise.all([
            prisma_1.default.categories.findMany({
                where,
                include: {
                    stores: {
                        select: {
                            id: true,
                            name: true,
                            slug: true
                        }
                    },
                    products: {
                        select: {
                            id: true,
                            name: true,
                            price: true
                        }
                    }
                },
                skip,
                take: Number(limit),
                orderBy: { name: 'asc' }
            }),
            prisma_1.default.categories.count({ where })
        ]);
        res.json({
            categories,
            pagination: {
                page: Number(page),
                limit: Number(limit),
                total,
                pages: Math.ceil(total / Number(limit))
            }
        });
    }
    catch (error) {
        console.error('Erro ao buscar categorias:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
// ===== GERENCIAMENTO DE PEDIDOS =====
router.get('/orders', async (req, res) => {
    try {
        const { page = 1, limit = 10, status = '', storeId = '' } = req.query;
        const skip = (Number(page) - 1) * Number(limit);
        const where = {};
        if (status) {
            where.status = status;
        }
        if (storeId) {
            where.store_id = storeId;
        }
        const [orders, total] = await Promise.all([
            prisma_1.default.orders.findMany({
                where,
                include: {
                    stores: {
                        select: {
                            id: true,
                            name: true,
                            slug: true
                        }
                    },
                    customers: {
                        select: {
                            id: true,
                            name: true,
                            email: true
                        }
                    },
                    order_items: {
                        select: {
                            id: true,
                            quantity: true,
                            products: {
                                select: {
                                    id: true,
                                    name: true
                                }
                            }
                        }
                    }
                },
                skip,
                take: Number(limit),
                orderBy: { created_at: 'desc' }
            }),
            prisma_1.default.orders.count({ where })
        ]);
        res.json({
            orders,
            pagination: {
                page: Number(page),
                limit: Number(limit),
                total,
                pages: Math.ceil(total / Number(limit))
            }
        });
    }
    catch (error) {
        console.error('Erro ao buscar pedidos:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
// ===== GERENCIAMENTO DE CLIENTES =====
router.get('/customers', async (req, res) => {
    try {
        const { page = 1, limit = 10, search = '', storeId = '' } = req.query;
        const skip = (Number(page) - 1) * Number(limit);
        const where = {};
        if (search) {
            where.OR = [
                { name: { contains: search, mode: 'insensitive' } },
                { email: { contains: search, mode: 'insensitive' } },
                { phone: { contains: search, mode: 'insensitive' } }
            ];
        }
        if (storeId) {
            where.store_id = storeId;
        }
        const [customers, total] = await Promise.all([
            prisma_1.default.customers.findMany({
                where,
                include: {
                    stores: {
                        select: {
                            id: true,
                            name: true,
                            slug: true
                        }
                    }
                },
                skip,
                take: Number(limit),
                orderBy: { created_at: 'desc' }
            }),
            prisma_1.default.customers.count({ where })
        ]);
        res.json({
            customers,
            pagination: {
                page: Number(page),
                limit: Number(limit),
                total,
                pages: Math.ceil(total / Number(limit))
            }
        });
    }
    catch (error) {
        console.error('Erro ao buscar clientes:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
// ===== RELATÓRIOS AVANÇADOS =====
router.get('/reports/financial', async (req, res) => {
    try {
        const { startDate, endDate, storeId } = req.query;
        const where = {};
        if (startDate && endDate) {
            where.created_at = {
                gte: new Date(startDate),
                lte: new Date(endDate)
            };
        }
        if (storeId) {
            where.store_id = storeId;
        }
        // Vendas
        const sales = await prisma_1.default.sales.findMany({
            where,
            include: {
                stores: {
                    select: {
                        name: true,
                        slug: true
                    }
                }
            }
        });
        // Fluxo de caixa
        const cashFlow = await prisma_1.default.cash_flow.findMany({
            where
        });
        // Despesas
        const expenses = await prisma_1.default.expenses.findMany({
            where
        });
        const totalRevenue = sales.reduce((sum, sale) => sum + Number(sale.total_price), 0);
        const totalExpenses = expenses.reduce((sum, expense) => sum + Number(expense.amount), 0);
        const netProfit = totalRevenue - totalExpenses;
        res.json({
            sales,
            cashFlow,
            expenses,
            summary: {
                totalRevenue,
                totalExpenses,
                netProfit,
                profitMargin: totalRevenue > 0 ? (netProfit / totalRevenue) * 100 : 0
            }
        });
    }
    catch (error) {
        console.error('Erro ao gerar relatório financeiro:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
router.get('/reports/inventory', async (req, res) => {
    try {
        const { storeId } = req.query;
        const where = {};
        if (storeId) {
            where.store_id = storeId;
        }
        const products = await prisma_1.default.products.findMany({
            where,
            include: {
                stores: {
                    select: {
                        name: true,
                        slug: true
                    }
                },
                categories: {
                    select: {
                        name: true
                    }
                }
            }
        });
        const lowStock = products.filter(p => Number(p.stock) < 10);
        const outOfStock = products.filter(p => Number(p.stock) === 0);
        const activeProducts = products.filter(p => p.is_active);
        const totalValue = products.reduce((sum, p) => sum + (Number(p.price) * Number(p.stock)), 0);
        res.json({
            products,
            summary: {
                total: products.length,
                active: activeProducts.length,
                inactive: products.length - activeProducts.length,
                lowStock: lowStock.length,
                outOfStock: outOfStock.length,
                totalValue
            },
            alerts: {
                lowStock,
                outOfStock
            }
        });
    }
    catch (error) {
        console.error('Erro ao gerar relatório de estoque:', error);
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
                { domain: { contains: search, mode: 'insensitive' } },
                { domain_type: { contains: search, mode: 'insensitive' } }
            ]
        } : {};
        const [domains, total] = await Promise.all([
            prisma_1.default.domain_owners.findMany({
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
            prisma_1.default.domain_owners.count({ where })
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
    }
    catch (error) {
        console.error('Erro ao buscar domínios:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
router.post('/domains', async (req, res) => {
    try {
        const { domain, user_id, domain_type = 'domain' } = req.body;
        // Validar dados obrigatórios
        if (!domain || !user_id) {
            return res.status(400).json({
                error: 'Domínio e ID do usuário são obrigatórios'
            });
        }
        // Verificar se o usuário existe
        const user = await prisma_1.default.users.findUnique({
            where: { id: user_id }
        });
        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        // Verificar se o domínio já existe
        const existingDomain = await prisma_1.default.domain_owners.findUnique({
            where: { domain }
        });
        if (existingDomain) {
            return res.status(409).json({ error: 'Domínio já cadastrado' });
        }
        // Criar domínio
        const newDomain = await prisma_1.default.domain_owners.create({
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
                        role: true
                    }
                }
            }
        });
        res.status(201).json(newDomain);
    }
    catch (error) {
        console.error('Erro ao criar domínio:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
router.get('/domains/:id', async (req, res) => {
    try {
        const domain = await prisma_1.default.domain_owners.findUnique({
            where: { id: req.params.id },
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
        res.json(domain);
    }
    catch (error) {
        console.error('Erro ao buscar domínio:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
router.put('/domains/:id', async (req, res) => {
    try {
        const { domain, user_id, domain_type } = req.body;
        // Verificar se o domínio existe
        const existingDomain = await prisma_1.default.domain_owners.findUnique({
            where: { id: req.params.id }
        });
        if (!existingDomain) {
            return res.status(404).json({ error: 'Domínio não encontrado' });
        }
        // Se estiver alterando o domínio, verificar se já existe
        if (domain && domain !== existingDomain.domain) {
            const domainExists = await prisma_1.default.domain_owners.findUnique({
                where: { domain }
            });
            if (domainExists) {
                return res.status(409).json({ error: 'Domínio já cadastrado' });
            }
        }
        // Se estiver alterando o usuário, verificar se existe
        if (user_id && user_id !== existingDomain.user_id) {
            const user = await prisma_1.default.users.findUnique({
                where: { id: user_id }
            });
            if (!user) {
                return res.status(404).json({ error: 'Usuário não encontrado' });
            }
        }
        // Atualizar domínio
        const updatedDomain = await prisma_1.default.domain_owners.update({
            where: { id: req.params.id },
            data: {
                ...(domain && { domain }),
                ...(user_id && { user_id }),
                ...(domain_type && { domain_type }),
                updated_at: new Date()
            },
            include: {
                users: {
                    select: {
                        id: true,
                        email: true,
                        role: true
                    }
                }
            }
        });
        res.json(updatedDomain);
    }
    catch (error) {
        console.error('Erro ao atualizar domínio:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
router.delete('/domains/:id', async (req, res) => {
    try {
        const domain = await prisma_1.default.domain_owners.findUnique({
            where: { id: req.params.id }
        });
        if (!domain) {
            return res.status(404).json({ error: 'Domínio não encontrado' });
        }
        await prisma_1.default.domain_owners.delete({
            where: { id: req.params.id }
        });
        res.json({ message: 'Domínio removido com sucesso' });
    }
    catch (error) {
        console.error('Erro ao remover domínio:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
// ===== CADASTRO COMPLETO DE DOMÍNIO E USUÁRIO =====
router.post('/register-domain-user', async (req, res) => {
    try {
        const { domain, user_email, user_password, user_role = 'admin', domain_type = 'domain', user_id = null // Se fornecido, usa o ID específico
         } = req.body;
        // Validar dados obrigatórios
        if (!domain || !user_email || !user_password) {
            return res.status(400).json({
                error: 'Domínio, email e senha são obrigatórios'
            });
        }
        // Verificar se o domínio já existe
        const existingDomain = await prisma_1.default.domain_owners.findUnique({
            where: { domain }
        });
        if (existingDomain) {
            return res.status(409).json({ error: 'Domínio já cadastrado' });
        }
        // Verificar se o email já existe
        const existingUser = await prisma_1.default.users.findFirst({
            where: { email: user_email }
        });
        if (existingUser) {
            return res.status(409).json({ error: 'Email já cadastrado' });
        }
        // Gerar ID do usuário se não fornecido
        const finalUserId = user_id || crypto_1.default.randomUUID();
        // Criar usuário
        const newUser = await prisma_1.default.users.create({
            data: {
                id: finalUserId,
                email: user_email,
                encrypted_password: user_password, // Em produção, deve ser hash da senha
                role: user_role,
                created_at: new Date(),
                updated_at: new Date()
            }
        });
        // Criar domínio vinculado ao usuário
        const newDomain = await prisma_1.default.domain_owners.create({
            data: {
                domain,
                user_id: newUser.id,
                domain_type
            }
        });
        // Retornar dados completos
        const result = await prisma_1.default.domain_owners.findUnique({
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
    }
    catch (error) {
        console.error('Erro ao cadastrar domínio e usuário:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
// ===== CONFIGURAÇÕES DO SISTEMA =====
router.get('/system/config', async (req, res) => {
    try {
        // Configurações gerais do sistema
        const config = {
            environment: process.env.NODE_ENV || 'development',
            database: {
                url: process.env.DATABASE_URL ? 'configured' : 'not configured',
                type: 'postgresql'
            },
            supabase: {
                url: process.env.SUPABASE_URL ? 'configured' : 'not configured',
                key: process.env.SUPABASE_SERVICE_KEY ? 'configured' : 'not configured'
            },
            security: {
                jwtSecret: process.env.JWT_SECRET ? 'configured' : 'not configured'
            },
            server: {
                port: process.env.PORT || 3000,
                trustProxy: true
            }
        };
        res.json(config);
    }
    catch (error) {
        console.error('Erro ao buscar configurações:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
// ===== SISTEMA =====
router.get('/system/status', async (req, res) => {
    try {
        // Verificar conexão com banco
        await prisma_1.default.$queryRaw `SELECT 1`;
        // Estatísticas do sistema
        const dbStats = await prisma_1.default.$queryRaw `
      SELECT 
        schemaname,
        tablename,
        n_tup_ins as inserts,
        n_tup_upd as updates,
        n_tup_del as deletes
      FROM pg_stat_user_tables
      ORDER BY n_tup_ins DESC
    `;
        res.json({
            status: 'online',
            database: 'connected',
            timestamp: new Date().toISOString(),
            dbStats
        });
    }
    catch (error) {
        console.error('Erro ao verificar status do sistema:', error);
        res.status(500).json({
            status: 'error',
            error: 'Erro interno do servidor'
        });
    }
});
exports.default = router;
