# SKILL: Fronet Tecnología SRL — Sitio Web Corporativo
**Stack:** HTML5 + CSS3 + JavaScript Vanilla (sin frameworks)  
**Propósito:** Guía maestra para construir y mantener el sitio web de Fronet Tecnología SRL, migrado desde Wix a hosting propio.

---

## 1. CONTEXTO DEL PROYECTO

**Cliente:** Fronet Tecnología SRL  
**Tagline:** "Tu aliado en tecnología"  
**Negocio:** Venta de equipos tecnológicos, renta de impresoras, soporte técnico, instalación CCTV y redes en Santo Domingo, República Dominicana.  
**URL actual (Wix):** https://www.fronetrd.com  
**Dominio destino:** https://www.fronetrd.com (mismo dominio, nuevo hosting)

**Datos de contacto:**
- Teléfono: +1 829-398-3616
- Email: info@fronetrd.com
- Dirección: Calle Penetración, Santo Domingo Norte, Rep. Dom.
- Horario: Lun–Vie 8:00am–5:00pm | Sáb 8:00am–12:00pm
- Facebook: https://web.facebook.com/profile.php?id=100089948240589
- Instagram: https://www.instagram.com/fronetrd/
- WhatsApp: +18293983616

---

## 2. ESTRUCTURA DE ARCHIVOS

```
fronet/
├── index.html
├── nosotros.html
├── servicios.html
├── impresoras.html
├── ofertas.html
├── clientes.html
├── soporte.html
├── contacto.html
├── tienda.html              ← Placeholder "Próximamente"
├── politicas.html           ← Envío, devoluciones, términos, métodos de pago
├── sitemap.xml
├── robots.txt
├── assets/
│   ├── css/
│   │   ├── main.css         ← Variables globales, reset, tipografía, utilidades
│   │   ├── components.css   ← Navbar, footer, botones, tarjetas, formularios
│   │   └── pages/
│   │       ├── home.css
│   │       ├── servicios.css
│   │       ├── tienda.css
│   │       └── contacto.css
│   ├── js/
│   │   ├── main.js          ← Navbar sticky, mobile menu, scroll animations
│   │   └── forms.js         ← Validación y envío de formularios
│   └── img/
│       ├── logo-fronet.png      ← Logo principal (fondo transparente, versión oscura)
│       ├── logo-fronet-white.png ← Versión blanca del logo para fondos oscuros
│       └── og-image.jpg         ← Imagen Open Graph (1200x630)
```

---

## 3. PALETA DE COLORES

```css
:root {
  --cyan:       #00C2E0;   /* Color principal — wordmark del logo */
  --cyan-dark:  #009AB3;   /* Hover y énfasis del cian */
  --navy:       #1B2B8A;   /* Color secundario — líneas del logo */
  --navy-dark:  #121E63;   /* Hover y énfasis del navy */
  --gold:       #F5A623;   /* Acento — color de marketing del cliente */
  --gold-dark:  #D4881A;   /* Hover del gold */
  --white:      #FFFFFF;
  --gray-50:    #F8F9FB;   /* Fondo de secciones alternas */
  --gray-100:   #EEF0F5;   /* Bordes y fondos de tarjetas */
  --gray-200:   #D8DCE8;   /* Separadores */
  --gray-400:   #9099B0;   /* Texto secundario / muted */
  --gray-700:   #3A4160;   /* Texto de navegación */
  --gray-900:   #111827;   /* Texto principal */
}
```

**Reglas de uso:**
- Fondos de sección alternan: `--white` → `--gray-50` → `--white`
- El navy `#1B2B8A` se usa para fondos de secciones CTA importantes
- El gold `#F5A623` solo como acento — nunca como fondo de página
- El cian `#00C2E0` para íconos, badges, links activos y acentos decorativos

---

## 4. TIPOGRAFÍA

```html
<!-- Cargar desde Google Fonts en el <head> de cada página -->
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
```

- **Display / Headings:** `Barlow Condensed` — pesos 600, 700, 800
- **Body / UI:** `DM Sans` — pesos 400, 500, 600
- **h1:** `clamp(3rem, 6vw, 5.5rem)` — Barlow Condensed 800
- **h2:** `clamp(1.8rem, 3.5vw, 2.8rem)` — Barlow Condensed 700
- **h3:** `1.2rem` — Barlow Condensed 700
- **Body:** `1rem / 1.65` — DM Sans 400
- **Subtítulos / muted:** `0.875rem` — DM Sans 400

