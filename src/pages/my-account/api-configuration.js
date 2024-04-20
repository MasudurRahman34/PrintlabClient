import AccountLayout from "@/components/Layout/AccountLayout";
import ClientLayout from "@/components/Layout/ClientLayout";
import React from "react";

const ApiConfiguration = () => {
  return (
    <ClientLayout>
      <AccountLayout breadcrumb="API Configuration"></AccountLayout>
    </ClientLayout>
  );
};

export default ApiConfiguration;
