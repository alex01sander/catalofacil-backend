"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateAdmin = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma_1 = __importDefault(require("../lib/prisma"));
const authenticateAdmin = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ error: 'Token de autenticação necessário' });
        }
        const token = authHeader.substring(7);
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        // Verificar se o usuário existe e é admin
        const user = await prisma_1.default.users.findUnique({
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
        const isAdmin = user.role === 'admin' || await prisma_1.default.controller_admins.findFirst({
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
    }
    catch (error) {
        console.error('Erro na autenticação de admin:', error);
        return res.status(401).json({ error: 'Token inválido' });
    }
};
exports.authenticateAdmin = authenticateAdmin;
