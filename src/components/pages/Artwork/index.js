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
  const [activeCart, setActiveCart] = React.useState(null);
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["incomplete_cart_items"],
    queryFn: getIncompleteCartProductsQuery,
  });

  useEffect(() => {
    if (data?.data.length > 0) {
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
        {data?.data.length > 0 ? (
          <div className="rounded-md artwork-page-history lg:flex bg-secondary ">
            <div className="flex flex-col w-full gap-4 py-5 lg:w-1/3">
              {data.data.map((product, idx) => (
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
                      {product.is_upload_artwork
                        ? "ARTWORK REQUIRED"
                        : product.is_design_service
                        ? "DESIGN SERVICE REQUIRED"
                        : "NOT SURE YET"}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
            {data?.data.map((product, idx) => {
              return (
                product.id === activeCart && (
                  <UploadArtworkCard key={idx} product={product} />
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
