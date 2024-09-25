import React, { useState } from "react";

const ColorRadio = ({ handleSelect, title, options, userSelectedOptions }) => {
  const handleChange = (value) => {
    const { attribute_id, attribute_option_id } = value;
    handleSelect({ attribute_id, attribute_option_id });
  };

  return (
    <div className="flex items-center justify-between gap-3 py-2 mb-3">
      <div className="w-1/3">
        <p>
          <strong>{title} </strong>
        </p>
      </div>
      <div className="flex items-center w-2/3 gap-2">
        {options.map((item, index) => (
          <div
            className={` cursor-pointer  h-10 w-10  ${
              userSelectedOptions[item.attribute_id] ===
              item.attribute_option_id
                ? "border-4 border-secondgraphy"
                : ""
            } rounded-md `}
            style={{ backgroundColor: item.attributeOption.title }}
            key={index}
            onClick={() => handleChange(item)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ColorRadio;
