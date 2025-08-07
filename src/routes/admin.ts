import * as express from 'express';
import { Client } from 'pg';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

const router = express.Router();

// ROTA DE TESTE COMPLETAMENTE SIMPLES (PRIMEIRA ROTA)
router.post('/test-simple', (req, res) => {
    res.json({ 
        message: 'Rota POST simples funcionando!',
        body: req.body,
        timestamp: new Date().toISOString()
    });
});

// ROTA DE TESTE SEM AUTENTICAÇÃO
router.post('/test-no-auth', (req, res) => {
    res.json({ 
        message: 'Rota POST sem autenticação funcionando!',
        body: req.body,
        timestamp: new Date().toISOString()
    });
});

// Middleware para verificar se é admin
const requireAdmin = async (req: any, res: any, next: any) => {
    console.log('🔍 Middleware requireAdmin executado para:', req.path);
    console.log('🔍 Método:', req.method);
    console.log('🔍 Headers:', req.headers);
    
    try {
        const token = req.headers.authorization?.replace('Bearer ', '');
        if (!token) {
            console.log('❌ Token não fornecido');
            return res.status(401).json({ error: 'Token não fornecido' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as any;
        console.log('✅ Token decodificado:', decoded);
        
        // Verificar se é admin
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
            console.log('❌ Usuário não é admin:', userResult.rows[0]);
            return res.status(403).json({ error: 'Acesso negado. Apenas administradores.' });
        }
        
        console.log('✅ Usuário é admin:', userResult.rows[0]);
        req.user = userResult.rows[0];
        next();
    } catch (error) {
        console.log('❌ Erro no middleware:', error);
        return res.status(401).json({ error: 'Token inválido' });
    }
};

// 1. Estatísticas gerais (PRIMEIRA ROTA - para evitar conflitos)
router.get('/stats', requireAdmin, async (req, res) => {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false }
    });
    
    try {
        await client.connect();
        
        const stats = await client.query(`
            SELECT 
                (SELECT COUNT(*) FROM auth.users) as total_users,
                (SELECT COUNT(*) FROM auth.users WHERE role = 'admin') as total_admins,
                (SELECT COUNT(*) FROM auth.users WHERE role = 'user') as total_clients,
                (SELECT COUNT(*) FROM public.domain_owners) as total_domains,
                (SELECT COUNT(*) FROM public.stores) as total_stores
        `);
        
        res.json(stats.rows[0]);
    } catch (error) {
        console.error('Erro ao buscar estatísticas:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    } finally {
        await client.end();
    }
});

// 1.1. Rota de teste simples
router.get('/test', requireAdmin, async (req, res) => {
    res.json({ 
        message: 'Rota de teste funcionando!',
        timestamp: new Date().toISOString(),
        user: req.user
    });
});

// 1.2. Estatísticas simples (sem banco)
router.get('/stats-simple', requireAdmin, async (req, res) => {
    res.json({
        total_users: 2,
        total_admins: 1,
        total_clients: 1,
        total_domains: 1,
        total_stores: 1,
        message: 'Estatísticas calculadas localmente'
    });
});

// 1.3. Rota POST de teste simples
router.post('/test-post', requireAdmin, async (req, res) => {
    res.json({ 
        message: 'Rota POST de teste funcionando!',
        body: req.body,
        timestamp: new Date().toISOString(),
        user: req.user
    });
});

// 1.4. Rota POST sem middleware para teste
router.post('/test-post-no-auth', async (req, res) => {
    res.json({ 
        message: 'Rota POST sem auth funcionando!',
        body: req.body,
        timestamp: new Date().toISOString()
    });
});

// 1.5. Rota POST simples com middleware
router.post('/test-post-simple', requireAdmin, async (req, res) => {
    res.json({ 
        message: 'Rota POST simples funcionando!',
        body: req.body,
        timestamp: new Date().toISOString(),
        user: req.user
    });
});

