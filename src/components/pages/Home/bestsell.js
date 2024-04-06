import ClientLayout from "@/components/Layout/ClientLayout";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./css/styles.css"
import { Pagination } from "swiper/modules";
import pen1 from "../../../../public/assets/pen1.jpg";
import pen2 from "../../../../public/assets/pen2.jpg";
const bestsell = () => {
  return (
    <>
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
                      watchSlidesProgress={true}
                      navigation={true}
                      slidesPerView={4}
                      className="mySwiper"
                    >
                      <SwiperSlide className="px-2">
                        <div class="overflow-hidden border-md border-b-2 border-solid border-[#D3D5D5] bg-[#FAFFFF]  !shadow-lg h-[250px] md:h-[300px]  lg:h-[335px]  w-full">
                          <div className=" w-full">
                            <Image
                              className=" object-cover w-full h-[200px] md:h-[250px] lg:h-[290px] bg-[#D5CAC6] border "
                              src={pen2}
                              class="card-img-top"
                              alt="img"
                              height={500}
                              width={500}
                            />
                          </div>
                          <p className="text-center pt-3 text-base overflow-hidden text-[#4D5662] hover:underline">
                            Pens
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="px-2">
                        <div class="overflow-hidden border-md border-b-2 border-solid border-[#D3D5D5] bg-[#FAFFFF]  !shadow-lg h-[250px] md:h-[300px]  lg:h-[335px]  w-full">
                          <div className=" w-full">
                            <Image
                              className=" object-cover w-full h-[200px] md:h-[250px] lg:h-[290px] bg-[#D5CAC6] border "
                              src={pen1}
                              class="card-img-top"
                              alt="img"
                              height={260}
                              width={254}
                            />
                          </div>
                          <p className="text-center pt-3 text-base overflow-hidden text-[#4D5662] hover:underline">
                            Pens
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="px-2">
                        <div class="overflow-hidden border-md border-b-2 border-solid border-[#D3D5D5] bg-[#FAFFFF]  !shadow-lg h-[250px] md:h-[300px]  lg:h-[335px]  w-full">
                          <div className=" w-full">
                            <Image
                              className=" object-cover w-full h-[200px] md:h-[250px] lg:h-[290px] bg-[#D5CAC6] border "
                              src={pen1}
                              class="card-img-top"
                              alt="img"
                              height={260}
                              width={254}
                            />
                          </div>
                          <p className="text-center pt-3 text-base overflow-hidden text-[#4D5662] hover:underline">
                            Pens
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="px-2">
                        <div class="overflow-hidden border-md border-b-2 border-solid border-[#D3D5D5] bg-[#FAFFFF]  !shadow-lg h-[250px] md:h-[300px]  lg:h-[335px]  w-full">
                          <div className=" w-full">
                            <Image
                              className=" object-cover w-full h-[200px] md:h-[250px] lg:h-[290px] bg-[#D5CAC6] border "
                              src={pen2}
                              class="card-img-top"
                              alt="img"
                              height={260}
                              width={254}
                            />
                          </div>
                          <p className="text-center pt-3 text-base overflow-hidden text-[#4D5662] hover:underline">
                            Pens
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="px-2">
                        <div class="overflow-hidden border-md border-b-2 border-solid border-[#D3D5D5] bg-[#FAFFFF]  !shadow-lg h-[250px] md:h-[300px]  lg:h-[335px]  w-full">
                          <div className=" w-full">
                            <Image
                              className=" object-cover w-full h-[200px] md:h-[250px] lg:h-[290px] bg-[#D5CAC6] border "
                              src={pen1}
                              class="card-img-top"
                              alt="img"
                              height={260}
                              width={254}
                            />
                          </div>
                          <p className="text-center pt-3 text-base overflow-hidden text-[#4D5662] hover:underline">
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
    </>
  );
};

export default bestsell;
