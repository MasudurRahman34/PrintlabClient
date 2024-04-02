import React from "react";

const tradeprints = () => {
  return (
    <div  className="w-full h-full bg-cover bg-no-repeat static"
    style={{backgroundImage: 'url(https://i.ibb.co/WFLWMZL/Background3.png)'}}>
      <div className="container  mx-auto py-10">
        <div className=" grid grid-cols-1 md:grid-cols-2  text-start  ">
          <div className=" w-full h-full bg-white p-5  rounded-md  text-start px-14 py-10 ">
            <div className="cards-content">
              <h6 className=" text-[18px] md:text-[22px] font-bold text-[#1B4353] mt-5 mb-2">
              Tradeprint PRO
              </h6>
              <p className=" text-[14px] md:text-[18px]  font-bold text-[#1B4353] mb-2 -mt-3 ">
              A reward scheme for Print Professionals
              </p>
              <p className=" text-[10px] md:text-[14px] text-[#AAACAB] font-medium pb-2">
              Get exclusive discounts & credits towards your monthly spending with us. The more you spend, the more you save.
              </p>
              <p className=" text-[10px] md:text-[14px] text-[#AAACAB] font-medium pb-5">
              To find out more, click the Sign Up button below & start saving today. 
              </p>
              <button className="text-center w-full md:w-[50%] text-base text-white font-bold bg-[#8BBA72] hover:bg-[#C5DDB9] py-3  px-16 md:px-1 md:py-4 border-none rounded-md">
                Order Yours Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default tradeprints;
