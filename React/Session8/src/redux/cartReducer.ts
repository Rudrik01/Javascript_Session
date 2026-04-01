import { ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM, CLEAR_CART } from "./actionTypes";
import type { CartType } from "../types/CartType";

export interface CartState {
  carts: CartType[];
}

const initialState: CartState = { carts: [] };

type CartAction =
  | { type: typeof ADD_ITEM; payload: CartType }
  | { type: typeof REMOVE_ITEM; payload: number }
  | {
      type: typeof UPDATE_ITEM;
      payload: { productId: number; type: "increment" | "decrement" };
    }
  | { type: typeof CLEAR_CART };

export default function cartReducer(state = initialState, action: CartAction) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        carts: [...state.carts, action.payload],
      };

    case REMOVE_ITEM:
      return {
        ...state,
        carts: state.carts.filter((cart) => cart.id !== action.payload),
      };

    case UPDATE_ITEM:
      return {
        ...state,
        carts: state.carts
          .map((cart) => {
            if (cart.id === action.payload.productId) {
              if (action.payload.type === "increment") {
                console.log("Component rerender");
                return { ...cart, qty: cart.qty + 1 };
              }
              if (action.payload.type === "decrement") {
                if (cart.qty === 1) return null;
                return { ...cart, qty: cart.qty - 1 };
              }
            }
            return cart;
          })
          .filter((cart) => cart !== null) as CartType[],
      };

    case CLEAR_CART:
      return { ...state, carts: [] };

    default:
      return state;
  }
}
