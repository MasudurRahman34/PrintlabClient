import useCountDownTimer from "@/components/hooks/useCountdownTimer";
import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const TotalCounter = ({
  excVatPrice = 0,
  incVatPrice = 0,
  addToCard,
  isPending,
  selectedDelivery,
}) => {
  const { formattedDate } = useCountDownTimer({ days: selectedDelivery });
  return (
    <section className="fixed bottom-0 left-0 hidden w-full border-2 bg-secondgraphy border-primary md:block">
      <div className="container py-3">
        <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
          <div className="flex-1 text-white text-end ">
            <p>
              <strong className="text-2xl">
                {formattedDate} {excVatPrice}
              </strong>{" "}
              Ex Vat
            </p>
            <p>
              <strong>{incVatPrice}</strong> Inc Vat
            </p>
          </div>
          <div className="flex-1 w-full">
            <button
              className="flex items-center justify-center w-full py-2 font-bold transition-colors duration-150 border rounded-md text-secondgraphy bg-primary border-primary-light hover:bg-primary-light"
              onClick={addToCard}
              isPending={isPending}
            >
              {isPending ? (
                <AiOutlineLoading3Quarters className="text-2xl w-full text-[#AAAAAA] animate-spin flex items-center" />
              ) : (
                "Add to Basket"
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalCounter;
