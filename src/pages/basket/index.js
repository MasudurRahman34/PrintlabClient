import ClientLayout from "@/components/Layout/ClientLayout";

import dynamic from "next/dynamic";
import BusketComponent from "@/components/pages/Busket";

const Stepper = dynamic(() => import("@/components/pages/Checkout/Stepper"), {
  ssr: false,
});

const Checkout = () => {
  return (
    <ClientLayout>
      <div className=" custom_container">
        <Stepper />
        <BusketComponent />
      </div>
    </ClientLayout>
  );
};

export default Checkout;
