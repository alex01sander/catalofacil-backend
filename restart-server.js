const { spawn } = require('child_process');

console.log('🔄 Reiniciando servidor...');

// Parar qualquer processo na porta 3000
const killProcess = spawn('npx', ['kill-port', '3000'], { 
  stdio: 'inherit',
  shell: true 
});

killProcess.on('close', (code) => {
  console.log('✅ Processos na porta 3000 finalizados');
  
  // Aguardar um pouco e iniciar o servidor
  setTimeout(() => {
    console.log('🚀 Iniciando servidor...');
    
    const server = spawn('npm', ['run', 'dev'], {
      stdio: 'inherit',
      shell: true,
      env: {
        ...process.env,
        DATABASE_URL: "postgresql://catalofacil:4WdNU3pa3vCOzshZO9dKmAgNyj4gYLte@dpg-d1srh66mcj7s73arkbtg-a.virginia-postgres.render.com/catalofacil_postgres?connection_limit=2",
        JWT_SECRET: "sua_chave_secreta_muito_segura_aqui_123456789",
        NODE_ENV: "development",
        PORT: "3000"
      }
    });
    
    server.on('error', (error) => {
      console.error('❌ Erro ao iniciar servidor:', error);
    });
    
    console.log('✅ Servidor iniciado com PID:', server.pid);
  }, 2000);
}); 