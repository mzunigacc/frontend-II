import { useInventory } from "../context/useInventory";

import PageHeader from "../components/PageHeader";
import ProductCard from "../components/ProductCard";

import {
  getTotalProducts,
  getLowStockCount,
  getCategoryCount,
} from "../utils/inventorySelectors";

function Home() {
  const { products } = useInventory();

  const totalProducts = getTotalProducts(products);
  const lowStock = getLowStockCount(products);
  const categories = getCategoryCount(products);

  return (
    <main className="mx-auto w-[88%] max-w-6xl py-10">
      <PageHeader
        eyebrow="Panel principal"
        title="Inventario del supermercado"
        description="Revisa el stock disponible y controla los productos que requieren reposición."
      />

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
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
