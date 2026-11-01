import stores from "../data/stores";

function Stores() {
  return (
    <main className="mx-auto w-[88%] max-w-6xl py-10">
      <section className="mb-8">
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.14em] text-slate-500">
          Sucursales
        </p>

        <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">
          Nuestras tiendas
        </h2>

        <p className="mt-3 max-w-2xl text-slate-600">
          Conoce nuestras sucursales y sus horarios de atención.
        </p>
      </section>

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
