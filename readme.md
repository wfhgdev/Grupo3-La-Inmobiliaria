# 🏠 UniSpace - La Inmobiliaria (Grupo 3)

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Status](https://img.shields.io/badge/status-En%20Desarrollo-orange.svg)

> **UniSpace** es una plataforma web moderna diseñada para la búsqueda y gestión de alojamiento universitario en Madrid, ofreciendo a los estudiantes de diversas universidades e institutos una experiencia intuitiva, accesible y visualmente atractiva para encontrar su nuevo hogar.

---

## 📌 Tabla de Contenidos

- [Descripción](#-descripción)
- [Características Principales](#-características-principales)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación y Configuración](#-instalación-y-configuración)
- [Equipo y Creadores](#-equipo-y-creadores)
- [Licencia](#-licencia)

---

## 📖 Descripción

**UniSpace** es un proyecto enfocado en solucionar la búsqueda de vivienda compartida para estudiantes en la Comunidad de Madrid. La plataforma destaca por un catálogo visual interactivo de habitaciones y pisos disponibles, información sobre agentes inmobiliarios de confianza, detalles de ubicación y servicios (Wi-Fi, estado exterior/interior, número de camas) y canales directos de contacto.

---

## ✨ Características Principales

- 🔍 **Banner Principal y Búsqueda:** Buscador centralizado por barrio o universidad (UCM, IE, URJC, etc.).
- 🏠 **Catálogo de Habitaciones y Pisos:** Tarjetas interactivas con estados (`Disponible`, `Últimas plazas`), precios claros (`€/mes`), distancia a campus y características detalladas.
- 🤝 **Sección "Sobre UniSpace":** Reseña e historia del servicio enfocado en alojamiento universitario seguro y transparente.
- 👥 **Equipo de Agentes Inmobiliarios:** Galería visual con perfiles de agentes listos para asesorar a los estudiantes.
- 📞 **Pie de Página Completo:** Accesos directos a redes sociales (Facebook, Instagram), teléfono de contacto, dirección física en Madrid y correo de atención.
- 📱 **Diseño Totalmente Adaptativo (Responsive):** Estilos CSS optimizados para dispositivos móviles, tablets y monitores de escritorio.

---

## 🛠️ Tecnologías Utilizadas

- **Core & Framework:** [React 19](https://react.dev/)
- **Empaquetador y Servidor Dev:** [Vite](https://vitejs.dev/)
- **Estilos:** Vanilla CSS3 con diseño responsivo, Flexbox y CSS Grid
- **Tipografía:** Google Fonts (*Plus Jakarta Sans*)
- **Calidad de Código y Linting:** ESLint
- **Control de Versiones:** Git & GitHub

---

## 📁 Estructura del Proyecto

```text
Grupo3LaInmobiliaria/
├── public/
│   └── favicon.svg                  # Icono del sitio web
├── src/
│   ├── assets/                      # Recursos multimedia
│   │   ├── banner.png               # Fondo del hero banner
│   │   └── img/                     # Imágenes de inmuebles, agentes y logotipos
│   ├── components/                  # Componentes React modulares
│   │   ├── about/                   # Sección "Sobre UniSpace" (About.jsx, About.css)
│   │   ├── agents/                  # Sección de Agentes (Agents.jsx, Agents.css)
│   │   ├── flats/                   # Tarjetas de Habitaciones/Pisos (Flats.jsx, Flats.css)
│   │   ├── footer/                  # Pie de página (Footer.jsx, Footer.css)
│   │   └── header/                  # Navegación y Banner principal (Header.jsx, Banner.jsx, etc.)
│   ├── styles/                      # Hojas de estilo globales
│   │   ├── App.css                  # Estilos de contenedores y secciones
│   │   └── index.css                # Resets y variables de estilos base
│   ├── App.jsx                      # Componente principal de la aplicación
│   └── main.jsx                     # Punto de entrada de la aplicación React
├── index.html                       # Documento HTML principal
├── package.json                     # Gestión de dependencias y scripts de NPM
├── vite.config.js                   # Configuración del entorno Vite
└── readme.md                        # Documentación del proyecto
```

---

## 📋 Requisitos Previos

Asegúrate de tener instalado en tu sistema:

- [Node.js](https://nodejs.org/) (versión 18.0 o superior recomendada)
- [NPM](https://www.npmjs.com/) (incluido con Node.js)
- [Git](https://git-scm.com/)

---

## 🚀 Instalación y Configuración

Sigue estos pasos para clonar y ejecutar el proyecto localmente:

### 1. Clonar el repositorio

```bash
git clone https://github.com/wfhgdev/Grupo3-La-Inmobiliaria.git
cd Grupo3-La-Inmobiliaria
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Iniciar el servidor de desarrollo

```bash
npm run dev
```

Abre tu navegador e ingresa a `http://localhost:5173` (o el puerto indicado en la consola).

### 4. Compilar para producción

```bash
npm run build
```

---

## 👥 Equipo y Creadores

Proyecto desarrollado con dedicación por el **Grupo 3**:

- **Beatriz Iñiguez Cascales** – *Scrum Master y Desarrolladora*
- **William Fernando Hernández Galvis** – *Desarrollador*
- **Oscar Perez** – *Desarrollador*
- **Margarita Bellido Roig** – *Desarrolladora*
- **Willfredy Salcedo Silvestre** – *Product Owner y Desarrolladora*

---

## 📄 Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).