import React from "react";

const ArtworkService = () => {
  return (
    <div className="flex flex-col w-full py-5 md:flex-row px-7">
      <div className="flex-1">
        <h1 className="text-base font-bold text-secondgraphy">
          Artwork Service
        </h1>
        <p>File check (£2.50+ VAT)</p>
      </div>
      <div className="flex-1">
        <h1 className="text-base font-bold text-secondgraphy">
          Estimated Delivery
        </h1>
        <p>Delivery by 29/04/2024 on saver turnaround</p>
        <p className="px-4 py-2 mt-2 bg-primary-light text-secondgraphy">
          if you order within <span>08 hrs 55 mins 41 secs</span>
        </p>
      </div>
    </div>
  );
};

export default ArtworkService;
