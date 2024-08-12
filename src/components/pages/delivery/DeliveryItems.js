import React, { useEffect, useMemo, useState } from "react";
import NewAddressForm from "./NewAddressForm";

import Loader from "@/components/Loader/Loader";
import { getDateAfterDays, humanReadableDate } from "@/lib/utils";

const DeliveryItems = ({
  item,
  editAction,
  address_data,
  address_isLoading,
  address_isError,

  checkout_state,
  set_checkout_state,
  address_refetch,
}) => {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [showNewAddressForm, setShowNewAddressForm] = useState(false);

  const selectedAddressMemo = useMemo(() => {
    return address_data?.find((item) => item.id.toString() === selectedAddress);
  }, [selectedAddress, address_data]);

  const handleChange = (e) => {
    setSelectedAddress(e.target.value);
    set_checkout_state((prev) => {
      return {
        ...prev,
        shipping_address: prev.shipping_address.map((insideItem) => {
          if (insideItem.cart_id === item.id) {
            return {
              ...insideItem,
              shipment_id: Number(e.target.value),
            };
          } else {
            return insideItem;
          }
        }),
      };
    });
  };

  useEffect(() => {
    if (address_data && address_data.length > 0) {
      const defaultAddress = address_data.find(
        (address) => address.is_default === 1
      );

      if (defaultAddress) {
        setSelectedAddress(defaultAddress.id.toString());
      } else {
        setSelectedAddress(address_data[0].id.toString());
      }
    }
  }, [address_data]);

  return (
    <div className="mb-4">
      {showNewAddressForm && (
        <NewAddressForm
          address_type="shipping"
          setShowNewAddressForm={setShowNewAddressForm}
          refetch={address_refetch}
        />
      )}
      <div>
        <div>
          <p className="text-sm md:text-base">
            delivery by{" "}
            <span className="font-semibold text-secondgraphy">
              {humanReadableDate(
                getDateAfterDays(item.delivery_service.duration)
              )}
            </span>{" "}
            <br /> Qty: {item.quantity}, Combination String:{" "}
            {item.combination_string}
          </p>
        </div>

        {address_isLoading ? (
          <Loader />
        ) : !address_data ? (
          <div className="px-3 py-2 rounded-sm bg-primary">
            <h1 className="text-sm font-bold text-secondgraphy md:text-base">
              You Do not have any address saved. Please add a new address
            </h1>
          </div>
        ) : (
          <div>
            <h1 className="text-sm font-bold text-secondgraphy md:text-base">
              Select Existing Address*
            </h1>
            <div>
              <select
                name="address"
                id="address"
                className="w-full px-3 py-2 text-sm border rounded-md border-secondgraphy focus:outline-none focus:border-primary md:text-base"
                onChange={handleChange}
                value={selectedAddress}
              >
                {address_data &&
                  address_data.map((item, index) => (
                    <option key={index} value={item.id}>
                      {item.address}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        )}
        {!address_isLoading ? (
          <div className="flex items-center justify-end gap-4 mt-2">
            {address_data ? (
              <button
                className="px-4 py-2 mt-2 text-sm border rounded-md border-secondgraphy hover:text-white hover:bg-secondgraphy md:text-base"
                onClick={() =>
                  editAction((prev) => {
                    return {
                      show: true,
                      data: selectedAddressMemo,
                    };
                  })
                }
              >
                Edit
              </button>
            ) : null}
            <button
              className="px-4 py-2 mt-2 text-sm border rounded-md border-secondgraphy hover:text-white hover:bg-secondgraphy md:text-base"
              onClick={() => setShowNewAddressForm(true)}
            >
              Add New Address
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default DeliveryItems;
