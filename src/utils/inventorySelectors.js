export function getTotalProducts(products) {
  return products.length;
}

export function getLowStockCount(products) {
  return products.filter(
    (product) => product.stock <= 10
  ).length;
}

export function getCategoryCount(products) {
  return new Set(
    products.map((product) => product.type)
  ).size;
}

export function getCategories(products) {
  return [...new Set(
    products.map((product) => product.type)
  )].sort((a, b) => a.localeCompare(b, "es"));
}

export function filterProductsByCategory(products, category) {
  if (!category || category === "Todas") {
    return products;
  }

  return products.filter(
    (product) => product.type === category
  );
}
