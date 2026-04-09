import type { Filters } from "../hooks/useProduct";
import useCart from "../hooks/useCart";
import React from "react";
type PropsType = {
  categories: string[];
  filters: Filters;
  setFilter: <K extends keyof Filters>(key: K, value: Filters[K]) => void;

  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
};

function Navbar({ categories, filters, setFilter, setShowCart }: PropsType) {
  const { totalItems } = useCart();
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "25px",
          height: "100px",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}>
        <label>
          Search:
          <input
            type="text"
            value={filters.search}
            onChange={(e) => setFilter("search", e.target.value)}
          />
        </label>

        <label>
          Sort by:
          <select
            value={filters.sortBy}
            onChange={(e) =>
              setFilter("sortBy", e.target.value as "" | "price" | "rating")
            }>
            <option value="">Select</option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
          </select>
        </label>

        <label>
          Order:
          <select
            value={filters.order}
            onChange={(e) =>
              setFilter("order", e.target.value as "" | "asc" | "desc")
            }>
            <option value="">Select</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>

        <label>
          Category:
          <select
            value={filters.category}
            onChange={(e) => setFilter("category", e.target.value)}>
            <option value="">All</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>

        <button
          style={{ position: "relative" }}
          onClick={() => setShowCart((p) => !p)}>
          🛒
          {totalItems > 0 && (
            <span
              style={{
                position: "absolute",
                top: -6,
                right: -6,
                background: "red",
                color: "white",
                borderRadius: "50%",
                width: 18,
                height: 18,
                fontSize: 11,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </>
  );
}
export default React.memo(Navbar);
