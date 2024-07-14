import React, { useEffect, useMemo, useState } from "react";
import NewAddressForm from "./NewAddressForm";
import { useQuery } from "@tanstack/react-query";
import { getDeliveryAddressQuery } from "@/resolvers/query";
import { useAuth } from "@/hooks/useAuth";
import Loader from "@/components/Loader/Loader";

const DeliveryItems = ({ item, editAction }) => {
  const { isAuthenticated, session } = useAuth();
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [showNewAddressForm, setShowNewAddressForm] = useState(false);
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["get-address", session?.token],
    queryFn: () => getDeliveryAddressQuery({ token: session?.token }),
    enabled: !!session?.token,
  });

  const selectedAddressMemo = useMemo(() => {
    return data?.data.find((item) => item.id.toString() === selectedAddress);
  }, [selectedAddress, data]);

  useEffect(() => {
    if (data && data.data.length > 0) {
      setSelectedAddress(data.data[0].id.toString());
    }
  }, [data]);
  return (
    <div>
      {showNewAddressForm && (
        <NewAddressForm
          address_type="shipping"
          setShowNewAddressForm={setShowNewAddressForm}
          refetch={refetch}
        />
      )}
      <div>
        <div>
          <p>
            delivery by 26/07/2024 <br /> Qty: 50, Paper Type: 350gsm Silk
            Finish Paper, Size: A7, Lamination: Both Sides (Matt), Sides
            Printed: Single Sided, On Saver Turnaround
          </p>
        </div>

        {isLoading ? (
          <Loader />
        ) : isError ? (
          <div className="px-3 py-2 rounded-sm bg-primary">
            <h1 className="font-bold text-secondgraphy ">
              You Do not have any address saved. Please add a new address
            </h1>
          </div>
        ) : (
          <div>
            <h1 className="font-bold text-secondgraphy">
              Select Existing Address*
            </h1>
            <div>
              <select
                name="address"
                id="address"
                className="w-full px-3 py-2 border rounded-md border-secondgraphy focus:outline-none focus:border-primary"
                onChange={(e) => setSelectedAddress(e.target.value)}
                value={selectedAddress}
              >
                {data &&
                  data.data.map((item, index) => (
                    <option key={index} value={item.id}>
                      {item.address}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        )}
        {!isLoading ? (
          <div className="flex items-center justify-end gap-4 mt-2">
            {!isError ? (
              <button
                className="px-4 py-2 mt-2 border rounded-md border-secondgraphy hover:text-white hover:bg-secondgraphy"
                onClick={() =>
                  editAction((prev) => {
                    return {
                      show: true,
                      data: selectedAddressMemo,
                    };
                  })
                }
              >
                Edit
              </button>
            ) : null}
            <button
              className="px-4 py-2 mt-2 border rounded-md border-secondgraphy hover:text-white hover:bg-secondgraphy"
              onClick={() => setShowNewAddressForm(true)}
            >
              Add New Address
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default DeliveryItems;
