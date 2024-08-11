import AccountLayout from "@/components/Layout/AccountLayout";
import ClientLayout from "@/components/Layout/ClientLayout";
import MetaData from "@/components/ui/MetaData";
import React from "react";

const DeliveryAddresses = () => {
  return (
    <ClientLayout>
      <MetaData title="Delivery Addresses" />
      <AccountLayout breadcrumb="Delivery Addresses">
        <section className="py-4 ">
          <div className="w-full px-3 py-5 text-sm text-center border-2 rounded-md border-primary bg-primary-light text-secondgraphy">
            <p>You dont have any address saved in your account.</p>
          </div>
        </section>
      </AccountLayout>
    </ClientLayout>
  );
};

export default DeliveryAddresses;
