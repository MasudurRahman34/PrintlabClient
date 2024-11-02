import Loader from "@/components/Loader/Loader";
import ShowCase from "@/components/ShowCase";
import MetaData from "@/components/ui/MetaData";
import { getProductsByCategoryQuery } from "@/resolvers/query";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";

const CategoryPage = () => {
  const router = useRouter();
  const { product_category } = router.query;
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["category_products", product_category],
    enabled: !!product_category,
    queryFn: () =>
      getProductsByCategoryQuery({ category_slug: product_category }),
  });

  return (
    <div>
      <MetaData
        title={data?.data?.meta_title}
        description={data?.data?.meta_description}
      />

      {isLoading ? (
        <div className="custom_container">
          <div className="flex items-center justify-center h-64">
            <Loader />
          </div>
        </div>
      ) : isError ? (
        <div>
          <div className="custom_container">
            <div className="flex items-center justify-center h-64">
              <h1>Something went wrong</h1>
            </div>
          </div>
        </div>
      ) : (
        data &&
        data?.data && (
          <ShowCase
            data={data?.data}
            isPending={isLoading}
            title={data?.data.title}
            subTitle={data?.data.description}
          />
        )
      )}
    </div>
  );
};

export default CategoryPage;
