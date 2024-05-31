import React, { useState } from "react";
import DurationTimer from "./DurationTimer";

import { getProductDeliveryServicesQuery } from "@/resolvers/query";
import { useQuery } from "@tanstack/react-query";

const deliveryOptions = [
  { id: 1, name: "Saver", price: "£0.00" },
  { id: 2, name: "Standard", price: "£0.00" },
  { id: 3, name: "Express", price: "£0.00" },
  { id: 4, name: "Same Day", price: "£0.00" },
];

const DeliveryChoose = ({ product_id }) => {
  const [selectedDelivery, setSelectedDelivery] = useState(
    deliveryOptions[0].name
  );
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["delivery-services"],
    queryFn: () => getProductDeliveryServicesQuery({ product_id }),
    enabled: !!product_id,
  });

  console.log(data, isLoading);

  return (
    <>
      <div className="flex items-center justify-between w-full pb-3">
        <h1 className="font-bold text-typography">Choose Delivery</h1>
      </div>
      <div className="flex items-stretch justify-between gap-3 pb-8">
        {deliveryOptions.map((option) => (
          <div
            key={option.id}
            className={`flex flex-col items-center w-full max-w-sm p-2 transition-colors duration-200 border-2 rounded-sm cursor-pointer hover:bg-primary-light hover:border-primary ${
              selectedDelivery === option.name ? " square_after_effect" : ""
            }`}
            onClick={() => setSelectedDelivery(option.name)}
          >
            <span>{option.name}</span>
            <strong>{option.price}</strong>
          </div>
        ))}
      </div>
      <DurationTimer days={7} />
    </>
  );
};

export default DeliveryChoose;
