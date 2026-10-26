import products from "../data/products";

function Home() {
  const totalProducts = products.length;

  const lowStock = products.filter(
    (product) => product.stock <= 10
  ).length;

  const categories = new Set(
    products.map((product) => product.category)
  ).size;

  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Panel principal</p>

        <h2>Inventario del supermercado</h2>

        <p>
          Revisa el stock disponible y controla los productos
          que requieren reposición.
        </p>
      </section>

      <section className="stats">
        <article className="stat-card">
          <span>Productos</span>
          <strong>{totalProducts}</strong>
        </article>

        <article className="stat-card">
          <span>Stock bajo</span>
          <strong>{lowStock}</strong>
        </article>

        <article className="stat-card">
          <span>Categorías</span>
          <strong>{categories}</strong>
        </article>
      </section>

      <section>
        <div className="section-title">
          <div>
            <p className="eyebrow">Stock actual</p>
            <h2>Productos</h2>
          </div>
        </div>

        <div className="product-list">
          {products.map((product) => (
            <article className="product-card" key={product.id}>
              <div>
                <span className="product-category">
                  {product.category}
                </span>

                <h3>{product.name}</h3>

                <p>
                  ${product.price.toLocaleString("es-CL")}
                </p>
              </div>

              <div
                className={
                  product.stock <= 10
                    ? "stock stock-low"
                    : "stock"
                }
              >
                {product.stock} unidades
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;