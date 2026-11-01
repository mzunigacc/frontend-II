import { useInventory } from "../context/InventoryContext";

function Home() {
  const { products } = useInventory();

  const totalProducts = products.length;

  const lowStock = products.filter(
    (product) => product.stock <= 10
  ).length;

  const categories = new Set(
    products.map((product) => product.type)
  ).size;

  return (
    <main className="mx-auto w-[88%] max-w-6xl py-10">
      <section className="mb-8">
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.14em] text-slate-500">
          Panel principal
        </p>

        <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">
          Inventario del supermercado
        </h2>

        <p className="mt-3 max-w-2xl text-slate-600">
          Revisa el stock disponible y controla los productos
          que requieren reposición.
        </p>
      </section>

      <section className="mb-10 grid gap-4 md:grid-cols-3">
        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <span className="text-sm font-medium text-slate-500">
            Productos
          </span>

          <strong className="mt-2 block text-3xl font-bold text-blue-900">
            {totalProducts}
          </strong>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <span className="text-sm font-medium text-slate-500">
            Stock bajo
          </span>

          <strong className="mt-2 block text-3xl font-bold text-blue-900">
            {lowStock}
          </strong>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <span className="text-sm font-medium text-slate-500">
            Categorías
          </span>

          <strong className="mt-2 block text-3xl font-bold text-blue-900">
            {categories}
          </strong>
        </article>
      </section>

      <section>
        <div className="mb-5">
          <p className="mb-1 text-sm font-bold uppercase tracking-[0.14em] text-slate-500">
            Stock actual
          </p>

          <h3 className="text-2xl font-bold text-slate-900">
            Productos
          </h3>
        </div>

        <div className="grid gap-4">
          {products.map((product) => (
            <article
              className="flex flex-col justify-between gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:flex-row md:items-center"
              key={product.id}
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wide text-blue-700">
                  {product.type}
                </span>

                <h3 className="mt-1 text-xl font-bold text-slate-900">
                  {product.name}
                </h3>

                <p className="text-slate-500">
                  {product.brand}
                </p>

                <p className="text-slate-500">
                  ${product.price.toLocaleString("es-CL")}
                </p>
              </div>

              <div
                className={
                  product.stock <= 10
                    ? "w-fit rounded-full bg-amber-100 px-4 py-2 text-sm font-bold text-amber-700"
                    : "w-fit rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700"
                }
              >
                {product.stock} unidades
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
