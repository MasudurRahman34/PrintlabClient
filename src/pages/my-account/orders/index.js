import AccountLayout from "@/components/Layout/AccountLayout";
import ClientLayout from "@/components/Layout/ClientLayout";

import React from "react";

import OrderComponent from "@/components/my-account/Order";

const Orders = () => {
  return (
    <ClientLayout>
      <AccountLayout breadcrumb="Orders">
        <OrderComponent />
      </AccountLayout>
    </ClientLayout>
  );
};

export default Orders;
