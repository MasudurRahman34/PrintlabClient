import { formatPrice, humanReadableDate } from "@/lib/utils";
import React from "react";
import { number } from "yup";

const OrderCard = ({ fullWidth, item }) => {
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
              {humanReadableDate(item.date)}
            </span>
          </p>
          <p className="text-sm">
            Item <span className="font-semibold">{item.id}</span>
          </p>
          <p className="text-sm">
            Order Total{" "}
            <span className="font-semibold">
              {formatPrice(item.item_total)}
            </span>
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
                <h1 className="text-xl font-semibold">Ready To Print</h1>
                <p className="text-sm">
                  item <span className="font-semibold">#{item.id}</span>
                </p>
              </div>
              <div className="mb-2">
                <h1 className="text-xl font-semibold">
                  Classic Business Cards
                </h1>
                <p className="text-sm">
                  Reference{" "}
                  <span className="font-semibold"> Fatha Business Card</span>
                </p>
                <p className="text-sm">
                  Qty: 250, Paper Type: 450gsm Silk, Sides Printed: Double
                  Sided, Lamination: Both Sides (Matt), On Express Turnaround
                </p>
              </div>
              <div>
                <h1 className="font-semibold ">Just Print</h1>
                <p className="text-sm">
                  Item Total{" "}
                  <span className="font-semibold">
                    {formatPrice(item.item_total)}
                  </span>
                </p>
              </div>
            </div>
            <div className="w-full p-2 bg-white md:w-1/3">
              <div className="mb-3">
                <h1 className="font-semibold ">Delivery To</h1>
                <p className="text-sm">Omar Faruk</p>
                <p className="text-sm">
                  Printlab, 172 Commercial Road, London, 07411284290,
                  Info@Weareprintlab.Co.Uk, E1 2jy
                </p>
              </div>
              <div>
                <h1 className="font-semibold ">Delivery By</h1>
                <p className="text-sm">Thursday, 27th June 2024</p>
                <p className="text-sm">By 8pm (FREE)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
