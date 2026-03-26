import useCart from "../hooks/useCart";
import CartItem from "./CartCard";

export default function CartDrawer() {
  const {
    cart,
    addToCart,
    decreaseQuantity,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <h2 style={{ margin: 0 }}>Your Cart</h2>
        {cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
      </div>

      {cart.length === 0 ? (
        <p style={{ textAlign: "center", color: "#aaa" }}>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              addToCart={addToCart}
              decreaseQuantity={decreaseQuantity}
            />
          ))}

          <div style={{ borderTop: "1px solid #eee", paddingTop: "12px" }}>
            <p style={{ margin: "4px 0" }}>
              Total Items: <b>{totalItems}</b>
            </p>
            <p style={{ margin: "4px 0" }}>
              Total Price: <b>₹{totalPrice.toFixed(2)}</b>
            </p>
          </div>
        </>
      )}
    </div>
  );
}
