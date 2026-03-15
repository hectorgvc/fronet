# Fragmentos HTML de Imágenes — Fronet Tecnología SRL

> Generado por FRONET_IMAGES_SKILL  
> Pega cada fragmento en la sección correspondiente de cada página HTML.  
> ⚠️ Ejecuta primero `bash descargar-imagenes.sh` para tener las imágenes en `assets/img/`

---

## INDEX.HTML — INICIO

### Hero Background (`hero-bg.jpg`)
Reemplaza el `<section class="hero">` — agregar como fondo CSS o dentro del contenedor:
```html
<!-- Opción CSS (recomendada): agregar en home.css -->
.hero {
  background-image: url('../img/hero-bg.jpg');
  background-size: cover;
  background-position: center;
}

<!-- Opción HTML: dentro de .hero como imagen de fondo -->
<img
  src="assets/img/hero-bg.jpg"
  alt="Fondo tecnológico abstracto azul"
  width="1920"
  height="1080"
  loading="eager"
  class="hero__bg-img"
  aria-hidden="true"
/>
```

### Hero Card (`hero-card.jpg`)
Reemplaza el `<div aria-hidden="true" style="min-height:280px;...">` en la sección de Impresoras & Escanners:
```html
<img
  src="assets/img/hero-card.jpg"
  alt="Profesional trabajando en computadora en oficina moderna"
  width="800"
  height="800"
  loading="eager"
  class="hero__card-img"
  style="width:100%; height:100%; object-fit:cover; border-radius:var(--radius-lg);"
/>
```

### Cards de Servicios — Sección "Lo que hacemos"
Agregar dentro de cada `<article class="service-card">`:

```html
<!-- Renta de Impresoras -->
<article class="service-card fade-up">
  <img
    src="assets/img/service-renta-impresora.jpg"
    alt="Impresora de oficina moderna"
    width="600"
    height="600"
    loading="lazy"
    class="service-card__img"
  />
  <h3>Renta de Impresoras</h3>
  <p>Soluciones por contrato.</p>
</article>

<!-- Soporte Técnico -->
<article class="service-card fade-up">
  <img
    src="assets/img/service-soporte.jpg"
    alt="Técnico reparando computadora"
    width="600"
    height="600"
    loading="lazy"
    class="service-card__img"
  />
  <h3>Soporte Técnico</h3>
  <p>Asistencia especializada.</p>
</article>

<!-- Instalación CCTV -->
<article class="service-card fade-up">
  <img
    src="assets/img/service-cctv.jpg"
    alt="Cámara de seguridad instalada en pared"
    width="600"
    height="600"
    loading="lazy"
    class="service-card__img"
  />
  <h3>Instalación CCTV</h3>
  <p>Monitoreo y seguridad.</p>
</article>

<!-- Reparación de Laptops -->
<article class="service-card fade-up">
  <img
    src="assets/img/service-laptop.jpg"
    alt="Laptop abierta sobre escritorio"
    width="600"
    height="600"
    loading="lazy"
    class="service-card__img"
  />
  <h3>Reparación de Laptops</h3>
  <p><span class="tag tag--gold">20% descuento</span></p>
</article>

<!-- Instalación de Redes -->
<article class="service-card fade-up">
  <img
    src="assets/img/service-redes.jpg"
    alt="Cables de red y rack de servidores"
    width="600"
    height="600"
    loading="lazy"
    class="service-card__img"
  />
  <h3>Instalación de Redes</h3>
  <p>Infraestructura robusta.</p>
</article>

<!-- Técnico de Impresoras -->
<article class="service-card fade-up">
  <img
    src="assets/img/service-tecnico-impresora.jpg"
    alt="Técnico revisando impresora"
    width="600"
    height="600"
    loading="lazy"
    class="service-card__img"
  />
  <h3>Técnico de Impresoras</h3>
  <p>Mantenimiento y reparación.</p>
</article>
```

