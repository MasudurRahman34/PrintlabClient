import React from "react";

const Box = ({ boxTitle, action, buttonText, children }) => {
  return (
    <div className="max-w-xl mb-4 overflow-hidden border rounded shadow shadow-primary border-primary">
      <div className="flex items-center justify-between px-3 py-2 font-bold text-secondgraphy bg-primary">
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
