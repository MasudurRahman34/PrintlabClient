import React from "react";
import DeliveryItems from "./DeliveryItems";

const SavedAddress = ({ cartItems }) => {
  return (
    <div className="p-3">
      {cartItems?.map((item) => {
        return <DeliveryItems key={item.id} item={item} />;
      })}
    </div>
  );
};

export default SavedAddress;
