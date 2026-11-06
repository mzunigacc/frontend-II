import { useState } from "react";
import { Link } from "react-router";

import { useInventory } from "../context/useInventory";

import PageHeader from "../components/PageHeader";
import StockBadge from "../components/StockBadge";

import {
  getCategories,
  filterProductsByCategory,
} from "../utils/inventorySelectors";

function Inventory() {
  const { products } = useInventory();

  // Estado local: solo controla la categoría seleccionada.
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  // Categorías dinámicas obtenidas del inventario global.
  const categories = getCategories(products);

  // Lista derivada: no modifica los productos originales.
  const filteredProducts = filterProductsByCategory(
    products,
    selectedCategory
  );

  return (
    <main className="mx-auto w-[88%] max-w-6xl py-10">
      <PageHeader
        eyebrow="Inventario global"
        title="Listado de artículos"
        description="Consulta todos los productos disponibles actualmente en el inventario."
      />

      <section className="mb-6 flex flex-col justify-between gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:flex-row md:items-end">
        <div className="w-full md:max-w-xs">
          <label
            htmlFor="category-filter"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Filtrar por categoría
          </label>

          <select
            id="category-filter"
            value={selectedCategory}
            onChange={(event) =>
              setSelectedCategory(event.target.value)
            }
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
          >
            <option value="Todas">
              Todas las categorías
            </option>

            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <p className="text-sm text-slate-600" aria-live="polite">
          Mostrando{" "}
          <strong className="text-blue-900">
            {filteredProducts.length}
          </strong>{" "}
          de <strong>{products.length}</strong> artículos
        </p>
      </section>

      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full min-w-[650px] border-collapse">
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
            {filteredProducts.map((product) => (
              <tr
                key={product.id}
                className="border-t border-slate-200 hover:bg-slate-50"
              >
                <td className="px-5 py-4 font-medium text-slate-900">
                  <Link
                    to={`/inventario/${product.id}`}
                    className="font-semibold text-blue-900 hover:underline"
                  >
                    {product.name}
                  </Link>
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

        {filteredProducts.length === 0 && (
          <p className="px-5 py-8 text-center text-slate-500">
            No hay artículos disponibles en esta categoría.
          </p>
        )}
      </div>
    </main>
  );
}

export default Inventory;
