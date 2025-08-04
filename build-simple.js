const { spawn } = require('child_process');

async function buildSimple() {
  console.log('🔧 Iniciando build simples...\n');
  
  try {
    // 1. Apenas compilar TypeScript (sem regenerar Prisma)
    console.log('1️⃣ Compilando TypeScript...');
    await new Promise((resolve, reject) => {
      const tsc = spawn('npx', ['tsc'], {
        stdio: 'inherit',
        shell: true
      });
      
      tsc.on('close', (code) => {
        if (code === 0) {
          console.log('✅ TypeScript compilado');
          resolve();
        } else {
          reject(new Error(`TypeScript compilation failed with code ${code}`));
        }
      });
    });
    
    // 2. Copiar arquivos não-TypeScript
    console.log('2️⃣ Copiando arquivos não-TypeScript...');
    await new Promise((resolve, reject) => {
      const copy = spawn('npm', ['run', 'copy-non-ts'], {
        stdio: 'inherit',
        shell: true
      });
      
      copy.on('close', (code) => {
        if (code === 0) {
          console.log('✅ Arquivos copiados');
          resolve();
        } else {
          reject(new Error(`Copy failed with code ${code}`));
        }
      });
    });
    
    console.log('\n🎉 Build simples concluído!');
    console.log('✅ TypeScript compilado');
    console.log('✅ Arquivos copiados');
    console.log('⚠️  Prisma Client não foi regenerado (use npm run build:force se necessário)');
    console.log('✅ Sistema pronto para execução');
    
  } catch (error) {
    console.error('\n❌ Erro durante o build simples:', error.message);
    process.exit(1);
  }
}

buildSimple(); 