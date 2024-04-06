const designeBannar = () => {
  return (
    <div
      className="w-full  h-[400px] md:h-[500px] bg-cover bg-center  bg-no-repeat static"
      style={{
        backgroundImage: "url(https://i.ibb.co/rw33pJ9/Background2.png)",
      }}
    >
      <div className="flex custom_container">
        <div className="hidden lg:block md:w-1/2"></div>
        <div className="w-full md:px-10 md:w-1/2 ">
          <div className=" w-[300px]  md:w-[528px]  h-auto md:h-[450px] bg-white p-5 md:p-[45px] mt-8 rounded-md  ">
            <div className="cards-content">
              <h6 className=" text-[18px] md:text-[22px] font-bold text-[#1B4353] mt-5 mb-2">
                Have you tried our Online Designer?{" "}
              </h6>
              <p className=" text-[14px] md:text-[18px]  font-bold text-[#1B4353] mb-2 -mt-3 ">
                Do not let technical design software hold you back.
              </p>
              <p className=" text-[10px] md:text-[14px] text-[#AAACAB] font-medium pb-2">
                Create print-ready artwork swiftly with our Online Designer.
                This designer enables you to add your own images, text, or
                graphics and see your final printed designs come to life. We
                even provide interactive 3D models for certain products,
                allowing you to visualise and modify your final product
                effortlessly, ensuring perfection in your print.
              </p>
              <p className=" text-[10px] md:text-[14px] text-[#AAACAB] font-medium pb-5">
                Try out our Online Designer now and print like a pro.
              </p>
              <button className="text-center w-full md:w-[60%] text-base text-white font-bold bg-[#8BBA72] hover:bg-[#C5DDB9] px-10 py-3 md:px-1 md:py-4 border-none rounded-md">
                Design online today
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default designeBannar;
