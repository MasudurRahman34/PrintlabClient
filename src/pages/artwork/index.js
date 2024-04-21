import ClientLayout from "@/components/Layout/ClientLayout";
import { GoDotFill } from "react-icons/go";
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdOutlineLock } from "react-icons/md";
import { BsClock } from "react-icons/bs";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const Stepper = dynamic(() => import("@/components/pages/Checkout/Stepper"), {
  ssr: false,
});
const Artwork = () => {
  const router = useRouter();
  return (
    <ClientLayout>
      <div className="py-5 custom_container ">
        <Stepper activeStep={1} />
        <div className="payment-process"></div>
        <div className="bg-white artsummry ">
          <div className="bg-[#F0F2F2]">
            <h4 className="text-lg font-medium text-secondgraphy md:text-xl lg:text-2xl xl:text-3xl md:font-semibold lg:font-bold lg:ps-2">
              Upload Artwork (1)
            </h4>
            <p className="text-sm font-medium lg:text-base lg:ps-5 text-typography">
              You can upload your files below, or skip this step and upload your
              files later at a time that suits you.
            </p>
          </div>
        </div>
        <div className="artwork-page-history lg:flex  bg-[#F0F2F2] rounded-md ">
          <div className="w-full px-5 py-5 lg:w-1/3">
            <div className="flex">
              <h4 className="text-sm md:text-base lg:text-lg font-normal md:font-medium text-typography w-[30%] ">
                Item 01.
              </h4>
              <div className="w-[70%]">
                <h4 className="mb-2 text-base font-medium md:text-lg lg:text-xl md:font-semibold lg:font-bold">
                  Printed Mugs
                </h4>
                <h4 className="text-sm font-normal md:font-medium text-secondgraphy">
                  <span className="text-sm md:text-base lg:text-lg">
                    ITEM REF:
                  </span>{" "}
                  #INWY9KR-36H36-7I8
                </h4>
                <h4 className="flex text-sm font-normal md:text-base lg:text-lg text-secondgraphy md:font-medium -ms-2 ">
                  <GoDotFill className="mr-1 text-3xl text-primary" />
                  ARTWORK REQUIRED
                </h4>
              </div>
            </div>
          </div>
          <div className="w-full px-5 mt-5 lg:w-2/3">
            <div className="flex justify-center bg-white">
              <div className="py-4 md:py-6 lg:py-10">
                <div className="flex gap-2 md:gap-4 lg:gap-6">
                  <button className="flex  text-base md:text-lg lg:text-xl font-medium md:font-semibold lg:font-bold py-2 text-white px-2 md:px-8 lg:px-8 xl:px-16  bg-primary hover:bg-[#bda655] rounded-md ">
                    <IoCloudUploadOutline className=" text-base md:text-lg lg:text-xl mr-[2px] md:mr-2  font-semibold mt-1" />
                    Add Artwork
                  </button>
                  <button className="flex px-2 py-2 text-base font-medium border rounded-md md:text-lg lg:text-xl md:font-semibold lg:font-bold md:px-8 lg:px-8 border-typography hover:bg-black hover:text-white ">
                    Skip, Add Artwork Later
                  </button>
                </div>
                <div className="mt-2 text-center md:mt-5">
                  <p className="text-sm font-normal md:text-base md:font-medium text-typography">
                    {" "}
                    Artwork Later Accepted file types for this product:
                  </p>
                  <h4 className="text-sm font-medium md:text-base lg:text-lg md:font-serif lg:font-bold">
                    PDF
                  </h4>
                </div>
              </div>
            </div>
            <div className="flex p-2 py-5 mt-5 mb-5 border rounded-md border-typography md:p-5 md:mb-10 ">
              <p className="mr-2 ">
                <BsClock className="text-xl md:text-2xl lg:text-3xl" />
              </p>
              <p className=" text-[10px] font-normal text-typography md:text-sm">
                Please note, on completion of your order we offer a 15 minute
                window to make any final amends to your uploaded artwork via
                Orders in the MyAccount area. After these 15 minutes, no further
                changes can be made and all artwork will be processed for
                printing
              </p>
            </div>
            <div className="flex justify-end mt-5 mb-5 mr-auto md:mb-10">
              <button
                className="flex  text-[14px] md:text-lg lg:text-xl font-medium md:font-semibold lg:font-bold py-3 px-5 md:px-10 lg:px-16 xl:px-20 bg-primary hover:bg-[#bda655] text-white rounded-md  "
                onClick={() => {
                  router.push("/checkout");
                }}
              >
                <MdOutlineLock className="text-base md:text-xl mt-[2px] md:mt-0 lg:text-2xl mr-1 " />
                Continue To Delivery & Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
};

export default Artwork;
