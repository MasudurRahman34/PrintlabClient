"use Client";

import ClientLayout from "../Layout/ClientLayout";

const ManullyAddress = () => {
  return (
    <div className="custom_container ">
      <h1 className="px-3 py-2 mt-5 text-lg font-bold md:text-2xl lg:text-3xl text-secondgraphy md:py-5">
        Delivery & Payment
      </h1>
      <div className="gap-5 md:flex">
        <div className="mt-5 mb-2 md:w-2/3 md:mb-5">
          <div className="border rounded-md">
            <h5 className="w-full px-5 py-2 text-lg font-semibold rounded-md text-secondgraphy bg-primary ">
              Delivery
            </h5>
            <div className="px-3 py-2 md:py-3">
              <div className="flex items-center justify-between mb-2 md:mb-3 ">
                <h6 className="px-2 py-5 text-base font-semibold text-black md:text-lg ">
                  Add new Delivery Addresses
                </h6>
                <div>
                  <p className="text-[12px] md:text-base font-normal text-red-500">
                    Required*
                  </p>
                  <a
                    href="#"
                    className="text-sm font-normal underline md:text-base text-primary"
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
                      className="block w-full px-2 py-2 mb-2 -mt-2 border rounded-md shadow-md outline-none border-primary"
                    />
                    <input type="checkbox" id="" name="address" for="address" />
                    <label
                      for="address"
                      className="ml-3 text-sm font-medium md:text-base text-secondgraphy "
                    >
                      Enter Addresses Manualy
                    </label>
                  </form>
                </div>
              </div>
            </div>
            <div className="border"></div>
            <div className="px-2 mb-2 md:px-5 md:mb-5">
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
                      className="block w-full px-2 py-2 mb-2 -mt-2 border rounded-md shadow-md outline-none  border-primary"
                    />
                    <input
                      type="text"
                      id="input"
                      name="code"
                      required
                      className="block w-full px-2 py-2 mt-5 mb-2 border rounded-md shadow-md outline-none  border-primary"
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
                <h5 className="mb-2 text-base font-semibold text-typography md:text-lg">
                  How would like to be update on your Delivery
                </h5>
                <p className="mb-5 text-sm font-normal md:text-base text-typography">
                  Create print-ready artwork swiftly with our Online Designer.
                  This designer enables you to add your own images, text, or
                  graphics and see your final printed designs come to life. We
                  even provide interactive 3D models for certain products,
                  allowing you to visualise and modify your final product.
                </p>
                <form>
                  <div className="flex ">
                    <label className="w-[40%] text-secondgraphy font-semibold  text-sm md:text-base ">
                      Delivery contact Mobile number
                    </label>
                    <input
                      type="text"
                      id="input"
                      name="code"
                      className=" w-[60%] block border-primary border rounded-md shadow-md py-1 px-2 outline-none -mt-2 mb-2"
                    />
                  </div>
                  <div className="flex mt-2 md:mt-4 ">
                    <label className="w-[40%] text-secondgraphy font-semibold  text-sm md:text-base ">
                      Delivery Enter Email
                    </label>
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
            <div className="flex items-center justify-center py-2 md:py-5">
              <div>
                <div>
                  <input type="checkbox" id="" name="address" for="address" />
                  <label
                    for="address"
                    className="ml-3 text-sm font-medium md:text-base text-secondgraphy "
                  >
                    Save as Address
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="" name="address" for="address" />
                  <label
                    for="address"
                    className="ml-3 text-sm font-medium md:text-base text-secondgraphy "
                  >
                    Save as default Delivery Address
                  </label>
                </div>
              </div>
            </div>
            <div className="px-2 mb-5 md:px-5 ">
              <button className="w-full py-1 text-base font-bold border rounded-md md:py-2 bg-primary md:text-lg text-secondgraphy">
                Add Address
              </button>
            </div>
          </div>
          <h4 className="w-full px-5 py-2 mt-5 text-base font-semibold rounded-md md:text-lg text-secondgraphy bg-primary ">
            Billing Address
          </h4>
          <h4 className="mt-5 mb-5 text-lg bg-[#faefc9] font-medium text-typography w-full rounded-md  px-5 py-2 ">
            Payment
          </h4>
        </div>
        <div className="mt-5 md:w-1/3">
          <div className="w-full border rounded-md ">
            <h5 className="text-lg bg-[#faefc9] font-semibold text-typography  rounded-md  px-5 py-2 w-full">
              Orders Summry
            </h5>
            <div className="px-5 py-5">
              <div className="flex justify-between">
                <div className="font-semibold text-black  text-bae md:text-lg">
                  <p className="py-2">Sub Total</p>
                  <p className="py-2">Vat</p>
                </div>
                <div className="text-bae md:text-lg  text-[#A3AAAE] font-semibold ">
                  <p className="py-2">$23.00</p>
                  <p className="py-2">30.40</p>
                </div>
              </div>
              <div className="mt-2 mb-2 border md:mt-3 md:mb-3"></div>
              <div className="flex justify-between text-lg font-bold text-black md:text-xl ">
                <h4>Total</h4>
                <h4>$25.20</h4>
              </div>
            </div>
          </div>
          <div className="mt-5 mb-2 border rounded-md md:mb-5">
            <h4 className="text-lg bg-[#faefc9] font-semibold text-typography  rounded-md  px-5 py-2 w-full ">
              Basket(1)
            </h4>
            <div className="flex justify-between px-5 py-6 text-sm font-medium md:text-base ">
              <div className="flex">
                <p className="text-[12px] md:text-base font-normal text-gray-400">
                  Item 01.
                </p>
                <p className="text-[12px] md:text-base font-medium text-black ml-2 md:ml-4">
                  Saddle stitch Booklets
                </p>
              </div>
              <h6 className="text-[12px] md:text-base font-semibold text-black ">
                $23.20
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManullyAddress;
