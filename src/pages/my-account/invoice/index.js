import AccountLayout from "@/components/Layout/AccountLayout";
import ClientLayout from "@/components/Layout/ClientLayout";

import React from "react";

import InvoiceComponent from "@/components/pages/invoice";

const Invoices = () => {
  return (
    <ClientLayout>
      <AccountLayout breadcrumb="Invoices">
        <InvoiceComponent />
      </AccountLayout>
    </ClientLayout>
  );
};
export default Invoices;
