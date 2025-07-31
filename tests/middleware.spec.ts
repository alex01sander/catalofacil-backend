import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import authenticateJWT from '../src/middleware/auth';
import { userRateLimit } from '../src/middleware/rateLimiter';

// Mock do Prisma
jest.mock('../src/lib/prisma', () => ({
  __esModule: true,
  default: {
    users: {
      findUnique: jest.fn()
    }
  }
}));

describe('Middleware Tests', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let nextFunction: NextFunction = jest.fn();

  beforeEach(() => {
    mockRequest = {
      headers: {},
      user: undefined
    };
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    };
    nextFunction = jest.fn();
  });

  describe('authenticateJWT', () => {
    it('should authenticate valid JWT token', async () => {
      const token = jwt.sign(
        { id: '123e4567-e89b-12d3-a456-426614174000', email: 'test@example.com' },
        'test-secret-key',
        { expiresIn: '1h' }
      );

      mockRequest.headers = {
        authorization: `Bearer ${token}`
      };

      await authenticateJWT(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(nextFunction).toHaveBeenCalled();
      expect(mockRequest.user).toBeDefined();
      expect(mockRequest.user?.id).toBe('123e4567-e89b-12d3-a456-426614174000');
    });

    it('should reject request without authorization header', async () => {
      await authenticateJWT(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(mockResponse.status).toHaveBeenCalledWith(401);
      expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Token não fornecido' });
      expect(nextFunction).not.toHaveBeenCalled();
    });

    it('should reject request with invalid token format', async () => {
      mockRequest.headers = {
        authorization: 'InvalidToken'
      };

      await authenticateJWT(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(mockResponse.status).toHaveBeenCalledWith(401);
      expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Formato de token inválido' });
      expect(nextFunction).not.toHaveBeenCalled();
    });

    it('should reject request with invalid JWT token', async () => {
      mockRequest.headers = {
        authorization: 'Bearer invalid.token.here'
      };

      await authenticateJWT(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(mockResponse.status).toHaveBeenCalledWith(403);
      expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Token inválido' });
      expect(nextFunction).not.toHaveBeenCalled();
    });

    it('should reject expired token', async () => {
      const expiredToken = jwt.sign(
        { id: '123e4567-e89b-12d3-a456-426614174000', email: 'test@example.com' },
        'test-secret-key',
        { expiresIn: '-1h' } // Token expirado
      );

      mockRequest.headers = {
        authorization: `Bearer ${expiredToken}`
      };

      await authenticateJWT(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(mockResponse.status).toHaveBeenCalledWith(403);
      expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Token inválido' });
      expect(nextFunction).not.toHaveBeenCalled();
    });
  });

  describe('userRateLimit', () => {
    it('should allow request within rate limit', async () => {
      mockRequest.user = { id: '123e4567-e89b-12d3-a456-426614174000', email: 'test@example.com' };
      (mockRequest as any).ip = '127.0.0.1';

      await userRateLimit(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(nextFunction).toHaveBeenCalled();
    });

    it('should allow request within rate limit', async () => {
      mockRequest.user = { id: '123e4567-e89b-12d3-a456-426614174000', email: 'test@example.com' };
      (mockRequest as any).ip = '127.0.0.1';

      await userRateLimit(mockRequest as Request, mockResponse as Response, nextFunction);

      expect(nextFunction).toHaveBeenCalled();
    });
  });
}); 