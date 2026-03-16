/* ============================================
   FRONET TECNOLOGÍA SRL — productos.js
   Base de datos de productos (fase 1 — estática)
   ============================================ */

// TODO FASE 2: Reemplazar PRODUCTOS array con fetch() a la API de WooCommerce
// TODO FASE 2: Sistema de inventario en tiempo real

const PRODUCTOS = [

  /* ─── IMPRESORAS & ESCANNERS ─── */
  {
    id: "IMP-001",
    nombre: "Impresora HP LaserJet Pro M404n",
    categoria: "impresoras",
    subcategoria: "laser",
    marca: "HP",
    precio: 18500,
    moneda: "RD$",
    imagen: "assets/img/productos/placeholder-impresora.jpg",
    imagenes: ["assets/img/productos/placeholder-impresora.jpg"],
    descripcion: "Impresora láser monocromática de alta velocidad.",
    specs: ["38 ppm", "1200 dpi", "USB + Ethernet", "350 hojas"],
    disponible: true,
    destacado: true,
    oferta: false,
    precio_original: null
  },
  {
    id: "IMP-002",
    nombre: "Impresora Epson EcoTank L3250",
    categoria: "impresoras",
    subcategoria: "continuo",
    marca: "Epson",
    precio: 12800,
    moneda: "RD$",
    imagen: "assets/img/productos/placeholder-impresora.jpg",
    imagenes: ["assets/img/productos/placeholder-impresora.jpg"],
    descripcion: "Sistema de tinta continua, imprime hasta 4,500 páginas en negro.",
    specs: ["WiFi incluido", "4500 pág/negro", "Sin cartuchos", "USB"],
    disponible: true,
    destacado: true,
    oferta: true,
    precio_original: 14500
  },
  {
    id: "IMP-003",
    nombre: "Impresora Canon PIXMA G3160",
    categoria: "impresoras",
    subcategoria: "tinta",
    marca: "Canon",
    precio: 10200,
    moneda: "RD$",
    imagen: "assets/img/productos/placeholder-impresora.jpg",
    imagenes: ["assets/img/productos/placeholder-impresora.jpg"],
    descripcion: "Impresora multifuncional con sistema de tinta integrado.",
    specs: ["Multifuncional", "WiFi", "USB", "Color y negro"],
    disponible: true,
    destacado: false,
    oferta: false,
    precio_original: null
  },
  {
    id: "IMP-004",
    nombre: "Escáner HP ScanJet Pro 3600 f1",
    categoria: "impresoras",
    subcategoria: "scanner",
    marca: "HP",
    precio: 22000,
    moneda: "RD$",
    imagen: "assets/img/productos/placeholder-escanner.jpg",
    imagenes: ["assets/img/productos/placeholder-escanner.jpg"],
    descripcion: "Escáner plano con alimentador automático de documentos.",
    specs: ["ADF 50 hojas", "600 dpi", "USB + Ethernet", "Windows/Mac"],
    disponible: true,
    destacado: false,
    oferta: false,
    precio_original: null
  },
  {
    id: "IMP-005",
    nombre: "Impresora Xerox VersaLink C405",
    categoria: "impresoras",
    subcategoria: "laser",
    marca: "Xerox",
    precio: 45000,
    moneda: "RD$",
    imagen: "assets/img/productos/placeholder-impresora.jpg",
    imagenes: ["assets/img/productos/placeholder-impresora.jpg"],
    descripcion: "Impresora láser color con funciones avanzadas empresariales.",
    specs: ["Láser color", "35 ppm", "WiFi + Ethernet", "Pantalla táctil"],
    disponible: true,
    destacado: false,
    oferta: false,
    precio_original: null
  },
  {
    id: "IMP-006",
    nombre: "Sharp MX-3571 Multifuncional",
    categoria: "impresoras",
    subcategoria: "multifuncional",
    marca: "Sharp",
    precio: 95000,
    moneda: "RD$",
    imagen: "assets/img/productos/placeholder-impresora.jpg",
    imagenes: ["assets/img/productos/placeholder-impresora.jpg"],
    descripcion: "Equipo multifuncional A3 para empresas de alto volumen.",
    specs: ["35 ppm color", "Copiadora + scanner", "Red + WiFi", "A3 y A4"],
    disponible: true,
    destacado: false,
    oferta: false,
    precio_original: null
  },

  /* ─── COMPUTADORAS & TECNOLOGÍA ─── */
  {
    id: "COM-001",
    nombre: "Laptop HP Pavilion 15",
    categoria: "computadoras",
    subcategoria: "laptop",
    marca: "HP",
    precio: 55000,
    moneda: "RD$",
    imagen: "assets/img/productos/placeholder-laptop.jpg",
    imagenes: ["assets/img/productos/placeholder-laptop.jpg"],
    descripcion: "Laptop para uso profesional y educativo con gran rendimiento.",
    specs: ["Intel Core i5", "8GB RAM", "256GB SSD", "Windows 11"],
    disponible: true,
    destacado: true,
    oferta: false,
    precio_original: null
  },
  {
    id: "COM-002",
    nombre: "PC Desktop HP ProDesk 400 G9",
    categoria: "computadoras",
    subcategoria: "desktop",
    marca: "HP",
    precio: 42000,
    moneda: "RD$",
    imagen: "assets/img/productos/placeholder-pc.jpg",
    imagenes: ["assets/img/productos/placeholder-pc.jpg"],
    descripcion: "Computadora de escritorio empresarial compacta y potente.",
    specs: ["Intel Core i5", "8GB RAM", "512GB SSD", "Windows 11 Pro"],
    disponible: true,
    destacado: false,
    oferta: false,
    precio_original: null
  },
  {
    id: "COM-003",
    nombre: "Monitor LG 24 pulgadas Full HD",
    categoria: "computadoras",
    subcategoria: "monitor",
    marca: "LG",
    precio: 15500,
    moneda: "RD$",
    imagen: "assets/img/productos/placeholder-monitor.jpg",
    imagenes: ["assets/img/productos/placeholder-monitor.jpg"],
    descripcion: "Monitor LED IPS de 24 pulgadas para oficina.",
    specs: ["24\" IPS", "Full HD 1080p", "HDMI + VGA", "75Hz"],
    disponible: true,
    destacado: false,
    oferta: true,
    precio_original: 18000
  },
  {
    id: "COM-004",
    nombre: "Servidor HP ProLiant MicroServer",
    categoria: "computadoras",
    subcategoria: "servidor",
    marca: "HP",
    precio: 120000,
    moneda: "RD$",
    imagen: "assets/img/productos/placeholder-servidor.jpg",
    imagenes: ["assets/img/productos/placeholder-servidor.jpg"],
    descripcion: "Servidor compacto ideal para pequeñas y medianas empresas.",
    specs: ["Intel Xeon", "16GB ECC RAM", "1TB HDD", "Windows Server"],
    disponible: true,
    destacado: false,
    oferta: false,
    precio_original: null
  },

  /* ─── MOBILIARIO DE OFICINA ─── */
  {
    id: "MOB-001",
    nombre: "Silla Ergonómica Ejecutiva",
    categoria: "mobiliario",
    subcategoria: "silla",
    marca: "Genérico",
    precio: 8500,
    moneda: "RD$",
    imagen: "assets/img/productos/placeholder-silla.jpg",
    imagenes: ["assets/img/productos/placeholder-silla.jpg"],
    descripcion: "Silla de oficina ergonómica con soporte lumbar ajustable.",
    specs: ["Soporte lumbar", "Altura ajustable", "Apoyabrazos 3D", "Base giratoria"],
    disponible: true,
    destacado: false,
    oferta: false,
    precio_original: null
  },
  {
    id: "MOB-002",
    nombre: "Escritorio de Oficina 140cm",
    categoria: "mobiliario",
    subcategoria: "escritorio",
    marca: "Genérico",
    precio: 12000,
    moneda: "RD$",
    imagen: "assets/img/productos/placeholder-escritorio.jpg",
    imagenes: ["assets/img/productos/placeholder-escritorio.jpg"],
    descripcion: "Escritorio moderno con cajón y amplio espacio de trabajo.",
    specs: ["140×60 cm", "Con cajón", "Estructura metálica", "Fácil armado"],
    disponible: true,
    destacado: false,
    oferta: false,
    precio_original: null
  },

  /* ─── CONSUMIBLES & PERIFÉRICOS ─── */
  {
    id: "CON-001",
    nombre: "Tóner HP 26A Negro",
    categoria: "consumibles",
    subcategoria: "toner",
    marca: "HP",
    precio: 3200,
    moneda: "RD$",
    imagen: "assets/img/productos/placeholder-toner.jpg",
    imagenes: ["assets/img/productos/placeholder-toner.jpg"],
    descripcion: "Cartucho de tóner original HP para LaserJet Pro.",
    specs: ["3,100 páginas", "Original HP", "LaserJet Pro M402/M426", "Negro"],
    disponible: true,
    destacado: false,
    oferta: false,
    precio_original: null
  },
  {
    id: "CON-002",
    nombre: "Tinta Epson T504 Set x4",
    categoria: "consumibles",
    subcategoria: "toner",
    marca: "Epson",
    precio: 2800,
    moneda: "RD$",
    imagen: "assets/img/productos/placeholder-tinta.jpg",
    imagenes: ["assets/img/productos/placeholder-tinta.jpg"],
    descripcion: "Set de 4 botellas de tinta original Epson para EcoTank.",
    specs: ["4 colores", "Original Epson", "EcoTank L4150/L6161", "70ml c/u"],
    disponible: true,
    destacado: false,
    oferta: false,
    precio_original: null
  },
  {
    id: "CON-003",
    nombre: "Teclado + Mouse Inalámbrico Logitech",
    categoria: "consumibles",
    subcategoria: "periferico",
    marca: "Logitech",
    precio: 3500,
    moneda: "RD$",
    imagen: "assets/img/productos/placeholder-periferico.jpg",
    imagenes: ["assets/img/productos/placeholder-periferico.jpg"],
    descripcion: "Combo teclado y mouse inalámbrico, receptor USB único.",
    specs: ["Inalámbrico", "Receptor Nano USB", "Batería larga duración", "Español"],
    disponible: true,
    destacado: false,
    oferta: false,
    precio_original: null
  },
  {
    id: "CON-004",
    nombre: "Audiculares Jabra Evolve 20",
    categoria: "consumibles",
    subcategoria: "audicular",
    marca: "Jabra",
    precio: 7800,
    moneda: "RD$",
    imagen: "assets/img/productos/placeholder-audicular.jpg",
    imagenes: ["assets/img/productos/placeholder-audicular.jpg"],
    descripcion: "Audiculares profesionales para videoconferencias y llamadas.",
    specs: ["Micrófono integrado", "USB-A", "Cancelación de ruido", "Teams/Zoom"],
    disponible: true,
    destacado: false,
    oferta: false,
    precio_original: null
  }
];


