import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import Nav from "./Nav";
import { SlBasketLoaded } from "react-icons/sl";
import { MdAccountTree } from "react-icons/md";

const BottomHeader = () => {
  return (
    <section
      className="flex items-center justify-center h-16 px-5 text-secondgraphy bg-primary"
      style={{
        position: "relative",
      }}
    >
      <div className="flex items-center justify-between w-full gap-3 md:justify-center">
        <div className="md:hidden">
          <CiMenuFries className="w-5 h-8 text-xl font-bold" />
        </div>
        <Nav />
        <div className="flex items-center justify-center md:hidden">
          <div>
            <MdAccountTree className="w-5 h-8 text-xl font-bold" />
          </div>
          <div>
            <SlBasketLoaded className="w-5 h-8 text-xl font-bold" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomHeader;
