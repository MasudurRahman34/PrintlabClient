import ClientLayout from "@/components/Layout/ClientLayout";
import Link from "next/link";
const signup = () => {
  return (
    <ClientLayout>
      <>
   
        <div className="container mx-auto mb-2 md:mb-5 mt-10 px-2 ">
          <div className="flex justify-center ">
            <div>
              <h4 className=" text-center font-semibold md:font-bold py-5px-5 mt-5 mb-5 text-lg md:text-xl lg:text-2xl xl:text-3xl ">
                Register
              </h4>
              <form>
                <div className=" input-from w-full">
                  <div className="w-full mb-2 md:mb-5 ">
                    <label className=" text-[12px] md:text-base text-typography font-medium">
                      Email
                    </label>
                    <input
                      className="border text-typography text-[12px] md:text-[14px] px-2 py-2 w-full"
                      placeholder="Enter Email"
                      type="email"
                    />
                  </div>
                  <div className="w-full mb-2 md:mb-5">
                    <label className=" text-[12px] md:text-base text-typography font-medium">
                      Password
                    </label>
                    <input
                      className="border text-typography text-[12px] md:text-[14px] px-2 py-2 w-full"
                      placeholder="Enter Password"
                      type="password"
                    />
                  </div>
                  <div className="w-full mb-2 md:mb-5">
                  <label className=" text-[12px] block md:text-base text-typography font-medium">
                  Customer Type
                    </label>
                    <select id="countries" class=" form-control border text-[12px] md:text-[14px] text-typography px-2 py-2 w-full">
                      <option selected>Please select</option>
                      <option value="US">Charity or Community Group</option>
                      <option value="CA">Publin services of Edcation</option>
                      <option value="FR">Event / Entertainment</option>
                      <option value="DE">Personal</option>
                      <option value="DE">Designer / Agency</option>
                      <option value="DE">Small Business / Retail</option>
                      <option value="DE">Comporate / office</option>
                      <option value="DE">Printer / Print Reseller</option>
                    </select>
                  </div>
                  <div className=" mb-4 ">
                    <div>
                      <input
                        type="checkbox"
                        id="login"
                        name="vehicle1"
                        value="checkout"
                      />
                      <label
                        for="vehicle1"
                        className="text-[12px] md:text-base   text-secondgraphy"
                      >
                        {" "}
                        Sign up for exclusive offers and discounts by email and <br/> also receive 15% off your first order
                      </label>
                    </div>
                
                  </div>
                  <div className=" mb-4 ">
                    <div>
                      <input
                        type="checkbox"
                        id="login"
                        name="vehicle1"
                        value="checkout"
                      />
                      <label
                        for="vehicle1"
                        className="text-[12px] md:text-base   text-secondgraphy"
                      >
                        {" "}
                        I have read, understood and accept the Privacy <span className="text-[#33A6DC] hover:underline ">policy.</span>
                      </label>
                    </div>
                  </div>
          
                  <div className="mb-2">
                    <button className=" text-base md:text-lg hover:bg-[#eed680] font-semibold md:font-bold text-white text-center py-2 w-full rounded-md  bg-primary">
                      Sig Up
                    </button>
                  </div>
                  <div className="w-full mb-5">
                    <p className="text-[12px] md:text-[14px] font-normal text-center text-typography">Have an account?
                {" "}
                      <Link href="/login">
                        {" "}
                        <span className="underline text-[#4DA0D7]">
                          Login{" "}
                        </span>
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

export default signup;
