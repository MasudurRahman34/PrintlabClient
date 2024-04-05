import { FaShoppingBasket } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineAutoDelete } from "react-icons/md";
import { IoCloudUploadOutline } from "react-icons/io5";
import { TbBrandMailgun } from "react-icons/tb";
import { AiOutlineDelete } from "react-icons/ai";
import { VscDiffAdded } from "react-icons/vsc";
import ClientLayout from "@/components/Layout/ClientLayout";
const Checkout = () => {
  return (
    <ClientLayout>
      <div className="container mx-auto">
        <div className="flex justify-center gap-[50px] overflow-auto mt-5 ">
          <div>
            <div className="text-center mx-auto flex justify-center items-center  mb-2 group hover:bg-[#1B4353] p-5 rounded-full  ">
              <FaShoppingBasket className="text-xl md:text-2xl lg:text-3xl font-bold  text-[#1B4353] group-hover:text-white text-center" />
            </div>
            <h6 className="text-sm md:text-base font-medium text-center ml-1 text-[#2b2b2b] mt-0 ">
              Basket
            </h6>
          </div>
          <div>
            <div className="text-center mx-auto flex justify-center items-center mb-2 group hover:bg-[#1B4353] p-5 rounded-full  ">
              <IoCloudUploadOutline className="text-xl md:text-2xl lg:text-3xl  font-bold  text-[#1B4353] group-hover:text-white text-center" />
            </div>
            <h6 className=" text-sm md:text-base font-medium text-center ml-1 text-[#2b2b2b] mt-0 ">
              Upload Artwork
            </h6>
          </div>
          <div>
            <div className="text-center mx-auto flex justify-center  mb-2 group hover:bg-[#1B4353] p-5 rounded-full  ">
              <TbTruckDelivery className="text-xl md:text-2xl lg:text-3xl  font-bold  text-[#1B4353] group-hover:text-white text-center" />
            </div>
            <h6 className="text-sm md:text-base font-medium text-center ml-1 text-[#2b2b2b] mt-0 ">
              Delivery & Payment
            </h6>
          </div>
          <div>
            <div className="text-center mx-auto flex justify-center mb-2 group hover:bg-[#1B4353] p-5 rounded-full  ">
              <MdOutlineAutoDelete className="text-xl md:text-2xl lg:text-3xl   font-bold  text-[#1B4353] group-hover:text-white text-center" />
            </div>
            <h6 className="text-sm md:text-base font-medium text-center ml-1 text-[#2b2b2b] mt-0 ">
              Order seccess
            </h6>
          </div>
        </div>
        <div>
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#1B4353] mb-5">
            Basket (1)
          </h2>
          <hr className="mb-5" />
        </div>
        <div className="lg:flex ">
          <div className="order-table w-full lg:w-8/12">
            <div className="flex justify-between">
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
            <div className="checkout-title flex justify-between">
              <div className="flex gap-5 bg-[#1B4353] px-10 py-2 rounded-md">
                <p className="text-white text-base font-medium text-center mt-3 ">
                  Get 1 more copies for only £6.00
                </p>
                <button className="px-8 py-3 rounded-md bg-[#99CE81] text-center font-bold text-white text-base">
                  Upgrate
                </button>
              </div>
              <button>
                <AiOutlineDelete className="text-2xl  text-[#AAAAAA] hover:text-[black]" />
              </button>
            </div>
            <div className="checkout-details  ps-12 pr-16 mt-5">
              <div className="flex justify-between text-center bg-[#F0F2F2] px-2 py-4 rounded-md">
                <h4 className="text-base font-bold text-[#333]">Job Details</h4>
                <button className="text-2xl">
                  <VscDiffAdded />
                </button>
              </div>
              <div class="table-responsive">
                <table class="table whitespace-nowrap table-bordered table-bordered-primary border-primary/10 min-w-full">
                  <thead>
                    <tr class="border-b border-primary/10">
                      <th scope="col" class="text-start">
                        Qty:
                      </th>
                      <th scope="col" class="text-start">
                        Paper Type:
                      </th>
                      <th scope="col" class="text-start">
                        Size:
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b border-primary/10">
                      <th scope="row" class="text-start">
                        #0007
                      </th>
                      <td>
                        <span class="badge bg-light text-dark">26-04-2022</span>
                      </td>
                      <td>
                        <span class="badge bg-primary/10 text-primary">
                          Booked
                        </span>
                      </td>
                    </tr>
                  </tbody>
                  <thead className="">
                    <tr class="border-b border-primary/10">
                      <th scope="col" class="text-start">
                        Qty:
                      </th>
                      <th scope="col" class="text-start">
                        Paper Type:
                      </th>
                      <th scope="col" class="text-start">
                        Size:
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b border-primary/10">
                      <th scope="row" class="text-start">
                        #0007
                      </th>
                      <td>
                        <span class="badge bg-light text-dark">26-04-2022</span>
                      </td>
                      <td>
                        <span class="badge bg-primary/10 text-primary">
                          Booked
                        </span>
                      </td>
                    </tr>
                  </tbody>
                  <thead>
                    <tr class="border-b border-primary/10">
                      <th scope="col" class="text-start">
                        Qty:
                      </th>
                      <th scope="col" class="text-start">
                        Paper Type:
                      </th>
                      <th scope="col" class="text-start">
                        Size:
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b border-primary/10">
                      <th scope="row" class="text-start">
                        #0007
                      </th>
                      <td>
                        <span class="badge bg-light text-dark">26-04-2022</span>
                      </td>
                      <td>
                        <span class="badge bg-primary/10 text-primary">
                          Booked
                        </span>
                      </td>
                    </tr>
                  </tbody>
                  <thead>
                    <tr class="border-b border-primary/10">
                      <th scope="col" class="text-start">
                        Qty:
                      </th>
                      <th scope="col" class="text-start">
                        Paper Type:
                      </th>
                      <th scope="col" class="text-start">
                        Size:
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b border-primary/10">
                      <th scope="row" class="text-start">
                        #0007
                      </th>
                      <td>
                        <span class="badge bg-light text-dark">26-04-2022</span>
                      </td>
                      <td>
                        <span class="badge bg-primary/10 text-primary">
                          Booked
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
          <div className="order-info w-full lg:w-4/12 px-10">
            <div className="text-base font-bold px-4 py-2 bg-gray-300">
              <h4>Order Summry</h4>
            </div>
            <div className=" px-5 mb-5">
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
              <button className="w-full mt-5 text-base font-bold rounded-md text-center py-2 bg-[#8BBA72]">
                Checkout
              </button>
            </div>
            <div className="mb-5 px-5">
              <div className="px-4 flex justify-between gap-2 py-2 bg-[#eaf7e6] ">
                <h4  className="text-sm font-bold text-[#333]" >Redeem Tradeprint Credits</h4>
                <button>
                  <VscDiffAdded className="text-2xl" />
                </button>
              </div>
            </div>
            <div className="px-5 mb-5 ">
              <div className="flex justify-between gap-2 py-2 px-4 bg-[#eaf7e6]">
                <h4 className="text-sm font-bold text-[#333]">
                  Add Discount Code
                </h4>
                <button>
                  <VscDiffAdded className="text-2xl" />
                </button>
              </div>
              <div className="mt-5 mb-5">
                <form className="border rounded-md">
                  <input className=" border-none px-1 rounded-s-md w-[70%] py-1 " type="text" placeholder="Enter code" />
                  <input className="px-2 w-[30%] text-white bg-[#99CE81] rounded-r-md py-2 text-sm font-bold" type="submit" value="Apploy" />
                </form>
              </div>
              <button className="w-full text-center py-1 rounded-md text-base font-bold text-[#B2B2B2B] border">Countinus Shopping </button>
            </div>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
};

export default Checkout;
