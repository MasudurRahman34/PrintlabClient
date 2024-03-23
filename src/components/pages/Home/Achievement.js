import React from "react";
import { TbTruckDelivery, TbCurrencyTaka } from "react-icons/tb";
import { GoTrophy } from "react-icons/go";
import { GiTrophyCup } from "react-icons/gi";
import { BsBoxSeamFill } from "react-icons/bs";
import { GiTreeGrowth } from "react-icons/gi";

const categories = [
  {
    id: 1,
    name: "Sign Printing",
    image: "assets/images/SIGN PRINTING.webp",
  },
  {
    id: 2,
    name: "Leaflet Printing",
    image: "assets/images/LEAFLET PRINTING.webp",
  },
  {
    id: 3,
    name: "Booklet Printing",
    image: "assets/images/BOOKLET PRINTING.webp",
  },
];

const Achievement = () => {
  return (
    <section className="py-10">
      <div className="container flex items-center justify-between mx-auto overflow-x-auto ">
        <div className="flex items-center space-x-2">
          <span className="flex items-center justify-center w-12 h-12 bg-gray-300 rounded-full">
            <TbTruckDelivery className="text-green-700 w-7 h-7 " />
          </span>
          <p className="max-w-[130px]">Fast, Reliable Delivery</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="flex items-center justify-center w-12 h-12 bg-gray-300 rounded-full">
            <TbCurrencyTaka className="text-green-700 w-7 h-7 " />
          </span>
          <p className="max-w-[130px]">Highly Competitive Prices</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="flex items-center justify-center w-12 h-12 bg-gray-300 rounded-full">
            <GoTrophy className="text-green-700 w-7 h-7 " />
          </span>
          <p className="max-w-[130px]">Commitment to High Quality</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="flex items-center justify-center w-12 h-12 bg-gray-300 rounded-full">
            <GiTrophyCup className="text-green-700 w-7 h-7 " />
          </span>
          <p className="max-w-[130px]">
            Tradeprint PRO for Trade Professionals
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="flex items-center justify-center w-12 h-12 bg-gray-300 rounded-full">
            <BsBoxSeamFill className="text-green-700 w-7 h-7 " />
          </span>
          <p className="max-w-[130px]">White Label Shipping</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="flex items-center justify-center w-12 h-12 bg-gray-300 rounded-full">
            <GiTreeGrowth className="text-green-700 w-7 h-7 " />
          </span>
          <p className="max-w-[130px]">A Focus on Sustainability</p>
        </div>
      </div>
      <div>
        <div className="container grid grid-cols-1 gap-5 mt-10 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex items-center justify-center bg-gray-100 rounded-lg"
            >
              <img src={category.image} alt={category.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievement;
