import ClientLayout from "@/components/Layout/ClientLayout";
import Link from "next/link";

const login = () => {
  return (
    <ClientLayout>
      <>
        <div className="container mx-auto mb-2 md:mb-5 mt-10 ">
          <div className="flex justify-center ">
            <div className=" w-full md:w-[50%]">
              <h4 className=" font-semibold md:font-bold py-5px-5 mt-5 mb-5 text-lg md:text-xl lg:text-2xl xl:text-3xl ">
                Log In
              </h4>
             <div className="">
             <form>
                <div className=" input-from w-full">
                  <div className="w-full mb-2 md:mb-5 ">
                    <label className=" text-[12px] md:text-base text-typography font-medium">
                      Email
                    </label>
                    <input className="border text-typography text-[12px] md:text-[14px] px-2 py-2 w-full" placeholder="Enter Email" type="email" />
                  </div>
                  <div className="w-full mb-2 md:mb-5">
                    <label className=" text-[12px] md:text-base text-typography font-medium">
                      Password
                    </label>
                    <input className="border text-typography text-[12px] md:text-[14px] px-2 py-2 w-full" placeholder="Enter Password" type="password" />
                  </div>
                  <div className=" flex justify-between mb-4 ">
                    <div className="flex items-center gap-1 ">
                      <input
                        type="checkbox"
                        id="login"
                        name="vehicle1"
                        value="checkout"
                        
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
                    <button className=" text-base md:text-lg hover:bg-[#eed680] font-semibold md:font-bold text-white text-center py-2 w-full rounded-md  bg-primary">
                      Sign In
                    </button>
                  </div>
                  <div className="w-full mb-5">
                    <p className="text-[12px] md:text-[14px] font-normal text-center text-typography">
                      New coustmar?
                      <Link href="/signup">

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

export default login;
