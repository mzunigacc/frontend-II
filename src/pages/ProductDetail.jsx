import { Link, useParams } from "react-router";

import { useInventory } from "../context/InventoryContext";
import PageHeader from "../components/PageHeader";
import StockBadge from "../components/StockBadge";

function ProductDetail() {
  const { id } = useParams();
  const { products } = useInventory();

  const product = products.find(
    (item) => String(item.id) === id
  );

  if (!product) {
    return (
      <main className="mx-auto w-[88%] max-w-6xl py-10">
        <PageHeader
          eyebrow="Producto no encontrado"
          title="Artículo no disponible"
          description="El artículo solicitado no existe en el inventario."
        />

        <Link
          to="/inventario"
          className="inline-block rounded-lg bg-blue-900 px-5 py-3 font-semibold text-white hover:bg-blue-800"
        >
          Volver al inventario
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto w-[88%] max-w-6xl py-10">
      <PageHeader
        eyebrow="Detalle de artículo"
        title={product.name}
        description="Información del producto seleccionado."
      />

      <section className="max-w-2xl rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <dl className="grid gap-5 sm:grid-cols-2">
          <div>
            <dt className="text-sm font-semibold text-slate-500">
              Nombre
            </dt>
            <dd className="mt-1 text-lg text-slate-900">
              {product.name}
            </dd>
          </div>

          <div>
            <dt className="text-sm font-semibold text-slate-500">
              Marca
            </dt>
            <dd className="mt-1 text-lg text-slate-900">
              {product.brand}
            </dd>
          </div>

          <div>
            <dt className="text-sm font-semibold text-slate-500">
              Categoría
            </dt>
            <dd className="mt-1 text-lg text-slate-900">
              {product.type}
            </dd>
          </div>

          <div>
            <dt className="text-sm font-semibold text-slate-500">
              Precio unitario
            </dt>
            <dd className="mt-1 text-lg font-bold text-blue-900">
              ${product.price.toLocaleString("es-CL")}
            </dd>
          </div>

          <div>
            <dt className="mb-2 text-sm font-semibold text-slate-500">
              Stock disponible
            </dt>
            <dd>
              <StockBadge stock={product.stock} />
            </dd>
          </div>
        </dl>

        <div className="mt-8 border-t border-slate-200 pt-6">
          <Link
            to="/inventario"
            className="inline-block rounded-lg border border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50"
          >
            Volver al inventario
          </Link>
        </div>
      </section>
    </main>
  );
}

export default ProductDetail;
