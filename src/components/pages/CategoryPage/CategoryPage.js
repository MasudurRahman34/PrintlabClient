import ShowCase from "@/components/ShowCase";
import { getProductsByCategoryQuery } from "@/resolvers/query";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";

const CategoryPage = () => {
  const router = useRouter();
  const { product_category } = router.query;
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["categories-get"],
    queryFn: () =>
      getProductsByCategoryQuery({ category_slug: product_category }),
  });

  console.log(data, isPending, isError, error);
  return (
    <div>
      <ShowCase
        title="Printed Mugs"
        subTitle="Come and check out our range of Travel Drinkware. A variety of choice awaits, create your own design fast with our online designer. Order yours now and boost your promotional products or create fabulous gifts! "
      />
      <ShowCase
        title="Printed Travel Mugs"
        subTitle="Check out our range of Personalised Printed Ceramic Mugs. With a range of colours of colours to choose from you wont struggle find one to boost your brand or create stunning gifts."
        bg
      />
      <ShowCase
        title="Sports Bottle Printing"
        subTitle="Sports bottles make the perfect high end branded giveaway or promotional item. Check out our range below now and choose the one right for you! "
      />
    </div>
  );
};

export default CategoryPage;
