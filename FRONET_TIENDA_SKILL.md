# SKILL: Fronet — Tienda Online (Catálogo + Carrito WhatsApp)
**Archivo:** `FRONET_TIENDA_SKILL.md`  
**Stack:** HTML5 + CSS3 + JavaScript Vanilla  
**Propósito:** Guía completa para construir la página de tienda `tienda.html` con catálogo por categorías, carrito de compras lateral y envío del pedido por WhatsApp. Sin login, sin backend, sin pasarela de pagos (fase 1).

---

## 1. VISIÓN GENERAL

La tienda es un catálogo visual estilo "ecommerce minimalista corporativo". Cada categoría principal tiene un **banner hero** con imagen del producto protagonista que sobresale visualmente, seguido de un grid de productos relacionados. El usuario puede agregar productos al carrito, ver el resumen y enviar el pedido completo por WhatsApp con un solo clic.

**Inspiración visual:** Banners por categoría con producto recortado que sobresale del banner, diseño limpio, fondos neutros (blanco/gris muy claro), acentos en la paleta de Fronet. Nada recargado.

---

## 2. ESTRUCTURA DE CATEGORÍAS

```
CATEGORÍA 1: Impresoras & Escanners  ← LA MÁS IMPORTANTE, va primera
  Subcategorías: Impresoras de tinta | Impresoras láser/tóner | Sistemas continuos | Escanners | Multifuncionales

CATEGORÍA 2: Computadoras & Tecnología
  Subcategorías: Laptops | Computadoras de escritorio | Monitores | Servidores

CATEGORÍA 3: Mobiliario de Oficina
  Subcategorías: Sillas ergonómicas | Escritorios | Mobiliario de almacenamiento

CATEGORÍA 4: Consumibles & Periféricos
  Subcategorías: Tinta y tóner | Cartuchos | Teclados y mouse | Audiculares | Accesorios
```

---

## 3. ARQUITECTURA DE ARCHIVOS DE LA TIENDA

```
fronet/
├── tienda.html                    ← Página principal de la tienda (todas las categorías)
├── assets/
│   ├── css/
│   │   └── pages/
│   │       └── tienda.css         ← Estilos exclusivos de la tienda
│   ├── js/
│   │   └── tienda.js              ← Lógica del catálogo y carrito
│   └── data/
│       └── productos.js           ← Base de datos de productos en JS (array de objetos)
```

---

## 4. ESTRUCTURA DE DATOS — productos.js

Cada producto es un objeto JavaScript con esta estructura:

```javascript
// assets/data/productos.js
const PRODUCTOS = [
  {
    id: "IMP-001",
    nombre: "Impresora HP LaserJet Pro M404n",
    categoria: "impresoras",          // impresoras | computadoras | mobiliario | consumibles
    subcategoria: "laser",            // tinta | laser | continuo | scanner | multifuncional |
                                      // laptop | desktop | monitor | servidor |
                                      // silla | escritorio |
                                      // toner | cartucho | periferico | audicular | accesorio
    marca: "HP",
    precio: 18500,                    // Precio en RD$ (pesos dominicanos)
    moneda: "RD$",
    imagen: "assets/img/productos/imp-hp-laserjet-m404n.jpg",
    descripcion: "Impresora láser monocromática de alta velocidad, 38 ppm, conectividad USB y Ethernet.",
    specs: [                          // Máximo 4 specs clave
      "38 páginas por minuto",
      "Resolución 1200 dpi",
      "USB + Ethernet",
      "Bandeja 350 hojas"
    ],
    disponible: true,
    destacado: false,                 // true = aparece en sección "Destacados" del home
    oferta: false,                    // true = muestra badge de oferta
    precio_original: null            // Si es oferta, precio antes del descuento
  }
];
```

### Productos placeholder iniciales (usar estos como demo)

