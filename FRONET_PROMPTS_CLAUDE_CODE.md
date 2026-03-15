# PROMPTS PARA CLAUDE CODE — FRONET TECNOLOGÍA SRL
## Instrucciones de uso
Ejecuta cada prompt **en orden** en Claude Code dentro de la carpeta del proyecto `fronet/`.
Antes de cualquier prompt de página, ejecuta primero el **PROMPT 0** (setup) y el **PROMPT 1** (CSS global).

---

## PROMPT 0 — SETUP INICIAL DEL PROYECTO

```
Crea la estructura base de carpetas y archivos vacíos para el proyecto web de Fronet Tecnología SRL.

Estructura requerida:
fronet/
├── index.html
├── nosotros.html
├── servicios.html
├── impresoras.html
├── ofertas.html
├── clientes.html
├── soporte.html
├── contacto.html
├── tienda.html
├── politicas.html
├── sitemap.xml
├── robots.txt
├── assets/
│   ├── css/
│   │   ├── main.css
│   │   ├── components.css
│   │   └── pages/
│   │       ├── home.css
│   │       ├── servicios.css
│   │       ├── tienda.css
│   │       └── contacto.css
│   ├── js/
│   │   ├── main.js
│   │   └── forms.js
│   └── img/
│       └── .gitkeep

Genera también:
- robots.txt básico que permita todo y apunte al sitemap
- sitemap.xml con todas las URLs del dominio https://www.fronetrd.com
```

---

## PROMPT 1 — CSS GLOBAL (main.css + components.css)

```
Crea los archivos CSS globales para el proyecto web de Fronet Tecnología SRL.
Stack: HTML5 + CSS3 puro, sin frameworks. Diseño corporativo, limpio, fondo blanco.

=== assets/css/main.css ===
Incluye:

1. VARIABLES CSS:
:root {
  --cyan: #00C2E0;
  --cyan-dark: #009AB3;
  --navy: #1B2B8A;
  --navy-dark: #121E63;
  --gold: #F5A623;
  --gold-dark: #D4881A;
  --white: #FFFFFF;
  --gray-50: #F8F9FB;
  --gray-100: #EEF0F5;
  --gray-200: #D8DCE8;
  --gray-400: #9099B0;
  --gray-700: #3A4160;
  --gray-900: #111827;
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --shadow-sm: 0 1px 4px rgba(27,43,138,.06);
  --shadow-md: 0 4px 20px rgba(27,43,138,.10);
  --shadow-lg: 0 12px 40px rgba(27,43,138,.15);
  --font-display: 'Barlow Condensed', sans-serif;
  --font-body: 'DM Sans', sans-serif;
  --transition: .25s cubic-bezier(.4,0,.2,1);
}

2. RESET moderno (box-sizing, margin, padding, img display:block)

3. TIPOGRAFÍA:
- Clases: .display-xl, .display-lg, .display-md
- Usando Barlow Condensed para headings y DM Sans para body
- Tamaños responsivos con clamp()
- Clases de color: .text-muted, .text-navy, .text-cyan, .text-gold, .text-white

4. LAYOUT UTILITIES:
- .container (max-width: 1200px, padding-inline: 1.5rem)
- .container--wide (max-width: 1400px)
- .section (padding-block: 5rem)
- .section--sm (padding-block: 3rem)
- .grid-2, .grid-3, .grid-4 (CSS Grid responsivos)
- .flex-center, .flex-between
- .gap-1, .gap-2, .gap-3

5. ANIMACIONES:
- .fade-up (opacidad 0 + translateY 24px → visible con clase .visible)
- @keyframes pulse (para el dot del hero label)
- @keyframes float (para tarjetas flotantes)
- @keyframes underline-in (para subrayado animado en hero)

6. RESPONSIVE BREAKPOINTS:
- 1024px: grid-4 → 2 cols, hero 1 col
- 768px: ocultar navbar desktop, mostrar hamburger
- 480px: stack todo a 1 col

=== assets/css/components.css ===
Incluye estilos completos para:

1. ANNOUNCEMENT BAR — fondo navy, texto blanco pequeño, links en cyan
2. NAVBAR — sticky, logo izq, nav centro, acciones der, dropdown para Tienda, mobile hamburger
3. BOTONES — .btn base + .btn--primary (navy) + .btn--cyan + .btn--gold + .btn--outline + .btn--outline-white + modificadores .btn--lg .btn--sm
4. TAGS/BADGES — .tag .tag--cyan .tag--gold .tag--navy
5. SECTION HEADER — centrado, con tag + h2 + p
6. SERVICE CARD — tarjeta blanca con borde top animado al hover, ícono, título, descripción, link
7. FEATURES BAR — fondo navy, 4 items con ícono + título + subtítulo
8. PRODUCT CARD — imagen cuadrada, badge, brand, nombre, footer con CTA
9. TESTIMONIAL CARD — estrellas gold, texto, autor con avatar circular de color
10. CTA SOPORTE — sección navy con grid 2 cols, título con span cyan, subtítulo
11. CONTACT STRIP — fondo cyan, flex-between, título + items de contacto
12. FOOTER — 4 columnas, fondo gray-900, social links, payment badges, bottom bar
13. WHATSAPP FLOAT — fixed bottom-right, verde #25D366, animación float
14. MOBILE NAV — full-screen overlay, links grandes Barlow Condensed
15. PAGE HERO (pequeño) — para páginas internas, fondo navy, título centrado, breadcrumb
16. FORMULARIOS — inputs, textarea, select estilizados con bordes navy al focus, estados de error
```

