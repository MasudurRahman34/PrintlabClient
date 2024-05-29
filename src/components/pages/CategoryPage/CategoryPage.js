import ShowCase from "@/components/ShowCase";
import { getProductsByCategoryQuery } from "@/resolvers/query";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";

const CategoryPage = () => {
  const router = useRouter();
  const { product_category } = router.query;
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["category_products", product_category],
    enabled: !!product_category,
    queryFn: () =>
      getProductsByCategoryQuery({ category_slug: product_category }),
  });

  if (isPending) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <ShowCase
        data={data?.data}
        isPending={isPending}
        title={data?.data.title}
        subTitle={data?.data.description}
      />
    </div>
  );
};

export default CategoryPage;
