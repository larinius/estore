"use client";

import ProductCard from "@/components/ProductCard";
import LoadingProductsDecorator from "@/components/ui/LoadingProductsDecorator";
import { useProduct } from "@/services/apiProductItem";

const ProductItem = ({ params }: { params: { id: string } }) => {
  const { product, isLoading, error } = useProduct(params.id);

  return (
    <main className="flex flex-col min-h-screen">
      <LoadingProductsDecorator isLoading={isLoading} error={error}>
        <ProductCard product={product} />
      </LoadingProductsDecorator>
    </main>
  );
};

export default ProductItem;
