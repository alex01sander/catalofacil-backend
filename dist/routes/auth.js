"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma = new client_1.PrismaClient();
const router = (0, express_1.Router)();
router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    const hash = await bcryptjs_1.default.hash(password, 10);
    const user = await prisma.user.create({ data: { email, password: hash } });
    res.json(user);
});
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !(await bcryptjs_1.default.compare(password, user.password))) {
        return res.status(401).json({ error: 'Credenciais inválidas' });
    }
    const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET);
    res.json({ token });
});
exports.default = router;
