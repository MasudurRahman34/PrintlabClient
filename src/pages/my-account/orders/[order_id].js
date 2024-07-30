import AccountLayout from "@/components/Layout/AccountLayout";
import ClientLayout from "@/components/Layout/ClientLayout";
import React from "react";

import SingleOrderComponent from "@/components/my-account/Order/SingleOrder";

const SignleOrder = () => {
  return (
    <ClientLayout>
      <AccountLayout breadcrumb="Orders">
        <SingleOrderComponent />
      </AccountLayout>
    </ClientLayout>
  );
};

export default SignleOrder;
