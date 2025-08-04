const axios = require('axios');

async function testStoreSettingsPost() {
  const baseUrl = 'http://localhost:3000';
  
  // Dados exatos que o frontend está enviando (baseado nas imagens)
  const testData = {
    user_id: "ff6b78b8-b813-4ef8-bf44-4de74916b419",
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
  
  console.log('🧪 Testando POST storeSettings...\n');
  console.log('📤 Dados enviados:', JSON.stringify(testData, null, 2));
  console.log('');
  
  try {
    const response = await axios.post(`${baseUrl}/api/storeSettings`, testData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    console.log('✅ Status:', response.status);
    console.log('📊 Resposta:', response.data);
    
  } catch (error) {
    console.log('❌ Status:', error.response?.status || 'Erro de conexão');
    console.log('❌ Erro:', error.response?.data || error.message);
    
    if (error.response?.data?.details) {
      console.log('🔍 Detalhes do erro:', JSON.stringify(error.response.data.details, null, 2));
    }
    
    if (error.response?.data?.details?.issues) {
      console.log('🔍 Problemas de validação:');
      error.response.data.details.issues.forEach((issue, index) => {
        console.log(`  ${index + 1}. Campo: ${issue.path.join('.')} - ${issue.message}`);
      });
    }
  }
}

testStoreSettingsPost(); 