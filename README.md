# Desarrollo Frontend II - PFY2202

Repositorio académico utilizado para el desarrollo progresivo de las actividades de la asignatura **Desarrollo Frontend II (PFY2202)**.

El proyecto corresponde a una aplicación web para la gestión de inventario de un supermercado, desarrollada con React y ampliada progresivamente durante las distintas semanas de la asignatura.

## Semana 1 - Navegación con React Router

Durante la Semana 1 se implementó la estructura inicial del sitio y la navegación entre distintas vistas dentro de una aplicación SPA.

### Funcionalidades implementadas

- Página principal de gestión de inventario.
- Visualización de productos disponibles.
- Visualización de precio, categoría y stock.
- Identificación de productos con stock bajo.
- Página de sucursales.
- Página de preguntas frecuentes.
- Menú de navegación inferior.
- Navegación entre vistas mediante React Router.
- Navegación sin recarga completa de la página.
- Configuración de rutas para funcionamiento en GitHub Pages.
- Diseño responsivo.

## Semana 2 - Estado global y framework CSS

Durante la Semana 2 se continuó el desarrollo del sistema de inventario incorporando gestión de estado global, nuevas vistas funcionales y Tailwind CSS.

### Funcionalidades implementadas

- Estado global de productos mediante Context API y `useReducer`.
- Inventario compartido entre distintas vistas de la aplicación.
- Incorporación de nombre, marca, tipo, stock y precio en los artículos.
- Formulario controlado para agregar nuevos productos.
- Actualización dinámica del inventario sin recargar la aplicación.
- Página con tabla completa de artículos disponibles.
- Actualización automática del resumen de productos en la página principal.
- Validación básica del formulario.
- Página 404 para rutas inexistentes.
- Separación de los datos de tiendas y preguntas frecuentes desde los componentes visuales.
- Implementación de Tailwind CSS como framework de estilos.
- Diseño responsivo mediante utilidades de Tailwind CSS.
- Eliminación de estilos globales duplicados y migración de estilos desde `App.css`.

## Flujo de estado global

El inventario se administra desde un contexto global que permite compartir la información entre componentes y páginas.

```text
InventoryProvider
       │
       ├── products
       │
       └── addProduct()
              │
              ▼
        InventoryContext
              │
        ┌─────┼───────────┐
        ▼     ▼           ▼
      Home  Agregar   Inventario
```

Al agregar un artículo desde el formulario, el estado global se actualiza y el nuevo producto queda disponible inmediatamente en las demás vistas sin necesidad de recargar la página.

## Rutas

La aplicación contiene las siguientes vistas:

- `/` - Panel principal del inventario.
- `/inventario` - Tabla completa de artículos.
- `/agregar` - Formulario para ingresar nuevos artículos.
- `/tiendas` - Nuestras tiendas.
- `/preguntas-frecuentes` - Preguntas frecuentes.
- `*` - Página para rutas no encontradas.

## Tecnologías utilizadas

- React
- Vite
- React Router
- Context API
- `useState`
- `useReducer`
- Tailwind CSS
- JavaScript
- JSX
- Git
- GitHub
- GitHub Actions
- GitHub Pages

## Estructura principal

```text
src/
├── components/
│   ├── BottomNav.jsx
│   └── Header.jsx
├── context/
│   └── InventoryContext.jsx
├── data/
│   ├── faq.js
│   ├── products.js
│   └── stores.js
├── pages/
│   ├── AddProduct.jsx
│   ├── FAQ.jsx
│   ├── Home.jsx
│   ├── Inventory.jsx
│   ├── NotFound.jsx
│   └── Stores.jsx
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

Generar el build de producción:

```bash
npm run build
```

## Sitio publicado

GitHub Pages:

https://mzunigacc.github.io/frontend-II/

## Autor

Matías Zúñiga C.

Desarrollo Frontend II - PFY2202