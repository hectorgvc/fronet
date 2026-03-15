# Script de descarga de imagenes - Fronet Tecnologia SRL
# Ejecutar desde la carpeta fronet/:
#   powershell -ExecutionPolicy Bypass -File descargar-imagenes.ps1

Set-Location $PSScriptRoot
$dest = "assets\img"
New-Item -ItemType Directory -Force -Path $dest | Out-Null

$imagenes = @(
    # INDEX
    @{ url = 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&q=80&auto=format&fit=crop'; file = 'hero-bg.jpg' },
    @{ url = 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=800&q=80&auto=format&fit=crop'; file = 'hero-card.jpg' },
    @{ url = 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&h=600&q=80&auto=format&fit=crop'; file = 'service-renta-impresora.jpg' },
    @{ url = 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&h=600&q=80&auto=format&fit=crop'; file = 'service-soporte.jpg' },
    @{ url = 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&h=600&q=80&auto=format&fit=crop'; file = 'service-cctv.jpg' },
    @{ url = 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=600&q=80&auto=format&fit=crop'; file = 'service-laptop.jpg' },
    @{ url = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=600&q=80&auto=format&fit=crop'; file = 'service-redes.jpg' },
    @{ url = 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=600&q=80&auto=format&fit=crop'; file = 'service-tecnico-impresora.jpg' },
    @{ url = 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=1200&h=800&q=80&auto=format&fit=crop'; file = 'impresora-seccion.jpg' },
    @{ url = 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=1200&h=800&q=80&auto=format&fit=crop'; file = 'cta-soporte.jpg' },
    # NOSOTROS
    @{ url = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&q=80&auto=format&fit=crop'; file = 'about-team.jpg' },
    @{ url = 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=800&q=80&auto=format&fit=crop'; file = 'about-office.jpg' },
    @{ url = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=800&q=80&auto=format&fit=crop'; file = 'empleos.jpg' },
    # SERVICIOS
    @{ url = 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=1200&h=800&q=80&auto=format&fit=crop'; file = 'srv-renta-impresora.jpg' },
    @{ url = 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=1200&h=800&q=80&auto=format&fit=crop'; file = 'srv-soporte-pc.jpg' },
    @{ url = 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1200&h=800&q=80&auto=format&fit=crop'; file = 'srv-cctv-instalacion.jpg' },
    @{ url = 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200&h=800&q=80&auto=format&fit=crop'; file = 'srv-reparacion-laptop.jpg' },
    @{ url = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&q=80&auto=format&fit=crop'; file = 'srv-redes.jpg' },
    @{ url = 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&h=800&q=80&auto=format&fit=crop'; file = 'srv-tecnico-impresora.jpg' },
    # IMPRESORAS
    @{ url = 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=1200&h=800&q=80&auto=format&fit=crop'; file = 'impresoras-hero.jpg' },
    @{ url = 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&h=600&q=80&auto=format&fit=crop'; file = 'producto-impresora-tinta-1.jpg' },
    @{ url = 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=600&q=80&auto=format&fit=crop'; file = 'producto-impresora-tinta-2.jpg' },
    @{ url = 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=600&q=80&auto=format&fit=crop'; file = 'producto-impresora-laser-1.jpg' },
    @{ url = 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&h=600&q=80&auto=format&fit=crop'; file = 'producto-impresora-laser-2.jpg' },
    @{ url = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=600&q=80&auto=format&fit=crop'; file = 'producto-sistema-continuo.jpg' },
    @{ url = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=600&q=80&auto=format&fit=crop'; file = 'producto-escanner-1.jpg' },
    @{ url = 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=600&q=80&auto=format&fit=crop'; file = 'producto-escanner-2.jpg' },
    @{ url = 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&q=80&auto=format&fit=crop'; file = 'impresora-renta-oficina.jpg' },
    # OFERTAS
    @{ url = 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=600&q=80&auto=format&fit=crop'; file = 'oferta-laptop.jpg' },
    @{ url = 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&h=600&q=80&auto=format&fit=crop'; file = 'oferta-impresora.jpg' },
    @{ url = 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&h=600&q=80&auto=format&fit=crop'; file = 'oferta-monitor.jpg' },
    @{ url = 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&h=600&q=80&auto=format&fit=crop'; file = 'oferta-periferico.jpg' },
    @{ url = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=600&q=80&auto=format&fit=crop'; file = 'oferta-servidor.jpg' },
    @{ url = 'https://images.unsplash.com/photo-1541558869434-2840d308329a?w=600&h=600&q=80&auto=format&fit=crop'; file = 'oferta-silla.jpg' },
    # CLIENTES
    @{ url = 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=800&q=80&auto=format&fit=crop'; file = 'clientes-hero.jpg' },
    @{ url = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&q=80&auto=format&fit=crop'; file = 'avatar-cliente-1.jpg' },
    @{ url = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&q=80&auto=format&fit=crop'; file = 'avatar-cliente-2.jpg' },
    @{ url = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&q=80&auto=format&fit=crop'; file = 'avatar-cliente-3.jpg' },
    # CONTACTO
    @{ url = 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&q=80&auto=format&fit=crop'; file = 'contacto-hero.jpg' },
    # OG IMAGE
    @{ url = 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=630&q=80&auto=format&fit=crop'; file = 'og-image.jpg' }
)

Write-Host ""
Write-Host "Descargando $($imagenes.Count) imagenes para Fronet..." -ForegroundColor Cyan
Write-Host ""

$ok = 0
$fail = 0

foreach ($img in $imagenes) {
    $outPath = Join-Path $dest $img.file
    try {
        Invoke-WebRequest -Uri $img.url -OutFile $outPath -UseBasicParsing -TimeoutSec 30 -ErrorAction Stop
        $size = (Get-Item $outPath).Length
        if ($size -gt 5000) {
            Write-Host "  OK  $($img.file) ($([math]::Round($size/1024))KB)" -ForegroundColor Green
            $ok++
        } else {
            Write-Host "  WARN $($img.file) - archivo muy pequeno ($size bytes)" -ForegroundColor Yellow
            $fail++
        }
    } catch {
        Write-Host "  FAIL $($img.file) - $($_.Exception.Message)" -ForegroundColor Red
        $fail++
    }
}

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "Completado: $ok OK, $fail con error" -ForegroundColor Cyan
Write-Host "Imagenes guardadas en: $PSScriptRoot\$dest" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
