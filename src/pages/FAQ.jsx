import questions from "../data/faq";

function FAQ() {
  return (
    <main className="mx-auto w-[88%] max-w-6xl py-10">
      <section className="mb-8">
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.14em] text-slate-500">
          Ayuda
        </p>

        <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">
          Preguntas frecuentes
        </h2>

        <p className="mt-3 max-w-2xl text-slate-600">
          Información básica sobre el funcionamiento del sistema
          de inventario.
        </p>
      </section>

      <section className="grid gap-4">
        {questions.map((item) => (
          <article
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            key={item.id}
          >
            <h3 className="text-lg font-bold text-slate-900">
              {item.question}
            </h3>

            <p className="mt-2 leading-6 text-slate-600">
              {item.answer}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default FAQ;
