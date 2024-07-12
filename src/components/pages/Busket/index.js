import React from "react";
import ProductCard from "../Checkout/ProductCard";
import CheckoutSummary from "../Checkout/CheckoutSummary";
import { useQuery } from "@tanstack/react-query";
import { getIncompleteCartProductsQuery } from "@/resolvers/query";
import Loader from "@/components/Loader/Loader";

const BusketComponent = ({ total_refetch }) => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["incomplete_cart_items"],
    queryFn: getIncompleteCartProductsQuery,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <div>
        <h1>Something went wrong</h1>
        <button onClick={() => refetch()}>Try again</button>
      </div>
    );
  }

  return (
    <div>
      <div>
        <h2 className="mb-5 text-xl font-bold md:text-2xl lg:text-3xl xl:text-4xl text-secbg-secondgraphy">
          Basket ({data?.data.length} items)
        </h2>
        <hr className="mb-5" />
      </div>
      <div className="lg:flex ">
        <div className="w-full order-table lg:w-8/12">
          {data?.data.length > 0 ? (
            data.data.map((product, idx) => (
              <ProductCard
                total_refetch={total_refetch}
                key={product.id}
                idx={idx}
                product={product}
                refetch={refetch}
              />
            ))
          ) : (
            <div className="text-center">No product in cart</div>
          )}
        </div>
        <div className="w-full px-10 lg:block order-info lg:w-4/12">
          <CheckoutSummary products={data?.data} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default BusketComponent;
