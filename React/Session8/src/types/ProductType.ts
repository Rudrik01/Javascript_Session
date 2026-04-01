export type Product = {
  id: number;
  title: string;
  category: string;
  price: number;
  thumbnail: string;
  rating: number;
  stock: number;
};

export type ApiResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export type Query = {
  search: string;
  page: number;
  category: string;
  sortOrder: "default" | "asc" | "desc";
};
