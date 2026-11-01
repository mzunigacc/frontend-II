import { Link } from "react-router";

function NotFound() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">404</p>
        <h2>Página no encontrada</h2>
        <p>
          La dirección ingresada no corresponde a una vista disponible.
        </p>

        <Link to="/">
          Volver al inicio
        </Link>
      </section>
    </main>
  );
}

export default NotFound;
