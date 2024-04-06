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
    icon: <TbTruckDelivery className="text-secondgraphy w-7 h-7 " />,
  },
  {
    id: 2,
    name: "Highly Competitive Prices",
    icon: <TbCurrencyTaka className="text-secondgraphy w-7 h-7 " />,
  },
  {
    id: 3,
    name: "Commitment to High Quality",
    icon: <GoTrophy className="text-secondgraphy w-7 h-7 " />,
  },
  {
    id: 4,
    name: "Tradeprint PRO for Trade Professionals",
    icon: <GiTrophyCup className="text-secondgraphy w-7 h-7 " />,
  },
  {
    id: 5,
    name: "White Label Shipping",
    icon: <BsBoxSeamFill className="text-secondgraphy w-7 h-7 " />,
  },
  {
    id: 6,
    name: "A Focus on Sustainability",
    icon: <GiTreeGrowth className="text-secondgraphy w-7 h-7 " />,
  },
];

const Commitment = () => {
  return (
    <div className="py-5">
      <div className="flex items-center justify-between overflow-x-auto ">
        {commitment.map((item, index) => (
          <div className="flex items-center space-x-2" key={index}>
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-primary">
              {item.icon}
            </span>
            <p className="max-w-[140px] text-sm">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Commitment;
