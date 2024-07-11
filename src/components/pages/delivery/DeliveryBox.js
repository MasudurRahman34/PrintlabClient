import Box from "@/components/ui/Box";
import React, { useState } from "react";
import NewAddressForm from "./NewAddressForm";
import SavedAddress from "./SavedAddress";
import { useQuery } from "@tanstack/react-query";
import { getIncompleteCartProductsQuery } from "@/resolvers/query";

const DeliveryBox = () => {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["cart"],
    queryFn: getIncompleteCartProductsQuery,
  });

  return (
    <Box boxTitle="Delivery Address" fullWidth>
      <div className="p-4 border-b border-b-secondgraphy">
        <h1 className="font-bold">Choose Delivery For Each Item</h1>
        <p>
          Want a faster checkout experience? Set a{" "}
          <span className="text-green-500 underline">
            default delivery address here
          </span>
        </p>
      </div>

      <SavedAddress cartItems={data?.data} />
    </Box>
  );
};

export default DeliveryBox;
