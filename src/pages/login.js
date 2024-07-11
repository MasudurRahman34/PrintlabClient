"use Client";
import ClientLayout from "@/components/Layout/ClientLayout";
import Link from "next/link";
import { useForm } from "react-hook-form";

import { useAuth } from "@/hooks/useAuth";

const Userlogin = () => {
  const { login } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const { email, password } = data;
    await login({ email, password });
  };
  return (
    <ClientLayout>
      <>
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
                        {...register("email", { required: true })}
                      />
                    </div>
                    <div className="w-full mb-2 md:mb-5">
                      <label className=" text-[12px] md:text-base text-typography font-medium">
                        Password
                      </label>
                      <input
                        type="password"
                        placeholder="Enter Password"
                        className="border text-typography text-[12px] md:text-[14px] px-2 py-2 w-full outline-none "
                        {...register("password", {
                          required: true,
                          minLength: 8,
                        })}
                      />
                    </div>
                    <div className="flex justify-between mb-4 ">
                      <div className="flex items-center gap-1 ">
                        <input
                          type="checkbox"
                          id="login"
                          name="vehicle1"
                          value="checkout"
                          required
                        />
                        <label
                          for="login"
                          className="text-[12px] md:text-base ml-2  text-typography"
                        >
                          Stay signed in
                        </label>
                      </div>
                      <Link href="#">
                        <span className="text-[12px] md:text-[14px] underline  text-[#4DA0D7]">
                          Forgot Password
                        </span>
                      </Link>
                    </div>
                    <div className="mb-2">
                      <input
                        type="submit"
                        value="Sign In"
                        className="text-base md:text-lg hover:bg-[#eed680] font-semibold md:font-bold text-white text-center py-2 w-full rounded-md  bg-primary"
                      />
                    </div>
                    <div className="w-full mb-5">
                      <p className="text-[12px] md:text-[14px] font-normal text-center text-typography">
                        New coustmar?
                        <Link href="/register">
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
