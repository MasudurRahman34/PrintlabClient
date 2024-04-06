import React from "react";

import Commitment from "@/components/Commitment";

const categories = [
  {
    id: 1,
    name: "Sign Printing",
    image: "assets/images/SIGN PRINTING.webp",
  },
  {
    id: 2,
    name: "Leaflet Printing",
    image: "assets/images/LEAFLET PRINTING.webp",
  },
  {
    id: 3,
    name: "Booklet Printing",
    image: "assets/images/BOOKLET PRINTING.webp",
  },
];

const Achievement = () => {
  return (
    <section className=" custom_container">
      <div className="py-10">
        <Commitment />
        <div>
          <div className="grid grid-cols-1 gap-5 mt-10 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex items-center justify-center bg-gray-100 rounded-lg"
              >
                <img src={category.image} alt={category.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
