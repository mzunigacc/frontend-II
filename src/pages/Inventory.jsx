import { useInventory } from "../context/InventoryContext";

function Inventory() {
  const { products } = useInventory();

  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Inventario global</p>
        <h2>Listado de artículos</h2>
        <p>
          Consulta todos los productos disponibles actualmente
          en el inventario.
        </p>
      </section>

      <div className="table-container">
        <table className="inventory-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Marca</th>
              <th>Tipo</th>
              <th>Stock</th>
              <th>Precio</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.brand}</td>
                <td>{product.type}</td>
                <td>{product.stock}</td>
                <td>
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