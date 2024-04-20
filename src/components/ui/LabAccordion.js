import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const LabAccordion = ({ title, children, triggerStyle = "" }) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger
          className={cn(
            "flex justify-between text-center bg-[#F0F2F2] px-2 py-3 rounded-md",
            triggerStyle
          )}
        >
          <h4 className="text-base font-bold text-secondgraphy">{title}</h4>
        </AccordionTrigger>

        <AccordionContent className="px-5 py-2">{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default LabAccordion;
