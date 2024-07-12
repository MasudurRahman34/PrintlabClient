import React from "react";
import DeliveryItems from "./DeliveryItems";

const SavedAddress = ({ cartItems, editAction }) => {
  return (
    <div className="p-3">
      {cartItems?.map((item) => {
        return (
          <DeliveryItems key={item.id} item={item} editAction={editAction} />
        );
      })}
    </div>
  );
};

export default SavedAddress;
