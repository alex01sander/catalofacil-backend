"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma_1 = __importDefault(require("../lib/prisma"));
const router = (0, express_1.Router)();
router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    const hash = await bcryptjs_1.default.hash(password, 10);
    const user = await prisma_1.default.user.create({ data: { email, password: hash } });
    res.json(user);
});
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: 'Email e senha são obrigatórios' });
        }
        const user = await prisma_1.default.user.findUnique({ where: { email } });
        if (!user) {
            return res.status(401).json({ error: 'Credenciais inválidas' });
        }
        const isValidPassword = await bcryptjs_1.default.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({ error: 'Credenciais inválidas' });
        }
        const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '24h' });
        res.json({
            token,
            user: {
                id: user.id,
                email: user.email,
                createdAt: user.createdAt
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
exports.default = router;
