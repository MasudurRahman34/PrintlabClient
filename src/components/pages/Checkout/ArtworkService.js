import useCountDownTimer from "@/components/hooks/useCountdownTimer";
import React from "react";

const ArtworkService = ({ product }) => {
  const { formattedDate, timeLeft } = useCountDownTimer({
    days: product?.delivery_service.duration,
  });
  return (
    <div className="flex flex-col w-full py-5 md:flex-row px-7">
      <div className="flex-1">
        <h1 className="text-base font-bold text-secondgraphy">
          Artwork Service
        </h1>
        <p>{product.artwork_service.title}</p>
      </div>
      <div className="flex-1">
        <h1 className="text-base font-bold text-secondgraphy">
          Estimated Delivery
        </h1>
        <p>Delivery by {formattedDate} on saver turnaround</p>
        <p className="px-4 py-2 mt-2 bg-primary-light text-secondgraphy">
          if you order within{" "}
          <span>
            {timeLeft.hours} hrs {timeLeft.minutes} mins {timeLeft.seconds} secs
          </span>
        </p>
      </div>
    </div>
  );
};

export default ArtworkService;
