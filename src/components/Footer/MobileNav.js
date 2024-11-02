import React, { useState } from "react";
import { IoChatboxEllipses } from "react-icons/io5";
import { BsFillBasketFill } from "react-icons/bs";
import Link from "next/link";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const MobileNav = ({
  addToCard,
  isPending,
  matched,
  price,
  cart_items,
  max_quantity,
  quantity,
  selectedDelivery,
  min_quantity,
}) => {
  return (
    <div
      className="fixed bottom-0 left-0 flex w-full py-1 bg-white border-t-2 shadow-inner h-14 md:hidden "
      style={{ zIndex: 9999 }}
    >
      <div className="flex items-center justify-center h-full px-3 text-sm font-bold bg-white shadow-inner cursor-pointer">
        {price}
      </div>
      <div className="flex-1 rounded-md bg-primary">
        <button
          className="w-full h-full font-bold cursor-pointer disabled:opacity-50"
          onClick={addToCard}
          disabled={
            isPending ||
            !matched ||
            matched?.price <= 0 ||
            !selectedDelivery ||
            max_quantity < quantity ||
            quantity < min_quantity
          }
        >
          {isPending ? (
            <AiOutlineLoading3Quarters className="text-2xl w-full text-[#AAAAAA] animate-spin flex items-center" />
          ) : (
            "Add to Basket"
          )}
        </button>
      </div>
      <div className="relative w-16 bg-white">
        {cart_items?.length > 0 && (
          <div className="absolute flex items-center justify-center w-6 h-6 text-sm font-bold text-white bg-red-500 rounded-full right-2 top-1 ">
            {cart_items?.length}
          </div>
        )}

        <Link
          href="/basket"
          className="flex items-center justify-center h-full rounded-md shadow-inner cursor-pointer"
        >
          <BsFillBasketFill className="w-7 h-7 text-secondgraphy" />
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;
