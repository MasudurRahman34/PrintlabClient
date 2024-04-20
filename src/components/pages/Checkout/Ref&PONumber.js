import LabAccordion from "@/components/ui/LabAccordion";
import { Input } from "@/components/ui/input";
import React from "react";

const RefPONumber = () => {
  return (
    <div className="p-5 mt-5 checkout-details">
      <LabAccordion title="Reference & PO Number (If Applicable)">
        <div className="flex flex-col gap-5">
          <div className="flex w-full ">
            <div className="flex-1">
              <h1 className="text-base font-bold text-secondgraphy">
                Reference
              </h1>
            </div>
            <div className="flex-1">
              <Input placeholder="(e.g. Tom's Flyers)" />
            </div>
          </div>
          <div className="flex w-full ">
            <div className="flex-1">
              <h1 className="text-base font-bold text-secondgraphy">
                Reference
              </h1>
            </div>
            <div className="flex-1">
              <Input placeholder="(e.g. Tom's Flyers)" />
            </div>
          </div>
        </div>
      </LabAccordion>
    </div>
  );
};

export default RefPONumber;
