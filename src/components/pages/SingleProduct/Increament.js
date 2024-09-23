import React from "react";

const Increament = ({
  title = "",
  productQuantityRule,
  quantity,
  setQuantity,
}) => {
  const handleIncreament = (type) => {
    if (type === "increment") {
      // check if max quantity is set and if the quantity is greater than the max quantity

      if (
        productQuantityRule?.max_quantity &&
        quantity >=
          productQuantityRule?.max_quantity - productQuantityRule?.increment
      ) {
        return;
      } else {
        setQuantity(quantity + productQuantityRule?.increment);
      }
    } else {
      if (quantity > 1) {
        setQuantity(quantity - productQuantityRule?.increment);
      }
    }
  };
  return (
    <div className="flex items-center justify-between gap-3 py-2">
      <div className="w-1/3">
        <strong>{title}</strong>
      </div>
      <div className="w-2/3">
        <div className="flex items-center gap-3">
          <button
            className="px-3 py-1 text-white rounded-md bg-secondgraphy"
            onClick={() => {
              handleIncreament("decrement");
            }}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            className="px-3 py-1 text-white rounded-md bg-secondgraphy"
            onClick={() => {
              handleIncreament("increment");
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Increament;
