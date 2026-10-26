function Stores() {
  const stores = [
    {
      id: 1,
      name: "Sucursal Centro",
      address: "Av. Principal 123, Santiago",
      schedule: "Lunes a domingo · 08:00 a 21:00",
    },
    {
      id: 2,
      name: "Sucursal Oriente",
      address: "Av. Los Jardines 850, Santiago",
      schedule: "Lunes a domingo · 08:30 a 21:30",
    },
    {
      id: 3,
      name: "Sucursal Sur",
      address: "Camino Central 450, Santiago",
      schedule: "Lunes a sábado · 09:00 a 21:00",
    },
  ];

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