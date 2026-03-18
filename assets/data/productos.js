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
    disponible: true,
    specs: ["40 ppm", "USB/Ethernet", "Duplex automático"]
  },
  {
    id: "IMP-002",
    nombre: "Impresora Canon PIXMA G3110",
    categoria: "impresoras",
    subcategoria: "continuo",
    marca: "Canon",
    precio: 12500,
    moneda: "RD$",
    imagen: "assets/img/productos/placeholder-impresora.jpg",
    descripcion: "Impresora de sistema continuo con WiFi integrado.",
    disponible: true,
    oferta: true,
    precio_original: 14500,
    specs: ["Sistema continuo", "WiFi", "Multifuncional"]
  },
  {
    id: "IMP-003",
    nombre: "Escanner Epson Perfection V39",
    categoria: "impresoras",
    subcategoria: "scanner",
    marca: "Epson",
    precio: 8900,
    moneda: "RD$",
    imagen: "assets/img/productos/placeholder-impresora.jpg",
    descripcion: "Escanner plano de alta resolución.",
    disponible: true,
    specs: ["4800 dpi", "USB", "Portátil"]
  },
  {
    id: "IMP-004",
    nombre: "Multifuncional HP OfficeJet Pro 9015",
    categoria: "impresoras",
    subcategoria: "multifuncional",
    marca: "HP",
    precio: 22500,
    moneda: "RD$",
    imagen: "assets/img/productos/placeholder-impresora.jpg",
    descripcion: "Impresora multifuncional con fax y escáner.",
    disponible: true,
    specs: ["22 ppm", "WiFi/Ethernet", "ADF"]
  },
  {
    id: "COM-001",
    nombre: "Laptop Dell Inspiron 15 3000",
    categoria: "computadoras",
    subcategoria: "laptop",
    marca: "Dell",
    precio: 32500,
    moneda: "RD$",
    imagen: "assets/img/productos/placeholder-laptop.jpg",
    descripcion: "Laptop para oficina con procesador Intel Core i3.",
    disponible: true,
    specs: ["Intel i3", "8GB RAM", "256GB SSD"]
  },
  {
    id: "COM-002",
    nombre: "Laptop HP Pavilion 14",
    categoria: "computadoras",
    subcategoria: "laptop",
    marca: "HP",
    precio: 38500,
    moneda: "RD$",
    imagen: "assets/img/productos/placeholder-laptop.jpg",
    descripcion: "Laptop ultradelgada con pantalla táctil.",
    disponible: true,
    oferta: true,
    precio_original: 42000,
    specs: ["Intel i5", "12GB RAM", "512GB SSD"]
  },
  {
    id: "COM-003",
    nombre: "Computadora Desktop Lenovo ThinkCentre",
    categoria: "computadoras",
    subcategoria: "desktop",
    marca: "Lenovo",
    precio: 28500,
    moneda: "RD$",
    imagen: "assets/img/productos/placeholder-desktop.jpg",
    descripcion: "Computadora de escritorio para empresas.",
    disponible: true,
    specs: ["Intel i5", "16GB RAM", "1TB HDD"]
  },
  {
    id: "COM-004",
    nombre: "Monitor Samsung 24\" Full HD",
    categoria: "computadoras",
    subcategoria: "monitor",
    marca: "Samsung",
    precio: 9500,
    moneda: "RD$",
    imagen: "assets/img/productos/placeholder-monitor.jpg",
    descripcion: "Monitor LED de 24 pulgadas con bordes delgados.",
    disponible: true,
    specs: ["1920x1080", "IPS", "HDMI/VGA"]
  },
  {
    id: "MOB-001",
    nombre: "Silla Ergonómica Ejecutiva",
    categoria: "mobiliario",
    subcategoria: "silla",
    marca: "Fronet Office",
    precio: 12500,
    moneda: "RD$",
    imagen: "assets/img/productos/placeholder-silla.jpg",
    descripcion: "Silla ergonómica con soporte lumbar ajustable.",
    disponible: true,
    specs: ["Respaldo alto", "Ajustable", "Garantía 2 años"]
  },
  {
    id: "MOB-002",
    nombre: "Escritorio Ejecutivo 1.4m",
    categoria: "mobiliario",
    subcategoria: "escritorio",
    marca: "Fronet Office",
    precio: 18500,
    moneda: "RD$",
    imagen: "assets/img/productos/placeholder-escritorio.jpg",
    descripcion: "Escritorio de melamina con cajonera incluida.",
    disponible: true,
    specs: ["140x70cm", "Melamina", "Cajonera"]
  },
  {
    id: "CON-001",
    nombre: "Tóner HP 26A Original",
    categoria: "consumibles",
    subcategoria: "toner",
    marca: "HP",
    precio: 4500,
    moneda: "RD$",
    imagen: "assets/img/productos/placeholder-toner.jpg",
    descripcion: "Tóner original HP para LaserJet Pro.",
    disponible: true,
    specs: ["3100 páginas", "Negro", "Original"]
  },
  {
    id: "CON-002",
    nombre: "Mouse Inalámbrico Logitech M185",
    categoria: "consumibles",
    subcategoria: "periferico",
    marca: "Logitech",
    precio: 1200,
    moneda: "RD$",
    imagen: "assets/img/productos/placeholder-mouse.jpg",
    descripcion: "Mouse inalámbrico compacto con receptor USB.",
    disponible: true,
    specs: ["2.4GHz", "12 meses batería", "Plug & Play"]
  },
  {
    id: "CON-003",
    nombre: "Teclado Mecánico Redragon K552",
    categoria: "consumibles",
    subcategoria: "periferico",
    marca: "Redragon",
    precio: 3500,
    moneda: "RD$",
    imagen: "assets/img/productos/placeholder-teclado.jpg",
    descripcion: "Teclado mecánico gaming con retroiluminación.",
    disponible: true,
    oferta: true,
    precio_original: 4200,
    specs: ["Switches Blue", "RGB", "Anti-ghosting"]
  },
  {
    id: "CON-004",
    nombre: "Audífonos JBL Tune 510BT",
    categoria: "consumibles",
    subcategoria: "audicular",
    marca: "JBL",
    precio: 2800,
    moneda: "RD$",
    imagen: "assets/img/productos/placeholder-audifono.jpg",
    descripcion: "Audífonos Bluetooth con sonido JBL Pure Bass.",
    disponible: true,
    specs: ["Bluetooth 5.0", "40h batería", "Plegable"]
  }
];

