import AccountLayout from "@/components/Layout/AccountLayout";
import ClientLayout from "@/components/Layout/ClientLayout";
import MetaData from "@/components/ui/MetaData";
import React from "react";

const ApiConfiguration = () => {
  return (
    <ClientLayout>
      <MetaData title="API Configuration" />
      <AccountLayout breadcrumb="API Configuration"></AccountLayout>
    </ClientLayout>
  );
};

export default ApiConfiguration;
