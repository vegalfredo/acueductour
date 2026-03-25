# Acueductour Transporte – CLAUDE.md

## Descripción del proyecto

Sitio web estático de una empresa de transporte privado con sede en **Querétaro, México**.
Ofrece servicios de traslados ejecutivos, turismo y eventos privados.

**Archivos principales:**
- [index.html](index.html) – Estructura HTML de la página
- [styles.css](styles.css) – Estilos y paleta de colores
- [script.js](script.js) – JavaScript (actualmente vacío, reservado para funciones futuras)

## Arquitectura

Sitio de **una sola página (SPA estático)** sin framework ni bundler.
- HTML + CSS + JS puros, sin dependencias externas
- No hay backend ni base de datos
- El carrusel y el efecto parallax funcionan exclusivamente con CSS

## Paleta de colores (CSS variables en `:root`)

| Variable    | Valor     | Uso                          |
|-------------|-----------|------------------------------|
| `--color1`  | `#FBB033` | Bordes de tarjetas           |
| `--color2`  | `#D26900` | Logo, títulos h3, footer     |
| `--color3`  | `#D23F05` | Links del menú, h2, hero h1  |
| `--white`   | `#ffffff` | Fondo general                |

## Secciones de la página

1. **Navbar** fijo con enlaces ancla a cada sección
2. **Hero / Parallax** (`#inicio`) – imagen de fondo fija, texto centrado con fondo semitransparente
3. **Carrusel** – 3 imágenes que rotan cada 4 s mediante animación CSS `@keyframes slide`
4. **Quiénes Somos** (`#quienes`)
5. **Servicios** (`#servicios`) – 3 tarjetas: Traslados Ejecutivos, Turismo, Eventos Privados
6. **Contacto** (`#contacto`) – Teléfono y correo
7. **Footer** – Copyright 2026
8. **Botón flotante de WhatsApp** – enlace directo a `wa.me/5214421399335`

## Datos de contacto

- **Tel:** 442 139 9335
- **WhatsApp:** +52 1 442 139 9335
- **Email:** contacto@acueductour.com

## Imágenes

- Las imágenes del hero y carrusel apuntan actualmente a **picsum.photos** (placeholders)
- Hay imágenes locales disponibles: `logo.png`, `img_01.jpeg`, `img_02.jpeg`, `img_03.jpeg`
- Pendiente: reemplazar placeholders con las imágenes locales reales

## Convenciones y notas para Claude

- El idioma del proyecto es **español**
- Mantener la paleta de colores naranja/rojo definida en `:root`
- El JS está reservado para funcionalidades futuras; el carrusel NO depende de JS
- No introducir frameworks ni dependencias externas sin consultar primero
- Preferir soluciones simples y nativas (HTML/CSS/JS vanilla)
- Al agregar secciones, seguir el patrón `<section id="..." class="section">`
