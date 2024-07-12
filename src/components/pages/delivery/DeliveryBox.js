import Box from "@/components/ui/Box";
import React, { useState } from "react";
import SavedAddress from "./SavedAddress";
import { useQuery } from "@tanstack/react-query";
import { getIncompleteCartProductsQuery } from "@/resolvers/query";
import Loader from "@/components/Loader/Loader";
import EditDeliveryAddressForm from "./EditDeliveryAddressForm";

const DeliveryBox = () => {
  const [editAddressData, setEditAddressData] = useState({
    show: false,
    data: null,
  });
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

      {isLoading ? (
        <Loader />
      ) : editAddressData.show ? (
        <EditDeliveryAddressForm
          data={editAddressData.data}
          setEditAddressData={setEditAddressData}
        />
      ) : (
        <SavedAddress cartItems={data?.data} editAction={setEditAddressData} />
      )}
    </Box>
  );
};

export default DeliveryBox;
