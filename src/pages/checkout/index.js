import { FaShoppingBasket } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineAutoDelete } from "react-icons/md";
import { IoCloudUploadOutline } from "react-icons/io5";
import { TbBrandMailgun } from "react-icons/tb";
import { AiOutlineDelete } from "react-icons/ai";
import { VscDiffAdded } from "react-icons/vsc";
import ClientLayout from "@/components/Layout/ClientLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const Checkout = () => {
  return (
    <ClientLayout>
      <div className=" custom_container">
        <div className="flex justify-center gap-[50px] overflow-auto mt-5 ">
          <div>
            <div className="flex items-center justify-center p-5 mx-auto mb-2 text-center rounded-full group hover:bg-secondgraphy ">
              <FaShoppingBasket className="text-xl font-bold text-center md:text-2xl lg:text-3xl text-secondgraphy group-hover:text-white" />
            </div>
            <h6 className="text-sm md:text-base font-medium text-center ml-1 text-[#2b2b2b] mt-0 ">
              Basket
            </h6>
          </div>
          <div>
            <div className="flex items-center justify-center p-5 mx-auto mb-2 text-center rounded-full group hover:bg-secondgraphy ">
              <IoCloudUploadOutline className="text-xl font-bold text-center md:text-2xl lg:text-3xl text-secbg-secondgraphy group-hover:text-white" />
            </div>
            <h6 className=" text-sm md:text-base font-medium text-center ml-1 text-[#2b2b2b] mt-0 ">
              Upload Artwork
            </h6>
          </div>
          <div>
            <div className="flex justify-center p-5 mx-auto mb-2 text-center rounded-full group hover:bg-secondgraphy ">
              <TbTruckDelivery className="text-xl font-bold text-center md:text-2xl lg:text-3xl text-secbg-secondgraphy group-hover:text-white" />
            </div>
            <h6 className="text-sm md:text-base font-medium text-center ml-1 text-[#2b2b2b] mt-0 ">
              Delivery & Payment
            </h6>
          </div>
          <div>
            <div className="flex justify-center p-5 mx-auto mb-2 text-center rounded-full group hover:bg-secondgraphy ">
              <MdOutlineAutoDelete className="text-xl font-bold text-center md:text-2xl lg:text-3xl text-secbg-secondgraphy group-hover:text-white" />
            </div>
            <h6 className="text-sm md:text-base font-medium text-center ml-1 text-[#2b2b2b] mt-0 ">
              Order seccess
            </h6>
          </div>
        </div>
        <div>
          <h2 className="mb-5 text-xl font-bold md:text-2xl lg:text-3xl xl:text-4xl text-secbg-secondgraphy">
            Basket (1)
          </h2>
          <hr className="mb-5" />
        </div>
        <div className="lg:flex ">
          <div className="w-full order-table lg:w-8/12">
            <div className="overflow-hidden border rounded">
              <div className="flex justify-between p-4">
                <div className="flex ">
                  <h5 className="text-base font-normal text-[#8F9391]">
                    Item 01.
                  </h5>
                  <h4 className="text-base font-bold text-[#2B2B2B]">
                    Custom Printed NCR Pads
                  </h4>
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#2B2B2B]">£45.62</h4>
                  <h5 className="text-base font-bold text-[#8F9391]">
                    Ex VAT: £38.02
                  </h5>
                </div>
              </div>
              <div className="flex justify-between pr-4 checkout-title">
                <div className="flex gap-5 px-10 py-2 rounded-r-md bg-secondgraphy">
                  <p className="mt-3 text-base font-medium text-center text-white ">
                    Get 1 more copies for only £6.00
                  </p>
                  <button className="px-8 py-3 text-base font-bold text-center text-white rounded-md bg-primary">
                    Upgrate
                  </button>
                </div>
                <button>
                  <AiOutlineDelete className="text-2xl  text-[#AAAAAA] hover:text-[black]" />
                </button>
              </div>
              <div className="p-5 mt-5 checkout-details">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="flex justify-between text-center bg-[#F0F2F2] px-2 py-4 rounded-md">
                      <h4 className="text-base font-bold text-[#333]">
                        Job Details
                      </h4>
                    </AccordionTrigger>

                    <AccordionContent className="px-5 py-2">
                      <div class=" flex flex-wrap gap-5">
                        <div className="min-w-[150px]">
                          <h1 className="font-bold text-secondgraphy">Qty:</h1>
                          <p>100</p>
                        </div>
                        <div className="min-w-[150px]">
                          <h1 className="font-bold text-secondgraphy">
                            Paper Type
                          </h1>
                          <p>130 gsm Gloss Finish Paper</p>
                        </div>
                        <div className="min-w-[150px]">
                          <h1 className="font-bold text-secondgraphy">Size</h1>
                          <p>A4</p>
                        </div>
                        <div className="min-w-[150px]">
                          <h1 className="font-bold text-secondgraphy">
                            Printed Sides
                          </h1>
                          <p>Single Sided</p>
                        </div>
                        <div className="min-w-[150px]">
                          <h1 className="font-bold text-secondgraphy">
                            Finishing
                          </h1>
                          <p>None</p>
                        </div>

                        <div className="min-w-[150px]">
                          <h1 className="font-bold text-secondgraphy">
                            Artwork Service
                          </h1>
                          <p>None</p>
                        </div>

                        <div className="min-w-[150px]">
                          <h1 className="font-bold text-secondgraphy">
                            Estimated Delivery
                          </h1>
                          <p>Thursday 25th November</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="Artwork-Service-info">
                  <div className="Artwork Service"></div>
                  <div className="Estimated-Delivery"></div>
                </div>
                <div>
                  <h6>PO Number</h6>
                  <button>
                    <TbBrandMailgun className="text-2xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-10 order-info lg:w-4/12">
            <div className="px-4 py-2 text-base font-bold bg-gray-300">
              <h4>Order Summry</h4>
            </div>
            <div className="px-5 mb-5 ">
              <div className="flex justify-between">
                <div className="order-card">
                  <p className="mt-4 mb-1 text-sm font-bold text-[#2B2B2B] ">
                    Sub total
                  </p>
                  <p className="py-1 text-sm font-bold text-[#2B2B2B] ">VAT</p>
                  <p className="py-1 text-base font-bold text-[#2B2B2B]">
                    Total:
                  </p>
                </div>
                <div className="order-card">
                  <p className="mt-4 mb-1 text-sm font-bold text-[#2B2B2B] ">
                    33.70
                  </p>
                  <p className="py-1 text-sm font-bold text-[#2B2B2B] ">
                    06.90
                  </p>
                  <p className="py-1 text-base font-bold text-[#2B2B2B]">
                    40.00
                  </p>
                </div>
              </div>
              <button className="w-full py-2 mt-5 text-base font-bold text-center rounded-md bg-primary">
                Checkout
              </button>
            </div>
            <div className="px-5 mb-5">
              <div className="flex justify-between gap-2 px-4 py-2 bg-primary-light ">
                <h4 className="text-sm font-bold text-[#333]">
                  Redeem Tradeprint Credits
                </h4>
                <button>
                  <VscDiffAdded className="text-2xl" />
                </button>
              </div>
            </div>
            <div className="px-5 mb-5 ">
              <div className="flex justify-between gap-2 px-4 py-2 bg-primary-light">
                <h4 className="text-sm font-bold text-[#333]">
                  Add Discount Code
                </h4>
                <button>
                  <VscDiffAdded className="text-2xl" />
                </button>
              </div>
              <div className="mt-5 mb-5">
                <form className="border rounded-md">
                  <input
                    className=" border-none px-1 rounded-s-md w-[70%] py-1 "
                    type="text"
                    placeholder="Enter code"
                  />
                  <input
                    className="px-2 w-[30%] text-white bg-primary rounded-r-md py-2 text-sm font-bold"
                    type="submit"
                    value="Apploy"
                  />
                </form>
              </div>
              <button className="w-full py-1 text-base font-bold text-center border rounded-md text-secondgraphy bg-primary-light border-primary hover:bg-primary">
                Countinus Shopping{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
};

export default Checkout;
