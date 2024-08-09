import withAuth from "@/hoc/withAuth";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const navLinks = [
  {
    name: "Orders",
    link: "/my-account/orders",
  },
  {
    name: "Order Items",
    link: "/my-account/order-items",
  },
  {
    name: "Invoice",
    link: "/my-account/invoice",
  },
  /* {
    name: "Delivery Addresses",
    link: "/my-account/delivery-addresses",
  }, */
  /* {
    name: "Favourites",
    link: "/my-account/favourites",
  }, */
  /*  {
    name: "Credit Application",
    link: "/my-account/credit-application",
  }, */
  /* {
    name: "Concerns",
    link: "/my-account/concerns",
  }, */
  /* {
    name: "Quotes",
    link: " /my-account/quote-request",
  }, */
  /* {
    name: "Communication Preferences",
    link: "/my-account/communication-preferences",
  }, */
  /*  {
    name: "Payment Settings",
    link: "/my-account/payment-settings",
  }, */
  {
    name: "Account Settings",
    link: "/my-account/account-settings",
  },
  /* {
    name: "API Configuration",
    link: "/my-account/api-configuration",
  }, */
];

const AccountLayout = ({ children, breadcrumb }) => {
  const { logout } = useAuth();
  const [opernav, setopernav] = useState(false);
  const navitem = (
    <>
      {navLinks.map((link) => (
        <li
          key={link.name}
          className="py-1 text-base font-normal hover:underline text-typography"
        >
          <Link href={link.link}>{link.name}</Link>
        </li>
      ))}
    </>
  );
  return (
    <div className="custom_container">
      <div className="relative ">
        <div className="mt-5 md:mt-[50px]  md:flex position-relative  ">
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
              <button
                className="mt-2 mb-2"
                onClick={() => {
                  logout();
                }}
              >
                Log Out
              </button>
            </div>
          </div>
          <div className="hidden md:block md:w-3/12">
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
            <div className="border border-[#b7b7b7]  mb-5 w-[70%] mt-[100px] "></div>
            <button
              className="mt-5 mb-5"
              onClick={() => {
                logout();
              }}
            >
              Log Out
            </button>
          </div>
          <div className="w-full md:w-9/12 pos">
            <div>
              <h2 className="text-base font-bold md:text-lg text-secondgraphy ">
                {breadcrumb}
              </h2>

              <div className="border border-[#b7b7b7] mt-5 mb-5 w-[70%] "></div>
            </div>
            <div className="w-full h-full">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(AccountLayout);
