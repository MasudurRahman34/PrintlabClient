const packs_banner = () => {
  return (
    <div
      className="w-full h-[440px] bg-cover bg-no-repeat static opacity-55 "
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="container flex mx-auto">
        <div className=" hidden md:block md:w-1/2"></div>
        <div className="md:w-1/2">
          <div>
            <div className="cards-content">
              <h5 className="text-xl font-bold text-[#1B4353] mt-5 mb-2">Print Sample Packs</h5>
              <h6 className="text-[18px]">Print Sample Packs Discover our bestselling products</h6>
              <p>
                Our Sample packs are bursting with our bestselling proudcts from
                business cards, to folded leaflets and presentation folders to
                banners.order one today to feel the quality of our products for
                yourself, for free!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default packs_banner;
