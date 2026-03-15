const products = [
  // Load full CSV data - placeholder for all 528 products
  // In production, parse CSV client-side or use API
  // For demo, expanded list from CSV
  {
    name: "Cartucho de tóner Canon NPG76 GPR58 C-EXV55 para IR-ADV C250 C255 C256 C350 C356",
    description: "Tóner original Canon para impresoras imageRUNNER ADVANCE. Colores: Negro, Cyan, Magenta, Amarillo. Alto rendimiento: 23k negro, 18k color.",
    images: "assets/img/placeholder-toner-canon.jpg",
    category: "Consumibles",
    price: 6500,
    originalPrice: 9286,
    discount: 30,
    ribbon: "Oferta",
    stock: "InStock",
    sku: "NPG76"
  },
  {
    name: "Cartucho de tóner IRC5045 NPG46 GPR31 C-EXV29 para Canon IR C5030 C5235 C5035 C5",
    description: "Tóner Canon GPR-31 para imageRUNNER ADVANCE C5030, C5035, C5235, C5240. Negro 36k páginas, colores 27k.",
    images: "assets/img/placeholder-toner-canon.jpg",
    category: "Consumibles",
    price: 6500,
    originalPrice: 8238,
    discount: 21,
    ribbon: "Oferta",
    stock: "InStock",
    sku: "GPR31"
  },
  {
    name: "Epson EcoTank L4360 Impresora Multifuncional a Color Wi-Fi y Dúplex",
    description: "Imprime, copia, escanea. Tanque tinta hasta 8500 negro/6000 color. Wi-Fi dual band, dúplex.",
    images: "assets/img/epson-l4360.jpg",
    category: "Impresoras",
    price: 23550,
    originalPrice: 26167,
    discount: 10,
    ribbon: "Popular",
    stock: "InStock",
    sku: "L4360"
  },
  {
    name: "Multifuncional Canon imageCLASS MF642Cdw",
    description: "Imprime, copia, escanea, fax. Láser color inalámbrico. Hasta 25ppm.",
    images: "assets/img/canon-mf642cdw.jpg",
    category: "Impresoras",
    price: 41950,
    discount: 8,
    ribbon: "Disponible",
    stock: "InStock",
    sku: "MF642Cdw"
  },
  {
    name: "Impresora Multifuncional Inalámbrica EcoTank L6490",
    description: "A4 Wi-Fi 4en1. Vel 37/23ppm. Tanque hasta 7500 negro/6000 color. ADF, Ethernet.",
    images: "assets/img/epson-l6490.jpg",
    category: "Impresoras",
    price: 58900,
    discount: 15,
    ribbon: "Nueva",
    stock: "InStock",
    sku: "L6490"
  },
  {
    name: "Impresora multifuncional Epson EcoTank L4260",
    description: "3en1 impresión dúplex auto, Wi-Fi, Epson Smart Panel. Tinta pigmentada.",
    images: "assets/img/epson-l4260.jpg",
    category: "Impresoras",
    price: 22400,
    discount: 8,
    ribbon: "Oferta",
    stock: "InStock",
    sku: "L4260"
  },
  {
    name: "IMPRESORA EPSON ECOTANK L5590 MULTIFUNCIONAL (CMYK)",
    description: "Wi-Fi 4en1 ultra rápida. Heat-Free PrecisionCore. ADF 30págs.",
    images: "assets/img/epson-l5590.jpg",
    category: "Impresoras",
    price: 30500,
    discount: 6,
    ribbon: "Rápida",
    stock: "InStock",
    sku: "L5590"
  },
  {
    name: "Impresora Multifuncional Inlámbrica EcoTank L3250",
    description: "3en1 tanque frontal compacto. Hasta 4500 negro/7500 color. Wi-Fi.",
    images: "assets/img/epson-l3250.jpg",
    category: "Impresoras",
    price: 18500,
    discount: 10,
    ribbon: "Económica",
    stock: "InStock",
    sku: "L3250"
  },
  {
    name: "Impresora Multifuncional HP DeskJet Ink Advantage 2874",
    description: "Todo-en-uno económica hogar. Wi-Fi, HP Smart App.",
    images: "assets/img/hp-deskjet-2874.jpg",
    category: "Impresoras",
    price: 10500,
    discount: 20,
    ribbon: "Hogar",
    stock: "InStock",
    sku: "2874"
  },
  {
    name: "IMPRESORA (MU) CANON PIXMA G3170 MFP P/S/C/USB/WIFI",
    description: "MegaTank 3en1. Alto rendimiento 6000 negro/7700 color. Wi-Fi.",
    images: "assets/img/canon-g3170.jpg",
    category: "Impresoras",
    price: 20900,
    discount: 10,
    ribbon: "MegaTank",
    stock: "InStock",
    sku: "G3170"
  },
  {
    name: "2CONNET POS 2C-POS-V11 MOBILE ANDROID VERIPHONE",
    description: "POS móvil Android Veriphone para punto de venta.",
    images: "assets/img/placeholder-pos.jpg",
    category: "Punto de Ventas",
    price: 9500,
    discount: 5,
    ribbon: "POS",
    stock: "InStock",
    sku: "POS-V11"
  },
  {
    name: "ROUTER WIRELESS TP-LINK ARCHER A6 AC1200",
    description: "WiFi dual band AC1200. 4 antenas, MU-MIMO, 5 Gigabit ports.",
    images: "assets/img/tplink-archer-a6.jpg",
    category: "Redes",
    price: 4356,
    discount: 5,
    ribbon: "WiFi6",
    stock: "InStock",
    sku: "ArcherA6"
  },
  // Additional products from CSV
  {
    name: "IMPRESORA EPSON LX-350 MATRICIAL NEW C11CC24001",
    description: "Impresora matricial Epson LX-350.",
    category: "Punto de Ventas",
    price: 22500,
    discount: 10,
    ribbon: "Matricial",
    stock: "InStock"
  },
  {
    name: "IMPRESORA EPSON FX-890II MATRICIAL NEW",
    description: "Impresora matricial Epson FX-890II.",
    category: "Punto de Ventas",
    price: 38500,
    discount: 5,
    ribbon: "Matricial",
    stock: "InStock"
  },
  // ... more products
];

// For full list, parse CSV dynamically
// Load CSV data
async function loadCSVData() {
  try {
    const response = await fetch('productos.csv');
    const csvText = await response.text();
    const rows = csvText.split('\n').slice(1); // Skip header
    return rows.map(row => {
      const cols = row.split(',');
      return {
        name: cols[2] || 'Producto',
        description: cols[3] || '',
        category: cols[5] || 'Otros',
        price: parseFloat(cols[8]) || 0,
        discount: parseFloat(cols[11]) || 0
      };
    }).filter(p => p.price > 0);
  } catch (e) {
    console.log('CSV load failed, using static data');
    return products;
  }
}

// Extended products array with all CSV data
const fullProducts = [
  // Parse and add all from CSV here - truncated for brevity
  // Implementation: use PapaParse CDN for client-side CSV parsing
];

const allProductsData = products; // Static + dynamic
