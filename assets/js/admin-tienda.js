/* ============================================
   FRONET TECNOLOGÍA SRL — admin-tienda.js
   Panel de administración de la tienda
   CRUD de productos, imágenes, import/export
   ============================================ */

(function () {
  'use strict';

  /* ═══════════════════════════════════════════
     CONSTANTES
     ═══════════════════════════════════════════ */

  var ADMIN_KEY = 'fronet_admin_auth';
  var PRODUCTOS_KEY = 'fronet_admin_productos';
  var ADMIN_PASSWORD = 'fronet2025'; // Contraseña por defecto

  /* ═══════════════════════════════════════════
     HELPERS
     ═══════════════════════════════════════════ */

  function lucideIcon(name, sizeClass, extraClass) {
    var cls = (sizeClass || '') + (extraClass ? ' ' + extraClass : '');
    return '<i data-lucide="' + name + '"' + (cls ? ' class="' + cls.trim() + '"' : '') + '></i>';
  }

  function refreshLucide() {
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
      lucide.createIcons();
    }
  }

  function escapeHTML(str) {
    if (!str) return '';
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function generarId(categoria) {
    var prefijos = {
      impresoras: 'IMP',
      computadoras: 'COM',
      mobiliario: 'MOB',
      consumibles: 'CON'
    };
    var prefijo = prefijos[categoria] || 'PRD';
    var todos = obtenerTodosProductos();
    var maxNum = 0;
    todos.forEach(function (p) {
      if (p.id && p.id.startsWith(prefijo + '-')) {
        var num = parseInt(p.id.split('-')[1], 10);
        if (num > maxNum) maxNum = num;
      }
    });
    var siguiente = String(maxNum + 1).padStart(3, '0');
    return prefijo + '-' + siguiente;
  }


  /* ═══════════════════════════════════════════
     MÓDULO 1 — AUTENTICACIÓN
     ═══════════════════════════════════════════ */

  function estaAutenticado() {
    try {
      return localStorage.getItem(ADMIN_KEY) === 'true';
    } catch (e) {
      return false;
    }
  }

  function iniciarSesion(password) {
    if (password === ADMIN_PASSWORD) {
      try {
        localStorage.setItem(ADMIN_KEY, 'true');
      } catch (e) { /* ignore */ }
      return true;
    }
    return false;
  }

  function cerrarSesion() {
    try {
      localStorage.removeItem(ADMIN_KEY);
    } catch (e) { /* ignore */ }
    mostrarLogin();
  }

  function mostrarLogin() {
    var loginEl = document.getElementById('adminLogin');
    var wrapperEl = document.getElementById('adminWrapper');
    if (loginEl) loginEl.style.display = 'flex';
    if (wrapperEl) wrapperEl.classList.remove('active');
  }

  function mostrarAdmin() {
    var loginEl = document.getElementById('adminLogin');
    var wrapperEl = document.getElementById('adminWrapper');
    if (loginEl) loginEl.style.display = 'none';
    if (wrapperEl) wrapperEl.classList.add('active');
    cargarDatos();
  }

  function initLogin() {
    var form = document.getElementById('loginForm');
    var errorEl = document.getElementById('loginError');

    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var passInput = document.getElementById('loginPassword');
      var password = passInput ? passInput.value : '';

      if (iniciarSesion(password)) {
        if (errorEl) errorEl.classList.remove('show');
        mostrarAdmin();
      } else {
        if (errorEl) {
          errorEl.textContent = 'Contraseña incorrecta. Intenta de nuevo.';
          errorEl.classList.add('show');
        }
        if (passInput) {
          passInput.value = '';
          passInput.focus();
        }
      }
    });
  }


  /* ═══════════════════════════════════════════
     MÓDULO 2 — GESTIÓN DE DATOS
     ═══════════════════════════════════════════ */

  function obtenerProductosLocales() {
    try {
      var data = localStorage.getItem(PRODUCTOS_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  function guardarProductosLocales(productos) {
    try {
      localStorage.setItem(PRODUCTOS_KEY, JSON.stringify(productos));
    } catch (e) {
      mostrarToast('Error al guardar en localStorage', 'error');
    }
  }

  /**
   * Fusiona productos estáticos (productos.js) con los del localStorage.
   * Los del localStorage tienen prioridad (pueden sobrescribir estáticos por ID).
   */
  function obtenerTodosProductos() {
    var estaticos = (typeof PRODUCTOS !== 'undefined') ? PRODUCTOS.slice() : [];
    var locales = obtenerProductosLocales();

    // Crear mapa de locales por ID
    var localesMap = {};
    locales.forEach(function (p) {
      localesMap[p.id] = p;
    });

    // Fusionar: si un producto local tiene el mismo ID que uno estático, usar el local
    var resultado = [];
    var idsUsados = {};

    // Primero agregar los locales (tienen prioridad)
    locales.forEach(function (p) {
      p._source = 'local';
      resultado.push(p);
      idsUsados[p.id] = true;
    });

    // Luego agregar estáticos que no fueron sobrescritos
    estaticos.forEach(function (p) {
      if (!idsUsados[p.id]) {
        p._source = 'static';
        resultado.push(p);
      }
    });

    return resultado;
  }

  function guardarProducto(producto) {
    var locales = obtenerProductosLocales();
    var index = -1;
    for (var i = 0; i < locales.length; i++) {
      if (locales[i].id === producto.id) {
        index = i;
        break;
      }
    }

    // Asegurar retrocompatibilidad: sincronizar imagen con imagenes[0]
    if (producto.imagenes && producto.imagenes.length > 0) {
      producto.imagen = producto.imagenes[0];
    }

    if (index >= 0) {
      locales[index] = producto;
    } else {
      locales.push(producto);
    }

    guardarProductosLocales(locales);
  }

  function eliminarProducto(productoId) {
    var locales = obtenerProductosLocales();
    locales = locales.filter(function (p) { return p.id !== productoId; });
    guardarProductosLocales(locales);
  }

  function esProductoEstatico(productoId) {
    var estaticos = (typeof PRODUCTOS !== 'undefined') ? PRODUCTOS : [];
    return estaticos.some(function (p) { return p.id === productoId; });
  }


  /* ═══════════════════════════════════════════
     MÓDULO 3 — RENDERIZADO DE TABLA
     ═══════════════════════════════════════════ */

  var filtroActual = { busqueda: '', categoria: 'all', estado: 'all' };

  function cargarDatos() {
    renderizarEstadisticas();
    renderizarTabla();
    refreshLucide();
  }

  function renderizarEstadisticas() {
    var todos = obtenerTodosProductos();
    var totalEl = document.getElementById('statTotal');
    var activosEl = document.getElementById('statActivos');
    var ofertasEl = document.getElementById('statOfertas');
    var categoriasEl = document.getElementById('statCategorias');

    if (totalEl) totalEl.textContent = todos.length;
    if (activosEl) activosEl.textContent = todos.filter(function (p) { return p.disponible; }).length;
    if (ofertasEl) ofertasEl.textContent = todos.filter(function (p) { return p.oferta; }).length;

    var cats = {};
    todos.forEach(function (p) { cats[p.categoria] = true; });
    if (categoriasEl) categoriasEl.textContent = Object.keys(cats).length;
  }

  function filtrarProductos(productos) {
    return productos.filter(function (p) {
      // Filtro de búsqueda
      if (filtroActual.busqueda) {
        var q = filtroActual.busqueda.toLowerCase();
        var campos = [p.id, p.nombre, p.marca, p.descripcion, p.categoria, p.subcategoria].join(' ').toLowerCase();
        if (campos.indexOf(q) === -1) return false;
      }

      // Filtro de categoría
      if (filtroActual.categoria !== 'all' && p.categoria !== filtroActual.categoria) return false;

      // Filtro de estado
      if (filtroActual.estado === 'active' && !p.disponible) return false;
      if (filtroActual.estado === 'inactive' && p.disponible) return false;
      if (filtroActual.estado === 'offer' && !p.oferta) return false;

      return true;
    });
  }

  function renderizarTabla() {
    var tbody = document.getElementById('productosTableBody');
    if (!tbody) return;

    var todos = obtenerTodosProductos();
    var filtrados = filtrarProductos(todos);

    if (filtrados.length === 0) {
      tbody.innerHTML =
        '<tr><td colspan="7" class="admin-table__empty">' +
          lucideIcon('package', 'icon-48') +
          '<p>No se encontraron productos</p>' +
        '</td></tr>';
      refreshLucide();
      return;
    }

    var html = '';
    filtrados.forEach(function (producto) {
      var imgSrc = (producto.imagenes && producto.imagenes.length > 0) ? producto.imagenes[0] : producto.imagen;
      var imgCount = (producto.imagenes) ? producto.imagenes.length : (producto.imagen ? 1 : 0);

      // Badge de estado
      var estadoBadge = producto.disponible
        ? '<span class="admin-table__badge admin-table__badge--active">Activo</span>'
        : '<span class="admin-table__badge admin-table__badge--inactive">Inactivo</span>';

      if (producto.oferta) {
        estadoBadge += ' <span class="admin-table__badge admin-table__badge--offer">Oferta</span>';
      }

      // Badge de fuente
      var sourceBadge = producto._source === 'local'
        ? '<span class="admin-table__badge admin-table__badge--source-local">Local</span>'
        : '<span class="admin-table__badge admin-table__badge--source-static">Estático</span>';

      // Imágenes preview
      var imagesHTML = '<div class="admin-table__images">';
      if (producto.imagenes && producto.imagenes.length > 0) {
        imagesHTML += '<img src="' + escapeHTML(producto.imagenes[0]) + '" alt="" onerror="this.src=\'assets/img/productos/placeholder-impresora.jpg\'">';
        if (producto.imagenes.length > 1) {
          imagesHTML += '<span class="img-count">+' + (producto.imagenes.length - 1) + '</span>';
        }
      } else if (producto.imagen) {
        imagesHTML += '<img src="' + escapeHTML(producto.imagen) + '" alt="" onerror="this.src=\'assets/img/productos/placeholder-impresora.jpg\'">';
      }
      imagesHTML += '</div>';

      // Categoría config
      var catConfig = (typeof CATEGORIA_CONFIG !== 'undefined' && CATEGORIA_CONFIG[producto.categoria])
        ? CATEGORIA_CONFIG[producto.categoria]
        : null;
      var catNombre = catConfig ? catConfig.nombre : producto.categoria;

      html +=
        '<tr data-id="' + escapeHTML(producto.id) + '">' +
          '<td>' +
            '<div class="admin-table__product">' +
              '<img src="' + escapeHTML(imgSrc || 'assets/img/productos/placeholder-impresora.jpg') + '" alt="' + escapeHTML(producto.nombre) + '" onerror="this.src=\'assets/img/productos/placeholder-impresora.jpg\'">' +
              '<div>' +
                '<div class="admin-table__product-name">' + escapeHTML(producto.nombre) + '</div>' +
                '<div class="admin-table__product-id">' + escapeHTML(producto.id) + ' ' + sourceBadge + '</div>' +
              '</div>' +
            '</div>' +
          '</td>' +
          '<td>' + escapeHTML(producto.marca) + '</td>' +
          '<td>' + escapeHTML(catNombre) + '</td>' +
          '<td><strong>' + escapeHTML(producto.moneda) + ' ' + (producto.precio ? producto.precio.toLocaleString('es-DO') : '0') + '</strong></td>' +
          '<td>' + imagesHTML + '</td>' +
          '<td>' + estadoBadge + '</td>' +
          '<td>' +
            '<div class="admin-table__actions">' +
              '<button class="btn-edit" data-id="' + escapeHTML(producto.id) + '" title="Editar">' + lucideIcon('pencil', 'icon-16') + '</button>' +
              '<button class="btn-duplicate" data-id="' + escapeHTML(producto.id) + '" title="Duplicar">' + lucideIcon('copy', 'icon-16') + '</button>' +
              '<button class="delete btn-delete" data-id="' + escapeHTML(producto.id) + '" title="Eliminar">' + lucideIcon('trash-2', 'icon-16') + '</button>' +
            '</div>' +
          '</td>' +
        '</tr>';
    });

    tbody.innerHTML = html;
    refreshLucide();

    // Event listeners
    tbody.querySelectorAll('.btn-edit').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var id = btn.getAttribute('data-id');
        abrirModalEditar(id);
      });
    });

    tbody.querySelectorAll('.btn-duplicate').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var id = btn.getAttribute('data-id');
        duplicarProducto(id);
      });
    });

    tbody.querySelectorAll('.btn-delete').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var id = btn.getAttribute('data-id');
        confirmarEliminar(id);
      });
    });
  }


  /* ═══════════════════════════════════════════
     MÓDULO 4 — MODAL CREAR/EDITAR
     ═══════════════════════════════════════════ */

  var productoEditando = null;
  var imagenesTemp = ['', '', ''];

  function abrirModalCrear() {
    productoEditando = null;
    imagenesTemp = ['', '', ''];
    limpiarFormulario();

    var titleEl = document.getElementById('modalTitle');
    if (titleEl) titleEl.textContent = 'Nuevo Producto';

    var btnSave = document.getElementById('btnGuardarProducto');
    if (btnSave) btnSave.textContent = 'Crear Producto';

    // Generar ID provisional
    var catSelect = document.getElementById('prodCategoria');
    if (catSelect) {
      var idInput = document.getElementById('prodId');
      if (idInput) idInput.value = generarId(catSelect.value);
    }

    abrirModal();
  }

  function abrirModalEditar(productoId) {
    var todos = obtenerTodosProductos();
    var producto = null;
    for (var i = 0; i < todos.length; i++) {
      if (todos[i].id === productoId) {
        producto = todos[i];
        break;
      }
    }

    if (!producto) {
      mostrarToast('Producto no encontrado', 'error');
      return;
    }

    productoEditando = JSON.parse(JSON.stringify(producto)); // Deep clone

    var titleEl = document.getElementById('modalTitle');
    if (titleEl) titleEl.textContent = 'Editar Producto';

    var btnSave = document.getElementById('btnGuardarProducto');
    if (btnSave) btnSave.textContent = 'Guardar Cambios';

    // Llenar formulario
    setVal('prodId', producto.id);
    setVal('prodNombre', producto.nombre);
    setVal('prodMarca', producto.marca);
    setVal('prodCategoria', producto.categoria);
    actualizarSubcategorias(producto.categoria);
    setVal('prodSubcategoria', producto.subcategoria);
    setVal('prodPrecio', producto.precio);
    setVal('prodMoneda', producto.moneda || 'RD$');
    setVal('prodDescripcion', producto.descripcion);
    setChecked('prodDisponible', producto.disponible);
    setChecked('prodDestacado', producto.destacado);
    setChecked('prodOferta', producto.oferta);
    setVal('prodPrecioOriginal', producto.precio_original || '');

    // Specs
    specsActuales = producto.specs ? producto.specs.slice() : [];
    renderizarSpecs();

    // Imágenes
    imagenesTemp = ['', '', ''];
    if (producto.imagenes && producto.imagenes.length > 0) {
      for (var j = 0; j < Math.min(producto.imagenes.length, 3); j++) {
        imagenesTemp[j] = producto.imagenes[j];
      }
    } else if (producto.imagen) {
      imagenesTemp[0] = producto.imagen;
    }
    renderizarImageSlots();

    // Mostrar/ocultar precio original
    togglePrecioOriginal();

    abrirModal();
  }

  function abrirModal() {
    var overlay = document.getElementById('productModal');
    if (overlay) overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    refreshLucide();
  }

  function cerrarModal() {
    var overlay = document.getElementById('productModal');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  function limpiarFormulario() {
    setVal('prodId', '');
    setVal('prodNombre', '');
    setVal('prodMarca', '');
    setVal('prodCategoria', 'impresoras');
    actualizarSubcategorias('impresoras');
    setVal('prodSubcategoria', '');
    setVal('prodPrecio', '');
    setVal('prodMoneda', 'RD$');
    setVal('prodDescripcion', '');
    setChecked('prodDisponible', true);
    setChecked('prodDestacado', false);
    setChecked('prodOferta', false);
    setVal('prodPrecioOriginal', '');

    specsActuales = [];
    renderizarSpecs();
    renderizarImageSlots();

    // Limpiar errores
    document.querySelectorAll('.admin-form-group.error').forEach(function (g) {
      g.classList.remove('error');
    });
  }

  function setVal(id, val) {
    var el = document.getElementById(id);
    if (el) el.value = val !== null && val !== undefined ? val : '';
  }

  function getVal(id) {
    var el = document.getElementById(id);
    return el ? el.value.trim() : '';
  }

  function setChecked(id, val) {
    var el = document.getElementById(id);
    if (el) el.checked = !!val;
  }

  function getChecked(id) {
    var el = document.getElementById(id);
    return el ? el.checked : false;
  }


  /* ═══════════════════════════════════════════
     MÓDULO 5 — SUBCATEGORÍAS DINÁMICAS
     ═══════════════════════════════════════════ */

  function actualizarSubcategorias(categoria) {
    var select = document.getElementById('prodSubcategoria');
    if (!select) return;

    select.innerHTML = '<option value="">Seleccionar...</option>';

    if (typeof CATEGORIA_CONFIG !== 'undefined' && CATEGORIA_CONFIG[categoria]) {
      var subcats = CATEGORIA_CONFIG[categoria].subcategorias;
      subcats.forEach(function (sub) {
        if (sub.valor !== 'all') {
          var opt = document.createElement('option');
          opt.value = sub.valor;
          opt.textContent = sub.etiqueta;
          select.appendChild(opt);
        }
      });
    }
  }


  /* ═══════════════════════════════════════════
     MÓDULO 6 — SPECS (TAGS INPUT)
     ═══════════════════════════════════════════ */

  var specsActuales = [];

  function renderizarSpecs() {
    var container = document.getElementById('specsContainer');
    if (!container) return;

    var tagsHTML = '';
    specsActuales.forEach(function (spec, index) {
      tagsHTML +=
        '<span class="admin-spec-tag">' +
          escapeHTML(spec) +
          '<button type="button" data-index="' + index + '" aria-label="Eliminar spec">&times;</button>' +
        '</span>';
    });

    // Mantener el input
    var inputEl = container.querySelector('input');
    var inputVal = inputEl ? inputEl.value : '';

    container.innerHTML = tagsHTML + '<input type="text" placeholder="Escribir y presionar Enter..." value="' + escapeHTML(inputVal) + '">';

    // Re-bind events
    var newInput = container.querySelector('input');
    if (newInput) {
      newInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          var val = newInput.value.trim();
          if (val && specsActuales.length < 6) {
            specsActuales.push(val);
            newInput.value = '';
            renderizarSpecs();
          }
        }
        if (e.key === 'Backspace' && newInput.value === '' && specsActuales.length > 0) {
          specsActuales.pop();
          renderizarSpecs();
        }
      });
      newInput.focus();
    }

    container.querySelectorAll('.admin-spec-tag button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var idx = parseInt(btn.getAttribute('data-index'), 10);
        specsActuales.splice(idx, 1);
        renderizarSpecs();
      });
    });
  }


  /* ═══════════════════════════════════════════
     MÓDULO 7 — IMÁGENES
     ═══════════════════════════════════════════ */

  function renderizarImageSlots() {
    for (var i = 0; i < 3; i++) {
      var slot = document.getElementById('imageSlot' + i);
      if (!slot) continue;

      if (imagenesTemp[i]) {
        slot.classList.add('has-image');
        slot.innerHTML =
          '<img src="' + escapeHTML(imagenesTemp[i]) + '" alt="Imagen ' + (i + 1) + '" onerror="this.src=\'assets/img/productos/placeholder-impresora.jpg\'">' +
          '<button type="button" class="admin-image-slot__remove" data-index="' + i + '" aria-label="Eliminar imagen">&times;</button>' +
          '<span class="admin-image-slot__primary">Principal</span>';
      } else {
        slot.classList.remove('has-image');
        slot.innerHTML =
          lucideIcon('image-plus', 'icon-28') +
          '<span class="admin-image-slot__label">Imagen ' + (i + 1) + '</span>' +
          '<span class="admin-image-slot__sublabel">' + (i === 0 ? 'Principal' : 'Opcional') + '</span>';
      }
    }

    refreshLucide();

    // Bind remove buttons
    document.querySelectorAll('.admin-image-slot__remove').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var idx = parseInt(btn.getAttribute('data-index'), 10);
        imagenesTemp[idx] = '';
        renderizarImageSlots();
      });
    });
  }

  function handleImageSlotClick(index) {
    // Mostrar opciones: URL o archivo
    var url = prompt('Ingresa la URL de la imagen (o cancela para seleccionar archivo):');
    if (url !== null && url.trim() !== '') {
      imagenesTemp[index] = url.trim();
      renderizarImageSlots();
      return;
    }

    // Fallback: file input
    var fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.addEventListener('change', function () {
      var file = fileInput.files[0];
      if (!file) return;

      // Validar tamaño (max 2MB)
      if (file.size > 2 * 1024 * 1024) {
        mostrarToast('La imagen no debe superar 2MB', 'error');
        return;
      }

      var reader = new FileReader();
      reader.onload = function (e) {
        imagenesTemp[index] = e.target.result; // base64
        renderizarImageSlots();
      };
      reader.readAsDataURL(file);
    });
    fileInput.click();
  }


  /* ═══════════════════════════════════════════
     MÓDULO 8 — GUARDAR PRODUCTO
     ═══════════════════════════════════════════ */

  function validarFormulario() {
    var valido = true;

    // Limpiar errores previos
    document.querySelectorAll('.admin-form-group.error').forEach(function (g) {
      g.classList.remove('error');
    });

    function marcarError(id, mensaje) {
      var group = document.getElementById(id);
      if (group) {
        var parent = group.closest('.admin-form-group');
        if (parent) {
          parent.classList.add('error');
          var errorEl = parent.querySelector('.form-error');
          if (errorEl) errorEl.textContent = mensaje;
        }
      }
      valido = false;
    }

    if (!getVal('prodNombre')) marcarError('prodNombre', 'El nombre es obligatorio');
    if (!getVal('prodMarca')) marcarError('prodMarca', 'La marca es obligatoria');
    if (!getVal('prodCategoria')) marcarError('prodCategoria', 'Selecciona una categoría');
    if (!getVal('prodSubcategoria')) marcarError('prodSubcategoria', 'Selecciona una subcategoría');

    var precio = parseFloat(getVal('prodPrecio'));
    if (isNaN(precio) || precio <= 0) marcarError('prodPrecio', 'Ingresa un precio válido');

    if (getChecked('prodOferta')) {
      var precioOrig = parseFloat(getVal('prodPrecioOriginal'));
      if (isNaN(precioOrig) || precioOrig <= 0) {
        marcarError('prodPrecioOriginal', 'Ingresa el precio original para la oferta');
      }
    }

    return valido;
  }

  function guardarFormulario() {
    if (!validarFormulario()) {
      mostrarToast('Corrige los errores del formulario', 'error');
      return;
    }

    var id = getVal('prodId');
    var esNuevo = !productoEditando;

    // Si es nuevo y no tiene ID, generar uno
    if (!id) {
      id = generarId(getVal('prodCategoria'));
    }

    // Filtrar imágenes vacías
    var imagenesLimpias = imagenesTemp.filter(function (img) { return img && img.trim() !== ''; });

    var producto = {
      id: id,
      nombre: getVal('prodNombre'),
      categoria: getVal('prodCategoria'),
      subcategoria: getVal('prodSubcategoria'),
      marca: getVal('prodMarca'),
      precio: parseFloat(getVal('prodPrecio')),
      moneda: getVal('prodMoneda') || 'RD$',
      imagen: imagenesLimpias.length > 0 ? imagenesLimpias[0] : 'assets/img/productos/placeholder-impresora.jpg',
      imagenes: imagenesLimpias.length > 0 ? imagenesLimpias : ['assets/img/productos/placeholder-impresora.jpg'],
      descripcion: getVal('prodDescripcion'),
      specs: specsActuales.slice(),
      disponible: getChecked('prodDisponible'),
      destacado: getChecked('prodDestacado'),
      oferta: getChecked('prodOferta'),
      precio_original: getChecked('prodOferta') ? parseFloat(getVal('prodPrecioOriginal')) || null : null
    };

    guardarProducto(producto);
    cerrarModal();
    cargarDatos();
    mostrarToast(esNuevo ? 'Producto creado exitosamente' : 'Producto actualizado exitosamente', 'success');
  }


  /* ═══════════════════════════════════════════
     MÓDULO 9 — DUPLICAR / ELIMINAR
     ═══════════════════════════════════════════ */

  function duplicarProducto(productoId) {
    var todos = obtenerTodosProductos();
    var original = null;
    for (var i = 0; i < todos.length; i++) {
      if (todos[i].id === productoId) {
        original = todos[i];
        break;
      }
    }

    if (!original) return;

    var copia = JSON.parse(JSON.stringify(original));
    copia.id = generarId(copia.categoria);
    copia.nombre = copia.nombre + ' (copia)';
    delete copia._source;

    guardarProducto(copia);
    cargarDatos();
    mostrarToast('Producto duplicado: ' + copia.id, 'success');
  }

  var productoAEliminar = null;

  function confirmarEliminar(productoId) {
    productoAEliminar = productoId;
    var overlay = document.getElementById('confirmDialog');
    var msgEl = document.getElementById('confirmMessage');

    if (msgEl) {
      var esEstatico = esProductoEstatico(productoId);
      if (esEstatico) {
        msgEl.textContent = 'Este producto es estático (viene del código). Solo se eliminará la versión local editada. ¿Continuar?';
      } else {
        msgEl.textContent = '¿Estás seguro de que deseas eliminar este producto? Esta acción no se puede deshacer.';
      }
    }

    if (overlay) overlay.classList.add('open');
  }

  function ejecutarEliminar() {
    if (productoAEliminar) {
      eliminarProducto(productoAEliminar);
      cargarDatos();
      mostrarToast('Producto eliminado', 'success');
      productoAEliminar = null;
    }
    cerrarConfirm();
  }

  function cerrarConfirm() {
    var overlay = document.getElementById('confirmDialog');
    if (overlay) overlay.classList.remove('open');
    productoAEliminar = null;
  }


  /* ═══════════════════════════════════════════
     MÓDULO 10 — TOASTS
     ═══════════════════════════════════════════ */

  function mostrarToast(mensaje, tipo) {
    tipo = tipo || 'success';
    var container = document.getElementById('toastContainer');
    if (!container) return;

    var toast = document.createElement('div');
    toast.className = 'admin-toast admin-toast--' + tipo;
    toast.innerHTML =
      '<span class="admin-toast__message">' + escapeHTML(mensaje) + '</span>' +
      '<button class="admin-toast__close" aria-label="Cerrar">&times;</button>';

    container.appendChild(toast);
    refreshLucide();

    // Auto-remove after 4s
    var timeout = setTimeout(function () {
      removeToast(toast);
    }, 4000);

    toast.querySelector('.admin-toast__close').addEventListener('click', function () {
      clearTimeout(timeout);
      removeToast(toast);
    });
  }

  function removeToast(toast) {
    toast.classList.add('removing');
    setTimeout(function () {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }


  /* ═══════════════════════════════════════════
     MÓDULO 11 — IMPORT / EXPORT
     ═══════════════════════════════════════════ */

  function exportarJSON() {
    var todos = obtenerTodosProductos();
    // Limpiar _source antes de exportar
    var exportData = todos.map(function (p) {
      var copia = JSON.parse(JSON.stringify(p));
      delete copia._source;
      return copia;
    });

    var json = JSON.stringify(exportData, null, 2);
    var blob = new Blob([json], { type: 'application/json' });
    var url = URL.createObjectURL(blob);

    var a = document.createElement('a');
    a.href = url;
    a.download = 'fronet-productos-' + new Date().toISOString().slice(0, 10) + '.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    mostrarToast('Productos exportados (' + exportData.length + ' items)', 'success');
  }

  function importarJSON() {
    var fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.json';

    fileInput.addEventListener('change', function () {
      var file = fileInput.files[0];
      if (!file) return;

      var reader = new FileReader();
      reader.onload = function (e) {
        try {
          var data = JSON.parse(e.target.result);
          if (!Array.isArray(data)) {
            mostrarToast('El archivo debe contener un array de productos', 'error');
            return;
          }

          // Validar estructura mínima
          var validos = data.filter(function (p) {
            return p.id && p.nombre && p.categoria;
          });

          if (validos.length === 0) {
            mostrarToast('No se encontraron productos válidos en el archivo', 'error');
            return;
          }

          // Asegurar retrocompatibilidad
          validos.forEach(function (p) {
            if (!p.imagenes && p.imagen) {
              p.imagenes = [p.imagen];
            }
            if (p.imagenes && p.imagenes.length > 0 && !p.imagen) {
              p.imagen = p.imagenes[0];
            }
          });

          guardarProductosLocales(validos);
          cargarDatos();
          mostrarToast('Importados ' + validos.length + ' productos', 'success');
        } catch (err) {
          mostrarToast('Error al leer el archivo JSON: ' + err.message, 'error');
        }
      };
      reader.readAsText(file);
    });

    fileInput.click();
  }

  function limpiarDatosLocales() {
    confirmarAccion('¿Eliminar todos los productos locales? Los productos estáticos del código se mantendrán.', function () {
      guardarProductosLocales([]);
      cargarDatos();
      mostrarToast('Datos locales eliminados', 'success');
    });
  }

  var accionPendiente = null;

  function confirmarAccion(mensaje, callback) {
    accionPendiente = callback;
    var overlay = document.getElementById('confirmDialog');
    var msgEl = document.getElementById('confirmMessage');
    if (msgEl) msgEl.textContent = mensaje;
    if (overlay) overlay.classList.add('open');
  }


  /* ═══════════════════════════════════════════
     MÓDULO 12 — TOGGLE PRECIO ORIGINAL
     ═══════════════════════════════════════════ */

  function togglePrecioOriginal() {
    var ofertaCheck = document.getElementById('prodOferta');
    var precioOrigGroup = document.getElementById('precioOriginalGroup');
    if (ofertaCheck && precioOrigGroup) {
      precioOrigGroup.style.display = ofertaCheck.checked ? 'block' : 'none';
    }
  }


  /* ═══════════════════════════════════════════
     MÓDULO 13 — INICIALIZACIÓN
     ═══════════════════════════════════════════ */

  document.addEventListener('DOMContentLoaded', function () {

    // Login
    initLogin();

    // Check auth
    if (estaAutenticado()) {
      mostrarAdmin();
    } else {
      mostrarLogin();
    }

    // Logout button
    var btnLogout = document.getElementById('btnLogout');
    if (btnLogout) {
      btnLogout.addEventListener('click', function () {
        cerrarSesion();
      });
    }

    // Nuevo producto
    var btnNuevo = document.getElementById('btnNuevoProducto');
    if (btnNuevo) {
      btnNuevo.addEventListener('click', function () {
        abrirModalCrear();
      });
    }

    // Cerrar modal
    var btnCerrarModal = document.getElementById('btnCerrarModal');
    if (btnCerrarModal) {
      btnCerrarModal.addEventListener('click', cerrarModal);
    }

    var btnCancelar = document.getElementById('btnCancelarModal');
    if (btnCancelar) {
      btnCancelar.addEventListener('click', cerrarModal);
    }

    // Click en overlay del modal para cerrar
    var modalOverlay = document.getElementById('productModal');
    if (modalOverlay) {
      modalOverlay.addEventListener('click', function (e) {
        if (e.target === modalOverlay) cerrarModal();
      });
    }

    // Guardar producto
    var btnGuardar = document.getElementById('btnGuardarProducto');
    if (btnGuardar) {
      btnGuardar.addEventListener('click', function () {
        guardarFormulario();
      });
    }

    // Categoría change → actualizar subcategorías y ID
    var catSelect = document.getElementById('prodCategoria');
    if (catSelect) {
      catSelect.addEventListener('change', function () {
        actualizarSubcategorias(catSelect.value);
        // Actualizar ID si es nuevo producto
        if (!productoEditando) {
          var idInput = document.getElementById('prodId');
          if (idInput) idInput.value = generarId(catSelect.value);
        }
      });
    }

    // Oferta toggle
    var ofertaCheck = document.getElementById('prodOferta');
    if (ofertaCheck) {
      ofertaCheck.addEventListener('change', togglePrecioOriginal);
    }

    // Image slots click
    for (var i = 0; i < 3; i++) {
      (function (idx) {
        var slot = document.getElementById('imageSlot' + idx);
        if (slot) {
          slot.addEventListener('click', function () {
            if (!imagenesTemp[idx]) {
              handleImageSlotClick(idx);
            }
          });
        }
      })(i);
    }

    // Búsqueda en toolbar
    var searchInput = document.getElementById('adminSearch');
    if (searchInput) {
      var searchTimer = null;
      searchInput.addEventListener('input', function () {
        if (searchTimer) clearTimeout(searchTimer);
        searchTimer = setTimeout(function () {
          filtroActual.busqueda = searchInput.value.trim();
          renderizarTabla();
        }, 300);
      });
    }

    // Filtro categoría
    var catFilter = document.getElementById('filterCategoria');
    if (catFilter) {
      catFilter.addEventListener('change', function () {
        filtroActual.categoria = catFilter.value;
        renderizarTabla();
      });
    }

    // Filtro estado
    var estadoFilter = document.getElementById('filterEstado');
    if (estadoFilter) {
      estadoFilter.addEventListener('change', function () {
        filtroActual.estado = estadoFilter.value;
        renderizarTabla();
      });
    }

    // Export
    var btnExport = document.getElementById('btnExportar');
    if (btnExport) {
      btnExport.addEventListener('click', exportarJSON);
    }

    // Import
    var btnImport = document.getElementById('btnImportar');
    if (btnImport) {
      btnImport.addEventListener('click', importarJSON);
    }

    // Limpiar datos locales
    var btnLimpiar = document.getElementById('btnLimpiarDatos');
    if (btnLimpiar) {
      btnLimpiar.addEventListener('click', limpiarDatosLocales);
    }

    // Confirm dialog buttons
    var btnConfirmSi = document.getElementById('btnConfirmSi');
    if (btnConfirmSi) {
      btnConfirmSi.addEventListener('click', function () {
        if (productoAEliminar) {
          ejecutarEliminar();
        } else if (accionPendiente) {
          accionPendiente();
          accionPendiente = null;
          cerrarConfirm();
        }
      });
    }

    var btnConfirmNo = document.getElementById('btnConfirmNo');
    if (btnConfirmNo) {
      btnConfirmNo.addEventListener('click', function () {
        cerrarConfirm();
        accionPendiente = null;
      });
    }

    // Escape para cerrar modales
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        cerrarModal();
        cerrarConfirm();
      }
    });

    // Ir a la tienda
    var btnVerTienda = document.getElementById('btnVerTienda');
    if (btnVerTienda) {
      btnVerTienda.addEventListener('click', function () {
        window.open('tienda.html', '_blank');
      });
    }

    refreshLucide();
  });

})();
