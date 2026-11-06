import StockBadge from "./StockBadge";

function ProductCard({ product, children }) {
  return (
    <article className="flex flex-col justify-between gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:flex-row md:items-center">
      <div>
        <span className="text-xs font-bold uppercase tracking-wide text-blue-700">
          {product.type}
        </span>

        <h3 className="mt-1 text-xl font-bold text-slate-900">
          {product.name}
        </h3>

        <p className="text-slate-500">
          {product.brand}
        </p>

        <p className="text-slate-500">
          ${product.price.toLocaleString("es-CL")}
        </p>
      </div>

      <div className="flex flex-col items-start gap-3 md:items-end">
        <StockBadge stock={product.stock} />
        {children}
      </div>
    </article>
  );
}

export default ProductCard;
