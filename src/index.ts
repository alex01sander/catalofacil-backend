// src/index.ts

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { PrismaClient } from '@prisma/client';
import productsRouter from './routes/products';
import authRouter from './routes/auth';
import siteRouter from './routes/site';
import domainRouter from './routes/domain';
import storesRouter from './routes/stores';
import ssoProvidersRouter from './routes/ssoProviders';
import samlProvidersRouter from './routes/samlProviders';
import ssoDomainsRouter from './routes/ssoDomains';
import flowStateRouter from './routes/flowState';
import usersRouter from './routes/users';
import categoriesRouter from './routes/categories';
import instancesRouter from './routes/instances';
import profilesRouter from './routes/profiles';
import mfaChallengesRouter from './routes/mfaChallenges';
import customersRouter from './routes/customers';
import samlRelayStatesRouter from './routes/samlRelayStates';
import codeChallengeMethodRouter from './routes/codeChallengeMethod';
import controllerAdminsRouter from './routes/controllerAdmins';
import sessionsRouter from './routes/sessions';
import storeSettingsRouter from './routes/storeSettings';
import mfaAmrClaimsRouter from './routes/mfaAmrClaims';
import mfaFactorsRouter from './routes/mfaFactors';
import expensesRouter from './routes/expenses';
import domainOwnersRouter from './routes/domainOwners';
import identitiesRouter from './routes/identities';

const app = express();
const prisma = new PrismaClient();

// Verificação de variáveis de ambiente obrigatórias
const requiredEnv = ['DATABASE_URL', 'JWT_SECRET'];
const missingEnv = requiredEnv.filter((v) => !process.env[v]);
if (missingEnv.length > 0) {
  console.error('Erro: Variáveis de ambiente obrigatórias não definidas:', missingEnv.join(', '));
  process.exit(1);
}

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
    ? [process.env.FRONTEND_URL || 'https://catalofacil-frontend.vercel.app']
    : true,
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Middleware de logging seguro
app.use((req: Request, res: Response, next: NextFunction) => {
  // Nunca logar dados sensíveis como req.body ou req.headers!
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

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

app.use('/auth', authRouter);
app.use('/products', productsRouter);
app.use('/site', siteRouter);
app.use('/domain', domainRouter);
app.use('/stores', storesRouter);
app.use('/ssoProviders', ssoProvidersRouter);
app.use('/samlProviders', samlProvidersRouter);
app.use('/ssoDomains', ssoDomainsRouter);
app.use('/flowState', flowStateRouter);
app.use('/users', usersRouter);
app.use('/categories', categoriesRouter);
app.use('/instances', instancesRouter);
app.use('/profiles', profilesRouter);
app.use('/mfaChallenges', mfaChallengesRouter);
app.use('/customers', customersRouter);
app.use('/samlRelayStates', samlRelayStatesRouter);
app.use('/codeChallengeMethod', codeChallengeMethodRouter);
app.use('/controllerAdmins', controllerAdminsRouter);
app.use('/sessions', sessionsRouter);
app.use('/storeSettings', storeSettingsRouter);
app.use('/mfaAmrClaims', mfaAmrClaimsRouter);
app.use('/mfaFactors', mfaFactorsRouter);
app.use('/expenses', expensesRouter);
app.use('/domainOwners', domainOwnersRouter);
app.use('/identities', identitiesRouter);

// Middleware para rotas não encontradas
app.use('*', (req: Request, res: Response) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

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
