import { useReducer } from "react";
import { InventoryContext } from "./InventoryContext";

import initialProducts from "../data/products";



const initialState = {
  products: initialProducts,
  cart: [],
};

function inventoryReducer(state, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    case "ADD_TO_CART": {
      const product = state.products.find(
        (item) => item.id === action.payload
      );

      if (!product || product.stock <= 0) {
        return state;
      }

      const existingItem = state.cart.find(
        (item) => item.id === product.id
      );

      const cart = existingItem
        ? state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [
            ...state.cart,
            {
              id: product.id,
              name: product.name,
              brand: product.brand,
              price: product.price,
              quantity: 1,
            },
          ];

      return {
        ...state,
        products: state.products.map((item) =>
          item.id === product.id
            ? { ...item, stock: item.stock - 1 }
            : item
        ),
        cart,
      };
    }

    case "DECREASE_CART": {
      const cartItem = state.cart.find(
        (item) => item.id === action.payload
      );

      if (!cartItem) {
        return state;
      }

      return {
        ...state,
        products: state.products.map((item) =>
          item.id === cartItem.id
            ? { ...item, stock: item.stock + 1 }
            : item
        ),
        cart: state.cart
          .map((item) =>
            item.id === cartItem.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0),
      };
    }

    default:
      return state;
  }
}

export function InventoryProvider({ children }) {
  const [state, dispatch] = useReducer(
    inventoryReducer,
    initialState
  );

  const addProduct = (product) => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: {
        ...product,
        id: crypto.randomUUID(),
      },
    });
  };

  const addToCart = (id) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: id,
    });
  };

  const decreaseCart = (id) => {
    dispatch({
      type: "DECREASE_CART",
      payload: id,
    });
  };

  return (
    <InventoryContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        addProduct,
        addToCart,
        decreaseCart,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
}