// 2. Listar todos os usuários
router.get('/users', requireAdmin, async (req, res) => {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false }
    });
    
    try {
        await client.connect();
        
        const result = await client.query(`
            SELECT 
                u.id,
                u.email,
                u.role,
                u.created_at,
                u.updated_at,
                do.domain,
                s.name as store_name,
                s.slug as store_slug
            FROM auth.users u
            LEFT JOIN public.domain_owners do ON u.id = do.user_id
            LEFT JOIN public.stores s ON do.domain = s.domain
            ORDER BY u.created_at DESC
        `);
        
        res.json({
            users: result.rows,
            total: result.rows.length
        });
    } catch (error) {
        console.error('Erro ao listar usuários:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    } finally {
        await client.end();
    }
});

// 3. Cadastrar novo usuário
router.post('/users', requireAdmin, async (req, res) => {
    const { email, password, domain, role = 'user' } = req.body;
    
    if (!email || !password || !domain) {
        return res.status(400).json({ 
            error: 'Email, senha e domínio são obrigatórios' 
        });
    }
    
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false }
    });
    
    try {
        await client.connect();
        
        // Verificar se email já existe
        const existingUser = await client.query(`
            SELECT id FROM auth.users WHERE email = $1
        `, [email]);
        
        if (existingUser.rows.length > 0) {
            return res.status(400).json({ error: 'Email já cadastrado' });
        }
        
        // Verificar se domínio já existe
        const existingDomain = await client.query(`
            SELECT domain FROM public.domain_owners WHERE domain = $1
        `, [domain]);
        
        if (existingDomain.rows.length > 0) {
            return res.status(400).json({ error: 'Domínio já cadastrado' });
        }
        
        // Hash da senha
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Gerar ID único
        const userId = `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        
        // Inserir usuário
        await client.query(`
            INSERT INTO auth.users (id, email, encrypted_password, role, created_at, updated_at)
            VALUES ($1, $2, $3, $4, NOW(), NOW())
        `, [userId, email, hashedPassword, role]);
        
        // Inserir domínio
        await client.query(`
            INSERT INTO public.domain_owners (id, user_id, domain, created_at, updated_at)
            VALUES (gen_random_uuid(), $1, $2, NOW(), NOW())
        `, [userId, domain]);
        
        // Criar loja padrão
        const storeId = `store-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        const slug = domain.replace('.catalofacil.com.br', '');
        
        await client.query(`
            INSERT INTO public.stores (id, name, description, logo_url, banner_url, whatsapp_number, instagram_url, theme_color, user_id, domain, slug, created_at, updated_at)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, NOW(), NOW())
        `, [
            storeId,
            `${slug.charAt(0).toUpperCase() + slug.slice(1)} Catálogo`,
            `Loja ${slug}`,
            'https://via.placeholder.com/150x50/007bff/ffffff?text=Logo',
            'https://via.placeholder.com/1200x300/007bff/ffffff?text=Banner',
            '5551999999999',
            'https://instagram.com/' + slug,
            '#007bff',
            userId,
            domain,
            slug
        ]);
        
        // Criar configurações da loja
        await client.query(`
            INSERT INTO public.store_settings (id, user_id, store_name, store_description, store_subtitle, instagram_url, whatsapp_number, mobile_logo, desktop_banner, mobile_banner_image, mobile_banner_color, created_at, updated_at)
            VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, NOW(), NOW())
        `, [
            userId,
            `${slug.charAt(0).toUpperCase() + slug.slice(1)} Catálogo`,
            `Loja ${slug}`,
            'Produtos Incríveis',
            'https://instagram.com/' + slug,
            '5551999999999',
            'https://via.placeholder.com/150x50/007bff/ffffff?text=Logo',
            'https://via.placeholder.com/1200x300/007bff/ffffff?text=Banner',
            'https://via.placeholder.com/400x200/007bff/ffffff?text=Mobile+Banner',
            'from-blue-400 via-blue-500 to-blue-600'
        ]);
        
        // Se for admin, adicionar na tabela controller_admins
        if (role === 'admin') {
            await client.query(`
                INSERT INTO public.controller_admins (id, user_id, email, created_at, updated_at)
                VALUES (gen_random_uuid(), $1, $2, NOW(), NOW())
            `, [userId, email]);
        }
        
        res.status(201).json({
            message: 'Usuário cadastrado com sucesso',
            user: {
                id: userId,
                email,
                role,
                domain
            }
        });
        
    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    } finally {
        await client.end();
    }
});

