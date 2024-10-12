import Image from "next/image";
import React from "react";
import TopCaegoryList from "./TopCaegoryList";

const TopCategories = () => {
  return (
    <div className="py-10 bg-white">
      <div className="mx-auto customep">
        <div className="mt-5 mb-5 text-center ">
          <h4 className="mt-3 text-[30px] text-[#1B4353]  font-bold text-xl md:text-2xl lg:text-3xl  ">
            TOP CATEGORIES
          </h4>
          <p className="text-bass md:text-lg lg:text-xl py-2 font-semibold text-[#3F3F3F]">
            Print stories, inspiration and materials
          </p>
        </div>
        <TopCaegoryList />
      </div>
    </div>
  );
};

export default TopCategories;