/* ─── IMÁGENES PLACEHOLDER POR SUBCATEGORÍA ─── */
const PLACEHOLDER_IMAGES = {
  impresoras:    "assets/img/productos/placeholder-impresora.jpg",
  scanner:       "assets/img/productos/placeholder-escanner.jpg",
  laptop:        "assets/img/productos/placeholder-laptop.jpg",
  desktop:       "assets/img/productos/placeholder-pc.jpg",
  monitor:       "assets/img/productos/placeholder-monitor.jpg",
  servidor:      "assets/img/productos/placeholder-servidor.jpg",
  silla:         "assets/img/productos/placeholder-silla.jpg",
  escritorio:    "assets/img/productos/placeholder-escritorio.jpg",
  toner:         "assets/img/productos/placeholder-toner.jpg",
  tinta:         "assets/img/productos/placeholder-tinta.jpg",
  periferico:    "assets/img/productos/placeholder-periferico.jpg",
  audicular:     "assets/img/productos/placeholder-audicular.jpg"
};


/* ─── CONFIGURACIÓN VISUAL POR CATEGORÍA ─── */
const CATEGORIA_CONFIG = {
  impresoras: {
    id: "impresoras",
    nombre: "Impresoras & Escanners",
    subtitulo: "Las mejores marcas para tu oficina",
    emoji: "🖨️",
    colorFondo: "#1B2B8A",
    colorTexto: "#FFFFFF",
    colorAccento: "#00C2E0",
    bannerProducto: "assets/img/banners/banner-product-impresora.png",
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
    id: "computadoras",
    nombre: "Computadoras & Tecnología",
    subtitulo: "Equipos de alto rendimiento para profesionales",
    emoji: "🖥️",
    colorFondo: "#2C3347",
    colorTexto: "#FFFFFF",
    colorAccento: "#00C2E0",
    bannerProducto: "assets/img/banners/banner-product-laptop.png",
    subcategorias: [
      { valor: "all", etiqueta: "Todas" },
      { valor: "laptop", etiqueta: "Laptops" },
      { valor: "desktop", etiqueta: "Computadoras" },
      { valor: "monitor", etiqueta: "Monitores" },
      { valor: "servidor", etiqueta: "Servidores" }
    ]
  },
  mobiliario: {
    id: "mobiliario",
    nombre: "Mobiliario de Oficina",
    subtitulo: "Espacios de trabajo cómodos y funcionales",
    emoji: "🪑",
    colorFondo: "#F0F2F7",
    colorTexto: "#1B2B8A",
    colorAccento: "#1B2B8A",
    bannerProducto: "assets/img/banners/banner-product-silla.png",
    subcategorias: [
      { valor: "all", etiqueta: "Todas" },
      { valor: "silla", etiqueta: "Sillas" },
      { valor: "escritorio", etiqueta: "Escritorios" }
    ]
  },
  consumibles: {
    id: "consumibles",
    nombre: "Consumibles & Periféricos",
    subtitulo: "Tinta, tóner y accesorios originales",
    emoji: "🖱️",
    colorFondo: "#00C2E0",
    colorTexto: "#FFFFFF",
    colorAccento: "#FFFFFF",
    bannerProducto: "assets/img/banners/banner-product-toner.png",
    subcategorias: [
      { valor: "all", etiqueta: "Todas" },
      { valor: "toner", etiqueta: "Tóner e Inks" },
      { valor: "periferico", etiqueta: "Periféricos" },
      { valor: "audicular", etiqueta: "Audiculares" },
      { valor: "accesorio", etiqueta: "Accesorios" }
    ]
  }
};
