import { Link } from "react-router";

function NotFound() {
  return (
    <main className="mx-auto w-[88%] max-w-6xl py-10">
      <section className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.14em] text-slate-500">
          Error 404
        </p>

        <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">
          Página no encontrada
        </h2>

        <p className="mt-3 text-slate-600">
          La dirección ingresada no corresponde a una vista disponible.
        </p>

        <Link
          className="mt-6 inline-block rounded-lg bg-blue-900 px-5 py-3 font-semibold text-white transition hover:bg-blue-800"
          to="/"
        >
          Volver al inicio
        </Link>
      </section>
    </main>
  );
}

export default NotFound;
