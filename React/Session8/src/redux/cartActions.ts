import { ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM, CLEAR_CART } from './actionTypes';
import type { CartType } from '../types/CartType';

export const addToCart = (product: CartType) => ({
  type: ADD_ITEM,
  payload: product,
});

export const removeToCart = (productId: number) => ({
  type: REMOVE_ITEM,
  payload: productId,
});

export const updateCart = (productId: number, type: "increment" | "decrement") => ({
  type: UPDATE_ITEM,
  payload: { productId, type },
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
