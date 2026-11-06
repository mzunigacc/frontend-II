import { Link, useParams } from "react-router";

import { useInventory } from "../context/InventoryContext";
import PageHeader from "../components/PageHeader";
import StockBadge from "../components/StockBadge";

function ProductDetail() {
  const { id } = useParams();
  const { products, cart, addToCart } = useInventory();

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

  const cartItem = cart.find(
    (item) => item.id === product.id
  );

  const quantityInCart = cartItem?.quantity ?? 0;
  const hasStock = product.stock > 0;

  return (
    <main className="mx-auto w-[88%] max-w-6xl py-10">
      <PageHeader
        eyebrow="Detalle de artículo"
        title={product.name}
        description="Consulta la información del producto y agrégalo al carrito."
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

          <div>
            <dt className="text-sm font-semibold text-slate-500">
              Unidades en carrito
            </dt>
            <dd className="mt-1 text-lg font-semibold text-slate-900">
              {quantityInCart}
            </dd>
          </div>
        </dl>

        <div className="mt-8 border-t border-slate-200 pt-6">
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              disabled={!hasStock}
              onClick={() => addToCart(product.id)}
              className="rounded-lg bg-blue-900 px-5 py-3 font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              {hasStock
                ? "Agregar al carrito"
                : "Sin stock disponible"}
            </button>

            <Link
              to="/carrito"
              className="rounded-lg border border-blue-900 px-5 py-3 font-semibold text-blue-900 transition hover:bg-blue-50"
            >
              Ver carrito
            </Link>

            <Link
              to="/inventario"
              className="rounded-lg border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Volver al inventario
            </Link>
          </div>

          <p
            className="mt-4 text-sm text-slate-600"
            aria-live="polite"
          >
            {quantityInCart > 0
              ? `${quantityInCart} unidad(es) agregada(s) al carrito.`
              : "Este artículo aún no está en el carrito."}
          </p>
        </div>
      </section>
    </main>
  );
}

export default ProductDetail;
