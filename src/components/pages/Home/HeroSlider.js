import React from "react";

const HeroSlider = () => {
  return (
    <div className="col-span-12 xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12">
      <div className="box custom-box">
        <div className="swiper swiper-navigation">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src="assets/images/BC homepage.webp" alt="" />
            </div>
            <div className="swiper-slide">
              <img src="assets/images/BC homepage.webp" alt="" />
            </div>
            <div className="swiper-slide">
              <img src="assets/images/BC homepage.webp" alt="" />
            </div>
          </div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
