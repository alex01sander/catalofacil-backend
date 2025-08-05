const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Iniciando build de produção...');

try {
  // 1. Compilar TypeScript
  console.log('📝 Compilando TypeScript...');
  execSync('npx tsc', { stdio: 'inherit' });
  
  // 2. Gerar Prisma Client
  console.log('🗄️ Gerando Prisma Client...');
  execSync('npx prisma generate', { stdio: 'inherit' });
  
  // 3. Copiar arquivos não-TypeScript
  console.log('📋 Copiando arquivos não-TypeScript...');
  execSync('npx cpx "src/lib/supabase.js" dist/src/lib/', { stdio: 'inherit' });
  
  // 4. Verificar se dist/src/index.js existe
  const srcIndexPath = path.join(__dirname, 'dist', 'src', 'index.js');
  const destIndexPath = path.join(__dirname, 'dist', 'index.js');
  
  if (fs.existsSync(srcIndexPath)) {
    console.log('✅ dist/src/index.js encontrado');
    
    // 5. Copiar para dist/index.js
    fs.copyFileSync(srcIndexPath, destIndexPath);
    console.log('✅ Arquivo index.js copiado para dist/');
    
    // 6. Verificar se foi criado
    if (fs.existsSync(destIndexPath)) {
      console.log('✅ dist/index.js criado com sucesso!');
      console.log('📊 Tamanho do arquivo:', fs.statSync(destIndexPath).size, 'bytes');
    } else {
      throw new Error('❌ Falha ao criar dist/index.js');
    }
  } else {
    console.log('❌ dist/src/index.js não encontrado');
    console.log('📁 Conteúdo da pasta dist:');
    
    if (fs.existsSync('dist')) {
      const distContents = fs.readdirSync('dist', { recursive: true });
      console.log(distContents);
    } else {
      console.log('❌ Pasta dist não existe');
    }
    
    throw new Error('Arquivo dist/src/index.js não encontrado após compilação');
  }
  
  console.log('🎉 Build de produção concluído com sucesso!');
  
} catch (error) {
  console.error('❌ Erro durante o build:', error.message);
  process.exit(1);
} 