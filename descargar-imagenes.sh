#!/bin/bash
# ============================================================
# Script de descarga de imágenes — Fronet Tecnología SRL
# Generado por FRONET_IMAGES_SKILL
# ============================================================
# INSTRUCCIONES:
#   1. Revisa CREDITOS_IMAGENES.md antes de ejecutar
#   2. Ejecutar desde la raíz del proyecto (carpeta fronet/):
#      bash descargar-imagenes.sh
#   3. Las imágenes se guardan en assets/img/
# ============================================================

mkdir -p assets/img

echo "🚀 Iniciando descarga de imágenes para Fronet Tecnología SRL..."
echo ""

# ─────────────────────────────────────────────
# INDEX.HTML — INICIO
# ─────────────────────────────────────────────
echo "📁 [1/8] Descargando imágenes de INDEX (Inicio)..."

curl -L "https://source.unsplash.com/1920x1080/?technology,circuit,blue,abstract" \
  -o "assets/img/hero-bg.jpg" --silent --show-error
echo "  ✔ hero-bg.jpg"

curl -L "https://source.unsplash.com/800x800/?person,laptop,office,professional" \
  -o "assets/img/hero-card.jpg" --silent --show-error
echo "  ✔ hero-card.jpg"

curl -L "https://source.unsplash.com/600x600/?office,printer,modern,white" \
  -o "assets/img/service-renta-impresora.jpg" --silent --show-error
echo "  ✔ service-renta-impresora.jpg"

curl -L "https://source.unsplash.com/600x600/?computer,technician,repair" \
  -o "assets/img/service-soporte.jpg" --silent --show-error
echo "  ✔ service-soporte.jpg"

curl -L "https://source.unsplash.com/600x600/?security,camera,installation" \
  -o "assets/img/service-cctv.jpg" --silent --show-error
echo "  ✔ service-cctv.jpg"

curl -L "https://source.unsplash.com/600x600/?laptop,open,desk,minimal" \
  -o "assets/img/service-laptop.jpg" --silent --show-error
echo "  ✔ service-laptop.jpg"

curl -L "https://source.unsplash.com/600x600/?network,cable,server,rack" \
  -o "assets/img/service-redes.jpg" --silent --show-error
echo "  ✔ service-redes.jpg"

curl -L "https://source.unsplash.com/600x600/?printer,repair,maintenance" \
  -o "assets/img/service-tecnico-impresora.jpg" --silent --show-error
echo "  ✔ service-tecnico-impresora.jpg"

curl -L "https://source.unsplash.com/1200x800/?professional,printer,office" \
  -o "assets/img/impresora-seccion.jpg" --silent --show-error
echo "  ✔ impresora-seccion.jpg"

curl -L "https://source.unsplash.com/1200x800/?IT,support,technician,laptop" \
  -o "assets/img/cta-soporte.jpg" --silent --show-error
echo "  ✔ cta-soporte.jpg"

echo ""

# ─────────────────────────────────────────────
# NOSOTROS.HTML
# ─────────────────────────────────────────────
echo "📁 [2/8] Descargando imágenes de NOSOTROS..."

curl -L "https://source.unsplash.com/1200x800/?team,office,technology,work" \
  -o "assets/img/about-team.jpg" --silent --show-error
echo "  ✔ about-team.jpg"

curl -L "https://source.unsplash.com/1200x800/?technology,store,electronics,shop" \
  -o "assets/img/about-office.jpg" --silent --show-error
echo "  ✔ about-office.jpg"

curl -L "https://source.unsplash.com/1200x800/?job,interview,office,professional" \
  -o "assets/img/empleos.jpg" --silent --show-error
echo "  ✔ empleos.jpg"

echo ""

# ─────────────────────────────────────────────
# SERVICIOS.HTML
# ─────────────────────────────────────────────
echo "📁 [3/8] Descargando imágenes de SERVICIOS..."

curl -L "https://source.unsplash.com/1200x800/?multifunction,printer,office,corporate" \
  -o "assets/img/srv-renta-impresora.jpg" --silent --show-error
echo "  ✔ srv-renta-impresora.jpg"

curl -L "https://source.unsplash.com/1200x800/?computer,repair,motherboard,technician" \
  -o "assets/img/srv-soporte-pc.jpg" --silent --show-error
echo "  ✔ srv-soporte-pc.jpg"

curl -L "https://source.unsplash.com/1200x800/?security,camera,installation,professional" \
  -o "assets/img/srv-cctv-instalacion.jpg" --silent --show-error
echo "  ✔ srv-cctv-instalacion.jpg"

curl -L "https://source.unsplash.com/1200x800/?laptop,repair,open,hardware" \
  -o "assets/img/srv-reparacion-laptop.jpg" --silent --show-error
echo "  ✔ srv-reparacion-laptop.jpg"

curl -L "https://source.unsplash.com/1200x800/?server,room,rack,network,infrastructure" \
  -o "assets/img/srv-redes.jpg" --silent --show-error
echo "  ✔ srv-redes.jpg"

curl -L "https://source.unsplash.com/1200x800/?printer,service,repair,professional" \
  -o "assets/img/srv-tecnico-impresora.jpg" --silent --show-error
echo "  ✔ srv-tecnico-impresora.jpg"

echo ""

# ─────────────────────────────────────────────
# IMPRESORAS.HTML
# ─────────────────────────────────────────────
echo "📁 [4/8] Descargando imágenes de IMPRESORAS..."

curl -L "https://source.unsplash.com/1200x800/?inkjet,printer,white,background,professional" \
  -o "assets/img/impresoras-hero.jpg" --silent --show-error
echo "  ✔ impresoras-hero.jpg"

