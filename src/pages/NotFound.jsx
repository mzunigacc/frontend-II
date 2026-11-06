import PageHeader from "../components/PageHeader";
import { Link } from "react-router";

function NotFound() {
  return (
    <main className="mx-auto w-[88%] max-w-6xl py-10">
      <section className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
        <PageHeader
        eyebrow="Error 404"
        title="Página no encontrada"
        description="La dirección ingresada no corresponde a una vista disponible."
      />

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
