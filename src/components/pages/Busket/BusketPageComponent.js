import React from "react";
import BusketComponent from "@/components/pages/Busket";
import dynamic from "next/dynamic";

const Stepper = dynamic(() => import("@/components/pages/Checkout/Stepper"), {
  ssr: false,
});

const BusketPageComponent = ({ total_refetch }) => {
  return (
    <div className=" custom_container">
      <Stepper />
      <BusketComponent total_refetch={total_refetch} />
    </div>
  );
};

export default BusketPageComponent;
