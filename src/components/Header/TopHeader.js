import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import SearchProduct from "./SearchProduct";

const links = [
  {
    id: 1,
    name: "Contact Us",
    url: "/contact-us",
    Icon: () => (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
          />
        </svg>
      </>
    ),
  },
  {
    id: 2,
    name: "Help Center",
    url: "/help",
    Icon: () => (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 group-hover:text-primary hassan"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
          />
        </svg>
      </>
    ),
  },
];

const TopHeader = ({ showcards, hideBasket, refetch, total }) => {
  const [cart, setCart] = useState({
    totalPrice: 0,
    totalQuantity: 0,
  });
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (total) {
      const totalPrice =
        total.length > 0
          ? total?.map((item) => item.total).reduce((a, b) => a + b, 0)
          : 0;

      const totalQuantity = total?.length;

      setCart({ totalPrice, totalQuantity });
    }
  }, [total]);

  return (
    <section className="flex items-center justify-between h-12 gap-10 px-5 border-b border-gray-300 lg:h-20">
      <div className="text-black">
        <Link href="/">
          <Image
            src="/assets/logo/printlab-logo.jpg"
            width={100}
            height={100}
            alt="logo"
          />
        </Link>
      </div>
      <div
        className="flex-1 hidden lg:block"
        style={{
          zIndex: 99999,
        }}
      >
        <SearchProduct />
      </div>
      {/*  <div className="flex items-center space-x-3">
        <span>VAT</span> <Switcher1 />
      </div> */}
      <div className="hidden space-x-5 lg:flex">
        {links.map((link) => {
          return (
            <div key={link.id} className="group">
              <Link
                href={link.url}
                className="flex flex-col items-center space-y-1 group"
              >
                {link.Icon && <link.Icon />}
                <span>{link.name}</span>
              </Link>
            </div>
          );
        })}

        {isAuthenticated ? (
          <div>
            <Link
              href="/my-account/orders"
              className="flex flex-col items-center space-y-1 group"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 group-hover:text-primary hassan"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
              </span>
              <span>My Account</span>
            </Link>
          </div>
        ) : (
          <div>
            <Link
              href="/login"
              className="flex flex-col items-center space-y-1 group"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 group-hover:text-primary hassan"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
              </span>
              <span>Login</span>
            </Link>
          </div>
        )}
        <div className="relative">
          {cart.totalQuantity > 0 && (
            <div className="absolute flex items-center justify-center w-5 h-5 text-xs font-bold text-black rounded-full -top-2 right-2 bg-primary ">
              {cart.totalQuantity}
            </div>
          )}

          <button
            onClick={showcards}
            className="flex flex-col items-center space-y-1 group"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 group-hover:text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </span>
            <span>
              {cart.totalQuantity > 0 ? formatPrice(cart.totalPrice) : "Basket"}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopHeader;
