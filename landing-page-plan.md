# Arquitectura de Landing Page Dinámica por Sucursal

## Objetivo General

Crear un sistema de landing pages optimizadas para la conversión, donde cada una de las 5 sucursales del franquiciatario tenga su propia página dedicada y personalizada. La página se adaptará dinámicamente para mostrar la información de contacto y los llamados a la acción (CTAs) correctos según la capacidad logística de cada sucursal (reparto propio vs. solo plataformas).

---

## Estructura del Proyecto

### 1. Página de Inicio (Directorio) - `src/pages/index.tsx`

* **Propósito:** Servir como un portal o directorio principal para que los usuarios (o los motores de búsqueda) descubran las sucursales disponibles.
* **Contenido:**
  * Un Hero genérico de la marca.
    * Una sección que muestre las 5 sucursales en "cards".
    * Cada card tendrá el nombre de la sucursal, su foto y un botón "Ver Menú y Pedir" que enlazará a la página dinámica correspondiente (ej. `/sucursal/centro`).

### 2. Plantilla de Página de Sucursal (Dinámica) - `src/pages/sucursal/[slug].tsx`

* **Propósito:** Es el núcleo del proyecto. Una única plantilla que genera 5 páginas estáticas y ultra-rápidas (ej. `/sucursal/centro`, `/sucursal/fmares`, etc.).
* **Lógica de Datos (`getStaticProps` y `getStaticPaths`):
  * Se generará una página por cada sucursal definida en `sucursales.json`.
  * Cada página recibirá los datos específicos de su sucursal (nombre, teléfono, whatsapp, etc.).
  * Se determinará una variable `tieneRepartoPropio` basada en los datos y se pasará a los componentes.
* **Contenido de la Página:**
  * **Navbar:** Adaptada para mostrar el CTA principal correcto (WhatsApp o Plataformas).
  * **Hero:** Adaptado con CTAs condicionales.
  * **Trust Badges:** (Se mantiene igual).
  * **Featured Menu:** (Se mantiene igual).
  * **How To Order:** Adaptada para mostrar los pasos correctos según el método de entrega.
  * **Branch Info:** Una nueva sección que reemplaza a `SucursalesSection`. Muestra de forma prominente la dirección, horario, mapa y todos los CTAs de la sucursal actual.
  * **Footer:** (Se mantiene igual).

### 3. Base de Datos Central - `sucursales.json`

* **Propósito:** La "fuente única de la verdad" para todas las sucursales.
* **Estructura por Sucursal:**
  * `nombre` (string)
  * `slug` (string): Identificador para la URL (ej: "fmares").
  * `foto` (string): Ruta a la imagen de la fachada.
  * `mapa_url` (string): Enlace directo a Google Maps.
  * `horario` (array)
  * `servicio_domicilio` (array): **CRÍTICO** para la lógica condicional. Debe incluir "Repartidores propios" si aplica.
  * `telefono_fijo` (array)
  * `whatsapp` (string)
  * `plataformas` (object): Enlaces directos a las plataformas (ej: `{ "uber_eats": "url..." }`).

### 4. Componentes Adaptables

* Todos los componentes principales (`Navbar`, `Hero`, `HowToOrder`, etc.) serán modificados para aceptar las props `sucursal` y `tieneRepartoPropio` y renderizar su contenido de forma condicional.
