// src/index.ts

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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

// import adminRouter from './routes/admin';

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json({ limit: '10mb' })); // ou um valor maior, se necessário
app.use(express.urlencoded({ limit: '10mb', extended: true }));

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
app.use('/credit-accounts', authMiddleware, creditAccountsRouter);
app.use('/credit-transactions', authMiddleware, creditTransactionsRouter);
app.use('/domain', domainRouter);
// app.use('/admin', authMiddleware, adminRouter);

// Rota de teste
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'API rodando com sucesso!' });
});

function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ error: 'Token não fornecido' });
  const [, token] = auth.split(' ');
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    (req as any).user = decoded;
    next();
  } catch {
    res.status(401).json({ error: 'Token inválido' });
  }
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
