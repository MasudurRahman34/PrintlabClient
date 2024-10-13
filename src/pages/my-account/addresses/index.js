import AccountLayout from "@/components/Layout/AccountLayout";
import ClientLayout from "@/components/Layout/ClientLayout";
import AddressPageComponent from "@/components/my-account/Addresses";
import MetaData from "@/components/ui/MetaData";
import React from "react";

const Page = () => {
  return (
    <ClientLayout>
      <MetaData title="DeliveryAddresses" />
      <AccountLayout breadcrumb="Address">
        <AddressPageComponent />
      </AccountLayout>
    </ClientLayout>
  );
};

export default Page;