---

## PROMPT 2 — JAVASCRIPT (main.js + forms.js)

```
Crea los archivos JavaScript para el proyecto web de Fronet Tecnología SRL.
Vanilla JS puro, sin dependencias externas.

=== assets/js/main.js ===
Implementa:

1. NAVBAR STICKY SHADOW
   - Al hacer scroll > 10px, agregar clase .scrolled al #navbar
   - La clase agrega box-shadow más pronunciado

2. MOBILE MENU
   - Toggle del #mobileNav al click en #navToggle
   - Agregar clase .open al .mobile-nav
   - Cambiar aria-expanded en el botón
   - Cerrar al click en #navClose o al hacer click fuera del menú
   - Bloquear scroll del body mientras el menú está abierto

3. SCROLL ANIMATIONS
   - IntersectionObserver para todos los elementos .fade-up
   - Al entrar en viewport: agregar clase .visible
   - threshold: 0.15
   - Respetar prefers-reduced-motion

4. DROPDOWN NAVBAR (Tienda)
   - En desktop (>768px): hover nativo via CSS ya funciona
   - En mobile: el link de Tienda en mobile-nav va directo a tienda.html (sin dropdown)

5. AÑO DINÁMICO EN FOOTER
   - Actualizar automáticamente el año en el copyright del footer
   - Selector: .footer__year

6. SMOOTH SCROLL
   - Para todos los links internos que empiecen con #

=== assets/js/forms.js ===
Implementa validación y manejo para TODOS los formularios del sitio:

1. FUNCIONES DE VALIDACIÓN:
   - validateRequired(field) — no vacío
   - validateEmail(field) — formato email
   - validatePhone(field) — formato teléfono RD (opcional)
   - showError(field, message) — muestra error bajo el campo
   - clearError(field) — limpia error
   - showSuccess(form, message) — muestra mensaje de éxito

2. FORMULARIO DE CONTACTO (#form-contacto)
   Campos: nombre, apellido, email, asunto, mensaje
   Al submit: validar todos, mostrar loading, mostrar mensaje de éxito

3. FORMULARIO DE SOPORTE (#form-soporte)
   Campos: nombre_completo, email (requerido), empresa, telefono, asunto, inconveniente
   Al submit: validar requeridos, mostrar loading, mostrar éxito

4. FORMULARIO DE EMPLEOS (#form-empleos)
   Campos: nombre, apellido, email, telefono, puesto, fecha_inicio, cv_link
   Al submit: validar requeridos, mostrar éxito

5. FORMULARIO DE BOLETÍN (#form-boletin)
   Solo email. Validar formato y mostrar mensaje de éxito inline.

Nota: Los formularios NO envían a ningún backend todavía.
Dejar una constante FORM_ENDPOINT = '' al inicio del archivo para configurar después.
Al submit, si FORM_ENDPOINT está vacío, simular éxito con setTimeout de 1.5s.
```

