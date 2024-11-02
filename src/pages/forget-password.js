import ClientLayout from "@/components/Layout/ClientLayout";
import MetaData from "@/components/ui/MetaData";
import useToastMessage from "@/hooks/useToastMessage";
import { forgot_password_schema } from "@/lib/schema";
import { ForgetPasswordMutation } from "@/resolvers/mutation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

//react hook form
function ForgetPassword() {
  const showToastMessage = useToastMessage();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "" },
    resolver: yupResolver(forgot_password_schema),
  });
  const { mutate, isPending } = useMutation({
    mutationKey: ["forgotPassword"],
    mutationFn: ForgetPasswordMutation,
  });

  const onSubmit = (data) => {
    mutate(
      { variables: { email: data.email } },
      {
        onSuccess: async (data) => {
          reset();

          toast.success(data.message);
        },
        onError: (error) => {
          showToastMessage(error.response.data.message);
        },
      }
    );
  };
  return (
    <ClientLayout>
      {" "}
      <>
        <MetaData title="Forgot Password" />

        <div className="container mx-auto mt-10 mb-2 md:mb-5 ">
          <div className="flex justify-center ">
            <div className=" w-full md:w-[50%]">
              <h4 className="mt-5 mb-5 text-lg font-semibold md:font-bold py-5px-5 md:text-xl lg:text-2xl xl:text-3xl">
                Send Password Reset Link
              </h4>
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="w-full input-from">
                    <div className="w-full mb-2 md:mb-5 ">
                      <label className=" text-[12px] md:text-base text-typography font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter Email"
                        className="border text-typography text-[12px] md:text-[14px] px-2 py-2 w-full outline-none"
                        {...register("email", { required: true })}
                        name="email"
                      />
                      {errors.email && (
                        <p className="text-[12px] md:text-[14px] text-red-500">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div className="mb-2">
                      <input
                        type="submit"
                        disabled={isPending}
                        value={
                          isPending ? "Loading..." : "Send Password Reset Link"
                        }
                        className="text-base md:text-lg hover:bg-[#eed680] font-semibold md:font-bold text-secondgraphy cursor-pointer text-center py-2 w-full rounded-md  bg-primary"
                      />
                    </div>
                    <div className="w-full mb-5">
                      <p className="text-[12px] md:text-[14px] font-normal text-center text-typography">
                        New Customer?{" "}
                        <Link href={`/register`}>
                          <span className="underline text-[#4DA0D7]">
                            Register here{" "}
                          </span>
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    </ClientLayout>
  );
}

export default ForgetPassword;
