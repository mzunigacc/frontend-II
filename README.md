# Desarrollo Frontend II - PFY2202

Repositorio académico utilizado para el desarrollo de las actividades de la asignatura **Desarrollo Frontend II (PFY2202)**.

## Semana 1 - React Router

Durante la Semana 1 se desarrolló una aplicación web en React orientada a la gestión de inventario de un supermercado.

La actividad tiene como objetivo implementar navegación entre distintas vistas dentro de una aplicación SPA, utilizando React Router para evitar recargas completas de la página.

### Funcionalidades implementadas

- Página principal de gestión de inventario.
- Visualización de productos disponibles.
- Visualización de precio, categoría y stock por producto.
- Identificación de productos con stock bajo.
- Resumen de cantidad de productos, categorías y productos con bajo stock.
- Página de sucursales.
- Página de preguntas frecuentes.
- Menú de navegación inferior.
- Navegación entre vistas mediante React Router.
- Navegación sin recarga completa de la página.
- Diseño responsivo para distintas resoluciones.

## Rutas

La aplicación contiene las siguientes vistas:

- `/` - Inventario principal.
- `/tiendas` - Nuestras tiendas.
- `/preguntas-frecuentes` - Preguntas frecuentes.

## Tecnologías utilizadas

- React
- Vite
- React Router
- JavaScript
- JSX
- CSS
- Git
- GitHub

## Estructura principal

```text
src/
├── components/
│   ├── BottomNav.jsx
│   └── Header.jsx
├── data/
│   └── products.js
├── pages/
│   ├── FAQ.jsx
│   ├── Home.jsx
│   └── Stores.jsx
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

## Ejecución local

Instalar las dependencias:

```bash
npm install
```

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en la dirección indicada por Vite en la terminal.

## Autor

Matías Zúñiga C.

Desarrollo Frontend II - PFY2202