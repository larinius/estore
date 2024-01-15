"use client";

import { useEffect, useState } from "react";
import CategoryMenu from "@/components/CategoryMenu";
import ProductsGrid from "@/components/ProductsGrid";
import Product from "@/interfaces/Product";

import { useProducts } from "@/services/apiProducts";
import { Typography } from "@mui/material";
import PageTitle from "@/components/ui/PageTitle";
import LoadingProductsDecorator from "@/components/ui/LoadingProductsDecorator";

export default function Search({ params }: { params: { q: string } }) {
  const query = params.q;
  const { products: allProducts, isLoading, error } = useProducts();

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (query !== undefined && query.length > 0) {
      const filteredProducts: Product[] = allProducts.filter(
        (product: Product) => {
          return product.title.toLowerCase().includes(query.toLowerCase());
        }
      );
      setProducts(filteredProducts);
    } else {
      setProducts(allProducts);
    }
  }, [query, allProducts]);

  return (
    <main className="flex min-h-screen flex-col justify-between">
      <div className="flex flex-row">
        <div className="sidebar flex-col hidden lg:block">
          <CategoryMenu />
        </div>
        <div className="content flex flex-col flex-grow items-center">
          <PageTitle text={"Search results"} />
          <LoadingProductsDecorator isLoading={isLoading} error={error}>
            {products.length > 0 ? (
              <ProductsGrid products={products} />
            ) : (
              <div className="my-24">
                <Typography
                  variant="h3"
                  component="h3"
                  color="textSecondary"
                  gutterBottom
                >
                  Products not found
                </Typography>
              </div>
            )}
          </LoadingProductsDecorator>
        </div>
      </div>
    </main>
  );
}
