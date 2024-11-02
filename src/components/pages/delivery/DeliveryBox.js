import Box from "@/components/ui/Box";
import React, { useState } from "react";
import SavedAddress from "./SavedAddress";

import Loader from "@/components/Loader/Loader";
import EditDeliveryAddressForm from "./EditDeliveryAddressForm";

const DeliveryBox = ({
  data,
  isLoading,
  address_data,
  address_isError,
  address_isLoading,
  checkout_state,
  set_checkout_state,
  address_refetch,
}) => {
  const [editAddressData, setEditAddressData] = useState({
    show: false,
    data: null,
  });

  return (
    <Box boxTitle="Delivery Address" fullWidth>
      <div className="p-4 text-sm border-b border-b-secondgraphy md:text-base">
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
          fileType="shipping"
        />
      ) : (
        <SavedAddress
          cartItems={data?.data}
          editAction={setEditAddressData}
          address_data={address_data}
          address_isError={address_isError}
          address_isLoading={address_isLoading}
          checkout_state={checkout_state}
          set_checkout_state={set_checkout_state}
          address_refetch={address_refetch}
        />
      )}
    </Box>
  );
};

export default DeliveryBox;
