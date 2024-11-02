import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import React, { useState, useEffect } from "react";

const SingleAccordion = ({ title, isInitiallyExpanded = false, children }) => {
  const [isExpanded, setIsExpanded] = useState(isInitiallyExpanded);

  useEffect(() => {
    // Initialize state based on the isInitiallyExpanded prop
    setIsExpanded(isInitiallyExpanded);
  }, [isInitiallyExpanded]);

  const toggleAccordion = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <div className="accordion-item">
      <div
        className="flex items-center justify-between px-4 py-2 mb-3 font-bold text-white rounded-md cursor-pointer accordion-header bg-secondgraphy"
        onClick={toggleAccordion}
      >
        <span>{title}</span>
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-secondgraphy">
          {isExpanded ? (
            <MinusIcon className="w-6 h-6 overflow-hidden font-bold rounded-full  text-secondgraphy shrink-0" />
          ) : (
            <PlusIcon className="w-6 h-6 overflow-hidden font-bold rounded-full text-secondgraphy shrink-0 " />
          )}
        </span>
      </div>
      {isExpanded && (
        <div className="pb-2 border-b accordion-content">{children}</div>
      )}
    </div>
  );
};

export default SingleAccordion;
