const axios = require('axios');

async function testStoreSettingsWithToken() {
  const baseUrl = 'http://localhost:3000';
  
  // Token válido e dados corretos
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiNjY5YjUzNi03YmVmLTQxODEtYjMyYi04OTcwZWU2ZDhmNDkiLCJlbWFpbCI6ImFkbWluQGNhdGFsb2ZhY2lsLmNvbS5iciIsImlhdCI6MTc1NDMxODgxMiwiZXhwIjoxNzU0NDA1MjEyfQ.87IRX-xuMVArFg6z0MnnPeGvXgdMDl09uFJea3Z4_YY';
  
  const testData = {
    user_id: "b669b536-7bef-4181-b32b-8970ee6d8f49", // ID correto do usuário
    store_name: "Britto",
    store_description: "Venho conferiri o melhor preço",
    store_subtitle: "Produtos Incríveis",
    instagram_url: "https://instagram.com/_alogin",
    whatsapp_number: "5551992401184",
    mobile_logo: "https://fjoykgkdploqlizfhovm.supabase.co/storage/v1/object/public/logos/logo.png",
    desktop_banner: "https://fjoykgkdploqlizfhovm.supabase.co/storage/v1/object/public/banners/banner.png",
    mobile_banner_image: "https://fjoykgkdploqlizfhovm.supabase.co/storage/v1/object/public/banners/mobile-banner.png",
    mobile_banner_color: "verde"
  };
  
  console.log('🧪 Testando storeSettings com token válido...\n');
  console.log('📤 Dados enviados:', JSON.stringify(testData, null, 2));
  console.log('');
  
  try {
    const response = await axios.post(`${baseUrl}/api/storeSettings`, testData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    
    console.log('✅ Status:', response.status);
    console.log('📊 Resposta:', response.data);
    
  } catch (error) {
    console.log('❌ Status:', error.response?.status || 'Erro de conexão');
    console.log('❌ Erro:', error.response?.data || error.message);
    
    if (error.response?.data?.details) {
      console.log('🔍 Detalhes do erro:');
      console.log(JSON.stringify(error.response.data.details, null, 2));
      
      if (Array.isArray(error.response.data.details)) {
        console.log('\n📋 Problemas de validação:');
        error.response.data.details.forEach((issue, index) => {
          console.log(`  ${index + 1}. Campo: ${issue.path?.join('.') || 'desconhecido'}`);
          console.log(`     Erro: ${issue.message}`);
          console.log(`     Código: ${issue.code || 'N/A'}`);
          console.log('');
        });
      }
    }
  }
}

testStoreSettingsWithToken(); 