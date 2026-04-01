import { useEffect, useState } from "react";

export default function useDebounce(search: string, delay: number) {
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, delay);

    return () => clearTimeout(timer);
  }, [search, delay]);

  return { debouncedSearch };
}
