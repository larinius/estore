"use client";

import CategoryMenu from "@/components/CategoryMenu";
import ProductsGrid from "@/components/ProductsGrid";
import LoadingProductsDecorator from "@/components/ui/LoadingProductsDecorator";
import PageTitle from "@/components/ui/PageTitle";
import PaginationBox from "@/components/ui/PaginationBox";
import { useProducts } from "@/services/apiProducts";
import { applyPagination } from "@/utils/ProductHelpers";

export default function Page({ params }: { params: { page: string } }) {
  const page = Number(params.page);
  const { products: allProducts, isLoading, error } = useProducts();
  const { products, pageCount } = applyPagination(allProducts, page);

  return (
    <main className="flex flex-col h-[95vh]">
      <div className="flex flex-row flex-grow">
        <div className="sidebar flex-col hidden lg:block">
          <CategoryMenu />
        </div>
        <div className="content flex flex-col items-center flex-grow pb-4">
          <PageTitle text={"Product Catalog"} />
          <LoadingProductsDecorator isLoading={isLoading} error={error}>
            <ProductsGrid products={products} />
            <div className="flex flex-grow"></div>
            <PaginationBox basePath={""} currentPage={page} count={pageCount} />
          </LoadingProductsDecorator>
        </div>
      </div>
    </main>
  );
}
