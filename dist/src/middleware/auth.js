"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = authenticateJWT;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function authenticateJWT(req, res, next) {
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
    jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            console.log('❌ Erro na verificação do token:', {
                error: err.name,
                message: err.message,
                tokenPreview: token.substring(0, 20) + '...',
                jwtSecretConfigured: !!process.env.JWT_SECRET
            });
            // Tentar decodificar sem verificar para diagnóstico
            try {
                const decoded = jsonwebtoken_1.default.decode(token, { complete: true });
                if (decoded) {
                    console.log('🔍 Token decodificado (sem verificação):', {
                        header: decoded.header,
                        payload: decoded.payload,
                        expiration: decoded.payload && typeof decoded.payload === 'object' && 'exp' in decoded.payload
                            ? new Date(decoded.payload.exp * 1000)
                            : 'N/A'
                    });
                }
            }
            catch (decodeError) {
                console.log('❌ Não foi possível decodificar o token:', decodeError);
            }
            return res.status(403).json({ error: 'Token inválido' });
        }
        console.log('✅ Token válido para usuário:', {
            userId: user.id,
            email: user.email
        });
        req.user = user;
        next();
    });
}
