"use client";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
const Dashboard = () => {
  const [opernav, setopernav] = useState(false);
  const navitem = (
    <>
      <li className="text-base font-normal  hover:underline text-typography">
        <a>Orders</a>
      </li>
      <li className="text-base font-normal  hover:underline text-typography">
        <a>Invoice</a>
      </li>
      <li className="text-base font-normal  hover:underline text-typography">
        <a>Delivery Account</a>
      </li>
      <li className="text-base font-normal  hover:underline text-typography">
        <a>Favourites</a>
      </li>
      <li className="text-base font-normal  hover:underline text-typography">
        <a>Credit Application</a>
      </li>
      <li className="text-base font-normal  hover:underline text-typography">
        <a>Concerns</a>
      </li>
      <li className="text-base font-normal  hover:underline text-typography">
        <a>Quotes</a>
      </li>
      <li className="text-base font-normal  hover:underline text-typography">
        <a>Communication</a>
      </li>
      <li className="text-base font-normal  hover:underline text-typography">
        <a>Preferences</a>
      </li>
      <li className="text-base font-normal  hover:underline text-typography">
        <a>Payment Settings</a>
      </li>
      <li className="text-base font-normal  hover:underline text-typography">
        <a>Account Settings</a>
      </li>
      <li className="text-base font-normal  hover:underline text-typography">
        <a>API Configuration</a>
      </li>
    </>
  );
  return (
    <div>
      <div className="container relative z-10 ">
        <div className="mt-5 md:mt-[50px]  md:flex position-relative  z-10 ">
          <div>
            <button onClick={() => setopernav(!opernav)}>
              <FaBars className="mt-5 text-2xl md:hidden " />
            </button>
            <div
              className={` ${
                opernav
                  ? " block  left-5  "
                  : "hidden -left-96 transition-transform delay-500 "
              } absolute z-30 bg-primary p-5 rounded-lg  `}
            >
              <ul>{navitem}</ul>
              <div className="border border-[#b7b7b7] mt-5 mb-5 w-[30%] "></div>
              <button className="mt-2 mb-2">Log Out</button>
            </div>
          </div>
          <div className="hidden  md:block md:w-3/12">
            <div>
              <h2 className="text-base font-medium leading-6 md:text-lg text-typography">
                Our Account
              </h2>
              <p className="text-[14px] font-normal text-[#b7b7b7]">
                #CQAPW3KYRG9
              </p>
            </div>
            <div className="border border-[#b7b7b7] mt-5 mb-5 w-[70%] "></div>
            <ul className="">{navitem}</ul>
            <div className="border border-[#b7b7b7] mt-5 mb-5 w-[70%] "></div>
            <button className="mt-5 mb-5">Log Out</button>
          </div>
          <div className="z-10 w-full  md:w-9/12 pos">
            <p>Content</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
