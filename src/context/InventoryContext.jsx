import {
  createContext,
  useContext,
  useReducer,
} from "react";

import initialProducts from "../data/products";

const InventoryContext = createContext();

const ACTIONS = {
  ADD_PRODUCT: "add-product",
};

function inventoryReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_PRODUCT:
      return [
        ...state,
        action.payload,
      ];

    default:
      return state;
  }
}

export function InventoryProvider({ children }) {
  const [products, dispatch] = useReducer(
    inventoryReducer,
    initialProducts
  );

  const addProduct = (product) => {
    dispatch({
      type: ACTIONS.ADD_PRODUCT,
      payload: {
        ...product,
        id: Date.now(),
      },
    });
  };

  return (
    <InventoryContext.Provider
      value={{
        products,
        addProduct,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
}

export function useInventory() {
  return useContext(InventoryContext);
}