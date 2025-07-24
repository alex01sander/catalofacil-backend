import rateLimit from 'express-rate-limit';
import slowDown from 'express-slow-down';

// Rate limiting básico - 100 requests por 15 minutos
export const basicRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // máximo 100 requests por IP
  message: {
    error: 'Muitas requisições deste IP, tente novamente em 15 minutos.',
    retryAfter: '15 minutos'
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  skip: (req) => {
    // Pular rate limiting para health check
    return req.path === '/health' || req.path === '/';
  }
});

// Rate limiting mais restritivo para endpoints que fazem queries pesadas
export const heavyQueryRateLimit = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutos
  max: 30, // máximo 30 requests por IP
  message: {
    error: 'Muitas consultas pesadas deste IP, tente novamente em 5 minutos.',
    retryAfter: '5 minutos'
  },
  standardHeaders: true,
  legacyHeaders: false
});

// Rate limiting para autenticação - mais restritivo
export const authRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 10, // máximo 10 tentativas de login por IP
  message: {
    error: 'Muitas tentativas de login, tente novamente em 15 minutos.',
    retryAfter: '15 minutos'
  },
  standardHeaders: true,
  legacyHeaders: false
});

// Slow down - desacelerar requisições após limite
export const apiSlowDown = slowDown({
  windowMs: 15 * 60 * 1000, // 15 minutos
  delayAfter: 50, // começar a atrasar após 50 requests
  delayMs: 100, // aumentar 100ms de delay por request adicional
  maxDelayMs: 2000, // máximo 2 segundos de delay
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
    return (req as any).user?.id || req.ip || 'anonymous';
  },
  message: {
    error: 'Limite de requisições por usuário excedido, aguarde 1 minuto.',
    retryAfter: '1 minuto'
  },
  standardHeaders: true,
  legacyHeaders: false
});

// Rate limiting para uploads
export const uploadRateLimit = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutos
  max: 20, // máximo 20 uploads por 10 minutos
  message: {
    error: 'Limite de uploads excedido, tente novamente em 10 minutos.',
    retryAfter: '10 minutos'
  },
  standardHeaders: true,
  legacyHeaders: false
}); 