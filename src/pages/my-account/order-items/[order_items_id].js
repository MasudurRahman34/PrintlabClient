import AccountLayout from "@/components/Layout/AccountLayout";
import ClientLayout from "@/components/Layout/ClientLayout";
import SingleOrderItemComponent from "@/components/my-account/OrderItems/SingleOrderItems";
import MetaData from "@/components/ui/MetaData";
import React from "react";

const Page = () => {
  return (
    <ClientLayout>
      <MetaData title="Order Items" />
      <AccountLayout breadcrumb="Order Items">
        <SingleOrderItemComponent />
      </AccountLayout>
    </ClientLayout>
  );
};

export default Page;
