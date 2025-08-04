// src/index.ts

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import path from 'path';
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

// Importar middlewares de otimização
import { basicRateLimit, apiSlowDown, authRateLimit } from './middleware/rateLimiter';
import { getCacheStats } from './lib/cache';

import type { CorsOptionsDelegate, CorsRequest } from 'cors';

const app = express();

// Exportar app para testes
export { app };

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

// Rate limiting otimizado
app.use(basicRateLimit);
app.use(apiSlowDown);

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
app.use((req: Request, res: Response, next: NextFunction) => {
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

app.use(cors(corsOptions));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Servir arquivos estáticos
app.use('/assets', express.static(path.join(__dirname, '../dist/assets')));
app.use('/assets', express.static(path.join(__dirname, '../public/assets')));
app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.static(path.join(__dirname, '../public')));

// Middleware de logging seguro
app.use((req: Request, res: Response, next: NextFunction) => {
  // Nunca logar dados sensíveis como req.body ou req.headers!
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path} - Origin: ${req.headers.origin || 'none'}`);
  next();
});

// Middleware para capturar erros não tratados
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
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
app.get('/', (req: Request, res: Response) => {
  res.json({ 
    message: 'API rodando com sucesso!',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString()
  });
});

// Rota de health check otimizada
app.get('/health', (req: Request, res: Response) => {
  res.json({ 
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    cache: getCacheStats()
  });
});

// Endpoint para estatísticas do cache
app.get('/cache-stats', basicRateLimit, (req: Request, res: Response) => {
  const stats = getCacheStats();
  res.json({
    ...stats,
    timestamp: new Date().toISOString()
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

app.use('/auth', authRateLimit, authRouter);
app.use('/products', productsRouter);
app.use('/site', siteRouter);
app.use('/api/site', siteRouter); // Alias para compatibilidade com frontend
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
app.use('/credit-transactions', creditTransactionsRouter); // Alias com hífen
app.use('/customers', customersRouter);

// Middleware para rotas não encontradas
app.use('*', (req: Request, res: Response) => {
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
    const indexPath = path.join(__dirname, '../dist/index.html');
    const publicIndexPath = path.join(__dirname, '../public/index.html');
    
    if (require('fs').existsSync(indexPath)) {
      return res.sendFile(indexPath);
    } else if (require('fs').existsSync(publicIndexPath)) {
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

// Só iniciar o servidor se não estiver em modo de teste
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
    console.log(`📊 Ambiente: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🌐 URL: ${process.env.RAILWAY_PUBLIC_DOMAIN || 'localhost'}`);
  });
}
