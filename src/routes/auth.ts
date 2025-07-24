import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../lib/prisma';
import authenticateJWT from '../middleware/auth';

const router = Router();

router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({ data: { email, password: hash } });
  res.json(user);
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ error: 'Email e senha são obrigatórios' });
    }
    
    const user = await prisma.user.findUnique({ where: { email } });
    
    if (!user) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }
    
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }
    
    const token = jwt.sign(
      { id: user.id, email: user.email }, 
      process.env.JWT_SECRET as string,
      { expiresIn: '24h' }
    );
    
    console.log('✅ Login realizado:', { userId: user.id, email: user.email });
    
    res.json({ 
      token,
      user: {
        id: user.id,
        email: user.email,
        createdAt: user.createdAt
      }
    });
  } catch (error: any) {
    console.error('Erro no login:', error);
    
    if (error.code === 'P1001' || error.message?.includes('Server has closed the connection')) {
      return res.status(503).json({ error: 'Serviço temporariamente indisponível. Tente novamente em alguns segundos.' });
    }
    
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Novo endpoint para verificar status do token
router.get('/verify', authenticateJWT, (req, res) => {
  res.json({ 
    valid: true, 
    user: req.user,
    message: 'Token válido' 
  });
});

// Novo endpoint para diagnóstico (apenas desenvolvimento)
router.post('/debug-token', (req, res) => {
  try {
    const { token } = req.body;
    
    if (!token) {
      return res.status(400).json({ error: 'Token não fornecido' });
    }
    
    // Verificar se o JWT_SECRET está configurado
    if (!process.env.JWT_SECRET) {
      return res.status(500).json({ error: 'JWT_SECRET não configurado' });
    }
    
    // Tentar decodificar sem verificar
    const decoded = jwt.decode(token, { complete: true });
    
    // Verificar se foi possível decodificar
    if (!decoded) {
      return res.json({ 
        valid: false, 
        reason: 'Token malformado - não foi possível decodificar',
        token_preview: token.substring(0, 20) + '...'
      });
    }
    
    // Tentar verificar o token
    jwt.verify(token, process.env.JWT_SECRET as string, (err: any, user: any) => {
      if (err) {
        let reason = 'Token inválido';
        if (err.name === 'TokenExpiredError') {
          reason = 'Token expirado';
        } else if (err.name === 'JsonWebTokenError') {
          reason = 'Token malformado ou assinatura inválida';
        } else if (err.name === 'NotBeforeError') {
          reason = 'Token ainda não é válido';
        }
        
        return res.json({
          valid: false,
          reason,
          decoded_payload: decoded.payload,
          decoded_header: decoded.header,
          error: err.message,
          jwt_secret_configured: !!process.env.JWT_SECRET
        });
      }
      
      res.json({
        valid: true,
        user,
        decoded_payload: decoded.payload,
        decoded_header: decoded.header,
        jwt_secret_configured: !!process.env.JWT_SECRET
      });
    });
    
  } catch (error: any) {
    console.error('Erro no debug do token:', error);
    res.status(500).json({ error: 'Erro ao processar debug do token' });
  }
});

export default router;
