import PageHeader from "../components/PageHeader";
import stores from "../data/stores";

function Stores() {
  return (
    <main className="mx-auto w-[88%] max-w-6xl py-10">
      <PageHeader
        eyebrow="Sucursales"
        title="Nuestras tiendas"
        description="Conoce nuestras sucursales y sus horarios de atención."
      />

      <section className="grid gap-5 md:grid-cols-3">
        {stores.map((store) => (
          <article
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            key={store.id}
          >
            <span className="text-xs font-bold uppercase tracking-wide text-blue-700">
              Sucursal {store.id}
            </span>

            <h3 className="mt-2 text-xl font-bold text-slate-900">
              {store.name}
            </h3>

            <p className="mt-3 text-slate-600">
              {store.address}
            </p>

            <p className="mt-2 text-sm text-slate-500">
              {store.schedule}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Stores;
