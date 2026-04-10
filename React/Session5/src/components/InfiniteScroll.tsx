import { useState, useEffect, useRef } from "react";
import React from "react";
import useDebounce from "../utils/useDebounce";
import SkeletonCard from "./Skeleton";

type Product = {
  id: number;
  title: string;
  category: string;
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
};

export default function InfiniteScroll() {
  const [data, setData] = useState<Product[]>([]);
  const [page, setPage] = useState<number>(0);
  const [search, setSearch] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("price");
  const [order, setOrder] = useState<string>("");
  const [category, setCategories] = useState<string[]>([]);
  const [searchCategory, setSearchCategory] = useState<string>("");
  const [add, setAdd] = useState<boolean>(false);
  const query = useDebounce(search, 500);
  const [errors, setErrors] = useState<Partial<Record<keyof Product, string>>>({});
  const [loading, setLoading] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [hasMore, setHasMore] = useState(true);

  const [formData, setFormData] = useState<Product>({
    id: 0,
    title: "",
    category: "",
    price: 0,
    rating: 0,
    stock: 0,
    thumbnail: "",
  });

  const url = `https://dummyjson.com/products?limit=10&skip=${page * 10}&sortBy=${sortBy}&order=${order}`;

  // ✅ Fix 1 — reset data/page when search or category changes
  useEffect(() => {
    setData([])
    setPage(0)
    setHasMore(true)
  }, [query, searchCategory])

  useEffect(() => {
    setLoading(true);
    if (searchCategory) {
      fetch(`https://dummyjson.com/products/category/${searchCategory}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.products.length === 0) setHasMore(false);
          setData((prev) => [...prev, ...data.products]); // ✅ Fix 2
          setLoading(false);
        });
    } else if (search) {
      fetch(`https://dummyjson.com/products/search?q=${query}&limit=10&skip=${page * 10}`) // ✅ Fix 3
        .then((res) => res.json())
        .then((data) => {
          if (data.products.length === 0) setHasMore(false);
          setData((prev) => [...prev, ...data.products]); // ✅ Fix 2
          setLoading(false);
        });
    } else {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          if (data.products.length === 0) setHasMore(false);
          setData((prev) => [...prev, ...data.products]);
          setLoading(false);
        });
    }
  }, [url, query, page, searchCategory]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category-list")
      .then((res) => res.json())
      .then(setCategories);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading && hasMore) {
        setPage((prev) => prev + 1);
      }
    });

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => observer.disconnect();
  }, [loading, hasMore]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" || name === "rating" || name === "stock"
        ? Number(value)
        : value,
    }));
  };

  const handleDelete = (index: number) => {
    setData((prev) => prev.filter((_, i) => i !== index));
  };

  const validate = () => {
    const newErrors: Partial<Record<keyof Product, string>> = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.category.trim()) newErrors.category = "Category is required";
    if (!formData.thumbnail.trim()) newErrors.thumbnail = "Image URL required";
    if (!formData.price || formData.price <= 0) newErrors.price = "Price must be > 0";
    if (!formData.rating || formData.rating <= 0) newErrors.rating = "Rating must be > 0";
    if (!formData.stock || formData.stock < 0) newErrors.stock = "Stock must be >= 0";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const newProduct = { ...formData, id: data.length + 1 };
    setData((prev) => [newProduct, ...prev]);
    setFormData({ id: Date.now(), title: "", category: "", price: 0, rating: 0, stock: 0, thumbnail: "" });
    setErrors({});
    setAdd(false);
  };

  return (
    <>
      <label>Search: </label>
      <input type="text" value={search} onChange={handleChange} />
      <label>Sort:</label>
      <select onChange={(e) => setSortBy(e.target.value)}>
        <option value="price">Price</option>
        <option value="rating">Rating</option>
      </select>
      <label>Order by:</label>
      <select onChange={(e) => setOrder(e.target.value)}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <label>Categories:</label>
      <select onChange={(e) => setSearchCategory(e.target.value)}>
        <option value="">Select</option>
        {category.map((item) => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
      <button onClick={() => setAdd(true)}>Add</button>

      {add ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", width: "10%" }}>
            <label>Title:</label>
            <input name="title" value={formData.title} onChange={handleFormChange} />
            {errors.title && <p style={{ color: "red" }}>{errors.title}</p>}

            <label>Category:</label>
            <select onChange={(e) => setFormData((prev) => ({ ...prev, category: e.target.value }))}>
              <option value="">Select</option>
              {category.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
            {errors.category && <p style={{ color: "red" }}>{errors.category}</p>}

            <label>Price:</label>
            <input type="number" name="price" value={formData.price} onChange={handleFormChange} />
            {errors.price && <p style={{ color: "red" }}>{errors.price}</p>}

            <label>Rating:</label>
            <input type="number" name="rating" value={formData.rating} onChange={handleFormChange} />
            {errors.rating && <p style={{ color: "red" }}>{errors.rating}</p>}

            <label>Stock:</label>
            <input type="number" name="stock" value={formData.stock} onChange={handleFormChange} />
            {errors.stock && <p style={{ color: "red" }}>{errors.stock}</p>}

            <label>Image URL:</label>
            <input name="thumbnail" value={formData.thumbnail} onChange={handleFormChange} />
            {errors.thumbnail && <p style={{ color: "red" }}>{errors.thumbnail}</p>}

            <button type="submit">Add Product</button>
          </form>
        </div>
      ) : loading && data.length === 0 ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "flex-start" }}>
          {Array.from({ length: 10 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "flex-start" }}>
          {data.map((item, index) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "15px",
                width: "250px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                textAlign: "center",
              }}
            >
              <img src={item.thumbnail} alt={item.title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
              <h3>{item.title}</h3>
              <p><b>Category:</b> {item.category}</p>
              <p><b>Price:</b> ₹{item.price}</p>
              <p><b>Rating:</b> ⭐ {item.rating}</p>
              <p><b>Stock:</b> {item.stock}</p>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          ))}
          {loading && (
            <div style={{ width: "100%", textAlign: "center", padding: "20px" }}>
              Loading more...
            </div>
          )}
        </div>
      )}

      {!hasMore && <p style={{ textAlign: "center" }}>No more products</p>}
      <div ref={sentinelRef} style={{ height: "1px" }} />
    </>
  );
}