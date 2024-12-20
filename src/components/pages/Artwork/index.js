import React, { useEffect, useMemo } from "react";

import { GoDotFill } from "react-icons/go";
import dynamic from "next/dynamic";

import { useMutation, useQuery } from "@tanstack/react-query";
import {
  fileCheckCombinationQuery,
  getIncompleteCartProductsQuery,
} from "@/resolvers/query";
import Loader from "@/components/Loader/Loader";

import { useAuth } from "@/hooks/useAuth";

import { skipFileUploadMutation } from "@/resolvers/mutation";
import toast from "react-hot-toast";
import useToastMessage from "@/hooks/useToastMessage";
import UploadDesignService from "./UploadDesignCard";
import UploadArtworkCard from "./UploadArtworkCard";

const Stepper = dynamic(() => import("@/components/pages/Checkout/Stepper"), {
  loading: () => <Loader />,
  ssr: false,
});

const UploadArtwork = () => {
  const { session } = useAuth();
  const showToastMessage = useToastMessage();
  const [state, setState] = React.useState([]);
  const [activeCart, setActiveCart] = React.useState(null);
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["incomplete_cart_items"],
    queryFn: getIncompleteCartProductsQuery,
  });

  const { mutate, isPending } = useMutation({
    mutationKey: "skip_file_upload",
    mutationFn: skipFileUploadMutation,
  });

  const activeCartData = useMemo(() => {
    if (activeCart) {
      return state.find((cart) => cart.id === activeCart);
    }
  }, [activeCart, state]);

  // getting combination file check flags
  const {
    data: file_check_flags,
    isLoading: file_check_loading,
    refetch: file_check_refetch,
  } = useQuery({
    queryKey: ["file_check_flag", activeCartData?.combination, session?.token],
    queryFn: () =>
      fileCheckCombinationQuery({
        combination: activeCartData?.combination,
        token: session?.token,
      }),
    enabled: !!activeCartData?.combination && !!session?.token,
  });

  // handling skip
  const handleSkip = ({ skip_cart_id }) => {
    mutate(
      {
        cart_id: skip_cart_id,
        variables: {
          is_skipped: 1,
        },
        token: session?.token,
      },
      {
        onSuccess: (data) => {
          toast.success("Artwork skipped successfully");
          refetch();
        },
        onError: (error) => {
          showToastMessage(
            error.response.data.message || "Something went wrong"
          );
        },
      }
    );
  };

  // setting state on data fetch
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

      if (activeCart === null) {
        setActiveCart(data.data[0].id);
      }
    }
  }, [data]);

  // refetching on active cart change

  useEffect(() => {
    file_check_refetch();
  }, [activeCart]);

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

      <div className="p-4 bg-secondary">
        <div className="bg-white artsummry ">
          <div className="bg-secondary">
            <h4 className="text-lg font-medium lg:text-xl text-secondgraphy md:font-semibold lg:font-bold ">
              Upload Artwork ( {data?.data.length} items)
            </h4>
            <p className="text-sm font-medium lg:text-base text-typography">
              You can upload your files below, or skip this step and upload your
              files later at a time that suits you.
            </p>
          </div>
        </div>
        <div className="w-full py-4 lg:hidden">
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
                  <h4 className="text-sm md:text-base  font-normal md:font-medium text-typography w-[30%] ">
                    Item {idx + 1}.
                  </h4>
                  <div className="w-[70%]">
                    <h4 className="mb-2 text-base font-medium md:text-lg md:font-semibold lg:font-bold">
                      {product.product.title}
                    </h4>
                    <h4 className="text-sm font-normal md:font-medium text-secondgraphy">
                      <span className="text-sm md:text-base ">
                        Combination:
                      </span>{" "}
                      {product.combination_string}
                    </h4>
                    <h4 className="flex text-sm font-normal md:text-base text-secondgraphy md:font-medium -ms-2 ">
                      <GoDotFill className="mr-1 text-3xl text-primary" />
                      {product?.is_skipped ? "Skipped" : product.artwork_status}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
            {state?.map((product, idx) => {
              if (
                product.id === activeCart &&
                product.is_design_service === 1
              ) {
                return (
                  <UploadDesignService
                    key={idx}
                    product={product}
                    refetch={refetch}
                    handleSkip={handleSkip}
                    file_check_flags={file_check_flags}
                    file_check_loading={file_check_loading}
                    file_check_refetch={file_check_refetch}
                    isPending={isPending}
                  />
                );
              } else {
                return (
                  product.id === activeCart && (
                    <UploadArtworkCard
                      key={idx}
                      product={product}
                      refetch={refetch}
                      handleSkip={handleSkip}
                      file_check_flags={file_check_flags}
                      file_check_loading={file_check_loading}
                      file_check_refetch={file_check_refetch}
                      isPending={isPending}
                    />
                  )
                );
              }
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