curl -L "https://source.unsplash.com/600x600/?inkjet,printer,compact,white" \
  -o "assets/img/producto-impresora-tinta-1.jpg" --silent --show-error
echo "  ✔ producto-impresora-tinta-1.jpg"

curl -L "https://source.unsplash.com/600x600/?color,printer,small,home,office" \
  -o "assets/img/producto-impresora-tinta-2.jpg" --silent --show-error
echo "  ✔ producto-impresora-tinta-2.jpg"

curl -L "https://source.unsplash.com/600x600/?laser,printer,black,office" \
  -o "assets/img/producto-impresora-laser-1.jpg" --silent --show-error
echo "  ✔ producto-impresora-laser-1.jpg"

curl -L "https://source.unsplash.com/600x600/?laser,printer,large,professional" \
  -o "assets/img/producto-impresora-laser-2.jpg" --silent --show-error
echo "  ✔ producto-impresora-laser-2.jpg"

curl -L "https://source.unsplash.com/600x600/?ink,tank,printer,continuous" \
  -o "assets/img/producto-sistema-continuo.jpg" --silent --show-error
echo "  ✔ producto-sistema-continuo.jpg"

curl -L "https://source.unsplash.com/600x600/?flatbed,scanner,office,desk" \
  -o "assets/img/producto-escanner-1.jpg" --silent --show-error
echo "  ✔ producto-escanner-1.jpg"

curl -L "https://source.unsplash.com/600x600/?document,scanner,multifunction" \
  -o "assets/img/producto-escanner-2.jpg" --silent --show-error
echo "  ✔ producto-escanner-2.jpg"

curl -L "https://source.unsplash.com/1200x800/?person,using,printer,office" \
  -o "assets/img/impresora-renta-oficina.jpg" --silent --show-error
echo "  ✔ impresora-renta-oficina.jpg"

echo ""

# ─────────────────────────────────────────────
# OFERTAS.HTML
# ─────────────────────────────────────────────
echo "📁 [5/8] Descargando imágenes de OFERTAS..."

curl -L "https://source.unsplash.com/600x600/?laptop,product,white,background" \
  -o "assets/img/oferta-laptop.jpg" --silent --show-error
echo "  ✔ oferta-laptop.jpg"

curl -L "https://source.unsplash.com/600x600/?compact,printer,product,white" \
  -o "assets/img/oferta-impresora.jpg" --silent --show-error
echo "  ✔ oferta-impresora.jpg"

curl -L "https://source.unsplash.com/600x600/?LED,monitor,office,desk" \
  -o "assets/img/oferta-monitor.jpg" --silent --show-error
echo "  ✔ oferta-monitor.jpg"

curl -L "https://source.unsplash.com/600x600/?wireless,keyboard,mouse,set" \
  -o "assets/img/oferta-periferico.jpg" --silent --show-error
echo "  ✔ oferta-periferico.jpg"

curl -L "https://source.unsplash.com/600x600/?rack,server,small,business" \
  -o "assets/img/oferta-servidor.jpg" --silent --show-error
echo "  ✔ oferta-servidor.jpg"

curl -L "https://source.unsplash.com/600x600/?ergonomic,office,chair,modern" \
  -o "assets/img/oferta-silla.jpg" --silent --show-error
echo "  ✔ oferta-silla.jpg"

echo ""

# ─────────────────────────────────────────────
# CLIENTES.HTML
# ─────────────────────────────────────────────
echo "📁 [6/8] Descargando imágenes de CLIENTES..."

curl -L "https://source.unsplash.com/1200x800/?business,handshake,partnership" \
  -o "assets/img/clientes-hero.jpg" --silent --show-error
echo "  ✔ clientes-hero.jpg"

curl -L "https://source.unsplash.com/400x400/?professional,man,portrait,business" \
  -o "assets/img/avatar-cliente-1.jpg" --silent --show-error
echo "  ✔ avatar-cliente-1.jpg"

curl -L "https://source.unsplash.com/400x400/?professional,woman,portrait,business" \
  -o "assets/img/avatar-cliente-2.jpg" --silent --show-error
echo "  ✔ avatar-cliente-2.jpg"

curl -L "https://source.unsplash.com/400x400/?man,professional,headshot,office" \
  -o "assets/img/avatar-cliente-3.jpg" --silent --show-error
echo "  ✔ avatar-cliente-3.jpg"

echo ""

# ─────────────────────────────────────────────
# CONTACTO.HTML
# ─────────────────────────────────────────────
echo "📁 [7/8] Descargando imágenes de CONTACTO..."

curl -L "https://source.unsplash.com/1200x800/?customer,service,phone,office" \
  -o "assets/img/contacto-hero.jpg" --silent --show-error
echo "  ✔ contacto-hero.jpg"

echo ""

# ─────────────────────────────────────────────
# OG IMAGE (Global)
# ─────────────────────────────────────────────
echo "📁 [8/8] Descargando OG Image (global)..."

curl -L "https://source.unsplash.com/1200x630/?technology,office,professional,wide" \
  -o "assets/img/og-image.jpg" --silent --show-error
echo "  ✔ og-image.jpg"

echo ""

# ─────────────────────────────────────────────
# RESUMEN
# ─────────────────────────────────────────────
TOTAL=$(ls assets/img/*.jpg 2>/dev/null | wc -l)
echo "============================================"
echo "✅ Descarga completada — $TOTAL imágenes en assets/img/"
echo "============================================"
echo ""
echo "Próximos pasos:"
echo "  1. Revisa las imágenes descargadas visualmente"
echo "  2. Consulta assets/img/imagenes-referencia.md para los fragmentos HTML"
echo "  3. Pega los <img> tags en cada página HTML correspondiente"
