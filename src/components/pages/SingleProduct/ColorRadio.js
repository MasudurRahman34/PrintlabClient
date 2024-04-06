import React, { useState } from "react";
const color = ["#252351", "#9AC285", "#CFE0CC", "#99CE81"];

const ColorRadio = ({}) => {
  const [selectedColor, setSelectedColor] = useState(color[0]);
  return (
    <div className="py-1">
      <p>
        <strong>Colour</strong> Natural/Green
      </p>
      <div className="flex gap-2">
        <div className="bg-[#252351] h-10 w-10 border rounded-md"></div>
        {color.map((item, index) => (
          <div
            className={`bg-[${item}] cursor-pointer h-10 w-10  ${
              selectedColor === item ? "border-2 border-primary" : "border-2"
            } rounded-md `}
            key={index}
            onClick={() => setSelectedColor(item)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ColorRadio;
