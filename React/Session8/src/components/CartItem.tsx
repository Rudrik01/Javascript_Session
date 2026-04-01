import React from "react";
import type { CartType } from "../types/CartType";
import { useDispatch } from "react-redux";
import { updateCart } from "../redux/cartActions";

export const CartItem = React.memo(({ cart }: { cart: CartType }) => {
  const dispatch = useDispatch();
  return (
    <div className="cart-item">
      <img src={cart.thumbnail} alt={cart.title} className="cart-img" />

      <div className="cart-details">
        <div>{cart.title}</div>
        <div>₹{cart.price}</div>
        <div style={{ display: "flex" }}>
          <button onClick={() => dispatch(updateCart(cart.id, "decrement"))}>-</button>
          <div> Qty: {cart.qty} </div>
          <button onClick={() => dispatch(updateCart(cart.id, "increment"))}>+</button>
        </div>
        <div>SubTotal: {Math.ceil(cart.qty * cart.price)}</div>
      </div>
    </div>
  );
});
