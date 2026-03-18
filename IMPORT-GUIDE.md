# GUÍA IMPORT EXCEL/CSV → Admin Tienda

## 🎯 CAMPOS OBLIGATORIOS (mínimo para importar)
| Campo | Tipo | Ejemplo | Requerido |
|-------|------|---------|-----------|
| `id` | Texto | IMP-001 | ✅ |
| `nombre` | Texto | Impresora HP LaserJet | ✅ |
| `categoria` | Texto | impresoras | ✅ |
| `subcategoria` | Texto | laser | ✅ |
| `marca` | Texto | HP | ✅ |
| `precio` | Número | 18500 | ✅ |

## 📋 CAMPOS OPCIONALES
```
moneda → RD$/US$ (default: RD$)
imagen → URL imagen (default: placeholder)
descripcion → Texto libre
disponible → true/false (default: true)
oferta → true/false (default: false)
precio_original → Número (solo si oferta=true)
imagenes → JSON array ["url1","url2"] 
specs → JSON array ["spec1","spec2"]
```

## 📥 FORMATO CSV/EXCEL
```
id,nombre,categoria,subcategoria,marca,precio,moneda,imagen,descripcion,disponible,oferta
IMP-001,"Impresora HP LaserJet Pro","impresoras","laser","HP",18500,"RD$","assets/img/placeholder.jpg","Descripción aquí",true,false
```

## 🚀 CÓMO IMPORTAR
1. **Admin** → `admin-tienda.html` → login `fronet2026`
2. **Botón "Importar"** 📤 → Selecciona CSV/Excel
3. ✅ Productos cargados → Tabla actualizada

## 💾 EJEMPLO CSV CREADO
`sample-productos-import.csv` → **3 productos listos para importar**

**¡Guarda en Excel → Exporta CSV → Importa directo!**

