import { NavLink } from "react-router";

function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Inicio
      </NavLink>

      <NavLink
        to="/tiendas"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Tiendas
      </NavLink>

      <NavLink
        to="/preguntas-frecuentes"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Preguntas
      </NavLink>
    </nav>
  );
}

export default BottomNav;