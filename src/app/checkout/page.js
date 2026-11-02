"use client";

import usePreventForwardNavigation from "@/components/hooks/usePreventForwardNavigation";
import ClientLayout from "@/components/Layout/ClientLayout";

import ManullyAddress from "@/components/pages/delivery/ManullyAddress";
import MetaData from "@/components/ui/MetaData";
import withAuth from "@/hoc/withAuth";

const Checkout = () => {
  usePreventForwardNavigation();
  return (
    <ClientLayout>
      <MetaData title="Checkout" />
      <ManullyAddress />
    </ClientLayout>
  );
};

import { Suspense } from "react";
import Loader from "@/components/Loader/Loader";

const PageComponent = withAuth(Checkout);
export default function SuspensePageWrapper() {
  return (
    <Suspense fallback={<Loader />}>
      <PageComponent />
    </Suspense>
  );
}
