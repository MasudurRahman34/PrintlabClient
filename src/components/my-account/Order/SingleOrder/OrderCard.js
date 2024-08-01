import { formatPrice, humanReadableDate } from "@/lib/utils";
import React from "react";

const OrderCard = ({ fullWidth, item }) => {
  console.log(item);

  return (
    <div
      className={` mb-4 overflow-hidden border rounded  border-gray-100 ${
        fullWidth ? "w-full" : "max-w-xl w-full"
      }`}
    >
      <div className="flex items-center justify-between gap-5 px-3 py-2 bg-gray-100">
        <div className="flex flex-col justify-between w-full gap-2 md:items-center md:flex-row">
          <p className="text-sm">
            Order placed{" "}
            <span className="font-semibold">
              {humanReadableDate(item.created_at)}
            </span>
          </p>
          <p className="text-sm">
            Item <span className="font-semibold">{item.id}</span>
          </p>
          <p className="text-sm">
            Order Total{" "}
            <span className="font-semibold">{formatPrice(item.total)}</span>
          </p>
        </div>
        {/* <div>
          <button className="underline">Close</button>
        </div> */}
      </div>
      <div className="w-full p-4 ">
        <div className="w-full bg-gray-100">
          <div className="flex flex-col items-stretch justify-between w-full gap-1 md:flex-row">
            <div className="w-full bg-white md:w-2/3">
              <div className="mb-2">
                <h1 className="text-xl font-semibold">{item.status}</h1>
                <p className="text-sm">
                  Item Number{" "}
                  <span className="font-semibold">
                    #{item.order_item_number}
                  </span>
                </p>
              </div>
              <div className="mb-2">
                <h1 className="text-xl font-semibold">{item.product_title}</h1>

                <p className="text-sm">
                  Qty: {item.quantity}, Cobination: {item.combination_string},
                </p>
              </div>
              <div>
                <h1 className="font-semibold ">
                  {item?.artwork_service?.title}
                </h1>
              </div>
            </div>
            <div className="w-full p-2 bg-white md:w-1/3">
              <div className="mb-3">
                <h1 className="font-semibold ">Delivery To</h1>
                <p className="text-sm">
                  {item.shipping_address.first_name +
                    " " +
                    item.shipping_address.last_name}
                </p>
                <p className="text-sm">
                  {item.shipping_address.address},{" "}
                  {item.shipping_address.country}, {item.shipping_address.phone}
                  , {item.shipping_address.email},{" "}
                  {item.shipping_address.post_code}
                </p>
              </div>
              <div>
                <h1 className="font-semibold ">Delivery By</h1>
                <p className="text-sm">
                  {humanReadableDate(item?.delivery_date)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
