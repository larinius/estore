"use client"

import Product from "@/interfaces/Product";
import { useQuery } from "@tanstack/react-query";

interface UseProductResult {
  product: Product | null;
  error: any;
  isLoading: boolean;
  refetch: () => void;
}

export function useProduct(id: string): UseProductResult {
  const isEnabled = id != undefined ? true : false;
  const queryUrl = `https://fakestoreapi.com/products/${id}`;

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["product", id],
    queryFn: () =>
      fetch(queryUrl).then((response) => response.json() as Promise<Product>),
    enabled: isEnabled,
  });

  const product = data || null;

  return { product, error, isLoading, refetch };
}
