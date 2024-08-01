import AccountLayout from "@/components/Layout/AccountLayout";
import ClientLayout from "@/components/Layout/ClientLayout";
import OrderItems from "@/components/my-account/OrderItems";
import React from "react";

const Page = () => {
  return (
    <ClientLayout>
      <AccountLayout breadcrumb="Order Items">
        <OrderItems />
      </AccountLayout>
    </ClientLayout>
  );
};

export default Page;
