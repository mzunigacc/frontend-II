function FAQ() {
  const questions = [
    {
      id: 1,
      question: "¿Cómo se actualiza el inventario?",
      answer:
        "El stock se actualiza registrando los ingresos y salidas de productos del supermercado.",
    },
    {
      id: 2,
      question: "¿Qué significa stock bajo?",
      answer:
        "Un producto se considera con stock bajo cuando quedan 10 unidades o menos disponibles.",
    },
    {
      id: 3,
      question: "¿Puedo revisar productos por categoría?",
      answer:
        "Sí. Los productos se encuentran identificados por categorías para facilitar su control.",
    },
    {
      id: 4,
      question: "¿El inventario incluye todas las sucursales?",
      answer:
        "Esta versión muestra un inventario general del supermercado y las sucursales disponibles.",
    },
  ];

  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Ayuda</p>

        <h2>Preguntas frecuentes</h2>

        <p>
          Información básica sobre el funcionamiento del sistema
          de inventario.
        </p>
      </section>

      <section className="faq-list">
        {questions.map((item) => (
          <article className="faq-card" key={item.id}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default FAQ;