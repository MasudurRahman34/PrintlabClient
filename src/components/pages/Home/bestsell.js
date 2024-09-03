import React, { useState } from "react";

import EmblaCarousel from "@/components/carousel/product/EmblaCarousel";
import { useQuery } from "@tanstack/react-query";
import { getAllProductsQuery } from "@/resolvers/query";
import Loader from "@/components/Loader/Loader";

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

  const { isLoading, data, isError, error } = useQuery({
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
              <div className="box-body mt-[15px]">
                {/* <div className="border-b dark:border-white/10">
                  <nav
                    className="-mb-0.5 flex justify-center space-x-6 rtl:space-x-reverse overflow-x-auto"
                    aria-label="Tabs"
                  >
                    {filterBy.map((filter, index) => (
                      <button
                        onClick={() => setActiveTab(filter.id)}
                        type="button"
                        key={index}
                        className={`  border-b-2   pb-1 pt-4 px-1 inline-flex items-center gap-2    whitespace-nowrap text-defaulttextcolor   active ${
                          activeTab === filter.id
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
                </div> */}

                <div className="mt-3">
                  {isLoading ? (
                    <div>
                      <Loader />
                    </div>
                  ) : isError ? (
                    <div>Something went wrong!</div>
                  ) : data?.data?.length > 0 ? (
                    <EmblaCarousel slides={data?.data} options={OPTIONS} />
                  ) : (
                    <div className="text-center text-defaulttextcolor">
                      <p>No product found</p>
                    </div>
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
