import React from "react";
import toast from "react-hot-toast";

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
        quantity > productQuantityRule?.max_quantity - 1
      ) {
        return;
      } else {
        setQuantity(quantity + 1);
      }
    } else {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    }
  };
  return (
    <div className="flex items-center justify-between gap-3 py-2">
      <div className="w-1/3">
        <strong>{title}</strong>
      </div>
      <div className="flex items-center w-2/3 gap-2">
        <div className="flex items-center gap-3">
          <button
            className="px-4 py-2 text-white rounded-md bg-secondgraphy disabled:opacity-60"
            onClick={() => {
              handleIncreament("decrement");
            }}
            disabled={quantity <= productQuantityRule?.min_quantity}
          >
            -
          </button>
          <input
            value={quantity}
            type="number"
            onChange={(e) => {
              // check if max quantity is set and if the quantity is greater than the max quantity
              const value = e.target.value ? parseInt(e.target.value) : 1;
              if (
                productQuantityRule?.max_quantity &&
                parseInt(value) > productQuantityRule?.max_quantity
              ) {
                toast.error(
                  "Quantity can't be greater than max quantity " +
                    productQuantityRule?.max_quantity
                );
                return;
              } else if (
                productQuantityRule?.min_quantity &&
                parseInt(value) < productQuantityRule?.min_quantity
              ) {
                toast.error(
                  "Quantity can't be less than min quantity" +
                    productQuantityRule?.min_quantity
                );
                return;
              }

              setQuantity(parseInt(value));
            }}
            className="w-auto py-2 ml-2 text-center bg-white border max-w-14"
          />
          <button
            className="px-4 py-2 text-white rounded-md bg-secondgraphy disabled:opacity-60"
            onClick={() => {
              handleIncreament("increment");
            }}
            disabled={
              productQuantityRule?.max_quantity &&
              quantity >= productQuantityRule?.max_quantity
            }
          >
            +
          </button>
        </div>
        <div>
          <p>
            {productQuantityRule?.min_quantity && (
              <span className="text-xs text-gray-500">
                Min: {productQuantityRule?.min_quantity}
              </span>
            )}
          </p>
          <p>
            {productQuantityRule?.max_quantity && (
              <span className="text-xs text-gray-500">
                Max: {productQuantityRule?.max_quantity}
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Increament;
