import React from "react";

import LabAccordion from "@/components/ui/LabAccordion";
import useCountDownTimer from "@/components/hooks/useCountdownTimer";

const JobDetails = ({ product }) => {
  const { formattedDate } = useCountDownTimer({
    days: product?.delivery_service.duration,
  });
  return (
    <div className="p-5 mt-5 checkout-details">
      <LabAccordion title="Job Details">
        <div class=" flex flex-wrap gap-5">
          <div className="w-[150px]">
            <h1 className="font-bold text-secondgraphy">Qty:</h1>
            <p>{product.quantity}</p>
          </div>
          <div className="w-[150px]">
            <h1 className="font-bold text-secondgraphy">Combination</h1>
            <p>{product.combination_string}</p>
          </div>
          <div className="w-[150px]">
            <h1 className="font-bold text-secondgraphy">SKU</h1>
            <p>{product.sku}</p>
          </div>
          {/* <div className="w-[150px]">
            <h1 className="font-bold text-secondgraphy">Printed Sides</h1>
            <p>Single Sided</p>
          </div> */}
          <div className="w-[150px]">
            <h1 className="font-bold text-secondgraphy">Delivery Service</h1>
            <p>{product.delivery_service.service.title}</p>
          </div>

          <div className="w-[150px]">
            <h1 className="font-bold text-secondgraphy">Artwork Service</h1>
            <p>{product.artwork_service.title}</p>
          </div>

          <div className="w-[150px]">
            <h1 className="font-bold text-secondgraphy">Estimated Delivery</h1>
            <p>{formattedDate}</p>
          </div>
        </div>
      </LabAccordion>
    </div>
  );
};

export default JobDetails;
