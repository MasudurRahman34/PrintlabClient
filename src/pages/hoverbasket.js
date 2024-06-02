import ClientLayout from "@/components/Layout/ClientLayout";
import { TiDeleteOutline } from "react-icons/ti";
import { AiOutlineDelete } from "react-icons/ai";

export default function Hoverbasket({ show }) {
  return (
    <div
      className={`flex justify-center absolute z-[999] bg-[white]   transition delay-300 ease-in-out  ${
        show
          ? "opacity-100 visible right-7 top-[80px]"
          : " opacity-0 invisible -right-[150px] top-[80px]"
      }`}
    >
      <div className="w-[380px] min-h-[100px] border rounded  shadow-md shadow-[#7D7F7F]">
        <div className="basket-title flex py-3 border-b-2 items-center">
          <h6 className="mx-auto text-sm md:text-base text-secondgraphy font-bold ">
            Your Basket
          </h6>
          <a href="#" className="ml-auto">
            <TiDeleteOutline className="text-[30px] text-[#7D7F7F]" />
          </a>
        </div>
        <div>
          <div className="basket-contnen flex justify-between items-center py-3 border-b-2 ">
            <div className="flex items-center">
              <p className="text-[12px] md:text-sm text-secondgraphy text-[#7D7F7F] mr-3 ml-3">
                Item 01.
              </p>
              <p className="text-[12px] md:text-base text-secondgraphy font-semibold">
                Foamex Board
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-[12px] md:text-base text-secondgraphy font-bold mr-3">
                $10.20
              </p>
              <a href="#">
                <AiOutlineDelete className="text-[25px] text-[#7D7F7F] mr-3" />
              </a>
            </div>
          </div>
          <div>
            <div className="flex  justify-between px-3 py-3">
              <h2 className=" text-lg md:text-xl font-bold text-secondgraphy">
                Total
              </h2>
              <div>
                <h3 className=" text-lg md:text-xl font-bold text-secondgraphy mb-1">
                  $20.20{" "}
                  <span className=" text-sm md:text-base font-medium text-secondgraphy">
                    Ex Vat
                  </span>
                </h3>
                <p className=" text-base md:text-lg font-semibold text-secondgraphy">
                  $25.10{" "}
                  <span className=" text-[12px] md:text-sm font-medium text-secondgraphy">
                    In Vat
                  </span>
                </p>
              </div>
            </div>
            <button className="py-2 flex mb-5 mt-3 text-black px-[100px] text-center mx-auto bg-primary text-base md:text-lg font-blod  rounded-md">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
