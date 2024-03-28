import ClientLayout from "@/components/Layout/ClientLayout";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import pen1 from "../../public/assets/pen1.jpg"
import pen2 from "../../public/assets/pen2.jpg"
const bestsell = () => {
  return (
    <ClientLayout>
  <div className="bg-[#F0F2F2]">
  <div className="container mx-auto py-5 ">
        <div className="col-span-12 md:col-span-6 xxl:!col-span-4">
          <div className="">
            <div className="text-center mt-8">
              <h5 className="box-title !text-[#1F4656]">
                Custom Printed Best Sellers
              </h5>
            </div>
            <div className="box-body -mt-[15px]">
              <div className="border-b  dark:border-white/10">
                <nav
                  className="-mb-0.5 flex justify-center space-x-6 rtl:space-x-reverse"
                  aria-label="Tabs"
                >
                  <button
                    type="button"
                    className="  hover:text-[#8BBA72] hover:underline border-b-2 hs-tab-active:font-semibold hs-tab-active:!border-[#8BBA73] hs-tab-active:!text-[#8BBA73] py-4 px-1 inline-flex items-center gap-2  border-transparent text-sm whitespace-nowrap text-defaulttextcolor  dark:text-[#8c9097] dark:text-white/50 active"
                    id="horizontal-alignment-item-1"
                    data-hs-tab="#horizontal-alignment-1"
                    aria-controls="horizontal-alignment-1"
                  >
                    Populer Products
                  </button>
                  <button
                    type="button"
                    className="hover:text-[#8BBA72] hover:underline hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor dark:text-[#8c9097] dark:text-white/50"
                    id="horizontal-alignment-item-2"
                    data-hs-tab="#horizontal-alignment-2"
                    aria-controls="horizontal-alignment-2"
                  >
                    Larger Format
                  </button>
                  <button
                    type="button"
                    className=" hover:text-[#8BBA72] hover:underline hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor dark:text-[#8c9097] dark:text-white/50"
                    id="horizontal-alignment-item-3"
                    data-hs-tab="#horizontal-alignment-3"
                    aria-controls="horizontal-alignment-3"
                  >
                    Business Cards
                  </button>
                  <button
                    type="button"
                    className=" hover:text-[#8BBA72] hover:underline  hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor  dark:text-[#8c9097] dark:text-white/50"
                    id="horizontal-alignment-item-3"
                    data-hs-tab="#horizontal-alignment-3"
                    aria-controls="horizontal-alignment-3"
                  >
                    Booklet/Brochres
                  </button>
                  <button
                    type="button"
                    className=" hover:text-[#8BBA72] hover:underline hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor  dark:text-[#8c9097] dark:text-white/50"
                    id="horizontal-alignment-item-3"
                    data-hs-tab="#horizontal-alignment-3"
                    aria-controls="horizontal-alignment-3"
                  >
                    Packaging
                  </button>
                  <button
                    type="button"
                    className="hover:text-[#8BBA72] hover:underline hs-tab-active:font-semibold hs-tab-active:border-primary h py-4 px-1 inline-flex items-center gap-2  border-transparent text-sm whitespace-nowrap text-defaulttextcolor  dark:text-[#8c9097] dark:text-white/50"
                    id="horizontal-alignment-item-3"
                    data-hs-tab="#horizontal-alignment-3"
                    aria-controls="horizontal-`alignment-3"
                  >
                    Design online
                  </button>
                </nav>
              </div>

              <div className="mt-3">
                <div className="mt-5">
                  <Swiper
                    slidesPerView={3}
                    spaceBetween={50}
                    navigation={true}
                    mousewheel={true}
                    keyboard={true}
                    pagination={{
                      clickable: true,
                    }}
                    breakpoints={{
                      640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                      },
                      1024: {
                        slidesPerView: 3.5,
                        spaceBetween: 50,
                      },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    <SwiperSlide className=" md:mr-0">
                      <div class="overflow-hidden border-md border-b-2 border-solid border-[#D3D5D5] bg-[#FAFFFF]  !shadow-lg h-[310px]  w-[264px] max-w-[264px] min-w-[264px]">
                        <div className=" w-full h-[260px]">
                          <Image
                            className=" object-cover w-full h-full bg-[#D5CAC6] "
                            src={pen1}
                            class="card-img-top"
                            alt="img"
                            height={260}
                            width={254}
                          />
                        </div>
                        <p className="text-center py-4 text-base overflow-hidden text-[#4D5662] hover:underline">
                          Pens
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className=" md:mr-0">
                      <div class="overflow-hidden border-md border-b-2 border-solid border-[#D3D5D5] bg-[#FAFFFF]  !shadow-lg h-[310px]  w-[264px] max-w-[264px] min-w-[264px]">
                        <div className=" w-full h-[260px]">
                          <Image
                            className=" object-cover w-full h-full bg-[#D5CAC6] "
                            src={pen2}
                            class="card-img-top"
                            alt="img"
                            height={260}
                            width={254}
                          />
                        </div>
                        <p className="text-center py-4 text-base overflow-hidden text-[#4D5662] hover:underline">
                          Pens
                        </p>
                      </div>
                    </SwiperSlide>
                
                  </Swiper>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
    </ClientLayout>
  );
};

export default bestsell;
