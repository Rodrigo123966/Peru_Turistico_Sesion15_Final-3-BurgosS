# Perú Turístico

Proyecto de React + Vite con navegación mediante React Router.

## Requisitos
- Node.js y npm instalados.

## Instalación y ejecución
1. Abre esta carpeta en Visual Studio Code.
2. Abre una terminal en esta carpeta.
3. Ejecuta `npm install`.
4. Ejecuta `npm run dev`.
5. Abre en el navegador la dirección local que muestra Vite.

## Rutas
- `/` : Inicio
- `/destinos` : Lista de destinos (con filtro por categoría)
- `/destinos/1` : Detalle de un destino (cambia el ID para consultar otro)
- `/nosotros` : Información del proyecto

Los datos se cargan desde `public/data/destinos.json` mediante el servicio `src/service/destinoService.js`.
