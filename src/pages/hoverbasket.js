import ClientLayout from "@/components/Layout/ClientLayout";
import { TiDeleteOutline } from "react-icons/ti";
import { AiOutlineDelete } from "react-icons/ai";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getIncompleteCartProductsQuery } from "@/resolvers/query";
import Loader from "@/components/Loader/Loader";
import { useEffect, useMemo } from "react";
import { deleteIncompleteCartProductMutation } from "@/resolvers/mutation";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";

const Summary = ({ products }) => {
  const { total } = useMemo(() => {
    const sub_total = products

      .map((product) => parseFloat(product.price))
      .reduce((a, b) => a + b, 0);
    const total_vat = products
      .map((product) => parseFloat(product.tax))
      .reduce((a, b) => a + b, 0);

    const delivery_charge = products
      .map((product) => parseFloat(product.delivery_service_charge))
      .reduce((a, b) => a + b, 0);

    const artwork_charge = products
      .map((product) => parseFloat(product.artwork_service_charge))
      .reduce((a, b) => a + b, 0);

    const total = sub_total + total_vat + delivery_charge + artwork_charge;
    return { total };
  }, [products]);

  return (
    <div>
      <div className="flex justify-between px-3 py-3">
        <h2 className="text-lg font-bold md:text-xl text-secondgraphy">
          Total
        </h2>
        <div>
          <h3 className="mb-1 text-lg font-bold md:text-xl text-secondgraphy">
            {formatPrice(total)}{" "}
            <span className="text-sm font-medium md:text-base text-secondgraphy">
              Ex Vat
            </span>
          </h3>
          <p className="text-base font-semibold md:text-lg text-secondgraphy">
            {formatPrice(total)}{" "}
            <span className=" text-[12px] md:text-sm font-medium text-secondgraphy">
              In Vat
            </span>
          </p>
        </div>
      </div>
      <div className="p-4">
        <Link
          href="/basket"
          className="flex justify-center py-2 mx-auto mt-3 mb-5 text-base text-center text-black rounded-md bg-primary md:text-lg font-blod"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default function Hoverbasket({ show, hideBasket }) {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["incomplete_cart_items"],
    queryFn: getIncompleteCartProductsQuery,
  });
  const { mutate, isPending } = useMutation({
    mutationKey: "delete_cart_item",
    mutationFn: deleteIncompleteCartProductMutation,
  });

  const handleDelete = ({ cart_id }) => {
    mutate(
      { cart_id },
      {
        onSuccess: (data) => {
          refetch();
          toast.success("Product deleted successfully");
        },
        onError: (error) => {
          toast.error("Something went wrong");
        },
      }
    );
  };

  useEffect(() => {
    if (show) {
      refetch();
    }
  }, [show]);

  if (isError) {
    return (
      <div>
        <h1>Something went wrong</h1>
        <button onClick={() => refetch()}>Try again</button>
      </div>
    );
  }

  return (
    <>
      <div
        className={` justify-center absolute z-[999] bg-[white]  hidden md:flex  transition  ease-in-out  ${
          show
            ? "opacity-100 visible right-7 top-[80px]"
            : " opacity-0 invisible -right-[150px] top-[80px]"
        }`}
      >
        <div className=" w-[380px] min-h-[100px] border rounded  shadow-md shadow-[#7D7F7F]">
          <div className="relative py-3 border-b-2 basket-title">
            <h6 className="flex-1 mx-auto text-sm font-bold text-center md:text-base text-secondgraphy">
              Your Basket
            </h6>
            <button
              className="absolute px-1 top-2 right-2"
              onClick={() => {
                hideBasket();
              }}
            >
              <TiDeleteOutline className="text-[30px] text-[#7D7F7F]" />
            </button>
          </div>
          {isLoading ? (
            <div className="flex justify-center items-center h-[200px]">
              <Loader />
            </div>
          ) : data?.data.length > 0 ? (
            <div>
              {data?.data.length > 0 &&
                data.data.map((product, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between py-3 border-b-2 basket-contnen ">
                      <div className="flex items-center">
                        <p className="text-sm md:text-sm text-secondgraphy text-[#7D7F7F] mr-3 ml-3">
                          Item {idx + 1}.
                        </p>
                        <p className="text-sm font-semibold text-secondgraphy">
                          {product.product.title}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <p className="mr-3 text-sm font-bold text-secondgraphy">
                          $10.20
                        </p>
                        <button
                          onClick={() => handleDelete({ cart_id: product.id })}
                          disabled={isPending}
                        >
                          <AiOutlineDelete className="text-[25px] text-[#7D7F7F] mr-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

              <Summary products={data?.data} />
            </div>
          ) : (
            <div className="flex justify-center items-center h-[200px]">
              <p className="text-[12px] md:text-base text-secondgraphy font-semibold">
                No product in cart
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
