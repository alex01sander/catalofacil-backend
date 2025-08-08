import express from 'express';
import { Client } from 'pg';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Middleware para verificar se é admin
const requireAdmin = async (req: any, res: any, next: any) => {
    try {
        const token = req.headers.authorization?.replace('Bearer ', '');
        if (!token) {
            return res.status(401).json({ error: 'Token de autenticação necessário' });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as any;
        const client = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: { rejectUnauthorized: false }
        });
        await client.connect();
        const userResult = await client.query(`
            SELECT u.id, u.email, u.role 
            FROM auth.users u 
            WHERE u.id = $1
        `, [decoded.id]);
        await client.end();
        if (userResult.rows.length === 0 || userResult.rows[0].role !== 'admin') {
            return res.status(403).json({ error: 'Acesso negado. Apenas administradores.' });
        }
        req.user = userResult.rows[0];
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Token inválido' });
    }
};

// ROTA GET /admin-management/stats - Estatísticas gerais
router.get('/stats', requireAdmin, async (req, res) => {
    try {
        const client = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: { rejectUnauthorized: false }
        });
        await client.connect();
        
        // Contar usuários
        const usersResult = await client.query('SELECT COUNT(*) as total FROM auth.users');
        const totalUsers = parseInt(usersResult.rows[0].total);
        
        // Contar domínios
        const domainsResult = await client.query('SELECT COUNT(*) as total FROM public.domain_owners');
        const totalDomains = parseInt(domainsResult.rows[0].total);
        
        // Contar lojas
        const storesResult = await client.query('SELECT COUNT(*) as total FROM public.stores');
        const totalStores = parseInt(storesResult.rows[0].total);
        
        // Contar produtos
        const productsResult = await client.query('SELECT COUNT(*) as total FROM public.products');
        const totalProducts = parseInt(productsResult.rows[0].total);
        
        await client.end();
        
        res.json({
            stats: {
                totalUsers,
                totalDomains,
                totalStores,
                totalProducts
            },
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error('Erro ao buscar estatísticas:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// ROTA GET /admin-management/users - Listar usuários
router.get('/users', requireAdmin, async (req, res) => {
    try {
        const { page = 1, limit = 10, search = '' } = req.query;
        const skip = (Number(page) - 1) * Number(limit);
        
        const client = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: { rejectUnauthorized: false }
        });
        await client.connect();
        
        let query = 'SELECT id, email, role, created_at, updated_at FROM auth.users';
        let countQuery = 'SELECT COUNT(*) as total FROM auth.users';
        let params: any[] = [];
        let paramCount = 0;
        
        if (search) {
            paramCount++;
            query += ` WHERE email ILIKE $${paramCount} OR id ILIKE $${paramCount}`;
            countQuery += ` WHERE email ILIKE $${paramCount} OR id ILIKE $${paramCount}`;
            params.push(`%${search}%`);
        }
        
        query += ' ORDER BY created_at DESC';
        query += ` LIMIT $${paramCount + 1} OFFSET $${paramCount + 2}`;
        params.push(Number(limit), skip);
        
        const [result, countResult] = await Promise.all([
            client.query(query, params),
            client.query(countQuery, search ? [params[0]] : [])
        ]);
        
        await client.end();
        
        const total = parseInt(countResult.rows[0].total);
        
        res.json({
            users: result.rows,
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

// ROTA POST /admin-management/users - Criar usuário
router.post('/users', requireAdmin, async (req, res) => {
    try {
        const { email, password, role = 'user' } = req.body;
        
        if (!email || !password) {
            return res.status(400).json({ error: 'Email e senha são obrigatórios' });
        }
        
        const client = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: { rejectUnauthorized: false }
        });
        await client.connect();
        
        // Verificar se email já existe
        const existingUser = await client.query('SELECT id FROM auth.users WHERE email = $1', [email]);
        if (existingUser.rows.length > 0) {
            await client.end();
            return res.status(400).json({ error: 'Email já cadastrado' });
        }
        
        // Hash da senha
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Criar usuário
        const result = await client.query(`
            INSERT INTO auth.users (email, encrypted_password, role, created_at, updated_at)
            VALUES ($1, $2, $3, NOW(), NOW())
            RETURNING id, email, role, created_at
        `, [email, hashedPassword, role]);
        
        await client.end();
        
        res.status(201).json({
            user: result.rows[0],
            message: 'Usuário criado com sucesso'
        });
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// ROTA PUT /admin-management/users/:id - Atualizar usuário
router.put('/users/:id', requireAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        const { email, role } = req.body;
        
        const client = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: { rejectUnauthorized: false }
        });
        await client.connect();
        
        const result = await client.query(`
            UPDATE auth.users 
            SET email = $1, role = $2, updated_at = NOW()
            WHERE id = $3
            RETURNING id, email, role, updated_at
        `, [email, role, id]);
        
        await client.end();
        
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        
        res.json({
            user: result.rows[0],
            message: 'Usuário atualizado com sucesso'
        });
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// ROTA DELETE /admin-management/users/:id - Deletar usuário
router.delete('/users/:id', requireAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        
        const client = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: { rejectUnauthorized: false }
        });
        await client.connect();
        
        const result = await client.query('DELETE FROM auth.users WHERE id = $1 RETURNING id', [id]);
        await client.end();
        
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        
        res.json({ message: 'Usuário deletado com sucesso' });
    } catch (error) {
        console.error('Erro ao deletar usuário:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// ROTA GET /admin-management/domains - Listar domínios
router.get('/domains', requireAdmin, async (req, res) => {
    try {
        const client = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: { rejectUnauthorized: false }
        });
        await client.connect();
        const result = await client.query(`
            SELECT do.id, do.domain, do.user_id, u.email as user_email, do.created_at
            FROM public.domain_owners do
            JOIN auth.users u ON do.user_id = u.id
            ORDER BY do.created_at DESC
        `);
        await client.end();
        res.json({
            domains: result.rows,
            total: result.rows.length
        });
    } catch (error) {
        console.error('Erro ao listar domínios:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// ROTA POST /admin-management/domains - Criar domínio
router.post('/domains', requireAdmin, async (req, res) => {
    try {
        const { domain, user_id } = req.body;
        
        if (!domain || !user_id) {
            return res.status(400).json({ error: 'Domínio e user_id são obrigatórios' });
        }
        
        const client = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: { rejectUnauthorized: false }
        });
        await client.connect();
        
        // Verificar se domínio já existe
        const existingDomain = await client.query('SELECT id FROM public.domain_owners WHERE domain = $1', [domain]);
        if (existingDomain.rows.length > 0) {
            await client.end();
            return res.status(400).json({ error: 'Domínio já cadastrado' });
        }
        
        // Verificar se usuário existe
        const existingUser = await client.query('SELECT id FROM auth.users WHERE id = $1', [user_id]);
        if (existingUser.rows.length === 0) {
            await client.end();
            return res.status(400).json({ error: 'Usuário não encontrado' });
        }
        
        // Criar domínio
        const result = await client.query(`
            INSERT INTO public.domain_owners (domain, user_id, created_at)
            VALUES ($1, $2, NOW())
            RETURNING id, domain, user_id, created_at
        `, [domain, user_id]);
        
        await client.end();
        
        res.status(201).json({
            domain: result.rows[0],
            message: 'Domínio criado com sucesso'
        });
    } catch (error) {
        console.error('Erro ao criar domínio:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// ROTA DELETE /admin-management/domains/:id - Deletar domínio
router.delete('/domains/:id', requireAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        
        const client = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: { rejectUnauthorized: false }
        });
        await client.connect();
        
        const result = await client.query('DELETE FROM public.domain_owners WHERE id = $1 RETURNING id', [id]);
        await client.end();
        
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Domínio não encontrado' });
        }
        
        res.json({ message: 'Domínio deletado com sucesso' });
    } catch (error) {
        console.error('Erro ao deletar domínio:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

export default router; 