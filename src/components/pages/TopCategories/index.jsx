import Image from "next/image";
import React, { useEffect, useState } from "react";
import TopCaegoryList from "./TopCaegoryList";
import { getTopListingCategoryQuery } from "@/resolvers/query";
import { useQuery } from "@tanstack/react-query";
import Tab from "../Home/Tab";
import Loader from "@/components/Loader/Loader";

const TopCategories = () => {
  const [activeTab, setActiveTab] = useState(null);

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["best-categories"],
    queryFn: getTopListingCategoryQuery,
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
    <div className="py-10 bg-white">
      <div className="mx-auto customep">
        <div className="mt-5 mb-5 text-center ">
          <h4 className="mt-3 text-[30px] text-[#1B4353]  font-bold text-xl md:text-2xl lg:text-3xl  ">
            TOP CATEGORIES
          </h4>
          <p className="text-bass md:text-lg lg:text-xl py-2 font-semibold text-[#3F3F3F]">
            Print stories, inspiration and materials
          </p>
        </div>
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
          ) : (
            <TopCaegoryList
              itemList={
                data?.data?.find((topListing) => topListing.id === activeTab)
                  ?.top_listing_items
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
