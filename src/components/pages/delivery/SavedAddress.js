import React from "react";
import DeliveryItems from "./DeliveryItems";

const SavedAddress = ({
  cartItems,
  editAction,
  address_data,
  address_isError,
  address_isLoading,
  checkout_state,
  set_checkout_state,
  address_refetch,
}) => {
  return (
    <div className="p-3">
      {cartItems?.map((item) => {
        return (
          <DeliveryItems
            key={item.id}
            item={item}
            editAction={editAction}
            address_data={address_data}
            address_isError={address_isError}
            address_isLoading={address_isLoading}
            checkout_state={checkout_state}
            set_checkout_state={set_checkout_state}
            address_refetch={address_refetch}
          />
        );
      })}
    </div>
  );
};

export default SavedAddress;
