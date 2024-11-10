import Loader from "@/components/Loader/Loader";
import { useAuth } from "@/hooks/useAuth";
import { getDeliveryAddressQuery } from "@/resolvers/query";
import { useQuery } from "@tanstack/react-query";
import { FaLocationDot } from "react-icons/fa6";

import React from "react";

const AddressPageComponent = () => {
  const { session } = useAuth();
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

  return (
    <section>
      {address_loading ? (
        <Loader />
      ) : address_isError ? (
        <p>Something went wrong!</p>
      ) : address_isSuccess ? (
        <div className="">
          {address_data?.data?.length ? (
            address_data?.data?.map((address, idx) => (
              <div
                key={address.id}
                className="flex items-start gap-3 p-4 mb-4 text-sm rounded-md bg-secondary md:text-base"
              >
                <div>
                  <FaLocationDot />
                </div>
                <div>
                  <h1>{address.type} Address</h1>
                  <p>{address.fullAddress}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center w-full h-20 text-black bg-primary/25 border-primary">
              No address found!
            </div>
          )}
        </div>
      ) : null}
    </section>
  );
};

export default AddressPageComponent;
