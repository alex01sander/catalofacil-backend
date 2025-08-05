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
    
    // 5. Ler o conteúdo do arquivo e ajustar os imports
    let content = fs.readFileSync(srcIndexPath, 'utf8');
    
    // 6. Ajustar imports relativos para funcionar em dist/
    content = content.replace(/require\(['"]\.\/lib\//g, "require('./src/lib/");
    content = content.replace(/require\(['"]\.\/middleware\//g, "require('./src/middleware/");
    content = content.replace(/require\(['"]\.\/routes\//g, "require('./src/routes/");
    content = content.replace(/require\(['"]\.\/zod\//g, "require('./src/zod/");
    
    // 7. Corrigir aspas quebradas (caso o regex quebre)
    content = content.replace(/require\('\.\/src\/lib\/[^"']*"\)/g, (match) => {
      return match.replace(/"\)$/, "')");
    });
    content = content.replace(/require\('\.\/src\/middleware\/[^"']*"\)/g, (match) => {
      return match.replace(/"\)$/, "')");
    });
    content = content.replace(/require\('\.\/src\/routes\/[^"']*"\)/g, (match) => {
      return match.replace(/"\)$/, "')");
    });
    content = content.replace(/require\('\.\/src\/zod\/[^"']*"\)/g, (match) => {
      return match.replace(/"\)$/, "')");
    });
    
    // 8. Escrever o arquivo ajustado
    fs.writeFileSync(destIndexPath, content);
    console.log('✅ Arquivo index.js copiado e ajustado para dist/');
    
    // 9. Verificar se foi criado
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