function StockBadge({ stock }) {
  const isLowStock = stock <= 10;

  const colorClass = isLowStock
    ? "bg-amber-100 text-amber-700"
    : "bg-green-100 text-green-700";

  return (
    <span
      className={`inline-block w-fit rounded-full px-4 py-2 text-sm font-bold ${colorClass}`}
    >
      {stock} unidades
    </span>
  );
}

export default StockBadge;
