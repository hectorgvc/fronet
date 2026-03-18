/* ============================================
   FRONET — PRODUCTOS GLOBAL API (Compartido Admin/Tienda)
   Maneja static + locales + ocultos desde localStorage
   ============================================ */

// Keys compartidas Admin/Tienda
const PRODUCTOS_KEY = 'fronet_admin_productos';
const PRODUCTOS_OCULTOS_KEY = 'fronet_admin_productos_ocultos';

// Cargar/ocultos globales
function obtenerProductosLocales() {
  try {
    const data = localStorage.getItem(PRODUCTOS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

function obtenerProductosOcultos() {
  try {
    const data = localStorage.getItem(PRODUCTOS_OCULTOS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

// API principal: Fusiona static + locales, respeta ocultos
window.obtenerTodosProductos = function() {
  const estaticos = (typeof PRODUCTOS !== 'undefined') ? PRODUCTOS.slice() : [];
  const locales = obtenerProductosLocales();
  const ocultos = obtenerProductosOcultos();

  // Mapa locales (prioridad)
  const localesMap = {};
  locales.forEach(p => { localesMap[p.id] = p; });

  const resultado = [];
  const idsUsados = {};

  // Locales primero (si no ocultos)
  locales.forEach(p => {
    if (ocultos.indexOf(p.id) === -1) {
      p._source = 'local';
      resultado.push(p);
      idsUsados[p.id] = true;
    }
  });

  // Estaticos (si no sobrescritos/no ocultos)
  estaticos.forEach(p => {
    if (!idsUsados[p.id] && ocultos.indexOf(p.id) === -1) {
      p._source = 'static';
      resultado.push(p);
    }
  });

  return resultado;
};

// Export para admin-tienda.js
window.PRODUCTOS_SHARED_API = {
  obtenerProductosLocales,
  obtenerProductosOcultos,
  obtenerTodosProductos
};
