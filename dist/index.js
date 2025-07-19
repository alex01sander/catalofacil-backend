"use strict";
// src/index.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const prisma_1 = __importDefault(require("./lib/prisma"));
const products_1 = __importDefault(require("./routes/products"));
const auth_1 = __importDefault(require("./routes/auth"));
const site_1 = __importDefault(require("./routes/site"));
const domain_1 = __importDefault(require("./routes/domain"));
const stores_1 = __importDefault(require("./routes/stores"));
const ssoProviders_1 = __importDefault(require("./routes/ssoProviders"));
const samlProviders_1 = __importDefault(require("./routes/samlProviders"));
const ssoDomains_1 = __importDefault(require("./routes/ssoDomains"));
const flowState_1 = __importDefault(require("./routes/flowState"));
const users_1 = __importDefault(require("./routes/users"));
const categories_1 = __importDefault(require("./routes/categories"));
const instances_1 = __importDefault(require("./routes/instances"));
const profiles_1 = __importDefault(require("./routes/profiles"));
const mfaChallenges_1 = __importDefault(require("./routes/mfaChallenges"));
const customers_1 = __importDefault(require("./routes/customers"));
const samlRelayStates_1 = __importDefault(require("./routes/samlRelayStates"));
const codeChallengeMethod_1 = __importDefault(require("./routes/codeChallengeMethod"));
const controllerAdmins_1 = __importDefault(require("./routes/controllerAdmins"));
const sessions_1 = __importDefault(require("./routes/sessions"));
const storeSettings_1 = __importDefault(require("./routes/storeSettings"));
const mfaAmrClaims_1 = __importDefault(require("./routes/mfaAmrClaims"));
const mfaFactors_1 = __importDefault(require("./routes/mfaFactors"));
const expenses_1 = __importDefault(require("./routes/expenses"));
const domainOwners_1 = __importDefault(require("./routes/domainOwners"));
const identities_1 = __importDefault(require("./routes/identities"));
const app = (0, express_1.default)();
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
// Rate limiting
const limiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100, // limite de 100 requests por IP
    message: 'Muitas requisições deste IP, tente novamente mais tarde.'
});
app.use(limiter);
// CORS dinâmico para multi-tenant (subdomínios e domínios personalizados)
const corsOptions = async (req, callback) => {
    const origin = req.headers['origin'];
    // Permite requisições sem origin (ex: ferramentas internas, curl, etc)
    if (!origin)
        return callback(null, { origin: true, credentials: true, optionsSuccessStatus: 200 });
    // Permite todos os subdomínios de catalofacil.com.br
    if (origin.endsWith('.catalofacil.com.br'))
        return callback(null, { origin: true, credentials: true, optionsSuccessStatus: 200 });
    // Permite o domínio principal
    if (origin === 'https://catalofacil.com.br')
        return callback(null, { origin: true, credentials: true, optionsSuccessStatus: 200 });
    // Permite o frontend do Vercel
    if (origin === 'https://catalofacil-frontend.vercel.app')
        return callback(null, { origin: true, credentials: true, optionsSuccessStatus: 200 });
    try {
        // Verifica se o domínio está cadastrado como slug na tabela Domain
        const slug = origin.replace('https://', '').replace('.catalofacil.com.br', '');
        const domain = await prisma_1.default.domain.findFirst({ where: { slug } });
        if (domain)
            return callback(null, { origin: true, credentials: true, optionsSuccessStatus: 200 });
    }
    catch (e) {
        console.error('Erro ao consultar domínio para CORS:', e);
    }
    // Bloqueia qualquer outro domínio
    return callback(new Error('Not allowed by CORS'), { origin: false });
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json({ limit: '10mb' }));
app.use(express_1.default.urlencoded({ limit: '10mb', extended: true }));
// Middleware de logging seguro
app.use((req, res, next) => {
    // Nunca logar dados sensíveis como req.body ou req.headers!
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
    next();
});
// Rota de teste
app.get('/', (req, res) => {
    res.json({
        message: 'API rodando com sucesso!',
        environment: process.env.NODE_ENV || 'development',
        timestamp: new Date().toISOString()
    });
});
// Rota de health check para Railway
app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
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
app.use('/auth', auth_1.default);
app.use('/products', products_1.default);
app.use('/site', site_1.default);
app.use('/domain', domain_1.default);
app.use('/stores', stores_1.default);
app.use('/ssoProviders', ssoProviders_1.default);
app.use('/samlProviders', samlProviders_1.default);
app.use('/ssoDomains', ssoDomains_1.default);
app.use('/flowState', flowState_1.default);
app.use('/users', users_1.default);
app.use('/categories', categories_1.default);
app.use('/instances', instances_1.default);
app.use('/profiles', profiles_1.default);
app.use('/mfaChallenges', mfaChallenges_1.default);
app.use('/customers', customers_1.default);
app.use('/samlRelayStates', samlRelayStates_1.default);
app.use('/codeChallengeMethod', codeChallengeMethod_1.default);
app.use('/controllerAdmins', controllerAdmins_1.default);
app.use('/sessions', sessions_1.default);
app.use('/storeSettings', storeSettings_1.default);
app.use('/mfaAmrClaims', mfaAmrClaims_1.default);
app.use('/mfaFactors', mfaFactors_1.default);
app.use('/expenses', expenses_1.default);
app.use('/domainOwners', domainOwners_1.default);
app.use('/identities', identities_1.default);
// Middleware para rotas não encontradas
app.use('*', (req, res) => {
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
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
    console.log(`📊 Ambiente: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🌐 URL: ${process.env.RAILWAY_PUBLIC_DOMAIN || 'localhost'}`);
});
