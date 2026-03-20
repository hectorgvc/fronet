/* ============================================
   FRONET - CATEGORÍA CONFIG + PRODUCTOS BASE
   ============================================
   Los productos se gestionan desde el admin
   y se almacenan en localStorage.
   Este archivo solo define las categorías y
   un array vacío como fallback.
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
      { valor: "Copiadora", etiqueta: "Copiadoras" }
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

/* ============================================
   PRODUCTOS — Array vacío como fallback.
   Los productos reales se cargan desde
   localStorage (gestionados vía admin).
   ============================================ */
window.PRODUCTOS = [
  {
    "id": "product_d2ae4549-4057-48cf-9773-17e0c5b1e0cf",
    "nombre": "Cartucho de tóner Canon NPG76 GPR58 C-EXV55 para IR-ADV C250 C255 C256 C350 C356",
    "descripcion": "<p>El tóner&nbsp;Canon GPR-58&nbsp;es un&nbsp;consumible original de tóner para impresoras&nbsp;<strong>Canon imageRUNNER Advance (iR-ADV)</strong>&nbsp;como las series C256, C356, C257, C357 (incluyendo versiones iF, i, DX) y más nuevas (como DX-C359IF/DX-C259IF), disponible en&nbsp;<strong>negro (Black)</strong>,&nbsp;<strong>cian (Cyan)</strong>,&nbsp;<strong>magenta</strong>&nbsp;y&nbsp;<strong>amarillo&nbsp;(Yellow)</strong>, ofreciendo alta capacidad y calidad de impresión profesional para texto y gráficos nítidos. Los números de pieza específicos incluyen 2182C003AA (Negro), 2183C003AA (Cyan), 2184C003AA (Magenta) y 2185C003AA (Amarillo).&nbsp;</p><p><strong>Características Principales:</strong></p><ul>\t<li><strong>Compatibilidad:</strong>&nbsp;Diseñado para modelos Canon iR-ADV C256iF, C356iF, C257iF, C357iF, C257, C357, C359IF, C259IF.</li>\t<li><strong>Colores:</strong>&nbsp;Negro (BK), Cyan (C), Magenta (M), Yellow (Y).</li>\t<li><strong>Rendimiento:</strong>&nbsp;Alto rendimiento, con el negro rindiendo aproximadamente 23,000 páginas (5% de cobertura) y colores alrededor de 18,000 páginas.</li>\t<li><strong>Calidad:</strong>&nbsp;Ofrece texto y gráficos detallados y claros, y se integra perfectamente para un rendimiento óptimo</li></ul>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 6500,
    "imagen": "https://static.wixstatic.com/media/ae191a_713589ce89da4801b35e772052a62293~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_713589ce89da4801b35e772052a62293~mv2.jpg"
    ]
  },
  {
    "id": "product_4811a8d4-6019-7f83-68e6-78b5f639cba9",
    "nombre": "Cartucho de tóner IRC5045 NPG46 GPR31 C-EXV29 para Canon IR C5030 C5235 C5035 C5",
    "descripcion": "<p>El tóner Canon GPR-31 es un&nbsp;cartucho diseñado para las impresoras multifunción a color&nbsp;<strong>Canon imageRUNNER ADVANCE C5030, C5035, C5235 y C5240</strong>. Está disponible en negro, cian, magenta y amarillo, con diferentes rendimientos de página según el color.&nbsp;</p><p>Especificaciones y Rendimiento</p><p>Los cartuchos de tóner Canon GPR-31 (también conocidos por los MPN 2790B003AA para negro, 2794B003AA para cian, 2798B003AA para magenta y 2802B003AA para amarillo) ofrecen un alto rendimiento, ideal para entornos de oficina de gran volumen.&nbsp;</p><table>\t<tbody>\t\t<tr>\t\t\t<th><strong>Color</strong>&nbsp;</th>\t\t\t<th><strong>Rendimiento aproximado</strong>&nbsp;(al 5% de cobertura)</th>\t\t</tr>\t\t<tr>\t\t\t<td><strong>Negro</strong></td>\t\t\t<td>36,000 páginas</td>\t\t</tr>\t\t<tr>\t\t\t<td><strong>Cian</strong></td>\t\t\t<td>27,000 páginas</td>\t\t</tr>\t\t<tr>\t\t\t<td><strong>Magenta</strong></td>\t\t\t<td>27,000 páginas</td>\t\t</tr>\t\t<tr>\t\t\t<td><strong>Amarillo</strong></td>\t\t\t<td>27,000 páginas</td>\t\t</tr>\t</tbody></table><p>Compatibilidad de Impresoras</p><p>El tóner GPR-31 es compatible con los siguientes modelos de impresoras Canon imageRUNNER ADVANCE:&nbsp;</p><ul>\t<li>Canon imageRUNNER ADVANCE C5030</li>\t<li>Canon imageRUNNER ADVANCE C5030i</li>\t<li>Canon imageRUNNER ADVANCE C5035</li>\t<li>Canon imageRUNNER ADVANCE C5035i</li>\t<li>Canon imageRUNNER ADVANCE C5235</li>\t<li>Canon imageRUNNER ADVANCE C5235A</li>\t<li>Canon imageRUNNER ADVANCE C5240</li>\t<li>Canon imageRUNNER ADVANCE C5240i</li>\t<li>Canon imageRUNNER ADVANCE C5240A</li></ul>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 6500,
    "imagen": "https://static.wixstatic.com/media/ae191a_cbec8a9b2827464688086b1db1b445ce~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_cbec8a9b2827464688086b1db1b445ce~mv2.jpg"
    ]
  },
  {
    "id": "product_5436184b-40b5-7581-d8dc-61e65215f327",
    "nombre": "Cartucho de tóner NPG-67 V49 GPR-53 para Canon iRC3025i iR ADVANCE C3320 C3320L",
    "descripcion": "<p>El tóner&nbsp;<strong>Canon GPR-53</strong>&nbsp;es un&nbsp;cartucho de tóner de alta capacidad disponible en colores negro, cian, magenta y amarillo, diseñado para su uso en impresoras multifunción Canon imageRUNNER ADVANCE.&nbsp;</p><p>Impresoras Compatibles&nbsp;</p><p>El tóner Canon GPR-53 es compatible con una amplia gama de impresoras, principalmente de las series imageRUNNER ADVANCE e imageRUNNER ADVANCE DX:&nbsp;</p><ul>\t<li>Canon imageRUNNER ADVANCE C3325i, C3330i</li>\t<li>Canon imageRUNNER ADVANCE C3525i, C3525i II, C3525i III</li>\t<li>Canon imageRUNNER ADVANCE C3530i, C3530i II, C3530i III</li>\t<li>Canon imageRUNNER ADVANCE DX C3725i, C3730i</li>\t<li>Canon imageRUNNER ADVANCE DX C3826i, C3830i, C3835i&nbsp;</li></ul><p>Rendimiento y Especificaciones&nbsp;</p><p>Los cartuchos Canon GPR-53 son conocidos por su alto rendimiento, lo que los hace adecuados para entornos de impresión de gran volumen.&nbsp;</p><table>\t<tbody>\t\t<tr>\t\t\t<th><strong>Color</strong>&nbsp;</th>\t\t\t<th><strong>Rendimiento Estimado (al 5% de cobertura)</strong></th>\t\t\t<th><strong>Número de parte Canon</strong></th>\t\t</tr>\t\t<tr>\t\t\t<td><strong>Negro</strong></td>\t\t\t<td>Hasta&nbsp;<strong>36,000 páginas</strong></td>\t\t\t<td>8524B003AA</td>\t\t</tr>\t\t<tr>\t\t\t<td><strong>Cian</strong></td>\t\t\t<td>Hasta&nbsp;<strong>19,000 páginas</strong></td>\t\t\t<td>8525B003AA</td>\t\t</tr>\t\t<tr>\t\t\t<td><strong>Magenta</strong></td>\t\t\t<td>Hasta&nbsp;<strong>19,000 páginas</strong></td>\t\t\t<td>8526B003AA</td>\t\t</tr>\t\t<tr>\t\t\t<td><strong>Amarillo</strong></td>\t\t\t<td>Hasta&nbsp;<strong>19,000 páginas</strong></td>\t\t\t<td>8527B003AA</td>\t\t</tr>\t</tbody></table>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 7550,
    "imagen": "https://static.wixstatic.com/media/ae191a_4b96833383f948119e46ef1d7c0bace1~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_4b96833383f948119e46ef1d7c0bace1~mv2.jpg"
    ]
  },
  {
    "id": "product_7ce83a37-3335-6872-040e-3c99219e3e47",
    "nombre": "Cartucho de tóner G71 GPR-55 C-EXV51 para CANON iR C5535 5540 5550 5560 DX C5735",
    "descripcion": "<p>El tóner Canon GPR-55 es un&nbsp;consumible de alto rendimiento para impresoras multifuncionales&nbsp;Canon imageRUNNER ADVANCE&nbsp;(como los modelos C5535i, C5540i, C5550i, C5560i), disponible en negro, cian, magenta y amarillo, con rendimientos muy altos (hasta 60,000-69,000 páginas), ideal para oficinas con alto volumen de impresión, y se identifica con números de parte como 0481C003 (negro).&nbsp;</p><p><strong>Características Principales:</strong></p><ul>\t<li><strong>Modelos Compatibles:</strong>&nbsp;Canon imageRUNNER ADVANCE C5535i, C5540i, C5550i, C5560i.</li>\t<li><strong>Colores:</strong>&nbsp;Negro, Cian (Cyan), Magenta, Amarillo (Yellow).</li>\t<li><strong>Rendimiento (Yield):</strong>&nbsp;Muy Alto, estimado en 69,000 páginas para negro (5% de cobertura) y alrededor de 60,000 páginas para los colores.</li>\t<li><strong>Tipo:</strong>&nbsp;Tóner de alta capacidad, diseñado para uso profesional y grandes volúmenes.</li>\t<li><strong>Números de Parte (ejemplos):</strong>\t<ul>\t\t<li>Negro: 0481C003.</li>\t\t<li>Amarillo: 0484C003AA.</li>\t\t<li>Cian: 0482C003AA.</li>\t\t<li>Magenta: 0483C003AA.&nbsp;</li>\t</ul>\t</li></ul><p>&nbsp;</p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 8790,
    "imagen": "https://static.wixstatic.com/media/ae191a_84f8224f72e94e6498cc1d27d5036de0~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_84f8224f72e94e6498cc1d27d5036de0~mv2.jpg"
    ]
  },
  {
    "id": "product_a0215fc3-bcf3-0431-9996-a64803a1f9b2",
    "nombre": "Cartucho de tóner negro original Canon 2787B003 (GPR-39)",
    "descripcion": "<p>Experimente una calidad de impresión y confiabilidad inigualables con el tóner negro original Canon 2787B003 (GPR-39)</p><p>Exija precisión, elija la autenticidad de Canon</p><p><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span>Cuando se trata de sus impresoras Canon imageRUNNER, solo lo mejor le servirá. Por eso, elegir el cartucho de tóner negro original Canon 2787B003 (GPR-39) es una inversión en la calidad y el rendimiento excepcionales que su negocio merece.</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></p><p>Beneficios que dicen mucho:</p><ul>\t<li>Resolución de impresión sin concesiones:&nbsp;diseñado para funcionar perfectamente con su impresora Canon, este tóner ofrece texto nítido y definido y gráficos sorprendentes que elevan su imagen profesional.</li>\t<li>Fiabilidad constante:&nbsp;Evite las frustrantes reimpresiones y los tiempos de inactividad causados ​​por cartuchos incompatibles o de baja calidad. Confíe en la legendaria fiabilidad de Canon para obtener impresiones consistentes e impecables, página tras página.</li>\t<li>Rendimiento duradero:&nbsp;el diseño de alto rendimiento del cartucho de tóner GPR-39 garantiza que pasará menos tiempo reemplazando cartuchos y más tiempo concentrándose en lo que más importa.</li>\t<li>Impresiones vibrantes y resistentes a la decoloración:&nbsp;Cree documentos y materiales de marketing que perduren en el tiempo. Nuestro tóner especialmente formulado produce negros intensos y profundos que resisten la decoloración y mantienen su brillo con el paso del tiempo.</li></ul>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 6500,
    "imagen": "https://static.wixstatic.com/media/ae191a_5c20fb5f8489413e8c41af68fef15980~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_5c20fb5f8489413e8c41af68fef15980~mv2.jpg"
    ]
  },
  {
    "id": "product_469c09d2-ad33-1db8-3454-1014a057a01c",
    "nombre": "Cartucho de tóner Compatible con Ricoh IMC6000, cartucho de tóner de Color de al",
    "descripcion": "<p>IM C4500 C6000 IMC4500 IMC6000 Cartuchos de tóner compatibles con Ricoh IM C4500 IM C6000 Toner Work para Lanier Savin IM C4500 IM C6000 Cartuchos de impresión Negro Cian Amarillo Magenta</p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 9500,
    "imagen": "https://static.wixstatic.com/media/ae191a_612676e63b4b44ed8f4cf23a439b2684~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_612676e63b4b44ed8f4cf23a439b2684~mv2.jpg"
    ]
  },
  {
    "id": "product_e5271f9f-b3ac-4b16-6acc-c9fa1ea04577",
    "nombre": "Cartuchos de tóner de capacidad estándar AltaLink C8130/35/45/55/70, C8230/35/45",
    "descripcion": "<p>El tóner para la&nbsp;Xerox AltaLink C8170&nbsp;usa cartuchos estándar y de alto rendimiento de colores (Negro,&nbsp;Cian,&nbsp;Magenta,&nbsp;Amarillo), identificados por números de pieza como&nbsp;006R01746 para negro (alto rendimiento) y 006R01747 para cian, con rendimientos variables, siendo el negro más duradero (ej. 59k páginas) que los colores (ej. 28k páginas), y puedes encontrar opciones originales y compatibles de distintos proveedores.&nbsp;</p><p><strong>Números de Pieza Comunes (Originales):</strong></p><ul>\t<li><strong>Negro (Alto Rendimiento):</strong>&nbsp;006R01746 (o 6R01746).</li>\t<li><strong>Cian (Alto Rendimiento):</strong>&nbsp;006R01747 (o 6R01747).</li>\t<li><strong>Magenta (Alto Rendimiento):</strong>&nbsp;006R01748 (o 6R01748).</li>\t<li><strong>Amarillo (Alto Rendimiento):</strong>&nbsp;006R01749 (o 6R01749).&nbsp;</li></ul><p><strong>Características:</strong></p><ul>\t<li><strong>Colores:</strong>&nbsp;Negro (BK), Cian (C), Magenta (M), Amarillo (Y).</li>\t<li><strong>Rendimiento (Páginas):</strong>&nbsp;Varía, pero el negro suele durar más (ej. 59,000 páginas) que los colores (ej. 28,000 páginas) con cobertura al 5%.</li>\t<li><strong>Tipo:</strong>&nbsp;Se usan cartuchos de tóner para impresoras láser a color.&nbsp;</li></ul><p><strong>Dónde Comprar y Opciones:</strong></p><ul>\t<li><strong>Sitios Web Especializados:</strong>&nbsp;Precision Roller,&nbsp;LD Products,&nbsp;Tiendacartucho,&nbsp;123Ink.</li>\t<li><strong>Original vs. Compatible:</strong>&nbsp;Puedes encontrar cartuchos&nbsp;<strong>genuinos Xerox</strong>&nbsp;o&nbsp;<strong>compatibles</strong>&nbsp;de otras marcas, con precios y rendimientos diferentes.&nbsp;</li></ul><p><strong>Para Confirmar el Tóner Correcto:</strong></p><ul>\t<li><strong>Revisa el Cartucho Actual:</strong>&nbsp;El número de pieza suele estar en la etiqueta del cartucho dentro de la impresora.</li>\t<li><strong>Consulta la Impresora:</strong>&nbsp;Los manuales o la propia máquina te indicarán el modelo correcto</li></ul>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 10500,
    "imagen": "https://static.wixstatic.com/media/ae191a_da720138574543a59a7f9ae34bdd6d1f~mv2.webp",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_da720138574543a59a7f9ae34bdd6d1f~mv2.webp"
    ]
  },
  {
    "id": "product_bc9adf1f-ba88-c57b-2c74-ab9c34abad02",
    "nombre": "Cartucho de tóner Compatible con Xerox AltaLink C8030 C8035 C8045 C8055 C8070.",
    "descripcion": "<p>006R01697</p><p>AltaLink C8030/C8035/C8045/C8055/C8070 Cartucho de tóner NEGRO (26 000 páginas)</p><p>AltaLink C8030/C8035/C8045/C8055/C8070 Cartucho de tóner NEGRO (26 000 páginas) ha sido especialmente formulado y probado para proporcionar la mejor calidad de imagen e impresión para el usuario, una página tras otra. Los consumibles originales y los equipos Xerox se complementan entre sí. No acepte imitaciones.</p><p>Compatible con:</p><ul>\t<li>Multifuncionales en color Xerox® AltaLink® serie C8000</li></ul>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 8500,
    "imagen": "https://static.wixstatic.com/media/ae191a_df0ba4c27e3b4a2489ff35836876ea29~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_df0ba4c27e3b4a2489ff35836876ea29~mv2.jpg"
    ]
  },
  {
    "id": "product_f33707d9-eb76-b02f-dad8-56bc4159c601",
    "nombre": "Epson EcoTank L4360 Impresora Multifuncional a Color Wi-Fi y Dúplex",
    "descripcion": "<p>La Aliada Ideal para Emprendedores</p><p>&nbsp;</p><p><strong>Wi-Fi | Imprime | Copia | Escanea</strong></p><p><strong>Diseñada para quienes comienzan y crecen su negocio</strong></p><p>La Epson EcoTank L4360 es la impresora multifuncional perfecta para emprendedores y pequeñas oficinas que necesitan soluciones inteligentes, confiables y económicas para sus tareas diarias de impresión, copia y escaneo.</p><p><strong>¿Por qué es perfecta para tu emprendimiento?</strong></p><ul>\t<li>Ahorra en costos de impresión: Olvídate de los cartuchos caros. Con la tecnología EcoTank, recargas con botellas de tinta económicas que rinden hasta 8.500 páginas.</li>\t<li>Maximiza tu productividad: Imprime hasta un 40% más rápido que modelos anteriores y con impresión dúplex automática para ahorrar papel y cuidar el ambiente.</li>\t<li>Conéctate sin complicaciones: Wi-Fi dual band para una conexión estable y fácil impresión directa desde tu celular con la app Epson Smart Panel.</li>\t<li>Durabilidad y confianza: Pensada para trabajar sin parar, con una vida útil de hasta 50.000 páginas impresas.</li></ul><p><br><strong>Beneficios que impulsan tu negocio</strong></p><ul>\t<li>Velocidad para responder a tus clientes: Imprime documentos profesionales rápidamente y sin esperas.</li>\t<li>Control total en la palma de tu mano: Navega fácil con su pantalla LCD a color y administra tus trabajos desde tu smartphone.</li>\t<li>Diseño inteligente para espacios pequeños: Compacta, ligera y con bandeja de papel que se abre sola para que no pierdas tiempo.</li>\t<li>Ahorro real y sustentable: Reduce gastos en tinta y papel, cuida tu presupuesto y el planeta.</li></ul><p><br><strong>Soluciones a los problemas que enfrentan los emprendedores</strong></p><ul>\t<li>Recargas de tinta simples y sin errores con botellas EcoFit™ que se llenan solo hasta el nivel adecuado.</li>\t<li>Limpieza automática para evitar fallas y pérdidas de tiempo.</li>\t<li>Indicadores de estado visibles para saber cuándo imprimir, escanear o recargar tinta.</li>\t<li>Garantía extendida para que trabajes tranquilo.</li></ul><p><br><strong>Características clave para tu crecimiento</strong></p><ul>\t<li>Impresión rápida y de alta calidad: 15 páginas por minuto en negro y 8 a color.</li>\t<li>Conectividad flexible: Wi-Fi dual band para trabajar desde cualquier dispositivo.</li>\t<li>Escaneo y copia integrados: Todo lo que necesitas para tu oficina en un solo equipo.</li>\t<li>Tecnología Heat-Free PrecisionCore: Imprime sin usar calor, ahorrando energía y cuidando el medio ambiente.</li>\t<li>App Epson Smart Panel: Gestiona impresión y escaneo desde tu celular, sin complicaciones.</li></ul><p><br><strong>El respaldo Epson que impulsa tu emprendimiento</strong></p><ul>\t<li>Más de 100 millones de impresoras EcoTank vendidas en todo el mundo.</li>\t<li>La impresora más ligera y compacta del mercado, diseñada para espacios pequeños y oficinas en casa.</li>\t<li>Calidad Epson para que tu imagen profesional sea impecable en cada impresión.</li></ul><p><strong>Epson EcoTank L4360: la impresora multifuncional que entiende las necesidades de los emprendedores.</strong></p><p>¡Haz crecer tu negocio con tecnología confiable, económica y pensada para ti!</p><p>&nbsp;</p><ul>\t<li>\t<ul>\t\t<li>\t\t<ul>\t\t\t<li>Valor increíble con botellas de tinta de repuesto</li>\t\t\t<li>Uso eficiente de tintas</li>\t\t\t<li>Recarga de tinta simple con botellas EcoFitTM</li>\t\t\t<li>La impresora con tanque de tinta&nbsp;más vendida5</li>\t\t\t<li>Impresión móvil inalámbrica fácil4</li>\t\t</ul>\t\t</li>\t</ul>\t</li>\t<li>Modelo:&nbsp;C11CL41301</li></ul>",
    "disponible": true,
    "categoria": "impresoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 23550,
    "imagen": "https://static.wixstatic.com/media/ae191a_c69932c06a37450ba66c076833643849~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": true,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_c69932c06a37450ba66c076833643849~mv2.jpg"
    ]
  },
  {
    "id": "product_8b3e3287-5459-b4d5-20d3-4f224bcd6937",
    "nombre": "Multifuncional Canon imageCLASS MF642Cdw, Color, Láser, Inalámbrico, Print/Scan/",
    "descripcion": "<p>Diseñada para pequeñas y medianas empresas, el multifuncional a color imageCLASS MF642Cdw cuenta con múltiples características que dan como resultado imágenes de alta calidad y un mantenimiento mínimo. Las capacidades de impresión, copia y escaneo le ayudarán a realizar las tareas necesarias en una sola máquina. Su pantalla táctil a color de 5“ ofrece una experiencia intuitiva al usuario y puede ser personalizada por un administrador de dispositivos para simplificar en un solo click muchas tareas diarias.</p>",
    "disponible": true,
    "categoria": "impresoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 41950,
    "imagen": "https://static.wixstatic.com/media/ae191a_3089e8220be941c19cfb1360e2665704~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_3089e8220be941c19cfb1360e2665704~mv2.jpg"
    ]
  },
  {
    "id": "product_39d64dd3-88e6-e046-3408-c0854f3bace4",
    "nombre": "Impresora Multifuncional Inalámbrica EcoTank L6490",
    "descripcion": "<p>Multifuncional A4 perfecta para el ambiente de Home Office y grupos de trabajo pequeños</p><p>&nbsp;</p><p>La impresora multifuncional EcoTank L6490 tiene un diseño compacto para impresiones rápidas y a bajo costo con menos intervenciones y tiempo de inactividad. Cuenta con capacidad de hasta 250 hojas en las dos bandejas frontales con botellas de reemplazo de tinta que permiten imprimir hasta 7.500 páginas ISO (negro) y hasta 6.000 páginas ISO (color).&nbsp; La L6490 tiene un ciclo de trabajo mensual de hasta 1.500 páginas al mes y un ciclo de trabajo máximo de hasta 20.000 páginas al mes.</p><p>&nbsp;</p><ul>\t<li><strong>Velocidad de impresión:</strong>&nbsp;hasta 37/23 ppm† (negro/color)</li>\t<li><strong>17/9,5 ISO ppm (negro/color):&nbsp;</strong>salida rápida de la primera hoja†</li>\t<li><strong>Ahorre y maximice la productividad:</strong>&nbsp;con botellas de tinta de reemplazo a bajo costo de hasta 7.500 páginas en negro/6.000 en color1&nbsp;maximice su tiempo de actividad.</li>\t<li><strong>Diseño compacto y elegante:</strong>&nbsp;diseño compacto y botellas EcoFit™, sistema inteligente de botellas codificadas y con llenado automático para no generar derrames.</li>\t<li><strong>Alta calidad de impresión:</strong>&nbsp;tintas DURABrite® Ultra ET de pigmento para obtener textos nítidos y gráficos vibrantes tanto en blanco y negro como en color.</li>\t<li><strong>Gran versatilidad de funciones:</strong>&nbsp;con capacidad de fax, ADF, impresión automática a doble cara, bandeja de papel de 250 hojas, pantalla táctil a color de 2,4”, Ethernet y diseño de salida boca abajo para mayor productividad y privacidad.</li>\t<li><strong>Conectividad a la red segura y sencilla:</strong>&nbsp;funciones de seguridad integradas de Epson para proteger sus datos. Conéctese con Wi-Fi®3, Wi-Fi Direct® e impresión activada por voz5.</li></ul>",
    "disponible": true,
    "categoria": "impresoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 58900,
    "imagen": "https://static.wixstatic.com/media/ae191a_af68f8f1c7e540b1a8ae0e5fee8e6654~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": true,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_af68f8f1c7e540b1a8ae0e5fee8e6654~mv2.jpg"
    ]
  },
  {
    "id": "product_bb99502a-7a27-01e0-639b-25a5e98816fa",
    "nombre": "Impresora multifuncional Epson EcoTank L4260",
    "descripcion": "<p>Impresora multifuncional 3 en 1 Epson EcoTank® L4260 con impresión 100% sin cartuchos</p><p>La impresora multifuncional 3 en 1 L4260 para emprendedores y pequeñas oficinas ofrece funciones de productividad a un precio asequible,&nbsp; como la tecnología de impresión a doble cara automática , conectividad Wi-Fi y compatible con nueva aplicacion&nbsp; Epson Smart Panel, para aprovechar toda la productividad de su impresora a través de sus dispositivo inteligentes. Cuenta con la tecnología sin calor Epson Heat Free, que brinda un desempeño eficiente, ayudandolo a aumentar la productividad de su negocio y le ofrece la posibilidad de imprimir a color, por menos de lo que cuesta imprimir en blanco y negro en una impresora laser monocromatica. La L4260 utiliza tinta negra pigmentada, la cual tiene una alta resistencia al agua, a la decoloración y a las manchas para mejor preservación de documentos de texto. Ideal para aquellos&nbsp; que buscan minimizar sus costos operativos de impresión y el consumo de papel con la conveniencia y confiabilidad que ofrece EcoTank, líder en impresión con tanques de tinta. Con una garantía limitada y extendida hasta de 2 años5, Epson lo respalda totalmente para que pueda imprimir sin cartuchos y sin preocupaciones.</p>",
    "disponible": true,
    "categoria": "impresoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 22400,
    "imagen": "https://static.wixstatic.com/media/ae191a_8c2c025ec1ae4d29b98ff058593a07b3~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": true,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_8c2c025ec1ae4d29b98ff058593a07b3~mv2.png"
    ]
  },
  {
    "id": "product_7e7cf0a0-83f5-1ab8-9090-6a6e8f6c3c29",
    "nombre": "IMPRESORA EPSON ECOTANK L5590 MULTIFUNCIONAL (CMYK) IMPRIME, COPIA Y ESCANEA, IN",
    "descripcion": "<p>Impresora multifuncional Wi-Fi 4 en 1 de alto desempeño con velocidades de impresión ultra rápidas Epson EcoTank L5590 100% sin cartuchos</p><p>Para muchos Usuarios de Trabajo no es suficiente la confiabilidad de EcoTank, pero también tienen la expectativa de resultados más rápidos e inmediatos llevar acabo su trabajo. La EcoTank L5590 va más allá de la confiabilidad y eficiencia que espera de EcoTank para ofrecer velocidades de impresión 50% más rápidas sin sacrificar calidad de impresión3&nbsp;con la tecnología Heat-Free PrecisionCore. Incremente mas aún su productividad simplificando tareas frecuentes de copiado / escaneado con su alimentador de documentos de 30 páginas; y pogra compartirla en cualquier red via Wi-Fi o Ethernet. Lleve consigo toda la conveniencia y productividad a cualquier lugar con Epson Smart Panel para imprimir y sacar provecho de la productividad de su EcoTank desde su dispositivo móvil. Únase a los millones de usuarios que han seleccionado Epson como su socio de negocios y haga mas en menos tiempo con la solución 100% sin cartuchos para que pueda imprimir todo lo que necesita con toda la tranquilidad y conveniencia que Epson ofrece.</p>",
    "disponible": true,
    "categoria": "impresoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 30500,
    "imagen": "https://static.wixstatic.com/media/ae191a_9006532ec957460fa42f0f4d2e7bae3a~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": true,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_9006532ec957460fa42f0f4d2e7bae3a~mv2.jpg"
    ]
  },
  {
    "id": "product_efb9c8b6-f968-2fd0-8ef7-7c0bf2d2c035",
    "nombre": "Impresora Multifuncional Inlámbrica EcoTank L3250",
    "descripcion": "<p>Impresora multifuncional 3 en 1 Epson EcoTank L3250 con impresión 100% sin cartuchos</p><p>La Impresora multifuncional 3 en 1 Epson EcoTank L3250 ofrece a las familias, estudiantes y profesionales un costo de impresión ultra bajo, que te permite imprimir hasta 4.500 páginas en negro o 7.500 páginas a color5&nbsp;con cada juego de botellas de repuesto. La EcoTank L3250 ofrece total confiabilidad gracias a la tecnología Heat-Free de Epson, además de una experiencia de recarga fácil, limpia y sin errores con la tecnología EcoFitTM. Diseñado para integrarse en su estilo de vida, está completamente conectado con WiFi, WiFi Direct® y capacidades de impresión móvil a través de la nueva e intuitiva aplicación Epson Smart Panel y cuenta con un diseño de tanque frontal súper compacto que ocupa poco espacio y permite verificar fácilmente los niveles de tinta. Con una garantía limitada y extendida hasta de 2 años4, Epson te respalda totalmente para que pueda imprimir sin cartuchos y sin preocupaciones.</p>",
    "disponible": true,
    "categoria": "impresoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 18500,
    "imagen": "https://static.wixstatic.com/media/ae191a_15204220f2474626b9c2ed044b5455f6~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": true,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_15204220f2474626b9c2ed044b5455f6~mv2.jpg"
    ]
  },
  {
    "id": "product_1726f6ae-e503-d967-47f0-c64f1d034f9a",
    "nombre": "Impresora Multifuncional HP DeskJet Ink Advantage 2874 Color Wifi Smart App AirP",
    "descripcion": "<p>La HP Deskjet Ink Advantage 2874 es una&nbsp;impresora multifuncional (todo en uno) económica y compacta, ideal para el hogar, que imprime, copia y escanea, con conectividad&nbsp;<strong>Wi-Fi</strong>&nbsp;para imprimir desde móviles y computadoras, usando la app&nbsp;HP Smart&nbsp;para una configuración y uso sencillos, y utiliza cartuchos de tinta HP 667, ofreciendo funciones básicas de color y calidad decente para tareas diarias</p><p>&nbsp;</p><ul>\t<li><strong>Funciones:</strong>&nbsp;Imprime, copia y escanea.</li>\t<li><strong>Conectividad:</strong>&nbsp;Wi-Fi (2.4 GHz) y USB 2.0, compatible con [Link: HP Smart https://www.tiktok.com/@informatica_dataplus/video/7445462437693869318}, Apple AirPrint, Chrome OS.</li>\t<li><strong>Tecnología:</strong>&nbsp;Inyección térmica de tinta HP, con cartuchos (negro y tricolor).</li>\t<li><strong>Velocidad:</strong>&nbsp;Hasta 7.5 ppm (negro) y 5.5 ppm (color).</li>\t<li><strong>Resolución:</strong>&nbsp;Hasta 1200x1200 dpi (negro) y 4800x1200 dpi optimizados (color).</li>\t<li><strong>Alimentación:</strong>&nbsp;Bandeja de entrada de 60 hojas, bandeja de salida de 25 hojas.</li>\t<li><strong>Doble Cara:</strong>&nbsp;Impresión manual.</li>\t<li><strong>Sostenibilidad:</strong>&nbsp;Fabricada con al menos un 60% de plástico reciclado.&nbsp;</li></ul><p><strong>Ideal para:</strong></p><ul>\t<li>Uso doméstico y pequeñas oficinas.</li>\t<li>Impresión de documentos, correos electrónicos y fotos ocasionales.</li>\t<li>Usuarios que buscan una solución económica y fácil de usar.&nbsp;</li></ul><p><strong>Consideraciones:</strong></p><ul>\t<li>No tiene Alimentador Automático de Documentos (AAD).</li>\t<li>Requiere cartuchos HP 667, con opciones XL de alto rendimiento.</li>\t<li>No incluye cable USB, debe adquirirse por separado</li></ul>",
    "disponible": true,
    "categoria": "impresoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 10500,
    "imagen": "https://static.wixstatic.com/media/ae191a_fb04ee2cf321484c84b0b2cc320246b9~mv2.avif",
    "moneda": "RD$",
    "specs": [],
    "oferta": true,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_fb04ee2cf321484c84b0b2cc320246b9~mv2.avif"
    ]
  },
  {
    "id": "product_c07df6b2-56df-5d1d-a1d7-5298b4aa52f5",
    "nombre": "IMPRESORA (MU) CANON PIXMA G3170 MFP P/S/C/USB/WIFI (5805C004AB)",
    "descripcion": "<p>La Canon G3170 es una&nbsp;impresora multifuncional&nbsp;MegaTank&nbsp;de inyección de tinta, ideal para hogar y oficinas pequeñas, que imprime, copia y escanea con alta eficiencia y bajo costo gracias a sus tanques de tinta rellenables, ofreciendo gran rendimiento (hasta 6,000 págs. B/N, 7,700 color), conectividad Wi-Fi y USB, y compatibilidad con dispositivos móviles y sistemas operativos como Windows, Mac y Chromebook, además de una pantalla LCD para facilitar su uso.&nbsp;</p><p>Características principales</p><ul>\t<li><strong>Multifuncional:</strong>&nbsp;Imprime, copia y escanea.</li>\t<li><strong>Sistema de tinta:</strong>&nbsp;MegaTank&nbsp;de tanques recargables, con tinta pigmentada negra para texto nítido y tintas a base de colorantes para colores vibrantes.</li>\t<li><strong>Alto rendimiento:</strong>&nbsp;Hasta 6,000 páginas en negro y 7,700 en color por juego de botellas.</li>\t<li><strong>Conectividad:</strong>&nbsp;Wi-Fi y USB 2.0, con soporte para impresión inalámbrica desde móviles y computadoras.</li>\t<li>** Velocidad de impresión:** 11 ipm (negro) / 6 ipm (color).</li>\t<li><strong>Resolución:</strong>&nbsp;4800 x 1200 dpi (color) / 600 x 600 dpi (negro).</li>\t<li><strong>Pantalla:</strong>&nbsp;LCD monocromática de 1.35\".</li>\t<li><strong>Compatibilidad:</strong>&nbsp;Windows, Mac, Chromebook, iOS y Android.</li>\t<li><strong>Papeles:</strong>&nbsp;Imprime sin bordes y soporta diversos tipos de papel (normal, fotográfico, sobres) hasta tamaño A4/Carta.&nbsp;</li></ul>",
    "disponible": true,
    "categoria": "impresoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 20900,
    "imagen": "https://static.wixstatic.com/media/ae191a_f0a95713749b40eebf0944c88f47bf52~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": true,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_f0a95713749b40eebf0944c88f47bf52~mv2.jpg"
    ]
  },
  {
    "id": "product_1c9fe7f6-3870-4384-866d-3e7bf63e4188",
    "nombre": "Copiadora Multifuncional Series imageRUNNER ADVANCE DX C3730i",
    "descripcion": "<p>La cartera extensa de impresoras multifuncionales imageRUNNER ADVANCE DX de Canon y las soluciones integradas, pueden ayudar a simplificar la experiencia del usuario final y la administración de la tecnología, a controlar de mejor forma la información confidencial y los costos de impresión, y a ayudar a garantizar que la inversión en tecnología pueda evolucionar de forma proactiva según las necesidades cambiantes.</p><p>Imprima hasta 35 ppm (B y N/color)</p><p>Escanee hasta 270 ipm (300 ppp) (B y N/color, a dos caras)</p><p>Imprima hasta un tamaño de 12\" × 18\"</p><p>Capacidad máxima de papel de 2,300 hojas</p>",
    "disponible": true,
    "categoria": "impresoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 159300,
    "imagen": "https://static.wixstatic.com/media/ae191a_12b1d8fa2dec4178990edc54214d53c4~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_12b1d8fa2dec4178990edc54214d53c4~mv2.jpg"
    ]
  },
  {
    "id": "product_ae6e9ef3-dbff-0b60-b88b-9f2022ac4e37",
    "nombre": "Impresora Digital Konica Bizhub C368 Color",
    "descripcion": "<p><strong>Konica Bizhub C368 Impresora Láser a COLOR | Tabloide Rebasado&nbsp;</strong></p><p>COPIADORA | IMPRESORA | ESCANER | FAX&nbsp;</p><ul>\t<li>Velocidad de impresión:&nbsp;<strong>36 ppm</strong></li>\t<li>Resolución: 1200 x 1200</li>\t<li>Tamaño máximo de papel&nbsp;<strong>Tabloide Rebasado | 12\" x 18\" | A3W</strong></li>\t<li>Gramaje soportado: 35 a 300 gramos</li>\t<li>Rendimiento Tóner Negro mensual: 28 mil al 5%</li>\t<li>Rendimiento Tóner Color mensual: 26 mil al 5%</li>\t<li>Volumen máximo de copiado mensual: 150 mil&nbsp;</li></ul>",
    "disponible": true,
    "categoria": "impresoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 195800,
    "imagen": "https://static.wixstatic.com/media/ae191a_7899012048244450859d770d2f7939bb~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_7899012048244450859d770d2f7939bb~mv2.jpg"
    ]
  },
  {
    "id": "product_517901a0-9c2c-e672-2233-4e62714aaccb",
    "nombre": "AltaLink C8130 / C8135 / C8145 / C8155 / C8170 Color Multifunction Printer",
    "descripcion": "<div><div><p><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span>Impresoras multifunción a color&nbsp;Xerox&nbsp;®&nbsp;AltaLink&nbsp;® serie C8100</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></p><p><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span>El asistente de lugar de trabajo digital ideal para equipos exigentes.</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></p></div></div><div><ul>\t<li><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span>Impresora multifunción a color compatible con Tabloide</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></li>\t<li><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span>Copiar, imprimir, escanear, enviar faxes y correos electrónicos</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></li>\t<li><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span>La interfaz de usuario intuitiva similar a una tableta le permite personalizar, simplificar y acelerar las tareas repetitivas.</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></li>\t<li><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span>Las funciones de movilidad nativas facilitan la conexión e impresión en cualquier dispositivo</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></li>\t<li><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span>Cierre la brecha entre el mundo físico y el digital con aplicaciones y soluciones para cada negocio</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></li>\t<li><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span>La seguridad integral está incorporada</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></li>\t<li><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span>Consistencia y reproducción de color superiores para el usuario crítico del color en la oficina</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></li></ul></div><div><div><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span>Producción</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><div><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span>Color</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></div></div><div><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span>Tamaño del papel</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><div><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span>Tabloide</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></div></div><div><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span>Arriba a</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><div><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span>70</span></span></span></span></span></span></span>ppm</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></div><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span>dependiendo del modelo</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></div><div><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span>Arriba a</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><div><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span>40 mil</span></span></span></span></span></span></span>páginas/me</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></div></div></div>",
    "disponible": true,
    "categoria": "impresoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 225500,
    "imagen": "https://static.wixstatic.com/media/ae191a_a77c4bac929d4a76811be50306654dcc~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_a77c4bac929d4a76811be50306654dcc~mv2.png"
    ]
  },
  {
    "id": "product_f50b5921-c65b-e2c8-bc43-024cc0b22854",
    "nombre": "IM C2500 Impresora Multifunción Láser Color Impresora Multifunción Láser Color",
    "descripcion": "<ul>\t<li>Ricoh IM C2500 Impresora Multifunción Láser Color Impresora Multifunción Láser Color</li>\t<li>Imprime hasta 25 ppm; copia, escaneo, fax opc.</li>\t<li>Res. máx. de impresión 1200x1200 dpi</li>\t<li>Capacidad de papel hasta 2,300 páginas</li></ul>",
    "disponible": true,
    "categoria": "impresoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 185990,
    "imagen": "https://static.wixstatic.com/media/ae191a_14b004d6f2784ad687ebba7602460fdc~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": true,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_14b004d6f2784ad687ebba7602460fdc~mv2.jpg"
    ]
  },
  {
    "id": "product_f4ce6882-0add-51c2-af94-a63b00d54a5e",
    "nombre": "Impresora multifunción HP LaserJet Enterprise M430f (3PZ55A)",
    "descripcion": "<p>Impresora apta para seguridad dinámica. Esta impresora está diseñada para funcionar solo con cartuchos que dispongan de un chip de HP nuevo o reutilizado, y utiliza medidas de seguridad dinámica para bloquear los cartuchos que usan un chip que no sea de HP. Las actualizaciones periódicas de firmware mantienen la eficacia de estas medidas y bloquean los cartuchos que funcionaban anteriormente. Un chip de HP reutilizado permite el uso de cartuchos reutilizados, rellenados o reacondicionados.</p><p>&nbsp;</p><p>Fácil de usar, simple de administrar</p><p>Cree equipos de trabajo para tener éxito sin añadir más a la bandeja. Ayude al personal a manejar el negocio donde quiera que ocurra y, a la vez, dé a TI el control de la flota que necesita mediante una impresora multifunción compacta creada para usarla y administrarla de forma simple.</p><p>&nbsp;</p><p>La impresión más segura del&nbsp;mundo&nbsp;1</p><p>Las impresoras HP ofrecen la mejor seguridad del&nbsp;sector&nbsp;1, ya que siempre están en guardia y detienen continuamente amenazas mientras se adaptan a otras nuevas que aparecen. Y solo las impresoras HP se pueden recuperar de ataques automáticamente, por lo que no es necesaria la intervención del personal de TI.</p><p>&nbsp;</p><p>Mayor productividad para fortalecer a los equipos de trabajo</p><p>Simplifique la colaboración y productividad con una impresora multifunción simplificada que se adapta a las formas en que las personas trabajan hoy en día: de forma rápida, ágil y conectada. Imprima texto y gráficos nítidos para que las empresas puedan verse profesionales todos los días; además escanee y haga copias con facilidad.</p><p>&nbsp;</p><p>Sostenibilidad se refiere a hacer negocios de manera inteligente</p><p>El propósito de una empresa es el de administrar sus recursos y hallar la mejor forma de hacerlo es responsabilidad de todos. Esta impresora multifunción compacta está diseñada para consumir poca energía, gracias a lo cual, las personas pueden completar tareas rápidamente y, a la vez, conservar la energía donde sea posible.</p>",
    "disponible": true,
    "categoria": "impresoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 36790,
    "imagen": "https://static.wixstatic.com/media/ae191a_8455508cdc3a4d7b8b41d88ed1f0a588~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_8455508cdc3a4d7b8b41d88ed1f0a588~mv2.png"
    ]
  },
  {
    "id": "product_9dd7e4d3-6dae-0d1b-6166-d48dbc72a542",
    "nombre": "IMPRESORA LASER MULTIFUNCIONAL CANON IMAGECLASS MF465DW",
    "descripcion": "<p>IMPRESORA LASER MULTIFUNCIONAL CANON IMAGECLASS MF465DW, WIRELESS (IMPRESION, COPIADO, ESCANEO, FAX). HASTA 40 PPM, CAPACIDAD DE PAPEL: 900 HOJAS. TAMAÑO MAXIMO DE DOCUMENTO PANEL: CARTA Y ADF: LEGAL. RESOLUCIÓN DE IMPRESIÓN HASTA 600 X 600 PPP. OPCIONES DE CONECTIVIDAD USB DE ALTA VELOCIDAD, WI-FI Y RED.</p>",
    "disponible": true,
    "categoria": "impresoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 33295,
    "imagen": "https://static.wixstatic.com/media/ae191a_c91199c964c24fcf862153f80833a1f6~mv2.jpeg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_c91199c964c24fcf862153f80833a1f6~mv2.jpeg"
    ]
  },
  {
    "id": "product_67274333-bb1e-d469-d8a9-48d863283246",
    "nombre": "Serie imageRUNNER ADVANCE 715iFZ III Blanco y negro | Compacta | Multifuncional",
    "descripcion": "<p>Imprima hasta 75 ppm (B/N) Escanee hasta 100 ipm (300 ppp) (B/N, color, dos caras) Imprima hasta en un tamaño de 8 1/2” x 14” Capacidad máxima de papel de 3,300 hojas.</p><p>&nbsp;</p><p>La cartera exhaustiva de impresoras multifuncionales imageRUNNER ADVANCE de Canon y las soluciones integradas ayudan a simplificar la experiencia del usuario final y la administración de la tecnología, controlar de mejor manera la información confidencial y los costos relacionados con la impresión; también a garantizar que la inversión en tecnología pueda evolucionar de forma proactiva según las necesidades cambiantes.</p>",
    "disponible": true,
    "categoria": "impresoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 95495,
    "imagen": "https://static.wixstatic.com/media/ae191a_48603c584b374042a6dbd208c388040f~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_48603c584b374042a6dbd208c388040f~mv2.jpg"
    ]
  },
  {
    "id": "product_6db28679-d9bf-cbef-daff-f7ffa7ed30fb",
    "nombre": "FOTOCOPIADORAS MULTIFUNCIÓN imageRUNNER ADVANCE 525iF III",
    "descripcion": "<p>Características Destacadas:</p><ul>\t<li>\t<p><strong>Tamaño de Papel</strong>: Compatible con papel grueso (Cover de 95 a 110 lb), incluyendo tamaños estándar y personalizados (de 3 7/8\" x 5 1/2\" a 8/2\" x 14\").</p>\t</li>\t<li>\t<p><strong>Tiempo de Activación</strong>: Rápido tiempo desde la activación del dispositivo hasta estar listo para copiar y operar desde el panel táctil.</p>\t</li>\t<li>\t<p><strong>Alimentación de Papel</strong>: Incluye opciones de alimentación por casete y módulos adicionales para aumentar la capacidad de papel.</p>\t</li>\t<li>\t<p><strong>Integración Web</strong>: Acepta impresiones PDF desde sitios web.</p>\t</li>\t<li>\t<p><strong>Compatibilidad</strong>: Compatible con diversos entornos y sistemas operativos, incluyendo AS/400, UNIX, Linux, y Citrix.</p>\t</li>\t<li>\t<p><strong>Seguridad Avanzada</strong>: Incluye características de seguridad estándar avanzadas para proteger la información confidencial y cumplir con las normativas vigentes.</p>\t</li></ul><p>&nbsp;</p><p>Especificaciones Técnicas:</p><ul>\t<li>\t<p><strong>Panel de Operación</strong>: Pantalla táctil WSVGA de 10.1\".</p>\t</li>\t<li>\t<p><strong>Memoria</strong>: RAM de 3.0 GB, Unidad de disco duro de 250 GB.</p>\t</li>\t<li>\t<p><strong>Interfaz de Red</strong>: 1000Base-T/100Base-TX/10Base-T, LAN inalámbrica (IEEE 802.11 b/g/n), opcional NFC y Bluetooth.</p>\t</li>\t<li>\t<p><strong>Almacenamiento</strong>: Hasta 100 buzones de entrada de usuario y 30,000 páginas almacenadas.</p>\t</li>\t<li>\t<p><strong>Resolución de Escaneo</strong>: Hasta 600 x 600 ppp.</p>\t</li>\t<li>\t<p><strong>Resolución de Impresión</strong>: Hasta 1200 x 1200 ppp.</p>\t</li>\t<li>\t<p><strong>Velocidad de Impresión</strong>: Hasta 55 ppm en tamaño Carta.</p>\t</li>\t<li>\t<p><strong>Capacidad de Papel</strong>: Estándar de 650 hojas, máxima de 3,300 hojas.</p>\t</li>\t<li>\t<p><strong>Tamaños de Papel</strong>: Compatible con diversos tamaños, desde 3 7/8\" x 5 7/8\" hasta 8 1/2\" x 14\".</p>\t</li>\t<li>\t<p><strong>Consumo de Energía</strong>: Máximo de 1,500 W, modo de espera de 29.77 W, modo dormir de 1.0 W.</p>\t</li>\t<li>\t<p><strong>Dimensiones y Peso</strong>: Modelo estándar mide 20 1/4\" x 23 5/8\" x 24 1/4\" y pesa aproximadamente 81.6 lb.</p>\t</li>\t<li>\t<p><strong>Opciones de Fax</strong>: Velocidad de módem de 33.6 Kbps, memoria hasta 30,000 páginas.</p>\t</li></ul><p>Funciones Adicionales:</p><ul>\t<li>\t<p><strong>Integración con la Nube</strong>: Compatible con Google Drive y otros servicios en la nube.</p>\t</li>\t<li>\t<p><strong>Seguridad de Datos</strong>: Encriptación de disco duro, autenticación de usuarios y control de acceso mediante PIN, contraseñas o tarjetas.</p>\t</li>\t<li>\t<p><strong>Administración Remota</strong>: Supervisión del estado de los dispositivos y nivel de consumibles, diagnósticos remotos, y actualizaciones de firmware regulares.</p>\t</li>\t<li>\t<p><strong>Eficiencia Energética</strong>: Certificación ENERGY STAR® y calificación Oro de EPEAT®.</p>\t</li></ul><p>Esta impresora multifuncional no solo ofrece una alta calidad y fiabilidad en sus funciones de impresión y copiado, sino que también está equipada con características avanzadas de seguridad y administración que la hacen ideal para cualquier entorno de oficina moderno.</p>",
    "disponible": true,
    "categoria": "impresoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 88500,
    "imagen": "https://static.wixstatic.com/media/ae191a_c9f83b096858485fb8cf8326ba8159cf~mv2.jpeg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_c9f83b096858485fb8cf8326ba8159cf~mv2.jpeg"
    ]
  },
  {
    "id": "product_72988d81-a01c-6ac2-9b9e-7fc85b756059",
    "nombre": "IMPRESORA LASER MULTIFUNCIONAL CANON IMAGERUNNER 1643I II, WIRELESS",
    "descripcion": "<p>IMPRESORA LASER MULTIFUNCIONAL CANON IMAGERUNNER 1643I II, WIRELESS 3 EN 1 (IMPRESION, COPIADO, ESCANEO,). HASTA 45 PPM, CAPACIDAD DE PAPEL: 650 HOJAS. TAMAÑO MAXIMO DE DOCUMENTO PANEL: CARTA Y ADF: LEGAL. RESOLUCIÓN DE IMPRESIÓN HASTA 600 X 600 DPI. OPCIONES DE CONECTIVIDAD USB DE ALTA VELOCIDAD, WI-FI Y RED, NFC</p>",
    "disponible": true,
    "categoria": "impresoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 45500,
    "imagen": "https://static.wixstatic.com/media/ae191a_ddade1c83d324d749964934888b4aaea~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_ddade1c83d324d749964934888b4aaea~mv2.jpg"
    ]
  },
  {
    "id": "product_306af719-2d94-f3b1-298a-04e47ecaf4b2",
    "nombre": "MICROSOFT WINDOWS SERVER STD STANDARD2022 64BIT SPANISH 1PK DSP OEI DVD 16 CORE",
    "descripcion": "<p>MICROSOFT WINDOWS SERVER STD STANDARD2022 64BIT SPANISH 1PK DSP OEI DVD 16 CORE</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 85125,
    "imagen": "https://static.wixstatic.com/media/ae191a_29ea13d0e01945ff9421e17cba69a11c~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_29ea13d0e01945ff9421e17cba69a11c~mv2.png"
    ]
  },
  {
    "id": "product_e0c5acf2-4b28-c616-4404-680fde552b44",
    "nombre": "LICENCIA ELECTRONICA MICROSOFT 365 PERSONAL-COPILOT- ALL LANGUAGES SUBSCR 1YR -",
    "descripcion": "<p>LICENCIA ELECTRONICA MICROSOFT 365 PERSONAL-COPILOT- ALL LANGUAGES SUBSCR 1YR - ELECTRONICA . SE ENTREGA EN SOBRE SELLADO</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 3995,
    "imagen": "https://static.wixstatic.com/media/ae191a_ba9746453b224a4196046dc8c05694a7~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_ba9746453b224a4196046dc8c05694a7~mv2.png"
    ]
  },
  {
    "id": "product_615f13f9-201b-e102-1425-a986c1dac1e1",
    "nombre": "Microsoft - MICROSOFT WINDOWS PRO 11 64BIT SPANISH LATAM",
    "descripcion": "<p>&nbsp;</p><p><strong>Microsoft - MICROSOFT WINDOWS PRO 11 64BIT SPANISH LATAM</strong></p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 15995,
    "imagen": "https://static.wixstatic.com/media/ae191a_cfd5e27685e340278d1ea5f3b08b27ce~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_cfd5e27685e340278d1ea5f3b08b27ce~mv2.png"
    ]
  },
  {
    "id": "product_96e8a061-9f7d-75b7-85e8-085b79dfc394",
    "nombre": "2CONNET POS 2C-POS-V11 MOBILE ANDROID VERIPHONE",
    "descripcion": "<p>2CONNET POS 2C-POS-V11 MOBILE ANDROID VERIPHONE</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 9500,
    "imagen": "https://static.wixstatic.com/media/ae191a_bf03a386c9804395821b4dbea72b83f5~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_bf03a386c9804395821b4dbea72b83f5~mv2.jpg"
    ]
  },
  {
    "id": "product_649bed9d-2804-ba35-3849-208f9fe3b5c4",
    "nombre": "2CONNET LECTOR/ESCANER 2D CODIGO 2C-SC930Z-2D",
    "descripcion": "<p>2CONNET LECTOR/ESCANER 2D CODIGO 2C-SC930Z-2D</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 2250,
    "imagen": "https://static.wixstatic.com/media/ae191a_362a89b8db0d4cd4b19061e3c0cf2937~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_362a89b8db0d4cd4b19061e3c0cf2937~mv2.jpg"
    ]
  },
  {
    "id": "product_4d1f93b3-d0b1-be6e-77c9-8161f82fcc30",
    "nombre": "2CONNET LECTOR/ESCANER 2D CODIGO DESKTOP 2C-SC710-2D",
    "descripcion": "<p>2CONNET LECTOR/ESCANER 2D CODIGO DESKTOP 2C-SC710-2D</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 3875,
    "imagen": "https://static.wixstatic.com/media/ae191a_e8bb3d28c5b84065a85800ccc2e46da0~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_e8bb3d28c5b84065a85800ccc2e46da0~mv2.jpg"
    ]
  },
  {
    "id": "product_cc00fa77-ba9c-1488-8989-c16230efc067",
    "nombre": "2CONNET LECTOR/ESCANER 2D CODIGO WIRELESS 2C-SC930ZW-2D",
    "descripcion": "<p>2CONNET LECTOR/ESCANER 2D CODIGO WIRELESS 2C-SC930ZW-2D</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 2562,
    "imagen": "https://static.wixstatic.com/media/ae191a_a5b9b780c1624ab9b65a9c772a673c39~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_a5b9b780c1624ab9b65a9c772a673c39~mv2.jpg"
    ]
  },
  {
    "id": "product_a465753a-280c-b0fd-ca1d-f3b7575d5512",
    "nombre": "2CONNET CASH DRAWER 2C-CD405R 5BILL-8COIN",
    "descripcion": "<p>2CONNET CASH DRAWER 2C-CD405R 5BILL-8COIN</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 3650,
    "imagen": "https://static.wixstatic.com/media/ae191a_bef4b7e0bb574a00bf37ac1cbe81a4bf~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_bef4b7e0bb574a00bf37ac1cbe81a4bf~mv2.jpg"
    ]
  },
  {
    "id": "product_bddb06d8-ebc4-8300-d7b5-3947860fe2b7",
    "nombre": "2CONNET CASH DRAWER 2C-CD330G 4BILL-5COIN",
    "descripcion": "<p>2CONNET CASH DRAWER 2C-CD330G 4BILL-5COIN</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 3150,
    "imagen": "https://static.wixstatic.com/media/ae191a_99e906fff26f429796dd035803224a18~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_99e906fff26f429796dd035803224a18~mv2.jpg"
    ]
  },
  {
    "id": "product_dac6ae2d-e638-7826-551c-93ba8c8ab637",
    "nombre": "2CONNET POS 2C-AIO-03 17.3P CI5 PC ALL IN ONE TOUCH",
    "descripcion": "<p>2CONNET POS 2C-AIO-03 17.3P CI5 PC ALL IN ONE TOUCH</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 29500,
    "imagen": "https://static.wixstatic.com/media/ae191a_51b6a7d84fad4ebebad68363835498cd~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_51b6a7d84fad4ebebad68363835498cd~mv2.jpg"
    ]
  },
  {
    "id": "product_0afa4df2-efa3-d749-e94e-afad3fd7e17d",
    "nombre": "2CONNET IMPRESORA 2C-P58-C BLUETOOTH 58MM PORTABLE (2PUL)",
    "descripcion": "<p>2CONNET IMPRESORA 2C-P58-C BLUETOOTH 58MM PORTABLE (2PUL)</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 3950,
    "imagen": "https://static.wixstatic.com/media/ae191a_e2a3831367b445a4ab7abcdae9acf767~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_e2a3831367b445a4ab7abcdae9acf767~mv2.jpg"
    ]
  },
  {
    "id": "product_63c983a0-a3b7-c187-5337-82d83e8054ca",
    "nombre": "2CONNET IMPRESORA 2C-P58-C BLUETOOTH 58MM PORTABLE (2PUL)",
    "descripcion": "<p>2CONNET IMPRESORA 2C-P58-C BLUETOOTH 58MM PORTABLE (2PUL)</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 2250,
    "imagen": "https://static.wixstatic.com/media/ae191a_6591183a85da4028b25ee60b091367a9~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_6591183a85da4028b25ee60b091367a9~mv2.jpg"
    ]
  },
  {
    "id": "product_8d2b7d1b-4d14-3e98-c350-a829fb628e02",
    "nombre": "IMPRESORA EPSON LX-350 MATRICIAL NEW C11CC24001",
    "descripcion": "<p>IMPRESORA EPSON LX-350 MATRICIAL NEW C11CC24001</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 22500,
    "imagen": "https://static.wixstatic.com/media/ae191a_68ffd9a4c13f41f89a4bd79aee20e63a~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_68ffd9a4c13f41f89a4bd79aee20e63a~mv2.jpg"
    ]
  },
  {
    "id": "product_93b06353-b4a2-f4a6-b2cf-3ee16348ae62",
    "nombre": "IMPRESORA EPSON FX-890II MATRICIAL NEW",
    "descripcion": "<p>IMPRESORA EPSON FX-890II MATRICIAL NEW</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 38500,
    "imagen": "https://static.wixstatic.com/media/ae191a_cc4fb5a014f94b81bd9b6b21f08d5fb7~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_cc4fb5a014f94b81bd9b6b21f08d5fb7~mv2.jpg"
    ]
  },
  {
    "id": "product_b518dbcf-2be6-c93c-d8a1-22b3b2ca7c68",
    "nombre": "2CONNET IMPRESORA 2C-LP427B USB LABEL 4.25P AJUSTABLE",
    "descripcion": "<p>2CONNET IMPRESORA 2C-LP427B USB LABEL 4.25P AJUSTABLE</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 10500,
    "imagen": "https://static.wixstatic.com/media/ae191a_7027be39440e42debec8105031e72482~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_7027be39440e42debec8105031e72482~mv2.jpg"
    ]
  },
  {
    "id": "product_1bd118e6-a472-f143-3828-d4fdbc46ccae",
    "nombre": "2CONNET IMPRESORA 2C-MP76-01 USB MATRICIAL",
    "descripcion": "<p>2CONNET IMPRESORA 2C-MP76-01 USB MATRICIAL</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 11500,
    "imagen": "https://static.wixstatic.com/media/ae191a_76307265ff814529bf507ad5a2af5a1b~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_76307265ff814529bf507ad5a2af5a1b~mv2.jpg"
    ]
  },
  {
    "id": "product_9e842d06-36dd-6ddc-0513-59329c3dd8b0",
    "nombre": "2CONNET IMPRESORA 2C-POS80-01-V7 USB+LAN+BT 80MM TERMICO C/CUTTER",
    "descripcion": "<p>2CONNET IMPRESORA 2C-POS80-01-V7 USB+LAN+BT 80MM TERMICO C/CUTTER</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 5250,
    "imagen": "https://static.wixstatic.com/media/ae191a_f1fd214f3a594f18b31821af08d1596f~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_f1fd214f3a594f18b31821af08d1596f~mv2.jpg"
    ]
  },
  {
    "id": "product_2010b21b-3f41-1c9c-b469-5dd02798a837",
    "nombre": "2CONNET IMPRESORA 2C-POS80-01-V6 USB 80MM TERMICO C/CUTTER",
    "descripcion": "<p>2CONNET IMPRESORA 2C-POS80-01-V6 USB 80MM TERMICO C/CUTTER</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 4325,
    "imagen": "https://static.wixstatic.com/media/ae191a_3bd99ca3fb1e486295e33948dbf4e1e0~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_3bd99ca3fb1e486295e33948dbf4e1e0~mv2.jpg"
    ]
  },
  {
    "id": "product_5c63e88e-4d2b-89bd-80d7-3813a1270555",
    "nombre": "2CONNET IMPRESORA 2C-POS58-BU USB+BT 58MM TERMICO 2P",
    "descripcion": "<p>2CONNET IMPRESORA 2C-POS58-BU USB+BT 58MM TERMICO 2P</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 1995,
    "imagen": "https://static.wixstatic.com/media/ae191a_0e62cb89e1e04203a664a752eec7c950~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_0e62cb89e1e04203a664a752eec7c950~mv2.jpg"
    ]
  },
  {
    "id": "product_2064e380-ebc1-d7d6-8697-cc4b35ba2610",
    "nombre": "IMPRESORA HP LASERJET PRO 4003N, UP TO 40PPM NEGRO, LAN - UP TO 1200 X 1200 OPTI",
    "descripcion": "<p>IMPRESORA HP LASERJET PRO 4003N, UP TO 40PPM NEGRO, LAN - UP TO 1200 X 1200 OPTIMIZED DPI NEGRO. HP EPRINT, 1 USB, 1 GIGABIT, INALAMBRICA. (2Z611A) REEMPLAZA LA M404N - UTILIZA TONER W1510A/X</p>",
    "disponible": true,
    "categoria": "impresoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 15780,
    "imagen": "https://static.wixstatic.com/media/ae191a_1042f82b8ec24958ba294156dee094eb~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_1042f82b8ec24958ba294156dee094eb~mv2.png"
    ]
  },
  {
    "id": "product_9049a3c6-5988-1829-05b5-94880928948e",
    "nombre": "Brother - IMPRESORA BROTHER INKBENEFIT TANK DCPT420W, MULTIFUNCIONAL (ESCANER< C",
    "descripcion": "<p><strong>Brother - IMPRESORA BROTHER INKBENEFIT TANK DCPT420W, MULTIFUNCIONAL (ESCANER&lt; COPIADORA, IMPRESORA, SISTEMA DE TINTA CONTINUA, BOTELLAS DE TINTA, USB, WIFI, 28PPM NEGRO, 11PPM COLOR (DRAFT), 6000X1200 DPI, USA LAS BOTELLAS DE TINTAS BTD60BK Y BT5001Y, BT5001M, BT5001C</strong></p>",
    "disponible": true,
    "categoria": "impresoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 16995,
    "imagen": "https://static.wixstatic.com/media/ae191a_371e055da02b4c7ba82d398d73e95f9e~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": true,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_371e055da02b4c7ba82d398d73e95f9e~mv2.png"
    ]
  },
  {
    "id": "product_a19ef14e-a6f8-4629-ffe8-36347eeb5a03",
    "nombre": "IMPRESORA CANON PIXMA G1110, SISTEMA TINTA CONTINUA, COLOR, APROX. 26 PPM EN NEG",
    "descripcion": "<p>IMPRESORA CANON PIXMA G1110, SISTEMA TINTA CONTINUA, COLOR, APROX. 26 PPM EN NEGRO Y 13PPM EN COLOR (8.8 IPM NEGRO Y 5 IPM COLOR ISO), IMPRIME HASTA 6000 PAGINAS EN NEGRO Y 7000 EN COLOR. SOPORTA PAPELES ESPECIALES, CABEZALES REEMPLAZABLES. NO COMPATIBLE CON MAC. (2314C004AC)</p>",
    "disponible": true,
    "categoria": "impresoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 13995,
    "imagen": "https://static.wixstatic.com/media/ae191a_39a239162ff748f7bf3bf2c883ecd10d~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": true,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_39a239162ff748f7bf3bf2c883ecd10d~mv2.png"
    ]
  },
  {
    "id": "product_4d29670f-d60d-7951-8571-03716490a0b5",
    "nombre": "IMPRESORA REFURBISHED EPSON ECOTANK L3110 AIO | IMPRIME, COPIA Y ESCANEA, SISTEM",
    "descripcion": "<p>IMPRESORA REFURBISHED EPSON ECOTANK L3110 AIO | IMPRIME, COPIA Y ESCANEA, SISTEMA DE TINTA CONTINUA | ESCÁNER DE 48 BITS X 600 X 1200 | OPEN BOX</p>",
    "disponible": true,
    "categoria": "impresoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 12500,
    "imagen": "https://static.wixstatic.com/media/ae191a_62800fdce97a47a69669a27d48e640da~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": true,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_62800fdce97a47a69669a27d48e640da~mv2.png"
    ]
  },
  {
    "id": "product_1a40931b-7852-6262-f10e-3f50cb69994e",
    "nombre": "IMPRESORA CANON MAXIFY GX7010, SISTEMA TINTA CONTINUA, COLOR, 45PPM EN NEGRO Y 2",
    "descripcion": "<p>IMPRESORA CANON MAXIFY GX7010, SISTEMA TINTA CONTINUA, COLOR, 45PPM EN NEGRO Y 24PPM A COLOR, ADF (50 HOJAS), IMPRESION DUPLEX, ESCANEO DUPLEX, WIFI, ENTHERNET, DOBLE BANDEJA FRONTAL (500 HOJAS) Y BANDEJA SUPERIOR (100 HOJAS), IMPRIME HASTA 9,000 PAGINAS EN NEGRO (MODO ECO) Y 21,000 EN COLOR. CABEZAL Y CARTUCHO MANTENIMIENTO REMPLAZABLES (MC-G01). CICLO MENSUAL HASTA 45,000 IMPRESIONES.</p>",
    "disponible": true,
    "categoria": "impresoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 48915,
    "imagen": "https://static.wixstatic.com/media/ae191a_368d53a77e4b4be091333d80848161e5~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": true,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_368d53a77e4b4be091333d80848161e5~mv2.png"
    ]
  },
  {
    "id": "product_54535e5c-d24d-3c2f-0a9a-6c37ab00a35a",
    "nombre": "IMPRESORA EPSON ECOTANK M1120, MONO TANQUE, IMPRIME, INALAMBRICA, BLANCO Y NEGRO",
    "descripcion": "<p>IMPRESORA EPSON ECOTANK M1120, MONO TANQUE, IMPRIME, INALAMBRICA, BLANCO Y NEGRO, HASTA 1440 X 720 DPI DE RESOLUCIÓN, 32 PPM.</p>",
    "disponible": true,
    "categoria": "impresoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 17500,
    "imagen": "https://static.wixstatic.com/media/ae191a_6377ee4ec8794a53b55548da8e0e1ce8~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": true,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_6377ee4ec8794a53b55548da8e0e1ce8~mv2.png"
    ]
  },
  {
    "id": "product_4cbc956c-b21e-c64d-32ba-9f9920f0ab29",
    "nombre": "IMPRESORA HP DESKJET INK ADVANTAGE 2875 - ALL IN ONE PRINTER - COLOR - PRINT SPE",
    "descripcion": "<p>IMPRESORA HP DESKJET INK ADVANTAGE 2875 - ALL IN ONE PRINTER - COLOR - PRINT SPEED BLACK: ISO, UP TO 8.5 PPM, DRAFT, UP TO 20 PPM. PRINT SPEED COLOR: ISO, UP TO 5.5 PPM, DRAFT, UP TO 16 PPM. SCAN RESOLUTION, OPTICAL UP TO 1200DPI. COPY RESOLUTION: UP TO 600X300 DPI. WIRELESS, USB. EPRINT (USA CARTUCHO HP 667) - REEMPLAZA DESKJET 2775</p>",
    "disponible": true,
    "categoria": "impresoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 7850,
    "imagen": "https://static.wixstatic.com/media/ae191a_c7e8579252c4431a87b1b1b5a8452f4c~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": true,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_c7e8579252c4431a87b1b1b5a8452f4c~mv2.png"
    ]
  },
  {
    "id": "product_64c15459-5827-eea9-0621-2771262ec8d7",
    "nombre": "ROUTER WIRELESS TP-LINK ARCHER A6 AC1200 2.4GHZ/300MBPS, LAN WAN 5.0GHZ/867MBPS,",
    "descripcion": "<p>ROUTER WIRELESS TP-LINK ARCHER A6 AC1200 2.4GHZ/300MBPS, LAN WAN 5.0GHZ/867MBPS, MU-MIMO, 4 PUERTOS GIGABIT, 802.11AC/A/B/G/N, WPS, DUAL BAND, 5 ANTENAS</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 4356,
    "imagen": "https://static.wixstatic.com/media/ae191a_bbc49467d6b34f8f86822348d2822451~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_bbc49467d6b34f8f86822348d2822451~mv2.png"
    ]
  },
  {
    "id": "product_da169aec-527b-2e06-aea9-a348c4468f98",
    "nombre": "ROUTER WIRELESS LINKSYS MR20EC HYDRA 6 , DUAL BAND WIFI 6, AX3000\\ 2.4 GHZ Y 5GH",
    "descripcion": "<p>ROUTER WIRELESS LINKSYS MR20EC HYDRA 6 , DUAL BAND WIFI 6, AX3000\\ 2.4 GHZ Y 5GHZ\\ CUBRE DE 1500-3000 MT2, TECNOLOGÍA INTELLIGENT MESH\\ HASTA 3.0 GBPS \\ 4 X ETHERNET GIGABIT 1 X ETHERNET GIGABIT WAN 1 X USB 3.0</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 11540,
    "imagen": "https://static.wixstatic.com/media/ae191a_9c0c151f329f4cb0bbf6e8bcadbef8f9~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_9c0c151f329f4cb0bbf6e8bcadbef8f9~mv2.png"
    ]
  },
  {
    "id": "product_4f50588c-0711-9be0-1ce8-bd01863c28b7",
    "nombre": "ROUTER WIRELESS TP-LINK ARCHER C6, 2.4GHZ/ 1200MBPS, 5.0GHZ/433MBPS, 1 PUERTO WA",
    "descripcion": "<p>ROUTER WIRELESS TP-LINK ARCHER C6, 2.4GHZ/ 1200MBPS, 5.0GHZ/433MBPS, 1 PUERTO WAN GIGABIT, IPV6 + 4 PUERTOS GIGABIT, 1 PUERTO USB, 802.11AC/A/B/G/N, WPS, DUAL BAND.</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 3876,
    "imagen": "https://static.wixstatic.com/media/ae191a_8b3339e276d4449c94193d7f4b9059af~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_8b3339e276d4449c94193d7f4b9059af~mv2.png"
    ]
  },
  {
    "id": "product_efb16c97-5fa4-5122-8bac-b954407c0479",
    "nombre": "Linksys - ROUTER WIRELESS LINKSYS MR20MS, DUAL BAND \\ (2.4 GHZ Y 5 GHZ \\ TECNOLO",
    "descripcion": "<p><strong>Linksys - ROUTER WIRELESS LINKSYS MR20MS, DUAL BAND \\ (2.4 GHZ Y 5 GHZ \\ TECNOLOGÍA INTELLIGENT MESH\\ HASTA 1.3 GBPS \\ 4 X ETHERNET GIGABIT 1 X ETHERNET GIGABIT WAN 1 X USB 3.0</strong></p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 12345,
    "imagen": "https://static.wixstatic.com/media/ae191a_3f52ba1b3c24467ea36441a39f5916d3~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_3f52ba1b3c24467ea36441a39f5916d3~mv2.png"
    ]
  },
  {
    "id": "product_6e35ee53-06f3-6a82-b262-cb5546a7cca5",
    "nombre": "GABINETE DE PARED NEXXT 9U, 600 X 600MM, SEMI ENSAMBLADO (NPC-F9U66B)",
    "descripcion": "<p>GABINETE DE PARED NEXXT 9U, 600 X 600MM, SEMI ENSAMBLADO (NPC-F9U66B)</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 19654,
    "imagen": "https://static.wixstatic.com/media/ae191a_fa981f64e0d64c54bccd66447712c6bb~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_fa981f64e0d64c54bccd66447712c6bb~mv2.png"
    ]
  },
  {
    "id": "product_60048c69-095e-45eb-3d72-4ae18312d04f",
    "nombre": "Nexxt - SWITCH NEXXT PROFESIONAL 24 PUERTOS GIGABIT NEXXT AXIS2400R, NO ADMINIS",
    "descripcion": "<p>&nbsp;</p><p><strong>Nexxt - SWITCH NEXXT PROFESIONAL 24 PUERTOS GIGABIT NEXXT AXIS2400R, NO ADMINISTRABLE, DESKTOP / RACK MOUNT, 10/100/1000 / 1U / CARCASA METALICA</strong></p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 7654,
    "imagen": "https://static.wixstatic.com/media/ae191a_822d0885f971487185ae8e4b6e3434ae~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_822d0885f971487185ae8e4b6e3434ae~mv2.png"
    ]
  },
  {
    "id": "product_2f7ff222-c817-71c9-cb42-745ebc068da7",
    "nombre": "GABINETE DE PARED NEXXT 6U, DOBLE BISAGRAS, ENSAMBLADO (NPC-P6U65B)",
    "descripcion": "<p>GABINETE DE PARED NEXXT 6U, DOBLE BISAGRAS, ENSAMBLADO (NPC-P6U65B)</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 22725,
    "imagen": "https://static.wixstatic.com/media/ae191a_7013fc6029ca4639915ff154dfc505f4~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_7013fc6029ca4639915ff154dfc505f4~mv2.png"
    ]
  },
  {
    "id": "product_e6b92b7d-53b1-3f75-7e19-84c26d92818b",
    "nombre": "PBX IP GRANDSTREAM UCM6302, 1000 USUARIOS, 200 LLAMADAS SIMULTÁNEAS, VIDEOCONFER",
    "descripcion": "<p>PBX IP GRANDSTREAM UCM6302, 1000 USUARIOS, 200 LLAMADAS SIMULTÁNEAS, VIDEOCONFERENCIA HASTA 20, CONFERENCIA DE VOZ HASTA 80, LCD A COLOR DE 320X240 CON PANTALLA TÁCTIL</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 28765,
    "imagen": "https://static.wixstatic.com/media/ae191a_a2679856969445da961e67297288982f~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_a2679856969445da961e67297288982f~mv2.png"
    ]
  },
  {
    "id": "product_34497512-0497-2d0f-cd4b-3a8d04140a6f",
    "nombre": "SWITCH 9 PUERTOS TP-LINK TL-SF1008D, NO ADMINISTRABLE/DESKTOP, 9 PUERTOS 10/100M",
    "descripcion": "<p>SWITCH 9 PUERTOS TP-LINK TL-SF1008D, NO ADMINISTRABLE/DESKTOP, 9 PUERTOS 10/100MBPS.</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 4321,
    "imagen": "https://static.wixstatic.com/media/ae191a_b25b0e65d14942879b69717c3face27a~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_b25b0e65d14942879b69717c3face27a~mv2.png"
    ]
  },
  {
    "id": "product_db85ed19-7336-f7f7-8cf5-7b10703d99a4",
    "nombre": "SWITCH 5 PUERTOS LINKSYS SE3005, NO ADMINISTRABLE/DESKTOP, 5 PUERTOS GIGABIT ETH",
    "descripcion": "<p>SWITCH 5 PUERTOS LINKSYS SE3005, NO ADMINISTRABLE/DESKTOP, 5 PUERTOS GIGABIT ETHERNET.</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 2516,
    "imagen": "https://static.wixstatic.com/media/ae191a_81cec88fe042419ebfaa4d97ba1b640f~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_81cec88fe042419ebfaa4d97ba1b640f~mv2.png"
    ]
  },
  {
    "id": "product_0382cda5-fb05-33f4-0e11-7670eefce521",
    "nombre": "TELEFONO IP GRANDSTREAM GXP-2130, 3-LÍNEAS, 3-SIP",
    "descripcion": "<p>TELEFONO IP GRANDSTREAM GXP-2130, 3-LÍNEAS, 3-SIP</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 9654,
    "imagen": "https://static.wixstatic.com/media/ae191a_7d4d099b7b084feb929cde0bb2e6a576~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_7d4d099b7b084feb929cde0bb2e6a576~mv2.png"
    ]
  },
  {
    "id": "product_0cd09772-cd85-2982-9f48-1bf03cbc995e",
    "nombre": "ROLLO DE CABLE DE ALARMA NEXXT PROFESIONAL, CONTRA INCENDIOS BLINDADO FPLR 1000",
    "descripcion": "<p>ROLLO DE CABLE DE ALARMA NEXXT PROFESIONAL, CONTRA INCENDIOS BLINDADO FPLR 1000 PIES, 18 AWG, 1 PAR, ROJO, (NFC-18FRR)</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 13300,
    "imagen": "https://static.wixstatic.com/media/ae191a_191b1319a9e44c22abe1fb4070a0a37f~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_191b1319a9e44c22abe1fb4070a0a37f~mv2.png"
    ]
  },
  {
    "id": "product_4d1b4eb3-be17-9ec6-82ce-b1f6e570527a",
    "nombre": "Click Cam - ROLLO DE CABLE UTP CLICK-CAM CAT5 1,000 PIES, 0.5MM, NEGRO, EXTERIOR",
    "descripcion": "<p><strong>Click Cam - ROLLO DE CABLE UTP CLICK-CAM CAT5 1,000 PIES, 0.5MM, NEGRO, EXTERIOR (CC-CAT5CCA OUT)</strong></p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 4665,
    "imagen": "https://static.wixstatic.com/media/ae191a_6db57eeb91b04db9b98e312eb67f3e62~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_6db57eeb91b04db9b98e312eb67f3e62~mv2.png"
    ]
  },
  {
    "id": "product_3f6544d9-d473-0d38-2bec-83dea937edcf",
    "nombre": "Nexxt - ROLLO DE CABLE UTP CAT-5E, 328 PIES, 25 AWG, 100% COBRE, CHAQUETA TIPO C",
    "descripcion": "<p><strong>Nexxt - ROLLO DE CABLE UTP CAT-5E, 328 PIES, 25 AWG, 100% COBRE, CHAQUETA TIPO CM, 4 PARES, 100HZ, (AB355NXT41) GRIS</strong></p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 3888,
    "imagen": "https://static.wixstatic.com/media/ae191a_8d6181e39d7e46508dd7d9acde3b7e2a~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_8d6181e39d7e46508dd7d9acde3b7e2a~mv2.png"
    ]
  },
  {
    "id": "product_671f6fc4-d692-e380-ca89-98626a5ff9e5",
    "nombre": "TP-Link - SWITCH -TL-SF1016D - 16 PUERTOS 10/100 - NO ADMINISTRABLE - NO SE PUED",
    "descripcion": "<p><strong>TP-Link - SWITCH -TL-SF1016D - 16 PUERTOS 10/100 - NO ADMINISTRABLE - NO SE PUEDE MONTAR EN RACK</strong></p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 2550,
    "imagen": "https://static.wixstatic.com/media/ae191a_76826e0c0e7d446aae4fe4aa627a84c9~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_76826e0c0e7d446aae4fe4aa627a84c9~mv2.png"
    ]
  },
  {
    "id": "product_55870f51-8893-6502-a142-7098ea80d792",
    "nombre": "SWITCH NEXXT ESSENTIAL DE 5 PUERTOS GIGABIT, DE ESCRITORIO 110/220V. (NSW-N501G)",
    "descripcion": "<p>SWITCH NEXXT ESSENTIAL DE 5 PUERTOS GIGABIT, DE ESCRITORIO 110/220V. (NSW-N501G)</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 1884,
    "imagen": "https://static.wixstatic.com/media/ae191a_66aa672ff77a4603ab6f7ce2f8ed02e9~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_66aa672ff77a4603ab6f7ce2f8ed02e9~mv2.png"
    ]
  },
  {
    "id": "product_66d5d9f8-5b93-4b36-2475-5a9f5bc1089f",
    "nombre": "TELEFONO IP GRANDSTREAM GXP-1625, 2 LÍNEA, 2-SIP",
    "descripcion": "<p>TELEFONO IP GRANDSTREAM GXP-1625, 2 LÍNEA, 2-SIP</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 3995,
    "imagen": "https://static.wixstatic.com/media/ae191a_5492a5a048004da688699f4ce0765fb4~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_5492a5a048004da688699f4ce0765fb4~mv2.png"
    ]
  },
  {
    "id": "product_7fcce9aa-6500-df47-53c6-86d3dd91ae0b",
    "nombre": "TELEFONO IP GRANDSTREAM GRP2602P, 2-LÍNEAS Y 4-SIP ( TENGA EN CUENTA AGREGAR LA",
    "descripcion": "<p>TELEFONO IP GRANDSTREAM GRP2602P, 2-LÍNEAS Y 4-SIP ( TENGA EN CUENTA AGREGAR LA FUENTE DE PODER CODIGO: 91109)</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 3970,
    "imagen": "https://static.wixstatic.com/media/ae191a_f7ee099b7a1148938c3444308a8af6d0~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_f7ee099b7a1148938c3444308a8af6d0~mv2.png"
    ]
  },
  {
    "id": "product_1cd505a9-bac4-8eed-506f-9956be86a86b",
    "nombre": "ROUTER WIRELESS MESH NEXXT BOLT AC1200, SISTEMA INALAMBRICO COMPLETO PARA EL HOG",
    "descripcion": "<p>ROUTER WIRELESS MESH NEXXT BOLT AC1200, SISTEMA INALAMBRICO COMPLETO PARA EL HOGAR (MESH), 1 UNIDAD, DUAL BAND 2.4GHZ/5GHZ - 300/867 MBPS, 3X ETHERNET PORT GIGABIT, NEGRO (NCM-C1200)</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 3121,
    "imagen": "https://static.wixstatic.com/media/ae191a_03da32e218b24556bacb525d61be4a05~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_03da32e218b24556bacb525d61be4a05~mv2.png"
    ]
  },
  {
    "id": "product_932ae7a7-17e6-3992-08ba-bc085290d88d",
    "nombre": "ROUTER WIRELESS TENDA F3 300 MBPS - 3 ANTENAS BANDWITH CONTROL, 1 PUERTO WAN, 3",
    "descripcion": "<p>ROUTER WIRELESS TENDA F3 300 MBPS - 3 ANTENAS BANDWITH CONTROL, 1 PUERTO WAN, 3 PUERTOS LAN, FUNCION DE REPETIDOR</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 1960,
    "imagen": "https://static.wixstatic.com/media/ae191a_bdc17b24e12d43ad8660964a6e4b948a~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_bdc17b24e12d43ad8660964a6e4b948a~mv2.png"
    ]
  },
  {
    "id": "product_7a858b24-2947-c49b-ce6b-b188fdf694e1",
    "nombre": "NVR HIKVISION, 16 CANALES, 4K, 16 POE NETWORK CONNECTIONS, GRABACION HASTA 8 MP,",
    "descripcion": "<p>NVR HIKVISION, 16 CANALES, 4K, 16 POE NETWORK CONNECTIONS, GRABACION HASTA 8 MP, PLUG AND PLAY.</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 24450,
    "imagen": "https://static.wixstatic.com/media/ae191a_f922927c17594964b84cc2e07590967d~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_f922927c17594964b84cc2e07590967d~mv2.png"
    ]
  },
  {
    "id": "product_2b841c5b-cb1c-f44d-9658-b81d6ed9f9d6",
    "nombre": "DVR MINI HIKVISION, 4 CANALES, SOPORTA 1080P LITE,1 SATA HASTA 4TB.",
    "descripcion": "<p>DVR MINI HIKVISION, 4 CANALES, SOPORTA 1080P LITE,1 SATA HASTA 4TB.</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 4865,
    "imagen": "https://static.wixstatic.com/media/ae191a_4ff45a1edca149dd925b190ac4f7883c~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_4ff45a1edca149dd925b190ac4f7883c~mv2.png"
    ]
  },
  {
    "id": "product_77d1c717-45ce-5456-7e08-3264c21643f8",
    "nombre": "DVR HIKVISION, 8 CANALES, 1080P LITE, 1U H.264 DVR",
    "descripcion": "<p>DVR HIKVISION, 8 CANALES, 1080P LITE, 1U H.264 DVR</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 5990,
    "imagen": "https://static.wixstatic.com/media/ae191a_5313f0f1dcdc48dc8ca9e5cbecdb1d2e~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_5313f0f1dcdc48dc8ca9e5cbecdb1d2e~mv2.png"
    ]
  },
  {
    "id": "product_89edac99-077c-d685-7c3c-ad992ec6045f",
    "nombre": "CAMARA INTERIOR MARCA EZVIZ, HASTA 256GB SD, 1920 X 1080P, DETECTOR DE MOVIMIENT",
    "descripcion": "<p>CAMARA INTERIOR MARCA EZVIZ, HASTA 256GB SD, 1920 X 1080P, DETECTOR DE MOVIMIENTO, IR 10MTS/33FT, CHARLA BIDIRECCIONAL</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 2680,
    "imagen": "https://static.wixstatic.com/media/ae191a_2af90e70356b4dd481922c50634cba74~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_2af90e70356b4dd481922c50634cba74~mv2.png"
    ]
  },
  {
    "id": "product_ef3c7800-a25e-9277-a84b-c46e71917a6f",
    "nombre": "CAMARA CON BATERIA EXTERIOR MARCA EZVIZ, MODELO EB8, 4G LTE, 2K, DETECTOR DE MOV",
    "descripcion": "<p>CAMARA CON BATERIA EXTERIOR MARCA EZVIZ, MODELO EB8, 4G LTE, 2K, DETECTOR DE MOVIMIENTO Y SEGUIMEINTO AUTOMATICO, CHARLA BIDIRECCIONAL, VISION NOCTURNA A COLOR Y 360, DEFENSA ACTIVA CON SIRENA Y LUZ (NO WIFI),SOPORTA PANEL SOLAR EZVIZ</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 13338,
    "imagen": "https://static.wixstatic.com/media/ae191a_71e3ec0f49fc4d97b38a092396a230ef~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_71e3ec0f49fc4d97b38a092396a230ef~mv2.png"
    ]
  },
  {
    "id": "product_e5c4bfda-e84f-92cf-10b3-745fd92cabd9",
    "nombre": "CAMARA BULLET EXTERIOR MARCA EZVIZ, MODELO H3C, (SOPORTA 512GB), 3K, VISION NOCT",
    "descripcion": "<p>CAMARA BULLET EXTERIOR MARCA EZVIZ, MODELO H3C, (SOPORTA 512GB), 3K, VISION NOCTURNA COLOR,DETECTOR DE MOVIMIENTO, IR 30M, WIFI 2.4 GHZ.</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 5995,
    "imagen": "https://static.wixstatic.com/media/ae191a_5e89a861c33840beb7d9f56f846f6578~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_5e89a861c33840beb7d9f56f846f6578~mv2.png"
    ]
  },
  {
    "id": "product_f6052740-0562-e872-343d-d3db54ed8de0",
    "nombre": "CAMARA DE VIGILANCIA HIKVISION, IP, PTZ, 4MP, IP66, SMART HYBRID-LIGHT PT",
    "descripcion": "<p>CAMARA DE VIGILANCIA HIKVISION, IP, PTZ, 4MP, IP66, SMART HYBRID-LIGHT PT</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 6743,
    "imagen": "https://static.wixstatic.com/media/ae191a_b91bd8f64f98437693e5cd9b4a5fbf3e~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_b91bd8f64f98437693e5cd9b4a5fbf3e~mv2.png"
    ]
  },
  {
    "id": "product_c55c54c3-8c77-e555-a8e5-d5314f7d60f6",
    "nombre": "CAMARA DE VIGILANCIA, HIKVISION, ANALOGA, HD720P, TURRENT, 1 MP CMOS IMAGE SENSO",
    "descripcion": "<p>CAMARA DE VIGILANCIA, HIKVISION, ANALOGA, HD720P, TURRENT, 1 MP CMOS IMAGE SENSOR, IP66, DOME.</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 1890,
    "imagen": "https://static.wixstatic.com/media/ae191a_735f79e6155d47bea20ebf6b9537a17f~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_735f79e6155d47bea20ebf6b9537a17f~mv2.png"
    ]
  },
  {
    "id": "product_882aef19-4c7b-1cb3-ed45-ccf086c8d343",
    "nombre": "CAMARA DE VIGILANCIA HIKVISION, ANALOGA, BULLET, 1MP, 2.8MM, 720P, IR 20 MTS, IP",
    "descripcion": "<p>CAMARA DE VIGILANCIA HIKVISION, ANALOGA, BULLET, 1MP, 2.8MM, 720P, IR 20 MTS, IP66.</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 1990,
    "imagen": "https://static.wixstatic.com/media/ae191a_6aeffb4b265a45fe972296524471b8ac~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_6aeffb4b265a45fe972296524471b8ac~mv2.png"
    ]
  },
  {
    "id": "product_b1e45f1e-2833-54b6-cd80-f3a5490a2f92",
    "nombre": "CAMARA DE VIGILANCIA HIKVISION, ANALOGA, DOMO, 2MP, TORRETA FIJA, COLORVU, APERT",
    "descripcion": "<p>CAMARA DE VIGILANCIA HIKVISION, ANALOGA, DOMO, 2MP, TORRETA FIJA, COLORVU, APERTURA F1, 24/7 DIAS A COLOR,RESOLUCION MAXIMA:1920 × 1080, SENSOR DE IMAGEN CMOS, IP67,</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 3822,
    "imagen": "https://static.wixstatic.com/media/ae191a_29128a40957942dfbeb6e9cfa52901a2~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_29128a40957942dfbeb6e9cfa52901a2~mv2.png"
    ]
  },
  {
    "id": "product_6bbb44c8-ab60-9b30-4184-9098ac8e8874",
    "nombre": "CAMARA DE VIGILANCIA NEXXT EXTERIOR, SMART WIFI (HOME AUTOMATION), 2K+, 5MP, FIJ",
    "descripcion": "<p>CAMARA DE VIGILANCIA NEXXT EXTERIOR, SMART WIFI (HOME AUTOMATION), 2K+, 5MP, FIJA, DIA Y NOCHE, RANURA PARA MICRO-SD, APLICACION DE GRABACION, LUCES AUTOMATICAS 90 LUMENS, FILTRO PARA CUERPO HUMANO, IP65, VISION NOCTURNA A COLOR, (NHC-OF10)</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 3993,
    "imagen": "https://static.wixstatic.com/media/ae191a_071731ec1027499988bb7fb50c30af98~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_071731ec1027499988bb7fb50c30af98~mv2.png"
    ]
  },
  {
    "id": "product_97dbcf20-629c-fa39-aa47-60a6f219f4ef",
    "nombre": "CAMARA DE VIGILANCIA, EZVIZ CS-H8C, PTZ, VISIÓN NOCTURNA EN COLOR, TARJETA MICRO",
    "descripcion": "<p>CAMARA DE VIGILANCIA, EZVIZ CS-H8C, PTZ, VISIÓN NOCTURNA EN COLOR, TARJETA MICROSD HASTA 512 GB, COBERTURA 360°, CONVERSACIÓN BIDIRECCIONAL, 1080P, H.265 / H.264</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 4590,
    "imagen": "https://static.wixstatic.com/media/ae191a_1a0f1a2b94fb4b9a9360a4031a8355d6~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_1a0f1a2b94fb4b9a9360a4031a8355d6~mv2.png"
    ]
  },
  {
    "id": "product_9f37d6c9-61a8-14ab-3416-5901b97a2cb5",
    "nombre": "CAMARA BULLET EXTERIOR MARCA EZVIZ, MODELO H3C, (SOPORTA 512GB), 2K, DETECTOR DE",
    "descripcion": "<p>CAMARA BULLET EXTERIOR MARCA EZVIZ, MODELO H3C, (SOPORTA 512GB), 2K, DETECTOR DE MOVIMIENTO, IR 30M, WIFI 2.4 GHZ.</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 4759,
    "imagen": "https://static.wixstatic.com/media/ae191a_c987a11b933e4333aacfe602c35c2c55~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_c987a11b933e4333aacfe602c35c2c55~mv2.png"
    ]
  },
  {
    "id": "product_cde7dd51-248d-2164-111f-f9eefba88ce6",
    "nombre": "CAMARA DE TABLERO PARA VEHICULOS CAR AND DRIVER, PANTALLA DE 3\" LCD TFT 16:9, 32",
    "descripcion": "<p>CAMARA DE TABLERO PARA VEHICULOS CAR AND DRIVER, PANTALLA DE 3\" LCD TFT 16:9, 320X240, LUZ NOCTURNA, GRAN ANGULAR, GRABACION DE VOZ Y BUCLE, REGISTRO DE TIEMPO, RESOLUCION 1,3 M PÍXELES 640X480P/30FPS. (CDC609).</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 3350,
    "imagen": "https://static.wixstatic.com/media/ae191a_9b2f3758f7894458be255ddda58f0ed6~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_9b2f3758f7894458be255ddda58f0ed6~mv2.png"
    ]
  },
  {
    "id": "product_339db6b5-d1d2-ffe0-8682-8a00c30017c3",
    "nombre": "CAMARA DE EXTERIOR MARCA EZVIZ, MODELO H9C DUAL, SOPORTA MEMORIA HASTA 512 , DET",
    "descripcion": "<p>CAMARA DE EXTERIOR MARCA EZVIZ, MODELO H9C DUAL, SOPORTA MEMORIA HASTA 512 , DETECTOR DE MOVIMIENTO, CHARLA BIDIRECCIONAL, ALERTA DE VOZ, IP66.</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 6911,
    "imagen": "https://static.wixstatic.com/media/ae191a_bbfc08f01d044bb1afafe26f68eea5b6~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_bbfc08f01d044bb1afafe26f68eea5b6~mv2.png"
    ]
  },
  {
    "id": "product_97e66fc8-a760-4064-87bb-25ff375b6558",
    "nombre": "Tesla Fridge 193Wh Portable Power Station",
    "descripcion": "<h3><span>Description</span></h3><ul><li><span>SUIT FOR: Specifically for Lioncooler PX-series solar portable freezer, PX30/PX40/PX50 car refrigerator removable battery.</span></li><li><span>ULTRA HIGH CAPACITY: 193Wh 52000mA super-capacity battery, which continuously powers the refrigerator, allows it to be used continuously for 10 hours at 0℃/32℉.</span></li><li><span>MULTI-FUNCTIONAL: This battery can not only power the refrigerator but also be a multi-functional mobile power bank. It comes with DC/USB/TYPE-C Output Port, which can charge your phone, laptop, tablet, and more. Built-in an LED flashlight that can be used for outdoor lighting, highly sturdy and durable design make it's perfect for outdoor activities.</span></li><li><span>MULTIPLE CHARGE METHODS: Battery can be charged through a 120v AC, 12v/24V DC adapter, or 12v solar panel (this product does not include solar panels), greatly reducing the limitation of the refrigerator and letting the car refrigerator truly support wireless use</span></li><li><span>5V/3A USB PORT: The extra USB, Type-C, and QC 3.0 Charging port can charge all your small digital devices like tablets and phones effectively. Passed American UL, FCC, CE, PSE, ROHS certification and provides a 1-year quality warranty by Acopower.</span></li></ul><p><span><strong>Packing list</strong></span></p><ul><li>1 X Portable power stations</li></ul><p></p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 17006,
    "imagen": "https://static.wixstatic.com/media/8df99c_e327446da5704a4f96dc75fd79797c36~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/8df99c_e327446da5704a4f96dc75fd79797c36~mv2.jpg"
    ]
  },
  {
    "id": "product_89ce0e2e-81e5-4b49-a07e-95da00de0e7a",
    "nombre": "WHALE With Nylon Strap – Bluetooth IPX7 Waterproof Portable Outdoor Speaker With",
    "descripcion": "<p style=\"text-align: left;\"><span style=\"color: rgb(14, 27, 77);\">Introducing the Jabees <strong>WHALE Bluetooth IPX7 Waterproof Portable Outdoor Speaker</strong> - your ultimate companion for non-stop music and adventure.&nbsp;</span></p><ul><li>Immerse yourself in Epic Sound: Dual full-range speakers and dual bass radiators to deliver powerful <strong>30W booming stereo sound</strong>.</li><li><strong>15-Hour playtime</strong>: Enjoy your music for extended periods without needing to recharge.</li><li><strong>Built-in power bank</strong>: allowing you to charge your phone and other devices from the speaker's battery.</li><li><strong>IPX7 Waterproof</strong> and adventure-ready.</li><li><strong>Portable</strong> and versatile with detachable shoulder strap.</li><li>Double the fun with true wireless technology: Pair two speakers together to <strong>amplify the audio output to 60W.</strong></li></ul>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 5028.75,
    "imagen": "https://static.wixstatic.com/media/8df99c_95359259d2ae49cca036295fc1880ee6~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/8df99c_95359259d2ae49cca036295fc1880ee6~mv2.png"
    ]
  },
  {
    "id": "product_2c0dd6f3-15d9-cb4c-595d-003dfe46c1cb",
    "nombre": "Servicio de Renta de Impresora",
    "descripcion": "<p>Para que comprar cuando puedes Rentar y ahorrar. Empiece a economizar en equipos aquí. Y disfrute de los grandes beneficios.<br><br>¡Alquila una impresora y disfruta de múltiples beneficios!<br>✔️ Pago mensual fijo y controlado.<br>✔️ Olvídate del mantenimiento y las reparaciones.<br>✔️ Sin grandes inversiones.<br>✔️ Impresoras personalizadas según tus necesidades.<br>✔️ Mejora tus servicios a clientes.<br>¡Contáctanos ahora!<br>FRONET TECNOLOGÍA SRL.</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 0,
    "imagen": "https://static.wixstatic.com/media/ae191a_516efca1d89841288f466408a3301872~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_516efca1d89841288f466408a3301872~mv2.png"
    ]
  },
  {
    "id": "product_09436eab-f12b-182d-3660-967528a07b60",
    "nombre": "IMPRESORA EPSON WF-C5890 MULTIFUNCIONAL WORKFORCE PRO, SISTEMA DE BOLSA DE TINTA",
    "descripcion": "<p>Con la tecnología PrecisionCore Heat-Free®, la impresora multifunción a color WorkForce® Pro WF-C5890 presenta la próxima generación de tecnología de impresión de inyección de tinta. Con el consumo de energía más bajo de su clase¹, la WF-C5890 ofrece una gran productividad, velocidades de impresión de 25 ISO ppm (negro/color)† y una rápida salida de la primera página prácticamente sin tiempo de espera. Esta impresora multifunción incluye un innovador sistema de paquetes de tinta reemplazables para ayudar a minimizar sus intervenciones: puede imprimir hasta 5.000 páginas ISO en color y 10.000 páginas ISO en negro con paquetes de tinta reemplazables².</p>",
    "disponible": true,
    "categoria": "impresoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 48765,
    "imagen": "https://static.wixstatic.com/media/ae191a_ff36d56180da46bfb2a66fa49d7c16d2~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_ff36d56180da46bfb2a66fa49d7c16d2~mv2.jpg"
    ]
  },
  {
    "id": "product_9d70f23b-32f8-5b73-31bb-e838ac8cd401",
    "nombre": "MONITOR LCD 24 DELL WIDE USED GRADO -B- MARCA: DELL",
    "descripcion": "<p>MONITOR LCD 24 DELL WIDE USED GRADO -B-</p><p>MARCA: DELL</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 4000,
    "imagen": "https://static.wixstatic.com/media/ae191a_b26daeeb1c0f41078c497226ae2cfad2~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_b26daeeb1c0f41078c497226ae2cfad2~mv2.jpg"
    ]
  },
  {
    "id": "product_dede5201-2182-056e-7ef3-8a6155573ef1",
    "nombre": "MONITOR LCD 23 DELL WIDE USED GRADO -B- MARCA: DELL",
    "descripcion": "<p>MONITOR LCD 23 DELL WIDE USED GRADO -B-</p><p>MARCA: DELL</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 3975,
    "imagen": "https://static.wixstatic.com/media/ae191a_a17dee0e6732435cbdac50daee609683~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_a17dee0e6732435cbdac50daee609683~mv2.jpg"
    ]
  },
  {
    "id": "product_337257df-e82e-5276-cdc7-2596eefe2eea",
    "nombre": "MONITOR LCD 20 DELL WIDE USED GRADO -B- MARCA: DELL",
    "descripcion": "<p>MONITOR LCD 20 DELL WIDE USED GRADO -B-</p><p>MARCA: DELL</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 2585,
    "imagen": "https://static.wixstatic.com/media/ae191a_be830a315f974a978a72507e434a3639~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_be830a315f974a978a72507e434a3639~mv2.jpg"
    ]
  },
  {
    "id": "product_f7bdded3-7b75-2552-2b79-fcd0c29f0db7",
    "nombre": "MONITOR LCD 19 DELL CUADRADO USED GRADO -A- MARCA: DELL",
    "descripcion": "<p>MONITOR LCD 19 DELL CUADRADO USED GRADO -A-</p><p>MARCA: DELL</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 1450,
    "imagen": "https://static.wixstatic.com/media/ae191a_e04a1b8bdc764f01a1bb17e9075374a7~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_e04a1b8bdc764f01a1bb17e9075374a7~mv2.jpg"
    ]
  },
  {
    "id": "product_d7216af6-5261-2f42-8406-0feeccefaf1f",
    "nombre": "AOC - MONITOR 32\" (31.5\") GAMING QD OLED UHD 165HZ",
    "descripcion": "<p><strong>AOC - MONITOR 32\" (31.5\") GAMING QD OLED UHD 165HZ</strong></p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 87813.5,
    "imagen": "https://static.wixstatic.com/media/ae191a_2f9856939f31484ab239f22b69e35e3e~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_2f9856939f31484ab239f22b69e35e3e~mv2.png"
    ]
  },
  {
    "id": "product_065aec5e-a560-21ca-2a34-bf4e2aaa130b",
    "nombre": "Samsung - MONITOR 24\" LF24T350 LED",
    "descripcion": "<p><strong>Samsung - MONITOR 24\" LF24T350 LED</strong></p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 6872.94,
    "imagen": "https://static.wixstatic.com/media/ae191a_e87a36037c9b4afca9dc0a81be2ef9b2~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_e87a36037c9b4afca9dc0a81be2ef9b2~mv2.png"
    ]
  },
  {
    "id": "product_3d82a3df-66ca-a354-69f8-0bbee0f08c15",
    "nombre": "AOC - MONITOR 27\", 1920 X 1080 4MS 100HZ",
    "descripcion": "<p><strong>AOC - MONITOR 27\", 1920 X 1080 4MS 100HZ</strong></p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 10990.43,
    "imagen": "https://static.wixstatic.com/media/ae191a_a0f7585330534d25a72647f505cd50fe~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_a0f7585330534d25a72647f505cd50fe~mv2.png"
    ]
  },
  {
    "id": "product_f4abadc0-330e-8b95-c231-2faf0a9cb158",
    "nombre": "AOC - MONITOR AOC PORSCHE 34\" GAMING 240HZ (PD34)",
    "descripcion": "<p><strong>AOC - MONITOR AOC PORSCHE 34\" GAMING 240HZ (PD34)</strong></p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 93308,
    "imagen": "https://static.wixstatic.com/media/ae191a_c8b4155b63c543719d7530b65c2c1583~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_c8b4155b63c543719d7530b65c2c1583~mv2.png"
    ]
  },
  {
    "id": "product_1fde3ab5-cf85-a18a-68b9-74b1107a37ee",
    "nombre": "HIKVISION - MONITOR SIN BORDES FHD IPS DE 27\", 1 HDMI,1 VGA, VESA STAND BRACKET,",
    "descripcion": "<p><strong>HIKVISION - MONITOR SIN BORDES FHD IPS DE 27\", 1 HDMI,1 VGA, VESA STAND BRACKET, TRABAJO 24/7, 100 HZ</strong></p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 9913,
    "imagen": "https://static.wixstatic.com/media/ae191a_d2b2521e3ef54426b1cc593fd42b61d2~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_d2b2521e3ef54426b1cc593fd42b61d2~mv2.png"
    ]
  },
  {
    "id": "product_52be52d8-25b3-5139-00d5-b9d087101b6b",
    "nombre": "TONER COMPATIBLE CON HP CF400 NEGRO MARCA: N/A",
    "descripcion": "<p>TONER COMPATIBLE CON HP CF400 NEGRO</p><p>MARCA: N/A</p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 1835,
    "imagen": "https://static.wixstatic.com/media/ae191a_9aa72a2423fc48b69bc35db5e1838741~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_9aa72a2423fc48b69bc35db5e1838741~mv2.jpg"
    ]
  },
  {
    "id": "product_cd442294-43f4-c425-c50a-6d5e4e8d8f80",
    "nombre": "TONER COMPATIBLE CON HP CE505A BLACK GENERICO",
    "descripcion": "<p>TONER COMPATIBLE CON HP CE505A BLACK GENERICO</p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 1495,
    "imagen": "https://static.wixstatic.com/media/ae191a_aea94def7ed741a7a18c4e3c6aa4bb53~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_aea94def7ed741a7a18c4e3c6aa4bb53~mv2.jpg"
    ]
  },
  {
    "id": "product_7da35220-6a18-75a7-eb7d-ebfc596e8c98",
    "nombre": "TONER COMPATIBLE CON HP 131A CF-213 MAGENTA GENERICO",
    "descripcion": "<p>TONER COMPATIBLE CON HP 131A CF-213 MAGENTA GENERICO</p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 1790,
    "imagen": "https://static.wixstatic.com/media/ae191a_6a66dd2d6b924a98a531371d52c36c11~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_6a66dd2d6b924a98a531371d52c36c11~mv2.jpg"
    ]
  },
  {
    "id": "product_f81ee919-cda0-29f1-553b-6a2feaeed2b1",
    "nombre": "TONER COMPATIBLE CON HP 131A CF-210 BLACK GENERICO",
    "descripcion": "<p>TONER COMPATIBLE CON HP 131A CF-210 BLACK GENERICO</p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 1790,
    "imagen": "https://static.wixstatic.com/media/ae191a_31c4d00516054a1e9e733fc1f4512f4b~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_31c4d00516054a1e9e733fc1f4512f4b~mv2.jpg"
    ]
  },
  {
    "id": "product_9902fe23-34fa-a4cd-61db-300867e01c08",
    "nombre": "TONER ASTA COMPATIBLE CON CANON 119 / 719 GENERICO",
    "descripcion": "<p>TONER ASTA COMPATIBLE CON CANON 119 / 719 GENERICO</p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 1790,
    "imagen": "https://static.wixstatic.com/media/ae191a_a207a27a06ba4b69ba2df85eeb167ed8~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_a207a27a06ba4b69ba2df85eeb167ed8~mv2.jpg"
    ]
  },
  {
    "id": "product_b1223b79-b9cc-725a-e083-6e938277df9d",
    "nombre": "TONER ASTA COMPATIBLE CON CANON 119 / 719 GENERICO",
    "descripcion": "<p>TONER ASTA COMPATIBLE CON CANON 119 / 719 GENERICO</p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 1495,
    "imagen": "https://static.wixstatic.com/media/ae191a_d64a8fa14ff948fb85d96335d0c87560~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_d64a8fa14ff948fb85d96335d0c87560~mv2.jpg"
    ]
  },
  {
    "id": "product_208b0a02-e9b1-5cb2-a4c1-c30329f141a9",
    "nombre": "TONER ASTA COMPATIBLE BROTHER TN-760 BK",
    "descripcion": "<p>TONER ASTA COMPATIBLE BROTHER TN-760 BK</p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 1575,
    "imagen": "https://static.wixstatic.com/media/ae191a_56311fce568d457da8de121d7df27724~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_56311fce568d457da8de121d7df27724~mv2.jpg"
    ]
  },
  {
    "id": "product_07ae6ba6-3e64-acfa-014d-8af3d4e328a7",
    "nombre": "TONER AICON COMPATIBLE CON HP 283A GENERICO",
    "descripcion": "<p>TONER AICON COMPATIBLE CON HP 283A GENERICO</p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 795,
    "imagen": "https://static.wixstatic.com/media/ae191a_781d1c4e2eef49ad8cdfc7d8dd5c4f57~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_781d1c4e2eef49ad8cdfc7d8dd5c4f57~mv2.jpg"
    ]
  },
  {
    "id": "product_2b60e379-e308-ac72-9495-7f5cb0066413",
    "nombre": "TONER HP CF226 / 052 BLACK GENERICO",
    "descripcion": "<p>TONER HP CF226 / 052 BLACK GENERICO</p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 1495,
    "imagen": "https://static.wixstatic.com/media/ae191a_4cf6a0cdc6214ef2afdf063e5666d290~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_4cf6a0cdc6214ef2afdf063e5666d290~mv2.jpg"
    ]
  },
  {
    "id": "product_47d73035-177c-5374-fb41-f2850bebcdc5",
    "nombre": "CARTUCHO DE MANTENIMIENTO MC-G02 PARA IMPRESORAS CANON SERIE G.",
    "descripcion": "<p>CARTUCHO DE MANTENIMIENTO MC-G02 PARA IMPRESORAS CANON SERIE G.</p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 2990,
    "imagen": "https://static.wixstatic.com/media/ae191a_c95c49a84bdc444482fb165a6be8afc4~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_c95c49a84bdc444482fb165a6be8afc4~mv2.png"
    ]
  },
  {
    "id": "product_aa57228d-e592-9488-0bd5-b568579312d1",
    "nombre": "CARTUCHO DE MANTENIMIENTO MC-G01 CANON PARA IMPRESORAS SERIE GX.",
    "descripcion": "<p>CARTUCHO DE MANTENIMIENTO MC-G01 CANON PARA IMPRESORAS SERIE GX.</p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 2990,
    "imagen": "https://static.wixstatic.com/media/ae191a_003a66780d53450292e175031940382c~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_003a66780d53450292e175031940382c~mv2.png"
    ]
  },
  {
    "id": "product_c9bee403-8c18-3bdf-a11d-490cca6e7acd",
    "nombre": "CAJA DE MANTENIMIENTO PARA IMPRESORA EPSON L4150, L4160, L6161, L6170, L6171, L6",
    "descripcion": "<p>CAJA DE MANTENIMIENTO PARA IMPRESORA EPSON L4150, L4160, L6161, L6170, L6171, L6191, M2170, M3170.</p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 2990,
    "imagen": "https://static.wixstatic.com/media/ae191a_4f321b7e5ad24b159cbc8738bf9c6383~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_4f321b7e5ad24b159cbc8738bf9c6383~mv2.png"
    ]
  },
  {
    "id": "product_c6978127-7be9-de3a-eadc-84fe3a247fea",
    "nombre": "KIT CABEZAL CANON NEGRO (BH10) + CABEZAL DE COLOR (CH10) PARA IMPRESORAS CANON G",
    "descripcion": "<p>KIT CABEZAL CANON NEGRO (BH10) + CABEZAL DE COLOR (CH10) PARA IMPRESORAS CANON G2160, G3160, G5010, G6010, G7010.</p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 4995,
    "imagen": "https://static.wixstatic.com/media/ae191a_171e0fe240584b07b067c8dbca7ddcc6~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_171e0fe240584b07b067c8dbca7ddcc6~mv2.png"
    ]
  },
  {
    "id": "product_2eef56ce-4cdd-bce2-518a-2f3479a7ee86",
    "nombre": "Canon - KIT DE TINTAS CANON GI-16 (BK,C,M,Y) + CABEZAL MAXIFY (GX6010 Y GX7010)",
    "descripcion": "<p><strong>Canon - KIT DE TINTAS CANON GI-16 (BK,C,M,Y) + CABEZAL MAXIFY (GX6010 Y GX7010)</strong></p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 22500,
    "imagen": "https://static.wixstatic.com/media/ae191a_717d81d99bf2443abb655e067a1d6366~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_717d81d99bf2443abb655e067a1d6366~mv2.png"
    ]
  },
  {
    "id": "product_f8c48afc-e0b0-4a78-1014-b23a126348f9",
    "nombre": "KIT CABEZAL CANON CH-11R/CH-11L NEGRO/COLOR. PARA IMPRESORAS FOTOGRAFICAS PIXMA",
    "descripcion": "<p>KIT CABEZAL CANON CH-11R/CH-11L NEGRO/COLOR. PARA IMPRESORAS FOTOGRAFICAS PIXMA G510 Y PIXMA G610. KIT CONTIENE UN CABEZAL DERECHO (PARA LOS COLORES CIAN, MAGENTA Y AMARILLO) Y UN CABEZAL IZQUIERDO (PARA LOS COLORES ROJO, GRIS Y NEGRO).</p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 4790,
    "imagen": "https://static.wixstatic.com/media/ae191a_d041d85d93d74d93b1d5ca1b866569ea~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_d041d85d93d74d93b1d5ca1b866569ea~mv2.png"
    ]
  },
  {
    "id": "product_a5ec869a-ada4-f3e0-f89f-665c39f06dec",
    "nombre": "HP - TONER HP - 230A - W2303A - MAGENTA - 1,800 PAGINAS - PARA IMPRESORA LASERJ",
    "descripcion": "<p>&nbsp;</p><p><strong>HP - TONER HP - 230A - W2303A - MAGENTA - 1,800 PAGINAS - PARA IMPRESORA LASERJET 4201, 4202, 4203, 4301, 4302, 4303</strong></p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 9100,
    "imagen": "https://static.wixstatic.com/media/ae191a_37a732b88a0e4f6cb0b66bdb7d85df89~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_37a732b88a0e4f6cb0b66bdb7d85df89~mv2.png"
    ]
  },
  {
    "id": "product_55761f5d-8033-2e17-5ec0-3a2f5256348a",
    "nombre": "TONER HP 215A - W2310 - NEGRO - 1,050 PAGINAS - PARA IMPRESORA COLOR LASERJET -",
    "descripcion": "<p>TONER HP 215A - W2310 - NEGRO - 1,050 PAGINAS - PARA IMPRESORA COLOR LASERJET - M155A - M155NW - M182NW - M183FW</p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 4480,
    "imagen": "https://static.wixstatic.com/media/ae191a_b5914af5fe7d4eb2bfb74497c96547ab~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_b5914af5fe7d4eb2bfb74497c96547ab~mv2.png"
    ]
  },
  {
    "id": "product_67cda0b1-de62-c004-cd7d-769433709bc6",
    "nombre": "HP - TONER HP - 145A - W1450A - NEGRO - 1,500 PAGINAS - PARA IMPRESORA LASERJET",
    "descripcion": "<p>&nbsp;</p><p><strong>HP - TONER HP - 145A - W1450A - NEGRO - 1,500 PAGINAS - PARA IMPRESORA LASERJET 3003DN - 3003DW - 3103FDW - 3103FDN</strong></p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 5600,
    "imagen": "https://static.wixstatic.com/media/ae191a_43cea125596a4f20acbdff854f2c7c2d~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_43cea125596a4f20acbdff854f2c7c2d~mv2.png"
    ]
  },
  {
    "id": "product_8d1b7b49-3836-0611-2891-c9e931a82efa",
    "nombre": "TONER HP 58A - CF258A - NEGRO - 3,000 PAGINAS - PARA IMPRESORA LASERJET M404N -",
    "descripcion": "<p>TONER HP 58A - CF258A - NEGRO - 3,000 PAGINAS - PARA IMPRESORA LASERJET M404N - M404DW - M428FDW - M428DW, M430F</p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 9450,
    "imagen": "https://static.wixstatic.com/media/ae191a_691d1cf138fc4e4bba2f0c8cde7f440f~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_691d1cf138fc4e4bba2f0c8cde7f440f~mv2.png"
    ]
  },
  {
    "id": "product_3d36a519-82e3-b0ce-54ad-02db3e0a635b",
    "nombre": "HP - TONER HP - 230A - W2301A - CYAN - 1,800 PAGINAS - PARA IMPRESORA LASERJET",
    "descripcion": "<p>&nbsp;</p><p><strong>HP - TONER HP - 230A - W2301A - CYAN - 1,800 PAGINAS - PARA IMPRESORA LASERJET 4201, 4202, 4203, 4301, 4302, 4303</strong></p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 9100,
    "imagen": "https://static.wixstatic.com/media/ae191a_bd02aea7e0044091935bef4c403cc873~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_bd02aea7e0044091935bef4c403cc873~mv2.png"
    ]
  },
  {
    "id": "product_2aeebd99-81d0-bfb0-439b-e01be5a5717f",
    "nombre": "HP - TONER HP - 230A - W2300A - NEGRO - 2,000 PAGINAS - PARA IMPRESORA LASERJET",
    "descripcion": "<p><strong>HP - TONER HP - 230A - W2300A - NEGRO - 2,000 PAGINAS - PARA IMPRESORA LASERJET 4201, 4202, 4203, 4301, 4302, 4303</strong></p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 7500,
    "imagen": "https://static.wixstatic.com/media/ae191a_d4a09b7b87234057a7aa223e05928ece~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_d4a09b7b87234057a7aa223e05928ece~mv2.png"
    ]
  },
  {
    "id": "product_d160b6ca-4b06-6bed-902a-a543b1efbe48",
    "nombre": "TONER HP 26A - CF226A - NEGRO - 3,100 PAGINAS - PARA IMPRESORA LASERJET M402/M42",
    "descripcion": "<p>TONER HP 26A - CF226A - NEGRO - 3,100 PAGINAS - PARA IMPRESORA LASERJET M402/M426.</p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 10750,
    "imagen": "https://static.wixstatic.com/media/ae191a_45bc18f3ff0848bcaaef8dbc175e4bbb~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_45bc18f3ff0848bcaaef8dbc175e4bbb~mv2.png"
    ]
  },
  {
    "id": "product_cb711454-9e68-c20d-cb87-66af49b9e3e0",
    "nombre": "TONER HP 30A - CF230A - NEGRO - 1,600 PAGINAS - PARA IMPRESORA LASERJET - M203DN",
    "descripcion": "<p>TONER HP 30A - CF230A - NEGRO - 1,600 PAGINAS - PARA IMPRESORA LASERJET - M203DN, M203DW, M227FDW, M227SDN</p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 6155,
    "imagen": "https://static.wixstatic.com/media/ae191a_53a63ce022ae49bdb8f02ce7e55c5190~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_53a63ce022ae49bdb8f02ce7e55c5190~mv2.png"
    ]
  },
  {
    "id": "product_3c5ee804-2901-3c2f-3d97-17dda2774b11",
    "nombre": "TONER HP - 151A - W1510A - NEGRO - 3,050 PAGINAS - PARA IMPRESORA LASERJET - 400",
    "descripcion": "<p>TONER HP - 151A - W1510A - NEGRO - 3,050 PAGINAS - PARA IMPRESORA LASERJET - 4003 - 4102 - 4103</p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 9580,
    "imagen": "https://static.wixstatic.com/media/ae191a_6e678a12437d48998c9039f79569657b~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_6e678a12437d48998c9039f79569657b~mv2.png"
    ]
  },
  {
    "id": "product_4daab3e3-f938-4e51-4ad5-0c4aadc17847",
    "nombre": "TONER HP 105A - W1105A - NEGRO - 1,000 PAGINAS - PARA IMPRESORAS LASERJET 103A -",
    "descripcion": "<p>TONER HP 105A - W1105A - NEGRO - 1,000 PAGINAS - PARA IMPRESORAS LASERJET 103A - 107A - 107R - 107W - 108A - 108W - 131A - 133PN - 135AG - 135R - 135W - 135WG, M137FNW,</p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 4282,
    "imagen": "https://static.wixstatic.com/media/ae191a_d9db70b3a2c24d829730c245858a43ac~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_d9db70b3a2c24d829730c245858a43ac~mv2.png"
    ]
  },
  {
    "id": "product_ce7bae9f-dff8-fe98-745f-93e6ebe12b1a",
    "nombre": "Brother - BOTELLA DE TINTA BROTHER - BT5001Y - YELLOW - 48.8ML - PARA IMPRESORA",
    "descripcion": "<p><strong>Brother - BOTELLA DE TINTA BROTHER - BT5001Y - YELLOW - 48.8ML - PARA IMPRESORA DCP-T420 - T520W - T720DW - T920DW</strong></p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 595,
    "imagen": "https://static.wixstatic.com/media/ae191a_d5265da85fad4bb490267cdb6361bea0~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_d5265da85fad4bb490267cdb6361bea0~mv2.png"
    ]
  },
  {
    "id": "product_8d28aa69-4a5a-792d-5e1c-fed6dfea798b",
    "nombre": "Brother - BOTELLA DE TINTA BROTHER - BT5001M - MAGENTA - 48.8ML - PARA IMPRESOR",
    "descripcion": "<p>&nbsp;</p><p><strong>Brother - BOTELLA DE TINTA BROTHER - BT5001M - MAGENTA - 48.8ML - PARA IMPRESORA DCP-T420 - T520W - T720DW - T920DW</strong></p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 595,
    "imagen": "https://static.wixstatic.com/media/ae191a_734caa59eae445548cc5d4c7ebef1af2~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_734caa59eae445548cc5d4c7ebef1af2~mv2.png"
    ]
  },
  {
    "id": "product_a4c34e3b-7e2e-af1a-b7f4-4f5cf4c38059",
    "nombre": "Brother - BOTELLA DE TINTA BROTHER - BT5001C - CYAN - 48.8ML - PARA IMPRESORA D",
    "descripcion": "<p>&nbsp;</p><p><strong>Brother - BOTELLA DE TINTA BROTHER - BT5001C - CYAN - 48.8ML - PARA IMPRESORA DCP-T420 - T520W - T720DW - T920DW</strong></p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 590,
    "imagen": "https://static.wixstatic.com/media/ae191a_8edfdd8a701149ea892a17e6d412d645~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_8edfdd8a701149ea892a17e6d412d645~mv2.png"
    ]
  },
  {
    "id": "product_9a45f18c-acb9-580f-a1dd-51534c69d7c2",
    "nombre": "Brother - BOTELLA DE TINTA BROTHER - BTD60BK - NEGRO - 108ML - PARA IMPRESORA DC",
    "descripcion": "<p><strong>Brother - BOTELLA DE TINTA BROTHER - BTD60BK - NEGRO - 108ML - PARA IMPRESORA DCP-T420 - T520W - T720DW - T920DW</strong></p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 795,
    "imagen": "https://static.wixstatic.com/media/ae191a_244f725f312e4803b3907ece2d3634de~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_244f725f312e4803b3907ece2d3634de~mv2.png"
    ]
  },
  {
    "id": "product_d4dfb80a-d404-a100-b1cf-9465390cbba9",
    "nombre": "BOTELLA DE TINTA EPSON T504320-AL MAGENTA PARA IMPRESORA L4150, L4160, L6161, L6",
    "descripcion": "<p>BOTELLA DE TINTA EPSON T504320-AL MAGENTA PARA IMPRESORA L4150, L4160, L6161, L6171, L6191, L6270, L4260, L14150, L4150, L6171, C11CG23301</p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 550,
    "imagen": "https://static.wixstatic.com/media/ae191a_f6ecbc938a0c4e5183f7ad495381835d~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_f6ecbc938a0c4e5183f7ad495381835d~mv2.jpg"
    ]
  },
  {
    "id": "product_78dcaeda-c334-11ca-8da4-fa777e143007",
    "nombre": "BOTELLA DE TINTA EPSON T504420-AL 504 AMARILLA PARA IMPRESORA L4150, L4160, L616",
    "descripcion": "<p>BOTELLA DE TINTA EPSON T504420-AL 504 AMARILLA PARA IMPRESORA L4150, L4160, L6161, L6171, L6191, L6270, L4260, L14150, L4150, L6171, C11CG23301</p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 550,
    "imagen": "https://static.wixstatic.com/media/ae191a_e4faeef07ad846f2a0745c04e29178b7~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_e4faeef07ad846f2a0745c04e29178b7~mv2.jpg"
    ]
  },
  {
    "id": "product_98c3dbbc-ad9e-b1ed-1c67-699d583d16c7",
    "nombre": "BOTELLA DE TINTA EPSON T504220-AL CIAN PAPARA IMPRESORA L4150, L4160, L6161, L61",
    "descripcion": "<p>BOTELLA DE TINTA EPSON T504220-AL CIAN PAPARA IMPRESORA L4150, L4160, L6161, L6171, L6191, L6270, L4260, L14150, L4150, L6171, C11CG23301</p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 550,
    "imagen": "https://static.wixstatic.com/media/ae191a_9fab382b374749cab3331fb52fc207a2~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_9fab382b374749cab3331fb52fc207a2~mv2.jpg"
    ]
  },
  {
    "id": "product_f4ac190e-d0f4-4b77-6510-9e2284ab3916",
    "nombre": "BOTELLA DE TINTA EPSON T504120-AL NEGRO PARA IMPRESORA L4150, L4160, L6161, L617",
    "descripcion": "<p>BOTELLA DE TINTA EPSON T504120-AL NEGRO PARA IMPRESORA L4150, L4160, L6161, L6171, L6191, L6270, L4260, L14150, L4150, L6171, C11CG23301</p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 550,
    "imagen": "https://static.wixstatic.com/media/ae191a_9009b58961e74cb5a009b0695800e9be~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_9009b58961e74cb5a009b0695800e9be~mv2.jpg"
    ]
  },
  {
    "id": "product_9db5b062-25cf-74ad-2445-acd48e2b5e76",
    "nombre": "Resma de papel tamaño carta Hp",
    "descripcion": "",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 325,
    "imagen": "https://static.wixstatic.com/media/ae191a_4262c66f3d8846ab9ea04fe122922191~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_4262c66f3d8846ab9ea04fe122922191~mv2.jpg"
    ]
  },
  {
    "id": "product_ad750b20-9d09-3eea-1fea-80c676c5dd8e",
    "nombre": "BOTELLAS DE TINTA EPSON T544 MAGENTA PARA IMPRESORA L1250, L1110, L3110, L3150,",
    "descripcion": "<p>BOTELLAS DE TINTA EPSON T544 MAGENTA PARA IMPRESORA L1250, L1110, L3110, L3150, L5190, L3210, L3250, L5290.</p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 550,
    "imagen": "https://static.wixstatic.com/media/ae191a_f410648437e94eb2bae88f1d8c435ab0~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_f410648437e94eb2bae88f1d8c435ab0~mv2.png"
    ]
  },
  {
    "id": "product_a13337e9-d26a-1009-e573-1fd273e5925d",
    "nombre": "BOTELLAS DE TINTA EPSON T544 CYAN PARA IMPRESORA L1250, L1110, L3110, L3150, L51",
    "descripcion": "<p>BOTELLAS DE TINTA EPSON T544 CYAN PARA IMPRESORA L1250, L1110, L3110, L3150, L5190, L3210, L3250, L5290.</p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 550,
    "imagen": "https://static.wixstatic.com/media/ae191a_7b97a404ed3543b6bd37fece31cf9401~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_7b97a404ed3543b6bd37fece31cf9401~mv2.png"
    ]
  },
  {
    "id": "product_1d69df97-e144-21c2-f81b-7ad87df1efa6",
    "nombre": "BOTELLA DE TINTA EPSON T544 NEGRO PARA IMPRESORA L1250, L1110, L3110, L3150, L51",
    "descripcion": "<p>BOTELLA DE TINTA EPSON T544 NEGRO PARA IMPRESORA L1250, L1110, L3110, L3150, L5190, L3210, L3250, L5290.</p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 550,
    "imagen": "https://static.wixstatic.com/media/ae191a_38687c2b9cb140a4ac415021e0c2a327~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_38687c2b9cb140a4ac415021e0c2a327~mv2.png"
    ]
  },
  {
    "id": "product_22686f39-8e85-0f0a-1386-1b0b35de92a4",
    "nombre": "BOTELLAS DE TINTA EPSON T544 YELLOW PARA IMPRESORA L1250, L1110, L3110, L3150, L",
    "descripcion": "<p>BOTELLAS DE TINTA EPSON T544 YELLOW PARA IMPRESORA L1250, L1110, L3110, L3150, L5190, L3210, L3250, L5290</p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 550,
    "imagen": "https://static.wixstatic.com/media/ae191a_69b1c302a44946e6af0d038141aeef5e~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_69b1c302a44946e6af0d038141aeef5e~mv2.png"
    ]
  },
  {
    "id": "product_fd7a049f-3fbc-847b-b9a9-0c0e843c47a7",
    "nombre": "BOTELLA DE TINTA EPSON 664 AMARILLO PARA IMPRESORA L110, L120, L200, L210, L350,",
    "descripcion": "<p>BOTELLA DE TINTA EPSON 664 AMARILLO PARA IMPRESORA L110, L120, L200, L210, L350, L355, L555, L1300 70ML TRAMO 3 JAULA</p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 550,
    "imagen": "https://static.wixstatic.com/media/ae191a_bdbe89102cb14e1e86cb3b3810bc1a42~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_bdbe89102cb14e1e86cb3b3810bc1a42~mv2.png"
    ]
  },
  {
    "id": "product_97058d21-4e82-c641-066d-28457d11f041",
    "nombre": "BOTELLA DE TINTA EPSON 664 MAGENTA PARA IMPRESORA L110, L120, L200, L210, L350,",
    "descripcion": "<p>BOTELLA DE TINTA EPSON 664 MAGENTA PARA IMPRESORA L110, L120, L200, L210, L350, L355, L555, L1300 70ML TRAMO 3 JAULA</p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 550,
    "imagen": "https://static.wixstatic.com/media/ae191a_ca27e626d279479b8dcda55a2a05600f~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_ca27e626d279479b8dcda55a2a05600f~mv2.png"
    ]
  },
  {
    "id": "product_f8175369-56cc-1131-481a-5ac5a2f3bc5a",
    "nombre": "BOTELLA DE TINTA EPSON 664 CYAN PARA IMPRESORA L110, L120, L200, L210, L350, L35",
    "descripcion": "<p>BOTELLA DE TINTA EPSON 664 CYAN PARA IMPRESORA L110, L120, L200, L210, L350, L355, L555, L1300 70ML TRAMO 3 JAULA</p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 550,
    "imagen": "https://static.wixstatic.com/media/ae191a_0d4d52ba73864206b2a52c627b46881c~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_0d4d52ba73864206b2a52c627b46881c~mv2.png"
    ]
  },
  {
    "id": "product_f2d4ac0d-6125-5903-b4f5-f32fabc89884",
    "nombre": "BOTELLA DE TINTA EPSON 664 NEGRO PARA IMPRESORAL 120, L310, L380, L395, L495, L5",
    "descripcion": "<p>BOTELLA DE TINTA EPSON 664 NEGRO PARA IMPRESORAL 120, L310, L380, L395, L495, L575, L606, L655, L656, L1300, L1455, L210 70ML TRAMO 3 JAULA</p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 550,
    "imagen": "https://static.wixstatic.com/media/ae191a_e7307d40d2ca4ae0a37712c97b00d929~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_e7307d40d2ca4ae0a37712c97b00d929~mv2.png"
    ]
  },
  {
    "id": "product_16da7123-d40c-f289-3ae3-7f4b7568e95b",
    "nombre": "Xtech - MOUSE MARVEL SPIDER-MAN, USB, 7 BOTONES, 2400DPI, LUCES ROJAS - 4 MODOS",
    "descripcion": "<p>&nbsp;</p><p><strong>Xtech - MOUSE MARVEL SPIDER-MAN, USB, 7 BOTONES, 2400DPI, LUCES ROJAS - 4 MODOS</strong></p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 770,
    "imagen": "https://static.wixstatic.com/media/ae191a_442a080bebe0480a9b003a5ec07e7c10~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_442a080bebe0480a9b003a5ec07e7c10~mv2.png"
    ]
  },
  {
    "id": "product_4329946a-b889-8e84-6fb1-f2f000279457",
    "nombre": "MYO - MOUSE GAMING SERIE 4, 6 BOTONES, VELOCIDAD DEL MOUSE AJUSTABLE ENTRE 800",
    "descripcion": "<p><strong>MYO - MOUSE GAMING SERIE 4, 6 BOTONES, VELOCIDAD DEL MOUSE AJUSTABLE ENTRE 800 A 3200 DPI, RGB LIGHTING.</strong></p><p>&nbsp;</p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 895,
    "imagen": "https://static.wixstatic.com/media/ae191a_d09cfd27bfee48e48f326a3207ad345d~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_d09cfd27bfee48e48f326a3207ad345d~mv2.png"
    ]
  },
  {
    "id": "product_6ba53bff-b298-3a60-216d-0592d748af33",
    "nombre": "MOUSE ARGOM USB GAMING COMBAT BLACK ARG-MS-2042BK.",
    "descripcion": "<p>MOUSE ARGOM USB GAMING COMBAT BLACK ARG-MS-2042BK.</p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 995,
    "imagen": "https://static.wixstatic.com/media/ae191a_1750845075e544b19c731581e95bcbec~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_1750845075e544b19c731581e95bcbec~mv2.png"
    ]
  },
  {
    "id": "product_d813dc9d-9b8f-f472-9dae-0d4d6cffd94c",
    "nombre": "Agiler - MOUSE PAD GEL, NEGRO.",
    "descripcion": "<p><strong>Agiler - MOUSE PAD GEL, NEGRO.</strong></p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 550,
    "imagen": "https://static.wixstatic.com/media/ae191a_a5de61c5e659495bbbbe354015e49832~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_a5de61c5e659495bbbbe354015e49832~mv2.png"
    ]
  },
  {
    "id": "product_272abd68-e180-8df4-001b-071fe3556ada",
    "nombre": "Agiler - MOUSE 3D OPTICO USB, ALAMBRICO, NEGRO",
    "descripcion": "<p><strong>Agiler - MOUSE 3D OPTICO USB, ALAMBRICO, NEGRO</strong></p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 350,
    "imagen": "https://static.wixstatic.com/media/ae191a_2bfcd834d3364a37a30478ff7f72fba1~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_2bfcd834d3364a37a30478ff7f72fba1~mv2.png"
    ]
  },
  {
    "id": "product_607bb91b-6758-8b42-ea9e-40ac9a0b8160",
    "nombre": "Klip Xtreme - TECLADO MOUSE, INALAMBRICO, INSPIRE, INGLES (KCK-265E)",
    "descripcion": "<p>&nbsp;</p><p><strong>Klip Xtreme - TECLADO MOUSE, INALAMBRICO, INSPIRE, INGLES (KCK-265E)</strong></p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 1750,
    "imagen": "https://static.wixstatic.com/media/ae191a_3ed6c92b3d874dbfbbc8a2d4b6fd21b8~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_3ed6c92b3d874dbfbbc8a2d4b6fd21b8~mv2.png"
    ]
  },
  {
    "id": "product_dd360aca-7c61-d50e-8fcd-dd6d74dcd3b2",
    "nombre": "Argom - TECLADO MOUSE COMBAT GAMING COMBO, USB, BACKLIGHT, INGLES, COLOR NEGRO.",
    "descripcion": "<p>&nbsp;</p><p><strong>Argom - TECLADO MOUSE COMBAT GAMING COMBO, USB, BACKLIGHT, INGLES, COLOR NEGRO. (ARG-KB-2051KB)</strong></p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 2500,
    "imagen": "https://static.wixstatic.com/media/ae191a_4f2c0d5fea634980a36db13f78dae495~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_4f2c0d5fea634980a36db13f78dae495~mv2.png"
    ]
  },
  {
    "id": "product_589e9c4d-8270-a3b3-5ca6-fc063f0f70da",
    "nombre": "TECLADO ARGOM COMBAT GAMING, USB, BACKLIGHT, INGLES, COLOR NEGRO (ARG-KB-2056KB)",
    "descripcion": "<p>TECLADO ARGOM COMBAT GAMING, USB, BACKLIGHT, INGLES, COLOR NEGRO (ARG-KB-2056KB)</p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 2200,
    "imagen": "https://static.wixstatic.com/media/ae191a_6a50754361c94fb0911440d33cfbaa8a~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_6a50754361c94fb0911440d33cfbaa8a~mv2.png"
    ]
  },
  {
    "id": "product_b601cd6f-a25b-a28e-8b8f-ac40203c6aa5",
    "nombre": "RIPPA - TECLADO MARCA RIPPA, MODELO K886, CONEXION USB, IDIOMA ESPAÑOL",
    "descripcion": "<p><strong>RIPPA - TECLADO MARCA RIPPA, MODELO K886, CONEXION USB, IDIOMA ESPAÑOL</strong></p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 550,
    "imagen": "https://static.wixstatic.com/media/ae191a_1e080cf82707453792dcdaca50e48043~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_1e080cf82707453792dcdaca50e48043~mv2.png"
    ]
  },
  {
    "id": "product_9c611aeb-c5ac-750c-8472-b2389881b435",
    "nombre": "Agiler - TECLADO MOUSE INALAMBRICO ESPAÑOL, BLACK, 2.4GHZ NANO RECEIVER",
    "descripcion": "<p><strong>Agiler - TECLADO MOUSE INALAMBRICO ESPAÑOL, BLACK, 2.4GHZ NANO RECEIVER</strong></p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 900,
    "imagen": "https://static.wixstatic.com/media/ae191a_a89718d9917d45e69561529e46514f6d~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_a89718d9917d45e69561529e46514f6d~mv2.png"
    ]
  },
  {
    "id": "product_8e099833-5415-3720-8035-7d3e0ca642e3",
    "nombre": "DISCO DURO 22TB INTERNO SEAGATE PARA NAS IRONWOLF PRO 3.5'', 7200RPM SATA 6GBPS",
    "descripcion": "<p>DISCO DURO 22TB INTERNO SEAGATE PARA NAS IRONWOLF PRO 3.5'', 7200RPM SATA 6GBPS 512MB CACHE, OPERACION 24/7(ST22000NT001) DH966SEA85</p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 49780,
    "imagen": "https://static.wixstatic.com/media/ae191a_49118a22c78c48c58c8a0f120dc8fe11~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_49118a22c78c48c58c8a0f120dc8fe11~mv2.png"
    ]
  },
  {
    "id": "product_1e0c5c30-d7fa-49ad-5e95-4aa53b8ece4c",
    "nombre": "Seagate - DISCO DURO 16TB P/VIDEOVIGILANCIA SKYHAWK SEAGATE 3.5\" SATA 6GB/S 720",
    "descripcion": "<p>&nbsp;</p><p><strong>Seagate - DISCO DURO 16TB P/VIDEOVIGILANCIA SKYHAWK SEAGATE 3.5\" SATA 6GB/S 7200RPM/256MB.</strong></p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 29900,
    "imagen": "https://static.wixstatic.com/media/ae191a_1405b1498e7149219989001bc7f8f955~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_1405b1498e7149219989001bc7f8f955~mv2.png"
    ]
  },
  {
    "id": "product_9973c33b-6ff6-3b55-1ac3-b0fce15be293",
    "nombre": "DISCO DE ESTADO SOLIDO KINGSTON SSD 1000G NV3 M.2 2280 PCIE 4.0 NVME SSD, HASTA",
    "descripcion": "<p>DISCO DE ESTADO SOLIDO KINGSTON SSD 1000G NV3 M.2 2280 PCIE 4.0 NVME SSD, HASTA 6.000MB/SEG LECTURA, 5000MB/SEG ESCRITURA (SNV3S/1000G)</p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 5995,
    "imagen": "https://static.wixstatic.com/media/ae191a_fa203342706d4df5bca71d1716af65a9~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_fa203342706d4df5bca71d1716af65a9~mv2.png"
    ]
  },
  {
    "id": "product_ab85bb9e-e2dd-d81b-c73d-03a287926ca2",
    "nombre": "Kingston - 512GB SSD KC3000 M.2 2280 DISCO DE ESTADO SOLIDO KINGSTON 512G (SKC3",
    "descripcion": "<p>&nbsp;</p><p><strong>Kingston - 512GB SSD KC3000 M.2 2280 DISCO DE ESTADO SOLIDO KINGSTON 512G (SKC3000/512G)</strong></p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 6990,
    "imagen": "https://static.wixstatic.com/media/ae191a_28a9db8377f4420490a5c5578af7ab62~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_28a9db8377f4420490a5c5578af7ab62~mv2.png"
    ]
  },
  {
    "id": "product_c2059783-113a-8017-e7a4-059f833ce607",
    "nombre": "Western Digital - DISCO DURO 4TB P/VIDEOVIGILANCIA SATA 6GB/S 3.5\" 5640 RPM/256M",
    "descripcion": "<p><strong>Western Digital - DISCO DURO 4TB P/VIDEOVIGILANCIA SATA 6GB/S 3.5\" 5640 RPM/256MB.</strong></p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 11500,
    "imagen": "https://static.wixstatic.com/media/ae191a_497aec724c9c4ea4b94c6867181c0f63~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_497aec724c9c4ea4b94c6867181c0f63~mv2.png"
    ]
  },
  {
    "id": "product_b1e7c08b-9c61-8b3e-336e-8ba469e28b22",
    "nombre": "Kingston - 960GB SSD A400 SATA3 2.5 DISCO DE ESTADO SOLIDO 960GB (SA400S37/960G)",
    "descripcion": "<p><strong>Kingston - 960GB SSD A400 SATA3 2.5 DISCO DE ESTADO SOLIDO 960GB (SA400S37/960G)</strong></p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 8995,
    "imagen": "https://static.wixstatic.com/media/ae191a_469de6ad9628464484c7a9ceb525de21~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_469de6ad9628464484c7a9ceb525de21~mv2.png"
    ]
  },
  {
    "id": "product_42510d08-8739-e817-f639-50f53ceef883",
    "nombre": "Kingston - 512GB SSD KC600 SATA3 2.5\" - DISCO DE ESTADO SOLIDO 512GB (SKC600/512",
    "descripcion": "<p><strong>Kingston - 512GB SSD KC600 SATA3 2.5\" - DISCO DE ESTADO SOLIDO 512GB (SKC600/512G)</strong></p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 6995,
    "imagen": "https://static.wixstatic.com/media/ae191a_f1573efd3bd5432d9f1eeca063e1ec6c~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_f1573efd3bd5432d9f1eeca063e1ec6c~mv2.png"
    ]
  },
  {
    "id": "product_78254a25-138a-bc2f-ed37-2cd78951f6de",
    "nombre": "DISCO DE ESTADO SOLIDO KINGSTON SSD 480GB, 2.5\", SATA3, LECTURA: 500MB/S, ESCRIT",
    "descripcion": "<p>DISCO DE ESTADO SOLIDO KINGSTON SSD 480GB, 2.5\", SATA3, LECTURA: 500MB/S, ESCRITURA 450MB/S. (SA400S37/480G)</p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 3890,
    "imagen": "https://static.wixstatic.com/media/ae191a_2808bfa0bdef40aaba65d8e76274e7e9~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_2808bfa0bdef40aaba65d8e76274e7e9~mv2.png"
    ]
  },
  {
    "id": "product_1ab9b8db-41cc-f57d-c4ac-10f39487eb39",
    "nombre": "MYO - SILLA DE SECRETARIA, CON BRAZOS, TELA, ALTURA ALTA, CONTROL NEUMÁTICO DE G",
    "descripcion": "<p><strong>MYO - SILLA DE SECRETARIA, CON BRAZOS, TELA, ALTURA ALTA, CONTROL NEUMÁTICO DE GRAN ALTURA, BASE METALICA CROMADA, COLOR NEGRO.</strong></p>",
    "disponible": true,
    "categoria": "mobiliario",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 85500,
    "imagen": "https://static.wixstatic.com/media/ae191a_e0638a3f0af342f0b73d6dce7c8b2d25~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_e0638a3f0af342f0b73d6dce7c8b2d25~mv2.png"
    ]
  },
  {
    "id": "product_561d8432-5508-89f5-451f-0b7c7f15c52a",
    "nombre": "SILLA EJECUTIVA MYO, NEGRO LEATHER, REPOSA DE BRAZOS.",
    "descripcion": "<p>SILLA EJECUTIVA MYO, NEGRO LEATHER, REPOSA DE BRAZOS.</p>",
    "disponible": true,
    "categoria": "mobiliario",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 16990,
    "imagen": "https://static.wixstatic.com/media/ae191a_bf41e9b1c73544ffbbd3b8932e6d611f~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_bf41e9b1c73544ffbbd3b8932e6d611f~mv2.png"
    ]
  },
  {
    "id": "product_84cf15ec-da55-689d-b168-8616224a06f4",
    "nombre": "SILLA XTECH EJECUTIVA CON BRAZOS TIPO PIEL (AM160XTK01)",
    "descripcion": "",
    "disponible": true,
    "categoria": "mobiliario",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 19990,
    "imagen": "https://static.wixstatic.com/media/ae191a_9f2239c8d6f04b30bda3d5d41abbfeb1~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_9f2239c8d6f04b30bda3d5d41abbfeb1~mv2.png"
    ]
  },
  {
    "id": "product_4b6c51a6-f0cd-6a8d-254b-80e91a158990",
    "nombre": "SILLA XTECH PARA ESCRITORIO (BLACK) (AM160GEN65)",
    "descripcion": "<p>SILLA XTECH PARA ESCRITORIO (BLACK) (AM160GEN65)</p>",
    "disponible": true,
    "categoria": "mobiliario",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 4870,
    "imagen": "https://static.wixstatic.com/media/ae191a_10a4a19e730c4829a794610b08d9a933~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_10a4a19e730c4829a794610b08d9a933~mv2.png"
    ]
  },
  {
    "id": "product_6321a743-3591-1068-0af0-9bc5c27039af",
    "nombre": "MYO - ESCRITORIO CON 3 CAJONES CON SEGURO, BASE DE METAL, COLOR GRIS / ALMENDRA",
    "descripcion": "<p>&nbsp;</p><p><strong>MYO - ESCRITORIO CON 3 CAJONES CON SEGURO, BASE DE METAL, COLOR GRIS / ALMENDRA</strong></p>",
    "disponible": true,
    "categoria": "mobiliario",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 14100,
    "imagen": "https://static.wixstatic.com/media/ae191a_aaeae173065945bbbb815a38cf30398d~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_aaeae173065945bbbb815a38cf30398d~mv2.png"
    ]
  },
  {
    "id": "product_9e9ba970-0f4e-c666-dd82-084305a4488d",
    "nombre": "Argom - ESCRITORIO COMBAT GAMING ERGO Z47, CON BASE DE METAL,TOPE DE FIBRA DE CA",
    "descripcion": "<p><strong>Argom - ESCRITORIO COMBAT GAMING ERGO Z47, CON BASE DE METAL,TOPE DE FIBRA DE CARBONO, NEGRO</strong></p>",
    "disponible": true,
    "categoria": "mobiliario",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 13500,
    "imagen": "https://static.wixstatic.com/media/ae191a_39348e756f9145a39cef1698089598a2~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_39348e756f9145a39cef1698089598a2~mv2.png"
    ]
  },
  {
    "id": "product_5aaeb4b6-d6ce-0386-2bda-e9ef7a814389",
    "nombre": "MYO - ESCRITORIO MYO CON TOPE DE CRISTAL, 1 CAJON, BASE DE METAL, COLOR NEGRO",
    "descripcion": "<p><strong>MYO - ESCRITORIO MYO CON TOPE DE CRISTAL, 1 CAJON, BASE DE METAL, COLOR NEGRO</strong></p>",
    "disponible": true,
    "categoria": "mobiliario",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 15500,
    "imagen": "https://static.wixstatic.com/media/ae191a_39b2bd15bcc6497080ca47d1740e11b4~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_39b2bd15bcc6497080ca47d1740e11b4~mv2.png"
    ]
  },
  {
    "id": "product_58ad2463-495e-e91c-800f-2503be3ad718",
    "nombre": "MYO - ESCRITORIO MYO CON 3 CAJONES, BASE DE METAL, TOPE DE VIDRIO, COLOR NEGRO",
    "descripcion": "<p><strong>MYO - ESCRITORIO MYO CON 3 CAJONES, BASE DE METAL, TOPE DE VIDRIO, COLOR NEGRO</strong></p>",
    "disponible": true,
    "categoria": "mobiliario",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 16500,
    "imagen": "https://static.wixstatic.com/media/ae191a_b63d796be3c54f61a90ab22228ab8430~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_b63d796be3c54f61a90ab22228ab8430~mv2.png"
    ]
  },
  {
    "id": "product_0af6a8ba-2141-19f9-73cc-20054448445a",
    "nombre": "COMPUTADORA DELL REFURBISHED OPTIPLEX 3060 MT | INTEL CORE I5-8500 @3.40 GHZ | 8",
    "descripcion": "<p>COMPUTADORA DELL REFURBISHED OPTIPLEX 3060 MT | INTEL CORE I5-8500 @3.40 GHZ | 8GB DDR4 RAM | 240GB SSD| X1 DISPLAYPORT; X1 HDMI | WINDOWS 10 PRO</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 24375,
    "imagen": "https://static.wixstatic.com/media/ae191a_c072a88c4d804bdda013e24c9d003fd6~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_c072a88c4d804bdda013e24c9d003fd6~mv2.png"
    ]
  },
  {
    "id": "product_bb6434a0-5ae2-7222-7de4-a9e560eb3080",
    "nombre": "SERVIDOR DELL POWEREDGE T360 INTEL XEON E-2478 2.8G 8C SYST 16T 16GB UDIMM DDR5",
    "descripcion": "<p>SERVIDOR DELL POWEREDGE T360 INTEL XEON E-2478 2.8G 8C SYST 16T 16GB UDIMM DDR5 2TB SATA 7.2</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 275215,
    "imagen": "https://static.wixstatic.com/media/ae191a_16784cc8bf8440b48921133c186034eb~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_16784cc8bf8440b48921133c186034eb~mv2.png"
    ]
  },
  {
    "id": "product_130e3f7b-e7db-7325-e3ee-b1b1951dc987",
    "nombre": "SERVIDOR DELL POWEREDGE R360, INTEL XEON E-2436 2.9G 6C SYST 12T 16GB UDIMM DDR5",
    "descripcion": "<p>SERVIDOR DELL POWEREDGE R360, INTEL XEON E-2436 2.9G 6C SYST 12T 16GB UDIMM DDR5 2TB SATA 7.2</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 298550,
    "imagen": "https://static.wixstatic.com/media/ae191a_48372f87600b4c129223577131246c93~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_48372f87600b4c129223577131246c93~mv2.png"
    ]
  },
  {
    "id": "product_ecf8b2ea-996b-5203-5c8b-c5134fecd283",
    "nombre": "COMPUTADORA DELL OPTIPLEX 5050 SMALL FORM FACTOR XCTO, I5-6600 3.3GHZ, 8GB (1X8G",
    "descripcion": "<p>COMPUTADORA DELL OPTIPLEX 5050 SMALL FORM FACTOR XCTO, I5-6600 3.3GHZ, 8GB (1X8G) DDR4 2400MHZ, 512 SSD M.2, DVD+/-RW, W10 PRO 64-BIT ING, 2X DISPLAY-PORT, VGA, INCLUYE TECLADO+MOUSE ESPAÑOL, 3 AÑOS DE GARANTÍA</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 10145,
    "imagen": "https://static.wixstatic.com/media/ae191a_eb7bae6dda9d4a2c875be5a0cce751b3~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_eb7bae6dda9d4a2c875be5a0cce751b3~mv2.png"
    ]
  },
  {
    "id": "product_36253684-8907-f59d-30a6-f6a27a0e80db",
    "nombre": "COMPUTADORA DELL REFURBISHED OPTIPLEX 7040 SFF | INTEL CORE I5-6500 @2.30GHz | 8",
    "descripcion": "<p>COMPUTADORA DELL REFURBISHED OPTIPLEX 7040 SFF | INTEL CORE I5-6500 @2.30GHz | 8GB RAM DDR4 | 480GB SSD | PUERTO: VGA - HDMI - DISPLAYPORT X2 | WINDOW 10 PRO | INCLUYE POWERCORD - TECLADO Y MOUSE</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 18650,
    "imagen": "https://static.wixstatic.com/media/ae191a_3b224ad7ba1d4f34a6d4b8b1db1416de~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_3b224ad7ba1d4f34a6d4b8b1db1416de~mv2.png"
    ]
  },
  {
    "id": "product_2714853b-0df7-fe4f-5780-0642aef5508a",
    "nombre": "COMPUTADORA HP REFURBISHED PRODESK 600 G3 SFF | INTEL CORE I5-6500 @3.20GHZ | 8G",
    "descripcion": "<p>COMPUTADORA HP REFURBISHED PRODESK 600 G3 SFF | INTEL CORE I5-6500 @3.20GHZ | 8GB DDR4 RAM | 256GB SSD M.2 SATA | DISPLAYPORT X2 | WINDOW 10 PRO | INCLUYE TECLADO Y MOUSE</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 15860,
    "imagen": "https://static.wixstatic.com/media/ae191a_2eb2a10a181342708e838d7815dca8f7~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_2eb2a10a181342708e838d7815dca8f7~mv2.png"
    ]
  },
  {
    "id": "product_e6236d1e-7cca-e2e8-064a-6b87440d50d1",
    "nombre": "COMPUTADORA DELL REFURBISHED OPTIPLEX MFF 7040 | INTEL CORE I5-6500T @ 2.50GHZ |",
    "descripcion": "<p>COMPUTADORA DELL REFURBISHED OPTIPLEX MFF 7040 | INTEL CORE I5-6500T @ 2.50GHZ | PUERTO: DISPLAYPORT - HDMI X1 | 8GB RAM | 256GB SSD | WINDOW 10 PRO | INCLUYE TECLADO Y MOUSE</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 14700,
    "imagen": "https://static.wixstatic.com/media/ae191a_f78454e055994c5daa40096c37a19f14~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_f78454e055994c5daa40096c37a19f14~mv2.png"
    ]
  },
  {
    "id": "product_bbf1889b-5437-14ae-70e1-271083ad8269",
    "nombre": "COMPUTADORA DELL REFURBISHED OPTIPLEX 5050 MFF | INTEL CORE I5-7600T @2.80GHz |",
    "descripcion": "<p>COMPUTADORA DELL REFURBISHED OPTIPLEX 5050 MFF | INTEL CORE I5-7600T @2.80GHz | 8GB DDR4 RAM | 256GB SSD | PUERTO: DISPLAY PORT - HDMI | WINDOWS 10 PRO | INCLUYE TECLADO Y MOUSE</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 19769,
    "imagen": "https://static.wixstatic.com/media/ae191a_c0db7571472e43e0a92be1bbc8fa80b4~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_c0db7571472e43e0a92be1bbc8fa80b4~mv2.png"
    ]
  },
  {
    "id": "product_d75d92ec-7d52-481f-a0da-24c0fb19de0d",
    "nombre": "BT Mobile Head Phones Over Ear Phone Stereo Music Headset Over-Ear Headphones",
    "descripcion": "<p>Si está buscando auriculares que brinden la experiencia de escuchar música más envolvente y cómoda, un par de auriculares sobre las orejas deberían ser su primer puerto de escala.<br><br>+Claridad sonora sensacional+Agradable de usar+Bajos contundentes y precisos, ágiles<br><br>Cableado o inalámbrico : InalámbricoCancelación de ruido : SíDuración de la batería : 30 horas (con BT y ANC), 40 horas (solo con BT)Tipo : Cerrado</p>",
    "disponible": true,
    "categoria": "consumibles",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 8143.75,
    "imagen": "https://static.wixstatic.com/media/8df99c_382c0ebaaa91469ea0b81cea2ec48b5b~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/8df99c_382c0ebaaa91469ea0b81cea2ec48b5b~mv2.jpg"
    ]
  },
  {
    "id": "product_32f1e7eb-2d9e-2243-30dd-2468e7d3113b",
    "nombre": "COMPUTADORA DELL REFURBISHED OPTIPLEX MFF 7060 | INTEL CORE I5-8500T @3.50GHZ |",
    "descripcion": "<p>COMPUTADORA DELL REFURBISHED OPTIPLEX MFF 7060 | INTEL CORE I5-8500T @3.50GHZ | 8GB DDR4 RAM | 256GB SSD | DISPLAYPORT X2 | WINDOWS 10 PRO | INCLUYE TECLADO Y MOUSE</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 21990,
    "imagen": "https://static.wixstatic.com/media/ae191a_859cc31bbe114f4abfe48bb76a275c16~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_859cc31bbe114f4abfe48bb76a275c16~mv2.png"
    ]
  },
  {
    "id": "product_e0c9e829-6c32-8d20-b673-fa49473b6128",
    "nombre": "Lenovo - LAPTOP THINKPAD T14 G4, INTEL® CORE™ I5-1335U, 14\" IPS WUXGA, WINDOWS 1",
    "descripcion": "<p><strong>Lenovo - LAPTOP THINKPAD T14 G4, INTEL® CORE™ I5-1335U, 14\" IPS WUXGA, WINDOWS 11 PRO 64 ENGLISH, 16GB, 512GB SSD M.2 PCIE, INTEL® IRIS® XE GRAPHICS, WIFI 6E, BT 5.3, 1X USB-A 3.2 GEN1, 1X USB-A, 2X THUNDERBOLT 4 / USB4, 1X HDMI 2.1, 1X GIGABIT LAN, STORM GRAY</strong></p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 96430,
    "imagen": "https://static.wixstatic.com/media/ae191a_7b22d16eebd444acaa75d5d8fdb3962b~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_7b22d16eebd444acaa75d5d8fdb3962b~mv2.png"
    ]
  },
  {
    "id": "product_aac14972-0901-71f1-7d97-dcf61c073a8a",
    "nombre": "LAPTOP DELL LATITUDE 5550 XCTO, 15.6\", INTEL I7-1355U (12 MB CACHE, 10 CORES, 12",
    "descripcion": "<p>LAPTOP DELL LATITUDE 5550 XCTO, 15.6\", INTEL I7-1355U (12 MB CACHE, 10 CORES, 12 THREADS, UP TO 5.0 GHZ TURBO). RAM 32 GB: 2 X 16 GB, DDR5, 5600 MT/S. DISCO 1 TB, M.2 2230, TLC, GEN 4 PCIE NVME, SSD. FHD 1920X1080, 60HZ, IPS, NON-TOUCH, AG, 250 NIT, 45% NTSC, FHD CAM. WI-FI 6E, BATERIA 3-CELL - 42 WH EXPRESSCHARGE. TECLADO SPANISH BACKLIT, 65W AC ADAPTER, USB TYPE-C. W11 PRO, 3 AÑOS DE GARANTIA</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 140970,
    "imagen": "https://static.wixstatic.com/media/ae191a_d60e1200c4844657b4f2079a98f4c7ba~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_d60e1200c4844657b4f2079a98f4c7ba~mv2.png"
    ]
  },
  {
    "id": "product_d614d218-4d8c-e3f8-d831-734905d89b7c",
    "nombre": "Lenovo - LAPTOP IDEAPAD 3 11LGL05 CHROMEBOOK, 11.6\" HD, INTEL CELERON N4000 32GB",
    "descripcion": "<p><strong>Lenovo - LAPTOP IDEAPAD 3 11LGL05 CHROMEBOOK, 11.6\" HD, INTEL CELERON N4000 32GB EMMC, CHROME OS, TIPO C, 2-CELL LITHIUM-ION BATTERY, ONYX BLACK</strong></p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 14500,
    "imagen": "https://static.wixstatic.com/media/ae191a_f5985b55ad714deda72fde047bfae20e~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_f5985b55ad714deda72fde047bfae20e~mv2.png"
    ]
  },
  {
    "id": "product_ed624ebe-dbcc-7eef-ac41-5c578432a7b3",
    "nombre": "LAPTOP DELL REFURBISHED LATITUDE 7410 | 14 PULGADAS | INTEL CORE I5-10610U @ 1.8",
    "descripcion": "<p>LAPTOP DELL REFURBISHED LATITUDE 7410 | 14 PULGADAS | INTEL CORE I5-10610U @ 1.80GHz | 8GB RAM INTEGRADA | 512GB SSDD | WINDOW 10 PRO</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 32500,
    "imagen": "https://static.wixstatic.com/media/ae191a_48a9a175e57b4c65bc0aae314251ee02~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_48a9a175e57b4c65bc0aae314251ee02~mv2.png"
    ]
  },
  {
    "id": "product_f349ccd1-1a49-10bc-6190-399d65191dfc",
    "nombre": "LAPTOP DELL REFURBISHED LATITUDE 7420 | 14 PULGADAS | INTEL CORE I7-1165G7 @ 2.8",
    "descripcion": "<p>LAPTOP DELL REFURBISHED LATITUDE 7420 | 14 PULGADAS | INTEL CORE I7-1165G7 @ 2.80GHz | RAM 16GB | 256GB SSD | WINDOW 10 PRO | TOUCH SCREEN</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 38854,
    "imagen": "https://static.wixstatic.com/media/ae191a_09021ae37d2842fc9fc7bbc3b81dd2d4~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_09021ae37d2842fc9fc7bbc3b81dd2d4~mv2.png"
    ]
  },
  {
    "id": "product_56bf7c7a-f4b5-1b7c-d5e5-612a8de03aa0",
    "nombre": "LAPTOP LENOVO IDEAPAD 1, 15.6\" HD, AMD ATHLON SILVER 7120U, 4GB DDR5, 128GB SSD",
    "descripcion": "<p>LAPTOP LENOVO IDEAPAD 1, 15.6\" HD, AMD ATHLON SILVER 7120U, 4GB DDR5, 128GB SSD M.2 PCIE, WINDOWS 11 HOME, WIFI 6, BLUETOOTH 5.1, 1 X HDMI PORT, 2 X USB 3.2 GEN 1, JACK 3.5\" AUDIO, LITHIUM-ION BATTERY, CLOUD GREY, INGLES (82VG0091US)</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 24990,
    "imagen": "https://static.wixstatic.com/media/ae191a_a60d5053e4e948919a90c8524b38314c~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_a60d5053e4e948919a90c8524b38314c~mv2.png"
    ]
  },
  {
    "id": "product_be297fdf-65af-c35e-3057-40a6f9963659",
    "nombre": "LAPTOP DELL REFURBISHED LATITUDE 5420 | 14\" PULGADAS | INTEL CORE I5-1145G7 @ 2.",
    "descripcion": "<p>LAPTOP DELL REFURBISHED LATITUDE 5420 | 14\" PULGADAS | INTEL CORE I5-1145G7 @ 2.60GHZ | 16GB RAM | 512GB SSD | WINDOW 10 PRO</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 39995,
    "imagen": "https://static.wixstatic.com/media/ae191a_aab8924638a94586a240b40e0b4f9198~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_aab8924638a94586a240b40e0b4f9198~mv2.png"
    ]
  },
  {
    "id": "product_03ca62c3-937c-0a6d-260c-a27da703ca90",
    "nombre": "LAPTOP DELL REFURBISHED LATITUDE 3440 | 14 PULGADAS | INTEL CORE I5-1335U @ 1.30",
    "descripcion": "<p>LAPTOP DELL REFURBISHED LATITUDE 3440 | 14 PULGADAS | INTEL CORE I5-1335U @ 1.30GHz | 16GB RAM | 256GB SSD | WINDOW 11 PRO</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 42750,
    "imagen": "https://static.wixstatic.com/media/ae191a_a51f04769ca54e8b8f73afa1c314be6d~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_a51f04769ca54e8b8f73afa1c314be6d~mv2.png"
    ]
  },
  {
    "id": "product_e2200b2d-2850-0f1f-78fa-50414a9030ec",
    "nombre": "LAPTOP DELL REFURBISHED LATITUDE 7420 | 14 PULGADAS | INTEL CORE I5-1145G7 @2.80",
    "descripcion": "<p>LAPTOP DELL REFURBISHED LATITUDE 7420 | 14 PULGADAS | INTEL CORE I5-1145G7 @2.80GHZ | 16GB RAM | 256GB SSD | WINDOWS 10 PRO | TOUCH SCREEN</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 37490,
    "imagen": "https://static.wixstatic.com/media/ae191a_76fc677bc53f46cc8fb519ea91687341~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_76fc677bc53f46cc8fb519ea91687341~mv2.png"
    ]
  },
  {
    "id": "product_e32726d7-2d7a-e44d-d09b-2e084d587929",
    "nombre": "HP - LAPTOP PAVILION 15-FD0131, 15.6” IPS FHD, I3-N305 8 CORE 1.8 GHZ, 8GB, 256G",
    "descripcion": "<p><strong>HP - LAPTOP PAVILION 15-FD0131, 15.6” IPS FHD, I3-N305 8 CORE 1.8 GHZ, 8GB, 256GB SSD, WIFI 6, BT 5.3, FINGER PRINT READER, 1X USB C, 1 X USB-A, 1 X HDMI 1.4, JACK 3.5\" AUDIO, W11 HOME, NATURAL SILVER</strong></p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 29990,
    "imagen": "https://static.wixstatic.com/media/ae191a_8e69720e4a6c4d55974ea5b5fafbc3aa~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_8e69720e4a6c4d55974ea5b5fafbc3aa~mv2.png"
    ]
  },
  {
    "id": "product_e38343df-478e-1b91-49ac-b36a9267f4bc",
    "nombre": "LAPTOP DELL REFURBISHED LATITUDE 5420 | 14 PULGADAS | INTEL CORE I7-1165G7 @2.80",
    "descripcion": "<p>LAPTOP DELL REFURBISHED LATITUDE 5420 | 14 PULGADAS | INTEL CORE I7-1165G7 @2.80GHz | RAM 16GB | 512GB SSD | WINDOW 10 PRO</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 40500,
    "imagen": "https://static.wixstatic.com/media/ae191a_215e28f757d94d3691209e3bd40271c0~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_215e28f757d94d3691209e3bd40271c0~mv2.png"
    ]
  },
  {
    "id": "product_47e19e90-d019-f51b-60f9-499e3cff85cd",
    "nombre": "HP - LAPTOP HP 15-FD0095WM 15.6\" FHD, I5-1235U, 8GB, 256GB SSD M.2, 8GB, PUERTOS",
    "descripcion": "<p><strong>HP - LAPTOP HP 15-FD0095WM 15.6\" FHD, I5-1235U, 8GB, 256GB SSD M.2, 8GB, PUERTOS 2X USB 3.1, 1X HDMI 2.1, 1X GBE LAN, LECTOR DE TARJETA SD, WIFI 6, BT 5.3, WINDOW 11 INGLES, SILVER</strong></p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 42500,
    "imagen": "https://static.wixstatic.com/media/ae191a_059e2e87552d48b0b0285b884d8408e0~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_059e2e87552d48b0b0285b884d8408e0~mv2.png"
    ]
  },
  {
    "id": "product_e138e8e3-6a50-c4f6-0791-8a55b5b48a24",
    "nombre": "Lenovo - LAPTOP IDEAPAD FLEX 5 14LAU7 2 EN 1, 14” FHD TOUCH , INTEL I3-1215U, 8G",
    "descripcion": "<p><strong>Lenovo - LAPTOP IDEAPAD FLEX 5 14LAU7 2 EN 1, 14” FHD TOUCH , INTEL I3-1215U, 8GB DDR4, 256GB SSD PCIE 4.0, 2 X USB 3.1/3.2, 1 X USB 3.1, 1 X HDMI, CARD READER, WIFI AC, BT 5.0 BACKLIT KEYBOARD, WINDOWS 11 HOME, STORM GREY.</strong></p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 39900,
    "imagen": "https://static.wixstatic.com/media/ae191a_19b6e3f2b1c74a70a221af029f26539e~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_19b6e3f2b1c74a70a221af029f26539e~mv2.png"
    ]
  },
  {
    "id": "product_05d1581a-9bd7-3c3c-d507-18762dd4b956",
    "nombre": "HP - LAPTOP HP 15-FD0005 15.6\" HD, I5-1235U, 8GB, 512GB SSD M.2, 8GB, PUERTOS 2X",
    "descripcion": "<p>LAPTOP HP 15-FD0005 15.6\" HD, I5-1235U, 8GB, 512GB SSD M.2, 8GB, PUERTOS 2X USB 3.1, 1X HDMI 2.1, 1X GBE LAN, LECTOR DE TARJETA SD, WIFI 6, BT 5.3, WINDOW 11 INGLES, SILVER (A9PE6UA#ABA)</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 38721,
    "imagen": "https://static.wixstatic.com/media/ae191a_4048ab9a763c43249e495a7aa8848674~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_4048ab9a763c43249e495a7aa8848674~mv2.png"
    ]
  },
  {
    "id": "product_2c3c3688-bbd7-1f7e-a6a2-c9e267e2d127",
    "nombre": "Canon - IMPRESORA LASER MULTIFUNCIONAL CANON IMAGECLASS MF455DW, WIRELESS (IMPRE",
    "descripcion": "<p>Diseñada para la pequeña y mediana empresa, la impresora imageCLASS MF455dw de Canon equilibra el rendimiento rápido, un mantenimiento mínimo y la capacidad para agregar una bandeja de papel adicional. La pantalla táctil en color de 5” brinda una experiencia intuitiva al usuario y el administrador del dispositivo la puede personalizar con el fin de simplificar muchas de las tareas cotidianas.</p>",
    "disponible": true,
    "categoria": "impresoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 33990,
    "imagen": "https://static.wixstatic.com/media/ae191a_47bcbe6ba73f4986a333cc8a5fd49804~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_47bcbe6ba73f4986a333cc8a5fd49804~mv2.jpg"
    ]
  },
  {
    "id": "product_60b3bf10-a766-3fa0-e708-307e92ffe3c9",
    "nombre": "Canon imageRUNNER ADVANCE DX 4745i",
    "descripcion": "<p>La cartera extensa de impresoras multifuncionales y las soluciones integradas imageRUNNER ADVANCE de Canon ayudan a simplificar la experiencia del usuario final y la administración de la tecnología, a controlar de mejor manera la información confidencial y los costos relacionados con la impresión, y a garantizar que la inversión en tecnología pueda evolucionar de forma proactiva según las necesidades cambiantes.<br><br>El dispositivo imageRUNNER ADVANCE DX 4751i tiene la Clasificación Oro de EPEAT.</p>",
    "disponible": true,
    "categoria": "impresoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 159900,
    "imagen": "https://static.wixstatic.com/media/ae191a_8fb3bd89fe1a4c71aa2fdb0357c8dcd9~mv2.webp",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_8fb3bd89fe1a4c71aa2fdb0357c8dcd9~mv2.webp"
    ]
  },
  {
    "id": "product_397b6f89-f6b3-59b4-3c9b-08ee9063a357",
    "nombre": "HP Color LaserJet Pro MFP M283fdw (7KW75A)",
    "descripcion": "<p>Una impresora multifunción inalámbrica con fax eficiente para obtener color y productividad de alta&nbsp;calidad.&nbsp;1&nbsp;Ahorre tiempo con Smart Tasks en la aplicación HP Smart e imprima y escanee desde su&nbsp;teléfono.&nbsp;Obtenga conexiones perfectas y gran seguridad diseñada para detectar y detener los ataques.</p><ul>\t<li>Funciones: Imprime, copia, escanea, envía fax</li>\t<li>Velocidad de impresión: Velocidad de impresión de hasta 22 ppm (negro) y 22 ppm (color)</li>\t<li>Calidad de impresión en negro (óptima): Hasta 600 x 600 ppp</li>\t<li>Capacidad del alimentador automático de documentos: Estándar, 50 hojas</li></ul>",
    "disponible": true,
    "categoria": "impresoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 29900,
    "imagen": "https://static.wixstatic.com/media/ae191a_2b19e587741d4f92b97c3fa0352710da~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_2b19e587741d4f92b97c3fa0352710da~mv2.png"
    ]
  },
  {
    "id": "product_a19c970c-fbcc-5a14-5d77-7831daa42202",
    "nombre": "Impresora Todo-en-Uno HP Smart Tank 580 (5D1B4A)",
    "descripcion": "<p>Disfrute de confiabilidad diaria con la impresora HP Smart Tank 580 Todo-en-Uno que ofrece la calidad HP que usted espera y ahorros&nbsp;sorprendentes</p><ul>\t<li>Funciones: Impresión, copia , escaneado</li>\t<li>Velocidad de impresión: Velocidad de impresión de hasta 12&nbsp;ppm (negro) y 5&nbsp;ppm&nbsp;(color)&nbsp;1</li>\t<li>Calidad de impresión en negro (óptima): Hasta 1200 x 1200 ppp de reproducción</li></ul>",
    "disponible": true,
    "categoria": "impresoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 14500,
    "imagen": "https://static.wixstatic.com/media/ae191a_2594cd87d5634dd6b8c8292595cc391f~mv2.avif",
    "moneda": "RD$",
    "specs": [],
    "oferta": true,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_2594cd87d5634dd6b8c8292595cc391f~mv2.avif"
    ]
  },
  {
    "id": "product_1c82787e-054e-9fa5-b3ef-887bf6f05db8",
    "nombre": "Impresora de Sublimación de Tinta SureColor F170",
    "descripcion": "<p>Obtenga una impresión de sublimación de tinta rápida y confiable desde el primer momento con la SureColor F170. Ideal para personalizar premios, tazas, alfombrillas de ratón y más, esta impresora de sublimación de tinta de alto rendimiento ofrece impresiones de calidad profesional utilizando la potente tecnología PrecisionCore®. Una solución verdaderamente llave en mano, la SureColor F170 llega con tecnología de tinta de sublimación original de Epson, una bandeja de alimentación automática de 150 hojas y software de impresión para Mac y Windows. Además, con su diseño sorprendentemente compacto que ahorra espacio, puede maximizar el espacio del taller.</p>",
    "disponible": true,
    "categoria": "impresoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 29500,
    "imagen": "https://static.wixstatic.com/media/ae191a_c54d80ae4e5244c0b2824bebe64a1d8e~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": true,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_c54d80ae4e5244c0b2824bebe64a1d8e~mv2.jpg"
    ]
  },
  {
    "id": "product_b3965142-09a5-c63d-1a59-cacea8711873",
    "nombre": "IMPRESORA INKBENEFIT TANK DCPT720DW",
    "descripcion": "<p>IMPRESORA BROTHER INKBENEFIT TANK DCPT720DW, MULTIFUNCIONAL (ESCANER&lt; COPIADORA, IMPRESORA, ADF, SISTEMA DE TINTA CONTINUA, BOTELLAS DE TINTA, DUPLEX AUTOMATICO, USB, WIFI, 30PPM NEGRO, 26PPM COLOR (DRAFT), 6000X1200 DPI, USA LAS BOTELLAS DE TINTAS BTD60BK Y BT5001Y, BT5001M, BT5001C</p>",
    "disponible": true,
    "categoria": "impresoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 21500,
    "imagen": "https://static.wixstatic.com/media/ae191a_ea5fefe98b0244ab9fd3068f201ea05e~mv2.webp",
    "moneda": "RD$",
    "specs": [],
    "oferta": true,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_ea5fefe98b0244ab9fd3068f201ea05e~mv2.webp"
    ]
  },
  {
    "id": "product_db974120-a00a-6934-c3d0-3cd5388aa6cc",
    "nombre": "Impresora Multifuncional Inlámbrica EcoTank L3250",
    "descripcion": "<p>La Impresora multifuncional 3 en 1 Epson EcoTank L3250 ofrece a las familias, estudiantes y profesionales un costo de impresión ultra bajo, que te permite imprimir hasta 4.500 páginas en negro o 7.500 páginas a color5&nbsp;con cada juego de botellas de repuesto. La EcoTank L3250 ofrece total confiabilidad gracias a la tecnología Heat-Free de Epson, además de una experiencia de recarga fácil, limpia y sin errores con la tecnología EcoFitTM. Diseñado para integrarse en su estilo de vida, está completamente conectado con WiFi, WiFi Direct® y capacidades de impresión móvil a través de la nueva e intuitiva aplicación Epson Smart Panel y cuenta con un diseño de tanque frontal súper compacto que ocupa poco espacio y permite verificar fácilmente los niveles de tinta. Con una garantía limitada y extendida hasta de 2 años4, Epson te respalda totalmente para que pueda imprimir sin cartuchos y sin preocupaciones.</p>",
    "disponible": true,
    "categoria": "impresoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 18500,
    "imagen": "https://static.wixstatic.com/media/ae191a_f6c06713a92c45e88c2ac67162d13050~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": true,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_f6c06713a92c45e88c2ac67162d13050~mv2.jpg"
    ]
  },
  {
    "id": "product_5bb51a40-59c8-c471-83d3-66342c27fec2",
    "nombre": "Canon Imagerunner AdvanceC3525I",
    "descripcion": "<p>Con un rendimiento fiable y calidad sobresaliente, la impresora multifuncional imageRUNNER ADVANCE C3525i está diseñada para ayudarle a ahorrar tiempo y recursos, mientras que incrementa la productividad. Para los entornos de trabajo que requieren un dispositivo compacto y eficiente que pueda imprimir documentos en color de alta calidad, la impresora C3525i multifuncional ofrece una solución valiosa que le ayuda a simplificar el flujo de trabajo.</p><p>El dispositivo imageRUNNER ADVANCE C3525i, de diseño compacto y sostenible, utiliza la plataforma inteligente imageRUNNER ADVANCE, diseñada para respaldar los negocios y los ciclos de vida de sus documentos de principio a fin. El dispositivo ofrece velocidades de impresión de hasta 25 ppm (B y N/color) y es compatible con materiales de hasta 11” x 17”, con pesos distintos, mientras que ofrece diversas opciones de acabado. El dispositivo C3525i también viene estándar con un escáner bilateral de un paso para obtener velocidades de escaneo de 160 ipm (300 ppp)/51 ipm (600 ppp) y la capacidad para convertir y enviar documentos digitalmente para lograr resultados eficaces</p>",
    "disponible": true,
    "categoria": "impresoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 135500,
    "imagen": "https://static.wixstatic.com/media/8df99c_b89ca5ec4beb42db9a36ff686d16d4c7~mv2.jpeg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/8df99c_b89ca5ec4beb42db9a36ff686d16d4c7~mv2.jpeg"
    ]
  },
  {
    "id": "product_94352b4b-5c32-fa5d-a13d-bc5754bb486d",
    "nombre": "Impresora multifunción HP LaserJet Pro M428fdw (W1A30A)",
    "descripcion": "<p>Tener éxito con su empresa significa trabajar con mayor inteligencia. Se diseñó la impresora multifunción HP LaserJet Pro M428 para que enfoque su tiempo donde sea más efectivo: hacer crecer su empresa y permanecer por delante de la competencia.</p><ul>\t<li>Funciones: Impresión, copia, escaneo, fax y correo electrónico</li>\t<li>Velocidad de impresión: Imprime hasta 40/42 ppm (A4/carta) (HP de alta&nbsp;velocidad)&nbsp;1</li>\t<li>Calidad de impresión en negro (óptima): Líneas finas (1200 x 1200 dpi)</li>\t<li>Capacidad del alimentador automático de documentos: Estándar, 50 hojas</li></ul>",
    "disponible": true,
    "categoria": "impresoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 38990,
    "imagen": "https://static.wixstatic.com/media/8df99c_ccd1954cdca6468c98be52ad93fc6263~mv2.jpeg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/8df99c_ccd1954cdca6468c98be52ad93fc6263~mv2.jpeg"
    ]
  },
  {
    "id": "product_dd6923a0-0a3f-a956-9ed7-f12d69544bd0",
    "nombre": "Impresora HP LaserJet Pro 3003dw (3G654A)",
    "descripcion": "<p>Esta impresora se diseñó para brindar potente productividad con velocidades rápidas y hardware confiable. Además, ofrecen uso diario sin esfuerzo desde cualquier lugar donde se realice el trabajo para que pueda concentrarse más en su negocio.</p><ul>\t<li>Funciones: Impresión</li>\t<li>Velocidad de impresión: Negro (normal, A4): Hasta 33 ppm; Negro (normal, carta): Hasta 35 ppm; Negro (a dos caras, A4): Hasta 20 ipm; Negro (a dos caras, carta): Hasta 21&nbsp;ipm&nbsp;1</li>\t<li>Calidad de impresión en negro (óptima): Hasta 1200 x 1200 dpi</li></ul>",
    "disponible": true,
    "categoria": "impresoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 16990,
    "imagen": "https://static.wixstatic.com/media/8df99c_5c9e6ca53a5a43be976f285a01fd2744~mv2.jpeg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/8df99c_5c9e6ca53a5a43be976f285a01fd2744~mv2.jpeg"
    ]
  },
  {
    "id": "product_bf70b714-6d7e-a0fd-3589-b2602385859f",
    "nombre": "Impresora HP LaserJet Pro MFP 3103fdw (3G632A)",
    "descripcion": "<p>Obtenga velocidades de impresión rápidas, escaneado de alto volumen y herramientas de administración sencilla con LaserJet Pro.</p><ul>\t<li>Funciones: Impresión, copia, escaneado, fax</li>\t<li>Velocidad de impresión: Negro (normal, A4): Hasta 33 ppm; Negro (normal, carta): Hasta 35 ppm; Negro (a dos caras, A4): Hasta 20 ipm; Negro (a dos caras, carta): Hasta 21&nbsp;ipm&nbsp;1</li>\t<li>Calidad de impresión en negro (óptima): Hasta 1200 x 1200 dpi</li>\t<li>Capacidad del alimentador automático de documentos: Estándar, 50 hojas</li></ul>",
    "disponible": true,
    "categoria": "impresoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 25500,
    "imagen": "https://static.wixstatic.com/media/8df99c_071feb679bc4445bb7604a04feb4fccb~mv2.jpeg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/8df99c_071feb679bc4445bb7604a04feb4fccb~mv2.jpeg"
    ]
  },
  {
    "id": "product_8baad99f-31eb-46a1-95ce-e09a16a6784c",
    "nombre": "Canon Imagerunner Advance C5535a",
    "descripcion": "<p>Con la incorporación de los pilares de valor de la imageRUNNER ADVANCE de tercera generación, esta impresora multifuncional está desarrollada en una plataforma de administración inteligente de la información que comprende: Eficiencia del Flujo de Trabajo, Administración de Costos, Seguridad, Eficiencia en la Administración de Grupos de Flotas y Dispositivos, Calidad y Fiabilidad, y Sostenibilidad. Diseñada para satisfacer las complejas necesidades de escaneo e impresión con una funcionalidad de nivel empresarial, la serie imageRUNNER ADVANCE de Canon puede ayudar a cumplir con las demandas de flujo de trabajo actuales y añadir capacidad de expansión para futuras necesidades en los negocios.</p><p>&nbsp;</p><p>La imageRUNNER ADVANCE C5535i es el dispositivo ideal para satisfacer las necesidades de alta productividad de una empresa gracias a su uso intuitivo, sofisticadas características de autenticación, velocidades sorprendentes e impresionantes salidas en color. La imageRUNNER ADVANCE C5535i es un dispositivo mutifuncional A3 diseñado para un flujo de trabajo continuo y es capaz de realizar impresiones de alta calidad de hasta 35 ppm en color y en blanco y negro en papel tamaño A4 y Carta, y escaneos a velocidades tan rápidas como 160 ipm con un alimentador bilateral de un solo paso de 150 hojas. Cuente con una experiencia de copiado, impresión y escaneo compatible con capacidades flexibles de acabado y manejo del papel, para satisfacer las diversas necesidades de los diferentes entornos y requisitos de oficina de cada usuario. En Fronet le ofrecemos el servicio de mensajeria,&nbsp;instalacion, configuracion incluido en el costo del productor.</p>",
    "disponible": true,
    "categoria": "impresoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 225133,
    "imagen": "https://static.wixstatic.com/media/8df99c_8072ca72aff34a4eb1343995b1efbb0a~mv2.jpeg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/8df99c_8072ca72aff34a4eb1343995b1efbb0a~mv2.jpeg"
    ]
  },
  {
    "id": "product_865f0e64-b28e-3458-58b6-4c858615bd7a",
    "nombre": "Canon Imagerunner Advance C356if",
    "descripcion": "<p>La impresora imageRUNNER ADVANCE C356iF II, compacta y multifuncional, está diseñada para mejorar el flujo de trabajo, limitar los periodos de inactividad e integrarse fácilmente con los entornos de grupos de dispositivos de varios usuarios. Además, produce imágenes en color de alta calidad y es fácil de usar. Como parte de la línea avanzada de impresoras multifuncionales de Canon, el dispositivo imageRUNNER ADVANCE C356iF II presenta una solución ideal para los entornos de trabajo que requieren un dispositivo eficiente de nivel mediano. Basado en la plataforma imageRUNNER ADVANCE, este modelo brinda un fácil uso consecuente con los dispositivos de Canon y brinda un rendimiento sobresaliente de principio a fin.<br><br>Las tecnologías de alto rendimiento de procesamiento de imágenes y el tóner permiten obtener constantemente imágenes asombrosas gracias al perfil de color V2 de Canon y la impresora puede producir una salida de hasta 36 páginas por minuto en blanco y negro y en color. La impresora multifuncional C356iF II viene estándar con un escáner bilateral de un paso para velocidades de escaneo de hasta 100 ipm (300 ppp) y presenta una interfaz de usuario intuitiva y grande con tecnología de desplazar y presionar de un uso similar al de un teléfono inteligente en muchas pantallas — la misma pantalla que se utiliza en los modelos imageRUNNER ADVANCE de tercera generación. El modelo imageRUNNER ADVANCE C356iF II ofrece a los lugares de trabajo una solución fiable y fácil de mantener que brinda una salida de calidad y diversas características impresionantes, ya sea que utilice una impresora independiente o como parte de un grupo completo de dispositivos.</p>",
    "disponible": true,
    "categoria": "impresoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 85550,
    "imagen": "https://static.wixstatic.com/media/8df99c_062b91e616664c1eba929c46f743f44d~mv2.jpeg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/8df99c_062b91e616664c1eba929c46f743f44d~mv2.jpeg"
    ]
  },
  {
    "id": "product_79249666-0db4-b6b2-0240-4cab06556ac4",
    "nombre": "Impresora multifunción HP Color LaserJet Pro 4303fdw (5HH67A)",
    "descripcion": "<p>Obtenga impresión en color ultrarrápida, hardware confiable, y administración remota fácil y segura.</p><ul>\t<li>Funciones: Impresión, copia, escaneado, fax</li>\t<li>Velocidad de impresión: Velocidad de impresión de hasta 35/33 ppm en negro y color (carta/A4)</li>\t<li>Calidad de impresión en negro (óptima): Hasta 600 x 600 dpi, Hasta 38.400 x 600 dpi mejorada</li>\t<li>Capacidad del alimentador automático de documentos: Estándar, 50 hojas sin curvar</li></ul>",
    "disponible": true,
    "categoria": "impresoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 43990,
    "imagen": "https://static.wixstatic.com/media/8df99c_f0e97856e94c48d9876dd8e868d02e4e~mv2.jpeg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/8df99c_f0e97856e94c48d9876dd8e868d02e4e~mv2.jpeg"
    ]
  },
  {
    "id": "product_345a8848-3f54-abe7-ec14-23d08f646d5c",
    "nombre": "Canon imageclass mf646cdw",
    "descripcion": "<p>Diseñada para pequeñas y medianas empresas, la impresora Color imageCLASS MF644Cdw de Canon ofrece muchas características con un procesamiento de imágenes de alta calidad y un mantenimiento mínimo. Las funciones de impresión, escaneo, copiado y fax le permitirán llevar a cabo las tareas que necesite con tan solo un equipo. Una pantalla táctil en color de 5” brinda una experiencia intuitiva al usuario y un administrador del dispositivo la puede personalizar para simplificar muchas de las tareas cotidianas.<br><br>La Color imageCLASS MF644Cdw tiene la clasificación Plata de EPEAT</p>",
    "disponible": true,
    "categoria": "impresoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 39990,
    "imagen": "https://static.wixstatic.com/media/ae191a_9ba28ee36ac34c82a6ba1e553a15e20b~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/ae191a_9ba28ee36ac34c82a6ba1e553a15e20b~mv2.jpg"
    ]
  },
  {
    "id": "product_57e733a9-368e-6224-c0f5-1feab5b36724",
    "nombre": "Servicio Técnico Reparación PC",
    "descripcion": "<p>¿Necesitas asistencia técnica para tu PC? ¡Has llegado al lugar indicado! Nuestro Servicio Técnico Reparación PC ofrece soluciones rápidas y confiables en español para todo tipo de problemas que puedas tener con tu computadora. Nuestro equipo de expertos está capacitado para resolver desde problemas de hardware hasta problemas de software, con un servicio eficiente y amigable en tu idioma nativo. No importa si tienes problemas con el arranque del sistema, virus molestos o problemas de conectividad, estamos aquí para ayudarte a resolverlos de manera rápida y efectiva. Confía en nuestro Servicio Técnico Reparación PC en español para recuperar el rendimiento óptimo de tu computadora.</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 0,
    "imagen": "https://static.wixstatic.com/media/8df99c_8f9d72b2cb434712925fd56a5ecb8ecc~mv2.jpeg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/8df99c_8f9d72b2cb434712925fd56a5ecb8ecc~mv2.jpeg"
    ]
  },
  {
    "id": "product_5480d000-238d-d429-7415-8de8ad43bf4d",
    "nombre": "Reparación de Laptops",
    "descripcion": "<p>¿Tienes problemas con tu laptop? No te preocupes, en nuestra tienda tecnológica ofrecemos un servicio de reparación de laptops de alta calidad. Nuestro equipo de expertos en tecnología está capacitado para diagnosticar y solucionar cualquier problema que pueda tener tu laptop, ya sea problemas de hardware o software. Además, utilizamos repuestos originales y garantizamos un servicio rápido y eficiente para que puedas recuperar tu laptop en poco tiempo. No importa la marca o modelo, estamos listos para ayudarte a que tu laptop vuelva a funcionar como nuevo. Confía en nuestra experiencia y profesionalismo para darle a tu laptop el cuidado que se merece.</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 0,
    "imagen": "https://static.wixstatic.com/media/8df99c_e3128f0d7b4046c187db2fa173f7d5b4~mv2.jpeg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/8df99c_e3128f0d7b4046c187db2fa173f7d5b4~mv2.jpeg"
    ]
  },
  {
    "id": "product_396f4793-de9b-2fb8-3785-b4156d38d82e",
    "nombre": "Instalación Sistema de Seguridad CCTV",
    "descripcion": "<p>¡Protege tu hogar o negocio con nuestra instalación de sistema de seguridad CCTV! Nuestro servicio incluye la instalación de cámaras de circuito cerrado de televisión para monitorear y grabar imágenes en tiempo real. Con nuestro equipo de profesionales altamente capacitados, podrás tener la tranquilidad de que tu propiedad está protegida las 24 horas del día. Además, ofrecemos la configuración de sistemas de acceso remoto para que puedas visualizar las imágenes desde cualquier lugar a través de tu dispositivo móvil o computadora. No arriesgues la seguridad de tu espacio, ¡contáctanos para obtener una cotización personalizada y garantiza la seguridad de tus seres queridos y bienes!</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 0,
    "imagen": "https://static.wixstatic.com/media/8df99c_8216354ea4b14bd6858246beb2a36492~mv2.jpeg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/8df99c_8216354ea4b14bd6858246beb2a36492~mv2.jpeg"
    ]
  },
  {
    "id": "product_be603e25-acea-d8bd-0168-0cdd8157fe9f",
    "nombre": "Gestión Profesional Cableado Red Empresarial",
    "descripcion": "<p>Nuestro servicio de gestión de cableado de red empresarial ayuda a mejorar la eficiencia y el rendimiento de la red de su empresa. Nuestro equipo de expertos en tecnología trabaja para garantizar que su cableado esté correctamente instalado y organizado, lo que reduce los tiempos de inactividad y aumenta la productividad. Además, ofrecemos soluciones personalizadas para adaptarse a las necesidades específicas de su empresa y mejorar su infraestructura de red. Con nuestro servicio, puede estar seguro de que su red estará bien mantenida y funcionando de manera óptima en todo momento. Confíe en nuestra experiencia y dedicación para optimizar la gestión de cableado de red en su empresa.</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 0,
    "imagen": "https://static.wixstatic.com/media/8df99c_cb3db9404e1c450cab354881fc7de350~mv2.jpeg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/8df99c_cb3db9404e1c450cab354881fc7de350~mv2.jpeg"
    ]
  },
  {
    "id": "product_d17c5af2-9fd4-3273-9806-b93a85f87bcf",
    "nombre": "Servicio Técnico Impresoras",
    "descripcion": "<p>Servicio de Mantención de Impresora de todo tipo</p>",
    "disponible": true,
    "categoria": "computadoras",
    "subcategoria": "accesorio",
    "marca": "Sin marca",
    "precio": 0,
    "imagen": "https://static.wixstatic.com/media/8df99c_b6de08d413c74e41a0da41e091bb95bd~mv2.jpeg",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/8df99c_b6de08d413c74e41a0da41e091bb95bd~mv2.jpeg"
    ]
  },
  {
    "id": "product_2bab1fba-dc9e-1665-50c3-30a0c143efd1",
    "nombre": "Epson EcoTank L4260 ( Multifuncional 3 en 1 )",
    "descripcion": "<p>La impresora multifuncional 3 en 1 L4260 para emprendedores y pequeñas oficinas ofrece funciones de productividad a un precio asequible, como la tecnología de impresión a doble cara automática, conectividad Wi-Fi y compatible con nueva aplicación&nbsp; Epson Smart Panel, para aprovechar toda la productividad de su impresora a través de sus dispositivos inteligentes.</p>",
    "disponible": true,
    "categoria": "impresoras",
    "subcategoria": "accesorio",
    "marca": "Epson",
    "precio": 23200,
    "imagen": "https://static.wixstatic.com/media/8df99c_a112b16a331a4b5d8c4fdbaaa3a61edd~mv2.jpg",
    "moneda": "RD$",
    "specs": [],
    "oferta": true,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/8df99c_a112b16a331a4b5d8c4fdbaaa3a61edd~mv2.jpg"
    ]
  },
  {
    "id": "product_df19c1f7-07d8-a265-42f8-e8dfa824cc6e",
    "nombre": "Impresora Multifuncional HP Color LaserJet Pro MFP 3303fdw",
    "descripcion": "<p>¡Eficiencia y calidad en cada impresión! La&nbsp;<strong>HP LaserJet Pro MFP M3303fdw</strong>&nbsp;es la solución ideal para oficinas y negocios que necesitan un equipo confiable, rápido y multifuncional.</p>",
    "disponible": true,
    "categoria": "impresoras",
    "subcategoria": "accesorio",
    "marca": "Hp",
    "precio": 41900,
    "imagen": "https://static.wixstatic.com/media/8df99c_9ddf34e10c8f4b0aa2046de5d75bbce6~mv2.png",
    "moneda": "RD$",
    "specs": [],
    "oferta": false,
    "destacado": false,
    "precio_original": null,
    "imagenes": [
      "https://static.wixstatic.com/media/8df99c_9ddf34e10c8f4b0aa2046de5d75bbce6~mv2.png"
    ]
  }
];
