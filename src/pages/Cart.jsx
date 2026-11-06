import { Link } from "react-router";

import { useInventory } from "../context/InventoryContext";
import PageHeader from "../components/PageHeader";

function Cart() {
  const {
    products,
    cart,
    addToCart,
    decreaseCart,
  } = useInventory();

  const totalUnits = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <main className="mx-auto w-[88%] max-w-6xl py-10">
      <PageHeader
        eyebrow="Carrito de compras"
        title="Mi carrito"
        description="Administra las cantidades de tus productos y consulta el total de tu compra."
      />

      {cart.length === 0 ? (
        <section className="rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <h3 className="text-xl font-bold text-slate-900">
            Tu carrito está vacío
          </h3>

          <p className="mt-3 text-slate-600">
            Selecciona artículos del inventario para comenzar.
          </p>

          <Link
            to="/inventario"
            className="mt-6 inline-block rounded-lg bg-blue-900 px-5 py-3 font-semibold text-white hover:bg-blue-800"
          >
            Explorar inventario
          </Link>
        </section>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
          <section className="grid content-start gap-4">
            {cart.map((item) => {
              const product = products.find(
                (product) => product.id === item.id
              );

              const availableStock = product?.stock ?? 0;

              return (
                <article
                  key={item.id}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex flex-col justify-between gap-5 sm:flex-row">
                    <div>
                      <Link
                        to={`/inventario/${item.id}`}
                        className="text-lg font-bold text-blue-900 hover:underline"
                      >
                        {item.name}
                      </Link>

                      <p className="mt-1 text-sm text-slate-500">
                        {item.brand}
                      </p>

                      <p className="mt-2 font-medium text-slate-700">
                        ${item.price.toLocaleString("es-CL")} c/u
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        Disponibles: {availableStock}
                      </p>
                    </div>

                    <div className="flex flex-col gap-3 sm:items-end">
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          aria-label={`Disminuir cantidad de ${item.name}`}
                          onClick={() => decreaseCart(item.id)}
                          className="h-10 w-10 rounded-lg border border-slate-300 bg-white font-bold text-slate-800 hover:bg-slate-100"
                        >
                          −
                        </button>

                        <span
                          className="min-w-8 text-center font-bold text-slate-900"
                          aria-live="polite"
                        >
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          aria-label={`Aumentar cantidad de ${item.name}`}
                          disabled={availableStock <= 0}
                          onClick={() => addToCart(item.id)}
                          className="h-10 w-10 rounded-lg bg-blue-900 font-bold text-white hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-300"
                        >
                          +
                        </button>
                      </div>

                      <strong className="text-lg text-blue-900">
                        ${(item.quantity * item.price).toLocaleString("es-CL")}
                      </strong>
                    </div>
                  </div>
                </article>
              );
            })}
          </section>

          <aside className="h-fit rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-blue-900">
              Resumen de compra
            </h3>

            <div className="mt-5 flex justify-between text-slate-600">
              <span>Unidades</span>
              <span>{totalUnits}</span>
            </div>

            <div className="mt-3 flex justify-between text-slate-600">
              <span>Productos distintos</span>
              <span>{cart.length}</span>
            </div>

            <div className="mt-5 flex justify-between border-t border-slate-200 pt-5">
              <strong className="text-slate-900">
                Total
              </strong>

              <strong
                className="text-xl text-blue-900"
                aria-live="polite"
              >
                ${totalPrice.toLocaleString("es-CL")}
              </strong>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              Las cantidades del carrito se descuentan del
              inventario disponible.
            </p>

            <Link
              to="/inventario"
              className="mt-6 block rounded-lg bg-blue-900 px-5 py-3 text-center font-semibold text-white hover:bg-blue-800"
            >
              Seguir agregando
            </Link>
          </aside>
        </div>
      )}
    </main>
  );
}

export default Cart;
