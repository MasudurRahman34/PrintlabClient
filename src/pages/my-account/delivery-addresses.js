import AccountLayout from "@/components/Layout/AccountLayout";
import ClientLayout from "@/components/Layout/ClientLayout";
import React from "react";

const DeliveryAddresses = () => {
  return (
    <ClientLayout>
      <AccountLayout breadcrumb="Delivery Addresses">
        <section className="py-4 ">
          <div className="w-full px-3 py-5 text-sm text-center border-2 rounded-md border-primary bg-primary-light text-secondgraphy">
            <p>You don't have any address saved in your account.</p>
          </div>
        </section>
      </AccountLayout>
    </ClientLayout>
  );
};

export default DeliveryAddresses;
