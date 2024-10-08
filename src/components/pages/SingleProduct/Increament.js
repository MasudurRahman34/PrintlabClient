import React from "react";
import toast from "react-hot-toast";
import { useEffect } from "react";

const Increament = ({ title = "", quantity, setQuantity, matched }) => {
  const handleIncreament = (type) => {
    if (type === "increment") {
      // check if max quantity is set and if the quantity is greater than the max quantity

      if (matched?.max_quantity && quantity > matched?.max_quantity - 1) {
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

  if (!matched?.quantity_rule) {
    return null;
  }

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
            disabled={quantity <= matched?.min_quantity}
          >
            -
          </button>
          <input
            value={quantity}
            type="number"
            min={matched?.min_quantity}
            max={matched?.max_quantity}
            onChange={(e) => {
              // check if max quantity is set and if the quantity is greater than the max quantity
              const value = e.target.value ? parseInt(e.target.value) : 1;
              if (
                matched?.max_quantity &&
                parseInt(value) > matched?.max_quantity
              ) {
                toast.error(
                  "Quantity can't be greater than max quantity " +
                    matched?.max_quantity
                );
                return;
              } else if (
                matched?.min_quantity &&
                parseInt(value) < matched?.min_quantity
              ) {
                toast.error(
                  "Quantity can't be less than min quantity" +
                    matched?.min_quantity
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
              matched?.max_quantity && quantity >= matched?.max_quantity
            }
          >
            +
          </button>
        </div>
        <div>
          <p>
            {matched?.min_quantity && (
              <span className="mr-4 text-xs text-gray-500">
                Min: {matched?.min_quantity}
              </span>
            )}
            {matched?.max_quantity && (
              <span className="text-xs text-gray-500">
                Max: {matched?.max_quantity}
              </span>
            )}
          </p>
          <p>
            {matched?.increment && (
              <span className="text-xs text-gray-500">
                Increments of: {matched?.increment}
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Increament;
