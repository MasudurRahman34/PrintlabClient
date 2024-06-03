import React, { memo, useEffect, useState } from "react";
import DurationTimer from "./DurationTimer";
import { useQuery } from "@tanstack/react-query";

import { getProductDeliveryServicesQuery } from "@/resolvers/query";

import Loader from "@/components/Loader/Loader";

const DeliveryChoose = ({
  product_id,
  selectedDelivery,
  setSelectedDelivery,
}) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["product-delivery-services", product_id],
    queryFn: () => getProductDeliveryServicesQuery({ product_id }),
    enabled: !!product_id,
  });

  const handleSelectDelivery = (option) => {
    setSelectedDelivery({
      id: option.id,
      service_id: option.service_id,
      cost: option.cost,
      duration: option.duration,
    });
  };

  useEffect(() => {
    if (data?.data.length > 0) {
      setSelectedDelivery({
        id: data.data[0].id,
        service_id: data.data[0].service_id,
        cost: data.data[0].cost,
        duration: data.data[0].duration,
      });
    }
  }, [data]);

  if (isLoading) return <Loader />;

  if (data?.data.length <= 0) {
    return (
      <div className="relative z-10 w-full px-3 py-3 text-sm text-center border-2 bg-primary-light border-primary">
        <p className="font-bold">
          No delivery services available for this product.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center justify-between w-full pb-3">
        <h1 className="font-bold text-typography">Choose Delivery</h1>
      </div>
      <div className="flex items-stretch justify-between gap-3 pb-8">
        {selectedDelivery &&
          data?.data.length > 0 &&
          data?.data.map((option) => (
            <div
              key={option.id}
              className={`flex flex-col items-center w-full max-w-sm p-2 transition-colors duration-200 border-2 rounded-sm cursor-pointer hover:bg-primary-light hover:border-primary ${
                selectedDelivery.service_id === option.service_id
                  ? " square_after_effect"
                  : ""
              }`}
              onClick={() => handleSelectDelivery(option)}
            >
              <strong>{option.service.title}</strong>
              <strong>£{option.cost}</strong>
            </div>
          ))}
      </div>
      <DurationTimer days={selectedDelivery?.duration} />
    </>
  );
};

export default memo(DeliveryChoose);
