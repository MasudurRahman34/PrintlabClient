import ClientLayout from "@/components/Layout/ClientLayout";
import Link from "next/link";

const login = () => {
    return (
        <ClientLayout>
            <>
            <div className=" flex justify-center items-center px-5 md:px-0">
                <div className="login-section grid mt-4  md:w-[50%] ">
                    <h4 className="text-black -ml-4 mb-2 text-center">Log in</h4>
               <form>
               <div className="w-full">
                        <div className="">
                            <label for="input-noradius" className="form-label text-[#CCCCCC]">Email</label>
                            <input  type="text" className="form-control flex w-full" placeholder="Enter email"/>
                        </div>
                        <div className="xl:col-span-12 mb-4 mt-2 col-span-12">
                            <label for="input-rounded" className="form-label text-[#CCCCCC]">Password</label>
                            <input type="text" className="form-control" id="input-rounded" placeholder="Enter Password"/>
                            <p className="text-red-500 mt-1">error</p>
                        </div>
                        <div className="xl:col-span-12 col-span-12 mt-2 mb-2">
                           <div className="flex justify-between">
                                <div className="mb-3 form-check !ps-0">
                                    <input type="checkbox" className="form-check-input bg-[#8BBA72]  " id="exampleCheck1"/>
                                    <label className="form-check-label ps-2 "  for="exampleCheck1">Stay signed in</label>
                                </div>
                                <a href="#" className="underline text-[#6199D5]">Forgot Password?</a>
                            </div>
                        </div>
                        <div className="xl:col-span-12 col-span-12">
                        <input type="button" className="form-control ti-btn !text-white !bg-[#8BBA72] hover:!bg-[#C6DDBB] " id="input-button"  value="Sign in"/>
                        </div>
                        <div className="xl:col-span-12  col-span-12 text-center mb-4 mt-4 ">
                            <p href="#" className="text-gray-500 ">New customer? <Link href="/signup" ><span  className=" text-[#6199D5]" >Register here</span></Link></p>
                        </div>
                     
                        
                    </div>
               </form>

                </div>
            </div>
            </>
        </ClientLayout>
    );
};

export default login;