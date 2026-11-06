import PageHeader from "../components/PageHeader";
import questions from "../data/faq";

function FAQ() {
  return (
    <main className="mx-auto w-[88%] max-w-6xl py-10">
      <PageHeader
        eyebrow="Ayuda"
        title="Preguntas frecuentes"
        description="Información básica sobre el funcionamiento del sistema de inventario."
      />

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
