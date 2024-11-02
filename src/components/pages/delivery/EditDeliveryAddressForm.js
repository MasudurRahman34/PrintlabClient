import Loader from "@/components/Loader/Loader";
import { useAuth } from "@/hooks/useAuth";

import useToastMessage from "@/hooks/useToastMessage";
import { address_edit_schema } from "@/lib/schema";
import {
  createAddressMutation,
  updateAddressMutation,
} from "@/resolvers/mutation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const EditDeliveryAddressForm = ({
  data,
  setEditAddressData,
  fileType = "shipping",
}) => {
  const showToastMessage = useToastMessage();
  const { user, session } = useAuth();

  const { mutate, isPending } = useMutation({
    mutationKey: "addAddress",
    mutationFn: updateAddressMutation,
  });

  const {
    register,
    setValue,
    reset,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      company_name: "",
      address: "",
      address_2: "",
      town: "",
      postcode: "",
      country: "",
      delivery_mobile_number: "",
      delivery_email: "",
      default: false,
    },
    resolver: yupResolver(address_edit_schema),
  });

  const onSubmit = (formdata) => {
    const variables = {
      first_name: formdata.first_name,
      last_name: formdata.last_name,
      company_name: formdata.company_name,
      line_1: formdata.address,
      line_2: formdata.address_2 || "",
      country: formdata.country,
      town: formdata.town,
      post_code: formdata.postcode,
      address: formdata.address,
      email: formdata.delivery_email,
      phone: formdata.delivery_mobile_number,
      is_default: formdata.default ? 1 : 0,
      type: fileType,
      user_id: user?.id,
    };

    mutate(
      {
        variables,
        token: session?.token,
        address_id: data.id,
      },
      {
        onSuccess: () => {
          toast.success("Address added successfully");
        },
        onError: (error) => {
          showToastMessage(error.response.data.message || "An error occurred");
        },
      }
    );
  };

  useEffect(() => {
    if (data) {
      setValue("address", data.line_1, { shouldValidate: true });
      setValue("town", data.town, { shouldValidate: true });
      setValue("postcode", data.post_code, { shouldValidate: true });
      setValue("country", data.country, { shouldValidate: true });
      setValue("first_name", data.first_name, { shouldValidate: true });
      setValue("last_name", data.last_name, { shouldValidate: true });
      setValue("company_name", data.company_name, { shouldValidate: true });
      setValue("address_2", data.line_2, { shouldValidate: true });
      setValue("delivery_email", data.email, { shouldValidate: true });
      setValue("delivery_mobile_number", data.phone, { shouldValidate: true });
    }
  }, [data, setValue]);

  return (
    <div>
      <div className="px-3 py-2 md:py-3">
        {data?.type === "shipping" ? (
          <div className="flex items-center justify-between mb-2 md:mb-3 ">
            <h6 className="px-2 py-5 text-sm font-semibold text-black md:text-base ">
              Edit Delivery Address
            </h6>
          </div>
        ) : (
          <div className="flex items-center justify-between mb-2 md:mb-3 ">
            <h6 className="px-2 py-5 text-sm font-semibold text-black md:text-base ">
              Edit Billing Address
            </h6>
          </div>
        )}

        {/* ---------- */}
        <div className="flex ">
          <p className="text-sm md:text-base  font-medium text-secondgraphy px-2 w-[65%]">
            PostCode*
          </p>
          <div className="w-full">
            <input
              type="text"
              placeholder="Enter Post code"
              className="block w-full px-2 py-1 mb-2 border rounded-md outline-none md:py-2 border-secondgraphy "
              name="postcode"
              {...register("postcode")}
            />
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="border"></div>
        <div className="px-2 mb-2 md:px-5 md:mb-5">
          <div className="flex mt-5">
            <label className="w-[40%] font-medium text-typography text-sm md:text-base ">
              Frist Name*
            </label>

            <div className="w-[60%]">
              <input
                type="text"
                className="block w-full px-2 py-1 mb-2 -mt-2 text-sm border rounded-md outline-none md:text-base md:py-2 border-secondgraphy"
                name="first_name"
                {...register("first_name")}
              />
              {errors.first_name && (
                <p className="text-sm text-red-500 md:text-base">
                  {errors.first_name.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex mt-2 md:mt-5">
            <label className="w-[40%] font-medium text-typography text-sm md:text-base ">
              Last Name*
            </label>
            <div className="w-[60%]">
              <input
                type="text"
                className="block w-full px-2 py-1 mb-2 -mt-2 text-sm border rounded-md outline-none md:text-base md:py-2 border-secondgraphy"
                name="last_name"
                {...register("last_name")}
              />
              {errors.last_name && (
                <p className="text-sm text-red-500 md:text-base">
                  {errors.last_name.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex mt-2 md:mt-5">
            <label className="w-[40%] font-medium text-typography text-sm md:text-base ">
              Compony Name*
            </label>
            <div className="w-[60%]">
              <input
                type="text"
                className="block w-full px-2 py-1 mb-2 -mt-2 text-sm border rounded-md outline-none md:text-base md:py-2 border-secondgraphy"
                name="company_name"
                {...register("company_name")}
              />
              {errors.company_name && (
                <p className="text-sm text-red-500 md:text-base">
                  {errors.company_name.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex mt-2 md:mt-5">
            <label className="w-[40%] font-medium text-typography text-sm md:text-base ">
              Address line 1*
            </label>
            <div className="w-[60%]">
              <input
                type="text"
                className="block w-full px-2 py-1 mb-2 text-sm border rounded-md shadow-md outline-none md:text-base md:py-2 border-secondgraphy"
                name="address"
                {...register("address")}
              />
              {errors.address && (
                <p className="text-sm text-red-500 md:text-base">
                  {errors.address.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex mt-2 md:mt-5">
            <label className="w-[40%] font-medium text-typography text-sm md:text-base ">
              Address line 2*
            </label>
            <div className="w-[60%]">
              <input
                type="text"
                className="block w-full px-2 py-1 mb-2 text-sm border rounded-md shadow-md outline-none md:text-base md:py-2 border-secondgraphy"
                name="address_2"
                {...register("address_2")}
              />
              {errors.address_2 && (
                <p className="text-sm text-red-500 md:text-base">
                  {errors.address_2.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex mt-2 md:mt-5">
            <label className="w-[40%] font-medium text-typography text-sm md:text-base ">
              Town*
            </label>
            <div className="w-[60%]">
              <input
                type="text"
                className="block w-full px-2 py-1 mb-2 -mt-2 text-sm border rounded-md outline-none md:text-base md:py-2 border-secondgraphy"
                name="town"
                {...register("town")}
              />
              {errors.town && (
                <p className="text-sm text-red-500 md:text-base">
                  {errors.town.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex mt-2 md:mt-5">
            <label className="w-[40%] font-medium text-typography text-sm md:text-base ">
              Country*
            </label>
            <div className="w-[60%]">
              <input
                type="text"
                className="block w-full px-2 py-1 mb-2 -mt-2 text-sm border rounded-md outline-none md:text-base md:py-2 border-secondgraphy"
                name="country"
                {...register("country")}
              />
              {errors.country && (
                <p className="text-sm text-red-500 md:text-base">
                  {errors.country.message}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="bg-[#faefc9] p-2 md:p-5">
          <div>
            {data?.type === "shipping" ? (
              <>
                <h5 className="mb-2 text-sm font-semibold md:text-base text-typography ">
                  How would like to be update on your Delivery
                </h5>
                <p className="mb-5 text-sm font-normal md:text-base text-typography">
                  Create print-ready artwork swiftly with our Online Designer.
                  This designer enables you to add your own images, text, or
                  graphics and see your final printed designs come to life. We
                  even provide interactive 3D models for certain products,
                  allowing you to visualise and modify your final product.
                </p>
              </>
            ) : null}
            <div className="flex ">
              <label className="w-[40%] text-secondgraphy font-semibold  text-sm md:text-base ">
                {data?.type === "shipping"
                  ? "Delivery Mobile Number"
                  : "Billing Mobile Number"}
              </label>

              <div className="w-[60%]">
                <input
                  type="text"
                  className="block w-full px-2 py-1 mb-2 -mt-2 text-sm border rounded-md outline-none md:text-base md:py-2 border-secondgraphy"
                  name="delivery_mobile_number"
                  {...register("delivery_mobile_number")}
                />
                {errors.delivery_mobile_number && (
                  <p className="text-sm text-red-500 md:text-base">
                    {errors.delivery_mobile_number.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex mt-2 md:mt-4 ">
              <label className="w-[40%] text-secondgraphy font-semibold  text-sm md:text-base ">
                {data?.type === "shipping"
                  ? "Delivery Email Address"
                  : "Billing Email Address"}
              </label>

              <div className="w-[60%]">
                <input
                  type="email"
                  className="block w-full px-2 py-1 mb-2 -mt-2 text-sm border rounded-md outline-none md:text-base md:py-2 border-secondgraphy"
                  name="delivery_email"
                  {...register("delivery_email")}
                />
                {errors.delivery_email && (
                  <p className="text-sm text-red-500 md:text-base">
                    {errors.delivery_email.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-4 p-4 mt-2">
          <button
            type="submit"
            className="px-4 py-2 mt-2 text-sm text-white border rounded-md md:text-base border-secondgraphy bg-secondgraphy"
          >
            Save
          </button>
          <button
            type="button"
            className="px-4 py-2 mt-2 text-sm border rounded-md border-secondgraphy hover:text-white hover:bg-secondgraphy md:text-base"
            onClick={() =>
              setEditAddressData({
                show: false,
                data: null,
              })
            }
          >
            {data?.type === "shipping" ? "Choose different address" : "Cancel"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditDeliveryAddressForm;
