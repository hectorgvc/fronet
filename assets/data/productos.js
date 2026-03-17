/* ============================================
   FRONET - CATEGORÍA CONFIG + PRODUCTOS ESTÁTICOS
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

window.PRODUCTOS = [
  {
    id: "IMP-001",
    nombre: "Impresora HP LaserJet Pro M404n",
    categoria: "impresoras", 
    subcategoria: "laser",
    marca: "HP",
    precio: 18500,
    moneda: "RD$",
    imagen: "assets/img/productos/placeholder-impresora.jpg",
    descripcion: "Impresora láser monocromática de alta velocidad.",
    disponible: true
  }
  // + más productos demo...
];

