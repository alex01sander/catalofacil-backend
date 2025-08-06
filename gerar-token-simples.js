const jwt = require('jsonwebtoken');
const fs = require('fs');

// Configurações do novo admin
const FULANOSANDER_USER_ID = '12345678-1234-1234-1234-123456789abc';
const FULANOSANDER_EMAIL = 'fulanosander@gmail.com';

// Gerar token JWT
const jwtSecret = process.env.JWT_SECRET || 'chave_secreta_producao_123456789';
const payload = {
    userId: FULANOSANDER_USER_ID,
    email: FULANOSANDER_EMAIL,
    role: 'admin',
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60) // 24 horas
};

const token = jwt.sign(payload, jwtSecret);

console.log('🎯 TOKEN JWT GERADO COM SUCESSO!');
console.log('================================');
console.log('');
console.log('📧 Email: fulanosander@gmail.com');
console.log('🔑 Senha: 123456');
console.log('🆔 User ID: 12345678-1234-1234-1234-123456789abc');
console.log('');
console.log('🔐 TOKEN JWT:');
console.log(token);
console.log('');
console.log('🌐 Domínio: demo.catalofacil.com.br');
console.log('');
console.log('✅ PRÓXIMOS PASSOS:');
console.log('1. Execute o SQL: criar-admin-simples.sql no seu banco');
console.log('2. Use este token no frontend para fazer login');
console.log('3. Configure o DNS do domínio demo.catalofacil.com.br');
console.log('');

// Atualizar arquivo de teste
const testFileContent = `const axios = require('axios');

// Configurações do novo admin
const FULANOSANDER_USER_ID = '${FULANOSANDER_USER_ID}';
const FULANOSANDER_EMAIL = '${FULANOSANDER_EMAIL}';
const FULANOSANDER_TOKEN = '${token}';

// URL base da API
const API_BASE_URL = 'http://localhost:3000'; // Ajuste conforme necessário

// Função para gerar token de teste
function generateTestToken() {
    return FULANOSANDER_TOKEN;
}

// Testar rotas admin
async function testAdminRoutes() {
    const token = generateTestToken();
    
    console.log('🔐 Testando login com novo admin...');
    console.log('📧 Email:', FULANOSANDER_EMAIL);
    console.log('🆔 User ID:', FULANOSANDER_USER_ID);
    console.log('');

    try {
        // Testar rota de produtos
        console.log('📦 Testando rota de produtos...');
        const productsResponse = await axios.get(\`\${API_BASE_URL}/admin/products\`, {
            headers: { Authorization: \`Bearer \${token}\` }
        });
        console.log('✅ Produtos:', productsResponse.data.length, 'produtos encontrados');
        
        // Testar rota de categorias
        console.log('📂 Testando rota de categorias...');
        const categoriesResponse = await axios.get(\`\${API_BASE_URL}/admin/categories\`, {
            headers: { Authorization: \`Bearer \${token}\` }
        });
        console.log('✅ Categorias:', categoriesResponse.data.length, 'categorias encontradas');
        
        // Testar rota de vendas
        console.log('💰 Testando rota de vendas...');
        const salesResponse = await axios.get(\`\${API_BASE_URL}/admin/sales\`, {
            headers: { Authorization: \`Bearer \${token}\` }
        });
        console.log('✅ Vendas:', salesResponse.data.length, 'vendas encontradas');
        
        console.log('');
        console.log('🎯 TODOS OS TESTES PASSARAM! O novo admin está funcionando!');
        
    } catch (error) {
        console.error('❌ Erro nos testes:', error.response?.data || error.message);
    }
}

// Executar testes
testAdminRoutes();
`;

fs.writeFileSync('test-alexsander-admin.js', testFileContent);
console.log('📝 Arquivo test-alexsander-admin.js atualizado com o novo token!'); 