import { createSlice } from "@reduxjs/toolkit";
import type { CartType } from "../types/CartType";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface CartState {
  carts: CartType[];
}
const initialState: CartState = {
  carts: [],
};
type UpdatePayload = {
  productId: number;
  type: "increment" | "decrement";
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.carts.push(action.payload);
    },
    removeItem: (state, action) => {
      state.carts = state.carts.filter((cart) => cart.id !== action.payload);
    },
    updateItem: (state, action: PayloadAction<UpdatePayload>) => {
      const { productId, type } = action.payload;

      const item = state.carts.find((cart) => cart.id === productId);

      if (!item) return;

      if (type === "increment") {
        item.qty += 1;
      } else {
        if (item.qty === 1) {
          state.carts = state.carts.filter((cart) => cart.id !== productId);
        } else {
          item.qty -= 1;
        }
      }
    },
    clearCart: () => {
      return initialState;
    },
  },
});

export const { addItem, removeItem, updateItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
