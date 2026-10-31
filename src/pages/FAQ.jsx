import questions from "../data/faq";

function FAQ() {
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