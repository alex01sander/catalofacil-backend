"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadRateLimit = exports.userRateLimit = exports.apiSlowDown = exports.apiRateLimit = exports.authRateLimit = exports.basicRateLimit = void 0;
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const express_slow_down_1 = __importDefault(require("express-slow-down"));
// Rate limiting básico
exports.basicRateLimit = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 1000, // máximo 1000 requests por IP
    message: {
        error: 'Muitas requisições deste IP, tente novamente em 15 minutos'
    },
    standardHeaders: true,
    legacyHeaders: false
});
// Rate limiting mais restritivo para autenticação
exports.authRateLimit = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 10, // máximo 10 tentativas de login por IP
    message: {
        error: 'Muitas tentativas de login, tente novamente em 15 minutos'
    },
    standardHeaders: true,
    legacyHeaders: false,
    skipSuccessfulRequests: true
});
// Rate limiting geral da API
exports.apiRateLimit = (0, express_rate_limit_1.default)({
    windowMs: 1 * 60 * 1000, // 1 minuto
    max: 100, // 100 requests por minuto
    message: {
        error: 'Limite de requisições excedido, tente novamente em 1 minuto'
    },
    standardHeaders: true,
    legacyHeaders: false
});
// Slow down - desacelerar requisições após limite
exports.apiSlowDown = (0, express_slow_down_1.default)({
    windowMs: 15 * 60 * 1000, // 15 minutos
    delayAfter: 50, // começar a atrasar após 50 requests
    delayMs: () => 100, // Delay fixo de 100ms (corrigido)
    maxDelayMs: 2000, // máximo 2 segundos de delay
    validate: { delayMs: false }, // Desabilitar warnings
    skip: (req) => {
        return req.path === '/health' || req.path === '/';
    }
});
// Rate limiting específico por usuário autenticado
exports.userRateLimit = (0, express_rate_limit_1.default)({
    windowMs: 1 * 60 * 1000, // 1 minuto
    max: 60, // 60 requests por minuto por usuário
    keyGenerator: (req) => {
        // Usar user ID se autenticado, senão IP
        return req.user?.id || req.ip;
    },
    message: {
        error: 'Limite de requisições excedido para este usuário'
    },
    standardHeaders: true,
    legacyHeaders: false
});
// Rate limiting para uploads
exports.uploadRateLimit = (0, express_rate_limit_1.default)({
    windowMs: 1 * 60 * 1000, // 1 minuto
    max: 10, // 10 uploads por minuto
    message: {
        error: 'Limite de uploads excedido, tente novamente em 1 minuto'
    },
    standardHeaders: true,
    legacyHeaders: false
});
