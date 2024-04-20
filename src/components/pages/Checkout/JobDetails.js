import React from "react";

import LabAccordion from "@/components/ui/LabAccordion";

const JobDetails = () => {
  return (
    <div className="p-5 mt-5 checkout-details">
      <LabAccordion title="Job Details">
        <div class=" flex flex-wrap gap-5">
          <div className="w-[150px]">
            <h1 className="font-bold text-secondgraphy">Qty:</h1>
            <p>100</p>
          </div>
          <div className="w-[150px]">
            <h1 className="font-bold text-secondgraphy">Paper Type</h1>
            <p>130 gsm Gloss Finish Paper</p>
          </div>
          <div className="w-[150px]">
            <h1 className="font-bold text-secondgraphy">Size</h1>
            <p>A4</p>
          </div>
          <div className="w-[150px]">
            <h1 className="font-bold text-secondgraphy">Printed Sides</h1>
            <p>Single Sided</p>
          </div>
          <div className="w-[150px]">
            <h1 className="font-bold text-secondgraphy">Finishing</h1>
            <p>None</p>
          </div>

          <div className="w-[150px]">
            <h1 className="font-bold text-secondgraphy">Artwork Service</h1>
            <p>None</p>
          </div>

          <div className="w-[150px]">
            <h1 className="font-bold text-secondgraphy">Estimated Delivery</h1>
            <p>Thursday 25th November</p>
          </div>
        </div>
      </LabAccordion>
    </div>
  );
};

export default JobDetails;
