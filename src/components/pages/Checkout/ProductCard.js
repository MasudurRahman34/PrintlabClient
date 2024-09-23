import React from "react";
import { AiOutlineDelete, AiOutlineLoading3Quarters } from "react-icons/ai";
import JobDetails from "@/components/pages/Checkout/JobDetails";

import { useMutation } from "@tanstack/react-query";
import { deleteIncompleteCartProductMutation } from "@/resolvers/mutation";
import toast from "react-hot-toast";
import useToastMessage from "@/hooks/useToastMessage";

const ProductCard = ({ product, idx, refetch, total_refetch }) => {
  const showToastMessage = useToastMessage();
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
          total_refetch();
          toast.success("Product deleted successfully");
        },
        onError: (error) => {
          showToastMessage(error.response.data.message);
        },
      }
    );
  };

  return (
    <div className="mb-5 overflow-hidden border rounded">
      <div className="relative flex flex-col justify-between gap-3 p-4 lg:flex-row">
        <div className="flex justify-between w-full ">
          <div className="flex gap-3">
            <h5 className="text-base font-normal text-[#8F9391]">
              Item {idx + 1}.
            </h5>
            <h4 className="text-base font-bold text-[#2B2B2B] hidden lg:block">
              {product?.product?.title}
            </h4>
          </div>
          <div className="hidden text-right lg:block">
            <h4 className="text-base font-bold text-[#2B2B2B]">
              £{product.total}
            </h4>
            <h5 className="text-base font-bold text-[#8F9391]">
              Ex VAT: £{product.total}
            </h5>
          </div>
        </div>
        <div className="flex items-start justify-between lg:hidden">
          <h4 className="text-base font-bold text-[#2B2B2B] ">
            {product?.product.title}
          </h4>
          <div className="text-right">
            <h4 className="text-base font-bold text-[#2B2B2B]">
              £{product.total}
            </h4>
            <h5 className="text-base font-bold text-[#8F9391]">
              Ex VAT: £{product.total}
            </h5>
          </div>
        </div>
        <div className="absolute top-0 right-0 flex items-center justify-end p-2 rounded-sm lg:hidden bg-secondgraphy">
          <button disabled={isPending} onClick={handleDelete}>
            {isPending ? (
              <AiOutlineLoading3Quarters className="text-2xl text-white" />
            ) : (
              <AiOutlineDelete className="text-2xl text-white hover:text-[black]" />
            )}
          </button>
        </div>
      </div>

      <div>
        <div className="flex items-start justify-end lg:pr-4 checkout-title">
          <JobDetails product={product} />
          <button
            className="hidden mt-8 lg:block"
            disabled={isPending}
            onClick={handleDelete}
          >
            {isPending ? (
              <AiOutlineLoading3Quarters className="text-2xl text-[#AAAAAA] animate-spin" />
            ) : (
              <AiOutlineDelete className="text-2xl text-[#AAAAAA] hover:text-[black]" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
