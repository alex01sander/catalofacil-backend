import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  id: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}

export default function authenticateJWT(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  
  console.log('🔐 Tentativa de autenticação:', {
    url: req.url,
    method: req.method,
    hasAuthHeader: !!authHeader,
    authHeader: authHeader ? `${authHeader.substring(0, 20)}...` : 'null',
    userAgent: req.headers['user-agent']?.substring(0, 50)
  });
  
  if (!authHeader) {
    console.log('❌ Token não fornecido');
    return res.status(401).json({ error: 'Token não fornecido' });
  }

  const token = authHeader.split(' ')[1];
  
  if (!token) {
    console.log('❌ Formato de token inválido:', authHeader);
    return res.status(401).json({ error: 'Formato de token inválido' });
  }
  
  if (!process.env.JWT_SECRET) {
    console.error('❌ JWT_SECRET não configurado');
    return res.status(500).json({ error: 'Configuração do servidor inválida' });
  }
  
  jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
    if (err) {
      console.log('❌ Erro na verificação do token:', {
        error: err.name,
        message: err.message,
        tokenPreview: token.substring(0, 20) + '...',
        jwtSecretConfigured: !!process.env.JWT_SECRET
      });
      
      // Tentar decodificar sem verificar para diagnóstico
      try {
        const decoded = jwt.decode(token, { complete: true });
        if (decoded) {
          console.log('🔍 Token decodificado (sem verificação):', {
            header: decoded.header,
            payload: decoded.payload,
            expiration: decoded.payload && typeof decoded.payload === 'object' && 'exp' in decoded.payload 
              ? new Date((decoded.payload.exp as number) * 1000) 
              : 'N/A'
          });
        }
      } catch (decodeError) {
        console.log('❌ Não foi possível decodificar o token:', decodeError);
      }
      
      return res.status(403).json({ error: 'Token inválido' });
    }
    
    console.log('✅ Token válido para usuário:', {
      userId: (user as JwtPayload).id,
      email: (user as JwtPayload).email
    });
    
    req.user = user as JwtPayload;
    next();
  });
} 