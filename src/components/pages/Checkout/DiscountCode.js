import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import useToastMessage from "@/hooks/useToastMessage";
import { validateDiscountCodeMutation } from "@/resolvers/mutation";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";

const DiscountCode = () => {
  const showToastMessage = useToastMessage();
  const { session } = useAuth();
  const [state, setState] = useState({
    discountCode: "",
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
          if (data.message) {
            toast.success(data.message);
          }
        },
        onError: (error) => {
          showToastMessage(error.response.data.message);
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
    </div>
  );
};

export default DiscountCode;
