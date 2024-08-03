import ClientLayout from "@/components/Layout/ClientLayout";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { sign_up_schema } from "@/lib/schema";
import { useMutation } from "@tanstack/react-query";
import { registerUserMutation } from "@/resolvers/mutation";
import { useAuth } from "@/hooks/useAuth";
import useToastMessage from "@/hooks/useToastMessage";
const Signup = () => {
  const showToastMessage = useToastMessage();
  const { register: authRegister } = useAuth();
  const { mutate, isPending } = useMutation({
    mutationKey: "register",
    mutationFn: registerUserMutation,
  });

  const {
    register,
    handleSubmit,
    reset,

    formState: { errors, touchedFields },
  } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
      customer_type: "",
      accept_terms: false,
    },
    resolver: yupResolver(sign_up_schema),
  });

  const onSubmit = (data) => {
    const {
      email,
      password,
      customer_type,
      first_name,
      last_name,
      confirm_password,
    } = data;

    if (
      email &&
      password &&
      customer_type &&
      first_name &&
      last_name &&
      confirm_password
    ) {
      if (password !== confirm_password) {
        toast.error("Password does not match");
        return;
      }

      const variables = {
        first_name,
        last_name,
        email,
        password,
        password_confirmation: confirm_password,
      };

      mutate(
        {
          variables,
        },
        {
          onSuccess: (data) => {
            authRegister({
              token: data?.data.token,
              token_type: data?.data.tokenType,
              user: data?.data.user,
            });
            reset();
          },
          onError: (error) => {
            console.log(error);
            showToastMessage(error?.response?.data?.message);
          },
        }
      );
    } else {
      toast.error("Please fill all the fields");
    }
  };

  return (
    <ClientLayout>
      <>
        <div className="container px-4 mx-auto mt-10 mb-2 md:mb-5 ">
          <div className="flex justify-center ">
            <div className="w-full max-w-lg">
              <h4 className="mt-5 mb-5 text-lg font-semibold text-center md:font-bold py-5px-5 md:text-xl lg:text-2xl xl:text-3xl">
                Register
              </h4>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full input-from">
                  <div className="w-full mb-2 md:mb-5 ">
                    <label className=" text-[12px] md:text-base text-typography font-medium ">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter First Name"
                      className="border text-typography text-[12px] md:text-[14px] px-2 py-2 w-full outline-none "
                      name="first_name"
                      {...register("first_name")}
                    />

                    {errors.first_name && (
                      <p className="text-red-500 text-[12px] md:text-[14px]">
                        {errors.first_name?.message}
                      </p>
                    )}
                  </div>
                  <div className="w-full mb-2 md:mb-5 ">
                    <label className=" text-[12px] md:text-base text-typography font-medium ">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Last Name"
                      className="border text-typography text-[12px] md:text-[14px] px-2 py-2 w-full outline-none "
                      name="last_name"
                      {...register("last_name")}
                    />

                    {errors.last_name && (
                      <p className="text-red-500 text-[12px] md:text-[14px]">
                        {errors.last_name?.message}
                      </p>
                    )}
                  </div>
                  <div className="w-full mb-2 md:mb-5 ">
                    <label className=" text-[12px] md:text-base text-typography font-medium ">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter Email"
                      name="email"
                      className="border text-typography text-[12px] md:text-[14px] px-2 py-2 w-full outline-none "
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-[12px] md:text-[14px]">
                        {errors.email?.message}
                      </p>
                    )}
                  </div>
                  <div className="w-full mb-2 md:mb-5">
                    <label className=" text-[12px] md:text-base text-typography font-medium">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter Password"
                      className="border text-typography text-[12px] md:text-[14px] px-2 py-2 w-full outline-none"
                      name="password"
                      {...register("password")}
                    />
                    {errors.password && (
                      <p className="text-red-500 text-[12px] md:text-[14px]">
                        {errors.password?.message}
                      </p>
                    )}
                  </div>
                  <div className="w-full mb-2 md:mb-5">
                    <label className=" text-[12px] md:text-base text-typography font-medium">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      placeholder="Re-enter Password"
                      className="border text-typography text-[12px] md:text-[14px] px-2 py-2 w-full outline-none"
                      name="confirm_password"
                      {...register("confirm_password")}
                    />
                    {errors.confirm_password && (
                      <p className="text-red-500 text-[12px] md:text-[14px]">
                        {errors.confirm_password?.message}
                      </p>
                    )}
                  </div>
                  <div className="w-full mb-2 md:mb-5">
                    <label className=" text-[12px] block md:text-base text-typography font-medium">
                      Customer Type
                    </label>

                    <select
                      name="customer_type"
                      {...register("customer_type")}
                      className=" form-control border text-[12px] md:text-[14px] text-typography px-2 py-2 w-full outline-none "
                    >
                      <option selected disabled value="">
                        {" "}
                        Please select
                      </option>
                      <option value="Charity or Community Group">
                        Charity or Community Group
                      </option>
                      <option value="Publin services of Edcation">
                        Publin services of Edcation
                      </option>
                      <option value="Event / Entertainment">
                        Event / Entertainment
                      </option>
                      <option value="Personal">Personal</option>
                      <option value="Designer / Agency">
                        Designer / Agency
                      </option>
                      <option value="Small Business / Retail">
                        Small Business / Retail
                      </option>
                      <option value="Comporate / office">
                        Comporate / office
                      </option>
                      <option value="Printer / Print Reseller">
                        Printer / Print Reseller
                      </option>
                    </select>
                    <p className="text-red-500 text-[12px] md:text-[14px]">
                      {errors.customer_type?.message}
                    </p>
                  </div>

                  <div className="mb-4 ">
                    <div>
                      <input
                        type="checkbox"
                        name="accept_terms"
                        {...register("accept_terms")}
                        id="accept_terms"
                      />
                      <label
                        htmlFor="accept_terms"
                        className={`text-[12px] md:text-base   ${
                          errors.accept_terms
                            ? "text-red-500"
                            : "text-secondgraphy"
                        }`}
                      >
                        {" "}
                        I have read, understood and accept the Privacy{" "}
                        <span className="text-[#33A6DC] hover:underline ">
                          policy.
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="mb-2">
                    <button
                      disabled={isPending}
                      className=" text-base md:text-lg hover:bg-[#eed680] font-semibold md:font-bold text-secondgraphy text-center py-2 w-full rounded-md  bg-primary"
                    >
                      {isPending ? "Registering..." : "Register"}
                    </button>
                  </div>
                  <div className="w-full mb-5">
                    <p className="text-[12px] md:text-[14px] font-normal text-center text-typography">
                      Have an account?{" "}
                      <Link href="/login">
                        {" "}
                        <span className="underline text-[#4DA0D7]">Login </span>
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    </ClientLayout>
  );
};

export default Signup;