### Sección Impresoras & Escanners (`impresora-seccion.jpg`)
Reemplaza el `<div aria-hidden="true" style="min-height:280px;...">` en la sección grid-2:
```html
<div class="fade-up">
  <img
    src="assets/img/impresora-seccion.jpg"
    alt="Impresora profesional HP en oficina"
    width="1200"
    height="800"
    loading="lazy"
    style="width:100%; height:100%; object-fit:cover; border-radius:var(--radius-lg); min-height:280px;"
  />
</div>
```

---

## NOSOTROS.HTML

### Sección Principal del Equipo (`about-team.jpg`)
```html
<img
  src="assets/img/about-team.jpg"
  alt="Equipo de Fronet Tecnología trabajando en oficina moderna"
  width="1200"
  height="800"
  loading="lazy"
  style="width:100%; height:auto; border-radius:var(--radius-lg); object-fit:cover;"
/>
```

### Historia / Oficina (`about-office.jpg`)
```html
<img
  src="assets/img/about-office.jpg"
  alt="Interior de tienda de tecnología Fronet"
  width="1200"
  height="800"
  loading="lazy"
  style="width:100%; height:auto; border-radius:var(--radius-lg); object-fit:cover;"
/>
```

### Sección Empleos (`empleos.jpg`)
```html
<img
  src="assets/img/empleos.jpg"
  alt="Ambiente de trabajo profesional en Fronet"
  width="1200"
  height="800"
  loading="lazy"
  style="width:100%; height:auto; border-radius:var(--radius-lg); object-fit:cover;"
/>
```

---

## SERVICIOS.HTML

Reemplaza cada `<div aria-hidden="true" style="min-height:300px; background:var(--gray-100)...">` con el `<img>` correspondiente:

### 1. Renta de Impresoras (`srv-renta-impresora.jpg`)
```html
<div class="fade-up">
  <img
    src="assets/img/srv-renta-impresora.jpg"
    alt="Impresora multifuncional de oficina corporativa"
    width="1200"
    height="800"
    loading="lazy"
    style="width:100%; min-height:300px; object-fit:cover; border-radius:var(--radius-lg);"
  />
</div>
```

### 2. Soporte Técnico Computadoras (`srv-soporte-pc.jpg`)
```html
<div class="fade-up">
  <img
    src="assets/img/srv-soporte-pc.jpg"
    alt="Técnico reparando PC con componentes visibles"
    width="1200"
    height="800"
    loading="lazy"
    style="width:100%; min-height:300px; object-fit:cover; border-radius:var(--radius-lg);"
  />
</div>
```

### 3. Instalación CCTV (`srv-cctv-instalacion.jpg`)
```html
<div class="fade-up">
  <img
    src="assets/img/srv-cctv-instalacion.jpg"
    alt="Instalación profesional de cámara de seguridad"
    width="1200"
    height="800"
    loading="lazy"
    style="width:100%; min-height:300px; object-fit:cover; border-radius:var(--radius-lg);"
  />
</div>
```

### 4. Reparación de Laptops (`srv-reparacion-laptop.jpg`)
```html
<div class="fade-up">
  <img
    src="assets/img/srv-reparacion-laptop.jpg"
    alt="Laptop abierta siendo reparada por técnico"
    width="1200"
    height="800"
    loading="lazy"
    style="width:100%; min-height:300px; object-fit:cover; border-radius:var(--radius-lg);"
  />
</div>
```

### 5. Instalación de Redes (`srv-redes.jpg`)
```html
<div class="fade-up">
  <img
    src="assets/img/srv-redes.jpg"
    alt="Sala de servidores con rack de red e infraestructura"
    width="1200"
    height="800"
    loading="lazy"
    style="width:100%; min-height:300px; object-fit:cover; border-radius:var(--radius-lg);"
  />
</div>
```

