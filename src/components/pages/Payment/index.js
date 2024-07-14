import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import { useQuery } from "@tanstack/react-query";
import { getIncompleteCartProductsQuery } from "@/resolvers/query";
import { formatPrice } from "@/lib/utils";

const Stepper = dynamic(() => import("@/components/pages/Checkout/Stepper"), {
  ssr: false,
});

const PaymentPageComponent = () => {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["incomplete_cart_items"],
    queryFn: getIncompleteCartProductsQuery,
  });

  console.log(data);

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

  console.log(subTotal, totalTax);

  return (
    <div className="mb-8 ">
      <Stepper activeStep={3} />
      <div className="container mx-auto">
        <div className="bg-white ">
          <div className="w-full">
            <div className="max-w-md mx-auto">
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
                    Total <span className="ml-auto">{formatPrice(total)}</span>
                  </li>
                </ul>
                <div className="text-center">
                  <button
                    type="button"
                    className="mt-8 w-40 py-3.5 text-sm bg-secondgraphy text-white rounded-md  tracking-wide"
                  >
                    Pay Now{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPageComponent;
