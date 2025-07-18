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
const client_1 = require("@prisma/client");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// Importar rotas
const orders_1 = __importDefault(require("./routes/orders"));
const orderItems_1 = __importDefault(require("./routes/orderItems"));
const customers_1 = __importDefault(require("./routes/customers"));
const stores_1 = __importDefault(require("./routes/stores"));
const products_1 = __importDefault(require("./routes/products"));
const categories_1 = __importDefault(require("./routes/categories"));
const sales_1 = __importDefault(require("./routes/sales"));
const expenses_1 = __importDefault(require("./routes/expenses"));
const cashFlow_1 = __importDefault(require("./routes/cashFlow"));
const auth_1 = __importDefault(require("./routes/auth"));
const site_1 = __importDefault(require("./routes/site"));
const storeSettings_1 = __importDefault(require("./routes/storeSettings"));
const creditAccounts_1 = __importDefault(require("./routes/creditAccounts"));
const creditTransactions_1 = __importDefault(require("./routes/creditTransactions"));
const domain_1 = __importDefault(require("./routes/domain"));
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient();
// Configurações de segurança
app.use((0, helmet_1.default)());
// Rate limiting
const limiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100, // limite de 100 requests por IP
    message: 'Muitas requisições deste IP, tente novamente mais tarde.'
});
app.use(limiter);
// CORS mais restritivo para produção
const corsOptions = {
    origin: process.env.NODE_ENV === 'production'
        ? [process.env.FRONTEND_URL || 'https://seu-frontend.railway.app']
        : true,
    credentials: true,
    optionsSuccessStatus: 200
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json({ limit: '10mb' }));
app.use(express_1.default.urlencoded({ limit: '10mb', extended: true }));
// Middleware de logging
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
});
// Rotas
app.use('/pedidos', orders_1.default);
app.use('/itens-pedido', orderItems_1.default);
app.use('/clientes', customers_1.default);
app.use('/lojas', stores_1.default);
app.use('/produtos', products_1.default);
app.use('/categorias', categories_1.default);
app.use('/vendas', sales_1.default);
app.use('/despesas', expenses_1.default);
app.use('/fluxo-caixa', cashFlow_1.default);
app.use('/auth', auth_1.default);
app.use('/site', site_1.default);
app.use('/storeSettings', storeSettings_1.default);
app.use('/credit-accounts', creditAccounts_1.default);
app.use('/credit-transactions', creditTransactions_1.default);
app.use('/domain', domain_1.default);
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
// Middleware para rotas não encontradas
app.use('*', (req, res) => {
    res.status(404).json({ error: 'Rota não encontrada' });
});
function authMiddleware(req, res, next) {
    const auth = req.headers.authorization;
    if (!auth)
        return res.status(401).json({ error: 'Token não fornecido' });
    const [, token] = auth.split(' ');
    if (!token)
        return res.status(401).json({ error: 'Token inválido' });
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch (error) {
        console.error('Erro de autenticação:', error);
        res.status(401).json({ error: 'Token inválido' });
    }
}
const PORT = process.env.PORT || 3000;
// Graceful shutdown
process.on('SIGTERM', async () => {
    console.log('SIGTERM recebido, fechando servidor...');
    await prisma.$disconnect();
    process.exit(0);
});
process.on('SIGINT', async () => {
    console.log('SIGINT recebido, fechando servidor...');
    await prisma.$disconnect();
    process.exit(0);
});
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
    console.log(`📊 Ambiente: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🌐 URL: ${process.env.RAILWAY_PUBLIC_DOMAIN || 'localhost'}`);
});
