"use client";

import ClientLayout from "@/components/Layout/ClientLayout";
import React from "react";
import Deliverypayment from "@/components/pages/delivery/ManullyAddress";
import ManullyAddress from "@/components/pages/delivery/ManullyAddress";

const Address = () => {
  return (
    <ClientLayout>
      <ManullyAddress />
    </ClientLayout>
  );
};

import { Suspense } from "react";
import Loader from "@/components/Loader/Loader";

const PageComponent = Address;
export default function SuspensePageWrapper() {
  return (
    <Suspense fallback={<Loader />}>
      <PageComponent />
    </Suspense>
  );
}
