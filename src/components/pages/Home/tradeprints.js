import Link from "next/link";
import React from "react";

const tradeprints = () => {
  return (
    <div
      className="static w-full h-full bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url(https://i.ibb.co/WFLWMZL/Background3.png)",
      }}
    >
      <div className="container py-10 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 text-start">
          <div className="w-full h-full p-5 py-10 bg-white rounded-md text-start px-14">
            <div className="cards-content">
              <h6 className=" text-[18px] md:text-[22px] font-bold text-secondgraphy mt-5 mb-2">
                Tradeprint PRO
              </h6>
              <p className=" text-[14px] md:text-[18px]  font-bold text-secondgraphy mb-2 -mt-3 ">
                A reward scheme for Print Professionals
              </p>
              <p className=" text-[10px] md:text-[14px] text-secondgraphy font-medium pb-2">
                Get exclusive discounts & credits towards your monthly spending
                with us. The more you spend, the more you save.
              </p>
              <p className=" text-[10px] md:text-[14px] text-secondgraphy font-medium pb-5">
                To find out more, click the Sign Up button below & start saving
                today.
              </p>
              '
              <Link
                href="/signup"
                className="px-8 py-3 text-base font-bold text-center text-white border border-none rounded-md bg-primary hover:bg-primary-light border-primary-light"
              >
                Sign up Now
              </Link>
              '
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default tradeprints;
