"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCacheKey = generateCacheKey;
exports.setCache = setCache;
exports.getCache = getCache;
exports.deleteCache = deleteCache;
exports.setLongCache = setLongCache;
exports.getLongCache = getLongCache;
exports.clearUserCache = clearUserCache;
exports.cacheMiddleware = cacheMiddleware;
exports.getCacheStats = getCacheStats;
const node_cache_1 = __importDefault(require("node-cache"));
// Cache com TTL de 5 minutos para consultas frequentes
const cache = new node_cache_1.default({
    stdTTL: 300, // 5 minutos
    checkperiod: 60, // Verificar itens expirados a cada 1 minuto
    useClones: false // Performance - não clonar objetos
});
// Cache mais longo para dados que mudam pouco (30 minutos)
const longCache = new node_cache_1.default({
    stdTTL: 1800, // 30 minutos
    checkperiod: 300, // Verificar a cada 5 minutos
    useClones: false
});
// Função para gerar chave de cache consistente
function generateCacheKey(prefix, userId, params) {
    const paramString = params ? JSON.stringify(params) : '';
    return `${prefix}:${userId}:${paramString}`;
}
// Cache com TTL customizável
function setCache(key, value, ttl) {
    if (ttl) {
        return cache.set(key, value, ttl);
    }
    return cache.set(key, value);
}
function getCache(key) {
    return cache.get(key);
}
function deleteCache(key) {
    return cache.del(key);
}
// Cache longo para dados estáticos
function setLongCache(key, value) {
    return longCache.set(key, value);
}
function getLongCache(key) {
    return longCache.get(key);
}
// Limpar cache relacionado a um usuário
function clearUserCache(userId) {
    const keys = cache.keys();
    const userKeys = keys.filter(key => key.includes(userId));
    if (userKeys.length > 0) {
        cache.del(userKeys);
        console.log(`🗑️ Cache limpo para usuário ${userId}: ${userKeys.length} chaves removidas`);
    }
}
// Middleware de cache para Express
function cacheMiddleware(ttl = 300, keyGenerator) {
    return (req, res, next) => {
        // Só fazer cache para GET requests
        if (req.method !== 'GET') {
            return next();
        }
        const cacheKey = keyGenerator
            ? keyGenerator(req)
            : generateCacheKey(req.route.path, req.user?.id || 'anonymous', req.query);
        const cachedData = getCache(cacheKey);
        if (cachedData) {
            console.log(`🎯 Cache HIT: ${cacheKey}`);
            return res.json(cachedData);
        }
        // Interceptar a resposta para salvar no cache
        const originalJson = res.json.bind(res);
        res.json = (data) => {
            if (res.statusCode === 200) {
                setCache(cacheKey, data, ttl);
                console.log(`💾 Cache MISS - Salvando: ${cacheKey}`);
            }
            return originalJson(data);
        };
        next();
    };
}
// Estatísticas do cache
function getCacheStats() {
    return {
        shortCache: cache.getStats(),
        longCache: longCache.getStats(),
        keys: {
            short: cache.keys().length,
            long: longCache.keys().length
        }
    };
}
exports.default = cache;
