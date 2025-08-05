"use strict";
// src/index.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const path_1 = __importDefault(require("path"));
const prisma_1 = __importDefault(require('./src/lib/prisma'));
const products_1 = __importDefault(require('./src/routes/products'));
const auth_1 = __importDefault(require('./src/routes/auth'));
const site_1 = __importDefault(require('./src/routes/site'));
const domain_1 = __importDefault(require('./src/routes/domain'));
const stores_1 = __importDefault(require('./src/routes/stores'));
const ssoProviders_1 = __importDefault(require('./src/routes/ssoProviders'));
const samlProviders_1 = __importDefault(require('./src/routes/samlProviders'));
const ssoDomains_1 = __importDefault(require('./src/routes/ssoDomains'));
const flowState_1 = __importDefault(require('./src/routes/flowState'));
const users_1 = __importDefault(require('./src/routes/users'));
const categories_1 = __importDefault(require('./src/routes/categories'));
const instances_1 = __importDefault(require('./src/routes/instances'));
const profiles_1 = __importDefault(require('./src/routes/profiles'));
const mfaChallenges_1 = __importDefault(require('./src/routes/mfaChallenges'));
const samlRelayStates_1 = __importDefault(require('./src/routes/samlRelayStates'));
const codeChallengeMethod_1 = __importDefault(require('./src/routes/codeChallengeMethod'));
const controllerAdmins_1 = __importDefault(require('./src/routes/controllerAdmins'));
const sessions_1 = __importDefault(require('./src/routes/sessions'));
const storeSettings_1 = __importDefault(require('./src/routes/storeSettings'));
const mfaAmrClaims_1 = __importDefault(require('./src/routes/mfaAmrClaims'));
const mfaFactors_1 = __importDefault(require('./src/routes/mfaFactors'));
const expenses_1 = __importDefault(require('./src/routes/expenses'));
const domainOwners_1 = __importDefault(require('./src/routes/domainOwners'));
const identities_1 = __importDefault(require('./src/routes/identities'));
const orders_1 = __importDefault(require('./src/routes/orders'));
const sales_1 = __importDefault(require('./src/routes/sales'));
const cashFlow_1 = __importDefault(require('./src/routes/cashFlow'));
const creditAccounts_1 = __importDefault(require('./src/routes/creditAccounts'));
const creditTransactions_1 = __importDefault(require('./src/routes/creditTransactions'));
const customers_1 = __importDefault(require('./src/routes/customers'));
const admin_1 = __importDefault(require('./src/routes/admin'));
const controller_1 = __importDefault(require('./src/routes/controller'));
// Importar middlewares de otimização
const rateLimiter_1 = require('./src/middleware/rateLimiter');
const cache_1 = require('./src/lib/cache');
const app = (0, express_1.default)();
exports.app = app;
// Configuração para confiar no proxy do Render/Vercel
app.set('trust proxy', 1);
// Verificação de variáveis de ambiente obrigatórias
const requiredEnv = ['DATABASE_URL', 'JWT_SECRET'];
const missingEnv = requiredEnv.filter((v) => !process.env[v]);
if (missingEnv.length > 0) {
    console.error('Erro: Variáveis de ambiente obrigatórias não definidas:', missingEnv.join(', '));
    process.exit(1);
}
// Configurações de segurança
app.use((0, helmet_1.default)());
// Rate limiting otimizado
app.use(rateLimiter_1.basicRateLimit);
app.use(rateLimiter_1.apiSlowDown);
// CORS mais simples e robusto - permitir explicitamente o domínio principal
const corsOptions = {
    origin: [
        'https://catalofacil.catalofacil.com.br',
        'https://catalofacil.com.br',
        'https://catalofacil-frontend.vercel.app',
        /https:\/\/.*\.catalofacil\.com\.br$/,
        /https:\/\/.*catalofacil-frontend.*\.vercel\.app$/,
        /https:\/\/.*-alex-brittos-projects\.vercel\.app$/
    ],
    credentials: true,
    optionsSuccessStatus: 200,
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin'],
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS']
};
// Log de debug para CORS
app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (origin && req.method === 'OPTIONS') {
        console.log('🌍 CORS Preflight:', {
            origin,
            method: req.headers['access-control-request-method'],
            headers: req.headers['access-control-request-headers'],
            path: req.path
        });
    }
    next();
});
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json({ limit: '10mb' }));
app.use(express_1.default.urlencoded({ limit: '10mb', extended: true }));
// Servir arquivos estáticos
app.use('/assets', express_1.default.static(path_1.default.join(__dirname, '../dist/assets')));
app.use('/assets', express_1.default.static(path_1.default.join(__dirname, '../public/assets')));
app.use(express_1.default.static(path_1.default.join(__dirname, '../dist')));
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
// Middleware de logging seguro
app.use((req, res, next) => {
    // Nunca logar dados sensíveis como req.body ou req.headers!
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path} - Origin: ${req.headers.origin || 'none'}`);
    next();
});
// Middleware para capturar erros não tratados
app.use((err, req, res, next) => {
    console.error('💥 Erro não tratado capturado:', {
        error: err.message,
        stack: err.stack?.substring(0, 500),
        method: req.method,
        path: req.path,
        origin: req.headers.origin,
        timestamp: new Date().toISOString()
    });
    // Se headers já foram enviados, delegar para o error handler padrão do Express
    if (res.headersSent) {
        return next(err);
    }
    // Responder com erro genérico
    res.status(500).json({
        error: 'Erro interno do servidor',
        message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong!',
        timestamp: new Date().toISOString()
    });
});
// Rota de teste
app.get('/', (req, res) => {
    res.json({
        message: 'API rodando com sucesso!',
        environment: process.env.NODE_ENV || 'development',
        timestamp: new Date().toISOString()
    });
});
// Rota de health check otimizada
app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        cache: (0, cache_1.getCacheStats)()
    });
});
// Endpoint para estatísticas do cache
app.get('/cache-stats', rateLimiter_1.basicRateLimit, (req, res) => {
    const stats = (0, cache_1.getCacheStats)();
    res.json({
        ...stats,
        timestamp: new Date().toISOString()
    });
});
// Middleware de tratamento de erros
app.use((err, req, res, next) => {
    console.error('Erro:', err);
    if (process.env.NODE_ENV === 'production') {
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
    else {
        res.status(500).json({ error: err.message, stack: err.stack });
    }
});
app.use('/auth', rateLimiter_1.authRateLimit, auth_1.default);
app.use('/products', products_1.default);
app.use('/site', site_1.default);
app.use('/api/site', site_1.default); // Alias para compatibilidade com frontend
app.use('/domain', domain_1.default);
app.use('/stores', stores_1.default);
app.use('/ssoProviders', ssoProviders_1.default);
app.use('/samlProviders', samlProviders_1.default);
app.use('/ssoDomains', ssoDomains_1.default);
app.use('/flowState', flowState_1.default);
app.use('/users', users_1.default);
app.use('/categories', categories_1.default);
app.use('/categorias', categories_1.default); // Alias em português
app.use('/api/categorias', categories_1.default); // Alias para compatibilidade com frontend
app.use('/instances', instances_1.default);
app.use('/profiles', profiles_1.default);
app.use('/mfaChallenges', mfaChallenges_1.default);
app.use('/customers', customers_1.default);
app.use('/api/customers', customers_1.default); // Alias para compatibilidade com frontend
app.use('/samlRelayStates', samlRelayStates_1.default);
app.use('/codeChallengeMethod', codeChallengeMethod_1.default);
app.use('/controllerAdmins', controllerAdmins_1.default);
app.use('/api/controller-admins', controllerAdmins_1.default); // Alias para compatibilidade com frontend
app.use('/sessions', sessions_1.default);
app.use('/storeSettings', storeSettings_1.default);
app.use('/api/storeSettings', storeSettings_1.default); // Alias para compatibilidade com frontend
app.use('/mfaAmrClaims', mfaAmrClaims_1.default);
app.use('/mfaFactors', mfaFactors_1.default);
app.use('/expenses', expenses_1.default);
app.use('/despesas', expenses_1.default); // Alias em português
app.use('/domainOwners', domainOwners_1.default);
app.use('/identities', identities_1.default);
app.use('/orders', orders_1.default);
app.use('/pedidos', orders_1.default); // Alias em português
app.use('/sales', sales_1.default);
app.use('/vendas', sales_1.default); // Alias em português
app.use('/cashFlow', cashFlow_1.default);
app.use('/fluxo-caixa', cashFlow_1.default); // Alias em português
app.use('/creditAccounts', creditAccounts_1.default);
app.use('/credit-accounts', creditAccounts_1.default); // Alias com hífen
app.use('/creditTransactions', creditTransactions_1.default);
app.use('/credit-transactions', creditTransactions_1.default); // Alias com hífen
app.use('/customers', customers_1.default);
// Rotas administrativas (apenas para admins)
app.use('/admin', admin_1.default);
app.use('/api/admin', admin_1.default); // Alias para compatibilidade com frontend
// Controller Admin Dashboard (apenas para admins)
app.use('/controller', controller_1.default);
app.use('/api/controller', controller_1.default); // Alias para compatibilidade com frontend
// Middleware para rotas não encontradas
app.use('*', (req, res) => {
    // Não capturar requisições de arquivos estáticos
    if (req.path.startsWith('/assets/') ||
        req.path.includes('.js') ||
        req.path.includes('.css') ||
        req.path.includes('.png') ||
        req.path.includes('.jpg') ||
        req.path.includes('.ico') ||
        req.path.includes('.svg')) {
        return res.status(404).send('File not found');
    }
    // Se não for uma rota da API, tentar servir o frontend
    if (!req.path.startsWith('/api/') &&
        !req.path.startsWith('/auth/') &&
        !req.path.startsWith('/products/') &&
        !req.path.startsWith('/customers/') &&
        !req.path.startsWith('/orders/') &&
        !req.path.startsWith('/sales/') &&
        !req.path.startsWith('/categories/') &&
        !req.path.startsWith('/stores/') &&
        !req.path.startsWith('/site/') &&
        !req.path.startsWith('/health') &&
        !req.path.startsWith('/cache-stats') &&
        req.path !== '/' &&
        req.path !== '/health') {
        // Tentar servir o index.html do frontend
        const indexPath = path_1.default.join(__dirname, '../dist/index.html');
        const publicIndexPath = path_1.default.join(__dirname, '../public/index.html');
        if (require('fs').existsSync(indexPath)) {
            return res.sendFile(indexPath);
        }
        else if (require('fs').existsSync(publicIndexPath)) {
            return res.sendFile(publicIndexPath);
        }
    }
    res.status(404).json({ error: 'Rota não encontrada' });
});
const PORT = process.env.PORT || 3000;
// Graceful shutdown
process.on('SIGTERM', async () => {
    console.log('SIGTERM recebido, fechando servidor...');
    try {
        await prisma_1.default.$disconnect();
        console.log('Prisma desconectado com sucesso');
    }
    catch (error) {
        console.error('Erro ao desconectar Prisma:', error);
    }
    process.exit(0);
});
process.on('SIGINT', async () => {
    console.log('SIGINT recebido, fechando servidor...');
    try {
        await prisma_1.default.$disconnect();
        console.log('Prisma desconectado com sucesso');
    }
    catch (error) {
        console.error('Erro ao desconectar Prisma:', error);
    }
    process.exit(0);
});
// Só iniciar o servidor se não estiver em modo de teste
if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log(`🚀 Servidor rodando na porta ${PORT}`);
        console.log(`📊 Ambiente: ${process.env.NODE_ENV || 'development'}`);
        console.log(`🌐 URL: ${process.env.RAILWAY_PUBLIC_DOMAIN || 'localhost'}`);
    });
}
