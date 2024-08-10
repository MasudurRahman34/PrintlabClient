import Box from "@/components/ui/Box";
import React, { useState } from "react";

import EditDeliveryAddressForm from "./EditDeliveryAddressForm";
import BillingAddressShow from "./BillingAddressShow";

const BillingBox = ({
  address_data,
  address_loading,
  address_isError,
  address_refetch,
}) => {
  const [editAddressData, setEditAddressData] = useState({
    show: false,
    data: null,
  });

  return (
    <Box boxTitle="Billing Address" fullWidth>
      {editAddressData.show ? (
        <EditDeliveryAddressForm
          data={editAddressData.data}
          setEditAddressData={setEditAddressData}
          fileType="billing"
        />
      ) : (
        <BillingAddressShow
          editAction={setEditAddressData}
          data={address_data}
          refetch={address_refetch}
          isLoading={address_loading}
          isError={address_isError}
        />
      )}
    </Box>
  );
};

export default BillingBox;
