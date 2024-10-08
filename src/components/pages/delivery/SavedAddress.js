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
      {cartItems?.length > 0 ? (
        cartItems?.map((item) => {
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
        })
      ) : (
        <div className="flex items-center justify-center text-center min-h-32">
          <h1>No items found</h1>
        </div>
      )}
    </div>
  );
};

export default SavedAddress;
