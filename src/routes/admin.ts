import * as express from 'express';
import { Client } from 'pg';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

const router = express.Router();

// ROTA DE TESTE SIMPLES SEM AUTENTICAÇÃO
router.post('/test', (req, res) => {
    res.json({ 
        message: 'Rota POST funcionando!',
        body: req.body,
        timestamp: new Date().toISOString()
    });
});

// ROTA GET SIMPLES SEM AUTENTICAÇÃO
router.get('/test', (req, res) => {
    res.json({ 
        message: 'Rota GET funcionando!',
        timestamp: new Date().toISOString()
    });
});

// Middleware para verificar se é admin
const requireAdmin = async (req: any, res: any, next: any) => {
    try {
        const token = req.headers.authorization?.replace('Bearer ', '');
        if (!token) {
            return res.status(401).json({ error: 'Token não fornecido' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as any;
        
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
            return res.status(403).json({ error: 'Acesso negado. Apenas administradores.' });
        }
        
        req.user = userResult.rows[0];
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Token inválido' });
    }
};

// ROTA COM AUTENTICAÇÃO
router.post('/users', requireAdmin, async (req, res) => {
    try {
        const client = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: { rejectUnauthorized: false }
        });
        
        await client.connect();
        
        const result = await client.query(`
            SELECT id, email, role, created_at 
            FROM auth.users 
            ORDER BY created_at DESC
        `);
        
        await client.end();
        
        res.json({
            users: result.rows,
            total: result.rows.length
        });
    } catch (error) {
        console.error('Erro ao listar usuários:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

export default router; 