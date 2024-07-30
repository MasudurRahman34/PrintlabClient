import Box from "@/components/ui/Box";
import React, { useState } from "react";

import EditDeliveryAddressForm from "./EditDeliveryAddressForm";
import BillingAddressShow from "./BillingAddressShow";

const BillingBox = () => {
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
        <BillingAddressShow editAction={setEditAddressData} />
      )}
    </Box>
  );
};

export default BillingBox;
