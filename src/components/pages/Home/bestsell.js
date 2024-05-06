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
import { useQuery } from "@tanstack/react-query";
import { getAllProductsQuery } from "@/resolvers/query";

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
  const [activeTab, setActiveTab] = useState(0);

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

  const { isPending, data, isError, error } = useQuery({
    queryKey: ["best-sell"],
    queryFn: getAllProductsQuery,
  });

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
                      <button
                        type="button"
                        key={index}
                        className={` hover:text-primary  font-semibold text-base hover:underline border-b-2   py-4 px-1 inline-flex items-center gap-2    whitespace-nowrap text-defaulttextcolor   active ${
                          activeTab === filter.id
                            ? "underline text-primary border-primary"
                            : ""
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
                  {isPending || isError ? (
                    <div>
                      <div className="flex items-center justify-center">
                        <div className="w-20 h-20 border-t-2 border-b-2 rounded-full border-primary animate-spin"></div>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-defaulttextcolor">
                          {isPending ? "Loading Best Sell Products" : "error"}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <EmblaCarousel slides={data?.data} options={OPTIONS} />
                  )}
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
