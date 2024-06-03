import React, { useState } from "react";

const Switcher1 = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <label className="flex items-center cursor-pointer select-none">
        <div className="relative">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="sr-only"
          />
          <div className="block h-8 w-14 rounded-full bg-[#E5E7EB]"></div>
          <div
            className={`absolute w-6 h-6 transition-all duration-300 bg-white rounded-full dot  top-1 ${
              isChecked ? "right-1" : "left-1"
            }`}
          ></div>
        </div>
      </label>
    </>
  );
};

export default Switcher1;
