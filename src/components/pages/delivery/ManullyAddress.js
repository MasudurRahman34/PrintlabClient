"use Client";
import Link from "next/link";
import Box from "../../ui/Box";
import { useForm } from "react-hook-form";
import NewAddressForm from "./NewAddressForm";
const ManullyAddress = () => {
  const onSubmit = (data) => console.log(data);

  return (
    <div className="custom_container ">
      <h1 className="px-3 py-2 mt-5 text-lg font-bold md:text-2xl lg:text-3xl text-secondgraphy md:py-5">
        Delivery
      </h1>
      <div className="gap-5 md:flex">
        <div className="mt-5 mb-2 md:w-2/3 md:mb-5">
          <Box boxTitle="Delivery Address" fullWidth>
            <NewAddressForm />
          </Box>

          <h4 className="w-full px-5 py-2 mt-5 text-base font-semibold rounded-md text-secondgraphy bg-primary ">
            Billing Address
          </h4>
          <h4 className="mt-5 mb-5 text-lg bg-[#faefc9] font-medium text-typography w-full rounded-md  px-5 py-2 ">
            Payment
          </h4>
        </div>
        <div className="mt-5 md:w-1/3">
          <Box boxTitle="Order Summary">
            <div className="px-5 py-5">
              <div className="flex justify-between">
                <div className="font-semibold text-black text-bae md:text-lg">
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
          </Box>

          <Box boxTitle="Basket(1)">
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
            </div>{" "}
          </Box>
        </div>
      </div>
    </div>
  );
};

export default ManullyAddress;
