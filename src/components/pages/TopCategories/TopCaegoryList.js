import React from "react";
import TopCategoryItem from "./TopCategoryItem";
import { useQuery } from "@tanstack/react-query";
import { getTopCategoriesQuery } from "@/resolvers/query";
import Loader from "@/components/Loader/Loader";

const TopCaegoryList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: "top_categories",
    queryFn: getTopCategoriesQuery,
  });

  console.log(data);

  return (
    <section className="custom_container">
      {isError ? null : isLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data?.data?.map((category) => (
            <TopCategoryItem key={category.id} category={category} />
          ))}
        </div>
      )}
    </section>
  );
};

export default TopCaegoryList;
