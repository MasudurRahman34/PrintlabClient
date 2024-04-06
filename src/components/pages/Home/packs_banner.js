import Link from "next/link";

const packs_banner = () => {
  return (
    <div
      className="w-full h-[350px] md:h-[440px] bg-cover bg-center bg-no-repeat static"
      style={{
        backgroundImage: "url(https://i.ibb.co/WFLWMZL/Background3.png)",
      }}
    >
      <div className="container flex mx-auto">
        <div className="hidden lg:block md:w-1/2"></div>
        <div className="px-10 md:w-1/2 ">
          <div className=" w-[300px]  md:w-[528px]  h-[260px] md:h-[380px] bg-white p-5 md:p-[45px] mt-8 rounded-md  ">
            <div className="cards-content">
              <h6 className=" text-[18px] md:text-[22px] font-bold text-secondgraphy mt-5 mb-2">
                Print Sample Packs
              </h6>
              <p className=" text-[14px] md:text-[18px]  font-bold text-secondgraphy mb-2 -mt-3 ">
                Discover our bestselling products
              </p>
              <p className=" text-[10px] md:text-[14px] text-typography font-medium pb-10">
                Our Sample packs are bursting with our bestselling proudcts from
                business cards, to folded leaflets and presentation folders to
                banners.order one today to feel the quality of our products for
                yourself, for free!
              </p>
              <Link
                href="/checkout"
                className="px-8 py-3 text-base font-bold text-center text-white border border-none rounded-md bg-primary hover:bg-primary-light border-primary-light"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default packs_banner;
