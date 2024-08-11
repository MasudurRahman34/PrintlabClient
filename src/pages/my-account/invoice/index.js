import AccountLayout from "@/components/Layout/AccountLayout";
import ClientLayout from "@/components/Layout/ClientLayout";

import React from "react";

import InvoiceComponent from "@/components/pages/invoice";
import MetaData from "@/components/ui/MetaData";

const Invoices = () => {
  return (
    <ClientLayout>
      <MetaData title="Invoices" />
      <AccountLayout breadcrumb="Invoices">
        <InvoiceComponent />
      </AccountLayout>
    </ClientLayout>
  );
};
export default Invoices;
