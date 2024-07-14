import { useQuery } from "@tanstack/react-query";
import Box from "../../ui/Box";
import BillingBox from "./BillingBox";
import DeliveryBox from "./DeliveryBox";
import { getIncompleteCartProductsQuery } from "@/resolvers/query";
import CheckoutSummary from "../Checkout/CheckoutSummary";
import Loader from "@/components/Loader/Loader";
import dynamic from "next/dynamic";
import withAuth from "@/hoc/withAuth";

const Stepper = dynamic(() => import("@/components/pages/Checkout/Stepper"), {
  ssr: false,
});
const ManullyAddress = () => {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["incomplete_cart_items"],
    queryFn: getIncompleteCartProductsQuery,
  });
  return (
    <>
      <div className=" custom_container">
        <Stepper activeStep={2} />
      </div>
      <div className="custom_container ">
        <h1 className="px-3 py-2 mt-5 text-lg font-bold md:text-2xl lg:text-3xl text-secondgraphy md:py-5">
          Delivery
        </h1>
        <div className="gap-5 md:flex">
          <div className="mt-5 mb-2 md:w-2/3 md:mb-5">
            <DeliveryBox data={data} isLoading={isLoading} />
            <BillingBox />
          </div>
          <div className="mt-5 md:w-1/3">
            {isLoading ? (
              <Loader />
            ) : (
              <CheckoutSummary
                products={data?.data}
                isLoading={isLoading}
                next="payment"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(ManullyAddress);
