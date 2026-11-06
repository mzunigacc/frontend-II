const TEXT_FIELDS = {
  name: {
    label: "El nombre",
    maxLength: 80,
  },
  brand: {
    label: "La marca",
    maxLength: 80,
  },
  type: {
    label: "El tipo de producto",
    maxLength: 50,
  },
};

// Letras Unicode, números y puntuación comercial habitual.
const VALID_TEXT = /^[\p{L}\p{N}\s.,%/()&+'-]+$/u;

function validateText(value, { label, maxLength }) {
  const text = String(value ?? "").trim();

  if (!text) {
    return `${label} es obligatorio.`;
  }

  if (text.length < 2 || text.length > maxLength) {
    return `${label} debe tener entre 2 y ${maxLength} caracteres.`;
  }

  if (!VALID_TEXT.test(text)) {
    return `${label} contiene caracteres no permitidos.`;
  }

  return null;
}

function validateNumber(value, label, allowZero) {
  const raw = String(value ?? "").trim();

  if (raw === "") {
    return `${label} es obligatorio.`;
  }

  // Solo aceptamos enteros positivos o cero.
  if (!/^\d+$/.test(raw)) {
    return `${label} debe ser un número entero válido.`;
  }

  const number = Number(raw);

  if (!Number.isSafeInteger(number)) {
    return `${label} está fuera del rango permitido.`;
  }

  if (allowZero ? number < 0 : number <= 0) {
    return allowZero
      ? `${label} no puede ser negativo.`
      : `${label} debe ser mayor que cero.`;
  }

  return null;
}

export function validateProduct(product) {
  const errors = {};

  for (const [field, config] of Object.entries(TEXT_FIELDS)) {
    const error = validateText(product[field], config);

    if (error) {
      errors[field] = error;
    }
  }

  const stockError = validateNumber(
    product.stock,
    "El stock",
    true
  );

  if (stockError) {
    errors.stock = stockError;
  }

  const priceError = validateNumber(
    product.price,
    "El precio",
    false
  );

  if (priceError) {
    errors.price = priceError;
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
