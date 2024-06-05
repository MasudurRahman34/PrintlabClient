import useCountDownTimer from "@/components/hooks/useCountdownTimer";
import React from "react";

const ArtworkService = ({ product }) => {
  const { formattedDate, timeLeft } = useCountDownTimer({
    days: product?.delivery_service.duration,
  });
  return (
    <div className="flex flex-col w-full py-5 md:flex-row">
      <div className="flex-1">
        <p className="px-4 py-2 mt-2 border-2 rounded-md border-primary bg-primary-light text-secondgraphy">
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
