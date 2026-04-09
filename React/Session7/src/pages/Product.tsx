import { useState } from "react";
import { useProducts } from "../hooks/useProduct";

import useCart from "../hooks/useCart";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import CartDrawer from "../components/CartDrawer";
import { useCallback, useMemo } from "react";
export default function Products() {
  const [showCart, setShowCart] = useState(false);

  const {
    products,
    categories,
    loading,
    page,
    filters,
    setFilter,
    setPage,
    total,
  } = useProducts();
  const { cart, addToCart, removeFromCart } = useCart();
  const PAGE_LIMIT = 10;
  const isInCart = useCallback(
    (id: number) => cart.some((item) => item.id === id),
    [cart],
  );
  const hasNextPage = useMemo(
    () => (page + 1) * PAGE_LIMIT < total,
    [page, total],
  );

  return (
    <div>
      <Navbar
        categories={categories}
        filters={filters}
        setFilter={setFilter}
        setShowCart={setShowCart}
      />

      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          marginTop: "50px",
        }}>
        <div style={{ flex: 3 }}>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "75px" }}>
              {products.length === 0 ? (
                <p>No products found.</p>
              ) : (
                products.map((item) => (
                  <ProductCard
                    key={item.id}
                    item={item}
                    isInCart={isInCart}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                  />
                ))
              )}
            </div>
          )}
        </div>

        {showCart && (
          <div
            style={{
              height: "100vh",
              width: "300px",
              backgroundColor: "#fff",
              borderLeft: "2px solid #ccc",
              boxShadow: "-4px 0 10px rgba(0,0,0,0.2)",
              padding: "20px",
              overflowY: "auto",
            }}>
            <CartDrawer />
          </div>
        )}
      </div>

      <div
        style={{
          display: "flex",
          gap: "12px",
          alignItems: "center",
          marginTop: "16px",
        }}>
        <button
          onClick={() => setPage((p) => Math.max(0, p - 1))}
          disabled={page === 0}>
          Prev
        </button>
        <span>Page {page + 1}</span>
        <button onClick={() => setPage((p) => p + 1)} disabled={!hasNextPage}>
          Next
        </button>
      </div>
    </div>
  );
}
