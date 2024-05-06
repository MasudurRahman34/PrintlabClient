import React from "react";
import EmblaCarousel from "@/components/pages/SingleProduct/EmblaCarousel";
import prodct1 from "../../../../public/assets/mug1.webp";
import prodct2 from "../../../../public/assets/mug2.webp";
import prodct3 from "../../../../public/assets/detailspolosy.png";
import Image from "next/image";
import ColorRadio from "@/components/pages/SingleProduct/ColorRadio";
import Quantity from "@/components/pages/SingleProduct/Quantity";
import Meterials from "@/components/pages/SingleProduct/Meterials";
import Lamination from "@/components/pages/SingleProduct/Lamination";

import DeliveryChoose from "@/components/pages/SingleProduct/DeliveryChoose";
import PrintType from "@/components/pages/SingleProduct/PrintType";
import SinglePageAccordion from "@/components/pages/SingleProduct/Accordion";
import Commitment from "@/components/Commitment";
import TotalCounter from "@/components/pages/SingleProduct/TotalCounter";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { getSingleProductQuery } from "@/resolvers/query";

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
const SingleProductPageComponent = () => {
  const router = useRouter();
  const { single_product, product_category } = router.query;

  const { data, isPending, isError, error } = useQuery({
    queryKey: [`product-${single_product}`, single_product],
    queryFn: () =>
      getSingleProductQuery({
        slug: single_product,
        category_slug: product_category,
      }),
    enabled: !!single_product,
  });

  console.log(data, isPending, isError, error);

  return (
    <>
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
            <p>{data?.data.description}</p>
          </div>
          <div>
            <SinglePageAccordion />
          </div>
        </div>
        <div className="md:flex-1">
          <div>
            <h1 className="text-xl font-bold md:text-2xl lg:text-4xl text-secondgraphy">
              {data?.data.title}
            </h1>
          </div>
          <div className="py-5">
            <ColorRadio />
            <Quantity />
            <Meterials />
            <Lamination />
            <div>
              <p className="text-secondgraphy">
                Prices shown are exclusive of VAT
              </p>
            </div>
          </div>
          <div className="py-5">
            <DeliveryChoose />
            <PrintType />
          </div>
          <div className="p-2">
            <div className="flex items-center justify-between w-full gap-5">
              <div>
                <h1>
                  <strong className="text-2xl">Estimated TOTAL</strong>
                  <p>Price shown are exclusive of VAT</p>
                </h1>
              </div>
              <div className="text-right">
                <p className="text-sm">
                  <strong className="text-xl font-bold"> 17.17 </strong> Ex VAT
                </p>
                <p className="text-xs">
                  <strong>17.17</strong> Inc VAT
                </p>
                <p className="text-xs">
                  use the toggle at the top to change VAT preferences
                </p>
              </div>
            </div>
            <div className="py-5">
              <button className="w-full py-2.5 text-lg font-bold  border-2 bg-primary-light border-primary hover:bg-primary transition-colors duration-150">
                Add to basket
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Commitment />
      </div>
      <div className="">
        <div className="mt-10">
          <div class="box-body">
            <div className="bg-primary-light">
              <nav
                className="mx-auto  flex space-x-2 rtl:space-x-reverse bg-primary-light  text-[#2B2B2B] leading-5 text-base overflow-x-auto "
                aria-label="Tabs"
              >
                <button
                  type="button"
                  class=" text-sm md:text-base hover:bg-primary text-secondgraphy hs-tab-active:bg-gray-200 hs-tab-active:text-gray-800 hs-tab-active:hover:text-gray-800 dark:hs-tab-active:bg-light dark:hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-2 bg-transparent  text-center active font-bold"
                  id="pills-on-gray-color-item-1"
                  data-hs-tab="#pills-on-gray-color-1"
                  aria-controls="pills-on-gray-color-1"
                >
                  Product Details
                </button>
                <button
                  type="button"
                  class=" text-sm md:text-base hover:bg-primary text-secondgraphy hs-tab-active:bg-gray-200 hs-tab-active:text-gray-800 hs-tab-active:hover:text-gray-800 dark:hs-tab-active:bg-light dark:hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-2 bg-transparent  text-center active font-bold"
                  id="pills-on-gray-color-item-2"
                  data-hs-tab="#pills-on-gray-color-2"
                  aria-controls="pills-on-gray-color-2"
                >
                  Technical Specifications
                </button>
                <button
                  type="button"
                  class=" text-sm md:text-base hover:bg-primary text-secondgraphy hs-tab-active:bg-gray-200 hs-tab-active:text-gray-800 hs-tab-active:hover:text-gray-800 dark:hs-tab-active:bg-light dark:hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-2 bg-transparent  text-center active font-bold"
                  id="pills-on-gray-color-item-3"
                  data-hs-tab="#pills-on-gray-color-3"
                  aria-controls="pills-on-gray-color-3"
                >
                  Sustainability & Environmental Policy
                </button>
              </nav>
            </div>
            <div class="mt-3 ">
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
                      <h4 className="pb-2 text-lg font-normal md:text-xl text-secondgraphy">
                        Bullet™ Mojave Insulating Tumbler
                      </h4>
                      <p className="text-sm md:text-base font-normal  text-[#555656] pb-2">
                        Looking for a travel mug that can keep your drinks hot
                        or cold for longer while youre on the go? Look no
                        further than our Travel Mug! The advanced insulation
                        technology can keep your hot drinks warm for up to 2
                        hours and your cold drinks cool for up to 4 hours. The
                        mug is made of a combination of PP plastic and stainless
                        steel, making it a durable and corrosion-resistant
                        tumbler that is easy to clean.
                      </p>
                      <p className=" text-sm md:text-base font-normal  text-[#555656] pb-2">
                        Looking for a travel mug that can keep your drinks hot
                        or cold for longer while youre on the go? Look no
                        further than our Travel Mug! The advanced insulation
                        technology can keep your hot drinks warm for up to 2
                        hours and your cold drinks cool for up to 4 hours. The
                        mug is made of a combination of PP plastic and stainless
                        steel, making it a durable and corrosion-resistant
                        tumbler that is easy to clean.
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
                      <h4 className="pb-2 text-lg font-normal md:text-xl text-secondgraphy">
                        Bullet™ Mojave Insulating Tumbler
                      </h4>
                      <p className="text-sm md:text-base font-normal  text-[#555656] pb-2">
                        Looking for a travel mug that can keep your drinks hot
                        or cold for longer while youre on the go? Look no
                        further than our Travel Mug! The advanced insulation
                        technology can keep your hot drinks warm for up to 2
                        hours and your cold drinks cool for up to 4 hours. The
                        mug is made of a combination of PP plastic and stainless
                        steel, making it a durable and corrosion-resistant
                        tumbler that is easy to clean.
                      </p>
                      <p className=" text-sm md:text-base font-normal  text-[#555656] pb-2">
                        Looking for a travel mug that can keep your drinks hot
                        or cold for longer while youre on the go? Look no
                        further than our Travel Mug! The advanced insulation
                        technology can keep your hot drinks warm for up to 2
                        hours and your cold drinks cool for up to 4 hours. The
                        mug is made of a combination of PP plastic and stainless
                        steel, making it a durable and corrosion-resistant
                        tumbler that is easy to clean.
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
                      <h4 className="pb-2 text-lg font-normal md:text-xl text-secondgraphy">
                        High Quality Printing with Sustainability in mind.
                      </h4>
                      <p className="text-sm md:text-base font-normal  text-[#555656] pb-2">
                        We are working hard to mitigate our environmental impact
                        and are following an emissions reduction program to
                        lower our direct and indirect emissions which will lead
                        us to Net Zero by 2040.
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
    </>
  );
};

export default SingleProductPageComponent;