import React, { useMemo, useState } from "react";
import NewAddressForm from "./NewAddressForm";
import { useAuth } from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { getDeliveryAddressQuery } from "@/resolvers/query";

const BillingAddressShow = ({ editAction }) => {
  const { isAuthenticated, session } = useAuth();
  const [showNewAddressForm, setShowNewAddressForm] = useState(false);

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["get-address", session?.token],
    queryFn: () => getDeliveryAddressQuery({ token: session?.token }),
    enabled: !!session?.token,
  });

  const billingAddessMemo = useMemo(() => {
    return data?.data.find((item) => item.type === "billing");
  }, [data]);

  console.log(billingAddessMemo);

  return (
    <div>
      {showNewAddressForm && (
        <NewAddressForm
          setShowNewAddressForm={setShowNewAddressForm}
          address_type="billing"
          refetch={refetch}
        />
      )}
      <div>
        {billingAddessMemo ? (
          <div className="p-3 ">
            <div>
              <p>
                {billingAddessMemo.first_name} {billingAddessMemo.last_name}
              </p>
              <p>{billingAddessMemo.line_1}</p>
              <p>{billingAddessMemo.town}</p>
              <p>{billingAddessMemo.phone}</p>
              <p>{billingAddessMemo.post_code}</p>
            </div>
            <div className="flex items-center justify-start gap-4">
              <button
                className="px-4 py-2 mt-2 border rounded-md border-secondgraphy hover:text-white hover:bg-secondgraphy"
                onClick={() =>
                  editAction((prev) => {
                    return {
                      show: true,
                      data: billingAddessMemo,
                    };
                  })
                }
              >
                Edit
              </button>
            </div>
          </div>
        ) : (
          <div className="p-3 text-center">
            <div>
              <h1>You do not have billing addres, please create and save.</h1>
            </div>
            <button
              className="px-4 py-2 mt-2 border rounded-md border-secondgraphy hover:text-white hover:bg-secondgraphy"
              onClick={() => setShowNewAddressForm(true)}
            >
              Add Billing Address
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BillingAddressShow;