```javascript
// IMPRESORAS & ESCANNERS
{ id:"IMP-001", nombre:"Impresora HP LaserJet Pro M404n", categoria:"impresoras", subcategoria:"laser", marca:"HP", precio:18500, moneda:"RD$", imagen:"assets/img/productos/placeholder-impresora.jpg", descripcion:"Impresora láser monocromática de alta velocidad.", specs:["38 ppm","1200 dpi","USB + Ethernet","350 hojas"], disponible:true, destacado:true, oferta:false, precio_original:null },
{ id:"IMP-002", nombre:"Impresora Epson EcoTank L3250", categoria:"impresoras", subcategoria:"continuo", marca:"Epson", precio:12800, moneda:"RD$", imagen:"assets/img/productos/placeholder-impresora.jpg", descripcion:"Sistema de tinta continua, imprime hasta 4,500 páginas en negro.", specs:["WiFi incluido","4500 pág/negro","Sin cartuchos","USB"], disponible:true, destacado:true, oferta:true, precio_original:14500 },
{ id:"IMP-003", nombre:"Impresora Canon PIXMA G3160", categoria:"impresoras", subcategoria:"tinta", marca:"Canon", precio:10200, moneda:"RD$", imagen:"assets/img/productos/placeholder-impresora.jpg", descripcion:"Impresora multifuncional con sistema de tinta integrado.", specs:["Multifuncional","WiFi","USB","Color y negro"], disponible:true, destacado:false, oferta:false, precio_original:null },
{ id:"IMP-004", nombre:"Escáner HP ScanJet Pro 3600 f1", categoria:"impresoras", subcategoria:"scanner", marca:"HP", precio:22000, moneda:"RD$", imagen:"assets/img/productos/placeholder-escanner.jpg", descripcion:"Escáner plano con alimentador automático de documentos.", specs:["ADF 50 hojas","600 dpi","USB + Ethernet","Windows/Mac"], disponible:true, destacado:false, oferta:false, precio_original:null },
{ id:"IMP-005", nombre:"Impresora Xerox VersaLink C405", categoria:"impresoras", subcategoria:"laser", marca:"Xerox", precio:45000, moneda:"RD$", imagen:"assets/img/productos/placeholder-impresora.jpg", descripcion:"Impresora láser color con funciones avanzadas empresariales.", specs:["Láser color","35 ppm","WiFi + Ethernet","Pantalla táctil"], disponible:true, destacado:false, oferta:false, precio_original:null },
{ id:"IMP-006", nombre:"Sharp MX-3571 Multifuncional", categoria:"impresoras", subcategoria:"multifuncional", marca:"Sharp", precio:95000, moneda:"RD$", imagen:"assets/img/productos/placeholder-impresora.jpg", descripcion:"Equipo multifuncional A3 para empresas de alto volumen.", specs:["35 ppm color","Copiadora + scanner","Red + WiFi","A3 y A4"], disponible:true, destacado:false, oferta:false, precio_original:null },

// COMPUTADORAS & TECNOLOGÍA
{ id:"COM-001", nombre:"Laptop HP Pavilion 15", categoria:"computadoras", subcategoria:"laptop", marca:"HP", precio:55000, moneda:"RD$", imagen:"assets/img/productos/placeholder-laptop.jpg", descripcion:"Laptop para uso profesional y educativo con gran rendimiento.", specs:["Intel Core i5","8GB RAM","256GB SSD","Windows 11"], disponible:true, destacado:true, oferta:false, precio_original:null },
{ id:"COM-002", nombre:"PC Desktop HP ProDesk 400 G9", categoria:"computadoras", subcategoria:"desktop", marca:"HP", precio:42000, moneda:"RD$", imagen:"assets/img/productos/placeholder-pc.jpg", descripcion:"Computadora de escritorio empresarial compacta y potente.", specs:["Intel Core i5","8GB RAM","512GB SSD","Windows 11 Pro"], disponible:true, destacado:false, oferta:false, precio_original:null },
{ id:"COM-003", nombre:"Monitor LG 24 pulgadas Full HD", categoria:"computadoras", subcategoria:"monitor", marca:"LG", precio:15500, moneda:"RD$", imagen:"assets/img/productos/placeholder-monitor.jpg", descripcion:"Monitor LED IPS de 24 pulgadas para oficina.", specs:["24\" IPS","Full HD 1080p","HDMI + VGA","75Hz"], disponible:true, destacado:false, oferta:true, precio_original:18000 },
{ id:"COM-004", nombre:"Servidor HP ProLiant MicroServer", categoria:"computadoras", subcategoria:"servidor", marca:"HP", precio:120000, moneda:"RD$", imagen:"assets/img/productos/placeholder-servidor.jpg", descripcion:"Servidor compacto ideal para pequeñas y medianas empresas.", specs:["Intel Xeon","16GB ECC RAM","1TB HDD","Windows Server"], disponible:true, destacado:false, oferta:false, precio_original:null },

// MOBILIARIO DE OFICINA
{ id:"MOB-001", nombre:"Silla Ergonómica Ejecutiva", categoria:"mobiliario", subcategoria:"silla", marca:"Genérico", precio:8500, moneda:"RD$", imagen:"assets/img/productos/placeholder-silla.jpg", descripcion:"Silla de oficina ergonómica con soporte lumbar ajustable.", specs:["Soporte lumbar","Altura ajustable","Apoyabrazos 3D","Base giratoria"], disponible:true, destacado:false, oferta:false, precio_original:null },
{ id:"MOB-002", nombre:"Escritorio de Oficina 140cm", categoria:"mobiliario", subcategoria:"escritorio", marca:"Genérico", precio:12000, moneda:"RD$", imagen:"assets/img/productos/placeholder-escritorio.jpg", descripcion:"Escritorio moderno con cajón y amplio espacio de trabajo.", specs:["140×60 cm","Con cajón","Estructura metálica","Fácil armado"], disponible:true, destacado:false, oferta:false, precio_original:null },

// CONSUMIBLES & PERIFÉRICOS
{ id:"CON-001", nombre:"Tóner HP 26A Negro", categoria:"consumibles", subcategoria:"toner", marca:"HP", precio:3200, moneda:"RD$", imagen:"assets/img/productos/placeholder-toner.jpg", descripcion:"Cartucho de tóner original HP para LaserJet Pro.", specs:["3,100 páginas","Original HP","LaserJet Pro M402/M426","Negro"], disponible:true, destacado:false, oferta:false, precio_original:null },
{ id:"CON-002", nombre:"Tinta Epson T504 Set x4", categoria:"consumibles", subcategoria:"toner", marca:"Epson", precio:2800, moneda:"RD$", imagen:"assets/img/productos/placeholder-tinta.jpg", descripcion:"Set de 4 botellas de tinta original Epson para EcoTank.", specs:["4 colores","Original Epson","EcoTank L4150/L6161","70ml c/u"], disponible:true, destacado:false, oferta:false, precio_original:null },
{ id:"CON-003", nombre:"Teclado + Mouse Inalámbrico Logitech", categoria:"consumibles", subcategoria:"periferico", marca:"Logitech", precio:3500, moneda:"RD$", imagen:"assets/img/productos/placeholder-periferico.jpg", descripcion:"Combo teclado y mouse inalámbrico, receptor USB único.", specs:["Inalámbrico","Receptor Nano USB","Batería larga duración","Español"], disponible:true, destacado:false, oferta:false, precio_original:null },
{ id:"CON-004", nombre:"Audiculares Jabra Evolve 20", categoria:"consumibles", subcategoria:"audicular", marca:"Jabra", precio:7800, moneda:"RD$", imagen:"assets/img/productos/placeholder-audicular.jpg", descripcion:"Audiculares profesionales para videoconferencias y llamadas.", specs:["Micrófono integrado","USB-A","Cancelación de ruido","Teams/Zoom"], disponible:true, destacado:false, oferta:false, precio_original:null }
];
```

