import React from "react";

const Box = ({ boxTitle, action, buttonText, children, fullWidth }) => {
  return (
    <div
      className={` mb-4 overflow-hidden border rounded shadow shadow-secondgraphy border-secondgraphy ${
        fullWidth ? "w-full" : "max-w-xl w-full"
      }`}
    >
      <div className="flex items-center justify-between px-3 py-2 font-bold text-white bg-secondgraphy">
        <p>{boxTitle}</p>
        <button onClick={action} className="underline">
          {buttonText}
        </button>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Box;
