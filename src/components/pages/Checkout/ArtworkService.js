import useCountDownTimer from "@/components/hooks/useCountdownTimer";
import React from "react";

const ArtworkService = ({ product }) => {
  const { formattedDate, timeLeft } = useCountDownTimer({
    days: product?.delivery_service.duration,
  });
  return (
    <div className="flex flex-col w-full py-5 md:flex-row">
      <div className="flex-1">
        <p className="px-4 py-2 mt-2 text-sm text-center border-2 rounded-md border-primary bg-primary-light text-secondgraphy md:text-base">
          if you order within{" "}
          <span className="font-bold">{timeLeft.hours} </span> hrs{" "}
          <span className="font-bold">{timeLeft.minutes} </span> mins{" "}
          <span className="font-bold"> {timeLeft.seconds} </span> secs
        </p>
      </div>
    </div>
  );
};

export default ArtworkService;
