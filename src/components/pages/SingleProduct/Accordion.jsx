import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Loader from "@/components/Loader/Loader";
const SinglePageAccordion = ({ data ,isLoading}) => {
  if(isLoading){
    <Loader/>
  }
  
  return (
   
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="font-bold text-secondgraphy">
          Artwork Template
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex gap-6 ">
            <a
              href={data?.artwork?.artwork_template_eps_fileUrl}
              className="py-2 cursor-pointer "
              download={true}
            >
              <img
                className="w-[50px] h-[60px] border-primary "
                src="https://i.ibb.co/cNxs3N0/esp.png"
              />
              <p className="text-center mt-1 text-sm font-bold">ESP</p>
            </a>
            <a
              href={data?.artwork?.artwork_template_pdf_fileUrl}
              className="py-2 cursor-pointer "
              download={true}
            >
              <img
                className="w-[50px] h-[60px] border-primary "
                src="https://i.ibb.co/ns5N0hq/pdf.png bg-white"
              />
              <p className="text-center mt-1 text-sm font-bold">PDF</p>
            </a>
            <a
              href={data?.artwork?.artwork_template_inDesign_fileUrl}
              className="py-2 cursor-pointer "
              download={true}
            >
              <img
                className="w-[50px] h-[60px] border-primary "
                src="https://i.ibb.co/FDhshV0/indd.png"
              />
              <p className="text-center mt-1 text-sm font-bold">INDD</p>
            </a>
          </div>
        </AccordionContent>
      </AccordionItem>

      {data?.artwork?.artwork_guide && (
        <AccordionItem value="item-2">
          <AccordionTrigger className="font-bold text-secondgraphy">
            Artwork Guide
          </AccordionTrigger>
          <AccordionContent>
            <div
              dangerouslySetInnerHTML={{ __html: data?.artwork?.artwork_guide }}
            />
          </AccordionContent>
        </AccordionItem>
      )}
    </Accordion>
  );
};

export default SinglePageAccordion;
