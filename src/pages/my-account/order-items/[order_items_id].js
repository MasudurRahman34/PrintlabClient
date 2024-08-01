import AccountLayout from "@/components/Layout/AccountLayout";
import ClientLayout from "@/components/Layout/ClientLayout";
import SingleOrderItemComponent from "@/components/my-account/OrderItems/SingleOrderItems";
import React from "react";

const Page = () => {
  return (
    <ClientLayout>
      <AccountLayout breadcrumb="Order Items">
        <SingleOrderItemComponent />
      </AccountLayout>
    </ClientLayout>
  );
};

export default Page;
