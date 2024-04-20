"use Client";

import ClientLayout from "../Layout/ClientLayout";

const ManullyAddress = () => {
  return (
    <div className="container mx-auto ">
      <h1 className="text-lg  md:text-2xl lg:text-3xl text-secondgraphy font-bold px-3 mt-5 py-2 md:py-5">
        Delivery & Payment
      </h1>
      <div className="md:flex gap-5">
        <div className="mt-5 md:w-2/3 mb-2 md:mb-5">
          <div className="border rounded-md">
            <h5 className="text-lg text-secondgraphy bg-primary font-semibold w-full rounded-md  px-5 py-2 ">
              Delivery
            </h5>
            <div className="px-3 py-2 md:py-3">
              <div className="flex justify-between items-center mb-2 md:mb-3 ">
                <h6 className="text-base md:text-lg font-semibold  px-2 py-5 text-black ">
                  Add new Delivery Addresses
                </h6>
                <div>
                  <p className="text-[12px] md:text-base font-normal text-red-500">
                    Required*
                  </p>
                  <a
                    href="#"
                    className="text-sm md:text-base font-normal text-primary underline"
                  >
                    Select existing address
                  </a>
                </div>
              </div>
              <div className="flex ">
                <p className="text-base md:text-lg font-medium text-secondgraphy px-2 w-[65%]">
                  PostCode*
                </p>
                <div className="w-full">
                  <form>
                    <input
                      type="text"
                      id="input"
                      name="code"
                      className="block w-full border-primary border rounded-md shadow-md py-2 px-2 outline-none -mt-2 mb-2"
                    />
                    <input type="checkbox" id="" name="address" for="address" />
                    <label
                      for="address"
                      className="text-sm ml-3 md:text-base font-medium text-secondgraphy "
                    >
                      Enter Addresses Manualy
                    </label>
                  </form>
                </div>
              </div>
            </div>
            <div className="border"></div>
            <div className="px-2 md:px-5 mb-2 md:mb-5">
              <form>
                <div className="flex mt-5">
                  <label className="w-[40%] font-medium text-typography text-base md:text-lg">
                    Frist Name*
                  </label>
                  <input
                    type="text"
                    id="input"
                    name="code"
                    required
                    className=" w-[60%] block border-primary border rounded-md shadow-md py-2 px-2 outline-none -mt-2 mb-2"
                  />
                </div>
                <div className="flex mt-2 md:mt-5">
                  <label className="w-[40%] font-medium text-typography text-base md:text-lg">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    id="input"
                    name="code"
                    required
                    className=" w-[60%] block border-primary border rounded-md shadow-md py-2 px-2 outline-none -mt-2 mb-2"
                  />
                </div>
                <div className="flex mt-2 md:mt-5">
                  <label className="w-[40%] font-medium text-typography text-base md:text-lg">
                    Compony Name*
                  </label>
                  <input
                    type="text"
                    id="input"
                    name="code"
                    required
                    className=" w-[60%] block border-primary border rounded-md shadow-md py-2 px-2 outline-none -mt-2 mb-2"
                  />
                </div>
                <div className="flex mt-2 md:mt-5">
                  <label className="w-[40%] font-medium text-typography text-base md:text-lg">
                    Address*
                  </label>
                  <div className="w-[60%]">
                    <input
                      type="text"
                      id="input"
                      name="code"
                      required
                      className=" w-full block border-primary border rounded-md shadow-md py-2 px-2 outline-none  -mt-2 mb-2"
                    />
                    <input
                      type="text"
                      id="input"
                      name="code"
                      required
                      className=" w-full mt-5 block border-primary border rounded-md shadow-md py-2 px-2 outline-none  mb-2"
                    />
                  </div>
                </div>
                <div className="flex mt-2 md:mt-5">
                  <label className="w-[40%] font-medium text-typography text-base md:text-lg">
                    Town*
                  </label>
                  <input
                    type="text"
                    id="input"
                    name="code"
                    required
                    className=" w-[60%] block border-primary border rounded-md shadow-md py-2 px-2 outline-none -mt-2 mb-2"
                  />
                </div>
                <div className="flex mt-2 md:mt-5">
                  <label className="w-[40%] font-medium text-typography text-base md:text-lg">
                    Country*
                  </label>
                  <input
                    type="text"
                    id="input"
                    name="code"
                    placeholder="CB"
                    required
                    className=" w-[60%] block border-primary border rounded-md shadow-md py-2 px-2 outline-none -mt-2 mb-2"
                  />
                </div>
              </form>
            </div>
            <div className="bg-[#faefc9] p-2 md:p-5">
              <div>
                <h5 className="text-typography font-semibold mb-2 text-base md:text-lg">How would like to be update on your Delivery</h5>
                <p className="text-sm md:text-base font-normal text-typography mb-5">
                  Create print-ready artwork swiftly with our Online Designer.
                  This designer enables you to add your own images, text, or
                  graphics and see your final printed designs come to life. We
                  even provide interactive 3D models for certain products,
                  allowing you to visualise and modify your final product.
                </p>
                <form>
                  <div className="flex ">
                    <label className="w-[40%] text-secondgraphy font-semibold  text-sm md:text-base ">Delivery contact Mobile number</label>
                    <input
                      type="text"
                      id="input"
                      name="code"
                      className=" w-[60%] block border-primary border rounded-md shadow-md py-1 px-2 outline-none -mt-2 mb-2"
                    />
                  </div>
                  <div className="flex mt-2 md:mt-4 ">
                    <label className="w-[40%] text-secondgraphy font-semibold  text-sm md:text-base ">Delivery Enter Email</label>
                    <input
                      type="email"
                      id="input"
                      name="code"
                      className=" w-[60%] block border-primary border rounded-md shadow-md py-1 px-2 outline-none -mt-2 mb-2"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 md:py-5">
                <div>
                  <div>
                    <input type="checkbox" id="" name="address" for="address" />
                    <label
                      for="address"
                      className="text-sm ml-3 md:text-base font-medium text-secondgraphy "
                    >
                      Save as Address
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" id="" name="address" for="address" />
                    <label
                      for="address"
                      className="text-sm ml-3 md:text-base font-medium text-secondgraphy "
                    >
                           Save as default Delivery Address
                    </label>
                  </div>
                </div>
            </div>
          <div className="px-2 md:px-5 mb-5 ">
          <button className="w-full border py-1 md:py-2 bg-primary text-base md:text-lg font-bold text-secondgraphy rounded-md">Add Address</button>
          </div>
          </div>
          <h4 className="text-base md:text-lg text-secondgraphy bg-primary font-semibold w-full rounded-md  px-5 py-2 mt-5 ">
            Billing Address
          </h4>
          <h4 className="mt-5 mb-5 text-lg bg-[#faefc9] font-medium text-typography w-full rounded-md  px-5 py-2 ">
            Payment
          </h4>
        </div>
        <div className="md:w-1/3 mt-5">
          <div className="w-full border rounded-md ">
            <h5 className="text-lg bg-[#faefc9] font-semibold text-typography  rounded-md  px-5 py-2 w-full">
              Orders Summry
            </h5>
            <div className="px-5 py-5">
              <div className="flex justify-between">
                <div className=" text-bae md:text-lg text-black font-semibold">
                  <p className="py-2">Sub Total</p>
                  <p className="py-2">Vat</p>
                </div>
                <div className="text-bae md:text-lg  text-[#A3AAAE] font-semibold ">
                  <p className="py-2">$23.00</p>
                  <p className="py-2">30.40</p>
                </div>
              </div>
              <div className="border mt-2 md:mt-3 mb-2 md:mb-3"></div>
              <div className="flex justify-between  text-lg md:text-xl font-bold text-black ">
                <h4>Total</h4>
                <h4>$25.20</h4>
              </div>
            </div>
          </div>
          <div className="border mt-5 rounded-md mb-2 md:mb-5">
            <h4 className="text-lg bg-[#faefc9] font-semibold text-typography  rounded-md  px-5 py-2 w-full ">
              Basket(1)
            </h4>
            <div className="text-sm md:text-base font-medium flex justify-between px-5 py-6 ">
              <div className="flex">
                <p className="text-[12px] md:text-base font-normal text-gray-400">Item 01.</p>
                <p className="text-[12px] md:text-base font-medium text-black ml-2 md:ml-4">Saddle stitch Booklets</p>
              </div>
              <h6 className="text-[12px] md:text-base font-semibold text-black ">$23.20</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManullyAddress;
