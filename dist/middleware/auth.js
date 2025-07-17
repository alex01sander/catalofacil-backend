"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = authenticateJWT;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function authenticateJWT(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader)
        return res.status(401).json({ error: 'Token não fornecido' });
    const token = authHeader.split(' ')[1];
    jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err)
            return res.status(403).json({ error: 'Token inválido' });
        req.user = user;
        next();
    });
}
