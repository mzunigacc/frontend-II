function Header() {
  return (
    <header className="border-b border-slate-200 bg-white px-6 py-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <p className="mb-1 text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
          Gestión de inventario
        </p>

        <h1 className="text-2xl font-bold text-blue-900 md:text-3xl">
          Supermercado Central
        </h1>
      </div>
    </header>
  );
}

export default Header;
