# Acueductour Transporte – CLAUDE.md

## Descripción del proyecto

Sitio web estático de una empresa de transporte privado con sede en **Querétaro, México**.
Ofrece servicios de traslados ejecutivos, turismo, eventos privados y ruta directa Querétaro–CDMX.

**Archivos principales:**
- [index.html](index.html) – Estructura HTML de la página
- [styles.css](styles.css) – Estilos y paleta de colores
- [script.js](script.js) – JavaScript: navbar, carrusel, contador animado, fade-in

## Arquitectura

Sitio de **una sola página (SPA estático)** sin framework ni bundler.
- HTML + CSS + JS puros, sin dependencias externas
- No hay backend ni base de datos
- El carrusel es JS-driven (script.js): navegación por botones, dots, swipe táctil y autoavance cada 4 s

## Paleta de colores (CSS variables en `:root`)

| Variable       | Valor     | Uso                                  |
|----------------|-----------|--------------------------------------|
| `--navy`       | `#0B1F3A` | Fondo oscuro principal               |
| `--navy-mid`   | `#132D52` | Fondo oscuro medio                   |
| `--gold`       | `#C8973A` | Dorado ejecutivo — acentos           |
| `--gold-light` | `#E8B55A` | Dorado claro — hover                 |
| `--cream`      | `#F9F5EE` | Fondo claro (testimonios)            |
| `--white`      | `#FFFFFF` | Fondo general                        |

## Secciones de la página (en orden)

1. **Navbar** fijo (`#navbar`) – enlaces ancla a todas las secciones
2. **Hero** (`#inicio`) – `img_01.jpeg` de fondo, estadísticas animadas
3. **Diferenciadores** – banda oscura con 4 íconos
4. **Quiénes Somos** (`#nosotros`) – imagen `img_02.jpeg` + texto
5. **Servicios** (`#servicios`) – 3 tarjetas: Traslados Ejecutivos, Turismo, Eventos Privados
6. **Viajes a CDMX** (`#cdmx`) – ruta Querétaro ↔ CDMX, precio $239 por persona
7. **Flota / Carrusel** (`#flota`) – 14 imágenes locales (`img_01` – `img_14`)
8. **Testimonios** (`#testimonios`)
9. **Banner Cobertura** – destinos y CTA
10. **Contacto** (`#contacto`)
11. **Video Promocional** (`#video`) – `video_promocional.mp4`, volumen inicial 10%
12. **Footer** – Copyright 2026
13. **Botón flotante de WhatsApp** – `wa.me/5214421399335`

## Ruta CDMX (sección `#cdmx`)

- **Precio:** $239 por persona
- **Ida:** Sale de la Alameda de Querétaro a las 10:00 am → llega al Ángel de la Independencia, CDMX
- **Regreso:** Sale del Ángel de la Independencia a las 3:00 pm → llega a la Alameda de Querétaro
- **Días:** Lunes a sábado
- El botón de reserva abre WhatsApp con mensaje pre-llenado

## Datos de contacto

- **Tel:** 442 139 9335
- **WhatsApp:** +52 1 442 139 9335
- **Email:** contacto@acueductour.com

## Imágenes y multimedia

- `logo.png` – logotipo (navbar y footer)
- `img_01.jpeg` – fondo del hero y póster del video
- `img_02.jpeg` – sección Quiénes Somos
- `img_03.jpeg` – `img_14.jpeg` – carrusel de flota (14 imágenes en total)
- `video_promocional.mp4` – video promocional, se carga con `preload="none"` y volumen inicial 10%

## Convenciones y notas para Claude

- El idioma del proyecto es **español**
- Mantener la paleta azul marino + dorado definida en `:root`
- El carrusel depende de JS (script.js); `total = slides.length` — NO dividir entre 2
- No introducir frameworks ni dependencias externas sin consultar primero
- Preferir soluciones simples y nativas (HTML/CSS/JS vanilla)
- Al agregar secciones, seguir el patrón `<section id="..." class="section">`
- Al agregar sección nueva, agregar también su enlace en el navbar y en el footer
