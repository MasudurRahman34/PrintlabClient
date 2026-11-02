"use client";

import ClientLayout from "@/components/Layout/ClientLayout";
import BusketPageComponent from "@/components/pages/Busket/BusketPageComponent";
import MetaData from "@/components/ui/MetaData";

const Checkout = () => {
  return (
    <ClientLayout>
      <MetaData title="Basket" />
      <BusketPageComponent />
    </ClientLayout>
  );
};

import { Suspense } from "react";
import Loader from "@/components/Loader/Loader";

const PageComponent = Checkout;
export default function SuspensePageWrapper() {
  return (
    <Suspense fallback={<Loader />}>
      <PageComponent />
    </Suspense>
  );
}
