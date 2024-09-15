import Loader from "@/components/Loader/Loader";
import { useAuth } from "@/hooks/useAuth";
import useDebounce from "@/hooks/useDebounce";
import useToastMessage from "@/hooks/useToastMessage";
import { address_schema } from "@/lib/schema";
import { validateLondonPostcode } from "@/lib/utils";
import { createAddressMutation } from "@/resolvers/mutation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const NewAddressForm = ({
  setShowNewAddressForm,
  address_type = "shipping",
  refetch,
}) => {
  const showToastMessage = useToastMessage();
  const { isAuthenticated, user, session } = useAuth();
  const [results, set_results] = useState(null);
  const [post_code, set_post_code] = useState("");
  const [selectedAddress, set_selectedAddress] = useState(null);
  const [manually, set_manually] = useState(false);
  const [isFetchingAddress, set_isFetchingAddress] = useState(false);

  const { mutate, isPending } = useMutation({
    mutationKey: "addAddress",
    mutationFn: createAddressMutation,
  });

  const {
    register,
    setValue,
    reset,
    handleSubmit,
    getValues,

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
    resolver: yupResolver(address_schema),
  });

  const onSubmit = (data) => {
    const variables = {
      first_name: data.first_name,
      last_name: data.last_name,
      line_1: data.address,
      post_code: post_code,
      address: data.address,
      is_default: data.default ? 1 : 0,
      user_id: user?.id,
      type: address_type,
    };

    if (data.company_name) variables.company_name = data.company_name;
    if (data.address_2) variables.line_2 = data.address_2;
    if (data.country) variables.country = data.country;
    if (data.town) variables.town = data.town;
    if (data.delivery_email) variables.email = data.delivery_email;
    if (data.delivery_mobile_number)
      variables.phone = data.delivery_mobile_number;

    mutate(
      {
        variables,
        token: session?.token,
      },
      {
        onSuccess: () => {
          toast.success("Address added successfully");
          reset();
          set_post_code("");
          set_results(null);
          refetch();
          setShowNewAddressForm(false);
        },
        onError: (error) => {
          showToastMessage(error.response.data.message || "An error occurred");
        },
      }
    );
  };

  console.log("errors", errors);

  const search = async (searchQuery) => {
    try {
      if (!validateLondonPostcode(searchQuery)) return;
      set_isFetchingAddress(true);
      const response = await axios.get(
        `https://pcls1.craftyclicks.co.uk/json/rapidaddress?key=f1040-47ec6-d0279-02440&postcode=${searchQuery}&response=data_formatted`,
        {
          params: { q: searchQuery },
        }
      );

      const data = await response?.data;
      set_isFetchingAddress(false);
      set_results(data);
    } catch (error) {
      set_isFetchingAddress(false);
      console.error("Error fetching search results", error);
    }
  };

  const debouncedSearch = useDebounce(search, 2000);

  const handlePostCode = (e) => {
    set_post_code(e.target.value);
    debouncedSearch(e.target.value);
    setValue("postcode", e.target.value, { shouldValidate: true });
  };

  const onSelectAddress = (e) => {
    set_selectedAddress(e.target.value);
  };

  useEffect(() => {
    if (selectedAddress && !manually && results) {
      const address = results?.delivery_points?.find(
        (address) => address.udprn === selectedAddress
      );

      setValue("address", address.line_1, { shouldValidate: true });
      setValue("town", results?.town, { shouldValidate: true });
      setValue("postcode", results?.postcode, { shouldValidate: true });
      setValue("country", results?.postal_county, { shouldValidate: true });
    }
  }, [selectedAddress, manually, results, setValue]);

  return (
    <div className="pb-4">
      <div className="px-3 py-2 md:py-3">
        {address_type === "shipping" && (
          <div className="flex items-center justify-between mb-2 md:mb-3 ">
            <h6 className="px-2 py-5 text-sm font-semibold text-black md:text-base ">
              Add new Delivery Addresses
            </h6>
            <div>
              <p className="text-sm font-normal text-red-500 md:text-base">
                Required*
              </p>

              <p
                className="text-sm font-normal underline cursor-pointer md:text-base text-primary"
                onClick={() => setShowNewAddressForm(false)}
              >
                Select existing address
              </p>
            </div>
          </div>
        )}

        {address_type === "billing" && (
          <div className="px-2 mb-3 text-end">
            <p
              className="text-sm font-normal underline cursor-pointer md:text-base text-primary"
              onClick={() => setShowNewAddressForm(false)}
            >
              Create billing address later
            </p>
          </div>
        )}
        <div className="flex ">
          <p className="text-sm md:text-base  font-medium text-secondgraphy px-2 w-[65%]">
            PostCode*
          </p>
          <div className="w-full">
            <input
              type="text"
              name="post_code"
              placeholder="Enter Post code"
              className="block w-full px-2 py-1 mb-2 text-sm border rounded-md outline-none md:text-base md:py-2 border-secondgraphy "
              value={post_code}
              onChange={handlePostCode}
            />
            {errors.postcode && (
              <p className="text-red-500">{errors.postcode.message}</p>
            )}
          </div>
        </div>
        {isFetchingAddress ? (
          <Loader />
        ) : (
          results && (
            <>
              <div className="flex mt-3">
                <p className=" text-sm md:text-base  font-medium text-secondgraphy px-2 w-[65%]">
                  Select Address
                </p>
                <div className="w-full">
                  <select
                    name="address_select"
                    id="address_select"
                    className="block w-full px-2 py-1 mb-2 text-sm border rounded-md outline-none md:text-base md:py-2 border-secondgraphy"
                    value={selectedAddress}
                    onChange={onSelectAddress}
                  >
                    <option value="">Select Address</option>
                    {results?.delivery_points?.map((address) => (
                      <option key={address.udprn} value={address.udprn}>
                        {address.line_1}, {results?.town}, {results?.postcode}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex mt-3">
                <p className="text-sm md:text-base invisible  font-medium text-secondgraphy px-2 w-[65%]">
                  Select Address
                </p>
                <div>
                  <input
                    type="checkbox"
                    id="address"
                    name="address"
                    for="address"
                    onChange={(e) => set_manually(e.target.checked)}
                  />
                  <label
                    for="address"
                    className="ml-3 text-sm font-medium md:text-base text-secondgraphy "
                  >
                    Enter Addresses Manualy
                  </label>
                </div>
              </div>
            </>
          )
        )}
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
                <p className="text-red-500">{errors.first_name.message}</p>
              )}
            </div>
          </div>
          <div className="flex mt-2 md:mt-5">
            <label className="w-[40%] font-medium text-typography text-sm md:text-base">
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
                <p className="text-red-500">{errors.last_name.message}</p>
              )}
            </div>
          </div>
          <div className="flex mt-2 md:mt-5">
            <label className="w-[40%] font-medium text-typography text-sm md:text-base">
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
                <p className="text-red-500">{errors.company_name.message}</p>
              )}
            </div>
          </div>
          <div className="flex mt-2 md:mt-5">
            <label className="w-[40%] font-medium text-typography text-sm md:text-base">
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
                <p className="text-red-500">{errors.address.message}</p>
              )}
            </div>
          </div>
          <div className="flex mt-2 md:mt-5">
            <label className="w-[40%] font-medium text-typography text-sm md:text-base">
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
                <p className="text-red-500">{errors.address_2.message}</p>
              )}
            </div>
          </div>
          <div className="flex mt-2 md:mt-5">
            <label className="w-[40%] font-medium text-typography text-sm md:text-base">
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
                <p className="text-red-500">{errors.town.message}</p>
              )}
            </div>
          </div>
          <div className="flex mt-2 md:mt-5">
            <label className="w-[40%] font-medium text-typography text-sm md:text-base">
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
                <p className="text-red-500">{errors.country.message}</p>
              )}
            </div>
          </div>
        </div>
        <div className="bg-[#faefc9] p-2 md:p-5">
          <div>
            {address_type === "shipping" && (
              <>
                <h5 className="mb-2 text-base font-semibold text-typography ">
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
            )}

            <div className="flex ">
              <label className="w-[40%] text-secondgraphy font-semibold  text-sm md:text-base ">
                {address_type === "shipping"
                  ? "Delivery Mobile Number"
                  : "Mobile Number"}
              </label>

              <div className="w-[60%]">
                <input
                  type="text"
                  className="block w-full px-2 py-1 mb-2 -mt-2 text-sm border rounded-md outline-none md:text-base md:py-2 border-secondgraphy"
                  name="delivery_mobile_number"
                  {...register("delivery_mobile_number")}
                />
                {errors.delivery_mobile_number && (
                  <p className="text-red-500">
                    {errors.delivery_mobile_number.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex mt-2 md:mt-4 ">
              <label className="w-[40%] text-secondgraphy font-semibold  text-sm md:text-base ">
                {address_type === "shipping" ? "Delivery Email" : "Email"}
              </label>

              <div className="w-[60%]">
                <input
                  type="email"
                  className="block w-full px-2 py-1 -mt-2 text-sm border rounded-md outline-none md:text-base md:py-2 border-secondgraphy"
                  name="delivery_email"
                  {...register("delivery_email")}
                />
                {errors.delivery_email && (
                  <p className="text-red-500">
                    {errors.delivery_email.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        {address_type === "shipping" && (
          <div className="flex items-center justify-start py-2 md:py-5">
            <div>
              <div>
                <input
                  type="checkbox"
                  id="default"
                  name="default"
                  defaultChecked={getValues("default")}
                  onChange={(e) => setValue("default", e.target.checked)}
                />
                <label
                  for="default"
                  className="ml-3 text-sm font-medium md:text-base text-secondgraphy "
                >
                  Save as default Delivery Address
                </label>
              </div>
            </div>
          </div>
        )}
        <div className="px-2 mt-5 md:px-5 ">
          <button
            type="submit"
            className="w-full py-1 text-base font-bold text-white border rounded-md md:py-2 bg-secondgraphy "
          >
            {isPending
              ? "Adding Address..."
              : address_type === "shipping"
              ? "Add Delivery Address"
              : "Add Billing Address"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewAddressForm;
