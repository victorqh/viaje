 # Flores para ti

 Experiencia web vertical: un viaje por una galaxia de flores amarillas. La primera versión usa React, TypeScript y Vite, y está pensada para publicarse como sitio estático en GitHub Pages.

 ## Estructura

 ```text
 viaje_flores/
 ├─ public/                 # Recursos públicos estáticos
 ├─ src/
 │  ├─ App.tsx              # Escenas y contenido de la experiencia
 │  ├─ App.css              # Dirección visual, flores, órbitas y movimiento
 │  ├─ index.css            # Base global y fondo del documento
 │  └─ main.tsx             # Punto de entrada React
 ├─ index.html              # Metadatos y título del sitio
 ├─ vite.config.ts
 └─ package.json
 ```

 ## Dirección de la experiencia

 1. **Umbral**: portada negra, coordenadas, estrellas y flores flotantes.
 2. **Entrada**: botón “Entrar al jardín” con desplazamiento suave.
 3. **Capítulo uno**: banda amarilla con el mensaje principal y una flor de escala mayor.
 4. **Siguientes capítulos**: se añadirán como nuevas secciones verticales para conservar la sensación de viaje.

 Las flores actuales son formas CSS para tener una primera escena ligera y sin dependencias. Las sustituiremos por ilustraciones o imágenes propias cuando definamos el lenguaje final de las flores.

 ## Desarrollo

 ```bash
 npm install
 npm run dev
 ```

 Validación de producción:

 ```bash
 npm run build
 npm run lint
 ```

 ## GitHub Pages

 Antes de publicar, configura `base` en `vite.config.ts` con el nombre del repositorio, por ejemplo `base: '/nombre-del-repo/'`. Después se puede añadir un workflow de GitHub Actions para desplegar `dist/` automáticamente.
