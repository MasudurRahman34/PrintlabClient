import Image from "next/image";
import busness1 from "../../../../public/assets/bisness.png";
import busness2 from "../../../../public/assets/busness2.png";

const business = () => {
  return (
    <div className="py-10 bg-white">
      <div className="container mx-auto">
        <div className="mt-5 mb-5 text-center ">
          <h4 className="mt-3 text-[30px] text-[#1B4353]  font-bold text-xl md:text-2xl lg:text-3xl  ">
            Discover print ideas and inspiration
          </h4>
          <p className="text-bass md:text-lg lg:text-xl py-2 font-semibold text-[#3F3F3F]">
            Print stories, inspiration and materials
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="w-full h-[430px] hover:shadow-md rounded-md transition-all duration-500 ease-in-out ">
            <div className="w-full h-[311px] text-center flex justify-center mx-auto ">
              <Image
                className="w-full mt-2"
                src={busness1}
                height={311}
                width={311}
                alt="busness"
              />
            </div>
            <div className="text-center">
              <p className="text-[14px] uppercase text-[#8BBA72] pt-2 pb-1">
                business tips
              </p>
              <h6 className=" text-base md:text-lg font-bold text-[#4D5662] w-full text-secondgraphy text-center mx-auto">
                Seen it cheaper? We can price match
              </h6>
            </div>
          </div>
          <div className="w-full h-[430px] hover:shadow-md rounded-md transition-all duration-500 ease-in-out ">
            <div className="w-full h-[311px] text-center flex justify-center mx-auto ">
              <Image
                className="w-full mt-2"
                src={busness2}
                height={3113}
                width={311}
                alt="busness"
              />
            </div>
            <div className="text-center">
              <p className="text-[14px] uppercase text-[#8BBA72] pt-2 pb-1">
                business tips
              </p>
              <h6 className="text-lg font-bold text-[#4D5662] w-full text-secondgraphy text-center mx-auto">
                Seen it cheaper? We can price match
              </h6>
            </div>
          </div>
          <div className="w-full h-[430px] hover:shadow-md rounded-md transition-all duration-500 ease-in-out ">
            <div className="w-full h-[311px] text-center flex justify-center mx-auto ">
              <Image
                className="w-full mt-2"
                src={busness2}
                height={3113}
                width={311}
                alt="busness"
              />
            </div>
            <div className="text-center">
              <p className="text-[14px] uppercase text-[#8BBA72] pt-2 pb-1">
                business tips
              </p>
              <h6 className="text-lg font-bold text-[#4D5662] w-full text-secondgraphy text-center mx-auto">
                Seen it cheaper? We can price match
              </h6>
            </div>
          </div>
          <div className="w-full h-[430px] hover:shadow-md rounded-md transition-all duration-500 ease-in-out ">
            <div className="w-full h-[311px] text-center flex justify-center mx-auto ">
              <Image
                className="w-full mt-2"
                src={busness2}
                height={3113}
                width={311}
                alt="busness"
              />
            </div>
            <div className="text-center">
              <p className="text-[14px] uppercase text-[#8BBA72] pt-2 pb-1">
                business tips
              </p>
              <h6 className="text-lg font-bold text-[#4D5662] w-full text-secondgraphy text-center mx-auto">
                Seen it cheaper? We can price match
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default business;
