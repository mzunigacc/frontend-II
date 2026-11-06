function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="mb-8">
      <p className="mb-2 text-sm font-bold uppercase tracking-[0.14em] text-slate-500">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">
        {title}
      </h2>

      <p className="mt-3 max-w-2xl text-slate-600">
        {description}
      </p>
    </section>
  );
}

export default PageHeader;
