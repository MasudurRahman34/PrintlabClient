import React, { useEffect, useState } from "react";

import EmblaCarousel from "@/components/carousel/product/EmblaCarousel";
import { useQuery } from "@tanstack/react-query";
import {
  getAllProductsQuery,
  getTopListingProductQuery,
} from "@/resolvers/query";
import Loader from "@/components/Loader/Loader";
import Tab from "./Tab";

const BestSell = () => {
  const [activeTab, setActiveTab] = useState(null);

  const OPTIONS = { align: "start" };

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["best-sell"],
    queryFn: getTopListingProductQuery,
  });

  const tabList = data?.data?.map((item) => ({
    id: item.id,
    label: item.heading,
  }));

  useEffect(() => {
    if (data?.data) {
      if (tabList?.length > 0) {
        setActiveTab(tabList[0].id);
      }
    }
  }, [data?.data]);

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
                <Tab
                  tabList={tabList}
                  setActiveTab={setActiveTab}
                  activeTab={activeTab}
                />

                <div className="mt-3">
                  {isLoading ? (
                    <div>
                      <Loader />
                    </div>
                  ) : isError ? (
                    <div>Something went wrong!</div>
                  ) : data?.data?.find(
                      (topListing) => topListing.id === activeTab
                    )?.top_listing_items?.length > 0 ? (
                    <EmblaCarousel
                      slides={
                        data?.data?.find(
                          (topListing) => topListing.id === activeTab
                        )?.top_listing_items
                      }
                      options={OPTIONS}
                    />
                  ) : (
                    <div className="text-center text-secondary">
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
