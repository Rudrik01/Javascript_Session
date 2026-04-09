import type { Product } from "../hooks/useProduct";
import React from "react";
type CartItem = Product & { quantity: number };

type CartItemProps = {
  item: CartItem;
  addToCart: (product: Product) => void;
  decreaseQuantity: (id: number) => void;
};

function CartItem({ item, addToCart, decreaseQuantity }: CartItemProps) {
  console.log("component");
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "10px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}>
      <img
        src={item.thumbnail}
        alt={item.title}
        style={{
          width: "60px",
          height: "60px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />

      <div style={{ flex: 1 }}>
        <p style={{ margin: "0 0 4px", fontWeight: 600, fontSize: "0.875rem" }}>
          {item.title}
        </p>
        <p style={{ margin: 0, fontSize: "0.8rem" }}>₹{item.price}</p>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <button onClick={() => decreaseQuantity(item.id)}>−</button>
        <span>{item.quantity}</span>
        <button onClick={() => addToCart(item)}>+</button>
      </div>
    </div>
  );
}
export default React.memo(CartItem);
