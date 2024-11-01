import React, { useMemo } from "react";
import toast from "react-hot-toast";
import { useEffect } from "react";

const Increament = ({
  title = "",
  quantity,
  setQuantity,
  matched,
  increment,
  min_quantity,
}) => {
  const [isDivisible, setIsDivisible] = React.useState(true);

  const handleIncreament = (type) => {
    const numberQuantity = Number(quantity);

    if (type === "increment") {
      // check if max quantity is set and if the quantity is greater than the max quantity

      if (
        matched?.max_quantity &&
        numberQuantity > matched?.max_quantity - increment
      ) {
        return;
      } else {
        setQuantity(numberQuantity + increment);
        setIsDivisible((quantity + increment) % increment === 1 ? true : false);
      }
    } else {
      if (numberQuantity <= matched?.min_quantity) {
        return;
      } else {
        setQuantity(numberQuantity - increment);
        setIsDivisible((quantity - increment) % increment === 1 ? true : false);
      }
    }
  };

  const handleChange = (e) => {
    setQuantity(Number(e.target.value));
    setIsDivisible(Number(e.target.value) % increment === 1 ? true : false);
  };

  if (!matched?.quantity_rule) {
    return null;
  }

  console.log("isDivisible", isDivisible);

  return (
    <div className="flex items-center justify-between gap-3 py-2">
      <div className="w-1/3">
        <strong>{title}</strong>
      </div>

      <div className="w-2/3">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-3">
            <button
              className="px-4 py-2 text-white rounded-md bg-secondgraphy disabled:opacity-60"
              onClick={() => {
                handleIncreament("decrement");
              }}
              disabled={quantity <= matched?.min_quantity || !isDivisible}
            >
              -
            </button>

            <input
              value={quantity}
              type="number"
              min={matched?.min_quantity}
              max={matched?.max_quantity}
              onChange={handleChange}
              className="w-auto py-2 ml-2 text-center bg-white border max-w-14"
            />
            <button
              className="px-4 py-2 text-white rounded-md bg-secondgraphy disabled:opacity-60"
              onClick={() => {
                handleIncreament("increment");
              }}
              disabled={quantity >= matched?.max_quantity || !isDivisible}
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
        {(quantity > matched.max_quantity ||
          quantity < matched.min_quantity) && (
          <div className="text-xs text-red-600">
            Quantity Must be between {matched.min_quantity} and{" "}
            {matched.max_quantity}
          </div>
        )}
        {!isDivisible && (
          <div className="text-xs text-red-600">
            Quantity must be increment of {increment}
          </div>
        )}
      </div>
    </div>
  );
};

export default Increament;
