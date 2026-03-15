/* ============================================
   FRONET TECNOLOGÍA SRL — tienda.js
   Lógica del catálogo, filtros, buscador,
   carrito de compras y envío por WhatsApp
   ============================================ */

// TODO FASE 2: Reemplazar PRODUCTOS array con fetch() a la API de WooCommerce
// TODO FASE 2: Agregar módulo de autenticación de usuario
// TODO FASE 2: Integrar pasarela de pagos (CardNet, PayPal, Azul)
// TODO FASE 2: Sistema de inventario en tiempo real
// TODO FASE 2: Historial de pedidos por usuario

(function () {
  'use strict';

  /* ═══════════════════════════════════════════
     HELPER — LUCIDE ICONS
     ═══════════════════════════════════════════ */

  /**
   * Genera el HTML de un ícono Lucide.
   * Después de insertar en el DOM, llamar refreshLucide() para renderizar.
   */
  function lucideIcon(name, sizeClass, extraClass) {
    var cls = (sizeClass || '') + (extraClass ? ' ' + extraClass : '');
    return '<i data-lucide="' + name + '"' + (cls ? ' class="' + cls.trim() + '"' : '') + '></i>';
  }

  /**
   * Re-renderiza todos los íconos Lucide pendientes en el DOM.
   */
  function refreshLucide() {
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
      lucide.createIcons();
    }
  }

  /* ═══════════════════════════════════════════
     MÓDULO 1 — RENDERIZADO DE PRODUCTOS
     ═══════════════════════════════════════════ */

  function renderizarProductos(categoria, filtro) {
    filtro = filtro || 'all';
    var grid = document.getElementById('grid-' + categoria);
    var countEl = document.getElementById('count-' + categoria);
    if (!grid) return;

    // Filtrar productos
    var productos = PRODUCTOS.filter(function (p) {
      if (p.categoria !== categoria) return false;
      if (!p.disponible) return false;
      if (filtro !== 'all' && p.subcategoria !== filtro) return false;
      return true;
    });

    // Actualizar contador
    if (countEl) {
      countEl.textContent = productos.length;
    }

    // Limpiar grid
    grid.innerHTML = '';

    // Si no hay productos
    if (productos.length === 0) {
      grid.innerHTML =
        '<div class="products-empty">' +
          lucideIcon('search', 'icon-48') +
          '<p>No hay productos en esta subcategoría.</p>' +
        '</div>';
      refreshLucide();
      return;
    }

    // Renderizar cada producto
    productos.forEach(function (producto, index) {
      var card = crearProductCard(producto);
      card.style.animationDelay = (index * 0.05) + 's';
      card.classList.add('fade-in');
      grid.appendChild(card);
    });

    // Renderizar íconos Lucide en las cards recién creadas
    refreshLucide();
  }

  function crearProductCard(producto) {
    var card = document.createElement('article');
    card.className = 'product-card';
    card.setAttribute('data-id', producto.id);
    card.setAttribute('data-categoria', producto.categoria);
    card.setAttribute('data-subcategoria', producto.subcategoria);

    // Verificar si ya está en el carrito
    var carrito = obtenerCarrito();
    var enCarrito = carrito.some(function (item) { return item.id === producto.id; });

    // Imagen con fallback
    var imgSrc = producto.imagen;
    if (PLACEHOLDER_IMAGES && PLACEHOLDER_IMAGES[producto.subcategoria]) {
      // Usar placeholder de subcategoría si la imagen principal no existe
      // El onerror del img manejará el fallback
    }

    // Badge de oferta
    var badgeHTML = '';
    if (producto.oferta) {
      var descuento = producto.precio_original
        ? Math.round((1 - producto.precio / producto.precio_original) * 100)
        : 0;
      badgeHTML = '<span class="product-card__badge tag tag--gold">' +
        (descuento > 0 ? '-' + descuento + '%' : 'Oferta') +
        '</span>';
    }

    // Specs como dots
    var specsHTML = '';
    if (producto.specs && producto.specs.length > 0) {
      specsHTML = '<div class="product-card__specs">';
      producto.specs.forEach(function (spec) {
        specsHTML += '<span>' + spec + '</span>';
      });
      specsHTML += '</div>';
    }

    // Precio
    var precioHTML = '<div class="product-card__pricing">';
    precioHTML += '<span class="product-card__precio">' + producto.moneda + ' ' + producto.precio.toLocaleString('es-DO') + '</span>';
    if (producto.oferta && producto.precio_original) {
      precioHTML += '<span class="product-card__precio-original">' + producto.moneda + ' ' + producto.precio_original.toLocaleString('es-DO') + '</span>';
    }
    precioHTML += '</div>';

    // Botón agregar
    var btnClass = 'product-card__add-btn' + (enCarrito ? ' added' : '');
    var btnText = enCarrito
      ? lucideIcon('check', 'icon-16') + ' Agregado'
      : lucideIcon('plus', 'icon-16') + ' Agregar al carrito';

    card.innerHTML =
      '<div class="product-card__image">' +
        badgeHTML +
        '<img src="' + imgSrc + '" alt="' + producto.nombre + ' — ' + producto.marca + '" loading="lazy" onerror="this.src=\'assets/img/productos/placeholder-impresora.jpg\'">' +
      '</div>' +
      '<div class="product-card__body">' +
        '<span class="product-card__marca">' + producto.marca + '</span>' +
        '<h3 class="product-card__nombre">' + producto.nombre + '</h3>' +
        specsHTML +
        precioHTML +
        '<button class="' + btnClass + '" data-id="' + producto.id + '" aria-label="Agregar ' + producto.nombre + ' al carrito">' +
          btnText +
        '</button>' +
      '</div>';

    // Event listener para agregar al carrito
    var btn = card.querySelector('.product-card__add-btn');
    btn.addEventListener('click', function () {
      agregarAlCarrito(producto.id);
    });

    return card;
  }


  /* ═══════════════════════════════════════════
     MÓDULO 2 — FILTROS
     ═══════════════════════════════════════════ */

  function initFiltros() {
    var filterContainers = document.querySelectorAll('.subcategory-filters');

    filterContainers.forEach(function (container) {
      var categoria = container.getAttribute('data-categoria');
      var pills = container.querySelectorAll('.filter-pill');

      pills.forEach(function (pill) {
        pill.addEventListener('click', function () {
          // Marcar active
          pills.forEach(function (p) { p.classList.remove('active'); });
          pill.classList.add('active');

          // Filtrar productos
          var filtro = pill.getAttribute('data-filter');
          renderizarProductos(categoria, filtro);
        });
      });
    });
  }


  /* ═══════════════════════════════════════════
     MÓDULO 3 — BUSCADOR
     ═══════════════════════════════════════════ */

  var searchTimeout = null;

  function initBuscador() {
    var input = document.getElementById('tiendaSearch');
    var dropdown = document.getElementById('searchDropdown');
    if (!input || !dropdown) return;

    input.addEventListener('input', function () {
      var query = input.value.trim();

      if (searchTimeout) clearTimeout(searchTimeout);

      if (query.length < 2) {
        dropdown.classList.remove('open');
        dropdown.innerHTML = '';
        return;
      }

      searchTimeout = setTimeout(function () {
        var resultados = buscarProductos(query);
        mostrarResultadosBusqueda(resultados, dropdown);
      }, 300);
    });

    // Cerrar dropdown al hacer click fuera
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.tienda-search')) {
        dropdown.classList.remove('open');
      }
    });

    // Cerrar con Escape
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        dropdown.classList.remove('open');
        input.blur();
      }
    });
  }

  function buscarProductos(query) {
    var q = query.toLowerCase();
    return PRODUCTOS.filter(function (p) {
      if (!p.disponible) return false;
      var campos = [
        p.nombre,
        p.marca,
        p.descripcion,
        p.categoria,
        p.subcategoria
      ].concat(p.specs || []);

      return campos.some(function (campo) {
        return campo && campo.toLowerCase().indexOf(q) !== -1;
      });
    }).slice(0, 6); // Máximo 6 resultados
  }

  function mostrarResultadosBusqueda(resultados, dropdown) {
    dropdown.innerHTML = '';

    if (resultados.length === 0) {
      dropdown.innerHTML = '<div class="search-no-results">No se encontraron productos</div>';
      dropdown.classList.add('open');
      return;
    }

    resultados.forEach(function (producto) {
      var item = document.createElement('div');
      item.className = 'search-result';
      item.innerHTML =
        '<img class="search-result__img" src="' + producto.imagen + '" alt="' + producto.nombre + '" onerror="this.src=\'assets/img/productos/placeholder-impresora.jpg\'">' +
        '<div class="search-result__info">' +
          '<div class="search-result__name">' + producto.nombre + '</div>' +
          '<div class="search-result__meta">' + producto.marca + ' · ' + producto.categoria + '</div>' +
        '</div>' +
        '<span class="search-result__price">' + producto.moneda + ' ' + producto.precio.toLocaleString('es-DO') + '</span>';

      item.addEventListener('click', function () {
        dropdown.classList.remove('open');
        document.getElementById('tiendaSearch').value = '';
        scrollToProduct(producto.id);
      });

      dropdown.appendChild(item);
    });

    dropdown.classList.add('open');
    refreshLucide();
  }

  function scrollToProduct(productoId) {
    var card = document.querySelector('.product-card[data-id="' + productoId + '"]');
    if (!card) {
      // El producto puede estar filtrado, mostrar todas las categorías
      var producto = PRODUCTOS.find(function (p) { return p.id === productoId; });
      if (producto) {
        // Resetear filtro de esa categoría
        var filterContainer = document.querySelector('.subcategory-filters[data-categoria="' + producto.categoria + '"]');
        if (filterContainer) {
          var pills = filterContainer.querySelectorAll('.filter-pill');
          pills.forEach(function (p) { p.classList.remove('active'); });
          var allPill = filterContainer.querySelector('[data-filter="all"]');
          if (allPill) allPill.classList.add('active');
        }
        renderizarProductos(producto.categoria, 'all');
        // Intentar de nuevo después del render
        setTimeout(function () {
          card = document.querySelector('.product-card[data-id="' + productoId + '"]');
          if (card) highlightAndScroll(card);
        }, 100);
      }
      return;
    }
    highlightAndScroll(card);
  }

  function highlightAndScroll(card) {
    var navbarHeight = 72 + 50; // navbar + category nav
    var cardTop = card.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;

    window.scrollTo({
      top: cardTop,
      behavior: 'smooth'
    });

    card.classList.add('highlight');
    setTimeout(function () {
      card.classList.remove('highlight');
    }, 2000);
  }


  /* ═══════════════════════════════════════════
     MÓDULO 4 — CARRITO
     ═══════════════════════════════════════════ */

  var CARRITO_KEY = 'fronet_carrito';

  function obtenerCarrito() {
    try {
      var data = localStorage.getItem(CARRITO_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  function guardarCarrito(carrito) {
    try {
      localStorage.setItem(CARRITO_KEY, JSON.stringify(carrito));
    } catch (e) {
      console.warn('No se pudo guardar el carrito en localStorage');
    }
  }

  function agregarAlCarrito(productoId, cantidad) {
    cantidad = cantidad || 1;
    var producto = PRODUCTOS.find(function (p) { return p.id === productoId; });
    if (!producto) return;

    var carrito = obtenerCarrito();
    var existente = carrito.find(function (item) { return item.id === productoId; });

    if (existente) {
      existente.cantidad += cantidad;
    } else {
      carrito.push({
        id: producto.id,
        nombre: producto.nombre,
        marca: producto.marca,
        precio: producto.precio,
        moneda: producto.moneda,
        imagen: producto.imagen,
        cantidad: cantidad
      });
    }

    guardarCarrito(carrito);

    // Actualizar UI del botón
    var btns = document.querySelectorAll('.product-card__add-btn[data-id="' + productoId + '"]');
    btns.forEach(function (btn) {
      btn.classList.add('added');
      btn.innerHTML = lucideIcon('check', 'icon-16') + ' Agregado';
      refreshLucide();

      // Quitar estado "added" después de 2 segundos para permitir agregar más
      setTimeout(function () {
        btn.classList.remove('added');
        btn.innerHTML = lucideIcon('plus', 'icon-16') + ' Agregar al carrito';
        refreshLucide();
      }, 2000);
    });

    // Animación en la card
    var card = document.querySelector('.product-card[data-id="' + productoId + '"]');
    if (card) {
      card.classList.add('adding');
      setTimeout(function () { card.classList.remove('adding'); }, 300);
    }

    // Bounce en el carrito flotante
    var cartFloat = document.getElementById('cartFloat');
    if (cartFloat) {
      cartFloat.classList.remove('bounce');
      // Force reflow
      void cartFloat.offsetWidth;
      cartFloat.classList.add('bounce');
      setTimeout(function () { cartFloat.classList.remove('bounce'); }, 500);
    }

    actualizarContadorCarrito();
    renderizarCarrito();
  }

  function quitarDelCarrito(productoId) {
    var carrito = obtenerCarrito();
    carrito = carrito.filter(function (item) { return item.id !== productoId; });
    guardarCarrito(carrito);
    actualizarContadorCarrito();
    renderizarCarrito();

    // Resetear botón en la card
    var btns = document.querySelectorAll('.product-card__add-btn[data-id="' + productoId + '"]');
    btns.forEach(function (btn) {
      btn.classList.remove('added');
      btn.innerHTML = lucideIcon('plus', 'icon-16') + ' Agregar al carrito';
    });
    refreshLucide();
  }

  function actualizarCantidad(productoId, nuevaCantidad) {
    if (nuevaCantidad <= 0) {
      quitarDelCarrito(productoId);
      return;
    }

    var carrito = obtenerCarrito();
    var item = carrito.find(function (i) { return i.id === productoId; });
    if (item) {
      item.cantidad = nuevaCantidad;
      guardarCarrito(carrito);
      actualizarContadorCarrito();
      renderizarCarrito();
    }
  }

  function actualizarContadorCarrito() {
    var carrito = obtenerCarrito();
    var total = carrito.reduce(function (sum, item) { return sum + item.cantidad; }, 0);
    var countEl = document.getElementById('cartCount');
    if (countEl) {
      countEl.textContent = total;
      countEl.style.display = total > 0 ? 'flex' : 'none';
    }
  }

  function calcularSubtotal(carrito) {
    return carrito.reduce(function (sum, item) {
      return sum + (item.precio * item.cantidad);
    }, 0);
  }

  function renderizarCarrito() {
    var itemsContainer = document.getElementById('cartItems');
    var subtotalEl = document.getElementById('cartSubtotal');
    if (!itemsContainer) return;

    var carrito = obtenerCarrito();

    if (carrito.length === 0) {
      itemsContainer.innerHTML =
        '<div class="cart-empty">' +
          lucideIcon('shopping-cart', 'icon-56') +
          '<p>Tu carrito está vacío</p>' +
          '<button class="cart-empty__btn" onclick="cerrarCarrito()">Ver productos →</button>' +
        '</div>';
      if (subtotalEl) subtotalEl.textContent = 'RD$ 0';
      refreshLucide();
      return;
    }

    var html = '';
    carrito.forEach(function (item) {
      html +=
        '<div class="cart-item" data-id="' + item.id + '">' +
          '<img class="cart-item__image" src="' + item.imagen + '" alt="' + item.nombre + '" onerror="this.src=\'assets/img/productos/placeholder-impresora.jpg\'">' +
          '<div class="cart-item__info">' +
            '<div class="cart-item__nombre">' + item.nombre + '</div>' +
            '<div class="cart-item__marca">' + item.marca + '</div>' +
            '<div class="cart-item__precio">' + item.moneda + ' ' + item.precio.toLocaleString('es-DO') + '</div>' +
            '<div class="cart-item__actions">' +
              '<div class="cart-item__qty">' +
                '<button class="qty-btn" data-action="decrease" data-id="' + item.id + '" aria-label="Disminuir cantidad">−</button>' +
                '<span class="qty-value">' + item.cantidad + '</span>' +
                '<button class="qty-btn" data-action="increase" data-id="' + item.id + '" aria-label="Aumentar cantidad">+</button>' +
              '</div>' +
              '<button class="cart-item__remove" data-id="' + item.id + '" aria-label="Eliminar ' + item.nombre + '">' +
                lucideIcon('trash-2', 'icon-16') +
              '</button>' +
            '</div>' +
          '</div>' +
        '</div>';
    });

    itemsContainer.innerHTML = html;

    // Renderizar íconos Lucide en el carrito
    refreshLucide();

    // Subtotal
    var subtotal = calcularSubtotal(carrito);
    if (subtotalEl) {
      subtotalEl.textContent = 'RD$ ' + subtotal.toLocaleString('es-DO');
    }

    // Event listeners para qty y remove
    itemsContainer.querySelectorAll('.qty-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var id = btn.getAttribute('data-id');
        var action = btn.getAttribute('data-action');
        var item = obtenerCarrito().find(function (i) { return i.id === id; });
        if (!item) return;

        if (action === 'increase') {
          actualizarCantidad(id, item.cantidad + 1);
        } else if (action === 'decrease') {
          actualizarCantidad(id, item.cantidad - 1);
        }
      });
    });

    itemsContainer.querySelectorAll('.cart-item__remove').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var id = btn.getAttribute('data-id');
        quitarDelCarrito(id);
      });
    });
  }


  /* ═══════════════════════════════════════════
     MÓDULO 5 — WHATSAPP
     ═══════════════════════════════════════════ */

  function generarMensajeWhatsApp(carrito) {
    var numero = '18293983616';
    var mensaje = 'Hola Fronet! 👋 Me interesa el siguiente pedido:\n\n';

    carrito.forEach(function (item) {
      mensaje += '• ' + item.nombre + ' (' + item.marca + ')\n';
      mensaje += '  Cantidad: ' + item.cantidad + ' | Precio unit: ' + item.moneda + ' ' + item.precio.toLocaleString('es-DO') + '\n\n';
    });

    var total = calcularSubtotal(carrito);
    mensaje += '─────────────────\n';
    mensaje += 'TOTAL ESTIMADO: RD$ ' + total.toLocaleString('es-DO') + '\n\n';
    mensaje += 'Por favor confirmar disponibilidad y coordinar entrega. ¡Gracias! 😊';

    return 'https://wa.me/' + numero + '?text=' + encodeURIComponent(mensaje);
  }

  function initBotonWhatsApp() {
    var btn = document.getElementById('btnWhatsappCart');
    if (!btn) return;

    btn.addEventListener('click', function () {
      var carrito = obtenerCarrito();
      if (carrito.length === 0) {
        alert('Tu carrito está vacío. Agrega productos antes de enviar el pedido.');
        return;
      }
      var url = generarMensajeWhatsApp(carrito);
      window.open(url, '_blank');
    });
  }


  /* ═══════════════════════════════════════════
     MÓDULO 6 — SIDEBAR DEL CARRITO
     ═══════════════════════════════════════════ */

  function abrirCarrito() {
    var overlay = document.getElementById('cartOverlay');
    var sidebar = document.getElementById('cartSidebar');
    if (overlay) overlay.classList.add('open');
    if (sidebar) sidebar.classList.add('open');
    document.body.style.overflow = 'hidden';
    renderizarCarrito();
  }

  function cerrarCarrito() {
    var overlay = document.getElementById('cartOverlay');
    var sidebar = document.getElementById('cartSidebar');
    if (overlay) overlay.classList.remove('open');
    if (sidebar) sidebar.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Exponer cerrarCarrito globalmente para el onclick inline
  window.cerrarCarrito = cerrarCarrito;

  function initCarrito() {
    // Botón flotante
    var cartFloat = document.getElementById('cartFloat');
    if (cartFloat) {
      cartFloat.addEventListener('click', function () {
        abrirCarrito();
      });
    }

    // Botón cerrar
    var btnCerrar = document.getElementById('btnCerrarCarrito');
    if (btnCerrar) {
      btnCerrar.addEventListener('click', function () {
        cerrarCarrito();
      });
    }

    // Click en overlay para cerrar
    var overlay = document.getElementById('cartOverlay');
    if (overlay) {
      overlay.addEventListener('click', function () {
        cerrarCarrito();
      });
    }

    // Escape para cerrar
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        var sidebar = document.getElementById('cartSidebar');
        if (sidebar && sidebar.classList.contains('open')) {
          cerrarCarrito();
        }
      }
    });

    // Cargar carrito del localStorage
    actualizarContadorCarrito();
    renderizarCarrito();

    // WhatsApp button
    initBotonWhatsApp();
  }


  /* ═══════════════════════════════════════════
     MÓDULO 7 — CATEGORY NAV STICKY
     ═══════════════════════════════════════════ */

  function initCategoryNav() {
    var navItems = document.querySelectorAll('.category-nav__item');
    var sections = document.querySelectorAll('.category-section');

    if (navItems.length === 0 || sections.length === 0) return;

    // IntersectionObserver para marcar la sección activa
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var sectionId = entry.target.getAttribute('id');
            navItems.forEach(function (item) {
              item.classList.remove('active');
              if (item.getAttribute('href') === '#' + sectionId) {
                item.classList.add('active');
              }
            });
          }
        });
      }, {
        threshold: 0.15,
        rootMargin: '-120px 0px -60% 0px'
      });

      sections.forEach(function (section) {
        observer.observe(section);
      });
    }

    // Smooth scroll al hacer click en nav items
    navItems.forEach(function (item) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        var targetId = item.getAttribute('href');
        var target = document.querySelector(targetId);
        if (target) {
          var navbarHeight = 72 + 50; // navbar + category nav
          var targetPos = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
          window.scrollTo({
            top: targetPos,
            behavior: 'smooth'
          });

          // Actualizar active
          navItems.forEach(function (n) { n.classList.remove('active'); });
          item.classList.add('active');
        }
      });
    });
  }


  /* ═══════════════════════════════════════════
     MÓDULO 8 — INICIALIZACIÓN
     ═══════════════════════════════════════════ */

  document.addEventListener('DOMContentLoaded', function () {
    // Renderizar todas las categorías
    if (typeof CATEGORIA_CONFIG !== 'undefined') {
      Object.keys(CATEGORIA_CONFIG).forEach(function (cat) {
        renderizarProductos(cat);
      });
    }

    // Inicializar módulos
    initFiltros();
    initBuscador();
    initCarrito();
    initCategoryNav();

    // Renderizar todos los íconos Lucide estáticos y dinámicos
    refreshLucide();
  });

})();
