import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const deliveryOptions = [
  { id: 1, name: "Saver", price: "£0.00" },
  { id: 2, name: "Standard", price: "£0.00" },
  { id: 3, name: "Express", price: "£0.00" },
  { id: 4, name: "Same Day", price: "£0.00" },
];

const DeliveryChoose = () => {
  const [isGridView, setIsGridView] = useState(false);
  const [selectedDelivery, setSelectedDelivery] = useState(
    deliveryOptions[0].name
  );
  return (
    <>
      <div className="flex items-center justify-between w-full pb-3">
        <h1 className="font-bold text-typography">Choose Delivery</h1>
        <div>
          <div className="flex items-center space-x-2">
            <Label htmlFor="airplane-mode">Pricing Grid View</Label>
            <Switch id="airplane-mode" />
          </div>
        </div>
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
      <div className="relative z-10 w-full px-3 py-3 text-sm text-center border-2 bg-primary-light border-primary">
        <p>Order within 08 hrs 52 mins 59 secs to receive by Tue. 9th Apr.</p>
      </div>
    </>
  );
};

export default DeliveryChoose;
