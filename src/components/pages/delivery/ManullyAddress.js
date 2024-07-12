import { useQuery } from "@tanstack/react-query";
import Box from "../../ui/Box";
import BillingBox from "./BillingBox";
import DeliveryBox from "./DeliveryBox";
import { getIncompleteCartProductsQuery } from "@/resolvers/query";
import CheckoutSummary from "../Checkout/CheckoutSummary";
import Loader from "@/components/Loader/Loader";

const ManullyAddress = () => {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["incomplete_cart_items"],
    queryFn: getIncompleteCartProductsQuery,
  });
  return (
    <div className="custom_container ">
      <h1 className="px-3 py-2 mt-5 text-lg font-bold md:text-2xl lg:text-3xl text-secondgraphy md:py-5">
        Delivery
      </h1>
      <div className="gap-5 md:flex">
        <div className="mt-5 mb-2 md:w-2/3 md:mb-5">
          <DeliveryBox data={data} isLoading={isLoading} />
          <BillingBox />
          <h4 className="mt-5 mb-5 text-lg bg-[#faefc9] font-medium text-typography w-full rounded-md  px-5 py-2 ">
            Payment
          </h4>
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
  );
};

export default ManullyAddress;