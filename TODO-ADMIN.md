# TODO — Admin Tienda Fronet

## Paso 1: Actualizar estructura de datos (productos.js) ✅ COMPLETADO
- [x] Agregar campo `imagenes: []` a cada producto (array con la imagen actual)
- [x] Mantener campo `imagen` intacto para retrocompatibilidad

## Paso 2: Actualizar tienda.js (retrocompatibilidad) ✅ COMPLETADO
- [x] `crearProductCard()` → usar `imagenes[0] || imagen`
- [x] `mostrarResultadosBusqueda()` → usar `imagenes[0] || imagen`
- [x] `agregarAlCarrito()` → guardar `imagen: imagenes[0] || imagen`

## Paso 3: Crear admin-tienda.html ✅ COMPLETADO
- [x] Estructura HTML completa con topbar simplificado
- [x] Login simple con contraseña
- [x] Tabla de productos con búsqueda y filtros
- [x] Modal/formulario para crear/editar producto
- [x] Upload de hasta 3 imágenes con preview
- [x] Botones exportar/importar JSON
- [x] Confirm dialog para eliminar
- [x] Toast notifications

## Paso 4: Crear assets/css/pages/admin.css ✅ COMPLETADO
- [x] Estilos del panel de administración
- [x] Tabla responsive
- [x] Modal de formulario
- [x] Upload de imágenes con preview
- [x] Login screen
- [x] Toast notifications
- [x] Confirm dialog
- [x] Stats cards
- [x] Responsive (1024px, 768px, 480px)

## Paso 5: Crear assets/js/admin-tienda.js ✅ COMPLETADO
- [x] Autenticación simple (localStorage)
- [x] CRUD de productos (localStorage + merge con estáticos)
- [x] Gestión de imágenes (hasta 3, preview, base64/URL)
- [x] Exportar JSON
- [x] Importar JSON
- [x] Renderizado de tabla con filtros
- [x] Formulario con validación
- [x] Duplicar producto
- [x] Specs tags input
- [x] Subcategorías dinámicas por categoría
- [x] Toggle precio original cuando es oferta

## Paso 6: Verificación ⏳ PENDIENTE
- [ ] Tienda existente sigue funcionando sin cambios
- [ ] Admin carga productos estáticos + localStorage
- [ ] Crear producto nuevo funciona
- [ ] Editar producto existente funciona
- [ ] Eliminar producto funciona
- [ ] Duplicar producto funciona
- [ ] Imágenes se muestran correctamente
- [ ] Exportar/importar JSON funciona
- [ ] Login/logout funciona
- [ ] Filtros y búsqueda funcionan