---

## PROMPT 3 — index.html (PÁGINA DE INICIO)

```
Crea el archivo index.html completo para Fronet Tecnología SRL.
Lee el archivo FRONET_SKILL.md del proyecto para entender toda la información del cliente antes de generar el código.

REQUISITOS TÉCNICOS:
- HTML5 semántico, lang="es"
- Importar: assets/css/main.css, assets/css/components.css, assets/css/pages/home.css
- Importar: assets/js/main.js, assets/js/forms.js (al final del body)
- Google Fonts: Barlow Condensed (600,700,800) + DM Sans (400,500,600)
- Logo: assets/img/logo-fronet.png (en navbar) | assets/img/logo-fronet-white.png (en footer)
- Todos los meta SEO, Open Graph y Schema.org LocalBusiness

SECCIONES EN ORDEN:
1. Announcement bar (navy) — "Envíos disponibles · Pagos contra entrega" + tel + email
2. Navbar — sticky, con dropdown Tienda, botón Soporte Técnico
3. Hero — H1: "Soluciones Tecnológicas para tu Negocio", subtítulo, 2 CTAs, stats (500+ clientes / 24/7 / 5+ años), tarjeta flotante con lista de servicios, badges flotantes
4. Features bar (navy) — 4 ventajas con SVG icons: Servicio a domicilio | Asistencia 24/7 | Envíos disponibles | Garantía incluida
5. Servicios (gray-50) — 6 service-cards:
   - Renta de Impresoras (icon printer)
   - Soporte Técnico (icon monitor)
   - Instalación CCTV (icon camera)
   - Reparación de Laptops (icon laptop, incluir badge "20% descuento")
   - Instalación de Redes (icon network)
   - Técnico de Impresoras (icon tool)
6. Marcas (white) — HP | Canon | Sharp | Xerox | Epson como brand pills
7. Impresoras & Escanners (white) — Split: texto con 3 features checklist + botón | lado derecho con visual decorativo (SVG o CSS)
8. CTA Soporte (navy) — Título + subtítulo + botón soporte + botón WhatsApp
9. Testimonios (gray-50) — 3 testimonial-cards con avatares de color
10. Contact strip (cyan) — tel + email + dirección
11. Footer completo (gray-900)
12. WhatsApp float (fixed)

Todos los elementos debajo del hero deben tener clase fade-up para animación de entrada.
Usar SVG icons inline (no Font Awesome ni librerías externas).
```

---

## PROMPT 4 — nosotros.html

```
Crea nosotros.html para Fronet Tecnología SRL.
Lee FRONET_SKILL.md para los datos del cliente.

Mismos imports CSS/JS que index.html.

SECCIONES:
1. Announcement bar
2. Navbar
3. Page hero (navy, pequeño) — "Sobre Nosotros" con breadcrumb: Inicio > Nosotros
4. Sección principal (white, grid-2):
   - Izquierda: imagen placeholder (div con background gray-100, aspect-ratio 4/3, border-radius lg)
   - Derecha: texto completo de la empresa (descripción de quiénes son, qué hacen)
5. Misión / Visión / Valores (gray-50) — 3 tarjetas en grid-3, cada una con ícono, título y texto
   - Misión: "Empoderar a nuestros clientes a través de soluciones tecnológicas de vanguardia..."
   - Visión: "Convertirnos en el socio tecnológico preferido en América Latina..."
   - Valores: Innovación Constante | Confianza y Cercanía | Excelencia como Norma
6. Sección empleos (white):
   - Título: "Sé parte de nuestro equipo"
   - Subtítulo: "Envíanos tus datos para que formes parte de Fronet"
   - Formulario id="form-empleos": nombre, apellido, email, teléfono, select de puesto (Técnico / Ventas / Administración / Otro), fecha de inicio disponible, input URL para CV
   - Botón submit: "Enviar solicitud"
7. CTA Soporte strip
8. Footer
9. WhatsApp float

SEO title: "Nosotros | Fronet Tecnología SRL — Tu Aliado en Tecnología"
```

