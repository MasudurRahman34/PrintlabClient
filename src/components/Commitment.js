import React from "react";
import { TbTruckDelivery, TbCurrencyTaka } from "react-icons/tb";
import { GoTrophy } from "react-icons/go";
import { GiTrophyCup } from "react-icons/gi";
import { BsBoxSeamFill } from "react-icons/bs";
import { GiTreeGrowth } from "react-icons/gi";

const commitment = [
  {
    id: 1,
    name: "Fast, Reliable Delivery",
    icon: (
      <TbTruckDelivery className="w-4 h-4 text-secondgraphy md:w-7 md:h-7 " />
    ),
  },
  {
    id: 2,
    name: "Highly Competitive Prices",
    icon: (
      <TbCurrencyTaka className="w-4 h-4 text-secondgraphy md:w-7 md:h-7 " />
    ),
  },
  {
    id: 3,
    name: "Commitment to High Quality",
    icon: <GoTrophy className="w-4 h-4 text-secondgraphy md:w-7 md:h-7 " />,
  },
  {
    id: 4,
    name: "Tradeprint PRO for Trade Professionals",
    icon: <GiTrophyCup className="w-4 h-4 text-secondgraphy md:w-7 md:h-7 " />,
  },
  {
    id: 5,
    name: "White Label Shipping",
    icon: (
      <BsBoxSeamFill className="w-4 h-4 text-secondgraphy md:w-7 md:h-7 " />
    ),
  },
  {
    id: 6,
    name: "A Focus on Sustainability",
    icon: <GiTreeGrowth className="w-4 h-4 text-secondgraphy md:w-7 md:h-7 " />,
  },
];

const Commitment = () => {
  return (
    <div className="py-2">
      <div className="flex items-center justify-between gap-2 py-3 overflow-x-auto">
        {commitment.map((item, index) => (
          <div
            className="flex items-center space-x-3 max-w-[200px] w-full"
            key={index}
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-full md:w-10 md:h-10 lg:w-12 lg:h-12 bg-primary">
              {item.icon}
            </span>
            <p className="flex-1 text-xs md:text-sm min-w-[120px]">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Commitment;
