const { spawn, exec } = require('child_process');
const fs = require('fs');
const path = require('path');

async function buildSafe() {
  console.log('🔧 Iniciando build seguro...\n');
  
  try {
    // 1. Parar todos os processos Node.js
    console.log('1️⃣ Parando processos Node.js...');
    await new Promise((resolve, reject) => {
      exec('taskkill //f //im node.exe', (error) => {
        if (error && error.code !== 1) {
          console.log('⚠️  Nenhum processo Node.js encontrado ou já parado');
        } else {
          console.log('✅ Processos Node.js parados');
        }
        resolve();
      });
    });
    
    // 2. Aguardar um pouco para garantir que os processos foram finalizados
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // 3. Limpar arquivos temporários do Prisma
    console.log('2️⃣ Limpando arquivos temporários...');
    const prismaPath = path.join(__dirname, 'node_modules', '.prisma');
    if (fs.existsSync(prismaPath)) {
      fs.rmSync(prismaPath, { recursive: true, force: true });
      console.log('✅ Arquivos temporários do Prisma removidos');
    }
    
    // 4. Regenerar Prisma Client
    console.log('3️⃣ Regenerando Prisma Client...');
    await new Promise((resolve, reject) => {
      const prisma = spawn('npx', ['prisma', 'generate'], {
        stdio: 'inherit',
        shell: true
      });
      
      prisma.on('close', (code) => {
        if (code === 0) {
          console.log('✅ Prisma Client regenerado');
          resolve();
        } else {
          reject(new Error(`Prisma generate failed with code ${code}`));
        }
      });
    });
    
    // 5. Executar TypeScript build
    console.log('4️⃣ Compilando TypeScript...');
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
    
    // 6. Copiar arquivos não-TypeScript
    console.log('5️⃣ Copiando arquivos não-TypeScript...');
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
    
    console.log('\n🎉 Build concluído com sucesso!');
    console.log('✅ Todos os arquivos foram compilados e copiados');
    console.log('✅ Prisma Client atualizado');
    console.log('✅ Sistema pronto para execução');
    
  } catch (error) {
    console.error('\n❌ Erro durante o build:', error.message);
    process.exit(1);
  }
}

buildSafe(); 