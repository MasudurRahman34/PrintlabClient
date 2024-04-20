import Box from "@/components/ui/Box";
import LabAccordion from "@/components/ui/LabAccordion";
import { Button } from "@/components/ui/button";
import React from "react";
import { VscDiffAdded } from "react-icons/vsc";

const OrderSummary = () => {
  return (
    <Box boxTitle="Order Summary">
      <div className="px-5 mb-5 ">
        <div className="flex justify-between">
          <div className="order-card">
            <p className="mt-4 mb-1 text-sm font-bold text-[#2B2B2B] ">
              Sub total
            </p>
            <p className="py-1 text-sm font-bold text-[#2B2B2B] ">VAT</p>
            <p className="py-1 text-base font-bold text-[#2B2B2B]">Total:</p>
          </div>
          <div className="order-card">
            <p className="mt-4 mb-1 text-sm font-bold text-[#2B2B2B] ">33.70</p>
            <p className="py-1 text-sm font-bold text-[#2B2B2B] ">06.90</p>
            <p className="py-1 text-base font-bold text-[#2B2B2B]">40.00</p>
          </div>
        </div>
        <Button className="w-full font-bold">Proceed to Checkout</Button>
      </div>
    </Box>
  );
};

const CheckoutSummary = () => {
  return (
    <div className="w-full px-10 order-info lg:w-4/12">
      <OrderSummary />
      {/*  <div className="px-5 mb-5">
        <div className="flex justify-between gap-2 px-4 py-2 bg-primary-light ">
          <h4 className="text-sm font-bold text-[#333]">
            Redeem Tradeprint Credits
          </h4>
          <button>
            <VscDiffAdded className="text-2xl" />
          </button>
        </div>
      </div> */}
      <div className="mb-5 ">
        <div className="border rounded ">
          <LabAccordion title="Add  Discount Code">
            <div className="mt-5 mb-5">
              <form className="border rounded-md">
                <input
                  className=" border-none px-1 rounded-s-md w-[70%] py-1 "
                  type="text"
                  placeholder="Enter code"
                />
                <Button className="w-[30%] font-bold">Apply</Button>
              </form>
            </div>
          </LabAccordion>
        </div>
      </div>
      <div>
        <button className="w-full py-1 text-base font-bold text-center border rounded-md text-secondgraphy bg-primary-light border-primary hover:bg-primary">
          Countinus Shopping{" "}
        </button>
      </div>
    </div>
  );
};

export default CheckoutSummary;