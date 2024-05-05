import ClientLayout from "@/components/Layout/ClientLayout";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Virtual, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./css/styles.css"
import EmblaCarousel from "@/components/carousel/product/EmblaCarousel";


const bestSells = [
  {
    id: 1,
    name: "Pens",
    image: "assets/images/pen1.jpg",
    href: "/pens",
  },
  {
    id: 2,
    name: "Pens",
    image: "assets/images/pen2.jpg",
    href: "/pens",
  },
  {
    id: 3,
    name: "Pens",
    image: "assets/images/pen1.jpg",
    href: "/pens",
  },
  {
    id: 4,
    name: "Pens",
    image: "assets/images/pen2.jpg",
    href: "/pens",
  },
  {
    id: 5,
    name: "Pens",
    image: "assets/images/pen1.jpg",
    href: "/pens",
  },
  {
    id: 6,
    name: "Pens",
    image: "assets/images/pen2.jpg",
    href: "/pens",
  },
  {
    id: 7,
    name: "Pens",
    image: "assets/images/pen1.jpg",
    href: "/pens",
  },
  {
    id: 8,
    name: "Pens",
    image: "assets/images/pen2.jpg",
    href: "/pens",
  },
  {
    id: 9,
    name: "Pens",
    image: "assets/images/pen1.jpg",
    href: "/pens",
  },
  {
    id: 10,
    name: "Pens",
    image: "assets/images/pen2.jpg",
    href: "/pens",
  },
  {
    id: 11,
    name: "Pens",
    image: "assets/images/pen1.jpg",
    href: "/pens",
  },
  {
    id: 12,
    name: "Pens",
    image: "assets/images/pen2.jpg",
    href: "/pens",
  },
  {
    id: 13,
    name: "Pens",
    image: "assets/images/pen1.jpg",
    href: "/pens",
  },
  {
    id: 14,
    name: "Pens",
    image: "assets/images/pen2.jpg",
    href: "/pens",
  },
  {
    id: 15,
    name: "Pens",
    image: "assets/images/pen1.jpg",
    href: "/pens",
  },
];

const BestSell = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  const [slides, setSlides] = useState(
    Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
  );

  const filterBy = [
    {
      id: 1,
      name: "Populer Products",
    },
    {
      id: 2,
      name: "Larger Format",
    },
    {
      id: 3,
      name: "Business Cards",
    },
    {
      id: 4,
      name: "Booklet/Brochres",
    },
    {
      id: 5,
      name: "Packaging",
    },
    {
      id: 6,
      name: "Design online",
    },
  ];

  const OPTIONS = { align: "start" };
  const SLIDE_COUNT = 6;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <>
      <div className="bg-[#F0F2F2]">
        <div className="py-5 custom_container ">
          <div className="col-span-12 md:col-span-6 xxl:!col-span-4">
            <div className="py-10 ">
              <div className="text-center ">
                <h5 className="mb-2 text-xl font-bold box-title text-secondgraphy md:text-2xl lg:text-3xl">
                  Custom Printed Best Sellers
                </h5>
              </div>
              <div className="box-body -mt-[15px]">
                <div className="border-b dark:border-white/10">
                  <nav
                    className="-mb-0.5 flex justify-center space-x-6 rtl:space-x-reverse overflow-x-auto"
                    aria-label="Tabs"
                  >
                    {filterBy.map((filter, index) => (
                      <button onClick={()=>setActiveTab(filter.id)}
                        type="button"
                        key={index}
                        className={`  border-b-2   pb-1 pt-4 px-1 inline-flex items-center gap-2    whitespace-nowrap text-defaulttextcolor   active ${
                          activeTab===filter.id
                            ? "text-primary border-primary"
                            : " "
                        }`}
                        id="horizontal-alignment-item-1"
                        data-hs-tab="#horizontal-alignment-1"
                        aria-controls="horizontal-alignment-1"
                      >
                        {filter.name}
                      </button>
                    ))}
                  </nav>
                </div>

                <div className="mt-3">
                  {/* <Swiper
                    modules={[Virtual, Navigation]}
                    onSwiper={setSwiperRef}
                    slidesPerView={4}
                    centeredSlides={true}
                    spaceBetween={30}
                    loop={true}
                    navigation={true}
                    virtual
                  >
                    {bestSells.map((bestSell, index) => (
                      <SwiperSlide key={index} virtualIndex={index}>
                        <Link href={bestSell.href}>
                          <div className="transition-all duration-150 border shadow-primary w-72 h-80 hover:shadow-md">
                            <div className="w-full h-[80%]">
                              <Image
                                className="object-cover w-full h-full"
                                src={pen2}
                                class="card-img-top"
                                alt="img"
                                height={500}
                                width={500}
                              />
                            </div>
                            <div className="flex h-[20%] items-center justify-center">
                              <p className="text-base font-medium text-center text-secondgraphy hover:underline hover:text-primary">
                                Pens
                              </p>
                            </div>
                          </div>
                        </Link>
                      </SwiperSlide>
                    ))}
                  </Swiper> */}
                  <EmblaCarousel slides={bestSells} options={OPTIONS} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSell;
