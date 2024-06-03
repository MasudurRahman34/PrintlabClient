import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function calculateTotal({
  tax = 0,
  price = 0,
  delivery_charge = 0,
  artwork_charge = 0,
  discount = 0,
  quantity = 1,
  calc = false,
}) {
  // Function to check if the argument is a number
  function checkIfNumber(value, name) {
    if (typeof value !== "number" || isNaN(value)) {
      throw new Error(`${name} must be a valid number.`);
    }
  }

  // Validate all inputs
  checkIfNumber(tax, "tax");
  checkIfNumber(price, "price");
  checkIfNumber(delivery_charge, "delivery_charge");
  checkIfNumber(artwork_charge, "artwork_charge");
  checkIfNumber(discount, "discount");
  checkIfNumber(quantity, "quantity");

  // Calculation: Here I'm assuming some logic, for example:
  // calculation {(price*quantity)+delivery_charge+artwork_charge+tax}-discount
  const total =
    price * quantity + delivery_charge + artwork_charge + tax - discount;

  if (calc) {
    return total;
  } else {
    return total.toFixed(2);
  }
}

// make a price string from a number with pound sign and 2 decimal places

export const formatPrice = (price) => {
  return `£${parseFloat(price).toFixed(2)}`;
};