### 6. Técnico de Impresoras (`srv-tecnico-impresora.jpg`)
```html
<div class="fade-up">
  <img
    src="assets/img/srv-tecnico-impresora.jpg"
    alt="Técnico realizando mantenimiento activo de impresora"
    width="1200"
    height="800"
    loading="lazy"
    style="width:100%; min-height:300px; object-fit:cover; border-radius:var(--radius-lg);"
  />
</div>
```

---

## IMPRESORAS.HTML

### Hero (`impresoras-hero.jpg`)
```html
<img
  src="assets/img/impresoras-hero.jpg"
  alt="Impresora profesional sobre fondo neutro"
  width="1200"
  height="800"
  loading="eager"
  style="width:100%; height:auto; border-radius:var(--radius-lg); object-fit:cover;"
/>
```

### Productos — Cards de impresoras y escanners
```html
<!-- Impresora de Tinta 1 -->
<img
  src="assets/img/producto-impresora-tinta-1.jpg"
  alt="Impresora de tinta compacta"
  width="600"
  height="600"
  loading="lazy"
  style="width:100%; aspect-ratio:1/1; object-fit:cover; border-radius:var(--radius-md);"
/>

<!-- Impresora de Tinta 2 -->
<img
  src="assets/img/producto-impresora-tinta-2.jpg"
  alt="Impresora de tinta para hogar u oficina pequeña"
  width="600"
  height="600"
  loading="lazy"
  style="width:100%; aspect-ratio:1/1; object-fit:cover; border-radius:var(--radius-md);"
/>

<!-- Impresora Láser 1 -->
<img
  src="assets/img/producto-impresora-laser-1.jpg"
  alt="Impresora láser negra de oficina"
  width="600"
  height="600"
  loading="lazy"
  style="width:100%; aspect-ratio:1/1; object-fit:cover; border-radius:var(--radius-md);"
/>

<!-- Impresora Láser 2 -->
<img
  src="assets/img/producto-impresora-laser-2.jpg"
  alt="Impresora láser de gran formato"
  width="600"
  height="600"
  loading="lazy"
  style="width:100%; aspect-ratio:1/1; object-fit:cover; border-radius:var(--radius-md);"
/>

<!-- Sistema de Tinta Continua -->
<img
  src="assets/img/producto-sistema-continuo.jpg"
  alt="Sistema de tinta continua con depósitos visibles"
  width="600"
  height="600"
  loading="lazy"
  style="width:100%; aspect-ratio:1/1; object-fit:cover; border-radius:var(--radius-md);"
/>

<!-- Escáner 1 -->
<img
  src="assets/img/producto-escanner-1.jpg"
  alt="Escáner de escritorio plano"
  width="600"
  height="600"
  loading="lazy"
  style="width:100%; aspect-ratio:1/1; object-fit:cover; border-radius:var(--radius-md);"
/>

<!-- Escáner 2 -->
<img
  src="assets/img/producto-escanner-2.jpg"
  alt="Escáner multifuncional de documentos"
  width="600"
  height="600"
  loading="lazy"
  style="width:100%; aspect-ratio:1/1; object-fit:cover; border-radius:var(--radius-md);"
/>
```

### Sección Renta vs Compra (`impresora-renta-oficina.jpg`)
```html
<img
  src="assets/img/impresora-renta-oficina.jpg"
  alt="Persona usando impresora en entorno de oficina"
  width="1200"
  height="800"
  loading="lazy"
  style="width:100%; height:auto; border-radius:var(--radius-lg); object-fit:cover;"
/>
```

---

## OFERTAS.HTML

