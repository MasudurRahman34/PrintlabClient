"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const Deliverypayment = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => console.log(data);

  
  return (
    <div className="container mx-auto">
      <h1 className="text-lg  md:text-2xl lg:text-3xl text-secondgraphy font-bold px-3 mt-5 py-2 md:py-5">
        Delivery & Payment
      </h1>
      <div className="md:flex gap-5">
        <div className="md:w-2/3">
          <div className="border rounded-md ">
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
                 <Link href="/my-account/menually-address" > <p
                    
                    className="text-sm md:text-base font-normal text-primary underline"
                  >
                    Select existing address
                  </p></Link>
                </div>
              </div>
              <div className="flex ">
                <p className="text-base md:text-lg font-medium text-secondgraphy px-2 w-[50%]">
                  PostCode*
                </p>
                <div className="w-full">
                  <form onSubmit={handleSubmit(onSubmit)} >
                      <input
                      type="text"
                      placeholder="Enter Post code"
                      className="block w-full border-primary border rounded-md shadow-md py-2 px-2 outline-none -mt-2 mb-2 "
                      {...register("postcode", { required: true })}
                    />
                    <input type="checkbox" id="" name="address" for="address" required />
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
          </div>
          <h4 className="text-base md:text-lg text-secondgraphy bg-primary font-semibold w-full rounded-md  px-5 py-2 mt-5 ">
            Billing Address
          </h4>
          <h4 className="mt-5 mb-5 text-lg bg-[#faefc9] font-medium text-typography w-full rounded-md  px-5 py-2 ">
            Payment
          </h4>
        </div>
        <div className="md:w-1/3">
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

export default Deliverypayment;
