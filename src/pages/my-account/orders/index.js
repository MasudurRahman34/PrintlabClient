import AccountLayout from "@/components/Layout/AccountLayout";
import ClientLayout from "@/components/Layout/ClientLayout";

import React from "react";

import OrderComponent from "@/components/my-account/Order";
import MetaData from "@/components/ui/MetaData";

const Orders = () => {
  return (
    <ClientLayout>
      <MetaData title="Orders" />
      <AccountLayout breadcrumb="Orders">
        <OrderComponent />
      </AccountLayout>
    </ClientLayout>
  );
};

export default Orders;
