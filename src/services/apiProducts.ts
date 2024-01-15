"use client";

import Product from "@/interfaces/Product";
import { useQuery } from "@tanstack/react-query";

interface UseProductsResult {
  products: Product[];
  error: any;
  isLoading: boolean;
  refetch: () => void;
}

export function useProducts(category?: string): UseProductsResult {
  let queryUrl = "https://fakestoreapi.com/products";

  if (category) {
    queryUrl += `/category/${category}`;
  }

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: category ? ["products", category] : ["products"],
    queryFn: () =>
      fetch(queryUrl).then((response) => response.json() as Promise<Product[]>),
  });

  const products = data || [];

  return { products, error, isLoading, refetch };
}
