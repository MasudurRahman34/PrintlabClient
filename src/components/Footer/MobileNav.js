import React, { useState } from "react";
import { IoChatboxEllipses } from "react-icons/io5";
import { BsFillBasketFill } from "react-icons/bs";
import Link from "next/link";

const MobileNav = () => {
  return (
    <div
      className="fixed bottom-0 left-0 flex w-full bg-white border-t-2 shadow-inner h-14 md:hidden border-secondgraphy"
      style={{ zIndex: 9999 }}
    >
      <div className="flex items-center justify-center w-16 h-full bg-white shadow-inner cursor-pointer">
        <IoChatboxEllipses className="w-7 h-7 text-secondgraphy" />
      </div>
      <div className="flex-1 rounded-md bg-primary">
        <button className="w-full h-full font-bold cursor-pointer">
          Place order
        </button>
      </div>
      <Link
        href="/basket"
        className="flex items-center justify-center w-16 h-full bg-white rounded-md shadow-inner cursor-pointer"
      >
        <BsFillBasketFill className="w-7 h-7 text-secondgraphy" />
      </Link>
    </div>
  );
};

export default MobileNav;
