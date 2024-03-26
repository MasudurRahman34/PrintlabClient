import ClientLayout from "@/components/Layout/ClientLayout";
import Link from "next/link";
const signup = () => {
    return (
        <ClientLayout>
            <>
            <div className=" flex justify-center items-center px-5 md:px-0">
                <div className="login-section grid mt-4  md:w-[50%] ">
                    <h4 className="text-black text-center mb-2">Register</h4>
               <form>
               <div className="w-full">
                        <div className="">
                            <label for="input-noradius" className="form-label text-[#CCCCCC]">Email</label>
                            <input  type="text" className="form-control flex w-full" placeholder="Enter email"/>
                        </div>
                        <div className="xl:col-span-12 mb-4 mt-2 col-span-12">
                            <label for="input-rounded" className="form-label text-[#CCCCCC]">Password</label>
                            <input type="text" className="form-control" id="input-rounded" placeholder="Enter Password"/>
                        </div>
                        <div className="xl:col-span-12 mb-4 mt-2 col-span-12">
                        <label for="input-rounded" className="form-label text-[#CCCCCC]">Customer Type</label>
                            <select id="countries" class=" form-control ">
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
                        <div className="xl:col-span-12 col-span-12 mt-2 mb-2">
                           <div className="">
                                <div class="form-check form-check-md flex items-center">
                                   <input class="form-check-input" type="checkbox" value="" id="checkebox-md" />
                                     <label class="form-check-label w-[60%]" for="checkebox-md">
                                     Sign up for exclusive offers and discounts by email and  also receive 15% off your first order
                                     </label>
                               </div>
                                <div class="form-check form-check-md flex items-center">
                                   <input class="form-check-input" type="checkbox" value="" id="checkebox-md" />
                                     <label class="form-check-label" for="checkebox-md">
                                     I have read, understood and accept the  <Link href="#"><span className="text-[#23527C]" > Privacy policy.</span></Link> </label>
                               </div>
                            </div>
                        </div>
                        <div className="xl:col-span-12 col-span-12 mt-4">
                        <input type="button" className="form-control ti-btn !text-white !bg-[#8BBA72] hover:!bg-[#C6DDBB] " id="input-button"  value="Sign Up"/>
                        </div>
                        <div className="xl:col-span-12  col-span-12 text-center mb-4 mt-4 ">
                            <p href="#" className="text-gray-500 ">Have an account?? <Link href="/login" ><span  className=" text-[#6199D5]" >login</span></Link></p>
                        </div>
                    </div>
               </form>

                </div>
            </div>
            </>
        </ClientLayout>
    );
};

export default signup;