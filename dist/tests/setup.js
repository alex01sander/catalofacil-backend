"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
// Configurações globais para testes
process.env.NODE_ENV = config_1.testConfig.NODE_ENV;
process.env.JWT_SECRET = config_1.testConfig.JWT_SECRET;
process.env.PORT = config_1.testConfig.PORT;
// Definir DATABASE_URL diretamente para evitar problemas com quebra de linha
process.env.DATABASE_URL = config_1.testConfig.DATABASE_URL;
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
