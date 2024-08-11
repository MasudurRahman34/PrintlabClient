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

    const variables = {};

    if (checkout_state.cart_id.length === 0)
      return showToastMessage("Cart is empty");
    if (checkout_state.shipping_address.length === 0)
      return showToastMessage("Shipping address is required");
    if (!checkout_state.billing_address)
      return showToastMessage("Billing address is required");

    variables.cart_id = checkout_state.cart_id;
    variables.shipping_address = checkout_state.shipping_address;
    variables.billing_address = checkout_state.billing_address;

    mutate(
      {
        variables,
        token: session?.token,
      },
      {
        onSuccess: (data) => {
          location.href = `${data?.data.url}`;
        },
        onError: (error) => {
          showToastMessage(error);
        },
      }
    );
  };

  useEffect(() => {
    if (isSuccess && address_isSuccess) {
      const billing_address = address_data?.data.find(
        (address) => address.type === "billing"
      );

      const tempCheckoutState = {
        cart_id: [],
        shipping_address: [],
        billing_address: billing_address ? billing_address.id : null,
      };

      const defaultAddress =
        (address_data?.data?.length > 0 &&
          address_data?.data.find(
            (address_data) => address_data.is_default === 1
          )) ||
        address_data?.data[0];

      data?.data.forEach((cart) => {
        tempCheckoutState.cart_id.push(cart.id);
        tempCheckoutState.shipping_address.push({
          cart_id: cart.id,
          shipment_id: defaultAddress?.id,
          delivery_date: getDateAfterDays(cart.delivery_service.duration),
        });
      });

      set_checkout_state(tempCheckoutState);
    }
  }, [isSuccess, address_isSuccess, address_data, data]);

  return (
    <>
      <div className="hidden custom_container lg:block">
        <Stepper activeStep={2} />
      </div>
      <div className="custom_container">
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
            <BillingBox
              address_data={address_data}
              address_isError={address_isError}
              address_loading={address_loading}
              address_refetch={address_refetch}
            />
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
