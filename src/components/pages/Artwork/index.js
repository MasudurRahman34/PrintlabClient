import React, { useEffect } from "react";
import { BsClock } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import dynamic from "next/dynamic";
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdOutlineLock } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { getIncompleteCartProductsQuery } from "@/resolvers/query";
import Loader from "@/components/Loader/Loader";
import UploadArtworkCard from "./UploadArtworkCard";

const Stepper = dynamic(() => import("@/components/pages/Checkout/Stepper"), {
  ssr: false,
});

const UploadArtwork = () => {
  const [state, setState] = React.useState([]);
  const [activeCart, setActiveCart] = React.useState(null);
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["incomplete_cart_items"],
    queryFn: getIncompleteCartProductsQuery,
  });

  const handleSkip = ({ skip_cart_id }) => {
    const temp = state.map((cart) => {
      if (cart.id === skip_cart_id) {
        return {
          ...cart,
          artwork_status: "ARTWORK SKIPPED",
        };
      }
      return cart;
    });

    setState(temp);
  };

  useEffect(() => {
    if (data?.data.length > 0) {
      const temp = [];

      data.data.map((product, idx) => {
        temp.push({
          ...product,
          artwork_status: product?.file
            ? "ARTWORK UPLOADED"
            : product.is_upload_artwork
            ? "ARTWORK REQUIRED"
            : product.is_design_service
            ? "DESIGN SERVICE"
            : "NOT SURE YET",
        });
      });

      setState((prev) => [...temp]);
      setActiveCart(data.data[0].id);
    }
  }, [data]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <div>
        <h1>Something went wrong</h1>
      </div>
    );
  }

  return (
    <div className="py-5 custom_container ">
      <Stepper activeStep={1} />
      <div className="payment-process"></div>

      <div className="p-4 bg-secondary">
        <div className="bg-white artsummry ">
          <div className="bg-secondary">
            <h4 className="text-lg font-medium text-secondgraphy md:text-xl lg:text-2xl xl:text-3xl md:font-semibold lg:font-bold lg:ps-2">
              Upload Artwork ( {data?.data.length} items)
            </h4>
            <p className="text-sm font-medium lg:text-base lg:ps-5 text-typography">
              You can upload your files below, or skip this step and upload your
              files later at a time that suits you.
            </p>
          </div>
        </div>
        <div className="w-full py-4 lg:hidden">
          {/* <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a fruit">
                {data?.data.map((product, idx) => {
                  if (product.id === activeCart) {
                    return `Item ${idx + 1}. ${product.product.title}`;
                  }
                })}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {data?.data.map((product, idx) => (
                <SelectItem key={idx} value={product.id}>
                  <div>
                    <h4 className="text-sm font-normal md:text-base lg:text-lg md:font-medium text-typography ">
                      Item {idx + 1}.
                    </h4>
                    <div>
                      <h4 className="mb-2 text-base font-medium md:text-lg lg:text-xl md:font-semibold lg:font-bold">
                        {product.product.title}
                      </h4>
                      <h4 className="text-sm font-normal md:font-medium text-secondgraphy">
                        <span className="text-sm md:text-base lg:text-lg">
                          ITEM REF:
                        </span>{" "}
                        {product.id}
                      </h4>
                      <h4 className="flex text-sm font-normal md:text-base lg:text-lg text-secondgraphy md:font-medium -ms-2 ">
                        <GoDotFill className="mr-1 text-3xl text-primary" />
                        {product.is_upload_artwork
                          ? "ARTWORK REQUIRED"
                          : product.is_design_service
                          ? "DESIGN SERVICE REQUIRED"
                          : "NOT SURE YET"}
                      </h4>
                    </div>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select> */}

          <select
            className="w-full px-2 py-2 text-sm font-medium border rounded-md cursor-pointer text-secondgraphy lg:text-xl md:font-semibold lg:font-bold md:px-8 lg:px-8 xl:px-16 border-typography "
            value={activeCart}
            onChange={(e) => {
              setActiveCart(Number(e.target.value));
            }}
          >
            {state?.map((product, idx) => {
              return (
                <option key={idx} value={product.id}>
                  Cart ID {product.id} - {product.product.title}
                </option>
              );
            })}
          </select>
        </div>
        {state?.length > 0 ? (
          <div className="rounded-md artwork-page-history lg:flex bg-secondary ">
            <div className="flex-col hidden w-full gap-4 py-5 lg:flex lg:w-1/3">
              {state?.map((product, idx) => (
                <div
                  className={`flex px-5 ${
                    product.id === activeCart ? "bg-white" : "bg-secondary"
                  } py-5 cursor-pointer`}
                  key={idx}
                  onClick={() => {
                    setActiveCart(product.id);
                  }}
                >
                  <h4 className="text-sm md:text-base lg:text-lg font-normal md:font-medium text-typography w-[30%] ">
                    Item {idx + 1}.
                  </h4>
                  <div className="w-[70%]">
                    <h4 className="mb-2 text-base font-medium md:text-lg lg:text-xl md:font-semibold lg:font-bold">
                      {product.product.title}
                    </h4>
                    <h4 className="text-sm font-normal md:font-medium text-secondgraphy">
                      <span className="text-sm md:text-base lg:text-lg">
                        ITEM REF:
                      </span>{" "}
                      {product.id}
                    </h4>
                    <h4 className="flex text-sm font-normal md:text-base lg:text-lg text-secondgraphy md:font-medium -ms-2 ">
                      <GoDotFill className="mr-1 text-3xl text-primary" />
                      {product?.artwork_status}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
            {state?.map((product, idx) => {
              return (
                product.id === activeCart && (
                  <UploadArtworkCard
                    key={idx}
                    product={product}
                    refetch={refetch}
                    handleSkip={handleSkip}
                  />
                )
              );
            })}
          </div>
        ) : (
          <div className="text-center">No product in cart</div>
        )}
      </div>
    </div>
  );
};

export default UploadArtwork;
