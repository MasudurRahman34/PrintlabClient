import ClientLayout from "@/components/Layout/ClientLayout";
import Dashboard from "@/components/dashboard/Dashboard";
import { useState } from "react";

const dashboard = () => {
  return (
    <ClientLayout>
      <>
        <Dashboard></Dashboard>
      </>
    </ClientLayout>
  );
};

export default dashboard;
