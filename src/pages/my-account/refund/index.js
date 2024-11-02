import AccountLayout from "@/components/Layout/AccountLayout";
import ClientLayout from "@/components/Layout/ClientLayout";
import RefundPageComponent from "@/components/pages/refund/RefundPageComponent";
import MetaData from "@/components/ui/MetaData";
import React from "react";

const index = () => {
  return (
    <ClientLayout>
      <MetaData title="Refund" />
      <AccountLayout breadcrumb="Refunds">
        <RefundPageComponent />
      </AccountLayout>
    </ClientLayout>
  );
};

export default index;
