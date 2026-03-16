# TODO — Tienda Fronet (Catálogo + Carrito WhatsApp)

## Archivos a crear/reemplazar:
- [x] 1. `assets/data/productos.js` — Base de datos de productos + config categorías ✅
- [x] 2. `assets/css/pages/tienda.css` — Estilos completos de la tienda ✅ (+ Lucide icon size classes)
- [x] 3. `assets/js/tienda.js` — Lógica del catálogo y carrito ✅ (+ Lucide helpers: lucideIcon(), refreshLucide())
- [x] 4. `tienda.html` — HTML completo de la tienda ✅ (+ Lucide CDN, inline SVGs → data-lucide)

## Migración Lucide Icons:
- [x] Lucide CDN añadido en `<head>` de tienda.html
- [x] 12 inline SVGs estáticos reemplazados con `<i data-lucide="...">` en tienda.html
- [x] 8 emojis de categorías reemplazados con Lucide (printer, monitor, armchair, mouse)
- [x] 6 inline SVGs dinámicos en tienda.js reemplazados con `lucideIcon()` helper
- [x] `refreshLucide()` llamado después de cada mutación DOM dinámica
- [x] `refreshLucide()` llamado al final de DOMContentLoaded para íconos estáticos
- [x] 2 WhatsApp SVGs mantenidos como inline (ícono de marca no disponible en Lucide)
- [x] CSS icon size classes definidas: .icon-16, .icon-18, .icon-20, .icon-24, .icon-28, .icon-48, .icon-56
- [x] Selectores CSS actualizados para `[data-lucide]` además de `svg`

## Verificación final:
- [ ] Carrito persiste en localStorage
- [ ] Botón WhatsApp genera mensaje correcto
- [ ] Filtros de subcategoría funcionan
- [ ] Buscador filtra en tiempo real con debounce
- [ ] Banners con producto sobresaliente
- [ ] Mobile: producto del banner se oculta
- [ ] Botones "Agregar" cambian a "✓ Agregado"
- [ ] Contador del carrito flotante se actualiza
- [ ] Sin errores de consola
