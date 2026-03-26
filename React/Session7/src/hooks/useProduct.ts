import { useState, useEffect } from "react";
import useDebounce from "./useDebounce";
import useCart from "./useCart";

export type Product = {
  id: number;
  title: string;
  category: string;
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
};

export type Filters = {
  search: string;
  sortBy: "" | "price" | "rating";
  order: "" | "asc" | "desc";
  category: string;
};

const BASE_URL = "https://dummyjson.com/products";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const{cart,addToCart,removeFromCart}=useCart();

  const [filters, setFilters] = useState<Filters>({
    search: "",
    sortBy: "",
    order: "",
    category: "",
  });

  const debouncedSearch = useDebounce(filters.search, 500);

  
  useEffect(() => {
    fetch(`${BASE_URL}/category-list`)
      .then((res) => res.json())
      .then(setCategories);
  }, []);

  useEffect(() => {
    setLoading(true);

    let path = BASE_URL;

    if (filters.category) {
      path += `/category/${filters.category}`;
    } else if (debouncedSearch) {
      path += `/search`;
    }

    const params = new URLSearchParams({
      limit: "10",
      skip: String(page * 10),
      ...(filters.sortBy && { sortBy: filters.sortBy }),
      ...(filters.order && { order: filters.order }),
      ...(debouncedSearch && !filters.category && { q: debouncedSearch }),
    });

    const url = `${path}?${params.toString()}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
  setProducts(data.products ?? []);
  setTotal(data.total ?? 0);     
})
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [debouncedSearch, filters.category, filters.sortBy, filters.order, page]);

  const setFilter = <K extends keyof Filters>(key: K, value: Filters[K]) => {
    setFilters((prev) => ({ ...prev, [key]: value }));

    if (key !== "search") setPage(0);
  };

  return {
    products,
    categories,
    loading,
    page,
    filters,
    setFilter,
    setPage,
    cart,
   removeFromCart,
   addToCart,
   total,
  };
}
