import { useState } from "react";
import { useInventory } from "../context/InventoryContext";

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

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.brand.trim() ||
      !formData.type.trim() ||
      formData.stock === "" ||
      formData.price === ""
    ) {
      setMessage("Completa todos los campos antes de guardar.");
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
  };

  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Gestión de inventario</p>
        <h2>Agregar artículo</h2>
        <p>
          Registra un nuevo producto para incorporarlo al inventario
          global del supermercado.
        </p>
      </section>

      <form className="product-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ej: Café"
          />
        </div>

        <div className="form-group">
          <label htmlFor="brand">Marca</label>
          <input
            id="brand"
            name="brand"
            type="text"
            value={formData.brand}
            onChange={handleChange}
            placeholder="Ej: Aroma"
          />
        </div>

        <div className="form-group">
          <label htmlFor="type">Tipo de producto</label>
          <input
            id="type"
            name="type"
            type="text"
            value={formData.type}
            onChange={handleChange}
            placeholder="Ej: Abarrotes"
          />
        </div>

        <div className="form-group">
          <label htmlFor="stock">Stock</label>
          <input
            id="stock"
            name="stock"
            type="number"
            min="0"
            value={formData.stock}
            onChange={handleChange}
            placeholder="Ej: 20"
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Precio</label>
          <input
            id="price"
            name="price"
            type="number"
            min="0"
            value={formData.price}
            onChange={handleChange}
            placeholder="Ej: 3990"
          />
        </div>

        <button className="primary-button" type="submit">
          Agregar artículo
        </button>

        {message && (
          <p className="form-message">
            {message}
          </p>
        )}
      </form>
    </main>
  );
}

export default AddProduct;