---

## PROMPT 5 — servicios.html

```
Crea servicios.html para Fronet Tecnología SRL.
Lee FRONET_SKILL.md para los datos del cliente.

Mismos imports CSS/JS que index.html.

SECCIONES:
1. Announcement bar
2. Navbar
3. Page hero (navy) — "Nuestros Servicios" + subtítulo breve
4. Para cada uno de los 6 servicios, crear una sección alternada (white/gray-50) con grid-2:
   - Imagen placeholder izquierda | Contenido derecha (o viceversa alternando)
   - Ícono SVG grande (48px) en color cyan/navy/gold
   - Título del servicio como h2
   - Descripción completa
   - Lista de 3-4 características con checkmarks cyan
   - Botón "Solicitar este servicio" → contacto.html
   - ID de anchor en cada sección

   SERVICIO 1 id="renta-impresoras": Renta y Venta de Impresoras
   SERVICIO 2 id="soporte-computadoras": Servicio Técnico para Computadoras
   SERVICIO 3 id="cctv": Instalación de CCTV
   SERVICIO 4 id="reparacion-laptops": Reparación de Laptops (+ badge gold "20% de descuento")
   SERVICIO 5 id="redes": Instalación de Redes
   SERVICIO 6 id="tecnico-impresoras": Servicio Técnico de Impresoras

5. CTA Soporte (navy)
6. Footer
7. WhatsApp float

SEO title: "Servicios Tecnológicos | Fronet Tecnología SRL — Santo Domingo"
```

---

## PROMPT 6 — soporte.html

```
Crea soporte.html para Fronet Tecnología SRL.
Lee FRONET_SKILL.md.

SECCIONES:
1. Announcement bar
2. Navbar
3. Page hero (navy) — "Soporte Técnico FRONET SRL" + "Nuestros técnicos están listos para ayudarte"
4. Sección principal (grid-2, white):
   - Izquierda: Formulario id="form-soporte"
     Campos: Nombre Completo*, Email*, Nombre de compañía, Teléfono, Asunto, 
     Textarea "¿Cuál es su inconveniente?" (requerido)
     Botón "Enviar solicitud"
   - Derecha: Info de contacto directo
     - Teléfono clicable
     - Email clicable
     - Horario de atención
     - Tiempo estimado de respuesta: "Respondemos en menos de 2 horas"
5. FAQ Acordeón (gray-50) — Preguntas frecuentes de soporte, mínimo 6:
   - ¿Cuánto tiempo tarda una reparación?
   - ¿Ofrecen garantía en las reparaciones?
   - ¿Hacen servicio a domicilio?
   - ¿Cuál es el costo del diagnóstico?
   - ¿Qué marcas de impresoras reparan?
   - ¿Pueden recuperar mis datos si se dañó el disco?
   El acordeón debe funcionar con JS puro (toggle de clase .open)
6. Footer
7. WhatsApp float

SEO title: "Soporte Técnico | Fronet Tecnología SRL — Santo Domingo"
```

---

## PROMPT 7 — contacto.html

```
Crea contacto.html para Fronet Tecnología SRL.
Lee FRONET_SKILL.md.

SECCIONES:
1. Announcement bar
2. Navbar
3. Page hero (navy, pequeño) — "Contáctanos"
4. Grid-2 principal (white):
   - Izquierda: Formulario id="form-contacto"
     Campos: Nombre, Apellido, Email, Asunto (select: Consulta general / Soporte técnico / Cotización / Empleos / Otro), Mensaje textarea
     Botón "Enviar mensaje"
   - Derecha: 
     - Horario: Lun–Vie 8:00am–5:00pm | Sáb 8:00am–12:00pm
     - Dirección: Calle Penetración, Santo Domingo Norte
     - Tel: +1 829-398-3616
     - Email: info@fronetrd.com
     - Redes sociales: Facebook + Instagram (links reales)
5. Mapa (white) — iframe de Google Maps embed:
   "Calle Penetración, Santo Domingo Norte, República Dominicana"
   Usar: https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d...
   (usar un embed genérico de Santo Domingo Norte si no se tiene el exacto)
   border-radius: var(--radius-lg), width: 100%, height: 400px
6. Boletín (gray-50) — "Suscríbete para recibir novedades y ofertas"
   Formulario id="form-boletin": input email + botón "Suscribirme"
7. Footer
8. WhatsApp float

SEO title: "Contacto | Fronet Tecnología SRL — Santo Domingo, Rep. Dom."
```

