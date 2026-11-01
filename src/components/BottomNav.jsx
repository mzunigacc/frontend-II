import { NavLink } from "react-router";

function BottomNav() {
  const navClass = ({ isActive }) =>
    [
      "rounded-lg px-3 py-2 text-sm font-semibold transition-colors md:px-5 md:text-base",
      isActive
        ? "bg-slate-800 text-white"
        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
    ].join(" ");

  return (
    <nav className="fixed bottom-0 left-0 z-50 flex w-full justify-center gap-1 border-t border-slate-200 bg-white px-3 py-3 shadow-sm md:gap-3">
      <NavLink to="/" className={navClass}>
        Inicio
      </NavLink>

      <NavLink to="/inventario" className={navClass}>
        Inventario
      </NavLink>

      <NavLink to="/agregar" className={navClass}>
        Agregar
      </NavLink>

      <NavLink to="/tiendas" className={navClass}>
        Tiendas
      </NavLink>

      <NavLink to="/preguntas-frecuentes" className={navClass}>
        Preguntas
      </NavLink>
    </nav>
  );
}

export default BottomNav;
