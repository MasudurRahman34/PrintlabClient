import ClientLayout from "@/components/Layout/ClientLayout";
import PaymentPageComponent from "@/components/pages/Payment";
import MetaData from "@/components/ui/MetaData";
import React from "react";

const index = () => {
  return (
    <ClientLayout>
      <MetaData title="Payment" />
      <PaymentPageComponent />
    </ClientLayout>
  );
};

export default index;
