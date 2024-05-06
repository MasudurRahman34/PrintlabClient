import ClientLayout from "@/components/Layout/ClientLayout";
import React from "react";
import TotalCounter from "@/components/pages/SingleProduct/TotalCounter";
import SingleProductPageComponent from "@/components/pages/SingleProduct/Page";

const Page = () => {
  return (
    <ClientLayout>
      <section className="w-full py-10 custom_container ">
        <SingleProductPageComponent />
      </section>
      <TotalCounter />
    </ClientLayout>
  );
};

export default Page;
