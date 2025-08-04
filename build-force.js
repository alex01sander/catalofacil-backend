const { spawn, exec } = require('child_process');
const fs = require('fs');
const path = require('path');

async function buildForce() {
  console.log('🔧 Iniciando build forçado...\n');
  
  try {
    // 1. Parar TODOS os processos Node.js
    console.log('1️⃣ Parando TODOS os processos Node.js...');
    await new Promise((resolve) => {
      exec('taskkill //f //im node.exe', (error) => {
        console.log('✅ Comando de parada executado');
        resolve();
      });
    });
    
    // 2. Aguardar mais tempo
    console.log('2️⃣ Aguardando processos finalizarem...');
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    // 3. Tentar remover node_modules completamente
    console.log('3️⃣ Removendo node_modules...');
    const nodeModulesPath = path.join(__dirname, 'node_modules');
    if (fs.existsSync(nodeModulesPath)) {
      try {
        fs.rmSync(nodeModulesPath, { recursive: true, force: true });
        console.log('✅ node_modules removido');
      } catch (error) {
        console.log('⚠️  Não foi possível remover node_modules completamente');
      }
    }
    
    // 4. Reinstalar dependências
    console.log('4️⃣ Reinstalando dependências...');
    await new Promise((resolve, reject) => {
      const npm = spawn('npm', ['install'], {
        stdio: 'inherit',
        shell: true
      });
      
      npm.on('close', (code) => {
        if (code === 0) {
          console.log('✅ Dependências reinstaladas');
          resolve();
        } else {
          reject(new Error(`npm install failed with code ${code}`));
        }
      });
    });
    
    // 5. Regenerar Prisma Client
    console.log('5️⃣ Regenerando Prisma Client...');
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
    
    // 6. Executar TypeScript build
    console.log('6️⃣ Compilando TypeScript...');
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
    
    // 7. Copiar arquivos não-TypeScript
    console.log('7️⃣ Copiando arquivos não-TypeScript...');
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
    
    console.log('\n🎉 Build forçado concluído com sucesso!');
    console.log('✅ Todos os arquivos foram compilados e copiados');
    console.log('✅ Prisma Client atualizado');
    console.log('✅ Sistema pronto para execução');
    
  } catch (error) {
    console.error('\n❌ Erro durante o build forçado:', error.message);
    console.log('\n💡 Dica: Tente reiniciar o computador e executar novamente');
    process.exit(1);
  }
}

buildForce(); 