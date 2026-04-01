import type { Query } from "../types/ProductType";

export default function FilterProducts({
  query,
  categories,
  updateQuery,
}: {
  query: Query;
  categories: string[];
  updateQuery: (updates: Partial<Query>) => void;
}) {
  return (
    <div className="controls">
      <input
        className="input"
        type="text"
        placeholder="Search products..."
        value={query.search}
        onChange={(e) => updateQuery({ search: e.target.value, page: 1 })}
      />

      <select
        className="select"
        value={query.sortOrder}
        onChange={(e) =>
          updateQuery({
            sortOrder: e.target.value as Query["sortOrder"],
            page: 1,
          })
        }
      >
        <option value="default">Sort by price</option>
        <option value="asc">Low To High</option>
        <option value="desc">High To Low</option>
      </select>

      <select
        className="select"
        value={query.category}
        onChange={(e) =>
          updateQuery({
            search: "",
            category: e.target.value,
            page: 1,
          })
        }
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
