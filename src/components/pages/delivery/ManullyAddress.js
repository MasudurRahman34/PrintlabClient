import { useMutation, useQuery } from "@tanstack/react-query";
import Box from "../../ui/Box";
import BillingBox from "./BillingBox";
import DeliveryBox from "./DeliveryBox";
import {
  getDeliveryAddressQuery,
  getIncompleteCartProductsQuery,
} from "@/resolvers/query";
import CheckoutSummary from "../Checkout/CheckoutSummary";
import Loader from "@/components/Loader/Loader";
import dynamic from "next/dynamic";
import withAuth from "@/hoc/withAuth";
import { useAuth } from "@/hooks/useAuth";
import { memo, useEffect, useState } from "react";
import { checkoutMutation } from "@/resolvers/mutation";
import useToastMessage from "@/hooks/useToastMessage";
import { getDateAfterDays } from "@/lib/utils";

const Stepper = dynamic(() => import("@/components/pages/Checkout/Stepper"), {
  ssr: false,
});
const ManullyAddress = () => {
  const showToastMessage = useToastMessage();
  const { session, isAuthenticated } = useAuth();
  const [checkout_state, set_checkout_state] = useState({
    cart_id: [],
    shipping_address: [],
    billing_address: null,
  });

  const { data, isLoading, isError, error, isSuccess, refetch } = useQuery({
    queryKey: ["incomplete_cart_items"],
    queryFn: getIncompleteCartProductsQuery,
  });

  const {
    data: address_data,
    isLoading: address_loading,
    isError: address_isError,
    isSuccess: address_isSuccess,
    error: address_error,
    refetch: address_refetch,
  } = useQuery({
    queryKey: ["get-address", session?.token],
    queryFn: () => getDeliveryAddressQuery({ token: session?.token }),
    enabled: !!session?.token,
  });

  const { mutate, isPending } = useMutation({
    mutationKey: "checkout_mutation",
    mutationFn: checkoutMutation,
  });

  const handleCheckout = () => {
    // validating all data is available or not null or undefined
    if (
      checkout_state.cart_id.length > 0 &&
      checkout_state.shipping_address.length > 0 &&
      checkout_state.billing_address
    ) {
      mutate(
        {
          variables: checkout_state,
          token: session?.token,
        },
        {
          onSuccess: (data) => {
            console.log(data);
            location.href = `${data?.data.url}`;
          },
          onError: (error) => {
            showToastMessage(error);
          },
        }
      );
    }
  };
  useEffect(() => {
    if (isSuccess && address_isSuccess) {
      /* const defaultAddress = address_data?.data.find(
        (address_data) => address_data.is_default === 1
      );
      const defaultAddressId = defaultAddress
        ? defaultAddress.id
        : address_data?.data[0].id; */

      const billing_address = address_data?.data.find(
        (address) => address.type === "billing"
      );

      const tempCheckoutState = {
        cart_id: [],
        shipping_address: [],
        billing_address: billing_address ? billing_address.id : null,
      };

      data?.data.forEach((cart) => {
        tempCheckoutState.cart_id.push(cart.id);
        tempCheckoutState.shipping_address.push({
          cart_id: cart.id,
          shipment_id: null,
          delivery_date: getDateAfterDays(cart.delivery_service.duration),
        });
      });

      set_checkout_state(tempCheckoutState);
    }
  }, [isSuccess, address_isSuccess]);

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
            <DeliveryBox
              data={data}
              isLoading={isLoading}
              address_data={address_data?.data}
              address_isError={address_isError}
              address_isLoading={address_loading}
              checkout_state={checkout_state}
              set_checkout_state={set_checkout_state}
              address_refetch={address_refetch}
            />
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
                isCheckoutPending={isPending}
                handleCheckout={handleCheckout}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(ManullyAddress);
