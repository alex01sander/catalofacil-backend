const axios = require('axios');

async function testStoreSettings() {
  const baseUrl = 'http://localhost:3000';
  
  // Dados de teste baseados no payload que vi nas imagens
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
  
  console.log('🧪 Testando rota storeSettings...\n');
  
  try {
    // 1. Testar GET storeSettings
    console.log('1️⃣ Testando GET /api/storeSettings');
    const getResponse = await axios.get(`${baseUrl}/api/storeSettings?user_id=${testData.user_id}`);
    console.log('✅ GET Status:', getResponse.status);
    console.log('📊 Dados:', getResponse.data);
    console.log('');
    
    // 2. Testar POST storeSettings
    console.log('2️⃣ Testando POST /api/storeSettings');
    const postResponse = await axios.post(`${baseUrl}/api/storeSettings`, testData);
    console.log('✅ POST Status:', postResponse.status);
    console.log('📊 Resposta:', postResponse.data);
    
  } catch (error) {
    console.log('❌ Status:', error.response?.status || 'Erro de conexão');
    console.log('❌ Erro:', error.response?.data || error.message);
    
    if (error.response?.data?.details) {
      console.log('🔍 Detalhes do erro:', JSON.stringify(error.response.data.details, null, 2));
    }
  }
}

testStoreSettings(); 