import ClientLayout from "@/components/Layout/ClientLayout";
import ProductCard from "@/components/pages/Checkout/ProductCard";
import CheckoutSummary from "@/components/pages/Checkout/CheckoutSummary";

import dynamic from "next/dynamic";

const Stepper = dynamic(() => import("@/components/pages/Checkout/Stepper"), {
  ssr: false,
});

const Checkout = () => {
  return (
    <ClientLayout>
      <div className=" custom_container">
        <Stepper />
        <div>
          <h2 className="mb-5 text-xl font-bold md:text-2xl lg:text-3xl xl:text-4xl text-secbg-secondgraphy">
            Basket (1)
          </h2>
          <hr className="mb-5" />
        </div>
        <div className="lg:flex ">
          <div className="w-full order-table lg:w-8/12">
            <ProductCard />
          </div>
          <CheckoutSummary />
        </div>
      </div>
    </ClientLayout>
  );
};

export default Checkout;
