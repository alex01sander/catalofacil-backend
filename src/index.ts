// src/index.ts

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Importar rotas
import ordersRouter from './routes/orders';
import orderItemsRouter from './routes/orderItems';
import customersRouter from './routes/customers';
import storesRouter from './routes/stores';
import productsRouter from './routes/products';
import categoriesRouter from './routes/categories';
import salesRouter from './routes/sales';
import expensesRouter from './routes/expenses';
import cashFlowRouter from './routes/cashFlow';
import authRouter from './routes/auth';
import siteRouter from './routes/site';
import storeSettingsRouter from './routes/storeSettings';
import creditAccountsRouter from './routes/creditAccounts';
import creditTransactionsRouter from './routes/creditTransactions';
import domainRouter from './routes/domain';

const app = express();
const prisma = new PrismaClient();

// Configurações de segurança
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
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
app.use(cors(corsOptions));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Middleware de logging
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Rotas
app.use('/pedidos', ordersRouter);
app.use('/itens-pedido', orderItemsRouter);
app.use('/clientes', customersRouter);
app.use('/lojas', storesRouter);
app.use('/produtos', productsRouter);
app.use('/categorias', categoriesRouter);
app.use('/vendas', salesRouter);
app.use('/despesas', expensesRouter);
app.use('/fluxo-caixa', cashFlowRouter);
app.use('/auth', authRouter);
app.use('/site', siteRouter);
app.use('/storeSettings', storeSettingsRouter);
app.use('/credit-accounts', creditAccountsRouter);
app.use('/credit-transactions', creditTransactionsRouter);
app.use('/domain', domainRouter);

// Rota de teste
app.get('/', (req: Request, res: Response) => {
  res.json({ 
    message: 'API rodando com sucesso!',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString()
  });
});

// Rota de health check para Railway
app.get('/health', (req: Request, res: Response) => {
  res.json({ 
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Middleware de tratamento de erros
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Erro:', err);
  
  if (process.env.NODE_ENV === 'production') {
    res.status(500).json({ error: 'Erro interno do servidor' });
  } else {
    res.status(500).json({ error: err.message, stack: err.stack });
  }
});

// Middleware para rotas não encontradas
app.use('*', (req: Request, res: Response) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ error: 'Token não fornecido' });
  
  const [, token] = auth.split(' ');
  if (!token) return res.status(401).json({ error: 'Token inválido' });
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    (req as any).user = decoded;
    next();
  } catch (error) {
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
