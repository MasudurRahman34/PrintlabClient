import ClientLayout from "@/components/Layout/ClientLayout";
import Deliverypayment from "@/components/dashboard/Deliverypayment";
import MetaData from "@/components/ui/MetaData";
import React from "react";

const Delivery = () => {
  return (
    <ClientLayout>
      <MetaData title="Delivery & Payment" />
      <Deliverypayment />
    </ClientLayout>
  );
};

export default Delivery;
