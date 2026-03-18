/* ============================================
   FRONET - CATEGORÍA CONFIG + PRODUCTOS BASE
   ============================================
   Los productos se gestionan desde el admin
   y se almacenan en localStorage.
   Este archivo solo define las categorías y
   un array vacío como fallback.
   ============================================ */

window.CATEGORIA_CONFIG = {
  impresoras: {
    nombre: "Impresoras & Escanners",
    subcategorias: [
      { valor: "all", etiqueta: "Todas" },
      { valor: "laser", etiqueta: "Láser" },
      { valor: "tinta", etiqueta: "Tinta" },
      { valor: "continuo", etiqueta: "Sistema Continuo" },
      { valor: "scanner", etiqueta: "Escanners" },
      { valor: "multifuncional", etiqueta: "Multifuncionales" }
    ]
  },
  computadoras: {
    nombre: "Computadoras & Tecnología",
    subcategorias: [
      { valor: "all", etiqueta: "Todas" },
      { valor: "laptop", etiqueta: "Laptops" },
      { valor: "desktop", etiqueta: "Computadoras" },
      { valor: "monitor", etiqueta: "Monitores" },
      { valor: "servidor", etiqueta: "Servidores" }
    ]
  },
  mobiliario: {
    nombre: "Mobiliario de Oficina",
    subcategorias: [
      { valor: "all", etiqueta: "Todas" },
      { valor: "silla", etiqueta: "Sillas" },
      { valor: "escritorio", etiqueta: "Escritorios" }
    ]
  },
  consumibles: {
    nombre: "Consumibles & Periféricos",
    subcategorias: [
      { valor: "all", etiqueta: "Todas" },
      { valor: "toner", etiqueta: "Tóner e Inks" },
      { valor: "periferico", etiqueta: "Periféricos" },
      { valor: "audicular", etiqueta: "Audiculares" },
      { valor: "accesorio", etiqueta: "Accesorios" }
    ]
  }
};

/* ============================================
   PRODUCTOS — Array vacío como fallback.
   Los productos reales se cargan desde
   localStorage (gestionados vía admin).
   ============================================ */
window.PRODUCTOS = [];