---

## 5. DISEÑO VISUAL DE LA TIENDA

### Layout general de tienda.html
```
[Announcement Bar]
[Navbar]
[Hero Tienda] — Banner principal de la tienda con buscador
[Navegación de categorías] — Pills horizontales sticky
[SECCIÓN CATEGORÍA 1: Impresoras & Escanners]
  [Category Banner]
  [Filtros de subcategoría]
  [Grid de productos]
[SECCIÓN CATEGORÍA 2: Computadoras & Tecnología]
  [Category Banner]
  [Filtros de subcategoría]
  [Grid de productos]
[SECCIÓN CATEGORÍA 3: Mobiliario de Oficina]
  [Category Banner]
  [Filtros de subcategoría]
  [Grid de productos]
[SECCIÓN CATEGORÍA 4: Consumibles & Periféricos]
  [Category Banner]
  [Filtros de subcategoría]
  [Grid de productos]
[Footer]
[Carrito lateral — slide-in desde la derecha]
[WhatsApp Float]
[Botón carrito flotante con contador de items]
```

### Category Banner — especificaciones
Cada categoría tiene un banner con:
- **Fondo:** Color sólido suave o gradiente muy sutil usando la paleta del sitio
  - Impresoras: navy `#1B2B8A` con texto blanco
  - Computadoras: gris oscuro `#2C3347` con texto blanco
  - Mobiliario: gris claro `#F0F2F7` con texto navy
  - Consumibles: cyan `#00C2E0` con texto white
