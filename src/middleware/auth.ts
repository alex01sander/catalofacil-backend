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
  if (!authHeader) return res.status(401).json({ error: 'Token não fornecido' });

  const token = authHeader.split(' ')[1];
  jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
    if (err) return res.status(403).json({ error: 'Token inválido' });
    req.user = user as JwtPayload;
    next();
  });
} 