---

## 5. PÁGINAS Y SU CONTENIDO

### index.html — INICIO
**Secciones en orden:**
1. **Announcement bar** (navy) — "Envíos disponibles · Pago contra entrega" + teléfono + email
2. **Navbar** — Logo + navegación + botón "Soporte Técnico" + teléfono
3. **Hero** — H1, subtítulo, 2 CTAs (Ver servicios / Explorar tienda), stats (500+ clientes, 24/7, 5+ años), tarjeta flotante con lista de servicios
4. **Features bar** (navy) — 4 íconos: Servicio a domicilio | Asistencia 24/7 | Envíos disponibles | Garantía incluida
5. **Servicios** (gray-50) — 6 tarjetas de servicios con ícono, título, descripción y link
6. **Marcas** (white) — HP, Canon, Sharp, Xerox, Epson
7. **Impresoras & Escanners** (white) — Split layout: texto + features | visual decorativo
8. **CTA Soporte** (navy) — "¿Necesitas asistencia técnica?" + botón soporte + botón WhatsApp
9. **Testimonios** (gray-50) — 3 tarjetas de clientes satisfechos
10. **Contact Strip** (cyan) — Teléfono + email + dirección
11. **Footer** (gray-900) — Logo blanco, descripción, links, contacto, métodos de pago
12. **WhatsApp Float** — Botón flotante verde fijo en esquina inferior derecha

### nosotros.html — NOSOTROS
**Secciones:**
1. Page Hero (navy, pequeño) — "Sobre Fronet Tecnología SRL"
2. Historia / Descripción larga (texto del Wix original)
3. Misión / Visión / Valores — 3 tarjetas en grid
4. Empleos — Formulario para candidatos (nombre, apellido, email, teléfono, puesto, fecha disponible, link CV)
5. CTA Soporte strip
6. Footer

### servicios.html — SERVICIOS
**6 servicios con sección dedicada cada uno:**
1. Renta y Venta de Impresoras — id="renta-impresoras"
2. Servicio Técnico para Computadoras — id="soporte"
3. Instalación CCTV — id="cctv"
4. Reparación de Laptops — id="laptops" (incluir: 20% descuento activo)
5. Instalación de Redes — id="redes"
6. Servicio Técnico de Impresoras — id="tecnico-impresoras"

Cada servicio: ícono grande, título, descripción completa, lista de características, botón "Solicitar servicio" → contacto.html

### impresoras.html — IMPRESORAS & ESCANNERS
- Hero con fondo navy
- Categorías: Impresoras de tinta | Tóner | Sistemas continuos | Escanners
- Grid de productos placeholder (imágenes con alt descriptivo, nombre, botón "Consultar precio")
- Sección renta vs compra
- Marcas: HP, Canon, Xerox, Epson, Sharp
- CTA contacto

### ofertas.html — OFERTAS
- Banner "Ofertas especiales" con gold
- Grid de productos en oferta (placeholder)
- Badge de descuento en tarjetas
- CTA WhatsApp para consultas

### clientes.html — NUESTROS CLIENTES
- Hero
- Grid de logos de empresas clientes (placeholders o los que tenga el cliente)
- Sección de testimonios (3-6 tarjetas)
- Stats: clientes atendidos, años de experiencia, ciudades

### soporte.html — SOPORTE TÉCNICO
- Hero navy pequeño
- Formulario principal: Nombre completo*, Email*, Empresa, Teléfono, Asunto, Descripción del problema*
- FAQ acordeón (preguntas frecuentes de soporte)
- Info de contacto directo
- Footer

### contacto.html — CONTACTO
- Formulario: Nombre, Apellido, Email, Asunto, Mensaje
- Info: dirección, teléfono, email, horario
- Mapa embed (Google Maps — Calle Penetración, Santo Domingo Norte)
- Sección boletín informativo
- Footer

### tienda.html — TIENDA (PLACEHOLDER)
- Hero con mensaje "Nuestra tienda está en construcción"
- Subcategorías visibles como cards: Laptops, Computadoras, Servidores, Monitores, Mobiliario, Periféricos, Audiculares, Consumibles
- Cada categoría muestra "Próximamente" o redirige a contacto para cotizar
- CTA WhatsApp: "¿Buscas un producto? Escríbenos"
- Nota: esta página se activará completamente en una fase posterior

