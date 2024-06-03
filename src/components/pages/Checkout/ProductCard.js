import React from "react";
import { AiOutlineDelete, AiOutlineLoading3Quarters } from "react-icons/ai";
import JobDetails from "@/components/pages/Checkout/JobDetails";
import ArtworkService from "./ArtworkService";
import RefPONumber from "./Ref&PONumber";
import { useMutation } from "@tanstack/react-query";
import { deleteIncompleteCartProductMutation } from "@/resolvers/mutation";
import toast from "react-hot-toast";

const ProductCard = ({ product, idx, refetch }) => {
  const { mutate, isPending } = useMutation({
    mutationKey: "delete_cart_item",
    mutationFn: deleteIncompleteCartProductMutation,
  });

  const handleDelete = () => {
    mutate(
      { cart_id: product.id },
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

  return (
    <div className="mb-5 overflow-hidden border rounded">
      <div className="flex flex-col justify-between gap-3 p-4 md:flex-row">
        <div className="flex gap-3">
          <h5 className="text-base font-normal text-[#8F9391]">
            Item {idx + 1}.
          </h5>
          <h4 className="text-base font-bold text-[#2B2B2B] ">
            {product?.product.title}
          </h4>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-right">
            <h4 className="text-base font-bold text-[#2B2B2B]">
              £{product.total}
            </h4>
            <h5 className="text-base font-bold text-[#8F9391]">
              Ex VAT: £{product.total}
            </h5>
          </div>
          <button
            className="block md:hidden"
            disabled={isPending}
            onClick={handleDelete}
          >
            {isPending ? (
              <AiOutlineLoading3Quarters className="text-2xl text-[#AAAAAA]" />
            ) : (
              <AiOutlineDelete
                className="text-2xl text-[#AAAAAA] hover:text-[black]"
                onClick={handleDelete}
              />
            )}
          </button>
        </div>
      </div>
      <div className="flex justify-between pr-4 checkout-title">
        <div className="flex flex-col gap-5 px-10 py-2 md:flex-row rounded-r-md bg-secondgraphy">
          <p className="mt-3 text-base font-medium text-center text-white ">
            Get 1 more copies for only £6.00
          </p>
          <button className="px-8 py-3 text-base font-bold text-center rounded-md text-secondgraphy bg-primary">
            Upgrate
          </button>
        </div>
        <button
          className="hidden md:block"
          disabled={isPending}
          onClick={handleDelete}
        >
          {isPending ? (
            <AiOutlineLoading3Quarters className="text-2xl text-[#AAAAAA] animate-spin" />
          ) : (
            <AiOutlineDelete
              className="text-2xl text-[#AAAAAA] hover:text-[black]"
              onClick={handleDelete}
            />
          )}
        </button>
      </div>
      <div>
        <JobDetails product={product} />
        <ArtworkService product={product} />
        <RefPONumber product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
