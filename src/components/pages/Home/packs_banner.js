import Link from "next/link";

const packs_banner = () => {
  return (
    <div
      className="static w-full h-full bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url(https://i.ibb.co/WFLWMZL/Background3.png)",
      }}
    >
      <div className="container py-10 mx-auto">
        <div className="flex justify-end">
          <div className="w-full h-full p-5 py-10 bg-white rounded-md md:w-1/2 text-start px-14">
            <div className="cards-content">
              <h6 className=" text-[18px] md:text-[22px] font-bold text-secondgraphy mt-5 mb-2">
                Print Sample Packs
              </h6>
              <p className=" text-[14px] md:text-[18px]  font-bold text-secondgraphy mb-2 -mt-3 ">
                Discover our bestselling products
              </p>
              <p className=" text-[10px] md:text-[14px] text-secondgraphy font-medium pb-5">
                Our Sample packs are bursting with our bestselling proudcts from
                business cards, to folded leaflets and presentation folders to
                banners.order one today to feel the quality of our products for
                yourself, for free!
              </p>
              <Link
                href="/register"
                className="px-8 py-3 text-base font-bold text-center text-white border border-none rounded-md bg-primary hover:bg-primary-light border-primary-light"
              >
                Sign up Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default packs_banner;
