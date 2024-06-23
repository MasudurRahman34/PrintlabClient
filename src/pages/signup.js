import ClientLayout from "@/components/Layout/ClientLayout";
import Link from "next/link";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
const Signup = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const { email, password, customerValue } = data;

    if (email && password && customerValue) {
      console.log(data);
      const users = localStorage.getItem("users");
      let usersArray = [];
      if (users) {
        usersArray = JSON.parse(users);
      }
      usersArray.push(data);

      localStorage.setItem("users", JSON.stringify(usersArray));
    } else {
      toast.error("Please fill all the fields");
    }
  };

  return (
    <ClientLayout>
      <>
        <div className="container px-2 mx-auto mt-10 mb-2 md:mb-5 ">
          <div className="flex justify-center ">
            <div className="w-[50%]">
              <h4 className="mt-5 mb-5 text-lg font-semibold text-center md:font-bold py-5px-5 md:text-xl lg:text-2xl xl:text-3xl">
                Register
              </h4>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full input-from">
                  <div className="w-full mb-2 md:mb-5 ">
                    <label className=" text-[12px] md:text-base text-typography font-medium ">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter Email"
                      className="border text-typography text-[12px] md:text-[14px] px-2 py-2 w-full outline-none "
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
                      className="border text-typography text-[12px] md:text-[14px] px-2 py-2 w-full outline-none"
                      {...register("password", {
                        required: true,
                        minLength: 8,
                      })}
                    />
                  </div>
                  <div className="w-full mb-2 md:mb-5">
                    <label className=" text-[12px] block md:text-base text-typography font-medium">
                      Customer Type
                    </label>
                    {/* <select
                      id="countries"
                      class=" form-control border text-[12px] md:text-[14px] text-typography px-2 py-2 w-full"
                    >  */}
                    <select
                      {...register("customerValue")}
                      className=" form-control border text-[12px] md:text-[14px] text-typography px-2 py-2 w-full outline-none "
                    >
                      <option selected disabled>
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
                  </div>
                  <div className="mb-4 ">
                    <div>
                      <input
                        type="checkbox"
                        id="signup"
                        name="signup"
                        value="checkout"
                        required
                      />
                      <label
                        for="signup"
                        className="text-[12px] md:text-base   text-secondgraphy"
                      >
                        {" "}
                        Sign up for exclusive offers and discounts by email and{" "}
                        <br /> also receive 15% off your first order
                      </label>
                    </div>
                  </div>
                  <div className="mb-4 ">
                    <div>
                      <input
                        type="checkbox"
                        id="accept"
                        name="accept"
                        value="checkout"
                        for="accept"
                        required
                      />
                      <label
                        for="accept"
                        className="text-[12px] md:text-base   text-secondgraphy"
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
                    <button className=" text-base md:text-lg hover:bg-[#eed680] font-semibold md:font-bold text-white text-center py-2 w-full rounded-md  bg-primary">
                      Sign Up
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
