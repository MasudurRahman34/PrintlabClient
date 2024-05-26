import React, { useState } from "react";
import EmblaCarousel from "@/components/pages/SingleProduct/EmblaCarousel";
import prodct1 from "../../../../public/assets/mug1.webp";
import prodct2 from "../../../../public/assets/mug2.webp";
import prodct3 from "../../../../public/assets/detailspolosy.png";

import SinglePageAccordion from "@/components/pages/SingleProduct/Accordion";
import Commitment from "@/components/Commitment";

import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { getSingleProductQuery } from "@/resolvers/query";
import Combination from "./Combination";

const OPTIONS = {
  axis: "y",
};

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
  const [active, setactive] = useState(1);

  const producttabs = [
    {
      title: "Product Details",
      id: 1,
    },
    {
      title: "Product Details",
      id: 2,
    },
    {
      title: "Sustainability & Environmental Policy",
      id: 3,
    },
  ];
  const productdetails = [
    {
      title: "Bullet™ Mojave Insulating Tumbler 1",
      id: 1,
      img: `${prodct1}`,
      des: "Looking for a travel mug that can keep your drinks hot or cold for longer while youre on the go? Look no further than our Travel Mug! The advanced insulation technology can keep your hot drinks warm for up to 2 hours and your cold drinks cool for up to 4 hours. The mug is made of a combination of PP plastic and stainless steel, making it a durable and corrosion-resistant tumbler that is easy to clean.",
    },
    {
      title: "Bullet™ Mojave Insulating Tumbler 2",
      id: 2,
      img: `${prodct2}`,
      des: "Looking for a travel mug that can keep your drinks hot or cold for longer while youre on the go? Look no further than our Travel Mug! The advanced insulation technology can keep your hot drinks warm for up to 2 hours and your cold drinks cool for up to 4 hours. The mug is made of a combination of PP plastic and stainless steel, making it a durable and corrosion-resistant tumbler that is easy to clean.",
    },
    {
      title: "Bullet™ Mojave Insulating Tumbler 3",
      id: 3,
      img: `${prodct3}`,
      des: "Looking zor a travel mug that can keep your drinks hot or cold for longer while youre on the go? Look no further than our Travel Mug! The advanced insulation technology can keep your hot drinks warm for up to 2 hours and your cold drinks cool for up to 4 hours. The mug is made of a combination of PP plastic and stainless steel, making it a durable and corrosion-resistant tumbler that is easy to clean.",
    },
  ];
  return (
    <>
      <div className="flex flex-col items-start justify-between gap-5 lg:flex-row ">
        <div className="max-w-xl p-4 lg:border-r-2 border-secondgraphy">
          <div>
            <EmblaCarousel slides={data?.data.media} options={OPTIONS} />
          </div>
          <div>
            <p>{data?.data.description}</p>
          </div>
          <div>
            <SinglePageAccordion />
          </div>
        </div>
        <Combination data={data} />
      </div>
      <div>
        <Commitment />
      </div>
      <div className="">
        <div className="mt-10">
          <div class="box-body">
            <div className="bg-primary-light">
              <nav
                className="mx-auto flex space-x-2 rtl:space-x-reverse bg-primary-light  text-[#2B2B2B] leading-5 text-base overflow-x-auto "
                aria-label="Tabs"
              >
                {producttabs.map((item) => (
                  <button
                    onClick={() => setactive(item.id)}
                    key={item.id}
                    type="button"
                    className={` ${
                      active === item.id ? "!bg-primary" : ""
                    } text-sm md:text-base hover:bg-primary text-secondgraphy hs-tab-active:bg-gray-200 hs-tab-active:text-gray-800 hs-tab-active:hover:text-gray-800 dark:hs-tab-active:bg-light dark:hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-2 bg-transparent  text-center active font-bold`}
                    id="pills-on-gray-color-item-1"
                    data-hs-tab="#pills-on-gray-color-1"
                    aria-controls={`pills-on-gray-color-${item.id}`}
                  >
                    Product Details
                  </button>
                ))}
              </nav>
            </div>
            <div class="mt-3 ">
              {productdetails.map((item) => (
                <div
                  key={item.id}
                  id="pills-on-gray-color-1"
                  className={`${active === item.id ? "block" : "hidden"}`}
                  role="tabpanel"
                  aria-labelledby={`pills-on-gray-color-item-${item.id}`}
                >
                  <div className="md:flex">
                    <div className="hidden md:block md:w-3/12">
                      <div className="w-full h-full p-5">
                        <img src={prodct1} />
                      </div>
                    </div>
                    <div className="w-full md:w-9/12">
                      <div className="p-5">
                        <h4 className="pb-2 text-lg font-normal md:text-xl text-secondgraphy">
                          {item.title}
                        </h4>
                        <p className="text-sm md:text-base font-normal  text-[#555656] pb-2">
                          {item.des}
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductPageComponent;
