import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";

const HeroSlider = () => {
  return (
    <div className="hidden md:block">
      <Swiper navigation={true} modules={[Navigation]} className=" mySwiper">
        <SwiperSlide>
          <img
            src="assets/images/Large Format Banner - desktop V2.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="assets/images/Brand Refresh - HOME Banner - Editable - Carole APPROVED copy.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/images/BC homepage.webp" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
