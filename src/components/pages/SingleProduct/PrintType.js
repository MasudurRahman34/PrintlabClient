import React, { useState } from "react";

const printTypeOptions = [
  {
    id: 1,
    title: "Upload Artwork",
    description: "I'll upload my own artwork",
    icon: "https://www.tradeprint.co.uk/.resources/tradeprint/webresources/images/icons/upload-artwork-icon.svg",
  },
  {
    id: 2,
    title: "Design Online",
    description:
      "I’ll design it myself using your online drag & drop designer.",
    icon: "https://www.tradeprint.co.uk/.resources/tradeprint/webresources/images/icons/upload-artwork-icon.svg",
  },
  {
    id: 3,
    title: "Reprint",
    description: "I’ll use one of your designers please",
    icon: "https://www.tradeprint.co.uk/.resources/tradeprint/webresources/images/icons/upload-artwork-icon.svg",
  },
];

const PrintType = () => {
  const [selectedPrintType, setSelectedPrintType] = useState(
    printTypeOptions[0].id
  );
  return (
    <div className="my-5 border-t ">
      <div className="flex flex-wrap items-stretch justify-center gap-3 ">
        {printTypeOptions.map((item, index) => (
          <div
            key={index}
            className={`relative mt-14 text-typography hover:bg-primary-light hover:border-primary w-full max-w-[10.5rem] min-w-[10rem] border rounded-sm p-3 ${
              selectedPrintType === item.id
                ? "border-primary"
                : "border-gray-200"
            }`}
            onClick={() => setSelectedPrintType(item.id)}
          >
            <div className="absolute top-[-50%] left-[50%] translate-x-[-50%] translate-y-[75%] flex items-center justify-center rounded-full w-14 h-14 bg-secondgraphy">
              <img src={item.icon} alt="illustration" />
            </div>
            <p className="pt-8 text-center">
              <strong className="font-bold ">{item.title}</strong>
            </p>
            <p className="text-sm ">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrintType;