// 4. Atualizar usuário
router.put('/users/:userId', requireAdmin, async (req, res) => {
    const { userId } = req.params;
    const { email, role, domain } = req.body;
    
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false }
    });
    
    try {
        await client.connect();
        
        // Atualizar usuário
        if (email) {
            await client.query(`
                UPDATE auth.users 
                SET email = $1, updated_at = NOW()
                WHERE id = $2
            `, [email, userId]);
        }
        
        if (role) {
            await client.query(`
                UPDATE auth.users 
                SET role = $1, updated_at = NOW()
                WHERE id = $2
            `, [role, userId]);
            
            // Atualizar controller_admins
            if (role === 'admin') {
                await client.query(`
                    INSERT INTO public.controller_admins (id, user_id, email, created_at, updated_at)
                    VALUES (gen_random_uuid(), $1, $2, NOW(), NOW())
                    ON CONFLICT (user_id) DO NOTHING
                `, [userId, email]);
            } else {
                await client.query(`
                    DELETE FROM public.controller_admins WHERE user_id = $1
                `, [userId]);
            }
        }
        
        // Atualizar domínio
        if (domain) {
            await client.query(`
                UPDATE public.domain_owners 
                SET domain = $1, updated_at = NOW()
                WHERE user_id = $2
            `, [domain, userId]);
            
            await client.query(`
                UPDATE public.stores 
                SET domain = $1, updated_at = NOW()
                WHERE user_id = $2
            `, [domain, userId]);
        }
        
        res.json({ message: 'Usuário atualizado com sucesso' });
        
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    } finally {
        await client.end();
    }
});

// 5. Deletar usuário
router.delete('/users/:userId', requireAdmin, async (req, res) => {
    const { userId } = req.params;
    
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false }
    });
    
    try {
        await client.connect();
        
        // Verificar se não é o último admin
        if ((req as any).user?.id === userId) {
            const adminCount = await client.query(`
                SELECT COUNT(*) as count FROM auth.users WHERE role = 'admin'
            `);
            
            if (adminCount.rows[0].count <= 1) {
                return res.status(400).json({ 
                    error: 'Não é possível deletar o último administrador' 
                });
            }
        }
        
        // Deletar em cascata
        await client.query('DELETE FROM public.store_settings WHERE user_id = $1', [userId]);
        await client.query('DELETE FROM public.stores WHERE user_id = $1', [userId]);
        await client.query('DELETE FROM public.domain_owners WHERE user_id = $1', [userId]);
        await client.query('DELETE FROM public.controller_admins WHERE user_id = $1', [userId]);
        await client.query('DELETE FROM auth.users WHERE id = $1', [userId]);
        
        res.json({ message: 'Usuário deletado com sucesso' });
        
    } catch (error) {
        console.error('Erro ao deletar usuário:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    } finally {
        await client.end();
    }
});

// 6. Listar domínios
router.get('/domains', requireAdmin, async (req, res) => {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false }
    });
    
    try {
        await client.connect();
        
        const result = await client.query(`
            SELECT 
                do.id,
                do.domain,
                do.created_at,
                u.email as owner_email,
                u.role as owner_role,
                s.name as store_name,
                s.slug as store_slug
            FROM public.domain_owners do
            LEFT JOIN auth.users u ON do.user_id = u.id
            LEFT JOIN public.stores s ON do.domain = s.domain
            ORDER BY do.created_at DESC
        `);
        
        res.json({
            domains: result.rows,
            total: result.rows.length
        });
    } catch (error) {
        console.error('Erro ao listar domínios:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    } finally {
        await client.end();
    }
});

// 7. Estatísticas gerais (rota alternativa)
router.get('/statistics', requireAdmin, async (req, res) => {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false }
    });
    
    try {
        await client.connect();
        
        const stats = await client.query(`
            SELECT 
                (SELECT COUNT(*) FROM auth.users) as total_users,
                (SELECT COUNT(*) FROM auth.users WHERE role = 'admin') as total_admins,
                (SELECT COUNT(*) FROM auth.users WHERE role = 'user') as total_clients,
                (SELECT COUNT(*) FROM public.domain_owners) as total_domains,
                (SELECT COUNT(*) FROM public.stores) as total_stores
        `);
        
        res.json(stats.rows[0]);
    } catch (error) {
        console.error('Erro ao buscar estatísticas:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    } finally {
        await client.end();
    }
});

export default router; 