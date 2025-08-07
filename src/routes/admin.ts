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

// ROTA GET SIMPLES
router.get('/test-get', (req, res) => {
    res.json({ 
        message: 'Rota GET simples funcionando!',
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

// ROTA COM AUTENTICAÇÃO
router.post('/test-with-auth', requireAdmin, (req, res) => {
    res.json({ 
        message: 'Rota POST com autenticação funcionando!',
        body: req.body,
        user: req.user,
        timestamp: new Date().toISOString()
    });
});

export default router; 