### politicas.html — POLÍTICAS
- Tabs o secciones: Envío y Devoluciones | Términos y Condiciones | Métodos de Pago | FAQ
- Métodos de pago aceptados: Visa, Mastercard, American Express, Diners Club, PayPal

---

## 6. COMPONENTES REUTILIZABLES

### Announcement Bar
```html
<!-- Siempre arriba del navbar, fondo navy -->
<div class="announcement-bar">
  "Envíos disponibles — Pagos contra entrega" | [teléfono] | [email]
</div>
```

### Navbar
- Logo izquierda
- Nav central: Inicio | Nosotros | Servicios | Tienda (dropdown) | Ofertas | Impresoras | Clientes
- Derecha: teléfono + botón "Soporte Técnico" (btn--primary)
- Sticky con `box-shadow` al hacer scroll
- Mobile: hamburger → overlay full-screen

### Footer
- 4 columnas: Brand+redes | Tienda links | Empresa links | Contacto
- Métodos de pago como badges en footer
- Copyright: "© 2025 Fronet Tecnología SRL"
- Links legales: Términos | Envíos | Privacidad

### Botón WhatsApp flotante
```html
<a href="https://wa.me/18293983616" class="whatsapp-float" target="_blank" rel="noopener">
  <!-- SVG WhatsApp icon -->
</a>
```
Posición: `fixed; bottom: 2rem; right: 2rem;` Color: `#25D366`

### Section Header (centrado)
```html
<div class="section-header">
  <span class="tag tag--cyan">Etiqueta</span>
  <h2>Título de la <span>sección</span></h2>
  <p>Descripción opcional</p>
</div>
```

---

## 7. SEO — REGLAS POR PÁGINA

Cada página DEBE tener:
```html
<title>[Página] | Fronet Tecnología SRL — Santo Domingo, R.D.</title>
<meta name="description" content="[Descripción única de 150-160 chars]" />
<link rel="canonical" href="https://www.fronetrd.com/[pagina].html" />
```

**Schema.org en index.html únicamente:**
```json
{
  "@type": "LocalBusiness",
  "name": "Fronet Tecnología SRL",
  "telephone": "+18293983616",
  "address": { "streetAddress": "Calle Penetración", "addressLocality": "Santo Domingo Norte", "addressCountry": "DO" }
}
```

**Open Graph en todas las páginas:**
```html
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="https://www.fronetrd.com/assets/img/og-image.jpg" />
<meta property="og:locale" content="es_DO" />
```

---

## 8. JAVASCRIPT — COMPORTAMIENTOS

### main.js
```javascript
// 1. Navbar sticky shadow al scroll
// 2. Mobile menu toggle (hamburger ↔ close)
// 3. Scroll animations — IntersectionObserver para clase .fade-up → .visible
// 4. Dropdown de tienda en navbar (hover en desktop, click en mobile)
// 5. Año dinámico en footer copyright
```

### forms.js
```javascript
// 1. Validación client-side de todos los formularios
// 2. Mensajes de error inline bajo cada campo
// 3. Estado loading en botón submit
// 4. Mensaje de éxito tras submit (sin recargar página)
// 5. Nota: los formularios apuntan a un endpoint configurable (variable al inicio del archivo)
```

---

## 9. ACCESIBILIDAD

- Todos los `<img>` con `alt` descriptivo en español
- Todos los `<a>` con texto descriptivo o `aria-label`
- Contraste mínimo WCAG AA en todos los textos
- Navegación por teclado funcional en navbar y formularios
- `role` y `aria-*` en navbar mobile
- `<main>`, `<header>`, `<footer>`, `<nav>`, `<section>` con semántica correcta
- `lang="es"` en `<html>`

---

## 10. PERFORMANCE

- Google Fonts con `rel="preconnect"` y `display=swap`
- Imágenes: usar `loading="lazy"` en todas las imágenes debajo del fold
- CSS crítico inline en `<head>` si es necesario para el hero
- Sin librerías JS de terceros (todo vanilla)
- `sitemap.xml` con todas las URLs
- `robots.txt` básico permitiendo todo excepto `/assets/`
