import React from "react";

const Banner = ({
  bgUrl,
  title,
  subTitle,
  text,
  btnText,
  btnLink,
  btnAction,
}) => {
  return (
    <div
      className="w-full h-[350px] md:h-[440px] bg-cover bg-no-repeat static"
      style={{
        backgroundImage: `url(${
          bgUrl || "https://i.ibb.co/WFLWMZL/Background3.png"
        })`,
      }}
    >
      <div className="container flex mx-auto">
        <div className="hidden lg:block md:w-1/2"></div>
        <div className="px-10 md:w-1/2 ">
          <div className=" w-[300px]  md:w-[528px]  h-[260px] md:h-[380px] bg-white p-5 md:p-[45px] mt-8 rounded-md  ">
            <div className="cards-content">
              <h6 className=" text-[18px] md:text-[22px] font-bold text-[#1B4353] mt-5 mb-2">
                {title}
              </h6>
              <p className=" text-[14px] md:text-[18px]  font-bold text-[#1B4353] mb-2 -mt-3 ">
                {subTitle}
              </p>
              <p className=" text-[10px] md:text-[14px] text-[#AAACAB] font-medium pb-10">
                {text}
              </p>
              {btnText && (
                <button
                  onClick={btnAction}
                  className="text-center w-full md:w-[60%] text-base text-white font-bold bg-[#8BBA72] hover:bg-[#C5DDB9] px-10 py-3 md:px-1 md:py-4 border-none rounded-md"
                >
                  {btnText}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