---

## PROMPT 8 — tienda.html (PLACEHOLDER)

```
Crea tienda.html para Fronet Tecnología SRL como página placeholder.
Esta página estará "en construcción" pero debe verse profesional.

SECCIONES:
1. Announcement bar
2. Navbar
3. Hero placeholder (navy):
   - Ícono grande de tienda
   - Título: "Nuestra Tienda Online"
   - Subtítulo: "Estamos preparando algo increíble para ti. Mientras tanto, escríbenos y te ayudamos con lo que necesitas."
   - Badge gold: "Próximamente"
4. Categorías (white) — Grid de 8 tarjetas, una por categoría:
   Laptops | Computadoras | Servidores | Monitores | Mobiliario de Oficina | Periféricos | Audiculares | Consumibles
   Cada tarjeta: ícono SVG grande, nombre, badge "Próximamente", botón "Consultar vía WhatsApp" → wa.me/18293983616
5. CTA WhatsApp (cyan) — "¿Ya sabes lo que necesitas? Escríbenos ahora"
   Botón verde WhatsApp grande
6. Footer
7. WhatsApp float

NOTA en el código: Dejar comentario <!-- TODO: Integrar catálogo de productos en fase 2 -->

SEO title: "Tienda | Fronet Tecnología SRL — Próximamente"
```

---

## PROMPT 9 — impresoras.html

```
Crea impresoras.html para Fronet Tecnología SRL.
Lee FRONET_SKILL.md.

SECCIONES:
1. Announcement bar
2. Navbar
3. Page hero (navy) — "Impresoras & Escanners" + subtítulo: "Las mejores marcas al mejor precio"
4. Filtros de categoría (white) — pills/tabs: Todas | Tinta | Tóner | Sistemas Continuos | Escanners
5. Grid de productos placeholder (gray-50) — 8 tarjetas product-card con:
   - Imagen placeholder (div con bg gray-100, ícono SVG de impresora centrado)
   - Marca (HP, Canon, Xerox, Epson, Sharp — rotar)
   - Nombre del producto (ej: "Impresora HP LaserJet Pro")
   - Badge de categoría
   - Botón "Consultar precio" → wa.me/18293983616
6. Sección "¿Comprar o Rentar?" (white) — Comparativa en 2 columnas:
   - Compra: ventajas y para quién es ideal
   - Renta: ventajas y para quién es ideal (incluir "mantenimiento incluido")
   Botón: "Conocer plan de renta"
7. Marcas (gray-50) — HP | Canon | Sharp | Xerox | Epson como brand pills
8. CTA contacto (navy)
9. Footer
10. WhatsApp float

SEO title: "Impresoras y Escanners | Fronet Tecnología SRL — Santo Domingo"
```

---

## PROMPT 10 — ofertas.html

```
Crea ofertas.html para Fronet Tecnología SRL.
Lee FRONET_SKILL.md.

SECCIONES:
1. Announcement bar
2. Navbar
3. Hero (gold/navy gradient) — "Ofertas Especiales" + "Las mejores ofertas en tecnología para tu negocio"
4. Grid de productos en oferta (gray-50) — 6 product-cards con:
   - Badge rojo "OFERTA" o "−20%"
   - Imagen placeholder
   - Nombre del producto
   - Precio tachado + precio de oferta (usar texto placeholder como "Desde RD$X,XXX")
   - Botón "Aprovechar oferta" → WhatsApp
5. Banner intermedio (navy) — "¿Buscas una oferta específica? Consúltanos"
6. CTA WhatsApp
7. Footer
8. WhatsApp float

SEO title: "Ofertas en Tecnología | Fronet Tecnología SRL — Santo Domingo"
```

---

## PROMPT 11 — clientes.html

