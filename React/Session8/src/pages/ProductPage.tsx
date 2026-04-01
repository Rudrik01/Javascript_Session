import { useEffect, useState, useCallback } from "react";
import useDebounce from "../hooks/useDebounce";
import type { ApiResponse, Query } from "../types/ProductType";
import Product from "../components/Product";
import FilterProducts from "../components/FilterProducts";

const BASE_URL = "https://dummyjson.com/products";
const LIMIT = 5;

export default function ProductPage() {
  const [query, setQuery] = useState<Query>({
    search: "",
    page: 1,
    category: "",
    sortOrder: "default",
  });
  const [categories, setCategories] = useState<string[]>([]);
  const [data, setData] = useState<ApiResponse | null>(null);
  const { debouncedSearch } = useDebounce(query.search, 500);

  const constructUrl = useCallback(() => {
    const skip = (query.page - 1) * LIMIT;
    let url = "";

    if (debouncedSearch !== "") {
      url = `${BASE_URL}/search?q=${debouncedSearch}&limit=${LIMIT}&skip=${skip}`;
    } else if (query.category !== "") {
      url = `${BASE_URL}/category/${query.category}?limit=${LIMIT}&skip=${skip}`;
    } else {
      url = `${BASE_URL}?limit=${LIMIT}&skip=${skip}`;
    }

    if (query.sortOrder !== "default") {
      url +=
        query.sortOrder === "asc"
          ? "&sortBy=price&order=asc"
          : "&sortBy=price&order=desc";
    }

    return url;
  }, [query.page, debouncedSearch, query.category, query.sortOrder]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(constructUrl());
      const result: ApiResponse = await res.json();
      setData(result);
    }
    fetchData();
  }, [constructUrl]);

  useEffect(() => {
    async function fetchCategories() {
      const res = await fetch(`${BASE_URL}/category-list`);
      const result: string[] = await res.json();
      setCategories(result);
    }
    fetchCategories();
  }, []);

  function updateQuery(updates: Partial<Query>) {
    setQuery((prev) => ({
      ...prev,
      ...updates,
    }));
  }

  function handlePrevPagination() {
    if (query.page <= 1) return;
    updateQuery({ page: query.page - 1 });
  }

  function handleNextPagination() {
    if (data && query.page * LIMIT >= data.total) return;
    updateQuery({ page: query.page + 1 });
  }

  return (
    <div className="container">
      <FilterProducts
        query={query}
        categories={categories}
        updateQuery={updateQuery}
      />

      <div className="pagination">
        <button onClick={handlePrevPagination}>Prev</button>
        <button onClick={handleNextPagination}>Next</button>
      </div>

      <div className="grid">
        {data?.products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
