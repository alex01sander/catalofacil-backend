// @ts-ignore
/**
 * @typedef {import('@supabase/supabase-js').SupabaseClient} SupabaseClient
 */
const { createClient } = require('@supabase/supabase-js');

// Verificar se as variáveis do Supabase estão configuradas
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

let supabase = null;

if (supabaseUrl && supabaseServiceKey) {
  console.log('✅ Supabase configurado corretamente');
  supabase = createClient(supabaseUrl, supabaseServiceKey);
} else {
  console.warn('⚠️  Supabase não configurado - algumas funcionalidades podem não funcionar');
  console.warn('   Adicione SUPABASE_URL e SUPABASE_SERVICE_KEY ao arquivo .env');
  
  // Criar um mock para evitar erros
  supabase = {
    auth: { 
      signInWithPassword: () => Promise.reject(new Error('Supabase não configurado')),
      getUser: () => Promise.reject(new Error('Supabase não configurado'))
    },
    storage: {
      from: () => ({
        upload: () => Promise.reject(new Error('Supabase não configurado')),
        remove: () => Promise.reject(new Error('Supabase não configurado'))
      })
    }
  };
}

module.exports = supabase; 