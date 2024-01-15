import CheckoutForm from "@/components/CheckoutForm";
import ProductsList from "@/components/ProductsList";
import HaveProductsDecorator from "@/components/ui/HaveProductsDecorator";
import OrderTotal from "@/components/ui/OrderTotal";
import PageTitle from "@/components/ui/PageTitle";

export default function Cart() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <div className="flex flex-row">
        <div className="content flex flex-col lg:w-2/3 w-full mx-auto max-w-screen-xl text-center">
          <PageTitle text={"Checkout"} />
          <HaveProductsDecorator>
            <ProductsList />
            <OrderTotal />
            <CheckoutForm />
          </HaveProductsDecorator>
        </div>
      </div>
    </main>
  );
}
