"use strict";
// src/index.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const client_1 = require("@prisma/client");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
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
// import adminRouter from './routes/admin';
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient();
app.use((0, cors_1.default)());
app.use(express_1.default.json({ limit: '10mb' })); // ou um valor maior, se necessário
app.use(express_1.default.urlencoded({ limit: '10mb', extended: true }));
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
app.use('/credit-accounts', authMiddleware, creditAccounts_1.default);
app.use('/credit-transactions', authMiddleware, creditTransactions_1.default);
app.use('/domain', domain_1.default);
// app.use('/admin', authMiddleware, adminRouter);
// Rota de teste
app.get('/', (req, res) => {
    res.json({ message: 'API rodando com sucesso!' });
});
function authMiddleware(req, res, next) {
    const auth = req.headers.authorization;
    if (!auth)
        return res.status(401).json({ error: 'Token não fornecido' });
    const [, token] = auth.split(' ');
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch {
        res.status(401).json({ error: 'Token inválido' });
    }
}
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
