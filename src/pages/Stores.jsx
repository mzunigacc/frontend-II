import stores from "../data/stores";

function Stores() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Sucursales</p>

        <h2>Nuestras tiendas</h2>

        <p>
          Conoce nuestras sucursales y sus horarios de atención.
        </p>
      </section>

      <section className="store-grid">
        {stores.map((store) => (
          <article className="store-card" key={store.id}>
            <span className="store-number">
              Sucursal {store.id}
            </span>

            <h3>{store.name}</h3>

            <p>{store.address}</p>

            <p className="store-schedule">
              {store.schedule}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Stores;