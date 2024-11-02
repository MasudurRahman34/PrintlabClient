import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import { getHeroBannerQuery } from "@/resolvers/query";
import Loader from "@/components/Loader/Loader";

const HeroSlider = () => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["heroSlider"],
    queryFn: getHeroBannerQuery,
  });

  return (
    <div className="">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <div>Error</div>
        ) : isSuccess && data?.data.length > 0 ? (
          data?.data.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.imageUrl} alt={item.title} className="min-h-52" />
            </SwiperSlide>
          ))
        ) : null}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
