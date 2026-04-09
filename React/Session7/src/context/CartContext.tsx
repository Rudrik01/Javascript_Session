import { createContext, useState } from "react";
import type { Product } from "../hooks/useProduct";
import { useCallback, useMemo } from "react";
type CartItem = Product & { quantity: number };

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
};
export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[] | []>([]);
  const addToCart = useCallback((product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }, []);

  const decreaseQuantity = useCallback((id: number) => {
    setCart(
      (prev) =>
        prev
          .map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
          )
          .filter((item) => item.quantity > 0), // auto-remove if it hits 0
    );
  }, []);
  const removeFromCart = useCallback((id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }, []);
  const clearCart = useCallback(() => {
    setCart([]);
  }, []);
  const totalItems = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }, [cart]);
  const totalPrice = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cart]);
  const value = useMemo(
    () => ({
      cart,
      addToCart,
      removeFromCart,
      clearCart,
      decreaseQuantity,
      totalItems,
      totalPrice,
    }),
    [
      cart,
      totalItems,
      totalPrice,
      addToCart,
      removeFromCart,
      clearCart,
      decreaseQuantity,
    ],
  );
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
