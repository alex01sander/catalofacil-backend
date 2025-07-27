import rateLimit from 'express-rate-limit';
import slowDown from 'express-slow-down';

// Rate limiting básico
export const basicRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 1000, // máximo 1000 requests por IP
  message: {
    error: 'Muitas requisições deste IP, tente novamente em 15 minutos'
  },
  standardHeaders: true,
  legacyHeaders: false
});

// Rate limiting mais restritivo para autenticação
export const authRateLimit = rateLimit({
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
export const apiRateLimit = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minuto
  max: 100, // 100 requests por minuto
  message: {
    error: 'Limite de requisições excedido, tente novamente em 1 minuto'
  },
  standardHeaders: true,
  legacyHeaders: false
});

// Slow down - desacelerar requisições após limite
export const apiSlowDown = slowDown({
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
export const userRateLimit = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minuto
  max: 60, // 60 requests por minuto por usuário
  keyGenerator: (req) => {
    // Usar user ID se autenticado, senão IP
    return (req as any).user?.id || req.ip;
  },
  message: {
    error: 'Limite de requisições excedido para este usuário'
  },
  standardHeaders: true,
  legacyHeaders: false
});

// Rate limiting para uploads
export const uploadRateLimit = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minuto
  max: 10, // 10 uploads por minuto
  message: {
    error: 'Limite de uploads excedido, tente novamente em 1 minuto'
  },
  standardHeaders: true,
  legacyHeaders: false
}); 