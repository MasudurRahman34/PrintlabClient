"use Client";
import ClientLayout from "@/components/Layout/ClientLayout";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { login_schema } from "@/lib/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { loginMutation } from "@/resolvers/mutation";
import useToastMessage from "@/hooks/useToastMessage";
import toast from "react-hot-toast";
import MetaData from "@/components/ui/MetaData";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

const Userlogin = () => {
  const showToastMessage = useToastMessage();
  const router = useRouter();
  const { redirect_url } = router.query;
  const { login, isAuthenticated } = useAuth();
  const [showPass, setShowPass] = useState(false);

  const { mutate, isPending } = useMutation({
    mutationKey: "login",
    mutationFn: loginMutation,
  });

  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      stay_signed_in: false,
    },
    resolver: yupResolver(login_schema),
  });

  const onSubmit = (data) => {
    const { email, password } = data;

    const variables = {
      email,
      password,
    };

    mutate(
      { variables },
      {
        onSuccess: async (data) => {
          const { token, tokenType, user } = data?.data;
          await login({ token, token_type: tokenType, user });
          reset();
          toast.success("Login Successful");
          if (redirect_url) {
            const url = location.origin + redirect_url;
            location.href = url;
          } else {
            router.push("/");
          }
        },
        onError: (error) => {
          showToastMessage(error.response.data.message);
        },
      }
    );
  };

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  return (
    <ClientLayout>
      <>
        <MetaData title="Login" />
        <div className="container mx-auto mt-10 mb-2 md:mb-5 ">
          <div className="flex justify-center ">
            <div className=" w-full md:w-[50%]">
              <h4 className="mt-5 mb-5 text-lg font-semibold md:font-bold py-5px-5 md:text-xl lg:text-2xl xl:text-3xl">
                Log In
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
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className="text-[12px] md:text-[14px] text-red-500">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                    <div className="w-full mb-2 md:mb-5">
                      <label className=" text-[12px] md:text-base text-typography font-medium">
                        Password
                      </label>

                      <div className="relative">
                        <input
                          type={showPass ? "text" : "password"}
                          placeholder="Enter Password"
                          className="border text-typography text-[12px] md:text-[14px] px-2 py-2 w-full outline-none "
                          {...register("password")}
                        />
                        <button
                          className="absolute top-0 right-0 flex items-center justify-center w-10 h-full bg-gray-200 text-secondgraphy"
                          type="button"
                          onClick={() => {
                            setShowPass((prev) => !prev);
                          }}
                        >
                          {showPass ? (
                            <IoIosEyeOff className="w-6 h-6" />
                          ) : (
                            <IoIosEye className="w-6 h-6" />
                          )}
                        </button>
                      </div>
                      {errors.password && (
                        <p className="text-[12px] md:text-[14px] text-red-500">
                          {errors.password.message}
                        </p>
                      )}
                    </div>
                    <div className="flex justify-between mb-4 ">
                      <div className="flex items-center gap-1 ">
                        <input
                          type="checkbox"
                          id="stay_signed_in"
                          name="stay_signed_in"
                          onChange={(e) => {
                            setValue("stay_signed_in", e.target.checked);
                          }}
                        />
                        <label
                          for="stay_signed_in"
                          className={`text-[12px] md:text-[14px]  ${
                            errors.stay_signed_in
                              ? "text-red-500"
                              : "text-typography"
                          }`}
                        >
                          Stay signed in
                        </label>
                      </div>
                      <Link href="/forget-password">
                        <span className="text-[12px] md:text-[14px] underline  text-[#4DA0D7]">
                          Forgot Password
                        </span>
                      </Link>
                    </div>
                    <div className="mb-2">
                      <input
                        type="submit"
                        disabled={isPending}
                        value={isPending ? "Loading..." : "Log In"}
                        className="text-base md:text-lg hover:bg-[#eed680] font-semibold md:font-bold text-secondgraphy cursor-pointer text-center py-2 w-full rounded-md  bg-primary"
                      />
                    </div>
                    <div className="w-full mb-5">
                      <p className="text-[12px] md:text-[14px] font-normal text-center text-typography">
                        New Customer?{" "}
                        <Link
                          href={`/register${
                            redirect_url ? "?redirect_url=" + redirect_url : ""
                          }`}
                        >
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
};

export default Userlogin;
