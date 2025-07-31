import jwt from 'jsonwebtoken';
import { users } from '@prisma/client';

export function generateToken(user: users): string {
  return jwt.sign(
    { 
      id: user.id, 
      email: user.email
    },
    process.env.JWT_SECRET || 'test-secret',
    { expiresIn: '1h' }
  );
} 