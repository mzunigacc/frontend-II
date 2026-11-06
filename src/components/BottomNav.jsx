import { NavLink } from "react-router";
import { useInventory } from "../context/useInventory";

function BottomNav() {
  const { cart } = useInventory();

  const totalUnits = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const navClass = ({ isActive }) =>
    [
      "shrink-0 rounded-lg px-3 py-2 text-sm font-semibold transition-colors md:px-5 md:text-base",
      isActive
        ? "bg-slate-800 text-white"
        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
    ].join(" ");

  return (
    <nav
      aria-label="Navegación principal"
      className="fixed bottom-0 left-0 z-50 w-full border-t border-slate-200 bg-white shadow-sm"
    >
      <div className="flex items-center justify-start gap-1 overflow-x-auto px-3 py-3 sm:justify-center md:gap-3">
        <NavLink to="/" end className={navClass}>
          Inicio
        </NavLink>

        <NavLink to="/inventario" className={navClass}>
          Inventario
        </NavLink>

        <NavLink to="/agregar" className={navClass}>
          Agregar
        </NavLink>

        <NavLink to="/carrito" className={navClass}>
          Carrito ({totalUnits})
        </NavLink>

        <NavLink to="/tiendas" className={navClass}>
          Tiendas
        </NavLink>

        <NavLink
          to="/preguntas-frecuentes"
          className={navClass}
        >
          Preguntas
        </NavLink>
      </div>
    </nav>
  );
}

export default BottomNav;
