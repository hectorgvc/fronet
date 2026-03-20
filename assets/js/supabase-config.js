/* ============================================
   FRONET TECNOLOGÍA SRL — supabase-config.js
   Configuración de la conexión a Supabase
   ============================================ */

(function () {
  'use strict';

  const SUPABASE_URL = 'https://ptgopxqbhqsucornuuyl.supabase.co';
  const SUPABASE_KEY = 'sb_publishable_AD9CJkelzcxbfRRhMthZ4Q_dzRWQOsa';

  if (typeof supabase === 'undefined') {
    console.error('Supabase library not loaded. Please include the Supabase CDN script in your HTML.');
    return;
  }

  // Inicializar el cliente globalmente
  window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

  console.log('[Supabase] Conexión inicializada con éxito.');
})();
