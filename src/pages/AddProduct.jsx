import PageHeader from "../components/PageHeader";
import { useState } from "react";
import { validateProduct } from "../utils/validateProduct";
import { useInventory } from "../context/useInventory";

function AddProduct() {
  const { addProduct } = useInventory();

  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    type: "",
    stock: "",
    price: "",
  });

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    if (message) {
      setMessage("");
      setIsError(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validation = validateProduct(formData);

    if (!validation.isValid) {
      setMessage(Object.values(validation.errors).join(" "));
      setIsError(true);
      return;
    }

    addProduct({
      name: formData.name.trim(),
      brand: formData.brand.trim(),
      type: formData.type.trim(),
      stock: Number(formData.stock),
      price: Number(formData.price),
    });

    setFormData({
      name: "",
      brand: "",
      type: "",
      stock: "",
      price: "",
    });

    setMessage("Artículo agregado correctamente.");
    setIsError(false);
  };

  const inputClass =
    "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100";

  return (
    <main className="mx-auto w-[88%] max-w-6xl py-10">
      <PageHeader
        eyebrow="Gestión de inventario"
        title="Agregar artículo"
        description="Registra un nuevo producto para incorporarlo al inventario global del supermercado."
      />

      <form
        className="grid max-w-2xl gap-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
        onSubmit={handleSubmit}
      >
        <div className="grid gap-2">
          <label
            className="font-semibold text-slate-700"
            htmlFor="name"
          >
            Nombre
          </label>

          <input
            className={inputClass}
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ej: Café"
          />
        </div>

        <div className="grid gap-2">
          <label
            className="font-semibold text-slate-700"
            htmlFor="brand"
          >
            Marca
          </label>

          <input
            className={inputClass}
            id="brand"
            name="brand"
            type="text"
            value={formData.brand}
            onChange={handleChange}
            placeholder="Ej: Aroma"
          />
        </div>

        <div className="grid gap-2">
          <label
            className="font-semibold text-slate-700"
            htmlFor="type"
          >
            Tipo de producto
          </label>

          <input
            className={inputClass}
            id="type"
            name="type"
            type="text"
            value={formData.type}
            onChange={handleChange}
            placeholder="Ej: Abarrotes"
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="grid gap-2">
            <label
              className="font-semibold text-slate-700"
              htmlFor="stock"
            >
              Stock
            </label>

            <input
              className={inputClass}
              id="stock"
              name="stock"
              type="number"
              min="0"
              value={formData.stock}
              onChange={handleChange}
              placeholder="Ej: 20"
            />
          </div>

          <div className="grid gap-2">
            <label
              className="font-semibold text-slate-700"
              htmlFor="price"
            >
              Precio
            </label>

            <input
              className={inputClass}
              id="price"
              name="price"
              type="number"
              min="0"
              value={formData.price}
              onChange={handleChange}
              placeholder="Ej: 3990"
            />
          </div>
        </div>

        <button
          className="mt-1 rounded-lg bg-blue-900 px-5 py-3 font-semibold text-white transition hover:bg-blue-800"
          type="submit"
        >
          Agregar artículo
        </button>

        {message && (
          <p
            className={
              isError
                ? "font-semibold text-red-600"
                : "font-semibold text-green-700"
            }
          >
            {message}
          </p>
        )}
      </form>
    </main>
  );
}

export default AddProduct;
