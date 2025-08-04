import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import prisma from '../lib/prisma';

interface AdminRequest extends Request {
  admin?: {
    id: string;
    email: string;
    role: string;
  };
}

export const authenticateAdmin = async (req: AdminRequest, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Token de autenticação necessário' });
    }
    
    const token = authHeader.substring(7);
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
    
    // Verificar se o usuário existe e é admin
    const user = await prisma.users.findUnique({
      where: { id: decoded.userId || decoded.id },
      select: {
        id: true,
        email: true,
        role: true
      }
    });
    
    if (!user) {
      return res.status(401).json({ error: 'Usuário não encontrado' });
    }
    
    // Verificar se é admin (role = 'admin' ou está na tabela controller_admins)
    const isAdmin = user.role === 'admin' || await prisma.controller_admins.findFirst({
      where: { user_id: user.id }
    });
    
    if (!isAdmin) {
      return res.status(403).json({ error: 'Acesso negado. Apenas administradores.' });
    }
    
    req.admin = {
      id: user.id,
      email: user.email || '',
      role: user.role || 'admin'
    };
    
    next();
  } catch (error) {
    console.error('Erro na autenticação de admin:', error);
    return res.status(401).json({ error: 'Token inválido' });
  }
}; 