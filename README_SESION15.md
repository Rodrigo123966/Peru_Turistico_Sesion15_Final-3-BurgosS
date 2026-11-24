# Perú Turístico - Sesión 15

Este proyecto conserva el diseño, las rutas, el contenido y los destinos del proyecto original de la sesión 14. Se añadieron optimizaciones de carga sin rediseñar la página.

## Cambios realizados

1. **Carga diferida de páginas:** `src/App.jsx` usa `React.lazy()` para cargar Inicio, Destinos, DetalleDestino y Nosotros solo cuando se visita cada ruta.
2. **Suspense:** `src/App.jsx` incorpora un componente de espera con indicador visual y el mensaje "Cargando página..." mientras se descarga una página.
3. **Optimización de imágenes:** `src/pages/Destino.jsx` y `src/pages/DetalleDestino.jsx` agregan `loading="lazy"`, `decoding="async"`, `width`, `height` y textos alternativos descriptivos.
4. **Estilo del mensaje de carga:** `src/App.css` añade el indicador animado respetando la paleta y el diseño original.

## Ejecutar el proyecto

1. Descomprime la carpeta.
2. Abre la carpeta en Visual Studio Code.
3. Abre la terminal y ejecuta `npm install`.
4. Ejecuta `npm run dev`.
5. Abre la dirección local que muestra Vite.

## Evidencias que solicita la tarea

- Captura de `src/App.jsx`: deben verse `lazy`, las cuatro páginas y `Suspense`.
- Captura de `src/App.css`: debe verse el estilo de `.cargando` y el indicador.
- Captura de `src/pages/Destino.jsx`: deben verse `loading`, `width`, `height`, `alt` y `decoding`.
- Captura de `src/pages/DetalleDestino.jsx`: deben verse las propiedades de la imagen.
- Captura de Lighthouse antes y después de aplicar las optimizaciones.

## Medición con Lighthouse

Los puntajes no se incluyen porque deben medirse en el navegador del equipo donde se ejecuta el proyecto. Para comparar correctamente, usa la misma computadora, navegador, tamaño de ventana y condiciones de prueba. Ejecuta Lighthouse sobre la versión original (antes) y luego sobre esta versión (después), en modo incógnito si es posible. Guarda ambas capturas y anota los puntajes reales de Rendimiento, Accesibilidad, Prácticas recomendadas y SEO.
