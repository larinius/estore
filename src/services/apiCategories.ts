"use client"

import { useQuery } from "@tanstack/react-query";

export function useCategories() {

  const queryUrl = `https://fakestoreapi.com/products/categories`;

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      fetch(queryUrl).then((response) => response.json() as Promise<string[]>),
  });

  const categories = data ? data : [];

  return { categories, error, isLoading, refetch };
}
