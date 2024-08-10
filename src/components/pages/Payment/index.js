import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getIncompleteCartProductsQuery } from "@/resolvers/query";
import { formatPrice } from "@/lib/utils";
import { createCheckoutSessionMutation } from "@/resolvers/mutation";
import { useAuth } from "@/hooks/useAuth";
import useToastMessage from "@/hooks/useToastMessage";
import Loader from "@/components/Loader/Loader";
import { useRouter } from "next/router";

const Stepper = dynamic(() => import("@/components/pages/Checkout/Stepper"), {
  ssr: false,
});

const PaymentPageComponent = () => {
  const router = useRouter();
  const showToastMessage = useToastMessage();
  const { isAuthenticated, session } = useAuth();
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["incomplete_cart_items"],
    queryFn: getIncompleteCartProductsQuery,
  });

  const { mutate, isPending } = useMutation({
    mutationKey: "create_checkout_session",
    mutationFn: createCheckoutSessionMutation,
  });

  const { subTotal, totalTax, total } = useMemo(() => {
    if (!isError && data) {
      const subTotal = data?.data.reduce((acc, item) => item.total + acc, 0);
      const totalTax = data?.data.reduce(
        (acc, item) => Number(item.tax) + acc,
        0
      );

      const total = subTotal + totalTax;

      return { subTotal, totalTax, total };
    }

    return {};
  }, [data]);

  const handlePayment = () => {
    mutate(
      {
        token: session?.token,
      },
      {
        onSuccess: async (data) => {
          router.push(data?.data.url);
        },
        onError: async (error) => {
          showToastMessage(error.response.data.message);
        },
      }
    );
  };

  return (
    <div className="mb-8 ">
      <Stepper activeStep={3} />
      <div className="container mx-auto">
        <div className="bg-white ">
          <div className="w-full">
            <div className="max-w-md mx-auto">
              {isLoading ? (
                <Loader />
              ) : (
                <div className="p-6 bg-gray-100 rounded-md">
                  <h2 className="text-3xl font-extrabold text-gray-800">
                    {formatPrice(total)}
                  </h2>

                  <ul className="mt-8 space-y-4 text-gray-800">
                    <li className="flex flex-wrap gap-4 text-sm">
                      Subtotal{" "}
                      <span className="ml-auto font-bold">
                        {formatPrice(subTotal)}
                      </span>
                    </li>

                    <li className="flex flex-wrap gap-4 text-sm">
                      Tax{" "}
                      <span className="ml-auto font-bold">
                        {formatPrice(totalTax)}
                      </span>
                    </li>
                    <li className="flex flex-wrap gap-4 pt-4 text-sm font-bold border-t-2">
                      Total{" "}
                      <span className="ml-auto">{formatPrice(total)}</span>
                    </li>
                  </ul>
                  <div className="text-center">
                    <button
                      type="button"
                      className="mt-8 w-40 py-3.5 text-sm bg-secondgraphy text-white rounded-md  tracking-wide"
                      disabled={isPending}
                      onClick={handlePayment}
                    >
                      {isPending ? "Processing..." : "Pay Now"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPageComponent;
