import { useInventory } from "../context/InventoryContext";

import PageHeader from "../components/PageHeader";
import StockBadge from "../components/StockBadge";

function Inventory() {
  const { products } = useInventory();

  return (
    <main className="mx-auto w-[88%] max-w-6xl py-10">
      <PageHeader
        eyebrow="Inventario global"
        title="Listado de artículos"
        description="Consulta todos los productos disponibles actualmente en el inventario."
      />

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

                <td className="px-5 py-4">
                  <StockBadge stock={product.stock} />
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