```
Crea clientes.html para Fronet Tecnología SRL.
Lee FRONET_SKILL.md.

SECCIONES:
1. Announcement bar
2. Navbar
3. Page hero (navy) — "Nuestros Clientes" + "Empresas y personas que confían en Fronet"
4. Stats (white) — 4 números destacados en grid:
   - 500+ Clientes atendidos
   - 5+ Años de experiencia
   - 24/7 Horas de soporte
   - 98% Satisfacción
5. Logos de clientes (gray-50) — Grid de 8 placeholders (divs grises con texto "[Logo cliente]")
6. Testimonios (white) — 6 testimonial-cards en grid-3 con:
   - Estrellas (5/5) en gold
   - Texto del testimonio (inventar testimonios realistas de empresas dominicanas)
   - Avatar con iniciales en color navy/cyan
   - Nombre + empresa + cargo
7. CTA (navy) — "¿Tu empresa quiere ser parte de nuestra lista de clientes?"
8. Footer
9. WhatsApp float

SEO title: "Nuestros Clientes | Fronet Tecnología SRL — Casos de Éxito"
```

---

## PROMPT 12 — politicas.html

```
Crea politicas.html para Fronet Tecnología SRL.
Lee FRONET_SKILL.md.

SECCIONES:
1. Announcement bar
2. Navbar
3. Page hero (navy, pequeño) — "Políticas y Términos"
4. Tabs de navegación (white) — JavaScript puro para cambiar sección activa:
   Tab 1: "Envío y Devoluciones"
   Tab 2: "Términos y Condiciones"
   Tab 3: "Métodos de Pago"
   Tab 4: "Preguntas Frecuentes"
5. Contenido por tab:
   - ENVÍO Y DEVOLUCIONES: Política de envíos, plazos, zonas de cobertura, proceso de devolución
   - TÉRMINOS Y CONDICIONES: Uso del sitio, responsabilidades, propiedad intelectual
   - MÉTODOS DE PAGO: Visa, Mastercard, American Express, Diners Club, PayPal (con logos SVG/text badges)
   - FAQ: 8 preguntas frecuentes generales sobre compra, garantía, soporte
6. Footer
7. WhatsApp float

Los contenidos deben ser texto realista para una empresa de tecnología dominicana.
SEO title: "Políticas | Fronet Tecnología SRL"
```

---

## PROMPT 13 — VERIFICACIÓN FINAL

```
Realiza una revisión de calidad del proyecto Fronet Tecnología SRL.

Verifica en TODOS los archivos HTML:
1. Que todos los links internos apuntan a páginas existentes (index.html, nosotros.html, servicios.html, etc.)
2. Que los IDs de anchor en servicios.html (#renta-impresoras, #soporte-computadoras, #cctv, #reparacion-laptops, #redes, #tecnico-impresoras) existen y los links del navbar/footer los usan correctamente
3. Que el link del WhatsApp float y todos los botones de WhatsApp usan https://wa.me/18293983616
4. Que todos los <img> tienen atributo alt descriptivo en español
5. Que el footer de cada página tiene el año actualizado dinámicamente via .footer__year
6. Que todos los formularios tienen los IDs correctos (#form-contacto, #form-soporte, #form-empleos, #form-boletin)
7. Que el archivo assets/js/forms.js maneja los 4 formularios correctamente
8. Que sitemap.xml incluye todas las páginas
9. Que no hay referencias a assets que no existen (excepto las imágenes en assets/img/ que el cliente proveerá)

Genera un reporte de lo que revisaste y corrige cualquier inconsistencia encontrada.
```

---

## NOTAS FINALES PARA CLAUDE CODE

- Siempre leer `FRONET_SKILL.md` antes de generar cualquier página
- El logo real está en `assets/img/logo-fronet.png` (fondo negro en el PNG original — el cliente debe proveer versión transparente)
- La versión blanca del logo para footer se genera usando `filter: brightness(0) invert(1)` en CSS como fallback hasta que el cliente provea el archivo
- Todos los precios en tienda/ofertas son PLACEHOLDER — el cliente los llenará
- Los formularios no tienen backend todavía — simular éxito localmente
- Las imágenes de productos son PLACEHOLDER — usar divs con background gradient + ícono SVG
