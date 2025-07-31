"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = __importDefault(require("../src/middleware/auth"));
const rateLimiter_1 = require("../src/middleware/rateLimiter");
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
    let mockRequest;
    let mockResponse;
    let nextFunction = jest.fn();
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
            const token = jsonwebtoken_1.default.sign({ id: '123e4567-e89b-12d3-a456-426614174000', email: 'test@example.com' }, 'test-secret-key', { expiresIn: '1h' });
            mockRequest.headers = {
                authorization: `Bearer ${token}`
            };
            await (0, auth_1.default)(mockRequest, mockResponse, nextFunction);
            expect(nextFunction).toHaveBeenCalled();
            expect(mockRequest.user).toBeDefined();
            expect(mockRequest.user?.id).toBe('123e4567-e89b-12d3-a456-426614174000');
        });
        it('should reject request without authorization header', async () => {
            await (0, auth_1.default)(mockRequest, mockResponse, nextFunction);
            expect(mockResponse.status).toHaveBeenCalledWith(401);
            expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Token não fornecido' });
            expect(nextFunction).not.toHaveBeenCalled();
        });
        it('should reject request with invalid token format', async () => {
            mockRequest.headers = {
                authorization: 'InvalidToken'
            };
            await (0, auth_1.default)(mockRequest, mockResponse, nextFunction);
            expect(mockResponse.status).toHaveBeenCalledWith(401);
            expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Formato de token inválido' });
            expect(nextFunction).not.toHaveBeenCalled();
        });
        it('should reject request with invalid JWT token', async () => {
            mockRequest.headers = {
                authorization: 'Bearer invalid.token.here'
            };
            await (0, auth_1.default)(mockRequest, mockResponse, nextFunction);
            expect(mockResponse.status).toHaveBeenCalledWith(403);
            expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Token inválido' });
            expect(nextFunction).not.toHaveBeenCalled();
        });
        it('should reject expired token', async () => {
            const expiredToken = jsonwebtoken_1.default.sign({ id: '123e4567-e89b-12d3-a456-426614174000', email: 'test@example.com' }, 'test-secret-key', { expiresIn: '-1h' } // Token expirado
            );
            mockRequest.headers = {
                authorization: `Bearer ${expiredToken}`
            };
            await (0, auth_1.default)(mockRequest, mockResponse, nextFunction);
            expect(mockResponse.status).toHaveBeenCalledWith(403);
            expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Token inválido' });
            expect(nextFunction).not.toHaveBeenCalled();
        });
    });
    describe('userRateLimit', () => {
        it('should allow request within rate limit', async () => {
            mockRequest.user = { id: '123e4567-e89b-12d3-a456-426614174000', email: 'test@example.com' };
            mockRequest.ip = '127.0.0.1';
            await (0, rateLimiter_1.userRateLimit)(mockRequest, mockResponse, nextFunction);
            expect(nextFunction).toHaveBeenCalled();
        });
        it('should allow request within rate limit', async () => {
            mockRequest.user = { id: '123e4567-e89b-12d3-a456-426614174000', email: 'test@example.com' };
            mockRequest.ip = '127.0.0.1';
            await (0, rateLimiter_1.userRateLimit)(mockRequest, mockResponse, nextFunction);
            expect(nextFunction).toHaveBeenCalled();
        });
    });
});
