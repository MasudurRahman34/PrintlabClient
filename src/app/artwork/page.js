"use client";

import ClientLayout from "@/components/Layout/ClientLayout";

import UploadArtwork from "@/components/pages/Artwork";
import MetaData from "@/components/ui/MetaData";
import withAuth from "@/hoc/withAuth";

const Artwork = () => {
  return (
    <ClientLayout>
      <MetaData title="Artwork" />
      <UploadArtwork />
    </ClientLayout>
  );
};

import { Suspense } from "react";
import Loader from "@/components/Loader/Loader";

const PageComponent = withAuth(Artwork);
export default function SuspensePageWrapper() {
  return (
    <Suspense fallback={<Loader />}>
      <PageComponent />
    </Suspense>
  );
}
