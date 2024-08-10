"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const Deliverypayment = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="container mx-auto">
      <h1 className="px-3 py-2 mt-5 text-lg font-bold md:text-2xl lg:text-3xl text-secondgraphy md:py-5">
        Delivery & Payment
      </h1>
      <div className="gap-5 md:flex">
        <div className="md:w-2/3">
          <div className="border rounded-md ">
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
                  <Link href="/my-account/menually-address">
                    {" "}
                    <p className="text-sm font-normal underline md:text-base text-primary">
                      Select existing address
                    </p>
                  </Link>
                </div>
              </div>
              <div className="flex ">
                <p className="text-base md:text-lg font-medium text-secondgraphy px-2 w-[50%]">
                  PostCode*
                </p>
                <div className="w-full">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                      type="text"
                      placeholder="Enter Post code"
                      className="block w-full px-2 py-2 mb-2 -mt-2 border rounded-md shadow-md outline-none border-primary "
                      {...register("postcode", { required: true })}
                    />
                    <input
                      type="checkbox"
                      id=""
                      name="address"
                      for="address"
                      required
                    />
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
          </div>
          <h4 className="w-full px-5 py-2 mt-5 text-base font-semibold rounded-md md:text-lg text-secondgraphy bg-primary ">
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

export default Deliverypayment;
