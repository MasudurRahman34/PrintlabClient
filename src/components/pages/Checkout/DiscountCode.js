import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import useToastMessage from "@/hooks/useToastMessage";
import { validateDiscountCodeMutation } from "@/resolvers/mutation";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useState } from "react";
import toast from "react-hot-toast";

const DiscountCode = () => {
  const router = useRouter();
  const showToastMessage = useToastMessage();
  const { session } = useAuth();
  const [state, setState] = useState({
    discountCode: "",
  });

  const [discountCodeState, setErrorDiscountCodeState] = useState({
    text: "",
    error: false,
    show: false,
  });

  const { mutate, isPending } = useMutation({
    mutationKey: "apply_discount_code",
    mutationFn: validateDiscountCodeMutation,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.discountCode || state.discountCode === "") {
      toast.error("Please enter a discount code");
      return;
    }

    const variables = {
      coupon_code: state.discountCode,
    };

    mutate(
      { variables, token: session?.token },
      {
        onSuccess: (data) => {
          if (data.error) {
            setErrorDiscountCodeState({
              text: data.message,
              error: true,
              show: true,
            });
          } else {
            if (data.message) {
              router.push(
                `?discount_type=${data.data.type}&discount=${data.data.discount}&discount_code=${state.discountCode}`
              );
              setErrorDiscountCodeState({
                text: "Discount code applied successfully",
                error: false,
                show: true,
              });
            }
          }
        },
        onError: (error) => {
          setErrorDiscountCodeState({
            text: error.response.data.message,
            error: true,
            show: true,
          });
        },
      }
    );
  };

  return (
    <div className="my-5">
      <form className="border rounded-md" onSubmit={handleSubmit}>
        <input
          className=" border-none px-2 rounded-s-md w-[70%] py-2 "
          type="text"
          placeholder="Enter code"
          name="discountCode"
          value={state.discountCode}
          onChange={handleChange}
        />
        <Button
          className="w-[30%] font-bold"
          type="submit"
          disabled={isPending}
        >
          {isPending ? "Applying..." : "Apply"}
        </Button>
      </form>
      {discountCodeState.show && (
        <p
          className={`text-sm mt-2 py-2 px-4 text-center rounded-md  ${
            discountCodeState.error ? "bg-red-300" : "bg-green-300"
          }`}
        >
          {discountCodeState.text}
        </p>
      )}
    </div>
  );
};

export default DiscountCode;
