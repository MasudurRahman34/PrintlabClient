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
  increment = 1,
  quantity = 1,
  per_quantity_price = 1,
  min_quantity = 1,
  reduction_percentage = 0,
  calculationType = "multiply",
  calc = false,
}) {
  // Function to check if the argument is a number
  function checkIfNumber(value, name) {
    if (typeof value !== "number" || isNaN(value)) {
      throw new Error(`${name} must be a valid number.`);
    }
  }

  // If quantity is not provided, default to 1
  const modifiedQuantity = quantity ? Number(quantity) : 1;

  // Validate all inputs
  checkIfNumber(tax, "tax");
  checkIfNumber(price, "price");
  checkIfNumber(delivery_charge, "delivery_charge");
  checkIfNumber(artwork_charge, "artwork_charge");
  checkIfNumber(discount, "discount");
  checkIfNumber(modifiedQuantity, "quantity");
  checkIfNumber(
    per_quantity_price ? per_quantity_price : 0,
    "per_quantity_price"
  );
  checkIfNumber(increment, "increment");
  checkIfNumber(reduction_percentage, "reduction_percentage");
  checkIfNumber(min_quantity, "min_quantity");

  // Calculation: Here I'm assuming some logic, for example:
  // calculation {(price*quantity)+delivery_charge+artwork_charge+tax}-discount
  // need to implement reduction rate and increment logic here

  const newQuantity =
    quantity - min_quantity < 1 ? 1 : quantity - min_quantity + 1;

  // TODO: NEW LOGIC

  const incrementQuantity = (quantity - min_quantity) / increment;

  console.log("incrementQuantity", incrementQuantity);

  const newIcrementalPrice = incrementQuantity * per_quantity_price + price;

  console.log("newIcrementalPrice included price", newIcrementalPrice);

  //TODO : END

  const extraQuantityPrice =
    calculationType === "multiply"
      ? newQuantity
      : Math.floor(newQuantity / increment) * per_quantity_price;

  let total;
  if (calculationType === "multiply") {
    total =
      price * extraQuantityPrice -
      price * extraQuantityPrice * (reduction_percentage / 100) +
      delivery_charge +
      artwork_charge +
      tax -
      discount;
  } else {
    total =
      price +
      extraQuantityPrice -
      (price + extraQuantityPrice) * (reduction_percentage / 100) +
      delivery_charge +
      artwork_charge +
      tax -
      discount;
  }

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

export function truncateHTML({ html, maxWords }) {
  // Create a temporary element to hold the HTML
  var tempElement = document.createElement("div");
  tempElement.innerHTML = html;

  // Get the text content from the element (strips HTML tags)
  var textContent = tempElement.textContent || tempElement.innerText || "";

  // Split the text into words
  var words = textContent.split(/\s+/);

  // Truncate the array to the maximum number of words
  var truncatedWords = words.slice(0, maxWords);

  // Join the truncated words array into a string
  var truncatedText = truncatedWords.join(" ");

  return truncatedText;
}

export const humanReadableDate = (date) => {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export const validateLondonPostcode = (postcode) => {
  const londonPostcodeRegex =
    /^(E[0-9]|EC[0-9]|N[0-9]|NW[0-9]|SE[0-9]|SW[0-9]|W[0-9]|WC[0-9])[0-9A-Z]? \d[A-Z]{2}$/i;
  return londonPostcodeRegex.test(postcode.trim());
};

export function getDateAfterDays(days) {
  // Create a new date object for the current date
  const currentDate = new Date();

  // Get the current hours
  const currentHour = currentDate.getHours();

  // If the current time is after 17:00 (5 PM), add an extra day
  if (currentHour >= 17) {
    days += 1;
  }

  // Add the specified number of days (with the possible extra day) to the current date
  currentDate.setDate(currentDate.getDate() + days);

  // Format the date as YYYY-MM-DD
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are 0-based, so add 1
  const day = String(currentDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export const isEmptyObject = (obj) => {
  return Object.keys(obj).length === 0;
};

export const getMediaThumbURL = (media = []) => {
  if (media.length === 0) {
    //TODO: NEED TO FIX THIS URL
    return `${process.env.NEXT_PUBLIC_IMAGE_URL}/storage/TVhC27KVyxQINe4XoYZOCVQrUT6znprnh03hWQeH.png`;
  }

  const mediaFound = media.find((m) => m.is_profile === 1);

  if (mediaFound) {
    return `${process.env.NEXT_PUBLIC_IMAGE_URL}${mediaFound.url}`;
  } else {
    return `${process.env.NEXT_PUBLIC_IMAGE_URL}${media[0].url}`;
  }
};

export const getCategorySlug = (categories) => {
  if (categories.length) {
    return categories[0].slug;
  } else {
    return "unknown_category";
  }
};

export function checkQuantity(quantity, min_quantity, increment_of) {
  if (quantity < min_quantity) {
    return false;
  }

  // Check if the quantity aligns with the expected line
  if ((quantity - min_quantity) % increment_of === 0) {
    return true;
  } else {
    return false;
  }
}
