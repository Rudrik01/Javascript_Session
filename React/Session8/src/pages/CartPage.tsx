import { CartItem } from "../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { clearCart } from "../redux/cartActions";

import type { CartType } from "../types/CartType";

export default function CartPage() {
  const carts = useSelector((state: RootState) => state.cart.carts);
  const dispatch = useDispatch();
  const total = carts.reduce((acc: number, cart: CartType) => {
    return (acc += Math.ceil(cart.qty * cart.price));
  }, 0);

  return (
    <div className="cart-container">
      {total !== 0 ? <h3 style={{ textAlign: "center" }}>My Cart</h3> : ""}
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
      {carts.map((cart: CartType) => {
        return <CartItem key={cart.id} cart={cart} />;
      })}
      {total !== 0 ? <div>Total: {total}</div> : ""}
    </div>
  );
}
