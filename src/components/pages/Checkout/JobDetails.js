import React from "react";

import LabAccordion from "@/components/ui/LabAccordion";
import useCountDownTimer from "@/components/hooks/useCountdownTimer";
import SingleAccordion from "./SingleAccordion";
import ArtworkService from "./ArtworkService";

const JobDetails = ({ product }) => {
  const { formattedDate } = useCountDownTimer({
    days: product?.delivery_service.duration,
  });
  return (
    <div className="flex-1 p-5 checkout-details">
      <SingleAccordion title={"Job Details"} isInitiallyExpanded={true}>
        <>
          <div class=" flex flex-wrap gap-5 text-sm md:text-base">
            <div className="w-[120px] lg:w-[150px]">
              <h1 className="font-bold text-secondgraphy">Qty:</h1>
              <p>{product.quantity}</p>
            </div>
            <div className="w-[120px] lg:w-[150px]">
              <h1 className="font-bold text-secondgraphy">Combination</h1>
              <p>{product.combination_string}</p>
            </div>
            <div className="w-[120px] lg:w-[150px]">
              <h1 className="font-bold text-secondgraphy">SKU</h1>
              <p>{product.sku}</p>
            </div>
            {/* <div className="w-[120px] lg:w-[150px]">
            <h1 className="font-bold text-secondgraphy">Printed Sides</h1>
            <p>Single Sided</p>
          </div> */}
            <div className="w-[120px] lg:w-[150px]">
              <h1 className="font-bold text-secondgraphy">Delivery Service</h1>
              <p>{product.delivery_service.service.title}</p>
            </div>

            <div className="w-[120px] lg:w-[150px]">
              <h1 className="font-bold text-secondgraphy">Artwork Service</h1>
              <p>{product.artwork_service.title}</p>
            </div>

            <div className="w-[120px] lg:w-[150px]">
              <h1 className="font-bold text-secondgraphy">
                Estimated Delivery
              </h1>
              <p>{formattedDate}</p>
            </div>
          </div>
        </>
        <ArtworkService product={product} />
      </SingleAccordion>
    </div>
  );
};

export default JobDetails;
