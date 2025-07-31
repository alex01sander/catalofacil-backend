"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma_1 = __importDefault(require("../lib/prisma"));
const auth_1 = __importDefault(require("../middleware/auth"));
const router = (0, express_1.Router)();
router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    const hash = await bcryptjs_1.default.hash(password, 10);
    const user = await prisma_1.default.users.create({ data: { email, encrypted_password: hash } });
    res.json(user);
});
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: 'Email e senha são obrigatórios' });
        }
        const user = await prisma_1.default.users.findUnique({ where: { email } });
        if (!user) {
            return res.status(401).json({ error: 'Credenciais inválidas' });
        }
        const isValidPassword = await bcryptjs_1.default.compare(password, user.encrypted_password || '');
        if (!isValidPassword) {
            return res.status(401).json({ error: 'Credenciais inválidas' });
        }
        const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '24h' });
        console.log('✅ Login realizado:', { userId: user.id, email: user.email });
        res.json({
            token,
            user: {
                id: user.id,
                email: user.email,
                createdAt: user.created_at
            }
        });
    }
    catch (error) {
        console.error('Erro no login:', error);
        if (error.code === 'P1001' || error.message?.includes('Server has closed the connection')) {
            return res.status(503).json({ error: 'Serviço temporariamente indisponível. Tente novamente em alguns segundos.' });
        }
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
// Novo endpoint para verificar status do token
router.get('/verify', auth_1.default, (req, res) => {
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
        const decoded = jsonwebtoken_1.default.decode(token, { complete: true });
        // Verificar se foi possível decodificar
        if (!decoded) {
            return res.json({
                valid: false,
                reason: 'Token malformado - não foi possível decodificar',
                token_preview: token.substring(0, 20) + '...'
            });
        }
        // Tentar verificar o token
        jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                let reason = 'Token inválido';
                if (err.name === 'TokenExpiredError') {
                    reason = 'Token expirado';
                }
                else if (err.name === 'JsonWebTokenError') {
                    reason = 'Token malformado ou assinatura inválida';
                }
                else if (err.name === 'NotBeforeError') {
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
    }
    catch (error) {
        console.error('Erro no debug do token:', error);
        res.status(500).json({ error: 'Erro ao processar debug do token' });
    }
});
exports.default = router;
