"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testConfig = void 0;
// Configuração específica para testes
exports.testConfig = {
    DATABASE_URL: 'postgresql://catalofacil:4WdNU3pa3vCOzshZO9dKmAgNyj4gYLte@dpg-d1srh66mcj7s73arkbtg-a.virginia-postgres.render.com/catalofacil_postgres?connection_limit=2',
    JWT_SECRET: 'test-secret-key',
    NODE_ENV: 'test',
    PORT: '3001'
};
