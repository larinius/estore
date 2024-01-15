"use client";

import CategoryMenu from "@/components/CategoryMenu";
import ProductsGrid from "@/components/ProductsGrid";
import LoadingProductsDecorator from "@/components/ui/LoadingProductsDecorator";
import PageTitle from "@/components/ui/PageTitle";
import PaginationBox from "@/components/ui/PaginationBox";
import { useProducts } from "@/services/apiProducts";
import { applyPagination } from "@/utils/ProductHelpers";

export default function Home() {
  const page = 1;
  const { products: allProducts, isLoading, error } = useProducts();
  const { products, pageCount } = applyPagination(allProducts, page);

  return (
    <main className="flex min-h-screen flex-col justify-between">
      <div className="flex flex-row">
        <div className="sidebar flex-col hidden lg:block">
          <CategoryMenu />
        </div>
        <div className="content flex flex-col flex-grow items-center">
          <PageTitle text={"Product Catalog"} />
          <LoadingProductsDecorator isLoading={isLoading} error={error}>
            <ProductsGrid products={products} />
            <div className="flex flex-grow"></div>
            <PaginationBox basePath={""} currentPage={1} count={pageCount} />
          </LoadingProductsDecorator>
        </div>
      </div>
    </main>
  );
}
