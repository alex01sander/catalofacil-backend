// src/index.ts

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import prisma from './lib/prisma';
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
import ordersRouter from './routes/orders';
import salesRouter from './routes/sales';
import cashFlowRouter from './routes/cashFlow';
import creditAccountsRouter from './routes/creditAccounts';
import creditTransactionsRouter from './routes/creditTransactions';
import customersRouter from './routes/customers';

import type { CorsOptionsDelegate, CorsRequest } from 'cors';

const app = express();

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
app.use(helmet());

// CORS fixo para liberar o frontend
app.use(require('cors')({
  origin: 'https://catalofacil.catalofacil.com.br',
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // limite de 100 requests por IP
  message: 'Muitas requisições deste IP, tente novamente mais tarde.'
});
app.use(limiter);

// CORS dinâmico para multi-tenant (subdomínios e domínios personalizados)
const corsOptions: CorsOptionsDelegate<CorsRequest> = async (req, callback) => {
  const origin = req.headers['origin'] as string | undefined;
  // Log para debug de CORS
  if (origin) console.log('CORS Origin:', origin);
  // Permite requisições sem origin (ex: ferramentas internas, curl, etc)
  if (!origin) return callback(null, { origin: true, credentials: true, optionsSuccessStatus: 200 });

  // Permite todos os subdomínios e o domínio principal catalofacil.catalofacil.com.br
  if (
    origin.endsWith('.catalofacil.com.br') ||
    origin === 'https://catalofacil.catalofacil.com.br'
  ) {
    return callback(null, { origin: 'https://catalofacil.catalofacil.com.br', credentials: true, optionsSuccessStatus: 200 });
  }

  // Permite o domínio principal
  if (origin === 'https://catalofacil.com.br') return callback(null, { origin: 'https://catalofacil.com.br', credentials: true, optionsSuccessStatus: 200 });

  // Permite o frontend do Vercel (domínio principal e preview deployments)
  if (origin === 'https://catalofacil-frontend.vercel.app') return callback(null, { origin: 'https://catalofacil-frontend.vercel.app', credentials: true, optionsSuccessStatus: 200 });
  
  // Permite preview deployments do Vercel
  if (origin && origin.includes('catalofacil-frontend') && origin.includes('vercel.app')) {
    console.log('Permitindo acesso ao preview deployment do Vercel:', origin);
    return callback(null, { origin: origin, credentials: true, optionsSuccessStatus: 200 });
  }
  
  // Permite qualquer preview deployment do Vercel relacionado ao projeto
  if (origin && origin.includes('-alex-brittos-projects.vercel.app')) {
    console.log('Permitindo acesso ao preview deployment personalizado:', origin);
    return callback(null, { origin: origin, credentials: true, optionsSuccessStatus: 200 });
  }

  try {
    // Verifica se o domínio está cadastrado como slug na tabela Domain
    const slug = origin.replace('https://', '').replace('.catalofacil.com.br', '');
    const domain = await prisma.domain.findFirst({ where: { slug } });
    if (domain) return callback(null, { origin: true, credentials: true, optionsSuccessStatus: 200 });
  } catch (e) {
    console.error('Erro ao consultar domínio para CORS:', e);
  }
  // Bloqueia qualquer outro domínio
  return callback(new Error('Not allowed by CORS'), { origin: false });
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
app.use('/categorias', categoriesRouter); // Alias em português
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
app.use('/despesas', expensesRouter); // Alias em português
app.use('/domainOwners', domainOwnersRouter);
app.use('/identities', identitiesRouter);
app.use('/orders', ordersRouter);
app.use('/pedidos', ordersRouter); // Alias em português
app.use('/sales', salesRouter);
app.use('/vendas', salesRouter); // Alias em português
app.use('/cashFlow', cashFlowRouter);
app.use('/fluxo-caixa', cashFlowRouter); // Alias em português
app.use('/creditAccounts', creditAccountsRouter);
app.use('/credit-accounts', creditAccountsRouter); // Alias com hífen
app.use('/creditTransactions', creditTransactionsRouter);
app.use('/customers', customersRouter);

// Middleware para rotas não encontradas
app.use('*', (req: Request, res: Response) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

const PORT = process.env.PORT || 3000;

// Graceful shutdown
process.on('SIGTERM', async () => {
  console.log('SIGTERM recebido, fechando servidor...');
  try {
    await prisma.$disconnect();
    console.log('Prisma desconectado com sucesso');
  } catch (error) {
    console.error('Erro ao desconectar Prisma:', error);
  }
  process.exit(0);
});

process.on('SIGINT', async () => {
  console.log('SIGINT recebido, fechando servidor...');
  try {
    await prisma.$disconnect();
    console.log('Prisma desconectado com sucesso');
  } catch (error) {
    console.error('Erro ao desconectar Prisma:', error);
  }
  process.exit(0);
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`📊 Ambiente: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🌐 URL: ${process.env.RAILWAY_PUBLIC_DOMAIN || 'localhost'}`);
});