- **Lado izquierdo:** Nombre de categoría en Barlow Condensed 800, subtítulo, contador de productos, pills de subcategorías
- **Lado derecho:** Imagen del producto protagonista que **sobresale** del banner usando `position: absolute; bottom: 0;` con un `drop-shadow` para efecto de profundidad
- **Altura:** 220px para el banner, el producto puede sobresalir hasta 40px arriba
- **Efecto sobresaliente:** `filter: drop-shadow(0 -8px 20px rgba(0,0,0,0.20))` en la imagen del producto

```css
/* Estructura del Category Banner */
.category-banner {
  position: relative;
  height: 220px;
  border-radius: var(--radius-lg);
  overflow: visible;          /* Permite que el producto sobresalga */
  margin-bottom: 2rem;
}
.category-banner__content {
  position: relative;
  z-index: 2;
  padding: 2rem 2.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 55%;
}
.category-banner__product {
  position: absolute;
  right: 5%;
  bottom: 0;                  /* Se alinea al fondo del banner */
  height: 110%;               /* Sobresale un 10% por arriba */
  width: auto;
  object-fit: contain;
  filter: drop-shadow(0 -8px 24px rgba(0,0,0,0.18));
  z-index: 3;
  pointer-events: none;
}
```

### Product Card — especificaciones
```
┌─────────────────────────┐
│  [badge OFERTA si aplica]│
│                          │
│     [imagen producto]    │
│                          │
├─────────────────────────┤
│  Marca (pequeño, gris)   │
│  Nombre del producto     │
│  ─────────────────────   │
│  Specs: • spec1 • spec2  │
│                          │
│  RD$ 18,500              │
│  ~~RD$ 20,000~~ (oferta) │
│                          │
│  [+ Agregar al carrito]  │
└─────────────────────────┘
```
- Tamaño: `minmax(220px, 1fr)` en CSS Grid
- Fondo blanco, borde `1px solid var(--gray-100)`
- Hover: `box-shadow` suave + `translateY(-4px)`
- Badge oferta: esquina superior izquierda, fondo gold
- Imagen: `aspect-ratio: 1`, `object-fit: contain`, fondo `var(--gray-50)`
- Botón "+ Agregar": fondo navy, ancho 100%, se transforma a "✓ Agregado" al hacer click con fondo cyan

---

## 6. CARRITO DE COMPRAS

### Comportamiento
- **Tipo:** Sidebar (panel lateral) que desliza desde la derecha
- **Trigger:** Click en botón flotante del carrito (esquina inferior derecha, sobre el WhatsApp)
- **Overlay:** Fondo semitransparente oscuro al abrir el carrito
- **Persistencia:** `localStorage` — el carrito se mantiene si el usuario recarga la página

