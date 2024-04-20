import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineAutoDelete } from "react-icons/md";
import { IoCloudUploadOutline } from "react-icons/io5";
import { Stepper, Step } from "react-form-stepper";

const stepperData = [
  {
    id: 1,
    icon: (
      <FaShoppingBasket className="text-xl font-bold text-center md:text-2xl lg:text-3xl text-secbg-secondgraphy group-hover:text-white" />
    ),
    title: "Basket",
  },
  {
    id: 2,
    icon: (
      <IoCloudUploadOutline className="text-xl font-bold text-center md:text-2xl lg:text-3xl text-secbg-secondgraphy group-hover:text-white" />
    ),
    title: "Upload Artwork",
  },
  {
    id: 3,
    icon: (
      <TbTruckDelivery className="text-xl font-bold text-center md:text-2xl lg:text-3xl text-secbg-secondgraphy group-hover:text-white" />
    ),
    title: "Delivery & Payment",
  },
  {
    id: 4,
    icon: (
      <MdOutlineAutoDelete className="text-xl font-bold text-center md:text-2xl lg:text-3xl text-secbg-secondgraphy group-hover:text-white" />
    ),
    title: "Order seccess",
  },
];

const CheckoutStepper = () => {
  return (
    <Stepper
      activeStep={0}
      connectorStateColors={true}
      connectorStyleConfig={{
        activeColor: "#1c4454",
        completedColor: "#1c4454",
        inactiveColor: "#d1d1d1",
      }}
    >
      {stepperData.map((item) => (
        <Step
          label={item.title}
          key={item.id}
          styleConfig={{
            activeBgColor: "#1c4454",
            completedBgColor: "#1c4454",
            activeTextColor: "#fff",
            completedTextColor: "#fff",
            size: "3rem",
            circleFontSize: "1.5rem",
            inactiveBgColor: "#d1d1d1",
            labelFontSize: "1rem",
          }}
        >
          <div key={item.id}>{item.icon}</div>
        </Step>
      ))}
    </Stepper>
  );
};

export default CheckoutStepper;
