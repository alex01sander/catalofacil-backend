const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function checkExistingStoreSettings() {
  try {
    console.log('🔍 Verificando configurações de loja existentes...\n');
    
    const user_id = "b669b536-7bef-4181-b32b-8970ee6d8f49";
    
    // Buscar configuração existente
    const existingSettings = await prisma.store_settings.findUnique({
      where: { user_id }
    });
    
    if (existingSettings) {
      console.log('✅ Configuração encontrada:');
      console.log(JSON.stringify(existingSettings, null, 2));
      console.log('');
      console.log('💡 O frontend deve usar PUT para atualizar, não POST para criar!');
      console.log('');
      console.log('🔧 URL correta para atualização:');
      console.log(`PUT /api/storeSettings/${existingSettings.id}`);
      console.log('');
      console.log('📤 Dados para atualização:');
      const updateData = {
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
      console.log(JSON.stringify(updateData, null, 2));
      
    } else {
      console.log('❌ Nenhuma configuração encontrada para este usuário');
    }
    
  } catch (error) {
    console.error('❌ Erro:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkExistingStoreSettings(); 