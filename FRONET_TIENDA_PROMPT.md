# PROMPT: Tienda Fronet Tecnología SRL
## Para ejecutar en Claude Code

---

```
Lee los archivos FRONET_SKILL.md y FRONET_TIENDA_SKILL.md completos antes de escribir una sola línea de código.

Construye la tienda online completa de Fronet Tecnología SRL. Son 4 archivos:

  1. assets/data/productos.js
  2. assets/css/pages/tienda.css
  3. assets/js/tienda.js
  4. tienda.html

A continuación las instrucciones exactas para cada uno.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ARCHIVO 1 — assets/data/productos.js
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Crea el array global PRODUCTOS con todos los productos placeholder definidos
en la sección 4 del FRONET_TIENDA_SKILL.md.

Incluye al final del archivo el objeto PLACEHOLDER_IMAGES y el objeto
CATEGORIA_CONFIG con la configuración visual de cada categoría:

const CATEGORIA_CONFIG = {
  impresoras: {
    id: "impresoras",
    nombre: "Impresoras & Escanners",
    subtitulo: "Las mejores marcas para tu oficina",
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


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ARCHIVO 2 — assets/css/pages/tienda.css
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Crea los estilos completos para la tienda. Usa las variables de main.css.
No repetir estilos que ya están en main.css o components.css.

Incluir estilos para:

1. TIENDA HERO
   .tienda-hero — padding 3rem, fondo gradiente muy sutil (blanco a gray-50)
   .tienda-search — input grande centrado, max-width 600px, con botón navy
   .tienda-search__dropdown — resultados en dropdown absoluto, blanco, sombra

2. CATEGORY NAV (sticky)
   .category-nav — sticky top igual al navbar, bg white, border-bottom gray-100
   .category-nav__inner — flex, gap, overflow-x auto en mobile
   .category-nav__item — padding, font DM Sans 500, color gray-700
   .category-nav__item.active — color navy, border-bottom 2px cyan

3. CATEGORY SECTION
   .category-section — padding-block 4rem, alternando white y gray-50
   .category-section:nth-child(even) — background gray-50

4. CATEGORY BANNER
   Especificaciones completas del FRONET_TIENDA_SKILL.md sección 5.
   El banner tiene overflow: visible para que la imagen del producto sobresalga.
   La imagen del producto usa position: absolute, bottom: 0, right: 5%,
   height: 110% para sobresalir del banner.
   drop-shadow para profundidad.
   En mobile (<768px): ocultar .category-banner__product

5. SUBCATEGORY FILTERS
   .subcategory-filters — flex, gap .5rem, flex-wrap wrap, margin-bottom 2rem
   .filter-pill — padding .4rem 1rem, border-radius 100px, border 1px gray-200,
                  font-size .85rem, cursor pointer, transition
   .filter-pill.active — bg navy, color white, border-color navy
   .filter-pill:hover:not(.active) — border-color navy, color navy

6. PRODUCTS GRID
   .products-grid — CSS Grid, grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)), gap 1.5rem
   En mobile: minmax(160px, 1fr)

7. PRODUCT CARD
   .product-card — bg white, border gray-100, border-radius radius-lg, overflow hidden,
                   flex column, transition hover (shadow + translateY -4px)
   .product-card__image — aspect-ratio 1, bg gray-50, overflow hidden, position relative
   .product-card__image img — width 80%, object-fit contain, margin auto,
                               transition transform, hover scale(1.05)
   .product-card__badge — position absolute, top .75rem, left .75rem, tag--gold
   .product-card__body — padding 1.25rem, flex column, flex: 1
   .product-card__marca — font .75rem, uppercase, letter-spacing, color gray-400
   .product-card__nombre — font .95rem, weight 600, color gray-900, margin-bottom .5rem
   .product-card__specs — lista de specs como dots separados, font .8rem, color gray-400
   .product-card__precio — font Barlow Condensed, 1.4rem, weight 700, color navy
   .product-card__precio-original — font .85rem, text-decoration line-through, color gray-400
   .product-card__add-btn — botón 100% ancho, bg navy, color white, border-radius radius-sm,
                             padding .65rem, font .875rem weight 600
                             Estado .added: bg cyan con texto "✓ Agregado"
                             Transición de color suave

8. CARRITO SIDEBAR
   .cart-overlay — position fixed, inset 0, bg rgba(0,0,0,.5), z-index 1100,
                   opacity 0 / visibility hidden por defecto
                   Estado .open: opacity 1 / visibility visible
   .cart-sidebar — position fixed, top 0, right 0, height 100vh, width 400px,
                   max-width 90vw, bg white, z-index 1101,
                   transform translateX(100%) por defecto
                   Estado .open: transform translateX(0)
                   transition .3s cubic-bezier(.4,0,.2,1)
                   display flex, flex-direction column
   .cart-sidebar__header — padding 1.25rem 1.5rem, border-bottom gray-100,
                            flex-between, font Barlow Condensed 700 1.3rem
   .cart-sidebar__items — flex: 1, overflow-y auto, padding 1rem 1.5rem
   .cart-item — flex, gap 1rem, padding .875rem 0, border-bottom gray-100
   .cart-item__image — width 64px, height 64px, bg gray-50, border-radius radius-sm,
                        object-fit contain
   .cart-item__info — flex 1
   .cart-item__nombre — font .875rem, weight 600
   .cart-item__marca — font .75rem, color gray-400
   .cart-item__precio — font Barlow Condensed, weight 700, color navy
   .cart-item__qty — flex, align-center, gap .5rem
   .qty-btn — width 28px, height 28px, border border-gray-200, border-radius radius-sm,
              font weight 600, transition hover bg gray-50
   .qty-value — min-width 24px, text-center, font weight 600
   .cart-item__remove — color gray-400, hover color red, transition
   .cart-sidebar__footer — padding 1.5rem, border-top gray-200
   .cart-subtotal — flex-between, font Barlow Condensed 700 1.1rem, margin-bottom 1rem
   .btn-whatsapp-cart — width 100%, bg #25D366, color white, padding 1rem,
                        border-radius radius-sm, font weight 600, font-size 1rem,
                        display flex, align-center, justify-center, gap .5rem
                        hover: bg #1DA851
   .cart-empty — text-center, padding 3rem 1rem, color gray-400

9. CARRITO FLOTANTE
   .cart-float — position fixed, bottom 5.5rem, right 2rem, z-index 999,
                  width 52px, height 52px, border-radius 50%, bg navy, color white,
                  display flex, align-center, justify-center, box-shadow shadow-md
                  transition hover (scale 1.1, shadow-lg)
   .cart-float__count — position absolute, top -6px, right -6px,
                         min-width 20px, height 20px, border-radius 100px,
                         bg gold, color white, font .7rem weight 700,
                         display flex, align-center, justify-center
                         oculto cuando count = 0

10. ANIMACIONES
    @keyframes cartBounce para el botón flotante al agregar item
    @keyframes fadeInProduct para los productos al filtrar (opacity + translateY)
    Respetar prefers-reduced-motion


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ARCHIVO 3 — assets/js/tienda.js
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Lógica completa de la tienda. Vanilla JS, sin dependencias.
Asumir que productos.js se carga antes que este archivo.

MÓDULO 1 — RENDERIZADO DE PRODUCTOS
function renderizarProductos(categoria, filtro = 'all')
  - Filtra PRODUCTOS por categoria y subcategoria
  - Genera el HTML de cada product-card
  - Inserta en el grid correspondiente (#grid-{categoria})
  - Anima la entrada con fadeInProduct

function crearProductCard(producto)
  - Retorna el HTML string completo de una product-card
  - Maneja: imagen con fallback, badge de oferta, specs como dots,
    precio con tachado si hay precio_original, botón agregar

MÓDULO 2 — FILTROS
function initFiltros()
  - Agrega event listeners a todos los .filter-pill
  - Al click: marcar active, llamar renderizarProductos con filtro

MÓDULO 3 — BUSCADOR
function initBuscador()
  - Event listener en #tiendaSearch con input event (debounce 300ms)
  - buscarProductos(query): filtra PRODUCTOS por nombre, marca, descripcion, specs
  - Muestra máximo 6 resultados en #searchDropdown
  - Cada resultado: imagen pequeña + nombre + marca + precio
  - Al click en resultado: cerrar dropdown + scroll al producto + highlight

MÓDULO 4 — CARRITO
Usar localStorage con key 'fronet_carrito'

function obtenerCarrito() — lee y parsea localStorage
function guardarCarrito(carrito) — stringify y guarda en localStorage
function agregarAlCarrito(productoId, cantidad = 1)
  - Busca producto en PRODUCTOS por id
  - Si ya está en carrito: incrementa cantidad
  - Si no: agrega con cantidad 1
  - Actualiza UI: botón → "✓ Agregado", animación cartBounce, actualizar contador
function quitarDelCarrito(productoId)
function actualizarCantidad(productoId, nuevaCantidad)
  - Si nuevaCantidad <= 0: quitarDelCarrito
function vaciarCarrito()

function actualizarContadorCarrito()
  - Cuenta items totales en carrito
  - Actualiza #cartCount
  - Oculta badge si count = 0

function renderizarCarrito()
  - Lee carrito del localStorage
  - Si vacío: mostrar .cart-empty con mensaje y botón "Ver productos"
  - Si tiene items: renderizar cada .cart-item
  - Actualizar subtotal

function calcularSubtotal(carrito)
  - Suma precio × cantidad de cada item
  - Retorna número formateado como "RD$ XX,XXX"

MÓDULO 5 — WHATSAPP
function generarMensajeWhatsApp(carrito)
  Formato exacto del mensaje:
  "Hola Fronet! 👋 Me interesa el siguiente pedido:\n\n"
  Por cada item: "• {nombre} ({marca})\n  Cantidad: {cant} | Precio unit: RD$ {precio}\n"
  Al final: "\n─────────────────\nTOTAL ESTIMADO: RD$ {total}\n\nPor favor confirmar disponibilidad y coordinar entrega. ¡Gracias! 😊"
  
  Retorna URL: https://wa.me/18293983616?text=MENSAJE_ENCODED

function initBotonWhatsApp()
  - Event listener en #btnWhatsappCart
  - Si carrito vacío: alert "Tu carrito está vacío"
  - Si tiene items: window.open(generarMensajeWhatsApp(carrito), '_blank')

MÓDULO 6 — SIDEBAR DEL CARRITO
function abrirCarrito() — agrega clase .open a overlay y sidebar, bloquea scroll body
function cerrarCarrito() — remueve clase .open, desbloquea scroll
function initCarrito()
  - Cargar carrito del localStorage al iniciar
  - Renderizar carrito
  - Event listeners: #cartFloat, #btnCerrarCarrito, .cart-overlay (click fuera)

MÓDULO 7 — CATEGORY NAV STICKY
function initCategoryNav()
  - IntersectionObserver en cada .category-section
  - Al entrar en viewport: marcar el link correspondiente en .category-nav como active
  - Al hacer scroll hasta cierta sección, actualizar el nav activo

MÓDULO 8 — INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
  // Renderizar todas las categorías
  Object.keys(CATEGORIA_CONFIG).forEach(cat => renderizarProductos(cat));
  
  // Inicializar módulos
  initFiltros();
  initBuscador();
  initCarrito();
  initCategoryNav();
  
  // TODO FASE 2: Reemplazar PRODUCTOS array con fetch() a la API de WooCommerce
  // TODO FASE 2: Agregar módulo de autenticación de usuario
  // TODO FASE 2: Integrar pasarela de pagos (CardNet, PayPal, Azul)
});


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ARCHIVO 4 — tienda.html
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

HTML semántico completo. lang="es".

HEAD:
- Todos los meta SEO (title, description, og, canonical)
- Title: "Tienda | Fronet Tecnología SRL — Computadoras, Impresoras y Más"
- Imports CSS: main.css, components.css, tienda.css
- Google Fonts (Barlow Condensed + DM Sans)

BODY — en este orden exacto:

1. <!-- Announcement Bar --> (igual que las demás páginas)

2. <!-- Navbar --> (igual que las demás páginas, link "Tienda" marcado como active)

3. <!-- Tienda Hero -->
<section class="tienda-hero">
  <div class="container" style="text-align:center">
    <span class="tag tag--navy">Catálogo de productos</span>
    <h1 class="display-lg text-navy">Todo lo que tu oficina necesita</h1>
    <p class="body-lg text-muted">Computadoras, impresoras, mobiliario y consumibles al mejor precio</p>
    <div class="tienda-search">
      <input type="search" id="tiendaSearch" placeholder="Buscar impresoras, laptops, tóner...">
      <button>Buscar</button>
      <div class="tienda-search__dropdown" id="searchDropdown"></div>
    </div>
  </div>
</section>

4. <!-- Category Nav -->
<nav class="category-nav" id="categoryNav">
  <div class="container">
    <div class="category-nav__inner">
      Un .category-nav__item por cada categoría con su emoji y nombre.
      href="#impresoras" | "#computadoras" | "#mobiliario" | "#consumibles"
    </div>
  </div>
</nav>

5. <!-- Secciones de categorías — una por cada categoría -->
Para cada categoría generar esta estructura:
<section class="category-section" id="{id_categoria}">
  <div class="container">

    <!-- Category Banner -->
    <div class="category-banner" style="background: {colorFondo}">
      <div class="category-banner__content">
        <span class="tag" style="...">Subcategoría activa</span>
        <h2 class="display-lg" style="color:{colorTexto}">{nombre}</h2>
        <p style="color:{colorTexto}; opacity:.75">{subtitulo}</p>
        <p class="products-count" style="...">
          <span id="count-{id}">0</span> productos
        </p>
      </div>
      <img
        class="category-banner__product"
        src="{bannerProducto}"
        alt="Producto destacado {nombre}"
        loading="lazy"
      />
    </div>

    <!-- Subcategory Filters -->
    <div class="subcategory-filters" data-categoria="{id_categoria}">
      Un .filter-pill por cada subcategoría. El primero (Todas) tiene clase active.
    </div>

    <!-- Products Grid -->
    <div class="products-grid" id="grid-{id_categoria}">
      <!-- JS renderiza aquí los product-cards -->
      <div class="products-loading">Cargando productos...</div>
    </div>

  </div>
</section>

Orden de secciones: impresoras → computadoras → mobiliario → consumibles

6. <!-- Carrito Sidebar + Overlay -->
<div class="cart-overlay" id="cartOverlay"></div>
<aside class="cart-sidebar" id="cartSidebar" aria-label="Carrito de compras">
  <div class="cart-sidebar__header">
    <span>🛒 Mi Pedido</span>
    <button id="btnCerrarCarrito" aria-label="Cerrar carrito">
      <!-- SVG X -->
    </button>
  </div>
  <div class="cart-sidebar__items" id="cartItems">
    <!-- JS renderiza aquí -->
  </div>
  <div class="cart-sidebar__footer">
    <div class="cart-subtotal">
      <span>Subtotal estimado</span>
      <span id="cartSubtotal">RD$ 0</span>
    </div>
    <button class="btn-whatsapp-cart" id="btnWhatsappCart">
      <!-- SVG WhatsApp --> Enviar pedido por WhatsApp
    </button>
    <button class="btn btn--outline" style="width:100%;margin-top:.75rem" onclick="cerrarCarrito()">
      Continuar comprando
    </button>
    <p style="font-size:.75rem;color:var(--gray-400);text-align:center;margin-top:.75rem">
      * Los precios están sujetos a disponibilidad. Un asesor confirmará tu pedido.
    </p>
  </div>
</aside>

7. <!-- Cart Float Button -->
<button class="cart-float" id="cartFloat" aria-label="Ver carrito de compras">
  <!-- SVG carrito -->
  <span class="cart-float__count" id="cartCount" style="display:none">0</span>
</button>

8. <!-- Footer --> (igual que las demás páginas)

9. <!-- WhatsApp Float --> (igual que las demás páginas)

10. Scripts al final del body (en este orden):
<script src="assets/data/productos.js"></script>
<script src="assets/js/main.js"></script>
<script src="assets/js/tienda.js"></script>

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VERIFICACIÓN FINAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Antes de terminar, confirmar:
✓ El carrito persiste en localStorage y se recarga al abrir la página
✓ El botón "Enviar pedido por WhatsApp" genera el mensaje correcto
✓ Los filtros de subcategoría funcionan sin recargar la página
✓ El buscador filtra en tiempo real con debounce
✓ El banner de cada categoría tiene el producto sobresaliendo visualmente
✓ En mobile el producto del banner se oculta
✓ Los botones "Agregar al carrito" cambian a "✓ Agregado" al hacer click
✓ El contador del carrito flotante se actualiza correctamente
✓ No hay errores de consola al cargar la página
```
