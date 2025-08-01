import { testConfig } from './config';

// Configurações globais para testes
process.env.NODE_ENV = testConfig.NODE_ENV;
process.env.JWT_SECRET = testConfig.JWT_SECRET;
process.env.PORT = testConfig.PORT;

// Definir DATABASE_URL diretamente para evitar problemas com quebra de linha
process.env.DATABASE_URL = testConfig.DATABASE_URL;

// Mock do console para reduzir ruído nos testes
const originalConsoleLog = console.log;
const originalConsoleError = console.error;
const originalConsoleWarn = console.warn;

// Configuração global do Jest
global.console = {
  ...console,
  log: jest.fn(),
  error: jest.fn(),
  warn: jest.fn(),
  info: jest.fn(),
  debug: jest.fn(),
}; 