import ClientLayout from "@/components/Layout/ClientLayout";
import EmblaCarousel from "@/components/pages/SingleProduct/EmblaCarousel";
import React, { useState } from "react";
import prodct1 from "../../../../public/assets/mug1.webp";
import prodct2 from "../../../../public/assets/mug2.webp";
import prodct3 from "../../../../public/assets/detailspolosy.png";
import Image from "next/image";

const color = ["#252351", "#9AC285", "#CFE0CC", "#99CE81"];

const product = {
  id: 1,
  name: "new mug 1",
  slug: "new-luxury-mug",
  photo:
    "https://www.tradeprint.co.uk/dam/jcr:ab9385a4-f764-4c37-a6e3-fb0ed4ee0f0c/Heat%20changing%20Mug%20Game.webp",
  price: 10,
  desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et luctus enim justo non justo. Ut luctus sagittis nulla. Donec nec dui sit amet dolor gravida ornare. Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus.",
  images: [
    {
      src: "https://www.tradeprint.co.uk/dam/jcr:ab9385a4-f764-4c37-a6e3-fb0ed4ee0f0c/Heat%20changing%20Mug%20Game.webp",
    },
    {
      src: "https://www.tradeprint.co.uk/dam/jcr:ab9385a4-f764-4c37-a6e3-fb0ed4ee0f0c/Heat%20changing%20Mug%20Game.webp",
    },
    {
      src: "https://www.tradeprint.co.uk/dam/jcr:ab9385a4-f764-4c37-a6e3-fb0ed4ee0f0c/Heat%20changing%20Mug%20Game.webp",
    },
  ],
  colors: ["red", "blue", "green"],
  infos: [],
  discount: 0,
  sold: 0,
  category: "mug",
  brand: "brand",
};

const OPTIONS = {
  axis: "y",
};
const SLIDES = Array.from(Array(product.images.length).keys());

const index = () => {
  return (
    <ClientLayout>
      <section className="container w-full py-10 mx-auto">
        <div className="flex flex-col items-start justify-between gap-5 lg:flex-row ">
          <div className="max-w-xl p-4 lg:border-r-2 border-secondgraphy">
            <div>
              <EmblaCarousel
                slides={SLIDES}
                options={OPTIONS}
                images={product.images}
              />
            </div>
            <div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
                optio quod dolorum expedita qui vel. Sint illo corporis illum
                alias sed quod voluptatum maxime numquam, reiciendis nostrum
                nobis molestiae? Dolores? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Expedita sint soluta ducimus distinctio fuga
                cumque dolore quaerat consequuntur quae veritatis voluptatum
                odio architecto, hic cum pariatur a? Facere, corporis ex. Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Sit impedit
                aliquid perspiciatis ducimus natus odit nesciunt debitis? Rem,
                magni eius nam corrupti alias exercitationem deleniti magnam
                eos. Ipsam, eaque aliquid!
              </p>
            </div>
          </div>
          <div className="flex-1">
            <div>
              <h1 className="text-4xl font-bold text-secondgraphy">
                Bamboo Ballpoint Pen
              </h1>
            </div>
            <div>
              <div>
                <p>
                  <strong>Colour</strong> Natural/Green
                </p>
                <div className="flex gap-2">
                  <div className="bg-[#252351] h-10 w-10 border rounded-md"></div>
                  {color.map((item, index) => (
                    <div
                      className={`bg-[${item}] h-10 w-10 border rounded-md`}
                      key={index}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
            <div></div>
            <div className="p-2">
              <div>
                <div>
                  <strong>Estimated TOTAL</strong>
                  <p>Price shown are exlusive of VAT</p>
                </div>
                <div>
                  <p>
                    <strong>£0.00</strong> Ex VAT
                  </p>
                  <p>
                    <strong>£0.00</strong> Inc VAT
                  </p>

                  <p>Use the toggle at the top to change VAT preferences</p>
                </div>
                <button className="w-full py-3 font-bold text-white rounded-md bg-primary-dark">
                  <span>Add to basket</span>
                </button>
              </div>
            </div>
          </div>
        </div>
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
                      <div className="w-full h-full p-5">
                        <Image src={prodct1} />
                      </div>
                    </div>
                    <div className="w-full md:w-9/12">
                      <div className="p-5">
                        <h4 className=" font-normal text-lg md:text-xl pb-2 text-[#2B2B2B] ">
                          Bullet™ Mojave Insulating Tumbler
                        </h4>
                        <p className="text-sm md:text-base font-normal  text-[#555656] pb-2">
                          Looking for a travel mug that can keep your drinks hot
                          or cold for longer while youre on the go? Look no
                          further than our Travel Mug! The advanced insulation
                          technology can keep your hot drinks warm for up to 2
                          hours and your cold drinks cool for up to 4 hours. The
                          mug is made of a combination of PP plastic and
                          stainless steel, making it a durable and
                          corrosion-resistant tumbler that is easy to clean.
                        </p>
                        <p className=" text-sm md:text-base font-normal  text-[#555656] pb-2">
                          Looking for a travel mug that can keep your drinks hot
                          or cold for longer while youre on the go? Look no
                          further than our Travel Mug! The advanced insulation
                          technology can keep your hot drinks warm for up to 2
                          hours and your cold drinks cool for up to 4 hours. The
                          mug is made of a combination of PP plastic and
                          stainless steel, making it a durable and
                          corrosion-resistant tumbler that is easy to clean.
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
                      <div className="w-full h-full p-5">
                        <Image src={prodct2} />
                      </div>
                    </div>
                    <div className="w-full md:w-9/12">
                      <div className="p-5">
                        <h4 className=" font-normal text-lg md:text-xl pb-2 text-[#2B2B2B] ">
                          Bullet™ Mojave Insulating Tumbler
                        </h4>
                        <p className="text-sm md:text-base font-normal  text-[#555656] pb-2">
                          Looking for a travel mug that can keep your drinks hot
                          or cold for longer while youre on the go? Look no
                          further than our Travel Mug! The advanced insulation
                          technology can keep your hot drinks warm for up to 2
                          hours and your cold drinks cool for up to 4 hours. The
                          mug is made of a combination of PP plastic and
                          stainless steel, making it a durable and
                          corrosion-resistant tumbler that is easy to clean.
                        </p>
                        <p className=" text-sm md:text-base font-normal  text-[#555656] pb-2">
                          Looking for a travel mug that can keep your drinks hot
                          or cold for longer while youre on the go? Look no
                          further than our Travel Mug! The advanced insulation
                          technology can keep your hot drinks warm for up to 2
                          hours and your cold drinks cool for up to 4 hours. The
                          mug is made of a combination of PP plastic and
                          stainless steel, making it a durable and
                          corrosion-resistant tumbler that is easy to clean.
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
                      <div className="w-full h-full p-5">
                        <Image src={prodct3} />
                      </div>
                    </div>
                    <div className="w-full py-5 md:w-9/12">
                      <div className="p-5">
                        <h4 className=" font-normal text-lg md:text-xl pb-2 text-[#2B2B2B] ">
                          High Quality Printing with Sustainability in mind.
                        </h4>
                        <p className="text-sm md:text-base font-normal  text-[#555656] pb-2">
                          We are working hard to mitigate our environmental
                          impact and are following an emissions reduction
                          program to lower our direct and indirect emissions
                          which will lead us to Net Zero by 2040.
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
                          aiming to eliminate problematic plastics from our
                          printing and fulfilment operation..
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
      </section>
    </ClientLayout>
  );
};

export default index;