```html
<!-- Laptop en oferta -->
<img
  src="assets/img/oferta-laptop.jpg"
  alt="Laptop moderna sobre fondo blanco"
  width="600"
  height="600"
  loading="lazy"
  style="width:100%; aspect-ratio:1/1; object-fit:cover; border-radius:var(--radius-md);"
/>

<!-- Impresora en oferta -->
<img
  src="assets/img/oferta-impresora.jpg"
  alt="Impresora compacta en oferta"
  width="600"
  height="600"
  loading="lazy"
  style="width:100%; aspect-ratio:1/1; object-fit:cover; border-radius:var(--radius-md);"
/>

<!-- Monitor en oferta -->
<img
  src="assets/img/oferta-monitor.jpg"
  alt="Monitor LED de oficina"
  width="600"
  height="600"
  loading="lazy"
  style="width:100%; aspect-ratio:1/1; object-fit:cover; border-radius:var(--radius-md);"
/>

<!-- Periférico en oferta -->
<img
  src="assets/img/oferta-periferico.jpg"
  alt="Set de teclado y mouse inalámbrico"
  width="600"
  height="600"
  loading="lazy"
  style="width:100%; aspect-ratio:1/1; object-fit:cover; border-radius:var(--radius-md);"
/>

<!-- Servidor en oferta -->
<img
  src="assets/img/oferta-servidor.jpg"
  alt="Servidor rack para pequeña empresa"
  width="600"
  height="600"
  loading="lazy"
  style="width:100%; aspect-ratio:1/1; object-fit:cover; border-radius:var(--radius-md);"
/>

<!-- Silla en oferta -->
<img
  src="assets/img/oferta-silla.jpg"
  alt="Silla ergonómica de oficina moderna"
  width="600"
  height="600"
  loading="lazy"
  style="width:100%; aspect-ratio:1/1; object-fit:cover; border-radius:var(--radius-md);"
/>
```

---

## CLIENTES.HTML

### Hero (`clientes-hero.jpg`)
```html
<img
  src="assets/img/clientes-hero.jpg"
  alt="Apretón de manos en reunión de negocios — alianza empresarial"
  width="1200"
  height="800"
  loading="eager"
  style="width:100%; height:auto; border-radius:var(--radius-lg); object-fit:cover;"
/>
```

### Avatares de Testimonios
```html
<!-- Testimonio 1 -->
<img
  src="assets/img/avatar-cliente-1.jpg"
  alt="Cliente satisfecho de Fronet"
  width="400"
  height="400"
  loading="lazy"
  style="width:56px; height:56px; border-radius:50%; object-fit:cover;"
/>

<!-- Testimonio 2 -->
<img
  src="assets/img/avatar-cliente-2.jpg"
  alt="Clienta satisfecha de Fronet"
  width="400"
  height="400"
  loading="lazy"
  style="width:56px; height:56px; border-radius:50%; object-fit:cover;"
/>

<!-- Testimonio 3 -->
<img
  src="assets/img/avatar-cliente-3.jpg"
  alt="Cliente empresarial de Fronet"
  width="400"
  height="400"
  loading="lazy"
  style="width:56px; height:56px; border-radius:50%; object-fit:cover;"
/>
```

---

## CONTACTO.HTML

### Hero (`contacto-hero.jpg`)
```html
<img
  src="assets/img/contacto-hero.jpg"
  alt="Agente de atención al cliente en oficina moderna de Fronet"
  width="1200"
  height="800"
  loading="eager"
  style="width:100%; height:auto; border-radius:var(--radius-lg); object-fit:cover;"
/>
```

---

## OG IMAGE — Meta tag (todas las páginas)

El `og-image.jpg` ya está referenciado en el `<head>` de todas las páginas:
```html
<meta property="og:image" content="https://www.fronetrd.com/assets/img/og-image.jpg" />
```
Solo asegúrate de que el archivo `assets/img/og-image.jpg` exista (1200×630px).

---

## Notas de implementación

- Usar `loading="eager"` solo en imágenes above-the-fold (hero, primera imagen visible).
- Usar `loading="lazy"` en todas las demás imágenes.
- Siempre incluir `width` y `height` para evitar layout shift (CLS).
- El atributo `alt` debe describir el contenido de la imagen, no ser decorativo.
- Para imágenes puramente decorativas usar `alt=""` y `aria-hidden="true"`.
