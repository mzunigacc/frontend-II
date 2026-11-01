import { useInventory } from "../context/InventoryContext";

function Inventory() {
  const { products } = useInventory();

  return (
    <main className="mx-auto w-[88%] max-w-6xl py-10">
      <section className="mb-8">
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.14em] text-slate-500">
          Inventario global
        </p>

        <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">
          Listado de artículos
        </h2>

        <p className="mt-3 max-w-2xl text-slate-600">
          Consulta todos los productos disponibles actualmente
          en el inventario.
        </p>
      </section>

      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full border-collapse">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-5 py-4 text-left font-semibold text-slate-700">
                Nombre
              </th>
              <th className="px-5 py-4 text-left font-semibold text-slate-700">
                Marca
              </th>
              <th className="px-5 py-4 text-left font-semibold text-slate-700">
                Tipo
              </th>
              <th className="px-5 py-4 text-left font-semibold text-slate-700">
                Stock
              </th>
              <th className="px-5 py-4 text-left font-semibold text-slate-700">
                Precio
              </th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-t border-slate-200 hover:bg-slate-50"
              >
                <td className="px-5 py-4 font-medium text-slate-900">
                  {product.name}
                </td>
                <td className="px-5 py-4 text-slate-600">
                  {product.brand}
                </td>
                <td className="px-5 py-4 text-slate-600">
                  {product.type}
                </td>
                <td className="px-5 py-4 text-slate-600">
                  {product.stock}
                </td>
                <td className="px-5 py-4 text-slate-600">
                  ${product.price.toLocaleString("es-CL")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Inventory;
