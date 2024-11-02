import AccountLayout from "@/components/Layout/AccountLayout";
import ClientLayout from "@/components/Layout/ClientLayout";
import React from "react";

import SingleOrderComponent from "@/components/my-account/Order/SingleOrder";
import MetaData from "@/components/ui/MetaData";

const SignleOrder = () => {
  return (
    <ClientLayout>
      <MetaData title="Orders" />
      <AccountLayout breadcrumb="Orders">
        <SingleOrderComponent />
      </AccountLayout>
    </ClientLayout>
  );
};

export default SignleOrder;
