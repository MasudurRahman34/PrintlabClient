import ClientLayout from "@/components/Layout/ClientLayout";

import dynamic from "next/dynamic";

import ManullyAddress from "@/components/pages/delivery/ManullyAddress";

const Stepper = dynamic(() => import("@/components/pages/Checkout/Stepper"), {
  ssr: false,
});

const Checkout = () => {
  return (
    <ClientLayout>
      <div className=" custom_container">
        <Stepper activeStep={2} />
      </div>
      <ManullyAddress />
    </ClientLayout>
  );
};

export default Checkout;