### Estructura del carrito sidebar
```
┌─────────────────────────────────────┐
│  🛒 Mi Pedido              [×]      │
│  ─────────────────────────────────  │
│  [imagen] Nombre producto           │
│           Marca | RD$ 18,500        │
│           [−] 1 [+]    [🗑]        │
│  ─────────────────────────────────  │
│  [imagen] Nombre producto           │
│           Marca | RD$ 12,800        │
│           [−] 2 [+]    [🗑]        │
│  ─────────────────────────────────  │
│                                     │
│  Subtotal:          RD$ 44,100      │
│  ─────────────────────────────────  │
│  [ 💬 Enviar pedido por WhatsApp ]  │
│  [ Continuar comprando ]            │
└─────────────────────────────────────┘
```

### Mensaje de WhatsApp generado
```javascript
function generarMensajeWhatsApp(carrito) {
  const numero = "18293983616";
  let mensaje = "Hola Fronet! Me interesa realizar el siguiente pedido:\n\n";
  
  carrito.forEach(item => {
    mensaje += `• ${item.nombre} (${item.marca})\n`;
    mensaje += `  Cantidad: ${item.cantidad}\n`;
    mensaje += `  Precio: ${item.moneda} ${item.precio.toLocaleString()}\n\n`;
  });
  
  const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
  mensaje += `─────────────────\n`;
  mensaje += `TOTAL ESTIMADO: RD$ ${total.toLocaleString()}\n\n`;
  mensaje += `Por favor confirmar disponibilidad y coordinar entrega. ¡Gracias!`;
  
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
}
```

### Botón flotante del carrito
```html
<!-- Posicionado sobre el WhatsApp float -->
<button class="cart-float" id="cartFloat" aria-label="Ver carrito">
  <svg><!-- ícono carrito --></svg>
  <span class="cart-float__count" id="cartCount">0</span>
</button>
```
- Posición: `fixed; bottom: 5.5rem; right: 2rem;` (encima del WhatsApp)
- Color: navy `#1B2B8A`
- Badge contador: fondo gold, oculto cuando count = 0
- Animación: shake/bounce al agregar un producto

---

## 7. BUSCADOR DE TIENDA

```javascript
// Búsqueda en tiempo real sobre el array PRODUCTOS
// Filtra por: nombre, marca, categoría, subcategoría, specs
// Muestra resultados en dropdown bajo el input
// Al seleccionar: hace scroll hasta el producto y lo resalta
```

Posición: en el hero de la tienda, centrado, ancho máximo 600px.

```html
<div class="tienda-search">
  <input type="search" placeholder="Buscar impresoras, laptops, tóner..." id="tiendaSearch" />
  <button>Buscar</button>
  <div class="tienda-search__dropdown" id="searchDropdown"></div>
</div>
```

---

## 8. FILTROS POR SUBCATEGORÍA

Debajo de cada Category Banner hay pills de filtro para las subcategorías:

```html
<!-- Ejemplo para Impresoras -->
<div class="subcategory-filters" data-categoria="impresoras">
  <button class="filter-pill active" data-filter="all">Todas</button>
  <button class="filter-pill" data-filter="laser">Láser</button>
  <button class="filter-pill" data-filter="tinta">Tinta</button>
  <button class="filter-pill" data-filter="continuo">Sistema Continuo</button>
  <button class="filter-pill" data-filter="scanner">Escanners</button>
  <button class="filter-pill" data-filter="multifuncional">Multifuncionales</button>
</div>
```

Al hacer click en un filtro:
- Filtra el grid de productos de esa categoría
- Animación de fade al cambiar
- La pill activa se marca con fondo navy

---

## 9. NAVEGACIÓN DE CATEGORÍAS (sticky)

```html
<nav class="category-nav" id="categoryNav">
  <div class="container">
    <a href="#impresoras" class="category-nav__item active">
      <span>🖨️</span> Impresoras & Escanners
    </a>
    <a href="#computadoras" class="category-nav__item">
      <span>🖥️</span> Computadoras
    </a>
    <a href="#mobiliario" class="category-nav__item">
      <span>🪑</span> Mobiliario
    </a>
    <a href="#consumibles" class="category-nav__item">
      <span>🖱️</span> Consumibles & Periféricos
    </a>
  </div>
</nav>
```

