import NodeCache from 'node-cache';

// Cache com TTL de 5 minutos para consultas frequentes
const cache = new NodeCache({ 
  stdTTL: 300, // 5 minutos
  checkperiod: 60, // Verificar itens expirados a cada 1 minuto
  useClones: false // Performance - não clonar objetos
});

// Cache mais longo para dados que mudam pouco (30 minutos)
const longCache = new NodeCache({ 
  stdTTL: 1800, // 30 minutos
  checkperiod: 300, // Verificar a cada 5 minutos
  useClones: false
});

// Função para gerar chave de cache consistente
export function generateCacheKey(prefix: string, userId: string, params?: Record<string, any>): string {
  const paramString = params ? JSON.stringify(params) : '';
  return `${prefix}:${userId}:${paramString}`;
}

// Cache com TTL customizável
export function setCache(key: string, value: any, ttl?: number): boolean {
  if (ttl) {
    return cache.set(key, value, ttl);
  }
  return cache.set(key, value);
}

export function getCache<T>(key: string): T | undefined {
  return cache.get<T>(key);
}

export function deleteCache(key: string): number {
  return cache.del(key);
}

// Cache longo para dados estáticos
export function setLongCache(key: string, value: any): boolean {
  return longCache.set(key, value);
}

export function getLongCache<T>(key: string): T | undefined {
  return longCache.get<T>(key);
}

// Limpar cache relacionado a um usuário
export function clearUserCache(userId: string): void {
  const keys = cache.keys();
  const userKeys = keys.filter(key => key.includes(userId));
  if (userKeys.length > 0) {
    cache.del(userKeys);
    console.log(`🗑️ Cache limpo para usuário ${userId}: ${userKeys.length} chaves removidas`);
  }
}

// Middleware de cache para Express
export function cacheMiddleware(ttl: number = 300, keyGenerator?: (req: any) => string) {
  return (req: any, res: any, next: any) => {
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
    res.json = (data: any) => {
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
export function getCacheStats() {
  return {
    shortCache: cache.getStats(),
    longCache: longCache.getStats(),
    keys: {
      short: cache.keys().length,
      long: longCache.keys().length
    }
  };
}

export default cache; 