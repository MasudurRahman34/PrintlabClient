import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import JobDetails from "@/components/pages/Checkout/JobDetails";
import ArtworkService from "./ArtworkService";
import RefPONumber from "./Ref&PONumber";

const ProductCard = () => {
  return (
    <div className="overflow-hidden border rounded">
      <div className="flex justify-between p-4">
        <div className="flex ">
          <h5 className="text-base font-normal text-[#8F9391]">Item 01.</h5>
          <h4 className="text-base font-bold text-[#2B2B2B]">
            Custom Printed NCR Pads
          </h4>
        </div>
        <div>
          <h4 className="text-base font-bold text-[#2B2B2B]">£45.62</h4>
          <h5 className="text-base font-bold text-[#8F9391]">Ex VAT: £38.02</h5>
        </div>
      </div>
      <div className="flex justify-between pr-4 checkout-title">
        <div className="flex gap-5 px-10 py-2 rounded-r-md bg-secondgraphy">
          <p className="mt-3 text-base font-medium text-center text-white ">
            Get 1 more copies for only £6.00
          </p>
          <button className="px-8 py-3 text-base font-bold text-center text-white rounded-md bg-primary">
            Upgrate
          </button>
        </div>
        <button>
          <AiOutlineDelete className="text-2xl  text-[#AAAAAA] hover:text-[black]" />
        </button>
      </div>
      <div>
        <JobDetails />
        <ArtworkService />
        <RefPONumber />
      </div>
    </div>
  );
};

export default ProductCard;