- Se vuelve sticky después del hero de la tienda
- El item activo cambia según la sección visible (IntersectionObserver)
- Fondo blanco, borde inferior gris, z-index: 100

---

## 10. IMÁGENES DE PRODUCTOS (placeholders)

Hasta que el cliente provea las fotos reales, usar estas imágenes placeholder por categoría:

```javascript
const PLACEHOLDER_IMAGES = {
  impresoras: "assets/img/productos/placeholder-impresora.jpg",
  scanner: "assets/img/productos/placeholder-escanner.jpg",
  laptop: "assets/img/productos/placeholder-laptop.jpg",
  desktop: "assets/img/productos/placeholder-pc.jpg",
  monitor: "assets/img/productos/placeholder-monitor.jpg",
  servidor: "assets/img/productos/placeholder-servidor.jpg",
  silla: "assets/img/productos/placeholder-silla.jpg",
  escritorio: "assets/img/productos/placeholder-escritorio.jpg",
  toner: "assets/img/productos/placeholder-toner.jpg",
  tinta: "assets/img/productos/placeholder-tinta.jpg",
  periferico: "assets/img/productos/placeholder-periferico.jpg",
  audicular: "assets/img/productos/placeholder-audicular.jpg"
};
```

### Imágenes de productos para los banners (PNG con fondo transparente para el efecto sobresaliente):
```
assets/img/banners/banner-product-impresora.png  ← Impresora HP recortada (sin fondo)
assets/img/banners/banner-product-laptop.png     ← Laptop abierta recortada
assets/img/banners/banner-product-silla.png      ← Silla ergonómica recortada
assets/img/banners/banner-product-toner.png      ← Tóner/cartucho recortado
```

---

## 11. ANIMACIONES Y MICROINTERACCIONES

```css
/* Producto agregado al carrito */
@keyframes addToCart {
  0% { transform: scale(1); }
  50% { transform: scale(0.95); }
  100% { transform: scale(1); }
}

/* Carrito bounce al agregar item */
@keyframes cartBounce {
  0%, 100% { transform: scale(1); }
  30% { transform: scale(1.25); }
  60% { transform: scale(0.92); }
}

/* Fly-to-cart: el producto "vuela" hacia el carrito */
/* Implementar con JS clonando la imagen del producto
   y animando su posición hasta el botón del carrito */
```

---

## 12. RESPONSIVE

- **Desktop (>1024px):** Grid 4 columnas para productos, banner horizontal
- **Tablet (768–1024px):** Grid 3 columnas, banner mantiene diseño
- **Mobile (<768px):**
  - Grid 2 columnas para productos
  - Banner: imagen del producto se oculta, solo texto y filtros
  - Carrito: ocupa 90% del ancho de pantalla
  - Category nav: scroll horizontal con overflow-x: auto

---

## 13. ACCESIBILIDAD Y SEO

- Cada producto tiene `aria-label` en el botón de carrito
- Las imágenes de productos tienen `alt` con nombre + marca + modelo
- Schema.org `Product` para cada producto (generado dinámicamente en JS)
- Title: `"Tienda | Fronet Tecnología SRL — Computadoras, Impresoras y más"`
- Meta description incluye las categorías principales

---

## 14. NOTAS PARA FASE 2 (WooCommerce / Pasarela de pagos)

Dejar estos comentarios `// TODO` en el código para la fase siguiente:
```javascript
// TODO FASE 2: Reemplazar PRODUCTOS array con fetch() a la API de WooCommerce
// TODO FASE 2: Agregar módulo de autenticación de usuario
// TODO FASE 2: Integrar pasarela de pagos (CardNet, PayPal, Azul)
// TODO FASE 2: Sistema de inventario en tiempo real
// TODO FASE 2: Historial de pedidos por usuario
```
