# 🟪 Responsive Portfolio — Clean Architecture & Continuous Learning

[![Licencia: MIT](https://shields.io)](https://opensource.org)
[![HTML5 / CSS3](https://shields.io)](https://mozilla.org)
[![Sass Preprocessor](https://shields.io)](https://sass-lang.com)
[![JavaScript ES6+ SPA](https://shields.io)](https://mozilla.org)

Este proyecto es un espacio personal diseñado para consolidar y demostrar mis habilidades en el desarrollo frontend y la estructuración de software. Está construido de forma nativa sin frameworks (Vanilla stack) para afianzar un dominio real sobre el núcleo de la tecnología web, la semántica de etiquetas y la lógica de programación bajo un diseño estilizado en tonos oscuros y acentos morados.

Asumo el desarrollo de software como un camino de evolución constante; por ello, este portafolio refleja mis fundamentos actuales en arquitectura limpia, a la vez que se mantiene como un proyecto abierto a la optimización, las buenas prácticas y el aprendizaje de nuevas herramientas.

🌐 **Demo en Vivo:** [OneBolivar Showcase](https://github.io)

---

## 🚀 Proyectos Destacados en Evolución

El ecosistema renderiza el acceso directo a tres de mis proyectos de desarrollo clave:

1.  **Workspace Reservation System SPA:** Aplicación Single Page con Router por hashes, control de accesos RBAC y lógica de bloqueo para superposición de horarios.
2.  **Student Inventory Control System:** Motor modular interactivo programado en Python enfocado en operaciones CRUD y persistencia lógica.
3.  **SPA - Sistema de Gestión de Tickets:** Sistema frontend centralizado para incidencias técnicas, con autenticación local persistente y bases de datos JSON simuladas independientes.

---

## 📁 Arquitectura del Workspace

De acuerdo con la distribución de activos estáticos, el entorno se mapea de la siguiente manera:

```text
PORTAFOLIO_JB/
├── index.html          # Punto de entrada único (HTML5 Semántico)
├── readme.md           # Documentación estratégica del sistema
└── assets/             # Contenedor global de recursos de la aplicación
    ├── css/
    │   └── style.css   # Archivos CSS compilados por el procesador
    ├── js/
    │   └── main.js     # Lógica de interacción cliente y control de temas
    ├── docs/
    │   └── hoja_de_vida.pdf # Archivo físico de la hoja de vida (CV)
    ├── img/
    │   └── profile.jpg # Fotografía profesional de perfil
    └── sass/
        └── style.scss  # Lógica fuente modular en Sass (BEM & Nesting)
```

---

## ⚙️ Sincronización del Compilador (Sass CLI)

Para lanzar el entorno de desarrollo y realizar modificaciones de diseño usando la sintaxis nativa de Sass, ejecuta el siguiente comando desde tu terminal apuntando a tu raíz `PORTAFOLIO_JB/`:

```bash
sass --watch assets/sass/style.scss:assets/css/style.css
```

---
Diseñado y construido con un enfoque de mejora constante por [OneBolivar](https://github.com).
