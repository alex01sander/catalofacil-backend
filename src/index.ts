// src/index.ts

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { PrismaClient } from '@prisma/client';

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
    ? [process.env.FRONTEND_URL || 'https://seu-frontend.railway.app'] 
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
