import Image from "next/image";
import React from "react";
import prodct1 from "../../../../../public/assets/mug1.webp";
import prodct2 from "../../../../../public/assets/mug2.webp";
import prodct3 from "../../../../../public/assets/detailspolosy.png";
const productDetails = () => {
  return (
    <div className="">
      <div className="mt-10">
        <div class="box-body">
          <div className="bg-[#CFE0CC]">
            <nav
              className="container mx-auto  flex space-x-2 rtl:space-x-reverse bg-[#CFE0CC]  text-[#2B2B2B] leading-5 text-base "
              aria-label="Tabs"
            >
              <button
                type="button"
                class=" text-sm md:text-base hover:bg-[#99CE81] font-medium hs-tab-active:bg-gray-200 hs-tab-active:text-gray-800 hs-tab-active:hover:text-gray-800 dark:hs-tab-active:bg-light dark:hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-2 bg-transparent  text-center active"
                id="pills-on-gray-color-item-1"
                data-hs-tab="#pills-on-gray-color-1"
                aria-controls="pills-on-gray-color-1"
              >
                Product Details
              </button>
              <button
                type="button"
                class=" text-sm md:text-base hover:bg-[#99CE81] font-medium hs-tab-active:bg-gray-200 hs-tab-active:text-gray-800 hs-tab-active:hover:text-gray-800 dark:hs-tab-active:bg-light dark:hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-2 bg-transparent  text-center active"
                id="pills-on-gray-color-item-2"
                data-hs-tab="#pills-on-gray-color-2"
                aria-controls="pills-on-gray-color-2"
              >
                Technical Specifications
              </button>
              <button
                type="button"
                class=" text-sm md:text-base hover:bg-[#99CE81] font-medium hs-tab-active:bg-gray-200 hs-tab-active:text-gray-800 hs-tab-active:hover:text-gray-800 dark:hs-tab-active:bg-light dark:hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-2 bg-transparent  text-center active"
                id="pills-on-gray-color-item-3"
                data-hs-tab="#pills-on-gray-color-3"
                aria-controls="pills-on-gray-color-3"
              >
                Sustainability & Environmental Policy
              </button>
            </nav>
          </div>
          <div class="mt-3 container mx-auto">
            <div
              id="pills-on-gray-color-1"
              role="tabpanel"
              aria-labelledby="pills-on-gray-color-item-1"
            >
              <div className="md:flex">
                <div className="hidden md:block md:w-3/12">
                  <div className="p-5 w-full h-full">
                    <Image src={prodct1} />
                  </div>
                </div>
                <div className="w-full md:w-9/12">
                  <div className="p-5">
                    <h4 className=" font-normal text-lg md:text-xl pb-2 text-[#2B2B2B] ">
                      Bullet™ Mojave Insulating Tumbler
                    </h4>
                    <p className="text-sm md:text-base font-normal  text-[#555656] pb-2">
                      Looking for a travel mug that can keep your drinks hot or
                      cold for longer while youre on the go? Look no further
                      than our Travel Mug! The advanced insulation technology
                      can keep your hot drinks warm for up to 2 hours and your
                      cold drinks cool for up to 4 hours. The mug is made of a
                      combination of PP plastic and stainless steel, making it a
                      durable and corrosion-resistant tumbler that is easy to
                      clean.
                    </p>
                    <p className=" text-sm md:text-base font-normal  text-[#555656] pb-2">
                      Looking for a travel mug that can keep your drinks hot or
                      cold for longer while youre on the go? Look no further
                      than our Travel Mug! The advanced insulation technology
                      can keep your hot drinks warm for up to 2 hours and your
                      cold drinks cool for up to 4 hours. The mug is made of a
                      combination of PP plastic and stainless steel, making it a
                      durable and corrosion-resistant tumbler that is easy to
                      clean.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="pills-on-gray-color-2"
              class="hidden"
              role="tabpanel"
              aria-labelledby="pills-on-gray-color-item-2"
            >
              <div className="md:flex">
                <div className="hidden md:block md:w-3/12">
                  <div className="p-5 w-full h-full">
                    <Image src={prodct2} />
                  </div>
                </div>
                <div className="w-full md:w-9/12">
                  <div className="p-5">
                    <h4 className=" font-normal text-lg md:text-xl pb-2 text-[#2B2B2B] ">
                      Bullet™ Mojave Insulating Tumbler
                    </h4>
                    <p className="text-sm md:text-base font-normal  text-[#555656] pb-2">
                      Looking for a travel mug that can keep your drinks hot or
                      cold for longer while youre on the go? Look no further
                      than our Travel Mug! The advanced insulation technology
                      can keep your hot drinks warm for up to 2 hours and your
                      cold drinks cool for up to 4 hours. The mug is made of a
                      combination of PP plastic and stainless steel, making it a
                      durable and corrosion-resistant tumbler that is easy to
                      clean.
                    </p>
                    <p className=" text-sm md:text-base font-normal  text-[#555656] pb-2">
                      Looking for a travel mug that can keep your drinks hot or
                      cold for longer while youre on the go? Look no further
                      than our Travel Mug! The advanced insulation technology
                      can keep your hot drinks warm for up to 2 hours and your
                      cold drinks cool for up to 4 hours. The mug is made of a
                      combination of PP plastic and stainless steel, making it a
                      durable and corrosion-resistant tumbler that is easy to
                      clean.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="pills-on-gray-color-3"
              class="hidden"
              role="tabpanel"
              aria-labelledby="pills-on-gray-color-item-3"
            >
              <div className="md:flex">
                <div className="hidden md:block md:w-3/12">
                  <div className="p-5 w-full h-full">
                    <Image src={prodct3} />
                  </div>
                </div>
                <div className="w-full md:w-9/12 py-5">
                  <div className="p-5">
                    <h4 className=" font-normal text-lg md:text-xl pb-2 text-[#2B2B2B] ">
                      High Quality Printing with Sustainability in mind.
                    </h4>
                    <p className="text-sm md:text-base font-normal  text-[#555656] pb-2">
                      We are working hard to mitigate our environmental impact
                      and are following an emissions reduction program to lower
                      our direct and indirect emissions which will lead us to
                      Net Zero by 2040.
                    </p>
                    <p className=" text-sm md:text-base font-normal  text-[#555656] pb-2">
                      We are working hard to introduce more environmentally
                      credible products in our range and we encourage you to
                      consider using more of those products.
                    </p>
                    <p className=" text-sm md:text-base font-normal  text-[#555656] pb-2">
                      Tradeprint supports Two Sides, the print and paper
                      advocacy group that aims to dispel myths around
                      greenwashing and promote paper as a truly sustainable
                      product.
                    </p>
                    <p className=" text-sm md:text-base font-normal  text-[#555656] pb-2">
                      We are committed to reducing waste and in particular
                      aiming to eliminate problematic plastics from our printing
                      and fulfilment operation..
                    </p>
                    <a
                      href="#"
                      className="underline text-[#9AC285] text-sm md:text-base "
                    >
                      Read full Environmental policy here.
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default productDetails;
